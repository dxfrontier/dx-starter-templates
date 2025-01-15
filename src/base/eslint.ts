import { TextFile } from 'projen';
import { JsiiProject } from '../jsii';
import { Config, ConfigStrategy } from './config';
import { BaseProject } from './project';

/**
 * Base class for implementing all relevant EsLint configuration.
 *
 * This class acts as a base for handling EsLint configuration within projects
 * that extend either `BaseProject` or `JsiiProject`. It determines the configuration
 * strategy to use based on whether Projen is being used.
 *
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 * @extends Config
 */
export class EsLintBaseConfig<T extends BaseProject | JsiiProject> extends Config<T> {
  protected rules: Record<string, string>;
  protected ignorePatterns: string[];

  constructor(project: T, useProjenApi: boolean) {
    super(project);

    const strategy: ConfigStrategy = useProjenApi
      ? new ProjenStandardEsLintBaseConfigStrategy()
      : new NonApiEsLintBaseConfigStrategy();
    this.setStrategy(strategy);

    this.rules = this.standardRules;
    this.ignorePatterns = this.standardIgnorePatterns;
  }

  /**
   * Gets the standard linting rules for the project.
   *
   * @returns A record of rule names and their corresponding configurations.
   */
  protected get standardRules(): Record<string, string> {
    return {
      'no-console': 'off',
      'require-atomic-updates': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/consistent-type-imports': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/class-literal-property-style': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
    };
  }

  /**
   * Gets the standard ignore patterns for the project.
   *
   * @returns An array of file or directory patterns to be ignored by the linter.
   */
  protected get standardIgnorePatterns(): string[] {
    return [];
  }

  /**
   * Gets the additional development dependencies required for configuration.
   *
   * @returns A list of package names with version specifications.
   */
  protected get additionalDevDependencies(): string[] {
    return [
      '@typescript-eslint/eslint-plugin@^8.20.0',
      '@typescript-eslint/parser@^8.20.0',
      'eslint@^9.18.0',
      'eslint-config-prettier@^10.0.1',
      'eslint-import-resolver-typescript@^3.7.0',
      'eslint-plugin-import@^2.31.0',
      'eslint-plugin-prettier@^5.2.1',
      'typescript-eslint@^8.20.0',
    ];
  }

  /**
   * Gets the additional npm scripts to be added to the project's configuration.
   *
   * @returns A record of script names and their corresponding commands.
   */
  protected get additionalScripts(): Record<string, string> {
    return {
      eslint: 'eslint .',
    };
  }

  /**
   * Gets the configuration file content.
   *
   * @returns An object where the key is the filename and the value is an array of file lines.
   */
  protected get configFile(): Record<string, string[]> {
    return {
      'eslint.config.mjs': [
        "import eslint from '@eslint/js';",
        "import tseslint from 'typescript-eslint';",
        '',
        'export default tseslint.config(',
        '  eslint.configs.recommended,',
        '  ...tseslint.configs.recommended,',
        '  ...tseslint.configs.stylistic,',
        '  {',
        '    rules: {',
        ...Object.entries(this.rules).map(([rule, value]: [string, string]): string => `      '${rule}': '${value}',`),
        '    },',
        '  },',
        '  {',
        `    ignores: [${this.ignorePatterns.map((path: string): string => `'${path}'`).join(', ')}],`,
        '  },',
        ');',
      ],
    };
  }

  /**
   * Adds custom linting rules to the project's configuration.
   *
   * @param rules - A record of rule names and their corresponding configurations.
   */
  public addRules(rules: Record<string, string>): void {
    this.rules = { ...this.rules, ...rules };
  }

  /**
   * Adds custom ignore patterns to the project's configuration.
   *
   * @param patterns - An array of file or directory patterns to be ignored.
   */
  public addIgnorePatterns(patterns: string[]): void {
    this.ignorePatterns = [...this.ignorePatterns, ...patterns];
  }

  /**
   * Retrieves all linting rules, including standard and custom ones.
   *
   * @returns A record of rule names and their corresponding configurations.
   */
  public getRules(): Record<string, string> {
    return this.rules;
  }

  /**
   * Retrieves all ignore patterns, including standard and custom ones.
   *
   * @returns An array of file or directory patterns that are ignored by the project.
   */
  public getIgnorePatterns(): string[] {
    return this.ignorePatterns;
  }

  /**
   * Creates the configuration file in the project directory.
   */
  public createConfig(): void {
    const filePath: string = Object.keys(this.configFile)[0];
    new TextFile(this.project, filePath, {
      lines: this.configFile[filePath],
    });
  }

  /**
   * Gets additional ignore patterns to be added to the project's ignore configuration.
   *
   * @returns A list of ignore patterns.
   */
  protected get additionalIgnorePatterns(): string[] {
    const filePath: string = Object.keys(this.configFile)[0];
    return [`/${filePath}`];
  }

  public override registerConfig(): void {
    this.project.npmConfig?.addDevDependencies(this.additionalDevDependencies);
    this.project.npmConfig?.addScripts(this.additionalScripts);
    this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
  }
}

/**
 * Configuration strategy for Projen standard API EsLint base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class ProjenStandardEsLintBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  applyConfig(_config: Config<T>): void {}
}

/**
 * Configuration strategy for Projen-tracked EsLint base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class NonApiEsLintBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  applyConfig(config: Config<T>): void {
    if (config instanceof EsLintBaseConfig) {
      config.createConfig();
    }
  }
}

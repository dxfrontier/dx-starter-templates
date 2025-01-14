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

    const strategy = useProjenApi
      ? new ProjenStandardEsLintBaseConfigStrategy()
      : new NonApiEsLintBaseConfigStrategy();
    this.setStrategy(strategy);

    this.rules = this.standardRules;
    this.ignorePatterns = this.standardIgnorePatterns;
  }

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

  protected get standardIgnorePatterns(): string[] {
    return [];
  }

  protected get additionalDevDependencies(): string[] {
    return [
      '@typescript-eslint/eslint-plugin@^8',
      '@typescript-eslint/parser@^8',
      'eslint@^9.17.0',
      'eslint-config-prettier@^9.1.0',
      'eslint-import-resolver-typescript@^3.6.3',
      'eslint-plugin-import@^2.31.0',
      'eslint-plugin-prettier@^5.2.1',
    ];
  }

  protected get additionalScripts(): Record<string, string> {
    return {
      eslint: 'eslint',
    }
  }

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
      ]
    };
  }

  public addRules(rules: Record<string, string>): void {
    this.rules = { ...this.rules, ...rules };
  }

  public addIgnorePatterns(patterns: string[]): void {
    this.ignorePatterns = [...this.ignorePatterns, ...patterns];
  }

  public getRules(): Record<string, string> {
    return this.rules;
  }

  public getIgnorePatterns(): string[] {
    return this.ignorePatterns;
  }

  public createConfig(): void {
    const filePath: string = Object.keys(this.configFile)[0];
    new TextFile(this.project, filePath, {
      lines: this.configFile[filePath],
    });
  }

  public override registerConfig(): void {
    this.project.npmConfig?.addDevDependencies(this.additionalDevDependencies);
    this.project.npmConfig?.addScripts(this.additionalScripts);
  }
}

/**
 * Configuration strategy for Projen standard API EsLint base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class ProjenStandardEsLintBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  applyConfig(_config: Config<T>): void { }
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
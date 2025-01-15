import { JsonFile, TextFile } from 'projen';
import { JsiiProject } from '../jsii';
import { Config, ConfigStrategy } from './config';
import { Settings } from './npm';
import { BaseProject } from './project';
import { TrailingComma } from 'projen/lib/javascript';

/**
 * Base class for implementing all relevant Prettier configuration.
 *
 * This class acts as a base for handling Prettier configuration within projects
 * that extend either `BaseProject` or `JsiiProject`. It determines the configuration
 * strategy to use based on whether Projen is being used.
 *
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 * @extends Config
 */
export class PrettierConfigBase<T extends BaseProject | JsiiProject> extends Config<T> {
  protected ignorePatterns: string[];

  constructor(project: T, useProjenApi: boolean) {
    super(project);

    const strategy: ConfigStrategy = useProjenApi
      ? new ProjenStandardPrettierConfigBaseStrategy()
      : new NonApiPrettierConfigBaseStrategy();
    this.setStrategy(strategy);

    this.ignorePatterns = this.standardIgnorePatterns;
  }

  /**
   * Gets the standard ignore patterns required for configuration.
   *
   * @returns A list of ignore patterns.
   */
  protected get standardIgnorePatterns(): string[] {
    return ['/.prettierignore', '/.prettierrc.json'];
  }

  /**
   * Gets the additional development dependencies required for configuration.
   *
   * @returns A list of package names with version specifications.
   */
  protected get additionalDevDependencies(): string[] {
    return ['prettier@^3.4.2'];
  }

  /**
   * Gets the additional npm scripts to be added to the project's configuration.
   *
   * @returns A record of script names and their corresponding commands.
   */
  protected get additionalScripts(): Record<string, string> {
    return {
      prettier: 'prettier . --write',
    };
  }

  /**
   * Gets the config file to be added to the project's configuration.
   *
   * @returns A record of the having the path to the file as key and the content as value.
   */
  protected get configFile(): Settings {
    return {
      '.prettierrc.json': {
        overrides: [
          {
            files: '*.*',
            options: {
              semi: true,
              trailingComma: TrailingComma.ALL,
              singleQuote: true,
              printWidth: 120,
              tabWidth: 2,
            },
          },
        ],
      },
    };
  }

  /**
   * Gets the ignore file to be added to the project's configuration.
   *
   * @returns A record of the having the path to the file as key and the content as value.
   */
  protected get ignoreFile(): Record<string, string[]> {
    return {
      '.prettierignore': [...this.ignorePatterns],
    };
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
   * Retrieves all ignore patterns, including standard and custom ones.
   *
   * @returns An array of file or directory patterns that are ignored by the project.
   */
  public getIgnorePatterns(): Settings {
    return this.ignorePatterns;
  }

  /**
   * Creates the configuration file in the project directory.
   */
  public createConfig(): void {
    const filePath: string = Object.keys(this.configFile)[0];
    new JsonFile(this.project, filePath, {
      obj: this.configFile[filePath],
    });
  }

  /**
   * Creates the ignore file in the project directory.
   */
  public createIgnore(): void {
    const filePath: string = Object.keys(this.ignoreFile)[0];
    new TextFile(this.project, filePath, {
      lines: this.ignoreFile[filePath],
    });
  }

  public override registerConfig(): void {
    this.project.npmConfig?.addDevDependencies(this.additionalDevDependencies);
    this.project.npmConfig?.addScripts(this.additionalScripts);
  }
}

/**
 * Configuration strategy for Projen standard API Prettier base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class ProjenStandardPrettierConfigBaseStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  applyConfig(_config: Config<T>): void {}
}

/**
 * Configuration strategy for Projen-tracked Prettier base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class NonApiPrettierConfigBaseStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  applyConfig(config: Config<T>): void {
    if (config instanceof PrettierConfigBase) {
      config.createConfig();
      config.createIgnore();
    }
  }
}

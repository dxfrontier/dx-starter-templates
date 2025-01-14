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
export class PrettierBaseConfig<T extends BaseProject | JsiiProject> extends Config<T> {
  protected ignorePatterns: string[];

  constructor(project: T, useProjenApi: boolean) {
    super(project);

    const strategy = useProjenApi
      ? new ProjenStandardPrettierBaseConfigStrategy()
      : new NonApiPrettierBaseConfigStrategy();
    this.setStrategy(strategy);

    this.ignorePatterns = this.standardIgnorePatterns;
  }

  protected get standardIgnorePatterns(): string[] {
    return ['/.prettierignore', '/.prettierrc.json'];
  }

  protected get additionalDevDependencies(): string[] {
    return ['prettier@^3.4.2'];
  }

  protected get additionalScripts(): Record<string, string> {
    return {
      prettier: 'prettier . --write',
    };
  }

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

  protected get ignoreFile(): Record<string, string[]> {
    return {
      '.prettierignore': [...this.ignorePatterns],
    };
  }

  public addIgnorePatterns(patterns: string[]): void {
    this.ignorePatterns = [...this.ignorePatterns, ...patterns];
  }

  public getIgnorePatterns(): Settings {
    return this.ignorePatterns;
  }

  public createConfig(): void {
    const filePath: string = Object.keys(this.configFile)[0];
    new JsonFile(this.project, filePath, {
      obj: this.configFile[filePath],
    });
  }

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
export class ProjenStandardPrettierBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  applyConfig(_config: Config<T>): void {}
}

/**
 * Configuration strategy for Projen-tracked Prettier base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class NonApiPrettierBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  applyConfig(config: Config<T>): void {
    if (config instanceof PrettierBaseConfig) {
      config.createConfig();
      config.createIgnore();
    }
  }
}

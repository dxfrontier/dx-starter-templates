import { TextFile } from 'projen';
import { JsiiProject } from '../jsii';
import { Config, ConfigStrategy } from './config';
import { BaseProject } from './project';

/**
 * Base class for implementing all relevant Husky configuration.
 *
 * This class acts as a base for handling Husky configuration within projects
 * that extend either `BaseProject` or `JsiiProject`. It determines the configuration
 * strategy to use based on whether Projen is being used.
 *
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 * @extends Config
 */
export class HuskyBaseConfig<T extends BaseProject | JsiiProject> extends Config<T> {
  constructor(project: T) {
    super(project);

    const strategy: ConfigStrategy = new NonApiHuskyBaseConfigStrategy();
    this.setStrategy(strategy);
  }

  protected get additionalDevDependencies(): string[] {
    return ['husky@^9.1.7'];
  }

  protected get additionalScripts(): Record<string, string> {
    return {
      prepare: 'husky || true',
    };
  }

  protected get configFile(): Record<string, string[]> {
    return {
      '.husky/commit-msg': ['npx --no-install commitlint --edit "$1"'],
      '.husky/pre-commit': ['npx lint-staged'],
    };
  }

  public createConfig(): void {
    for (const filePath in this.configFile) {
      new TextFile(this.project, filePath, {
        lines: this.configFile[filePath],
      });
    }
  }

  protected get additionalIgnorePatterns(): string[] {
    return ['/.husky/commit-msg', '/.husky/pre-commit'];
  }

  public override registerConfig(): void {
    this.project.npmConfig?.addDevDependencies(this.additionalDevDependencies);
    this.project.npmConfig?.addScripts(this.additionalScripts);
    this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
  }
}

/**
 * Configuration strategy for Projen-tracked Husky base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class NonApiHuskyBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  applyConfig(config: Config<T>): void {
    if (config instanceof HuskyBaseConfig) {
      config.createConfig();
    }
  }
}

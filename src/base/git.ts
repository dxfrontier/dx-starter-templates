import { JsiiProject } from '../jsii';
import { Config, ConfigStrategy } from './config';
import { BaseProject } from './project';

/**
 * Base class for implementing all relevant Git configuration.
 *
 * This class acts as a base for handling Git configuration within projects
 * that extend either `BaseProject` or `JsiiProject`. It determines the configuration
 * strategy to use based on whether Projen is being used.
 *
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 * @extends Config
 */
export class GitConfigBase<T extends BaseProject | JsiiProject> extends Config<T> {
  protected ignorePatterns: string[];

  constructor(project: T) {
    super(project);

    const strategy: ConfigStrategy = new GitConfigBaseStrategy();
    this.setStrategy(strategy);

    this.ignorePatterns = this.standardIgnorePatterns;
  }

  /**
   * Gets the standard ignore patterns required for configuration.
   *
   * @returns A list of ignore patterns.
   */
  protected get standardIgnorePatterns(): string[] {
    return [];
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
  public getIgnorePatterns(): string[] {
    return this.ignorePatterns;
  }
}

/**
 * Configuration strategy for Git base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class GitConfigBaseStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  applyConfig(config: Config<T>): void {
    if (config instanceof GitConfigBase) {
      for (const pattern of config.getIgnorePatterns()) {
        config.project.addGitIgnore(pattern);
      }
    }
  }
}

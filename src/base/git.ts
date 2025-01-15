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
export class GitBaseConfig<T extends BaseProject | JsiiProject> extends Config<T> {
  constructor(project: T) {
    super(project);

    const strategy: ConfigStrategy = new GitBaseConfigStrategy();
    this.setStrategy(strategy);
  }
}

/**
 * Configuration strategy for Git base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class GitBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  applyConfig(_config: Config<T>): void {}
}

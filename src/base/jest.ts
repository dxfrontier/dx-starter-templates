import { JsiiProject } from '../jsii';
import { Config, ConfigStrategy } from './config';
import { BaseProject } from './project';

/**
 * Base class for implementing all relevant Jest configuration.
 *
 * This class acts as a base for handling Jest configuration within projects
 * that extend either `BaseProject` or `JsiiProject`. It determines the configuration
 * strategy to use based on whether Projen is being used.
 *
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 * @extends Config
 */
export class JestConfigBase<T extends BaseProject | JsiiProject> extends Config<T> {
  constructor(project: T, useProjenApi: boolean) {
    super(project);

    const strategy: ConfigStrategy = useProjenApi
      ? new ProjenStandardJestConfigBaseStrategy()
      : new NonApiJestConfigBaseStrategy();
    this.setStrategy(strategy);
  }
}

/**
 * Configuration strategy for Projen standard API Jest base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class ProjenStandardJestConfigBaseStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  applyConfig(_config: Config<T>): void {}
}

/**
 * Configuration strategy for Projen-tracked Jest base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class NonApiJestConfigBaseStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  applyConfig(_config: Config<T>): void {}
}

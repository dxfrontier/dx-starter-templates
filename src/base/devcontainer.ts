import { JsiiProject } from '../jsii';
import { Config, ConfigStrategy } from './config';
import { BaseProject } from './project';

/**
 * Base class for implementing all relevant DevContainer configuration.
 * 
 * This class acts as a base for handling DevContainer configuration within projects
 * that extend either `BaseProject` or `JsiiProject`. It determines the configuration
 * strategy to use based on whether Projen is being used.
 * 
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 * @extends Config
 */
export class DevContainerBaseConfig<T extends BaseProject | JsiiProject> extends Config<T> {
  constructor(project: T, useProjen: boolean, useProjenApi: boolean) {
    super(project);

    const strategy = useProjen && useProjenApi
      ? new ProjenStandardDevContainerBaseConfigStrategy()
      : useProjen && !useProjenApi
        ? new ProjenTrackedDevContainerBaseConfigStrategy()
        : new NonProjenDevContainerBaseConfigStrategy();

    this.setStrategy(strategy);
  }

  public override preSynthesize(): void {
    super.preSynthesize();
  }

  public override postSynthesize(): void {
    super.postSynthesize();
  }
}

/**
 * Configuration strategy for Projen standard API DevContainer base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class ProjenStandardDevContainerBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  writeConfig(_config: Config<T>): void { }
}

/**
 * Configuration strategy for Projen-tracked DevContainer base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class ProjenTrackedDevContainerBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  writeConfig(_config: Config<T>): void { }
}

/**
  * Applies the Projen-based DevContainer configuration to the project.
  * @param project - The project instance.
  * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
  */
export class NonProjenDevContainerBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  writeConfig(_config: Config<T>): void {}
}

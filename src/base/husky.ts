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
  constructor(project: T, useProjen: boolean) {
    super(project);

    const strategy = useProjen
      ? new ProjenTrackedHuskyBaseConfigStrategy()
      : new NonProjenHuskyBaseConfigStrategy();

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
 * Configuration strategy for Projen-tracked Husky base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class ProjenTrackedHuskyBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  writeConfig(_config: Config<T>): void { }
}

/**
  * Applies the Projen-based Husky configuration to the project.
  * @param project - The project instance.
  * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
  */
export class NonProjenHuskyBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  writeConfig(_config: Config<T>): void { }
}

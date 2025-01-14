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
  constructor(project: T, useProjen: boolean, useProjenApi: boolean) {
    super(project);

    const strategy = useProjen && useProjenApi
      ? new ProjenStandardEsLintBaseConfigStrategy()
      : useProjen && !useProjenApi
        ? new ProjenTrackedEsLintBaseConfigStrategy()
        : new NonProjenEsLintBaseConfigStrategy();

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
 * Configuration strategy for Projen standard API EsLint base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class ProjenStandardEsLintBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  writeConfig(_config: Config<T>): void { }
}

/**
 * Configuration strategy for Projen-tracked EsLint base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class ProjenTrackedEsLintBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  writeConfig(_config: Config<T>): void { }
}

/**
  * Applies the Projen-based EsLint configuration to the project.
  * @param project - The project instance.
  * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
  */
export class NonProjenEsLintBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  writeConfig(_config: Config<T>): void {}
}

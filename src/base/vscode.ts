import { JsiiProject } from '../jsii';
import { Config, ConfigStrategy } from './config';
import { BaseProject } from './project';

/**
 * Base class for implementing all relevant VsCode configuration.
 * 
 * This class acts as a base for handling VsCode configuration within projects
 * that extend either `BaseProject` or `JsiiProject`. It determines the configuration
 * strategy to use based on whether Projen is being used.
 * 
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 * @extends Config
 */
export class VsCodeBaseConfig<T extends BaseProject | JsiiProject> extends Config<T> {
  constructor(project: T, useProjenApi: boolean) {
    super(project);

    const strategy = useProjenApi
      ? new ProjenStandardVsCodeBaseConfigStrategy()
      : new NonApiVsCodeBaseConfigStrategy();

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
 * Configuration strategy for Projen standard API VsCode base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class ProjenStandardVsCodeBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  applyConfig(_config: Config<T>): void { }
}

/**
 * Configuration strategy for Projen-tracked VsCode base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class NonApiVsCodeBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  applyConfig(_config: Config<T>): void {  }
}

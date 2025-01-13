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
  constructor(project: T, useProjen: boolean, useProjenApi: boolean) {
    super(project);

    const strategy = useProjen && useProjenApi
      ? new ProjenStandardVsCodeBaseConfigStrategy<T>()
      : useProjen && !useProjenApi
        ? new ProjenTrackedVsCodeBaseConfigStrategy<T>()
        : new NonProjenVsCodeBaseConfigStrategy<T>();

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
export class ProjenStandardVsCodeBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy<T> {
  applyConfig(_project: T): void {
    console.log('vsCode - use projen vsCode')
  }
}

/**
 * Configuration strategy for Projen-tracked VsCode base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class ProjenTrackedVsCodeBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy<T> {
  applyConfig(_project: T): void {
    console.log('vsCode - JsonFile')
  }
}

/**
  * Applies the Projen-based VsCode configuration to the project.
  * @param project - The project instance.
  * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
  */
export class NonProjenVsCodeBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy<T> {
  applyConfig(_project: T): void {
    console.log('vsCode - SampleFile')
  }
}

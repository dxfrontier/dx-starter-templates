import { JsiiProject } from '../jsii';
import { Config, ConfigStrategy } from './config';
import { BaseProject } from './project';

/**
 * Base class for implementing all relevant NPM configuration.
 * 
 * This class acts as a base for handling NPM configuration within projects
 * that extend either `BaseProject` or `JsiiProject`. It determines the configuration
 * strategy to use based on whether Projen is being used.
 * 
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 * @extends Config
 */
export class NpmBaseConfig<T extends BaseProject | JsiiProject> extends Config<T> {
  constructor(project: T, useProjen: boolean, useProjenApi: boolean) {
    super(project);

    const strategy = useProjen && useProjenApi
      ? new ProjenStandardNpmBaseConfigStrategy<T>()
      : useProjen && !useProjenApi
        ? new ProjenTrackedNpmBaseConfigStrategy<T>()
        : new NonProjenNpmBaseConfigStrategy<T>();

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
 * Configuration strategy for Projen standard API NPM base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class ProjenStandardNpmBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy<T> {
  applyConfig(_project: T): void {
    console.log('npm - use projen npm')
  }
}

/**
 * Configuration strategy for Projen-tracked NPM base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class ProjenTrackedNpmBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy<T> {
  applyConfig(_project: T): void {
    console.log('npm - JsonFile')
  }
}

/**
   * Applies the Projen-based NPM configuration to the project.
   * @param project - The project instance.
   * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
   */
export class NonProjenNpmBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy<T> {
  applyConfig(_project: T): void {
    console.log('npm - SampleFile')
  }
}

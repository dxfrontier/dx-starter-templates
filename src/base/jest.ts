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
export class JestBaseConfig<T extends BaseProject | JsiiProject> extends Config<T> {
  constructor(project: T, useProjen: boolean, useProjenApi: boolean) {
    super(project);

    const strategy = useProjen && useProjenApi
      ? new ProjenStandardJestBaseConfigStrategy<T>()
      : useProjen && !useProjenApi
        ? new ProjenTrackedJestBaseConfigStrategy<T>()
        : new NonProjenJestBaseConfigStrategy<T>();

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
 * Configuration strategy for Projen standard API Jest base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class ProjenStandardJestBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy<T> {
  applyConfig(_project: T): void {
    console.log('jest - use projen jest')
  }
}

/**
 * Configuration strategy for Projen-tracked Jest base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class ProjenTrackedJestBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy<T> {
  applyConfig(_project: T): void {
    console.log('jest - JsonFile')
  }
}

/**
 * Applies the Projen-based Jest configuration to the project.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class NonProjenJestBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy<T> {
  applyConfig(_project: T): void {
    console.log('jest - SampleFile')
  }
}

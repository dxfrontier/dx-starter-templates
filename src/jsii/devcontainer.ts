import { JsiiProject } from '.';
import { ConfigStrategy, DevContainerBaseConfig } from '../base';

/**
 * Implementing all relevant DevContainer configuration for the Jsii project.
 * @extends DevContainerBaseConfig
 */
export class DevContainerConfigJsii extends DevContainerBaseConfig<JsiiProject> {
  constructor(project: JsiiProject, useProjen: boolean, useProjenApi: boolean) {
    super(project);

    this.strategy = useProjen && useProjenApi
      ? new ProjenStandardConfigStrategy()
      : useProjen && !useProjenApi
        ? new ProjenTrackedConfigStrategy()
        : new NonProjenConfigStrategy();

    this.strategy.applyConfig(project);
  }
}

class ProjenStandardConfigStrategy implements ConfigStrategy<JsiiProject> {
  applyConfig(_project: JsiiProject): void {
    console.log('devContainer - use projen devContainer')
  }
}

class ProjenTrackedConfigStrategy implements ConfigStrategy<JsiiProject> {
  applyConfig(_project: JsiiProject): void {
    console.log('devContainer - JsonFile')
  }
}

class NonProjenConfigStrategy implements ConfigStrategy<JsiiProject> {
  applyConfig(_project: JsiiProject): void {
    console.log('devContainer - SampleFile')
  }
}
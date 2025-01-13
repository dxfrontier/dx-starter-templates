import { JsiiProject } from '.';
import { NonProjenDevContainerBaseConfigStrategy, DevContainerBaseConfig, ProjenStandardDevContainerBaseConfigStrategy, ProjenTrackedDevContainerBaseConfigStrategy } from '../base';

/**
 * Implementing all relevant DevContainer configuration for the Jsii project.
 * @extends DevContainerBaseConfig
 */
export class DevContainerConfigJsii extends DevContainerBaseConfig<JsiiProject> {
  constructor(project: JsiiProject, useProjen: boolean, useProjenApi: boolean) {
    super(project, useProjen, useProjenApi);

    const strategy = useProjen && useProjenApi
      ? new ProjenStandardConfigStrategy()
      : useProjen && !useProjenApi
        ? new ProjenTrackedConfigStrategy()
        : new NonProjenConfigStrategy();
    this.setStrategy(strategy);
    this.applyConfig();
  }
}

class ProjenStandardConfigStrategy extends ProjenStandardDevContainerBaseConfigStrategy<JsiiProject> {
  applyConfig(project: JsiiProject): void {
    super.applyConfig(project);
    console.log('devContainer - use projen devContainer - Jsii')
  }
}

class ProjenTrackedConfigStrategy extends ProjenTrackedDevContainerBaseConfigStrategy<JsiiProject> {
  applyConfig(project: JsiiProject): void {
    super.applyConfig(project);
    console.log('devContainer - JsonFile - Jsii')
  }
}

class NonProjenConfigStrategy extends NonProjenDevContainerBaseConfigStrategy<JsiiProject> {
  applyConfig(project: JsiiProject): void {
    super.applyConfig(project);
    console.log('devContainer - SampleFile - Jsii')
  }
}
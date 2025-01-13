import { JsiiProject } from '.';
import { NonProjenPrettierBaseConfigStrategy, PrettierBaseConfig, ProjenStandardPrettierBaseConfigStrategy, ProjenTrackedPrettierBaseConfigStrategy } from '../base';

/**
 * Implementing all relevant Prettier configuration for the Jsii project.
 * @extends PrettierBaseConfig
 */
export class PrettierConfigJsii extends PrettierBaseConfig<JsiiProject> {
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

class ProjenStandardConfigStrategy extends ProjenStandardPrettierBaseConfigStrategy<JsiiProject> {
  applyConfig(project: JsiiProject): void {
    super.applyConfig(project);
    console.log('prettier - use projen prettier - Jsii')
  }
}

class ProjenTrackedConfigStrategy extends ProjenTrackedPrettierBaseConfigStrategy<JsiiProject> {
  applyConfig(project: JsiiProject): void {
    super.applyConfig(project);
    console.log('prettier - JsonFile - Jsii')
  }
}

class NonProjenConfigStrategy extends NonProjenPrettierBaseConfigStrategy<JsiiProject> {
  applyConfig(project: JsiiProject): void {
    super.applyConfig(project);
    console.log('prettier - SampleFile - Jsii')
  }
}
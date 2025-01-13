import { JsiiProject } from '.';
import { NonProjenVsCodeBaseConfigStrategy, VsCodeBaseConfig, ProjenStandardVsCodeBaseConfigStrategy, ProjenTrackedVsCodeBaseConfigStrategy } from '../base';

/**
 * Implementing all relevant VsCode configuration for the Jsii project.
 * @extends VsCodeBaseConfig
 */
export class VsCodeConfigJsii extends VsCodeBaseConfig<JsiiProject> {
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

class ProjenStandardConfigStrategy extends ProjenStandardVsCodeBaseConfigStrategy<JsiiProject> {
  applyConfig(project: JsiiProject): void {
    super.applyConfig(project);
    console.log('vsCode - use projen vsCode - Jsii')
  }
}

class ProjenTrackedConfigStrategy extends ProjenTrackedVsCodeBaseConfigStrategy<JsiiProject> {
  applyConfig(project: JsiiProject): void {
    super.applyConfig(project);
    console.log('vsCode - JsonFile - Jsii')
  }
}

class NonProjenConfigStrategy extends NonProjenVsCodeBaseConfigStrategy<JsiiProject> {
  applyConfig(project: JsiiProject): void {
    super.applyConfig(project);
    console.log('vsCode - SampleFile - Jsii')
  }
}
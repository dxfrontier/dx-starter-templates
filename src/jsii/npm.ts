import { JsiiProject } from '.';
import { NonProjenNpmBaseConfigStrategy, NpmBaseConfig, ProjenStandardNpmBaseConfigStrategy, ProjenTrackedNpmBaseConfigStrategy } from '../base';

/**
 * Implementing all relevant NPM configuration for the Jsii project.
 * @extends NpmBaseConfig
 */
export class NpmConfigJsii extends NpmBaseConfig<JsiiProject> {
  constructor(project: JsiiProject, useProjen: boolean, useProjenApi: boolean) {
    super(project, useProjen, useProjenApi);

    this.strategy = useProjen && useProjenApi
      ? new ProjenStandardConfigStrategy()
      : useProjen && !useProjenApi
        ? new ProjenTrackedConfigStrategy()
        : new NonProjenConfigStrategy();
  }
}

class ProjenStandardConfigStrategy extends ProjenStandardNpmBaseConfigStrategy<JsiiProject> {
  applyConfig(project: JsiiProject): void {
    super.applyConfig(project);
    console.log('npm - use projen npm - Jsii')
  }
}

class ProjenTrackedConfigStrategy extends ProjenTrackedNpmBaseConfigStrategy<JsiiProject> {
  applyConfig(project: JsiiProject): void {
    super.applyConfig(project);
    console.log('npm - JsonFile - Jsii')
  }
}

class NonProjenConfigStrategy extends NonProjenNpmBaseConfigStrategy<JsiiProject> {
  applyConfig(project: JsiiProject): void {
    super.applyConfig(project);
    console.log('npm - SampleFile - Jsii')
  }
}
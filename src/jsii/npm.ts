import { JsiiProject } from '.';
import { NpmBaseConfig, ProjenTrackedNpmBaseConfigStrategy } from '../base';

/**
 * Implementing all relevant NPM configuration for the Jsii project.
 * @extends NpmBaseConfig
 */
export class NpmConfigJsii extends NpmBaseConfig<JsiiProject> {
  constructor(project: JsiiProject, useProjen: boolean) {
    super(project, useProjen);

    this.strategy = useProjen
      ? new ProjenTrackedConfigStrategy()
      : new NonProjenConfigStrategy();
  }
}

class ProjenTrackedConfigStrategy extends ProjenTrackedNpmBaseConfigStrategy<JsiiProject> {
  applyConfig(_project: JsiiProject): void {
    console.log('npm - JsonFile - Jsii')
  }
}

class NonProjenConfigStrategy extends ProjenTrackedNpmBaseConfigStrategy<JsiiProject> {
  applyConfig(_project: JsiiProject): void {
    console.log('npm - SampleFile - Jsii')
  }
}
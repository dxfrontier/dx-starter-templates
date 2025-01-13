import { JsiiProject } from '.';
import { NonProjenEsLintBaseConfigStrategy, EsLintBaseConfig, ProjenStandardEsLintBaseConfigStrategy, ProjenTrackedEsLintBaseConfigStrategy } from '../base';

/**
 * Implementing all relevant EsLint configuration for the Jsii project.
 * @extends EsLintBaseConfig
 */
export class EsLintConfigJsii extends EsLintBaseConfig<JsiiProject> {
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

class ProjenStandardConfigStrategy extends ProjenStandardEsLintBaseConfigStrategy<JsiiProject> {
  applyConfig(project: JsiiProject): void {
    super.applyConfig(project);
    console.log('esLint - use projen esLint - Jsii')
  }
}

class ProjenTrackedConfigStrategy extends ProjenTrackedEsLintBaseConfigStrategy<JsiiProject> {
  applyConfig(project: JsiiProject): void {
    super.applyConfig(project);
    console.log('esLint - JsonFile - Jsii')
  }
}

class NonProjenConfigStrategy extends NonProjenEsLintBaseConfigStrategy<JsiiProject> {
  applyConfig(project: JsiiProject): void {
    super.applyConfig(project);
    console.log('esLint - SampleFile - Jsii')
  }
}
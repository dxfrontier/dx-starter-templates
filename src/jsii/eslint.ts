import { JsiiProject } from '.';
import { ConfigStrategy, EsLintBaseConfig } from '../base';

/**
 * Implementing all relevant eslint configuration for the Jsii project.
 * @extends EsLintBaseConfig
 */
export class EsLintConfigJsii extends EsLintBaseConfig<JsiiProject> {
  protected strategy: ConfigStrategy<JsiiProject>;

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
    console.log('eslint - use projen eslint')
  }
}

class ProjenTrackedConfigStrategy implements ConfigStrategy<JsiiProject> {
  applyConfig(_project: JsiiProject): void {
    console.log('eslint - JsonFile')
  }
}

class NonProjenConfigStrategy implements ConfigStrategy<JsiiProject> {
  applyConfig(_project: JsiiProject): void {
    console.log('eslint - SampleFile')
  }
}
import { JsiiProject } from '.';
import { ConfigStrategy, JestBaseConfig } from '../base';

/**
 * Implementing all relevant Jest configuration for the Jsii project.
 * @extends JestBaseConfig
 */
export class JestConfigJsii extends JestBaseConfig<JsiiProject> {
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
    console.log('jest - use projen jest')
  }
}

class ProjenTrackedConfigStrategy implements ConfigStrategy<JsiiProject> {
  applyConfig(_project: JsiiProject): void {
    console.log('jest - JsonFile')
  }
}

class NonProjenConfigStrategy implements ConfigStrategy<JsiiProject> {
  applyConfig(_project: JsiiProject): void {
    console.log('jest - SampleFile')
  }
}
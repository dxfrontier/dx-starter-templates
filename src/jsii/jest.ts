import { JsiiProject } from '.';
import { NonProjenJestBaseConfigStrategy, JestBaseConfig, ProjenStandardJestBaseConfigStrategy, ProjenTrackedJestBaseConfigStrategy } from '../base';

/**
 * Implementing all relevant Jest configuration for the Jsii project.
 * @extends JestBaseConfig
 */
export class JestConfigJsii extends JestBaseConfig<JsiiProject> {
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

class ProjenStandardConfigStrategy extends ProjenStandardJestBaseConfigStrategy<JsiiProject> {
  applyConfig(project: JsiiProject): void {
    super.applyConfig(project);
    console.log('jest - use projen jest - Jsii')
  }
}

class ProjenTrackedConfigStrategy extends ProjenTrackedJestBaseConfigStrategy<JsiiProject> {
  applyConfig(project: JsiiProject): void {
    super.applyConfig(project);
    console.log('jest - JsonFile - Jsii')
  }
}

class NonProjenConfigStrategy extends NonProjenJestBaseConfigStrategy<JsiiProject> {
  applyConfig(project: JsiiProject): void {
    super.applyConfig(project);
    console.log('jest - SampleFile - Jsii')
  }
}
import { JsiiProject } from '.';
import { ConfigStrategy, VsCodeBaseConfig } from '../base';

/**
 * Implementing all relevant VS Code configuration for the Jsii project.
 * @extends VsCodeBaseConfig
 */
export class VsCodeConfigJsii extends VsCodeBaseConfig<JsiiProject> {
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
    console.log('vscode - use projen vscode')
  }
}

class ProjenTrackedConfigStrategy implements ConfigStrategy<JsiiProject> {
  applyConfig(_project: JsiiProject): void {
    console.log('vscode - JsonFile')
  }
}

class NonProjenConfigStrategy implements ConfigStrategy<JsiiProject> {
  applyConfig(_project: JsiiProject): void {
    console.log('vscode - SampleFile')
  }
}
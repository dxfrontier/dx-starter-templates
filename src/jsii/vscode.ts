import { JsiiProject } from '.';
import { NonProjenVsCodeBaseConfigStrategy, VsCodeBaseConfig, ProjenStandardVsCodeBaseConfigStrategy, ProjenTrackedVsCodeBaseConfigStrategy, Config } from '../base';

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
    
  }
}

class ProjenStandardConfigStrategy extends ProjenStandardVsCodeBaseConfigStrategy<JsiiProject> {
  writeConfig(config: Config<JsiiProject>): void {
    super.writeConfig(config);
  }
}

class ProjenTrackedConfigStrategy extends ProjenTrackedVsCodeBaseConfigStrategy<JsiiProject> {
  writeConfig(config: Config<JsiiProject>): void {
    super.writeConfig(config);
  }
}

class NonProjenConfigStrategy extends NonProjenVsCodeBaseConfigStrategy<JsiiProject> {
  writeConfig(config: Config<JsiiProject>): void {
    super.writeConfig(config);
  }
}
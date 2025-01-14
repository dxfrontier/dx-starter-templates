import { JsiiProject } from '.';
import { NonProjenDevContainerBaseConfigStrategy, DevContainerBaseConfig, ProjenStandardDevContainerBaseConfigStrategy, ProjenTrackedDevContainerBaseConfigStrategy, Config } from '../base';

/**
 * Implementing all relevant DevContainer configuration for the Jsii project.
 * @extends DevContainerBaseConfig
 */
export class DevContainerConfigJsii extends DevContainerBaseConfig<JsiiProject> {
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

class ProjenStandardConfigStrategy extends ProjenStandardDevContainerBaseConfigStrategy<JsiiProject> {
  writeConfig(config: Config<JsiiProject>): void {
    super.writeConfig(config);
  }
}

class ProjenTrackedConfigStrategy extends ProjenTrackedDevContainerBaseConfigStrategy<JsiiProject> {
  writeConfig(config: Config<JsiiProject>): void {
    super.writeConfig(config);
  }
}

class NonProjenConfigStrategy extends NonProjenDevContainerBaseConfigStrategy<JsiiProject> {
  writeConfig(config: Config<JsiiProject>): void {
    super.writeConfig(config);
  }
}
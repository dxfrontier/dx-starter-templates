import { JsiiProject } from '.';
import {
  DevContainerBaseConfig,
  ProjenStandardDevContainerBaseConfigStrategy,
  NonApiDevContainerBaseConfigStrategy,
  Config,
  ConfigStrategy,
} from '../base';

/**
 * Implementing all relevant DevContainer configuration for the Jsii project.
 * @extends DevContainerBaseConfig
 */
export class DevContainerConfigJsii extends DevContainerBaseConfig<JsiiProject> {
  constructor(project: JsiiProject, useProjenApi: boolean) {
    super(project, useProjenApi);

    const strategy: ConfigStrategy = useProjenApi ? new ProjenStandardConfigStrategy() : new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }
}

class ProjenStandardConfigStrategy extends ProjenStandardDevContainerBaseConfigStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

class NonApiConfigStrategy extends NonApiDevContainerBaseConfigStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

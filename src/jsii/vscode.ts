import { JsiiProject } from '.';
import {
  VsCodeBaseConfig,
  ProjenStandardVsCodeBaseConfigStrategy,
  NonApiVsCodeBaseConfigStrategy,
  Config,
  ConfigStrategy,
} from '../base';

/**
 * Implementing all relevant VsCode configuration for the Jsii project.
 * @extends VsCodeBaseConfig
 */
export class VsCodeConfigJsii extends VsCodeBaseConfig<JsiiProject> {
  constructor(project: JsiiProject, useProjenApi: boolean) {
    super(project, useProjenApi);

    const strategy: ConfigStrategy = useProjenApi ? new ProjenStandardConfigStrategy() : new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }
}

class ProjenStandardConfigStrategy extends ProjenStandardVsCodeBaseConfigStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

class NonApiConfigStrategy extends NonApiVsCodeBaseConfigStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

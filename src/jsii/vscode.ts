import { JsiiProject } from '.';
import {
  VsCodeConfigBase,
  ProjenStandardVsCodeConfigBaseStrategy,
  NonApiVsCodeConfigBaseStrategy,
  Config,
  ConfigStrategy,
} from '../base';

/**
 * Implementing all relevant VsCode configuration for the Jsii project.
 */
export class VsCodeConfigJsii extends VsCodeConfigBase<JsiiProject> {
  constructor(project: JsiiProject, useProjenApi: boolean) {
    super(project, useProjenApi);

    const strategy: ConfigStrategy = useProjenApi ? new ProjenStandardConfigStrategy() : new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }
}

class ProjenStandardConfigStrategy extends ProjenStandardVsCodeConfigBaseStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

class NonApiConfigStrategy extends NonApiVsCodeConfigBaseStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

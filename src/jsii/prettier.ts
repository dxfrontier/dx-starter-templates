import { JsiiProject } from '.';
import {
  Config,
  PrettierConfigBase,
  ProjenStandardPrettierConfigBaseStrategy,
  NonApiPrettierConfigBaseStrategy,
  ConfigStrategy,
} from '../base';

/**
 * Implementing all relevant Prettier configuration for the Jsii project.
 */
export class PrettierConfigJsii extends PrettierConfigBase<JsiiProject> {
  constructor(project: JsiiProject, useProjenApi: boolean) {
    super(project, useProjenApi);

    const strategy: ConfigStrategy = useProjenApi ? new ProjenStandardConfigStrategy() : new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }
}

class ProjenStandardConfigStrategy extends ProjenStandardPrettierConfigBaseStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

class NonApiConfigStrategy extends NonApiPrettierConfigBaseStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

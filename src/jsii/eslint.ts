import { JsiiProject } from '.';
import {
  EsLintConfigBase,
  ProjenStandardEsLintConfigBaseStrategy,
  NonApiEsLintConfigBaseStrategy,
  Config,
  ConfigStrategy,
} from '../base';

/**
 * Implementing all relevant EsLint configuration for the Jsii project.
 */
export class EsLintConfigJsii extends EsLintConfigBase<JsiiProject> {
  constructor(project: JsiiProject, useProjenApi: boolean) {
    super(project, useProjenApi);

    const strategy: ConfigStrategy = useProjenApi ? new ProjenStandardConfigStrategy() : new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }
}

class ProjenStandardConfigStrategy extends ProjenStandardEsLintConfigBaseStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

class NonApiConfigStrategy extends NonApiEsLintConfigBaseStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

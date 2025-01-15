import { JsiiProject } from '.';
import {
  EsLintBaseConfig,
  ProjenStandardEsLintBaseConfigStrategy,
  NonApiEsLintBaseConfigStrategy,
  Config,
  ConfigStrategy,
} from '../base';

/**
 * Implementing all relevant EsLint configuration for the Jsii project.
 */
export class EsLintConfigJsii extends EsLintBaseConfig<JsiiProject> {
  constructor(project: JsiiProject, useProjenApi: boolean) {
    super(project, useProjenApi);

    const strategy: ConfigStrategy = useProjenApi ? new ProjenStandardConfigStrategy() : new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }
}

class ProjenStandardConfigStrategy extends ProjenStandardEsLintBaseConfigStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

class NonApiConfigStrategy extends NonApiEsLintBaseConfigStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

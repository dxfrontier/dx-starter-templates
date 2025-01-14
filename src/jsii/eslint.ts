import { JsiiProject } from '.';
import { NonProjenEsLintBaseConfigStrategy, EsLintBaseConfig, ProjenStandardEsLintBaseConfigStrategy, ProjenTrackedEsLintBaseConfigStrategy, Config } from '../base';

/**
 * Implementing all relevant EsLint configuration for the Jsii project.
 * @extends EsLintBaseConfig
 */
export class EsLintConfigJsii extends EsLintBaseConfig<JsiiProject> {
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

class ProjenStandardConfigStrategy extends ProjenStandardEsLintBaseConfigStrategy<JsiiProject> {
  writeConfig(config: Config<JsiiProject>): void {
    super.writeConfig(config);
  }
}

class ProjenTrackedConfigStrategy extends ProjenTrackedEsLintBaseConfigStrategy<JsiiProject> {
  writeConfig(config: Config<JsiiProject>): void {
    super.writeConfig(config);
  }
}

class NonProjenConfigStrategy extends NonProjenEsLintBaseConfigStrategy<JsiiProject> {
  writeConfig(config: Config<JsiiProject>): void {
    super.writeConfig(config);
  }
}
import { JsiiProject } from '.';
import { Config, PrettierBaseConfig, ProjenStandardPrettierBaseConfigStrategy, NonApiPrettierBaseConfigStrategy } from '../base';

/**
 * Implementing all relevant Prettier configuration for the Jsii project.
 * @extends PrettierBaseConfig
 */
export class PrettierConfigJsii extends PrettierBaseConfig<JsiiProject> {
  constructor(project: JsiiProject, useProjenApi: boolean) {
    super(project, useProjenApi);

    const strategy = useProjenApi
      ? new ProjenStandardConfigStrategy()
      : new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }
}

class ProjenStandardConfigStrategy extends ProjenStandardPrettierBaseConfigStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

class NonApiConfigStrategy extends NonApiPrettierBaseConfigStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}
import { JsiiProject } from '.';
import { Config, NonProjenPrettierBaseConfigStrategy, PrettierBaseConfig, ProjenStandardPrettierBaseConfigStrategy, ProjenTrackedPrettierBaseConfigStrategy } from '../base';

/**
 * Implementing all relevant Prettier configuration for the Jsii project.
 * @extends PrettierBaseConfig
 */
export class PrettierConfigJsii extends PrettierBaseConfig<JsiiProject> {
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

class ProjenStandardConfigStrategy extends ProjenStandardPrettierBaseConfigStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

class ProjenTrackedConfigStrategy extends ProjenTrackedPrettierBaseConfigStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

class NonProjenConfigStrategy extends NonProjenPrettierBaseConfigStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}
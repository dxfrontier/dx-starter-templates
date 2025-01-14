import { JsiiProject } from '.';
import { NonProjenJestBaseConfigStrategy, JestBaseConfig, ProjenStandardJestBaseConfigStrategy, ProjenTrackedJestBaseConfigStrategy, Config } from '../base';

/**
 * Implementing all relevant Jest configuration for the Jsii project.
 * @extends JestBaseConfig
 */
export class JestConfigJsii extends JestBaseConfig<JsiiProject> {
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

class ProjenStandardConfigStrategy extends ProjenStandardJestBaseConfigStrategy<JsiiProject> {
  writeConfig(config: Config<JsiiProject>): void {
    super.writeConfig(config);
  }
}

class ProjenTrackedConfigStrategy extends ProjenTrackedJestBaseConfigStrategy<JsiiProject> {
  writeConfig(config: Config<JsiiProject>): void {
    super.writeConfig(config);
  }
}

class NonProjenConfigStrategy extends NonProjenJestBaseConfigStrategy<JsiiProject> {
  writeConfig(config: Config<JsiiProject>): void {
    super.writeConfig(config);
  }
}
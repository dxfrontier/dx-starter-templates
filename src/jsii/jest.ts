import { JsiiProject } from '.';
import { JestBaseConfig, ProjenStandardJestBaseConfigStrategy, NonApiJestBaseConfigStrategy, Config } from '../base';

/**
 * Implementing all relevant Jest configuration for the Jsii project.
 * @extends JestBaseConfig
 */
export class JestConfigJsii extends JestBaseConfig<JsiiProject> {
  constructor(project: JsiiProject, useProjenApi: boolean) {
    super(project, useProjenApi);

    const strategy = useProjenApi
      ? new ProjenStandardConfigStrategy()
      : new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }
}

class ProjenStandardConfigStrategy extends ProjenStandardJestBaseConfigStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

class NonApiConfigStrategy extends NonApiJestBaseConfigStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}
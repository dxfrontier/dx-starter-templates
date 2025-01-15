import { JsiiProject } from '.';
import {
  JestConfigBase,
  ProjenStandardJestConfigBaseStrategy,
  NonApiJestConfigBaseStrategy,
  Config,
  ConfigStrategy,
} from '../base';

/**
 * Implementing all relevant Jest configuration for the Jsii project.
 */
export class JestConfigJsii extends JestConfigBase<JsiiProject> {
  constructor(project: JsiiProject, useProjenApi: boolean) {
    super(project, useProjenApi);

    const strategy: ConfigStrategy = useProjenApi ? new ProjenStandardConfigStrategy() : new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }
}

class ProjenStandardConfigStrategy extends ProjenStandardJestConfigBaseStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

class NonApiConfigStrategy extends NonApiJestConfigBaseStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

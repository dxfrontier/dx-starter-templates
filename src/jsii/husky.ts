import { JsiiProject } from '.';
import { Config, ConfigStrategy, HuskyBaseConfig, NonApiHuskyBaseConfigStrategy } from '../base';

/**
 * Implementing all relevant Husky configuration for the Jsii project.
 */
export class HuskyConfigJsii extends HuskyBaseConfig<JsiiProject> {
  constructor(project: JsiiProject) {
    super(project);

    const strategy: ConfigStrategy = new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }
}

class NonApiConfigStrategy extends NonApiHuskyBaseConfigStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

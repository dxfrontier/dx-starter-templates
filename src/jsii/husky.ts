import { JsiiProject } from '.';
import { Config, ConfigStrategy, HuskyConfigBase, NonApiHuskyConfigBaseStrategy } from '../base';

/**
 * Implementing all relevant Husky configuration for the Jsii project.
 */
export class HuskyConfigJsii extends HuskyConfigBase<JsiiProject> {
  constructor(project: JsiiProject) {
    super(project);

    const strategy: ConfigStrategy = new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }
}

class NonApiConfigStrategy extends NonApiHuskyConfigBaseStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

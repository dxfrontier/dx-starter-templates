import { JsiiProject } from '.';
import { Config, HuskyBaseConfig, NonApiHuskyBaseConfigStrategy } from '../base';

/**
 * Implementing all relevant Husky configuration for the Jsii project.
 * @extends HuskyBaseConfig
 */
export class HuskyConfigJsii extends HuskyBaseConfig<JsiiProject> {
  constructor(project: JsiiProject) {
    super(project);

    const strategy = new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }
}

class NonApiConfigStrategy extends NonApiHuskyBaseConfigStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

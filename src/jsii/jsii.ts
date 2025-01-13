import { JsiiProject } from '.';
import { Config } from '../base';

/**
 * Implementing all relevant Jsii configuration for the Jsii project.
 * @extends JsiiBaseConfig
 */
export class JsiiConfigJsii extends Config<JsiiProject> {
  constructor(project: JsiiProject) {
    super(project);

    const strategy = new ConfigStrategy();
    this.setStrategy(strategy);
    this.applyConfig();
  }
}

class ConfigStrategy implements ConfigStrategy {
  applyConfig(_project: JsiiProject): void {
    console.log('jsii - Jsii')
  }
}
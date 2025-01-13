import { JsiiProject } from '.';
import { GitBaseConfig, GitBaseConfigStrategy } from '../base';

/**
 * Implementing all relevant Git configuration for the Jsii project.
 * @extends GitBaseConfig
 */
export class GitConfigJsii extends GitBaseConfig<JsiiProject> {
  constructor(project: JsiiProject) {
    super(project);

    const strategy = new ConfigStrategy();
    this.setStrategy(strategy);
    this.applyConfig();
  }
}

class ConfigStrategy extends GitBaseConfigStrategy<JsiiProject> {
  applyConfig(project: JsiiProject): void {
    super.applyConfig(project);
    console.log('git - Jsii')
  }
}
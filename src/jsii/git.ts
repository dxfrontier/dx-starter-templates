import { JsiiProject } from '.';
import { Config, GitBaseConfig, GitBaseConfigStrategy } from '../base';

/**
 * Implementing all relevant Git configuration for the Jsii project.
 * @extends GitBaseConfig
 */
export class GitConfigJsii extends GitBaseConfig<JsiiProject> {
  constructor(project: JsiiProject) {
    super(project);

    const strategy = new ConfigStrategy();
    this.setStrategy(strategy);
    
  }
}

class ConfigStrategy extends GitBaseConfigStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}
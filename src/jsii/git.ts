import { JsiiProject } from '.';
import { Config, ConfigStrategy, GitBaseConfig, GitBaseConfigStrategy } from '../base';

/**
 * Implementing all relevant Git configuration for the Jsii project.
 * @extends GitBaseConfig
 */
export class GitConfigJsii extends GitBaseConfig<JsiiProject> {
  constructor(project: JsiiProject) {
    super(project);

    const strategy: ConfigStrategy = new StandardConfigStrategy();
    this.setStrategy(strategy);
  }
}

class StandardConfigStrategy extends GitBaseConfigStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

import { JsiiProject } from '.';
import { Config, ConfigStrategy, GitConfigBase, GitConfigBaseStrategy } from '../base';

/**
 * Implementing all relevant Git configuration for the Jsii project.
 */
export class GitConfigJsii extends GitConfigBase<JsiiProject> {
  constructor(project: JsiiProject) {
    super(project);

    const strategy: ConfigStrategy = new StandardConfigStrategy();
    this.setStrategy(strategy);
  }
}

class StandardConfigStrategy extends GitConfigBaseStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

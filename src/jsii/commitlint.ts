import { JsiiProject } from '.';
import { CommitLintBaseConfig, Config, ConfigStrategy, NonApiCommitLintBaseConfigStrategy } from '../base';

/**
 * Implementing all relevant CommitLint configuration for the Jsii project.
 * @extends CommitLintBaseConfig
 */
export class CommitLintConfigJsii extends CommitLintBaseConfig<JsiiProject> {
  constructor(project: JsiiProject) {
    super(project);

    const strategy: ConfigStrategy = new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }
}

class NonApiConfigStrategy extends NonApiCommitLintBaseConfigStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

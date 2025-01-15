import { JsiiProject } from '.';
import { CommitLintConfigBase, Config, ConfigStrategy, NonApiCommitLintConfigBaseStrategy } from '../base';

/**
 * Implementing all relevant CommitLint configuration for the Jsii project.
 */
export class CommitLintConfigJsii extends CommitLintConfigBase<JsiiProject> {
  constructor(project: JsiiProject) {
    super(project);

    const strategy: ConfigStrategy = new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }
}

class NonApiConfigStrategy extends NonApiCommitLintConfigBaseStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

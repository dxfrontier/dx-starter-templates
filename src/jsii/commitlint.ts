import { JsiiProject } from '.';
import { CommitLintBaseConfig, Config, NonProjenCommitLintBaseConfigStrategy, ProjenTrackedCommitLintBaseConfigStrategy } from '../base';

/**
 * Implementing all relevant CommitLint configuration for the Jsii project.
 * @extends CommitLintBaseConfig
 */
export class CommitLintConfigJsii extends CommitLintBaseConfig<JsiiProject> {
  constructor(project: JsiiProject, useProjen: boolean) {
    super(project, useProjen);

    const strategy = useProjen
      ? new ProjenTrackedConfigStrategy()
      : new NonProjenConfigStrategy();
    this.setStrategy(strategy);
    
  }
}

class ProjenTrackedConfigStrategy extends ProjenTrackedCommitLintBaseConfigStrategy<JsiiProject> {
  writeConfig(config: Config<JsiiProject>): void {
    super.writeConfig(config);
  }
}

class NonProjenConfigStrategy extends NonProjenCommitLintBaseConfigStrategy<JsiiProject> {
  writeConfig(config: Config<JsiiProject>): void {
    super.writeConfig(config);
  }
}
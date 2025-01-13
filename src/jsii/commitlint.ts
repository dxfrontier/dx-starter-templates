import { JsiiProject } from '.';
import { CommitLintBaseConfig, NonProjenCommitLintBaseConfigStrategy, ProjenTrackedCommitLintBaseConfigStrategy } from '../base';

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
    this.applyConfig();
  }
}

class ProjenTrackedConfigStrategy extends ProjenTrackedCommitLintBaseConfigStrategy<JsiiProject> {
  applyConfig(project: JsiiProject): void {
    super.applyConfig(project);
    console.log('commitlint - JsonFile - Jsii')
  }
}

class NonProjenConfigStrategy extends NonProjenCommitLintBaseConfigStrategy<JsiiProject> {
  applyConfig(project: JsiiProject): void {
    super.applyConfig(project);
    console.log('commitlint - SampleFile - Jsii')
  }
}
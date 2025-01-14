import { GitHubActionProject } from '.';
import { CommitLintBaseConfig, Config, NonApiCommitLintBaseConfigStrategy } from '../base';

/**
 * Implementing all relevant CommitLint configuration for the GitHubAction project.
 * @extends CommitLintBaseConfig
 */
export class CommitLintConfigGitHubAction extends CommitLintBaseConfig<GitHubActionProject> {
  constructor(project: GitHubActionProject) {
    super(project);

    const strategy = new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }
}

class NonApiConfigStrategy extends NonApiCommitLintBaseConfigStrategy<GitHubActionProject> {
  applyConfig(config: Config<GitHubActionProject>): void {
    super.applyConfig(config);
  }
}

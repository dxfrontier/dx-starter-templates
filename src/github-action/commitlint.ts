import { GitHubActionProject } from '.';
import { CommitLintConfigBase, Config, ConfigStrategy, NonApiCommitLintConfigBaseStrategy, Settings } from '../base';

/**
 * Implementing all relevant CommitLint configuration for the GitHubAction project.
 */
export class CommitLintConfigGitHubAction extends CommitLintConfigBase<GitHubActionProject> {
  constructor(project: GitHubActionProject) {
    super(project);

    const strategy: ConfigStrategy = new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }

  protected get additionalSettings(): Settings {
    return {
      'lint-staged': {
        '**/*.{yml,yaml}': ['npm run prettier'],
      },
    };
  }
}

class NonApiConfigStrategy extends NonApiCommitLintConfigBaseStrategy<GitHubActionProject> {
  applyConfig(config: Config<GitHubActionProject>): void {
    super.applyConfig(config);
  }
}

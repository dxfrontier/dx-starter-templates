import { GitHubActionProject } from '.';
import { GitBaseConfig, GitBaseConfigStrategy } from '../base';

/**
 * Implementing all relevant Git configuration for the GitHubAction project.
 * @extends GitBaseConfig
 */
export class GitConfigGitHubAction extends GitBaseConfig<GitHubActionProject> {
  constructor(project: GitHubActionProject) {
    super(project);

    const strategy = new ConfigStrategy();
    this.setStrategy(strategy);
  }
}

class ConfigStrategy extends GitBaseConfigStrategy<GitHubActionProject> {
  registerConfig(project: GitHubActionProject): void {
    super.registerConfig(project);
    console.log('git - GitHubAction');
  }
}

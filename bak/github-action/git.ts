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
  applyConfig(project: GitHubActionProject): void {
    super.applyConfig(project);
    console.log('git - GitHubAction')
  }
}
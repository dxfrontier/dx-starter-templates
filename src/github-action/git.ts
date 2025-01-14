import { GitHubActionProject } from '.';
import { Config, GitBaseConfig, GitBaseConfigStrategy } from '../base';

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
  applyConfig(config: Config<GitHubActionProject>): void {
    super.applyConfig(config);
  }
}
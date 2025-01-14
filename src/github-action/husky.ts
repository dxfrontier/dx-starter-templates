import { GitHubActionProject } from '.';
import { Config, HuskyBaseConfig, NonApiHuskyBaseConfigStrategy } from '../base';

/**
 * Implementing all relevant Husky configuration for the GitHubAction project.
 * @extends HuskyBaseConfig
 */
export class HuskyConfigGitHubAction extends HuskyBaseConfig<GitHubActionProject> {
  constructor(project: GitHubActionProject) {
    super(project);

    const strategy = new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }
}

class NonApiConfigStrategy extends NonApiHuskyBaseConfigStrategy<GitHubActionProject> {
  applyConfig(config: Config<GitHubActionProject>): void {
    super.applyConfig(config);
  }
}

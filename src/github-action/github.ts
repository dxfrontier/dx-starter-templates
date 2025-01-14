import { GitHubActionProject } from '.';
import {
  GitHubBaseConfig,
  ProjenStandardGitHubBaseConfigStrategy,
  NonApiGitHubBaseConfigStrategy,
  Config,
} from '../base';

/**
 * Implementing all relevant GitHub configuration for the GitHubAction project.
 * @extends GitHubBaseConfig
 */
export class GitHubConfigGitHubAction extends GitHubBaseConfig<GitHubActionProject> {
  constructor(project: GitHubActionProject, useProjenApi: boolean) {
    super(project, useProjenApi);

    const strategy = useProjenApi ? new ProjenStandardConfigStrategy() : new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }
}

class ProjenStandardConfigStrategy extends ProjenStandardGitHubBaseConfigStrategy<GitHubActionProject> {
  applyConfig(config: Config<GitHubActionProject>): void {
    super.applyConfig(config);
  }
}

class NonApiConfigStrategy extends NonApiGitHubBaseConfigStrategy<GitHubActionProject> {
  applyConfig(config: Config<GitHubActionProject>): void {
    super.applyConfig(config);
  }
}

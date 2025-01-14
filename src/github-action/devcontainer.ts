import { GitHubActionProject } from '.';
import { DevContainerBaseConfig, ProjenStandardDevContainerBaseConfigStrategy, NonApiDevContainerBaseConfigStrategy, Config } from '../base';

/**
 * Implementing all relevant DevContainer configuration for the GitHubAction project.
 * @extends DevContainerBaseConfig
 */
export class DevContainerConfigGitHubAction extends DevContainerBaseConfig<GitHubActionProject> {
  constructor(project: GitHubActionProject, useProjenApi: boolean) {
    super(project, useProjenApi);

    const strategy = useProjenApi
      ? new ProjenStandardConfigStrategy()
      : new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }
}

class ProjenStandardConfigStrategy extends ProjenStandardDevContainerBaseConfigStrategy<GitHubActionProject> {
  applyConfig(config: Config<GitHubActionProject>): void {
    super.applyConfig(config);
  }
}

class NonApiConfigStrategy extends NonApiDevContainerBaseConfigStrategy<GitHubActionProject> {
  applyConfig(config: Config<GitHubActionProject>): void {
    super.applyConfig(config);
  }
}
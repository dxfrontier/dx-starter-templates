import { GitHubActionProject } from '.';
import { VsCodeBaseConfig, ProjenStandardVsCodeBaseConfigStrategy, NonApiVsCodeBaseConfigStrategy, Config } from '../base';

/**
 * Implementing all relevant VsCode configuration for the GitHubAction project.
 * @extends VsCodeBaseConfig
 */
export class VsCodeConfigGitHubAction extends VsCodeBaseConfig<GitHubActionProject> {
  constructor(project: GitHubActionProject, useProjenApi: boolean) {
    super(project, useProjenApi);

    const strategy = useProjenApi
      ? new ProjenStandardConfigStrategy()
      : new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }
}

class ProjenStandardConfigStrategy extends ProjenStandardVsCodeBaseConfigStrategy<GitHubActionProject> {
  applyConfig(config: Config<GitHubActionProject>): void {
    super.applyConfig(config);
  }
}

class NonApiConfigStrategy extends NonApiVsCodeBaseConfigStrategy<GitHubActionProject> {
  applyConfig(config: Config<GitHubActionProject>): void {
    super.applyConfig(config);
  }
}

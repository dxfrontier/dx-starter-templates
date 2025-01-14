import { GitHubActionProject } from '.';
import { EsLintBaseConfig, ProjenStandardEsLintBaseConfigStrategy, NonApiEsLintBaseConfigStrategy, Config } from '../base';

/**
 * Implementing all relevant EsLint configuration for the GitHubAction project.
 * @extends EsLintBaseConfig
 */
export class EsLintConfigGitHubAction extends EsLintBaseConfig<GitHubActionProject> {
  constructor(project: GitHubActionProject, useProjenApi: boolean) {
    super(project, useProjenApi);

    const strategy = useProjenApi
      ? new ProjenStandardConfigStrategy()
      : new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }
}

class ProjenStandardConfigStrategy extends ProjenStandardEsLintBaseConfigStrategy<GitHubActionProject> {
  applyConfig(config: Config<GitHubActionProject>): void {
    super.applyConfig(config);
  }
}

class NonApiConfigStrategy extends NonApiEsLintBaseConfigStrategy<GitHubActionProject> {
  applyConfig(config: Config<GitHubActionProject>): void {
    super.applyConfig(config);
  }
}
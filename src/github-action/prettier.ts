import { GitHubActionProject } from '.';
import {
  Config,
  PrettierBaseConfig,
  ProjenStandardPrettierBaseConfigStrategy,
  NonApiPrettierBaseConfigStrategy,
} from '../base';

/**
 * Implementing all relevant Prettier configuration for the GitHubAction project.
 * @extends PrettierBaseConfig
 */
export class PrettierConfigGitHubAction extends PrettierBaseConfig<GitHubActionProject> {
  constructor(project: GitHubActionProject, useProjenApi: boolean) {
    super(project, useProjenApi);

    const strategy = useProjenApi ? new ProjenStandardConfigStrategy() : new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }
}

class ProjenStandardConfigStrategy extends ProjenStandardPrettierBaseConfigStrategy<GitHubActionProject> {
  applyConfig(config: Config<GitHubActionProject>): void {
    super.applyConfig(config);
  }
}

class NonApiConfigStrategy extends NonApiPrettierBaseConfigStrategy<GitHubActionProject> {
  applyConfig(config: Config<GitHubActionProject>): void {
    super.applyConfig(config);
  }
}

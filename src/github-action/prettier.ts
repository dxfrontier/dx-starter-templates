import { GitHubActionProject } from '.';
import {
  Config,
  PrettierConfigBase,
  ProjenStandardPrettierConfigBaseStrategy,
  NonApiPrettierConfigBaseStrategy,
  ConfigStrategy,
} from '../base';

/**
 * Implementing all relevant Prettier configuration for the GitHubAction project.
 */
export class PrettierConfigGitHubAction extends PrettierConfigBase<GitHubActionProject> {
  constructor(project: GitHubActionProject, useProjenApi: boolean) {
    super(project, useProjenApi);

    const strategy: ConfigStrategy = useProjenApi ? new ProjenStandardConfigStrategy() : new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }
}

class ProjenStandardConfigStrategy extends ProjenStandardPrettierConfigBaseStrategy<GitHubActionProject> {
  applyConfig(config: Config<GitHubActionProject>): void {
    super.applyConfig(config);
  }
}

class NonApiConfigStrategy extends NonApiPrettierConfigBaseStrategy<GitHubActionProject> {
  applyConfig(config: Config<GitHubActionProject>): void {
    super.applyConfig(config);
  }
}

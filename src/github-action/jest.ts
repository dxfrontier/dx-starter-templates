import { GitHubActionProject } from '.';
import { JestBaseConfig, ProjenStandardJestBaseConfigStrategy, NonApiJestBaseConfigStrategy, Config } from '../base';

/**
 * Implementing all relevant Jest configuration for the GitHubAction project.
 * @extends JestBaseConfig
 */
export class JestConfigGitHubAction extends JestBaseConfig<GitHubActionProject> {
  constructor(project: GitHubActionProject, useProjenApi: boolean) {
    super(project, useProjenApi);

    const strategy = useProjenApi ? new ProjenStandardConfigStrategy() : new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }
}

class ProjenStandardConfigStrategy extends ProjenStandardJestBaseConfigStrategy<GitHubActionProject> {
  applyConfig(config: Config<GitHubActionProject>): void {
    super.applyConfig(config);
  }
}

class NonApiConfigStrategy extends NonApiJestBaseConfigStrategy<GitHubActionProject> {
  applyConfig(config: Config<GitHubActionProject>): void {
    super.applyConfig(config);
  }
}

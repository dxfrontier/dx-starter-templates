import { GitHubActionProject } from '.';
// import { Config, NonProjenNpmBaseConfigStrategy, NpmBaseConfig, ProjenStandardNpmBaseConfigStrategy, NonApiNpmBaseConfigStrategy } from '../base';
import { NpmBaseConfig, Settings } from '../base';


/**
 * Implementing all relevant NPM configuration for the GitHubAction project.
 * @extends NpmBaseConfig
 */
export class NpmConfigGitHubAction extends NpmBaseConfig<GitHubActionProject> {
  constructor(project: GitHubActionProject) {
    super(project);
  }
}

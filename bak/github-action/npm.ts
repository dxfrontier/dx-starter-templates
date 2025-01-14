import { NpmBaseConfig } from '../base';
import { GitHubActionProject } from './project';

/**
 * Implementing all relevant NPM configuration for the GithubAction project.
 * @extends NpmBaseConfig
 */
export class NpmConfigGithubAction extends NpmBaseConfig<GitHubActionProject> {}

import { PrettierBaseConfig } from '../base';
import { GitHubActionProject } from './project';

/**
 * Implementing all relevant Prettier configuration for the GithubAction project.
 * @extends PrettierBaseConfig
 */
export class PrettierConfigGithubAction extends PrettierBaseConfig<GitHubActionProject> { }
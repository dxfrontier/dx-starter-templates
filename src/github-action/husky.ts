import { HuskyBaseConfig } from '../base';
import { GitHubActionProject } from './project';

/**
 * Implementing all relevant Husky configuration for the GithubAction project.
 * @extends HuskyBaseConfig
 */
export class HuskyConfigGithubAction extends HuskyBaseConfig<GitHubActionProject> { }
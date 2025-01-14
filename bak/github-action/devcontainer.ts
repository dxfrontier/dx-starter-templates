import { DevContainerBaseConfig } from '../base';
import { GitHubActionProject } from './project';

/**
 * Implementing all relevant DevContainer configuration for the GithubAction project.
 * @extends DevContainerBaseConfig
 */
export class DevContainerConfigGithubAction extends DevContainerBaseConfig<GitHubActionProject> {}

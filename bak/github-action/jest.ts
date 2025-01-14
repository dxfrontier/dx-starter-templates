import { JestBaseConfig } from '../base';
import { GitHubActionProject } from './project';

/**
 * Implementing all relevant Jest configuration for the GithubAction project.
 * @extends JestBaseConfig
 */
export class JestConfigGithubAction extends JestBaseConfig<GitHubActionProject> {}

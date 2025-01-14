import { EsLintBaseConfig } from '../base';
import { GitHubActionProject } from './project';

/**
 * Implementing all relevant eslint configuration for the GithubAction project.
 * @extends EsLintBaseConfig
 */
export class EsLintConfigGithubAction extends EsLintBaseConfig<GitHubActionProject> {}

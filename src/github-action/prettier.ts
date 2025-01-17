import { GitHubActionProject } from './project';
import { PrettierConfigBase } from '../base/prettier';

/**
 * Implementing all relevant Prettier configuration for the GitHubAction project.
 */
export class PrettierConfigGitHubAction extends PrettierConfigBase {
  constructor(project: GitHubActionProject) {
    super(project);
  }
}

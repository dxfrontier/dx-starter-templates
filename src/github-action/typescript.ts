import { GitHubActionProject } from '.';
import { TypeScriptConfigBase } from '../base';

/**
 * Implementing all relevant TypeScript configuration for the GitHubAction project.
 */
export class TypeScriptConfigGitHubAction extends TypeScriptConfigBase<GitHubActionProject> {
  // protected settings: Settings;

  constructor(project: GitHubActionProject) {
    super(project);
  }
}

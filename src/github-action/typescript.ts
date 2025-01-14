import { GitHubActionProject } from '.';
import { TypeScriptBaseConfig } from '../base';

/**
 * Implementing all relevant TypeScript configuration for the GitHubAction project.
 * @extends TypeScriptBaseConfig
 */
export class TypeScriptConfigGitHubAction extends TypeScriptBaseConfig<GitHubActionProject> {
  // protected settings: Settings;

  constructor(project: GitHubActionProject) {
    super(project);
  }
}
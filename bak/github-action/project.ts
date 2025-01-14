import { BaseOptions, BaseProject, BaseProjectOptions } from '../base';
import { GitConfigGitHubAction } from './git';

export interface GitHubActionProjectOptions extends BaseProjectOptions {}

/**
 * Base class for managing GitHub Action project configuration.
 */
export class GitHubActionProject extends BaseProject {
  /**
   * Initializes the project.
   * @param options Additional project options.
   */
  constructor(options: GitHubActionProjectOptions) {
    super({
      ...BaseOptions.sharedOptions(options),
    });

    this.setGitConfig(new GitConfigGitHubAction(this));
  }

  public override preSynthesize(): void {
    super.preSynthesize();
  }

  public override postSynthesize(): void {
    super.postSynthesize();
  }
}

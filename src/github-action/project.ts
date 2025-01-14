import { NpmConfigGitHubAction } from '.';
import { BaseOptions, BaseProject, BaseProjectOptions, Config } from '../base';

export interface GitHubActionProjectOptions extends BaseProjectOptions {}

/**
 * Base class for managing project GitHubAction configuration.
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
    
    // new GitConfigGitHubAction(this);
    this.npmConfig = new NpmConfigGitHubAction(this);
  }

  public override preSynthesize(): void {
    console.log('GitHubActionProject preSynth')
    for (const comp of this.components) {
      if (comp instanceof Config) {
        comp.registerConfig();
      }
    }
    super.preSynthesize();
  }

  public override postSynthesize(): void {
    super.postSynthesize();
  }
}

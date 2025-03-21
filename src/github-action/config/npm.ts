import { NpmConfigBase } from '../../base/config/npm';
import { BaseProject } from '../../base/project';
import { Settings } from '../../util/types';

/**
 * Implementing all relevant NPM configuration for the GitHubAction project.
 */
export class NpmConfigGitHubAction extends NpmConfigBase {
  protected override get additionalSettings(): Settings {
    return {
      files: ['action.yml', 'README.md'],
    };
  }

  protected override get additionalIgnorePatterns(): string[] {
    return ['docs/'];
  }

  /**
   * Gets additional ignore patterns to be added to the project's ignore configuration.
   *
   * @returns A list of ignore patterns.
   */
  private get additionalIgnorePrettierPatterns(): string[] {
    return ['/package-lock.json', '/package.json', '/API.md'];
  }

  public override registerConfig(): void {
    if (this.project instanceof BaseProject) {
      this.addSettings(this.additionalSettings);
      this.project.eslintConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
      this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePrettierPatterns);
      this.removeScriptsOnInit(this.removeScripts);
    }
  }
}

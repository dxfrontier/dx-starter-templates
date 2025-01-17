import { NpmConfigBase } from '../base/npm';
import { Settings } from '../types';

/**
 * Implementing all relevant NPM configuration for the GitHubAction project.
 */
export class NpmConfigGitHubAction extends NpmConfigBase {
  // /**
  //  * Gets the additional development dependencies required for configuration.
  //  *
  //  * @returns A list of package names with version specifications.
  //  */
  // private get additionalDevDependencies(): string[] {
  //   return [];
  // }

  // /**
  //  * Gets the additional peer dependencies required for configuration.
  //  *
  //  * @returns A list of package names with version specifications.
  //  */
  // private get additionalPeerDependencies(): string[] {
  //   return [];
  // }

  /**
   * Gets the additional settings to be added to the project's configuration.
   *
   * @returns A settings object to be merged into the project's settings.
   */
  private get additionalSettings(): Settings {
    return {
      files: ['action.yml', 'README.md'],
    };
  }

  /**
   * Gets additional ignore patterns to be added to the project's ignore configuration.
   *
   * @returns A list of ignore patterns.
   */
  private get additionalIgnorePatterns(): string[] {
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
    // this.addDevDependencies(this.additionalDevDependencies);
    // this.addPeerDependencies(this.additionalPeerDependencies);
    this.addSettings(this.additionalSettings);
    this.project.eslintConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
    this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePrettierPatterns);
    this.removeScriptsOnInit(this.removeScripts);
  }
}

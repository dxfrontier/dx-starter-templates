import { JsiiProject } from './project';
import { NpmConfigBase } from '../base/npm';
import { Settings } from '../types';

/**
 * Implementing all relevant NPM configuration for the Jsii project.
 */
export class NpmConfigJsii extends NpmConfigBase {
  constructor(project: JsiiProject) {
    super(project);
  }

  /**
   * Gets the additional development dependencies required for configuration.
   *
   * @returns A list of package names with version specifications.
   */
  private get additionalDevDependencies(): string[] {
    return ['jsii@^5.7.4', 'jsii-diff@^1.106.0', 'jsii-docgen@^10.6.3', 'jsii-pacmak@^1.106.0', 'jsii-rosetta@^5.7.2'];
  }

  /**
   * Gets the additional peer dependencies required for configuration.
   *
   * @returns A list of package names with version specifications.
   */
  private get additionalPeerDependencies(): string[] {
    return ['constructs@^10.4.2', 'projen@^0.91.6'];
  }

  /**
   * Gets the additional settings to be added to the project's configuration.
   *
   * @returns A settings object to be merged into the project's settings.
   */
  private get additionalSettings(): Settings {
    return {
      files: ['lib', '.jsii', 'README.md'],
    };
  }

  /**
   * Gets additional ignore patterns to be added to the project's ignore configuration.
   *
   * @returns A list of ignore patterns.
   */
  private get additionalIgnorePatterns(): string[] {
    return ['docs/', 'test/', 'lib/', '.jsii'];
  }

  /**
   * Gets additional ignore patterns to be added to the project's ignore configuration.
   *
   * @returns A list of ignore patterns.
   */
  private get additionalIgnorePrettierPatterns(): string[] {
    return [
      '*.snap',
      '/.projen/**',
      '/.projen/deps.json',
      '/.projen/files.json',
      '/.projen/tasks.json',
      '/package-lock.json',
      '/package.json',
      '/API.md',
    ];
  }

  public override registerConfig(): void {
    this.addDevDependencies(this.additionalDevDependencies);
    this.addPeerDependencies(this.additionalPeerDependencies);
    this.addSettings(this.additionalSettings);
    if (this.isValidProjectTypes(this.project)) {
      this.project.eslintConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
      this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePrettierPatterns);
    }
  }
}

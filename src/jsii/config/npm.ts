import { NpmConfigBase } from '../../base/config/npm';
import { Settings } from '../../types';
import { JsiiProject } from '.././project';

/**
 * Implementing all relevant NPM configuration for the Jsii project.
 */
export class NpmConfigJsii extends NpmConfigBase {
  protected override get additionalDevDependencies(): string[] {
    return ['jsii@^5.7.4', 'jsii-diff@^1.106.0', 'jsii-docgen@^10.6.3', 'jsii-pacmak@^1.106.0', 'jsii-rosetta@^5.7.2'];
  }

  protected override get additionalPeerDependencies(): string[] {
    return ['constructs@^10.4.2', 'projen@^0.91.6'];
  }

  protected override get additionalSettings(): Settings {
    return {
      files: ['lib', '.jsii', 'README.md'],
    };
  }

  protected override get additionalIgnorePatterns(): string[] {
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
    if (this.project instanceof JsiiProject) {
      this.project.eslintConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
      this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePrettierPatterns);
    }
  }

  public override applyConfig(): void {
    if (this.project instanceof JsiiProject) {
      this.project.addDeps(...this.dependencies);
      this.project.addDevDeps(...this.devDependencies);
      this.project.addPeerDeps(...this.peerDependencies);
      this.project.addFields(this.settings);
    }
    this.patchScriptsAdd(this.scripts);
  }
}

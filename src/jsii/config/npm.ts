import { NpmConfigBase } from '../../base/config/npm';
import { constants } from '../../util/constants';
import { Settings } from '../../util/types';
import { JsiiProject } from '.././project';

/**
 * Implementing all relevant NPM configuration for the Jsii project.
 */
export class NpmConfigJsii extends NpmConfigBase {
  protected override get additionalDevDependencies(): string[] {
    return [
      `${constants['jsii'].NAME}@${constants['jsii'].VERSION}`,
      `${constants['jsii-diff'].NAME}@${constants['jsii-diff'].VERSION}`,
      `${constants['jsii-docgen'].NAME}@${constants['jsii-docgen'].VERSION}`,
      `${constants['jsii-pacmak'].NAME}@${constants['jsii-pacmak'].VERSION}`,
      `${constants['jsii-rosetta'].NAME}@${constants['jsii-rosetta'].VERSION}`,
    ];
  }

  protected override get additionalPeerDependencies(): string[] {
    return [
      `${constants.constructs.NAME}@${constants.constructs.VERSION}`,
      `${constants.projen.NAME}@${constants.projen.VERSION}`,
    ];
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

import { CommitLintConfigBase, PrettierConfigBase } from '../base';
import { DevContainerConfigBase } from '../base/devcontainer';
import { GitConfigBase } from '../base/git';
import { GitHubConfigBase } from '../base/github';
import { HuskyConfigBase } from '../base/husky';
import { BaseOptions } from '../base/options';
import { BaseProjectOptions, BaseProject } from '../base/project';
import { VsCodeConfigBase } from '../base/vscode';
import { CommitLintConfigGitHubAction } from './commitlint';
import { NpmConfigGitHubAction } from './npm';
import { SampleCodeConfigGitHubAction } from './samplecode';
import { TypeScriptConfigGitHubAction } from './typescript';

export interface GitHubActionProjectOptions extends BaseProjectOptions {}

/**
 * Base class for managing project GitHubAction configuration.
 */
export class GitHubActionProject extends BaseProject {
  /**
   * Configuration for commitlint settings in the project.
   * This property is initialized if `commitlintEnabled` option is provided during project creation.
   */
  public commitlintConfig?: CommitLintConfigBase;

  /**
   * Initializes the project.
   * @param options Additional project options.
   */
  constructor(options: GitHubActionProjectOptions) {
    const updatedOptions = {
      ...options,
      typescriptEnabled: false,
      jestEnabled: false,
      eslintEnabled: false,
    };
    super({
      ...BaseOptions.sharedOptions(updatedOptions),
    });

    this.npmConfig = new NpmConfigGitHubAction(this);

    if (updatedOptions.commitlintEnabled) {
      this.commitlintConfig = new CommitLintConfigGitHubAction(this);
    }
    if (updatedOptions.sampleCodeEnabled) {
      this.sampleCodeConfig = new SampleCodeConfigGitHubAction(this);
    }
  }

  protected override initializeBaseConfigs(options: BaseProjectOptions): void {
    super.initializeBaseConfigs(options);

    this.gitConfig = new GitConfigBase(this);
    this.typescriptConfig = new TypeScriptConfigGitHubAction(this);

    if (options.prettierEnabled) {
      this.prettierConfig = new PrettierConfigBase(this);
    }
    if (options.devContainerEnabled) {
      this.devContainerConfig = new DevContainerConfigBase(this);
    }
    if (options.githubEnabled) {
      this.githubConfig = new GitHubConfigBase(this);
    }
    if (options.vscodeEnabled) {
      this.vscodeConfig = new VsCodeConfigBase(this);
    }
    if (options.huskyEnabled) {
      this.huskyConfig = new HuskyConfigBase(this);
    }
  }
}

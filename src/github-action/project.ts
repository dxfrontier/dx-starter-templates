import { PrettierConfigBase } from '../base';
import { DevContainerConfigBase } from '../base/config/devcontainer';
import { GitConfigBase } from '../base/config/git';
import { GitHubConfigBase } from '../base/config/github';
import { HuskyConfigBase } from '../base/config/husky';
import { BaseOptions } from '../base/config/options';
import { BaseProjectOptions, BaseProject } from '../base/project';
import { VsCodeConfigBase } from '../base/config/vscode';
import { CommitLintConfigGitHubAction } from './config/commitlint';
import { NpmConfigGitHubAction } from './config/npm';
import { SampleCodeConfigGitHubAction } from './config/samplecode';
import { TypeScriptConfigGitHubAction } from './config/typescript';
import { util } from '../util/utils';
import { ReadmeConfigGitHubAction } from './config/readme';
import { constants } from '../util/constants';
import { IssuesConfigBase } from '../base/config/issues';

export interface GitHubActionProjectOptions extends BaseProjectOptions {}

/**
 * Base class for managing project GitHubAction configuration.
 */
export class GitHubActionProject extends BaseProject {
  static cleanCommand = 'npx projen eject && rm -rf .projenrc.js.bak scripts .projen';

  /**
   * Initializes the project.
   * @param options Additional project options.
   */

  constructor(options: GitHubActionProjectOptions) {
    const updatedOptions = {
      ...options,
      commitlintEnabled: options.commitlintEnabled ?? true,
      devContainerEnabled: options.devContainerEnabled ?? true,
      eslintEnabled: options.eslintEnabled ?? false,
      githubEnabled: options.githubEnabled ?? true,
      huskyEnabled: options.huskyEnabled ?? true,
      jestEnabled: options.jestEnabled ?? false,
      prettierEnabled: options.prettierEnabled ?? true,
      vscodeEnabled: options.vscodeEnabled ?? true,
      sampleCodeEnabled: options.sampleCodeEnabled ?? true,
      typescriptEnabled: false,
      description: options.description ?? constants.GITHUB_PROJECT_DESCRIPTION,
      issuesEnabled: options.issuesEnabled ?? true,
    };
    super({
      ...BaseOptions.sharedOptions(updatedOptions),
      readme: new ReadmeConfigGitHubAction().getReadme(updatedOptions),
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
    if (options.issuesEnabled) {
      this.issuesConfig = new IssuesConfigBase(this);
    }
  }

  public override postSynthesize(): void {
    super.postSynthesize();

    util.setupExitHandler(GitHubActionProject.cleanCommand);
  }
}

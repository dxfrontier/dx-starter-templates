import {
  BaseOptions,
  BaseProject,
  BaseProjectOptions,
  DevContainerConfigBase,
  GitHubConfigBase,
  HuskyConfigBase,
  TypeScriptConfigBase,
  VsCodeConfigBase,
} from '../base';
import { CommitLintConfigGitHubAction, NpmConfigGitHubAction, PrettierConfigGitHubAction } from '.';

export interface GitHubActionProjectOptions extends BaseProjectOptions {
  readonly commitlintEnabled?: boolean;
  readonly devContainerEnabled?: boolean;
  readonly githubEnabled?: boolean;
  readonly huskyEnabled?: boolean;
  readonly prettierEnabled?: boolean;
  readonly vscodeEnabled?: boolean;
  readonly sampleCodeEnabled?: boolean;
}

/**
 * Base class for managing project GitHubAction configuration.
 */
export class GitHubActionProject extends BaseProject {
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

    if (updatedOptions.prettierEnabled) {
      this.prettierConfig = new PrettierConfigGitHubAction(this, options.prettier!);
    }
    if (updatedOptions.commitlintEnabled) {
      this.commitlintConfig = new CommitLintConfigGitHubAction(this);
    }
  }

  protected override initializeBaseConfigs(options: GitHubActionProjectOptions): void {
    this.typescriptConfig = new TypeScriptConfigBase(this);

    if (options.devContainerEnabled) {
      this.devContainerConfig = new DevContainerConfigBase(this, options.devContainer!);
    }
    if (options.githubEnabled) {
      this.githubConfig = new GitHubConfigBase(this, options.github!);
    }
    if (options.vscodeEnabled) {
      this.vscodeConfig = new VsCodeConfigBase(this, options.vscode!);
    }
    if (options.huskyEnabled) {
      this.huskyConfig = new HuskyConfigBase(this);
    }
  }
}

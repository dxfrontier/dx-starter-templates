import { TypeScriptProject, TypeScriptProjectOptions } from 'projen/lib/typescript';
import { BaseOptions } from './options';
import {
  CommitLintConfigBase,
  Config,
  DevContainerConfigBase,
  EsLintConfigBase,
  GitConfigBase,
  GitHubConfigBase,
  HuskyConfigBase,
  JestConfigBase,
  NpmConfigBase,
  PrettierConfigBase,
  TypeScriptConfigBase,
  VsCodeConfigBase,
} from '.';

export interface BaseProjectOptions extends TypeScriptProjectOptions {
  readonly commitlintEnabled?: boolean;
  readonly devContainerEnabled?: boolean;
  readonly eslintEnabled?: boolean;
  readonly githubEnabled?: boolean;
  readonly huskyEnabled?: boolean;
  readonly jestEnabled?: boolean;
  readonly prettierEnabled?: boolean;
  readonly typescriptEnabled?: boolean;
  readonly vscodeEnabled?: boolean;
  readonly sampleCodeEnabled?: boolean;
}

/**
 * Base class for managing project configuration.
 */
export class BaseProject extends TypeScriptProject {
  public gitConfig?: GitConfigBase<BaseProject>;
  public commitlintConfig?: CommitLintConfigBase<BaseProject>;
  public devContainerConfig?: DevContainerConfigBase<BaseProject>;
  public eslintConfig?: EsLintConfigBase<BaseProject>;
  public githubConfig?: GitHubConfigBase<BaseProject>;
  public huskyConfig?: HuskyConfigBase<BaseProject>;
  public jestConfig?: JestConfigBase<BaseProject>;
  public npmConfig?: NpmConfigBase<BaseProject>;
  public prettierConfig?: PrettierConfigBase<BaseProject>;
  public typescriptConfig?: TypeScriptConfigBase<BaseProject>;
  public vscodeConfig?: VsCodeConfigBase<BaseProject>;
  // protected readonly sampleCodeConfig?: SampleCodeConfigJsii;

  /**
   * Initializes the project.
   * @param options Additional project options.
   */
  constructor(options: BaseProjectOptions) {
    super({
      ...BaseOptions.sharedOptions(options),
    });

    new GitConfigBase(this);
    this.npmConfig = new NpmConfigBase(this);

    if (options.devContainerEnabled) {
      this.devContainerConfig = new DevContainerConfigBase(this, options.devContainer!);
    }
    if (options.eslintEnabled) {
      this.eslintConfig = new EsLintConfigBase(this, options.eslint!);
    }
    if (options.jestEnabled) {
      this.jestConfig = new JestConfigBase(this, options.jest!);
    }
    if (options.prettierEnabled) {
      this.prettierConfig = new PrettierConfigBase(this, options.prettier!);
    }
    if (options.vscodeEnabled) {
      this.vscodeConfig = new VsCodeConfigBase(this, options.vscode!);
    }
    if (options.githubEnabled) {
      this.githubConfig = new GitHubConfigBase(this, options.github!);
    }
    if (options.commitlintEnabled) {
      this.commitlintConfig = new CommitLintConfigBase(this);
    }
    if (options.huskyEnabled) {
      this.huskyConfig = new HuskyConfigBase(this);
    }
    if (options.typescriptEnabled) {
      this.typescriptConfig = new TypeScriptConfigBase(this);
    }
    // if (options.sampleCodeEnabled) {
    //   this.typescriptConfig = new SampleCodeConfigGitHubAction(this);
    // }
  }

  public override preSynthesize(): void {
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

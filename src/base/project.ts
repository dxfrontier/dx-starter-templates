import { TypeScriptProject, TypeScriptProjectOptions } from 'projen/lib/typescript';
import { BaseOptions } from './options';
import {
  CommitLintBaseConfig,
  Config,
  DevContainerBaseConfig,
  EsLintBaseConfig,
  GitBaseConfig,
  GitHubBaseConfig,
  HuskyBaseConfig,
  JestBaseConfig,
  NpmBaseConfig,
  PrettierBaseConfig,
  TypeScriptBaseConfig,
  VsCodeBaseConfig,
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
  public gitConfig?: GitBaseConfig<BaseProject>;
  public commitlintConfig?: CommitLintBaseConfig<BaseProject>;
  public devContainerConfig?: DevContainerBaseConfig<BaseProject>;
  public eslintConfig?: EsLintBaseConfig<BaseProject>;
  public githubConfig?: GitHubBaseConfig<BaseProject>;
  public huskyConfig?: HuskyBaseConfig<BaseProject>;
  public jestConfig?: JestBaseConfig<BaseProject>;
  public npmConfig?: NpmBaseConfig<BaseProject>;
  public prettierConfig?: PrettierBaseConfig<BaseProject>;
  public typescriptConfig?: TypeScriptBaseConfig<BaseProject>;
  public vscodeConfig?: VsCodeBaseConfig<BaseProject>;
  // protected readonly sampleCodeConfig?: SampleCodeConfigJsii;

  /**
   * Initializes the project.
   * @param options Additional project options.
   */
  constructor(options: BaseProjectOptions) {
    super({
      ...BaseOptions.sharedOptions(options),
    });

    new GitBaseConfig(this);
    this.npmConfig = new NpmBaseConfig(this);

    if (options.devContainerEnabled) {
      this.devContainerConfig = new DevContainerBaseConfig(this, options.devContainer!);
    }
    if (options.eslintEnabled) {
      this.eslintConfig = new EsLintBaseConfig(this, options.eslint!);
    }
    if (options.jestEnabled) {
      this.jestConfig = new JestBaseConfig(this, options.jest!);
    }
    if (options.prettierEnabled) {
      this.prettierConfig = new PrettierBaseConfig(this, options.prettier!);
    }
    if (options.vscodeEnabled) {
      this.vscodeConfig = new VsCodeBaseConfig(this, options.vscode!);
    }
    if (options.githubEnabled) {
      this.githubConfig = new GitHubBaseConfig(this, options.github!);
    }
    if (options.commitlintEnabled) {
      this.commitlintConfig = new CommitLintBaseConfig(this);
    }
    if (options.huskyEnabled) {
      this.huskyConfig = new HuskyBaseConfig(this);
    }
    if (options.typescriptEnabled) {
      this.typescriptConfig = new TypeScriptBaseConfig(this);
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

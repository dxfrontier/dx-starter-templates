import { TypeScriptProject, TypeScriptProjectOptions } from 'projen/lib/typescript';
import { BaseOptions } from './options';
import { BaseConfig } from '.';

export interface BaseProjectOptions extends TypeScriptProjectOptions {
  readonly projenEnabled?: boolean;
  readonly commitLintEnabled?: boolean;
  readonly devContainerEnabled?: boolean;
  readonly eslintEnabled?: boolean;
  readonly githubEnabled?: boolean;
  readonly huskyEnabled?: boolean;
  readonly jestEnabled?: boolean;
  readonly npmEnabled?: boolean;
  readonly prettierEnabled?: boolean;
  readonly typescriptEnabled?: boolean;
  readonly vscodeEnabled?: boolean;
  readonly sampleCodeEnabled?: boolean;
  readonly npm?: boolean;
}

/**
 * Base class for managing project configuration.
 */
export class BaseProject<TConfig extends BaseConfig = BaseConfig> extends TypeScriptProject {
  protected readonly npm?: boolean;
  protected gitConfig?: TConfig;
  // protected readonly commitLintConfig?: CommitLintConfigJsii;
  // protected readonly devContainerConfig?: DevContainerConfigJsii;
  // protected readonly eslintConfig?: EsLintConfigJsii;
  // protected readonly githubConfig?: GitHubConfigJsii;
  // protected readonly huskyConfig?: HuskyConfigJsii;
  // protected readonly jestConfig?: JestConfigJsii;
  // protected readonly npmConfig?: NpmConfigJsii;
  // protected readonly prettierConfig?: PrettierConfigJsii;
  // protected readonly typescriptConfig?: TypeScriptConfigJsii;
  // protected readonly vscodeConfig?: VsCodeConfigJsii;
  // protected readonly sampleCodeConfig?: SampleCodeConfigJsii;

  /**
   * Initializes the project.
   * @param options Additional project options.
   */
  constructor(options: BaseProjectOptions) {
    super({
      ...BaseOptions.sharedOptions(options),
    });

    // special case to align with Projen standard API handling
    this.npm = options.npmEnabled && options.projenEnabled && options.npm
      ? options.npm
      : false;
  }

  public override preSynthesize(): void {
    super.preSynthesize();
  }

  public override postSynthesize(): void {
    super.postSynthesize();
  }

  protected setGitConfig(gitConfig: TConfig) {
    this.gitConfig = gitConfig;
  }
}

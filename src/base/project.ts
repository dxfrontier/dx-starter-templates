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
  /**
   * Whether to enable the commitlint configuration for the project.
   * If set to `true`, commitlint configuration will be enabled.
   * @default false
   */
  readonly commitlintEnabled?: boolean;

  /**
   * Whether to enable the dev container configuration for the project.
   * If set to `true`, dev container configuration will be enabled.
   * @default false
   */
  readonly devContainerEnabled?: boolean;

  /**
   * Whether to enable the ESLint configuration for the project.
   * If set to `true`, ESLint configuration will be enabled.
   * @default false
   */
  readonly eslintEnabled?: boolean;

  /**
   * Whether to enable the GitHub configuration for the project.
   * If set to `true`, GitHub-related settings will be configured (e.g., issue templates, PR templates).
   * @default false
   */
  readonly githubEnabled?: boolean;

  /**
   * Whether to enable the Husky configuration for the project.
   * If set to `true`, Husky hooks will be enabled to enforce code quality checks.
   * @default false
   */
  readonly huskyEnabled?: boolean;

  /**
   * Whether to enable the Jest configuration for the project.
   * If set to `true`, Jest testing framework will be configured for the project.
   * @default false
   */
  readonly jestEnabled?: boolean;

  /**
   * Whether to enable the Prettier configuration for the project.
   * If set to `true`, Prettier code formatting configuration will be enabled.
   * @default false
   */
  readonly prettierEnabled?: boolean;

  /**
   * Whether to enable the TypeScript configuration for the project.
   * If set to `true`, TypeScript-specific settings will be configured for the project.
   * If set to `false` TypeScript will be completely removed from the project as
   * Projen projects used in this context are always relying on TypeScript.
   * @default false
   */
  readonly typescriptEnabled?: boolean;

  /**
   * Whether to enable the VS Code configuration for the project.
   * If set to `true`, VS Code settings will be applied for the project.
   * @default false
   */
  readonly vscodeEnabled?: boolean;

  /**
   * Whether to include sample code in the project.
   * If set to `true`, sample code will be added to the project repository.
   * @default false
   */
  readonly sampleCodeEnabled?: boolean;
}

/**
 * Base class for managing project configuration.
 */
export class BaseProject extends TypeScriptProject {
  /**
   * Configuration for commitlint settings in the project.
   * This property is initialized if `commitlintEnabled` option is provided during project creation.
   */
  public commitlintConfig?: CommitLintConfigBase<BaseProject>;

  /**
   * Configuration for development container settings in the project.
   * This property is initialized if `devContainerEnabled` option is provided during project creation.
   */
  public devContainerConfig?: DevContainerConfigBase<BaseProject>;

  /**
   * Configuration for ESLint settings in the project.
   * This property is initialized if `eslintEnabled` option is provided during project creation.
   */
  public eslintConfig?: EsLintConfigBase<BaseProject>;

  /**
   * Configuration for GitHub settings in the project.
   * This property is initialized if `githubEnabled` option is provided during project creation.
   */
  public githubConfig?: GitHubConfigBase<BaseProject>;

  /**
   * Configuration for Husky settings in the project.
   * This property is initialized if `huskyEnabled` option is provided during project creation.
   */
  public huskyConfig?: HuskyConfigBase<BaseProject>;

  /**
   * Configuration for Jest settings in the project.
   * This property is initialized if `jestEnabled` option is provided during project creation.
   */
  public jestConfig?: JestConfigBase<BaseProject>;

  /**
   * Configuration for NPM settings in the project.
   * This property is always initialized as `npmConfig` when the project is created.
   */
  public npmConfig?: NpmConfigBase<BaseProject>;

  /**
   * Configuration for Prettier settings in the project.
   * This property is initialized if `prettierEnabled` option is provided during project creation.
   */
  public prettierConfig?: PrettierConfigBase<BaseProject>;

  /**
   * Configuration for TypeScript settings in the project.
   * This property is always initialized as `typescriptConfig` when the project is created.
   */
  public typescriptConfig?: TypeScriptConfigBase<BaseProject>;

  /**
   * Configuration for VS Code settings in the project.
   * This property is initialized if `vscodeEnabled` option is provided during project creation.
   */
  public vscodeConfig?: VsCodeConfigBase<BaseProject>;
  // protected sampleCodeConfig?: SampleCodeConfigBase<BaseProject>;

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
    this.typescriptConfig = new TypeScriptConfigBase(this);

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

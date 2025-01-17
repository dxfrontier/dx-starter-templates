import { TypeScriptProject, TypeScriptProjectOptions } from 'projen/lib/typescript';
import { BaseOptions } from './options';
import { NpmConfigBase } from './npm';
import { DevContainerConfigBase } from './devcontainer';
import { EsLintConfigBase } from './eslint';
import { GitConfigBase } from './git';
import { GitHubConfigBase } from './github';
import { HuskyConfigBase } from './husky';
import { JestConfigBase } from './jest';
import { PrettierConfigBase } from './prettier';
import { SampleCodeConfigBase } from './samplecode';
import { TypeScriptConfigBase } from './typescript';
import { VsCodeConfigBase } from './vscode';
import { registerConfig } from '../utils';
import { CommitLintConfigBase } from './commitlint';
import { IProjectKind, ProjectKind } from '../types/types';

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
export class BaseProject extends TypeScriptProject implements IProjectKind {
  /**
   * Configuration for commitlint settings in the project.
   * This property is initialized if `commitlintEnabled` option is provided during project creation.
   */
  public commitlintConfig?: CommitLintConfigBase;

  /**
   * Configuration for development container settings in the project.
   * This property is initialized if `devContainerEnabled` option is provided during project creation.
   */
  public devContainerConfig?: DevContainerConfigBase;

  /**
   * Configuration for ESLint settings in the project.
   * This property is initialized if `eslintEnabled` option is provided during project creation.
   */
  public eslintConfig?: EsLintConfigBase;

  /**
   * Configuration for Git settings in the project.
   * This property is always initialized as `gitConfig` when the project is created.
   */
  public gitConfig?: GitConfigBase;

  /**
   * Configuration for GitHub settings in the project.
   * This property is initialized if `githubEnabled` option is provided during project creation.
   */
  public githubConfig?: GitHubConfigBase;

  /**
   * Configuration for Husky settings in the project.
   * This property is initialized if `huskyEnabled` option is provided during project creation.
   */
  public huskyConfig?: HuskyConfigBase;

  /**
   * Configuration for Jest settings in the project.
   * This property is initialized if `jestEnabled` option is provided during project creation.
   */
  public jestConfig?: JestConfigBase;

  /**
   * Configuration for NPM settings in the project.
   * This property is always initialized as `npmConfig` when the project is created.
   */
  public npmConfig?: NpmConfigBase;

  /**
   * Configuration for Prettier settings in the project.
   * This property is initialized if `prettierEnabled` option is provided during project creation.
   */
  public prettierConfig?: PrettierConfigBase;

  /**
   * Configuration for TypeScript settings in the project.
   * This property is always initialized as `typescriptConfig` when the project is created.
   */
  public typescriptConfig?: TypeScriptConfigBase;

  /**
   * Configuration for VS Code settings in the project.
   * This property is initialized if `vscodeEnabled` option is provided during project creation.
   */
  public vscodeConfig?: VsCodeConfigBase;

  /**
   * Configuration for Sample Code in the project.
   * This property is initialized if `sampleCodeEnabled` option is provided during project creation.
   */
  public sampleCodeConfig?: SampleCodeConfigBase;

  /**
   * This flag aligns with Projen structure using flags like `eslint`, `devContainer`, ....
   * for defining if configuration functionality is enabled or not. Will align with `typescriptEnabled`
   * If set to `true`, TypeScript-specific settings will be configured for the project.
   * If set to `false` TypeScript will be completely removed from the project as
   * Projen projects used in this context are always relying on TypeScript.
   */
  public typescript?: boolean;

  public kind: ProjectKind;

  /**
   * Initializes the project.
   * @param options Additional project options.
   */
  constructor(options: BaseProjectOptions) {
    super({
      ...BaseOptions.sharedOptions(options),
    });

    new GitConfigBase(this);
    this.initializeBaseConfigs(options);
    this.kind = 'base';
  }

  /**
   * Initializes the base configurations for the project.
   *
   * This method is responsible for initializing the core configurations related to TypeScript,
   * ESLint, and Jest, based on the provided options. The configuration objects are created and
   * initialized according to the flags passed in the `options` parameter. This allows the project
   * to be configured with specific tools only when needed, without unnecessary overhead.
   *
   * The method is overridden from the base class to provide a customized initialization process
   * for a project that is specifically tailored for GitHub Actions-based configurations.
   *
   * @param options - The configuration options used to initialize the various project settings.
   * The `options` object is expected to be of type `GitHubActionProjectOptions` and contains flags
   * that enable or disable specific configurations like `eslintEnabled`, `jestEnabled`, etc. The method
   * reads these flags and initializes the respective configuration objects (e.g., `typescriptConfig`,
   * `eslintConfig`, `jestConfig`) based on their values.
   *
   * @example
   * const options: GitHubActionProjectOptions = {
   *   eslintEnabled: true,
   *   jestEnabled: false,
   *   // other options...
   * };
   * this.initializeBaseConfigs(options);
   *
   * @remarks
   * - This method is overwritten by the child class to initialize the base configurations before
   *   proceeding with the setup of more specific configurations like GitHub, Husky, etc.
   * - The initialization of configurations is conditional based on the `options` flags, ensuring that only
   *   necessary configurations are applied to the project.
   */
  protected initializeBaseConfigs(options: BaseProjectOptions): void {
    this.typescript = options.typescriptEnabled ?? false;
  }

  public override preSynthesize(): void {
    registerConfig(this.components);
    super.preSynthesize();
  }

  public override postSynthesize(): void {
    super.postSynthesize();
  }
}

import { cdk } from 'projen';
import { CommitLintConfigBase } from '../base/commitlint';
import { DevContainerConfigBase } from '../base/devcontainer';
import { EsLintConfigBase } from '../base/eslint';
import { GitHubConfigBase } from '../base/github';
import { HuskyConfigBase } from '../base/husky';
import { GitConfigBase } from '../base/git';
import { JestConfigBase } from '../base/jest';
import { BaseOptions } from '../base/options';
import { PrettierConfigBase } from '../base/prettier';
import { VsCodeConfigBase } from '../base/vscode';
import { NpmConfigJsii } from './npm';
import { TypeScriptConfigJsii } from './typescript';
import { registerConfig } from '../utils';
import { IProjectKind, ProjectKind } from '../types/types';
import { TypeScriptConfigBase } from '../base/typescript';

export interface JsiiProjectOptions extends cdk.JsiiProjectOptions {
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
   * Whether to enable the VS Code configuration for the project.
   * If set to `true`, VS Code settings will be applied for the project.
   * @default false
   */
  readonly vscodeEnabled?: boolean;
}

/**
 * Base class for managing project Jsii configuration.
 */
export class JsiiProject extends cdk.JsiiProject implements IProjectKind {
  /**
   * Configuration for commitlint settings in the project.
   * This property is initialized if `commitlintEnabled` option is provided during project creation.
   */
  public readonly commitlintConfig?: CommitLintConfigBase;

  /**
   * Configuration for development container settings in the project.
   * This property is initialized if `devContainerEnabled` option is provided during project creation.
   */
  public readonly devContainerConfig?: DevContainerConfigBase;

  /**
   * Configuration for ESLint settings in the project.
   * This property is initialized if `eslintEnabled` option is provided during project creation.
   */
  public readonly eslintConfig?: EsLintConfigBase;

  /**
   * Configuration for Git settings in the project.
   * This property is always initialized as `gitConfig` when the project is created.
   */
  public gitConfig?: GitConfigBase;

  /**
   * Configuration for GitHub settings in the project.
   * This property is initialized if `githubEnabled` option is provided during project creation.
   */
  public readonly githubConfig?: GitHubConfigBase;

  /**
   * Configuration for Husky settings in the project.
   * This property is initialized if `huskyEnabled` option is provided during project creation.
   */
  public readonly huskyConfig?: HuskyConfigBase;

  /**
   * Configuration for Jest settings in the project.
   * This property is initialized if `jestEnabled` option is provided during project creation.
   */
  public readonly jestConfig?: JestConfigBase;

  /**
   * Configuration for NPM settings in the project.
   * This property is always initialized as `npmConfig` when the project is created.
   */
  public readonly npmConfig?: NpmConfigJsii;

  /**
   * Configuration for Prettier settings in the project.
   * This property is initialized if `prettierEnabled` option is provided during project creation.
   */
  public readonly prettierConfig?: PrettierConfigBase;

  /**
   * Configuration for VS Code settings in the project.
   * This property is initialized if `vscodeEnabled` option is provided during project creation.
   */
  public readonly vscodeConfig?: VsCodeConfigBase;

  /**
   * Configuration for TypeScript settings in the project.
   * This property is always initialized as `typescriptConfig` when the project is created.
   */
  public typescriptConfig?: TypeScriptConfigBase;

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
  constructor(options: JsiiProjectOptions) {
    super({
      ...BaseOptions.sharedOptions(options),
      // tsconfig.dev.json needs to be enabled for Jsii Projects
      projenrcTs: true,
      disableTsconfigDev: options.disableTsconfigDev ?? false,
      disableTsconfig: options.disableTsconfig ?? true,
      tsconfig: {
        compilerOptions: {
          allowImportingTsExtensions: true,
        },
      },
    });

    this.typescript = true;
    this.kind = 'base';

    this.gitConfig = new GitConfigBase(this);
    this.typescriptConfig = new TypeScriptConfigJsii(this);
    this.npmConfig = new NpmConfigJsii(this);

    if (options.prettierEnabled) {
      this.prettierConfig = new PrettierConfigBase(this);
    }
    if (options.devContainerEnabled) {
      this.devContainerConfig = new DevContainerConfigBase(this);
    }
    if (options.eslintEnabled) {
      this.eslintConfig = new EsLintConfigBase(this);
    }
    if (options.jestEnabled) {
      this.jestConfig = new JestConfigBase(this);
    }
    if (options.vscodeEnabled) {
      this.vscodeConfig = new VsCodeConfigBase(this);
    }
    if (options.githubEnabled) {
      this.githubConfig = new GitHubConfigBase(this);
    }
    if (options.commitlintEnabled) {
      this.commitlintConfig = new CommitLintConfigBase(this);
    }
    if (options.huskyEnabled) {
      this.huskyConfig = new HuskyConfigBase(this);
    }
  }

  public override preSynthesize(): void {
    registerConfig(this.components);
    super.preSynthesize();
  }

  public override postSynthesize(): void {
    super.postSynthesize();
  }
}

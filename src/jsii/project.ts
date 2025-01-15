import { cdk } from 'projen';
import { BaseOptions, Config } from '../base';
import {
  CommitLintConfigJsii,
  DevContainerConfigJsii,
  EsLintConfigJsii,
  GitConfigJsii,
  GitHubConfigJsii,
  HuskyConfigJsii,
  JestConfigJsii,
  NpmConfigJsii,
  PrettierConfigJsii,
  TypeScriptConfigJsii,
  VsCodeConfigJsii,
} from '.';

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
export class JsiiProject extends cdk.JsiiProject {
  /**
   * Configuration for commitlint settings in the project.
   * This property is initialized if `commitlintEnabled` option is provided during project creation.
   */
  public readonly commitlintConfig?: CommitLintConfigJsii;

  /**
   * Configuration for development container settings in the project.
   * This property is initialized if `devContainerEnabled` option is provided during project creation.
   */
  public readonly devContainerConfig?: DevContainerConfigJsii;

  /**
   * Configuration for ESLint settings in the project.
   * This property is initialized if `eslintEnabled` option is provided during project creation.
   */
  public readonly eslintConfig?: EsLintConfigJsii;

  /**
   * Configuration for GitHub settings in the project.
   * This property is initialized if `githubEnabled` option is provided during project creation.
   */
  public readonly githubConfig?: GitHubConfigJsii;

  /**
   * Configuration for Husky settings in the project.
   * This property is initialized if `huskyEnabled` option is provided during project creation.
   */
  public readonly huskyConfig?: HuskyConfigJsii;

  /**
   * Configuration for Jest settings in the project.
   * This property is initialized if `jestEnabled` option is provided during project creation.
   */
  public readonly jestConfig?: JestConfigJsii;

  /**
   * Configuration for NPM settings in the project.
   * This property is always initialized as `npmConfig` when the project is created.
   */
  public readonly npmConfig?: NpmConfigJsii;

  /**
   * Configuration for Prettier settings in the project.
   * This property is initialized if `prettierEnabled` option is provided during project creation.
   */
  public readonly prettierConfig?: PrettierConfigJsii;

  /**
   * Configuration for VS Code settings in the project.
   * This property is initialized if `vscodeEnabled` option is provided during project creation.
   */
  public readonly vscodeConfig?: VsCodeConfigJsii;

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

    new GitConfigJsii(this);
    new TypeScriptConfigJsii(this);
    this.npmConfig = new NpmConfigJsii(this);

    if (options.devContainerEnabled) {
      this.devContainerConfig = new DevContainerConfigJsii(this, options.devContainer!);
    }
    if (options.eslintEnabled) {
      this.eslintConfig = new EsLintConfigJsii(this, options.eslint!);
    }
    if (options.jestEnabled) {
      this.jestConfig = new JestConfigJsii(this, options.jest!);
    }
    if (options.prettierEnabled) {
      this.prettierConfig = new PrettierConfigJsii(this, options.prettier!);
    }
    if (options.vscodeEnabled) {
      this.vscodeConfig = new VsCodeConfigJsii(this, options.vscode!);
    }
    if (options.githubEnabled) {
      this.githubConfig = new GitHubConfigJsii(this, options.github!);
    }
    if (options.commitlintEnabled) {
      this.commitlintConfig = new CommitLintConfigJsii(this);
    }
    if (options.huskyEnabled) {
      this.huskyConfig = new HuskyConfigJsii(this);
    }
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

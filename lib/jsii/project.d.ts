import { cdk } from 'projen';
import { CommitLintConfigBase } from '../base/config/commitlint';
import { DevContainerConfigBase } from '../base/config/devcontainer';
import { EsLintConfigBase } from '../base/config/eslint';
import { GitHubConfigBase } from '../base/config/github';
import { HuskyConfigBase } from '../base/config/husky';
import { GitConfigBase } from '../base/config/git';
import { JestConfigBase } from '../base/config/jest';
import { PrettierConfigBase } from '../base/config/prettier';
import { VsCodeConfigBase } from '../base/config/vscode';
import { NpmConfigJsii } from './config/npm';
import { IProjectKind, ProjectKind } from '../util/types/project';
import { TypeScriptConfigBase } from '../base/config/typescript';
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
export declare class JsiiProject extends cdk.JsiiProject implements IProjectKind {
    /**
     * Configuration for commitlint settings in the project.
     * This property is initialized if `commitlintEnabled` option is provided during project creation.
     */
    readonly commitlintConfig?: CommitLintConfigBase;
    /**
     * Configuration for development container settings in the project.
     * This property is initialized if `devContainerEnabled` option is provided during project creation.
     */
    readonly devContainerConfig?: DevContainerConfigBase;
    /**
     * Configuration for ESLint settings in the project.
     * This property is initialized if `eslintEnabled` option is provided during project creation.
     */
    readonly eslintConfig?: EsLintConfigBase;
    /**
     * Configuration for Git settings in the project.
     * This property is always initialized as `gitConfig` when the project is created.
     */
    gitConfig?: GitConfigBase;
    /**
     * Configuration for GitHub settings in the project.
     * This property is initialized if `githubEnabled` option is provided during project creation.
     */
    readonly githubConfig?: GitHubConfigBase;
    /**
     * Configuration for Husky settings in the project.
     * This property is initialized if `huskyEnabled` option is provided during project creation.
     */
    readonly huskyConfig?: HuskyConfigBase;
    /**
     * Configuration for Jest settings in the project.
     * This property is initialized if `jestEnabled` option is provided during project creation.
     */
    readonly jestConfig?: JestConfigBase;
    /**
     * Configuration for NPM settings in the project.
     * This property is always initialized as `npmConfig` when the project is created.
     */
    readonly npmConfig?: NpmConfigJsii;
    /**
     * Configuration for Prettier settings in the project.
     * This property is initialized if `prettierEnabled` option is provided during project creation.
     */
    readonly prettierConfig?: PrettierConfigBase;
    /**
     * Configuration for VS Code settings in the project.
     * This property is initialized if `vscodeEnabled` option is provided during project creation.
     */
    readonly vscodeConfig?: VsCodeConfigBase;
    /**
     * Configuration for TypeScript settings in the project.
     * This property is always initialized as `typescriptConfig` when the project is created.
     */
    typescriptConfig?: TypeScriptConfigBase;
    /**
     * This flag aligns with Projen structure using flags like `eslint`, `devContainer`, ....
     * for defining if configuration functionality is enabled or not. Will align with `typescriptEnabled`
     * If set to `true`, TypeScript-specific settings will be configured for the project.
     * If set to `false` TypeScript will be completely removed from the project as
     * Projen projects used in this context are always relying on TypeScript.
     */
    typescript?: boolean;
    kind: ProjectKind;
    /**
     * Initializes the project.
     * @param options Additional project options.
     */
    constructor(options: JsiiProjectOptions);
    preSynthesize(): void;
    postSynthesize(): void;
}

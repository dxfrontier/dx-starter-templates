import { TypeScriptConfigBase } from '../base/typescript';
/**
 * Implementing all relevant TypeScript configuration for the GitHubAction project.
 */
export declare class TypeScriptConfigGitHubAction extends TypeScriptConfigBase {
    protected get additionalDevDependencies(): string[];
    protected get additionalIgnorePatterns(): string[];
    /**
     * Gets the development dependencies to be removed from configuration.
     */
    protected get removeDevDependencies(): string[];
    /**
     * Removes the configuration module related config file.
     */
    protected removeConfigFile(): void;
    registerConfig(): void;
}

import { GitHubConfigBase } from '../base';
/**
 * Implementing all relevant GitHub configuration for the CapService project.
 */
export declare class GitHubConfigCapService extends GitHubConfigBase {
    protected get configFilePullRequest(): Record<string, string[]>;
    protected get configFileFeatureIssue(): Record<string, string[]>;
    /**
     * Retrieves the configuration for the story issue template file.
     *
     * @returns A record where the key is the file path and the value is an array of strings
     *          representing the content of the issue template.
     */
    protected get configFileStoryIssue(): Record<string, string[]>;
    protected get configFileReleaseWorkflow(): Record<string, string[]>;
    protected get configFileDeploymentWorkflow(): Record<string, string[]>;
    protected get configs(): Record<string, string[]>[];
    /**
     * Creates a user story issue template file.
     */
    createStoryIssue(): void;
    /**
     * Creates a deployment workflow template file.
     */
    createDeploymentWorkflow(): void;
    applyConfig(): void;
}

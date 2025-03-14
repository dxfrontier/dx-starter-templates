import { GitHubConfigBase } from '../../base';
/**
 * Implementing all relevant GitHub configuration for the CapService project.
 */
export declare class GitHubConfigCapService extends GitHubConfigBase {
    protected get configFilePullRequest(): Record<string, string[]>;
    protected get configFileReleaseWorkflow(): Record<string, string[]>;
    protected get configFileDeploymentWorkflow(): Record<string, string[]>;
    protected get configs(): Record<string, string[]>[];
    /**
     * Creates a deployment workflow template file.
     */
    createDeploymentWorkflow(): void;
    applyConfig(): void;
}

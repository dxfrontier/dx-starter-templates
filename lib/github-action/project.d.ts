import { BaseProjectOptions, BaseProject } from '../base/project';
export interface GitHubActionProjectOptions extends BaseProjectOptions {
}
/**
 * Base class for managing project GitHubAction configuration.
 */
export declare class GitHubActionProject extends BaseProject {
    static cleanCommand: string;
    /**
     * Initializes the project.
     * @param options Additional project options.
     */
    constructor(options: GitHubActionProjectOptions);
    protected initializeBaseConfigs(options: BaseProjectOptions): void;
    postSynthesize(): void;
}

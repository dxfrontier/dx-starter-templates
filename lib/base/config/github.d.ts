import { Config } from '../config';
import { ProjectTypes } from '../../util/types/project';
/**
 * Base class for implementing all relevant GitHub configuration.
 *
 * This class acts as a base for handling GitHub configuration within projects.
 */
export declare class GitHubConfigBase extends Config {
    protected attributePatterns: string[];
    constructor(project: ProjectTypes);
    /**
     * Gets the standard attributes patterns required for configuration.
     *
     * @returns A list of attributes patterns.
     */
    protected get standardAttributesPatterns(): string[];
    /**
     * Retrieves the configuration for the pull request template file.
     *
     * @returns A record where the key is the file path and the value is an array of strings
     *          representing the content of the issue template.
     */
    protected get configFilePullRequest(): Record<string, string[]>;
    /**
     * Retrieves the configuration for the bug issue template file.
     *
     * @returns A record where the key is the file path and the value is an array of strings
     *          representing the content of the issue template.
     */
    protected get configFileBugIssue(): Record<string, string[]>;
    /**
     * Retrieves the configuration for the feature request template file.
     *
     * @returns A record where the key is the file path and the value is an array of strings
     *          representing the content of the issue template.
     */
    protected get configFileFeatureIssue(): Record<string, string[]>;
    /**
     * Retrieves the configuration for the housekeeping issue template file.
     *
     * @returns A record where the key is the file path and the value is an array of strings
     *          representing the content of the issue template.
     */
    protected get configFileHousekeepingIssue(): Record<string, string[]>;
    /**
     * Retrieves the configuration for the question issue template file.
     *
     * @returns A record where the key is the file path and the value is an array of strings
     *          representing the content of the issue template.
     */
    protected get configFileQuestionIssue(): Record<string, string[]>;
    /**
     * Retrieves the configuration for the git cliff template file.
     *
     * @returns A record where the key is the file path and the value is an array of strings
     *          representing the content of the issue template.
     */
    protected get configFileCliff(): Record<string, string[]>;
    /**
     * Retrieves the configuration for the release workflow template file.
     *
     * @returns A record where the key is the file path and the value is an array of strings
     *          representing the content of the issue template.
     */
    protected get configFileReleaseWorkflow(): Record<string, string[]>;
    /**
     * Retrieves the configuration for the enforce labels workflow template file.
     *
     * @returns A record where the key is the file path and the value is an array of strings
     *          representing the content of the workflow template.
     */
    protected get configFileEnforceLabelsWorkflow(): Record<string, string[]>;
    /**
     * Creates a template file based on the provided configuration.
     *
     * @param config - The configuration object containing the file path and content.
     */
    private createTemplateFile;
    /**
     * Adds custom attributes patterns to the project's configuration.
     *
     * @param patterns - An array of file or directory patterns to be added as attributes.
     */
    addAttributePatterns(patterns: string[]): void;
    /**
     * Gets a list of all relevant config files.
     * @returns List of configs
     */
    protected get configs(): Record<string, string[]>[];
    /**
     * Retrieves the file paths for all dynamic and static configuration files.
     *
     * @returns A list of file path patterns, including dynamic configurations and static files like `.gitattributes` and `.gitignore`.
     */
    protected get filePatterns(): string[];
    protected get additionalIgnorePatterns(): string[];
    protected get additionalAttributesPatterns(): string[];
    registerConfig(): void;
    applyConfig(): void;
}

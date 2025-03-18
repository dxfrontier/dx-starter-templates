import { Config } from '../config';
import { ProjectTypes } from '../../util/types/project';
/**
 * Base class for implementing all relevant GitHub configuration.
 *
 * This class acts as a base for handling GitHub configuration within projects.
 */
export declare class IssuesConfigBase extends Config {
    constructor(project: ProjectTypes);
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
    protected get configFileStoryIssue(): Record<string, string[]>;
    /**
     * Creates a template file based on the provided configuration.
     *
     * @param config - The configuration object containing the file path and content.
     */
    private createTemplateFile;
    /**
     * Gets a list of all relevant config files.
     * @returns List of configs
     */
    protected get configs(): Record<string, string[]>[];
    /**
     * Retrieves the file paths for all dynamic configuration files.
     *
     * @returns A list of file path patterns, including dynamic configurations.
     */
    protected get filePatterns(): string[];
    protected get additionalIgnorePatterns(): string[];
    registerConfig(): void;
    applyConfig(): void;
}

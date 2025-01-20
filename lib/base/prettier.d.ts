import { Config } from './config';
import { ProjectTypes, Settings } from '../types';
/**
 * Base class for implementing all relevant Prettier configuration.
 *
 * This class acts as a base for handling Prettier configuration within projects.
 */
export declare class PrettierConfigBase extends Config {
    protected ignorePatterns: string[];
    constructor(project: ProjectTypes);
    /**
     * Gets the standard ignore patterns required for configuration.
     *
     * @returns A list of ignore patterns.
     */
    protected get standardIgnorePatterns(): string[];
    /**
     * Gets the additional development dependencies required for configuration.
     *
     * @returns A list of package names with version specifications.
     */
    protected get additionalDevDependencies(): string[];
    /**
     * Gets the additional npm scripts to be added to the project's configuration.
     *
     * @returns A record of script names and their corresponding commands.
     */
    protected get additionalScripts(): Record<string, string>;
    /**
     * Gets the config file to be added to the project's configuration.
     *
     * @returns A record of the having the path to the file as key and the content as value.
     */
    protected get configFile(): Settings;
    /**
     * Gets the ignore file to be added to the project's configuration.
     *
     * @returns A record of the having the path to the file as key and the content as value.
     */
    protected get ignoreFile(): Record<string, string[]>;
    /**
     * Adds custom ignore patterns to the project's configuration.
     *
     * @param patterns - An array of file or directory patterns to be ignored.
     */
    addIgnorePatterns(patterns: string[]): void;
    /**
     * Creates the configuration file in the project directory.
     */
    protected createConfig(): void;
    /**
     * Creates the ignore file in the project directory.
     */
    protected createIgnore(): void;
    registerConfig(): void;
    applyConfig(): void;
}

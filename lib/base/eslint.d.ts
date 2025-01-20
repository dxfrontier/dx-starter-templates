import { Config } from './config';
import { ProjectTypes } from '../types/types';
/**
 * Base class for implementing all relevant EsLint configuration.
 *
 * This class acts as a base for handling EsLint configuration within projects.
 */
export declare class EsLintConfigBase extends Config {
    protected rules: Record<string, string>;
    protected ignorePatterns: string[];
    constructor(project: ProjectTypes);
    /**
     * Gets the standard linting rules for the project.
     *
     * @returns A record of rule names and their corresponding configurations.
     */
    protected get standardRules(): Record<string, string>;
    /**
     * Gets the standard ignore patterns for the project.
     *
     * @returns An array of file or directory patterns to be ignored by the linter.
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
     * Gets the configuration file content.
     *
     * @returns An object where the key is the filename and the value is an array of file lines.
     */
    protected get configFile(): Record<string, string[]>;
    /**
     * Adds custom linting rules to the project's configuration.
     *
     * @param rules - A record of rule names and their corresponding configurations.
     */
    addRules(rules: Record<string, string>): void;
    /**
     * Adds custom ignore patterns to the project's configuration.
     *
     * @param patterns - An array of file or directory patterns to be ignored.
     */
    addIgnorePatterns(patterns: string[]): void;
    /**
     * Gets additional ignore patterns to be added to the project's ignore configuration.
     *
     * @returns A list of ignore patterns.
     */
    protected get additionalIgnorePatterns(): string[];
    registerConfig(): void;
    applyConfig(): void;
}

import { Config } from './config';
/**
 * Base class for implementing all relevant Husky configuration.
 *
 * This class acts as a base for handling Husky configuration within projects.
 */
export declare class HuskyConfigBase extends Config {
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
     * Gets additional ignore patterns to be added to the project's ignore configuration.
     *
     * @returns A list of ignore patterns.
     */
    protected get additionalIgnorePatterns(): string[];
    registerConfig(): void;
    applyConfig(): void;
}

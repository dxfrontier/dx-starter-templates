import { Config } from './config';
/**
 * Base class for implementing all relevant TypeScript configuration.
 *
 * This class acts as a base for handling TypeScript configuration within projects.
 */
export declare class TypeScriptConfigBase extends Config {
    /**
     * Gets the additional development dependencies required for configuration.
     *
     * @returns A list of package names with version specifications.
     */
    protected get additionalDevDependencies(): string[];
    /**
     * Gets additional ignore patterns to be added to the project's ignore configuration.
     *
     * @returns A list of ignore patterns.
     */
    protected get additionalIgnorePatterns(): string[];
    /**
     * Gets the configuration file content.
     *
     * @returns An object where the key is the filename and the value is an array of file lines.
     */
    protected get configFile(): Record<string, string[]>;
    registerConfig(): void;
}

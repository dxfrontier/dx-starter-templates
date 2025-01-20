import { Config } from './config';
import { Settings } from '../types';
/**
 * Base class for implementing all relevant VS Code configuration.
 *
 * This class acts as a base for handling VS Code configuration within projects.
 */
export declare class VsCodeConfigBase extends Config {
    /**
     * Gets the config file to be added to the project's configuration.
     *
     * @returns A record of the having the path to the file as key and the content as value.
     */
    protected get configFile(): Settings;
    /**
     * Gets additional ignore patterns to be added to the project's ignore configuration.
     *
     * @returns A list of ignore patterns.
     */
    protected get additionalIgnorePatterns(): string[];
    registerConfig(): void;
    applyConfig(): void;
}

import { Config } from '../config';
import { ConfigFile } from '../../types';
/**
 * Base class for implementing all relevant Husky configuration.
 *
 * This class acts as a base for handling Husky configuration within projects.
 */
export declare class HuskyConfigBase extends Config {
    protected get additionalDevDependencies(): string[];
    protected get additionalScripts(): Record<string, string>;
    protected get additionalIgnorePatterns(): string[];
    protected get configFile(): ConfigFile;
    registerConfig(): void;
    applyConfig(): void;
}

import { Config } from '../config';
import { ConfigFile } from '../../util/types/types';
/**
 * Base class for implementing all relevant DevContainer configuration.
 *
 * This class acts as a base for handling DevContainer configuration within projects.
 */
export declare class DevContainerConfigBase extends Config {
    protected get configFile(): ConfigFile;
    protected get additionalIgnorePatterns(): string[];
    registerConfig(): void;
    applyConfig(): void;
}

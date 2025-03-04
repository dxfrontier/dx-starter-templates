import { JestConfigBase } from '../../base/config/jest';
import { Settings } from '../../util/types/types';
/**
 * Implementing all relevant Jest configuration for the CapService project.
 */
export declare class JestConfigCapService extends JestConfigBase {
    protected get additionalDevDependencies(): string[];
    protected get additionalScripts(): Record<string, string>;
    protected get additionalSettings(): Settings;
    protected get additionalIgnorePatterns(): string[];
    registerConfig(): void;
}

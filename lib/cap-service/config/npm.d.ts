import { NpmConfigBase } from '../../base';
import { Settings } from '../../types';
/**
 * Implementing all relevant NPM configuration for the CapService project.
 */
export declare class NpmConfigCapService extends NpmConfigBase {
    protected get additionalDevDependencies(): string[];
    protected get additionalSettings(): Settings;
    protected get additionalIgnorePatterns(): string[];
    /**
     * Gets additional ignore patterns to be added to the project's ignore configuration.
     *
     * @returns A list of ignore patterns.
     */
    private get additionalIgnorePrettierPatterns();
    protected get additionalAttributesPatterns(): string[];
    registerConfig(): void;
}

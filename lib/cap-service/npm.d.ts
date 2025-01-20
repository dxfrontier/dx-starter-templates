import { NpmConfigBase } from '../base';
/**
 * Implementing all relevant NPM configuration for the CapService project.
 */
export declare class NpmConfigCapService extends NpmConfigBase {
    /**
     * Gets the additional settings to be added to the project's configuration.
     *
     * @returns A settings object to be merged into the project's settings.
     */
    private get additionalSettings();
    /**
     * Gets additional ignore patterns to be added to the project's ignore configuration.
     *
     * @returns A list of ignore patterns.
     */
    private get additionalIgnorePatterns();
    /**
     * Gets additional ignore patterns to be added to the project's ignore configuration.
     *
     * @returns A list of ignore patterns.
     */
    private get additionalIgnorePrettierPatterns();
    /**
     * Gets additional attributes patterns to be added to the project's ignore configuration.
     *
     * @returns A list of ignore patterns.
     */
    private get additionalAttributesPatterns();
    registerConfig(): void;
}

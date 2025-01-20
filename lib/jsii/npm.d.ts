import { NpmConfigBase } from '../base/npm';
/**
 * Implementing all relevant NPM configuration for the Jsii project.
 */
export declare class NpmConfigJsii extends NpmConfigBase {
    /**
     * Gets the additional development dependencies required for configuration.
     *
     * @returns A list of package names with version specifications.
     */
    private get additionalDevDependencies();
    /**
     * Gets the additional peer dependencies required for configuration.
     *
     * @returns A list of package names with version specifications.
     */
    private get additionalPeerDependencies();
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
    registerConfig(): void;
    applyConfig(): void;
}

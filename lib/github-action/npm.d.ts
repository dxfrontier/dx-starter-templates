import { NpmConfigBase } from '../base/npm';
/**
 * Implementing all relevant NPM configuration for the GitHubAction project.
 */
export declare class NpmConfigGitHubAction extends NpmConfigBase {
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
}

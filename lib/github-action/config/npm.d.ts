import { NpmConfigBase } from '../../base/config/npm';
import { Settings } from '../../util/types';
/**
 * Implementing all relevant NPM configuration for the GitHubAction project.
 */
export declare class NpmConfigGitHubAction extends NpmConfigBase {
    protected get additionalSettings(): Settings;
    protected get additionalIgnorePatterns(): string[];
    /**
     * Gets additional ignore patterns to be added to the project's ignore configuration.
     *
     * @returns A list of ignore patterns.
     */
    private get additionalIgnorePrettierPatterns();
    registerConfig(): void;
}

import { CommitLintConfigBase } from '../base/commitlint';
import { Settings } from '../types';
/**
 * Implementing all relevant CommitLint configuration for the GitHubAction project.
 */
export declare class CommitLintConfigGitHubAction extends CommitLintConfigBase {
    protected get additionalSettings(): Settings;
}

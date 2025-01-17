import { CommitLintConfigBase } from '../base/commitlint';
import { Settings } from '../types';

/**
 * Implementing all relevant CommitLint configuration for the GitHubAction project.
 */
export class CommitLintConfigGitHubAction extends CommitLintConfigBase {
  protected get additionalSettings(): Settings {
    return {
      'lint-staged': {
        '**/*.{yml,yaml}': ['npm run prettier'],
      },
    };
  }
}

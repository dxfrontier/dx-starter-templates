import { CommitLintConfigBase } from '../../base/config/commitlint';
import { Settings } from '../../util/types';

/**
 * Implementing all relevant CommitLint configuration for the GitHubAction project.
 */
export class CommitLintConfigGitHubAction extends CommitLintConfigBase {
  protected override get additionalSettings(): Settings {
    return {
      'lint-staged': {
        '**/*.{yml,yaml}': ['npm run prettier'],
      },
    };
  }
}

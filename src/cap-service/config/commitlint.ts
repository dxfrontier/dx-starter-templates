import { CommitLintConfigBase } from '../../base';
import { Settings } from '../../util/types';

/**
 * Implementing all relevant CommitLint configuration for the CapService project.
 */
export class CommitLintConfigCapService extends CommitLintConfigBase {
  protected override get additionalSettings(): Settings {
    return {
      'lint-staged': {
        '**/*.{ts,tsx}': ['npm run eslint', 'npm run prettier', 'npm run prettier:cds'],
      },
    };
  }
}

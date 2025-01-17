import { CapServiceProject } from '.';
import { CommitLintConfigBase } from '../base';
import { Settings } from '../types';

/**
 * Implementing all relevant CommitLint configuration for the CapService project.
 */
export class CommitLintConfigCapService extends CommitLintConfigBase {
  constructor(project: CapServiceProject) {
    super(project);
  }

  protected get additionalSettings(): Settings {
    return {
      'lint-staged': {
        '**/*.{ts,tsx}': ['npm run eslint', 'npm run prettier', 'npm run prettier:cds'],
      },
    };
  }
}

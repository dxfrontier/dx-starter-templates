import { CapServiceProject } from '.';
import { CommitLintConfigBase, Config, ConfigStrategy, NonApiCommitLintConfigBaseStrategy, Settings } from '../base';

/**
 * Implementing all relevant CommitLint configuration for the CapService project.
 */
export class CommitLintConfigCapService extends CommitLintConfigBase<CapServiceProject> {
  constructor(project: CapServiceProject) {
    super(project);

    const strategy: ConfigStrategy = new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }

  protected get additionalSettings(): Settings {
    return {
      'lint-staged': {
        '**/*.{ts,tsx}': ['npm run eslint', 'npm run prettier', 'npm run prettier:cds'],
      },
    };
  }
}

class NonApiConfigStrategy extends NonApiCommitLintConfigBaseStrategy<CapServiceProject> {
  applyConfig(config: Config<CapServiceProject>): void {
    super.applyConfig(config);
  }
}

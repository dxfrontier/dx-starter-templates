import { CapServiceProject } from '.';
import { EsLintConfigBase } from '../base';

/**
 * Implementing all relevant EsLint configuration for the CapService project.
 */
export class EsLintConfigCapService extends EsLintConfigBase {
  constructor(project: CapServiceProject) {
    super(project);
  }

  protected get standardIgnorePatterns(): string[] {
    return ['test/', 'dist/', 'gen/', '@cds-models', 'default-env.js', '@dispatcher'];
  }
}

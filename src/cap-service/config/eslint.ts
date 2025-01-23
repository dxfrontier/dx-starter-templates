import { EsLintConfigBase } from '../../base';

/**
 * Implementing all relevant EsLint configuration for the CapService project.
 */
export class EsLintConfigCapService extends EsLintConfigBase {
  protected override get standardIgnorePatterns(): string[] {
    return ['test/', 'dist/', 'gen/', '@cds-models', 'default-env.js', '@dispatcher'];
  }
}

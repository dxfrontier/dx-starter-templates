import { GitConfigBase } from '../../base';

/**
 * Implementing all relevant Git configuration for the CapService project.
 */
export class GitConfigCapService extends GitConfigBase {
  protected override get standardIgnorePatterns(): string[] {
    return ['gen', 'mta_archives', '*.mtar', '*.mta', 'resources', '@cds-models', '*.bak', 'default-*.json'];
  }
}

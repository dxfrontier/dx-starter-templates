import { CapServiceProject } from '.';
import { Config, ConfigStrategy, GitConfigBase, GitConfigBaseStrategy } from '../base';

/**
 * Implementing all relevant Git configuration for the CapService project.
 */
export class GitConfigCapService extends GitConfigBase<CapServiceProject> {
  constructor(project: CapServiceProject) {
    super(project);

    const strategy: ConfigStrategy = new StandardConfigStrategy();
    this.setStrategy(strategy);
  }

  /**
   * Gets the standard ignore patterns required for configuration.
   *
   * @returns A list of ignore patterns.
   */
  protected get standardIgnorePatterns(): string[] {
    return ['gen', 'mta_archives', '*.mtar', '*.mta', 'resources', '@cds-models', '*.bak', 'default-*.json'];
  }
}

class StandardConfigStrategy extends GitConfigBaseStrategy<CapServiceProject> {
  applyConfig(config: Config<CapServiceProject>): void {
    super.applyConfig(config);
  }
}

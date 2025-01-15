import { CapServiceProject } from '.';
import { Config, ConfigStrategy, HuskyConfigBase, NonApiHuskyConfigBaseStrategy } from '../base';

/**
 * Implementing all relevant Husky configuration for the CapService project.
 */
export class HuskyConfigCapService extends HuskyConfigBase<CapServiceProject> {
  constructor(project: CapServiceProject) {
    super(project);

    const strategy: ConfigStrategy = new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }

  protected override get configFile(): Record<string, string[]> {
    return {
      ...super.configFile,
      '.husky/pre-push': ['npm run build'],
    };
  }
}

class NonApiConfigStrategy extends NonApiHuskyConfigBaseStrategy<CapServiceProject> {
  applyConfig(config: Config<CapServiceProject>): void {
    super.applyConfig(config);
  }
}

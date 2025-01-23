import { HuskyConfigBase } from '../../base';

/**
 * Implementing all relevant Husky configuration for the CapService project.
 */
export class HuskyConfigCapService extends HuskyConfigBase {
  protected override get configFile(): Record<string, string[]> {
    return {
      ...super.configFile,
      '.husky/pre-push': ['npm run build'],
    };
  }
}

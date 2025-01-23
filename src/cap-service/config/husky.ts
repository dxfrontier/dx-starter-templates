import { HuskyConfigBase } from '../../base';
import { ConfigFile } from '../../types';

/**
 * Implementing all relevant Husky configuration for the CapService project.
 */
export class HuskyConfigCapService extends HuskyConfigBase {
  protected override get configFile(): ConfigFile {
    return {
      ...super.configFile,
      '.husky/pre-push': ['npm run build'],
    };
  }
}

import { CapServiceProject } from '.';
import { HuskyConfigBase } from '../base';

/**
 * Implementing all relevant Husky configuration for the CapService project.
 */
export class HuskyConfigCapService extends HuskyConfigBase {
  constructor(project: CapServiceProject) {
    super(project);
  }

  protected override get configFile(): Record<string, string[]> {
    return {
      ...super.configFile,
      '.husky/pre-push': ['npm run build'],
    };
  }
}

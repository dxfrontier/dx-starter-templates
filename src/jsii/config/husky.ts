import { HuskyConfigBase } from '../../base';
import { ConfigFile } from '../../util/types';

/**
 * Implementing all relevant Husky configuration for the JsiProject project.
 */
export class HuskyConfigJsii extends HuskyConfigBase {
  protected override get configFile(): ConfigFile {
    return {
      ...super.configFile,
      '.husky/pre-push': ['npx projen build', 'git checkout -- cliff.toml'],
    };
  }
}

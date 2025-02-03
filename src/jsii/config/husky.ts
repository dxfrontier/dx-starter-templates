import { HuskyConfigBase } from '../../base';
import { ConfigFile } from '../../util/types';

/**
 * Implementing all relevant Husky configuration for the Jsii project.
 */
export class HuskyConfigJsii extends HuskyConfigBase {
  protected override get configFile(): ConfigFile {
    return {
      ...super.configFile,
      '.husky/pre-push': [
        'npx projen build',
        '# This will restore staged the modified files by running `npx projen`',
        'git checkout -- cliff.toml package.json package-lock.json',
      ],
    };
  }
}

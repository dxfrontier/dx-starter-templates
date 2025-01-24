import { TypeScriptConfigBase } from '../../base/config/typescript';
import { ConfigFile } from '../../util/types';

/**
 * Implementing all relevant TypeScript configuration for the Jsii project.
 */
export class TypeScriptConfigJsii extends TypeScriptConfigBase {
  protected override get configFile(): ConfigFile {
    return {
      'tsconfig.dev.json': {},
    };
  }
}

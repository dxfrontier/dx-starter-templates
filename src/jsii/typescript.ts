import { TypeScriptConfigBase } from '../base/typescript';
import { Settings } from '../types';

/**
 * Implementing all relevant TypeScript configuration for the Jsii project.
 */
export class TypeScriptConfigJsii extends TypeScriptConfigBase {
  protected override get configFile(): Record<string, Settings> {
    return {
      'tsconfig.dev.json': {},
    };
  }
}

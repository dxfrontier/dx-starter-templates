import { TypeScriptConfigBase } from '../base/typescript';

/**
 * Implementing all relevant TypeScript configuration for the Jsii project.
 */
export class TypeScriptConfigJsii extends TypeScriptConfigBase {
  protected override get configFile(): Record<string, string[]> {
    return {
      'tsconfig.dev.json': [],
    };
  }
}

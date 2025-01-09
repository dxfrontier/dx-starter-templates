import { TypeScriptConfigBase } from '../base';
import { ProjectOptions } from '../types';

/**
 * TypeScript implementing all relevant configuration for the Jsii project.
 * @extends TypeScriptConfigBase
 */
export class TypeScriptConfigJsii extends TypeScriptConfigBase {
  /**
   * @override
   */
  public static get projectOptions(): ProjectOptions {
    return {
      projenrcTs: true,
      disableTsconfigDev: false,
      tsconfig: {
        compilerOptions: {
          allowImportingTsExtensions: true,
        },
      },
      // disableTsconfig: false, // cannot be set as Jsii forces its own Typescript file
    };
  }
}
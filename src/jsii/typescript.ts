import { TypeScriptConfigBase } from '../base';
import { ProjectStartupOptions } from '../types';

/**
 * TypeScript implementing all relevant configuration for the Jsii project.
 * @extends TypeScriptConfigBase
 */
export class TypeScriptConfigJsii extends TypeScriptConfigBase {
  /**
   * @override
   */
  public static get projectOptions(): ProjectStartupOptions {
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
  
  /**
   * @override
   */
  protected get deleteConfigFilePaths(): string[] {
    return ['tsconfig.dev.json'];
  }

  /**
   * @override
   */
  protected get configFilePath(): string {
    return 'tsconfig.dev.json';
  }

  /**
   * @override
   * Existing config of projen is taken into account.
   */
  protected get config(): Record<string, unknown> {
    // const content = this.deletedConfigFileContents.get(this.configFilePath);
    // if (content) {
    //   return JSON.parse(content);
    // }

    return {};
  }
}
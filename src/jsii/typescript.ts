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
   * Use Projen standard TypeScript configuration.
   */
  protected get deleteConfigFilePaths(): string[] {
    return [];
  }

  /**
   * @override
   * Use Projen standard TypeScript configuration.
   */
  protected get configFilePath(): string {
    return '';
  }

  /**
   * @override
   * Use Projen standard TypeScript configuration.
   */
  protected createConfig(): void {}

  /**
   * @override
   * Use Projen standard TypeScript configuration.
   */
  protected get config(): Record<string, unknown> {
    return {};
  }
}
import { TypeScriptConfigBase } from '../base';

/**
 * TypeScript implementing all relevant configuration for the Jsii project.
 * @extends TypeScriptConfigBase
 */
export class TypeScriptConfigJsii extends TypeScriptConfigBase {
  /**
   * @override
   */
  protected get deleteConfigFilePaths(): string[] {
    return [];
  }

  /**
   * @override
   */
  protected get configFilePath(): string {
    return '';
  }

  /**
   * @override
   */
  protected createConfig(): void {}

  /**
   * @override
   */
  protected get tsConfig(): string[] {
    return [];
  }

  /**
   * @override
   */
  public setup(): void {}
}
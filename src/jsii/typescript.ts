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
      // disableTsconfig: false, // cannot be set as Jsii forces its own Typescript file
      ...super.projectOptions,
    };
  }

  /**
   * @override
   */
  protected addConfig(): void {
    this.npmConfig?.addDevDependencies(this.config.devDependencies!);
  }
}
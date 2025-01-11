import { NpmConfigJsii, PrettierConfigJsii } from '.';
import { Config, TypeScriptConfigBase } from '../base';
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
  public setup(): void {
    // Dependency Injected Modules in shared config registry
    Config.getConfigFromRegistry<NpmConfigJsii>('npm')?.addDevDependencies(this.config.devDependencies!);
    Config.getConfigFromRegistry<PrettierConfigJsii>('prettier')?.addIgnoreEntries(this.config.update as string[]);
  }
}
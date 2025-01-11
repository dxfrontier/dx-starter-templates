import { NpmConfigJsii, PrettierConfigJsii } from '.';
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
  public setup(): void {
    // Dependency Injected Modules in shared config registry
    this.getConfigFromRegistry<NpmConfigJsii>('npm')?.addDevDependencies(this.config.devDependencies!);
    this.getConfigFromRegistry<PrettierConfigJsii>('prettier')?.addIgnoreEntries(this.config.entries as string[]);
  }
}
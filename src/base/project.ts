import { TypeScriptProject, TypeScriptProjectOptions } from 'projen/lib/typescript';
import { ProjectBaseOptions } from './options';

export interface BaseProjectOptions extends TypeScriptProjectOptions { }

/**
 * Base class for managing project configuration.
 */
export class BaseProject extends TypeScriptProject {
  /**
   * Initializes the project.
   * @param options Additional project options.
   */
  constructor(options: BaseProjectOptions) {
    super({
      ...ProjectBaseOptions.sharedOptions(options),
      defaultReleaseBranch: options.defaultReleaseBranch ?? 'dev',
      
      disableTsconfigDev: options.disableTsconfigDev ?? true,
      disableTsconfig: false,
      tsconfig: {
        compilerOptions: {
          allowImportingTsExtensions: true,
        },
      },
    });
  }

  public override preSynthesize(): void {
    super.preSynthesize();
    console.log('BaseProject preSynthesize')
  }

  public override postSynthesize(): void {
    super.postSynthesize();
    console.log('JsiiProject postSynthesize')
  }
}

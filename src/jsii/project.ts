import { cdk } from 'projen';
import { NpmConfigJsii } from './npm';
import { ProjectBaseOptions } from '../base';

export interface JsiiProjectOptions extends cdk.JsiiProjectOptions { }

/**
 * Base class for managing project configuration.
 */
export class JsiiProject extends cdk.JsiiProject {
  /**
   * Initializes the project.
   * @param options Additional project options.
   */
  constructor(options: JsiiProjectOptions) {
    super({
      ...ProjectBaseOptions.sharedOptions(options),
      
      disableTsconfigDev: options.disableTsconfigDev ?? false,
      // disableTsconfig: false, // cannot be set as Jsii forces its own Typescript file
      tsconfig: {
        compilerOptions: {
          allowImportingTsExtensions: true,
        },
      },
    });

    new NpmConfigJsii(this);
  }

  public override preSynthesize(): void {
    super.preSynthesize();
    console.log('JsiiProject preSynthesize')
  }

  public override postSynthesize(): void {
    super.postSynthesize();
    console.log('JsiiProject postSynthesize')
  }
}

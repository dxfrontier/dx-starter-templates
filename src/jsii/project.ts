import { cdk } from 'projen';
import { JsiiConfigJsii } from './jsii';
import { BaseOptions } from '../base';

export interface JsiiProjectOptions extends cdk.JsiiProjectOptions {
  readonly projenEnabled?: boolean;
  readonly devContainerEnabled?: boolean;
  readonly eslintEnabled?: boolean;
  readonly githubEnabled?: boolean;
  readonly huskyEnabled?: boolean;
  readonly jestEnabled?: boolean;
  readonly npmEnabled?: boolean;
  readonly prettierEnabled?: boolean;
  readonly typescriptEnabled?: boolean;
  readonly vscodeEnabled?: boolean;
  readonly sampleCodeEnabled?: boolean;
}

/**
 * Base class for managing project Jsii configuration.
 */
export class JsiiProject extends cdk.JsiiProject {
  /**
   * Initializes the project.
   * @param options Additional project options.
   */
  constructor(options: JsiiProjectOptions) {
    super({
      ...BaseOptions.sharedOptions(options),
      disableTsconfigDev: options.disableTsconfigDev ?? false,
      disableTsconfig: options.disableTsconfig ?? true, // cannot be set as Jsii forces its own Typescript file
    });

    new JsiiConfigJsii(this);
  }

  public override preSynthesize(): void {
    super.preSynthesize();
  }

  public override postSynthesize(): void {
    super.postSynthesize();
  }
}

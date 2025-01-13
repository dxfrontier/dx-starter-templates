import { TypeScriptProject, TypeScriptProjectOptions } from 'projen/lib/typescript';
import { BaseOptions } from './options';

export interface BaseProjectOptions extends TypeScriptProjectOptions {
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
  readonly npm?: boolean;
}

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
      ...BaseOptions.sharedOptions(options),
    });
  }

  public override preSynthesize(): void {
    super.preSynthesize();
  }

  public override postSynthesize(): void {
    super.postSynthesize();
  }
}

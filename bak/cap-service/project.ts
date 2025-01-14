import { BaseOptions, BaseProject, BaseProjectOptions } from '../base';

export interface CapServiceProjectOptions extends BaseProjectOptions {}

/**
 * Base class for managing SAP Capire service project configuration.
 */
export class CapServiceProject extends BaseProject {
  /**
   * Initializes the project.
   * @param options Additional project options.
   */
  constructor(options: CapServiceProjectOptions) {
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

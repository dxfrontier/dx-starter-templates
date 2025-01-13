import { GitConfigTerraformModule } from '.';
import { BaseOptions, BaseProject, BaseProjectOptions } from '../base';

export interface TerraformModuleProjectOptions extends BaseProjectOptions { }

/**
 * Base class for managing GitHub Action project configuration.
 */
export class TerraformModuleProject extends BaseProject {
  /**
   * Initializes the project.
   * @param options Additional project options.
   */
  constructor(options: TerraformModuleProjectOptions) {
    super({
      ...BaseOptions.sharedOptions(options),
    });

    this.setGitConfig(new GitConfigTerraformModule(this));
  }

  public override preSynthesize(): void {
    super.preSynthesize();
  }

  public override postSynthesize(): void {
    super.postSynthesize();
  }
}

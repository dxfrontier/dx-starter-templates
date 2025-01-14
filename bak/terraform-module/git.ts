import { TerraformModuleProject } from '.';
import { GitBaseConfig, GitBaseConfigStrategy } from '../base';

/**
 * Implementing all relevant Git configuration for the TerraformModule project.
 * @extends GitBaseConfig
 */
export class GitConfigTerraformModule extends GitBaseConfig<TerraformModuleProject> {
  constructor(project: TerraformModuleProject) {
    super(project);

    const strategy = new ConfigStrategy();
    this.setStrategy(strategy);
    
  }
}

class ConfigStrategy extends GitBaseConfigStrategy<TerraformModuleProject> {
  registerConfig(project: TerraformModuleProject): void {
    super.registerConfig(project);
    console.log('git - TerraformModule')
  }
}
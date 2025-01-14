import { TerraformModuleProject } from '.';
import { EsLintBaseConfig } from '../base';

/**
 * Implementing all relevant eslint configuration for the TerraformModule project.
 * @extends EsLintBaseConfig
 */
export class EsLintConfigTerraformModule extends EsLintBaseConfig<TerraformModuleProject> {}

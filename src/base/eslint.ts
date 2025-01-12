import { Config } from './config';
import { BaseProject } from './project';

/**
 * Base class for EsLint implementing all relevant configuration.
 * @extends Config
 */
export class EsLintBaseConfig extends Config {
  constructor(project: BaseProject) {
    super(project);
  }
}
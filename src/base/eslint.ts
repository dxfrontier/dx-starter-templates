import { Config } from './config';
import { BaseProject } from './project';

/**
 * Base class for  implementing all relevant eslint configuration.
 * @extends Config
 */
export class EsLintBaseConfig extends Config {
  constructor(project: BaseProject) {
    super(project);
  }
}
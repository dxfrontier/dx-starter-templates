import { Config } from './config';
import { BaseProject } from './project';

/**
 * Base class for Husky implementing all relevant configuration.
 * @extends Config
 */
export class HuskyBaseConfig extends Config {
  constructor(project: BaseProject) {
    super(project);
  }
}
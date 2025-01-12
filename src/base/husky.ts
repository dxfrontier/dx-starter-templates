import { Config } from './config';
import { BaseProject } from './project';

/**
 * Base class for implementing all relevant Husky configuration.
 * @extends Config
 */
export class HuskyBaseConfig extends Config {
  constructor(project: BaseProject) {
    super(project);
  }
}
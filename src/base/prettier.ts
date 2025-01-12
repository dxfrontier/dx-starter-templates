import { Config } from './config';
import { BaseProject } from './project';

/**
 * Base class for implementing all relevant Prettier configuration.
 * @extends Config
 */
export class PrettierBaseConfig extends Config {
  constructor(project: BaseProject) {
    super(project);
  }
}
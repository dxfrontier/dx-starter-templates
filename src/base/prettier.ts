import { Config } from './config';
import { BaseProject } from './project';

/**
 * Base class for Prettier implementing all relevant configuration.
 * @extends Config
 */
export class PrettierBaseConfig extends Config {
  constructor(project: BaseProject) {
    super(project);
  }
}
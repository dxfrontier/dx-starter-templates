import { Config } from './config';
import { BaseProject } from './project';

/**
 * Base class for DevContainer implementing all relevant configuration.
 * @extends Config
 */
export class DevContainerBaseConfig extends Config {
  constructor(project: BaseProject) {
    super(project);
  }
}
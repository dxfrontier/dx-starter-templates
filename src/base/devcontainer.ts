import { Config } from './config';
import { BaseProject } from './project';

/**
 * Base class for implementing all relevant DevContainer configuration.
 * @extends Config
 */
export class DevContainerBaseConfig extends Config {
  constructor(project: BaseProject) {
    super(project);
  }
}
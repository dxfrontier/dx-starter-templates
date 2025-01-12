import { Config } from './config';
import { BaseProject } from './project';

/**
 * Base class for implementing all GIT relevant configuration.
 * @extends Config
 */
export class GitBaseConfig extends Config {
  constructor(project: BaseProject) {
    super(project);
  }
}
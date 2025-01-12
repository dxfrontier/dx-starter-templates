import { Config } from './config';
import { BaseProject } from './project';

/**
 * Base class for implementing all GitHub relevant configuration.
 * @extends Config
 */
export class GitHubBaseConfig extends Config {
  constructor(project: BaseProject) {
    super(project);
  }
}
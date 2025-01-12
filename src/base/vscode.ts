import { Config } from './config';
import { BaseProject } from './project';

/**
 * Base class for VsCode implementing all relevant configuration.
 * @extends Config
 */
export class VsCodeBaseConfig extends Config {
  constructor(project: BaseProject) {
    super(project);
  }
}
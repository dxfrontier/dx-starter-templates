import { Config } from './config';
import { BaseProject } from './project';

/**
 * Base class for TypeScript implementing all relevant configuration.
 * @extends Config
 */
export class TypeScriptBaseConfig extends Config {
  constructor(project: BaseProject) {
    super(project);
  }
}
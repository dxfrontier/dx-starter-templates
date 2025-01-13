import { JsiiProject } from '../jsii';
import { Config } from './config';
import { BaseProject } from './project';

/**
 * Base class for implementing all relevant Prettier configuration.
 * @extends Config
 */
export class PrettierBaseConfig<T extends BaseProject | JsiiProject> extends Config<T> {
  constructor(project: T) {
    super(project);
  }
}
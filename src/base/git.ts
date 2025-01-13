import { JsiiProject } from '../jsii';
import { Config } from './config';
import { BaseProject } from './project';

/**
 * Base class for implementing all GIT relevant configuration.
 * @extends Config
 */
export class GitBaseConfig<T extends BaseProject | JsiiProject> extends Config<T> {
  constructor(project: T) {
    super(project);
  }
}
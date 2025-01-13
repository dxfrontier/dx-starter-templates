import { JsiiProject } from '../jsii';
import { Config } from './config';
import { BaseProject } from './project';

/**
 * Base class for implementing all relevant VS Code configuration.
 * @extends Config
 */
export class VsCodeBaseConfig<T extends BaseProject | JsiiProject> extends Config<T> {
  constructor(project: T) {
    super(project);
  }
}
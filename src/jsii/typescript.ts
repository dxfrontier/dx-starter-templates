import { JsiiProject } from '.';
import { TypeScriptBaseConfig } from '../base';

/**
 * Implementing all relevant TypeScript configuration for the Jsii project.
 * @extends TypeScriptBaseConfig
 */
export class TypeScriptConfigJsii extends TypeScriptBaseConfig<JsiiProject> {
  constructor(project: JsiiProject) {
    super(project);
  }
}
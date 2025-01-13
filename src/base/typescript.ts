import { JsiiProject } from '../jsii';
import { Config } from './config';
import { BaseProject } from './project';

/**
 * Base class for implementing all relevant TypeScript configuration.
 * @extends Config
 */
export class TypeScriptBaseConfig<T extends BaseProject | JsiiProject> extends Config<T> {
  constructor(project: T) {
    super(project);
  }
}


// disableTsconfig: false,
//       tsconfig: {
//         compilerOptions: {
//           allowImportingTsExtensions: true,
//         },
      // },
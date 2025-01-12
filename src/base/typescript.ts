import { Config } from './config';
import { BaseProject } from './project';

/**
 * Base class for implementing all relevant TypeScript configuration.
 * @extends Config
 */
export class TypeScriptBaseConfig extends Config {
  constructor(project: BaseProject) {
    super(project);
  }
}


// disableTsconfig: false,
//       tsconfig: {
//         compilerOptions: {
//           allowImportingTsExtensions: true,
//         },
      // },
/**
 * Test files test the whole results of the Projen project creation
 * configuration orchestration. E.g. the npm test module does test the result of the whole `package.json` file
 * and that the devcontainer config module scripts are created. The devcontainer test module itself will not test
 * if the related devcontainer npm scripts are created.
 * 
 * The `setup.ts` file includes all relevant bootstrap steps for the test files.
 * It is important that each test file imports and uses the `snapshot` otherwise the bootstrap will not run for this test file.
 **/

import * as typescript from '../../shared/typescript';
import { snapshot } from './setup';

/**
 * We use not a describe block here because the jest test runner `Test Results` pane will show the test names.
 * The `Testing` pane shows a hierarchy but for this hierarchy we already have the test file names available. 
 */
test('TypeScript settings are set properly', (): void => {
  const expectedSettings: Record<string, unknown> = {
    "compilerOptions": {
      "alwaysStrict": true,
      "declaration": true,
      "esModuleInterop": true,
      "experimentalDecorators": true,
      "inlineSourceMap": true,
      "inlineSources": true,
      "lib": [
        "es2019"
      ],
      "module": "CommonJS",
      "noEmitOnError": false,
      "noFallthroughCasesInSwitch": true,
      "noImplicitAny": true,
      "noImplicitReturns": true,
      "noImplicitThis": true,
      "noUnusedLocals": true,
      "noUnusedParameters": true,
      "resolveJsonModule": true,
      "strict": true,
      "strictNullChecks": true,
      "strictPropertyInitialization": true,
      "stripInternal": true,
      "target": "ES2019",
      "allowImportingTsExtensions": true
    },
    "include": [
      "src/**/*.ts",
      "test/**/*.ts",
      ".projenrc.ts",
      "projenrc/**/*.ts"
    ],
    "exclude": [
      "node_modules"
    ]
  };
  typescript.testSettings(snapshot, expectedSettings);
});

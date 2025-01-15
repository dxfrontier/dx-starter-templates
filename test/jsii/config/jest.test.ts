/**
 * Test files test the whole results of the Projen project creation
 * configuration orchestration. E.g. the npm test module does test the result of the whole `package.json` file
 * and that the devcontainer config module scripts are created. The devcontainer test module itself will not test
 * if the related devcontainer npm scripts are created.
 *
 * The `setup.ts` file includes all relevant bootstrap steps for the test files.
 * It is important that each test file imports and uses the `snapshot` otherwise the bootstrap will not run for this test file.
 **/

import * as js from '../../shared/jest';
import { snapshot } from './setup';

/**
 * We use not a describe block here because the jest test runner `Test Results` pane will show the test names.
 * The `Testing` pane shows a hierarchy but for this hierarchy we already have the test file names available.
 */
test('Jest settings are set properly', (): void => {
  const expectedSettings: Record<string, unknown> = {
    // "jest": {
    coverageProvider: 'v8',
    testMatch: [
      '<rootDir>/@(src|test)/**/*(*.)@(spec|test).ts?(x)',
      '<rootDir>/@(src|test)/**/__tests__/**/*.ts?(x)',
      '<rootDir>/@(projenrc)/**/*(*.)@(spec|test).ts?(x)',
      '<rootDir>/@(projenrc)/**/__tests__/**/*.ts?(x)',
    ],
    clearMocks: true,
    collectCoverage: true,
    coverageReporters: ['json', 'lcov', 'clover', 'cobertura', 'text'],
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: ['/node_modules/'],
    testPathIgnorePatterns: ['/node_modules/'],
    watchPathIgnorePatterns: ['/node_modules/'],
    reporters: [
      'default',
      [
        'jest-junit',
        {
          outputDirectory: 'test-reports',
        },
      ],
    ],
    transform: {
      '^.+\\.[t]sx?$': [
        'ts-jest',
        {
          tsconfig: 'tsconfig.dev.json',
        },
      ],
    },
    // }
  };
  js.testSettings(snapshot, expectedSettings);
});

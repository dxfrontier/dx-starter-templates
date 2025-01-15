/**
 * Test files test the whole results of the Projen project creation
 * configuration orchestration. E.g. the npm test module does test the result of the whole `package.json` file
 * and that the devcontainer config module scripts are created. The devcontainer test module itself will not test
 * if the related devcontainer npm scripts are created.
 *
 * The `setup.ts` file includes all relevant bootstrap steps for the test files.
 * It is important that each test file imports and uses the `snapshot` otherwise the bootstrap will not run for this test file.
 **/

import * as npm from '../../shared/npm';
import { snapshot } from './setup';

/**
 * We use not a describe block here because the jest test runner `Test Results` pane will show the test names.
 * The `Testing` pane shows a hierarchy but for this hierarchy we already have the test file names available.
 */
test('General info in package.json is set properly', (): void => {
  const expectedInfo: Record<string, unknown> = {
    name: 'my-cap-service',
    version: '0.0.0',
    license: 'UNLICENSED',
    main: 'lib/index.js',
    types: 'lib/index.d.ts',
  };
  npm.testPackageJsonGeneral(snapshot, expectedInfo);
});

test('Files property in package.json is set properly', (): void => {
  const additionalPatterns: string[] = ['gen'];
  npm.testPackageJsonFiles(snapshot, additionalPatterns);
});

test('DevDependencies are added properly', (): void => {
  const expectedDevDependencies: Record<string, string> = {
    '@commitlint/cli': '^19.6.1',
    '@commitlint/config-conventional': '^19.6.0',
    '@commitlint/prompt-cli': '^19.7.0',
    '@commitlint/types': '^19.5.0',
    '@types/jest': '*',
    '@types/node': '^22.10.6',
    '@typescript-eslint/eslint-plugin': '^8.20.0',
    '@typescript-eslint/parser': '^8.20.0',
    constructs: '^10.0.0',
    eslint: '^9.18.0',
    'eslint-config-prettier': '^10.0.1',
    'eslint-import-resolver-typescript': '^3.7.0',
    'eslint-plugin-import': '^2.31.0',
    'eslint-plugin-prettier': '^5.2.1',
    husky: '^9.1.7',
    jest: '*',
    'jest-junit': '^16',
    'lint-staged': '^15.3.0',
    prettier: '^3.4.2',
    projen: '*',
    'ts-jest': '*',
    'ts-node': '^10.9.2',
    typescript: '^5.7.3',
    'typescript-eslint': '^8.20.0',
  };
  npm.testDevDependencies(snapshot, expectedDevDependencies);
});

test('Scripts are added properly', (): void => {
  const expectedTasks: Record<string, unknown> = {
    commit: 'commit',
    eslint: 'eslint .',
    prepare: 'husky || true',
    prettier: 'prettier . --write',
    'prettier:cds': 'format-cds',
  };
  npm.testScripts(snapshot, expectedTasks);
});

test('Other configuration modules specific settings in package.json are set properly', (): void => {
  const expectedSettings: Record<string, unknown> = {
    'lint-staged': {
      '**/*.{ts,tsx}': ['npm run eslint', 'npm run prettier', 'npm run prettier:cds'],
    },
  };
  npm.testPackageJsonSettings(snapshot, expectedSettings);
});

test('Projen standard npm scripts are removed from package.json', (): void => {
  const keys: string[] = Object.keys(snapshot['package.json']!.scripts);
  const scriptsToRemove: string[] = [
    'bump',
    'clobber',
    'compile',
    'default',
    'eject',
    'package',
    'post-compile',
    'post-upgrade',
    'pre-compile',
    'release',
    'test',
    'test:watch',
    'unbump',
    'upgrade',
    'watch',
    'projen',
  ];
  const keyFound: boolean = keys.some((key: string): boolean => scriptsToRemove.includes(key));
  expect(keyFound).toBe(false);
});

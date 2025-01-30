/**
 * Test files test the whole results of the Projen project creation
 * configuration orchestration. E.g. the npm test module does test the result of the whole `package.json` file
 * and that the devcontainer config module scripts are created. The devcontainer test module itself will not test
 * if the related devcontainer npm scripts are created.
 *
 * The `setup.ts` file includes all relevant bootstrap steps for the test files.
 * It is important that each test file imports and uses the `snapshot` otherwise the bootstrap will not run for this test file.
 **/

import { constants } from '../../../src/util/constants';
import * as npm from '../../shared/npm';
import { snapshot } from './setup';

/**
 * We use not a describe block here because the jest test runner `Test Results` pane will show the test names.
 * The `Testing` pane shows a hierarchy but for this hierarchy we already have the test file names available.
 */
test('General info in package.json is set properly', (): void => {
  const expectedInfo: Record<string, unknown> = {
    name: 'my-github-action',
    version: '0.0.0',
    license: 'UNLICENSED',
    main: 'lib/index.js',
    types: 'lib/index.d.ts',
  };
  npm.testPackageJsonGeneral(snapshot, expectedInfo);
});

test('Files property in package.json is set properly', (): void => {
  const additionalPatterns: string[] = ['action.yml'];
  npm.testPackageJsonFiles(snapshot, additionalPatterns);
});

test('DevDependencies are added properly', (): void => {
  const expectedDevDependencies: Record<string, string> = {
    [constants['@commitlint/cli'].NAME]: constants['@commitlint/cli'].VERSION,
    [constants['@commitlint/config-conventional'].NAME]: constants['@commitlint/config-conventional'].VERSION,
    [constants['@commitlint/prompt-cli'].NAME]: constants['@commitlint/prompt-cli'].VERSION,
    [constants['@commitlint/types'].NAME]: constants['@commitlint/types'].VERSION,
    '@types/node': '*',
    constructs: '^10.0.0', // ????
    [constants['husky'].NAME]: constants['husky'].VERSION,
    [constants['lint-staged'].NAME]: constants['lint-staged'].VERSION,
    [constants['prettier'].NAME]: constants['prettier'].VERSION,
    projen: '*',
  };
  npm.testDevDependencies(snapshot, expectedDevDependencies);
});

test('Scripts are added properly', (): void => {
  const expectedTasks: Record<string, unknown> = {
    commit: 'commit',
    prepare: 'husky || true',
    prettier: 'prettier . --write',
  };
  npm.testScripts(snapshot, expectedTasks);
});

test('Other configuration modules specific settings in package.json are set properly', (): void => {
  const expectedSettings: Record<string, unknown> = {
    'lint-staged': {
      '**/*.{yml,yaml}': ['npm run prettier'],
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
    'eslint',
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

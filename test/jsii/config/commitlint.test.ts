/**
 * Test files test the whole results of the Projen project creation
 * configuration orchestration. E.g. the npm test module does test the result of the whole `package.json` file
 * and that the devcontainer config module scripts are created. The devcontainer test module itself will not test
 * if the related devcontainer npm scripts are created.
 * 
 * The `setup.ts` file includes all relevant bootstrap steps for the test files.
 * It is important that each test file imports and uses the `snapshot` otherwise the bootstrap will not run for this test file.
 **/

import * as commitlint from '../../shared/commitlint';
import { snapshot } from './setup';

/**
 * We use not a describe block here because the jest test runner `Test Results` pane will show the test names.
 * The `Testing` pane shows a hierarchy but for this hierarchy we already have the test file names available. 
 */
test('Commitlintrc template matches expected template', (): void => {
  commitlint.testRcTemplate(snapshot);
});

test('CommitLint npm scrips are added properly', (): void => {
  commitlint.testScripts(snapshot);
});

test('CommitLint configuration in package.json is set properly', (): void => {
  const expectedConfiguration: LintStagedConfig = {
    '**/*.ts': ['npm run eslint', 'npm run prettier'],
  };
  expect(snapshot['package.json']!['lint-staged']).toStrictEqual(expectedConfiguration);
});

test('CommitLint npm devDependencies are added properly', (): void => {
  commitlint.testDevDependencies(snapshot);
});

test('CommitLint related files are added to .gitattributes and defined as linguist-generated', (): void => {
  commitlint.testGitAttributes(snapshot);
});

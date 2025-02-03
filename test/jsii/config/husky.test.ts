/**
 * Test files test the whole results of the Projen project creation
 * configuration orchestration. E.g. the npm test module does test the result of the whole `package.json` file
 * and that the devcontainer config module scripts are created. The devcontainer test module itself will not test
 * if the related devcontainer npm scripts are created.
 *
 * The `setup.ts` file includes all relevant bootstrap steps for the test files.
 * It is important that each test file imports and uses the `snapshot` otherwise the bootstrap will not run for this test file.
 **/

import * as husky from '../../shared/husky';
import { snapshot } from './setup';

/**
 * We use not a describe block here because the jest test runner `Test Results` pane will show the test names.
 * The `Testing` pane shows a hierarchy but for this hierarchy we already have the test file names available.
 */
test('Commit-msg hook matches expected template', (): void => {
  husky.testCommitMsgHook(snapshot);
});

test('Pre-commit hook matches expected template', (): void => {
  husky.testPreCommitHook(snapshot);
});

test('Pre-push hook matches expected template', (): void => {
  const expectedTemplateLines: string[] = [
    'npx projen build',
    '# This will restore staged the modified files by running `npx projen`',
    'git checkout -- cliff.toml package.json package-lock.json',
  ];
  husky.testPrePushHook(snapshot, expectedTemplateLines);
});

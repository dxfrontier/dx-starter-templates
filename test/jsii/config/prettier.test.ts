/**
 * Test files test the whole results of the Projen project creation
 * configuration orchestration. E.g. the npm test module does test the result of the whole `package.json` file
 * and that the devcontainer config module scripts are created. The devcontainer test module itself will not test
 * if the related devcontainer npm scripts are created.
 * 
 * The `setup.ts` file includes all relevant bootstrap steps for the test files.
 * It is important that each test file imports and uses the `snapshot` otherwise the bootstrap will not run for this test file.
 **/

import { Config } from '../../../src/base';
import * as common from '../../shared/common';
import * as prettier from '../../shared/prettier';
import { snapshot } from './setup';

/**
 * We use not a describe block here because the jest test runner `Test Results` pane will show the test names.
 * The `Testing` pane shows a hierarchy but for this hierarchy we already have the test file names available. 
 */
test('Config is registered in project registry', (): void => {
  common.testConfigInRegistry('prettier', Config.configRegistry);
});

test('Prettier settings are set properly', (): void => {
  prettier.testSettings(snapshot);
});

test('Ignore patterns matches expected content', (): void => {
  const expectedEntries: string[] = [
    '*.snap',
    '/.commitlintrc.ts',
    '/.devcontainer.json',
    '/.gitattributes',
    '/.github/ISSUE_TEMPLATE/bug.yml',
    '/.github/ISSUE_TEMPLATE/feature.yml',
    '/.github/ISSUE_TEMPLATE/housekeeping.yml',
    '/.github/ISSUE_TEMPLATE/question.yml',
    '/.github/pull_request_template.md',
    '/.github/workflows/release.yml',
    '/.github/workflows/stale.yml',
    '/.gitignore',
    '/.husky/commit-msg',
    '/.husky/pre-commit',
    '/.prettierignore',
    '/.prettierrc.json',
    '/.projen/**',
    '/.projen/deps.json',
    '/.projen/files.json',
    '/.projen/tasks.json',
    '/.vscode/settings.json',
    '/cliff.toml',
    '/eslint.config.mjs',
    '/package-lock.json',
    '/package.json',
    '/tsconfig.dev.json',
    '/API.md',
  ];
  prettier.testIgnore(snapshot, expectedEntries);
});

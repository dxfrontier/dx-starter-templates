/**
 * Test files test the whole results of the Projen project creation
 * configuration orchestration. E.g. the npm test module does test the result of the whole `package.json` file
 * and that the devcontainer config module scripts are created. The devcontainer test module itself will not test
 * if the related devcontainer npm scripts are created.
 *
 * The `setup.ts` file includes all relevant bootstrap steps for the test files.
 * It is important that each test file imports and uses the `snapshot` otherwise the bootstrap will not run for this test file.
 **/

import * as github from '../../shared/github';
import { snapshot } from './setup';

/**
 * We use not a describe block here because the jest test runner `Test Results` pane will show the test names.
 * The `Testing` pane shows a hierarchy but for this hierarchy we already have the test file names available.
 */
describe('GitHub Templates', (): void => {
  test('PR template matches expected template', (): void => {
    github.testPrTemplate(snapshot);
  });

  test('Bug issue template matches expected template', (): void => {
    github.testBugTemplate(snapshot);
  });

  test('Feature issue template matches expected template', (): void => {
    github.testFeatureTemplate(snapshot);
  });

  test('Housekeeping issue template matches expected template', (): void => {
    github.testBugTemplate(snapshot);
  });

  test('Question issue template matches expected template', (): void => {
    github.testQuestionTemplate(snapshot);
  });
});

describe('GitHub Workflows', (): void => {
  test('Projen standard workflows are removed', (): void => {
    github.testProjenWorkflows(snapshot, 1);
  });

  test('Release workflow template matches expected template', (): void => {
    github.testReleaseWorkflow(snapshot);
  });

  test('Cliff toml template matches expected template', (): void => {
    github.testCliffToml(snapshot);
  });
});

test('GitHub related files are added to .gitattributes and defined as linguist-generated', (): void => {
  github.testGitAttributes(snapshot);
});

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
import * as devcontainer from '../../shared/devcontainer';
import { snapshot } from './setup';

/**
 * We use not a describe block here because the jest test runner `Test Results` pane will show the test names.
 * The `Testing` pane shows a hierarchy but for this hierarchy we already have the test file names available. 
 */
test('Config is registered in project registry', (): void => {
  common.testConfigInRegistry('devcontainer', Config.configRegistry);
});

test('Container image is set properly', (): void => {
  devcontainer.testImage(snapshot);
});

test('Container features are set properly', (): void => {
  devcontainer.testFeatures(snapshot);
});

test('Container VsCode extensions are set properly', (): void => {
  devcontainer.testExtensions(snapshot);
});

test('Container postCreateCommand is set properly', (): void => {
  devcontainer.testCommand(snapshot);
});
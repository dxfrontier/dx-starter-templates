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

test('Prettier npm scripts are added properly', (): void => {
  prettier.testScripts(snapshot);
});

test('Ignore patterns matches expected content', (): void => {
  prettier.testIgnore(snapshot);
});

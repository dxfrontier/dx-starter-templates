import { Config } from '../../../src/base';
import * as common from '../../shared/common';
import * as vscode from '../../shared/vscode';
import { snapshot } from './setup';

/**
 * We use not a describe block here because the jest test runner `Test Results` pane will show the test names.
 * The `Testing` pane shows a hierarchy but for this hierarchy we already have the test file names available. 
 */
test('Config is registered in project registry', (): void => {
  common.testConfigInRegistry('vscode', Config.configRegistry);
});

test('VsCode settings are set properly', (): void => {
  vscode.testSettings(snapshot);
});

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
import { Config } from '../../../src/base';
import * as common from '../../shared/common';
import * as typescript from '../../shared/typescript';
import { snapshot } from './setup';

/**
 * We use not a describe block here because the jest test runner `Test Results` pane will show the test names.
 * The `Testing` pane shows a hierarchy but for this hierarchy we already have the test file names available. 
 */
test('Config is registered in project registry', (): void => {
  common.testConfigInRegistry('typescript', Config.configRegistry);
});

test('Additional/Overrides devDependencies are added properly', (): void => {
  const expectedDevDependencies: string[] = [
    'typescript@^5.7.3',
    '@types/node@^22.10.5',
    'ts-node@^10.9.2',
  ];
  typescript.testDevDependencies(snapshot, expectedDevDependencies);
});

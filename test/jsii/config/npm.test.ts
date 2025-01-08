import { Config } from '../../../src/base';
import * as common from '../../shared/common';
import * as npm from '../../shared/npm';
import { snapshot } from './setup';

/**
 * We use not a describe block here because the jest test runner `Test Results` pane will show the test names.
 * The `Testing` pane shows a hierarchy but for this hierarchy we already have the test file names available. 
 */
test('Config is registered in project registry', (): void => {
  common.testConfigInRegistry('npm', Config.configRegistry);
});

test('Files property in package.json is set properly', (): void => {
  const additionalPatterns: string[] = ['lib', '.jsii'];
  npm.testPackageJsonFiles(snapshot, additionalPatterns);
});

test('Additional/Overrides devDependencies are added properly', (): void => {
  const expectedDevDependencies: string[] = [
    'constructs@10.4.2', 'projen@0.91.5', 'jsii@^5.7.4',
    'jsii-diff@^1.106.0',
    'jsii-docgen@^10.6.1',
    'jsii-pacmak@^1.106.0',
    'jsii-rosetta@^5.7.2',
  ];
  npm.testDevDependencies(snapshot, expectedDevDependencies);
});

test('Additional/Overrides peerDependencies are added properly', (): void => {
  const expectedDevDependencies: string[] = ['constructs@^10.4.2', 'projen@^0.91.5'];
  npm.testPeerDependencies(snapshot, expectedDevDependencies);
});
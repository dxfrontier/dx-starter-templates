import { JsiiProject } from 'projen/lib/cdk/index';
import { SynthOutput, synthSnapshot } from 'projen/lib/util/synth';
// import { TypeScriptProjectBase } from '../../src/base';
// import { LintStagedConfig } from '../../src/types';
// import * as commitlint from '../shared/commitlint';
import * as common from '../shared/common';
import { Config } from '../../src/base';
// import * as eslint from '../shared/eslint';
// import * as devcontainer from '../shared/devcontainer';
// import * as github from '../shared/github';
// import * as husky from '../shared/husky';
import * as npm from '../shared/npm';
// import * as prettier from '../shared/prettier';
// import * as vscode from '../shared/vscode';

describe('JsiiProject Builders', (): void => {
  let project: JsiiProject;
  let snapshot: SynthOutput;

  beforeEach(async (): Promise<void> => {
    const jsiiProject: any = jest.requireActual('projen/lib/cdk/index').JsiiProject;

    jest.spyOn(jsiiProject.prototype, 'synth').mockImplementation();

    const projenrc = await import('../../.projenrc');
    project = projenrc.project;

    jsiiProject.prototype.synth.mockRestore();
    snapshot = synthSnapshot(project);
  });

  afterEach((): void => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  describe('NPM', (): void => {
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
    
    // test('Additional/Overrides devDependencies are added properly', (): void => {
    //   const expectedDevDependencies: string[] = ['ts-node@*', '@types/node@*', 'projen@*'];
    //   npm.testDevDependencies(snapshot, expectedDevDependencies);
    // });

    // test('NPM Package related files are added to .gitattributes and defined as linguist-generated', (): void => {
    //   npm.testGitAttributes(snapshot);
    // });
  });
});

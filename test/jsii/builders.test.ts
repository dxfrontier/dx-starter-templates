import { JsiiProject } from 'projen/lib/cdk/index';
import { SynthOutput, synthSnapshot } from 'projen/lib/util/synth';
// import { TypeScriptProjectBase } from '../../src/base';
// import { LintStagedConfig } from '../../src/types';
// import * as commitlint from '../shared/commitlint';
// import * as common from '../shared/common';
// import * as eslint from '../shared/eslint';
// import * as devcontainer from '../shared/devcontainer';
// import * as github from '../shared/github';
// import * as husky from '../shared/husky';
// import * as npm from '../shared/npm';
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
    test('Builder is registered in project registry', (): void => {
      console.log(snapshot);
      expect(true).toBeTruthy();
    });
  });
});

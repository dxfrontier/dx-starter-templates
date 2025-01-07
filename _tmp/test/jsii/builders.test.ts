import { JsiiProject } from 'projen/lib/cdk/index';
import { SynthOutput, synthSnapshot } from 'projen/lib/util/synth';
import { TypeScriptProjectBase } from '../../src/base';
import { LintStagedConfig } from '../../src/types';
import * as commitlint from '../shared/commitlint';
import * as common from '../shared/common';
import * as eslint from '../shared/eslint';
import * as devcontainer from '../shared/devcontainer';
import * as github from '../shared/github';
import * as husky from '../shared/husky';
import * as npm from '../shared/npm';
import * as prettier from '../shared/prettier';
import * as vscode from '../shared/vscode';

describe('JsiiProject Builders', (): void => {
  let project: JsiiProject;
  let snapshot: SynthOutput;

  beforeEach(async (): Promise<void> => {
    const jsiiProject: any = jest.requireActual('projen/lib/cdk/index').JsiiProject;

    jest.spyOn(jsiiProject.prototype, 'synth').mockImplementation();

    const projenrc = await import('../../.projenrc.ts');
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
      common.testBuilderInRegistry('NpmPackageJsii', (project as unknown as TypeScriptProjectBase).builderRegistry);
    });

    test('Files property in package.json is set properly', (): void => {
      const additionalPatterns: string[] = ['lib', '.jsii'];
      npm.testPackageJsonFiles(snapshot, additionalPatterns);
    });

    test('Additional/Overrides devDependencies are added properly', (): void => {
      const expectedDevDependencies: string[] = [];
      npm.testDevDependencies(snapshot, expectedDevDependencies);
    });

    test('NPM Package related files are added to .gitattributes and defined as linguist-generated', (): void => {
      npm.testGitAttributes(snapshot);
    });
  });

  describe('DevContainer', (): void => {
    test('Builder is registered in project registry', (): void => {
      common.testBuilderInRegistry('DevContainerJsii', (project as unknown as TypeScriptProjectBase).builderRegistry);
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

    test('DevContainer related files are added to .gitattributes and defined as linguist-generated', (): void => {
      devcontainer.testGitAttributes(snapshot);
    });
  });

  describe('Visual Studio Code', (): void => {
    test('Builder is registered in project registry', (): void => {
      common.testBuilderInRegistry('VsCodeJsii', (project as unknown as TypeScriptProjectBase).builderRegistry);
    });

    test('VsCode settings are set properly', (): void => {
      vscode.testSettings(snapshot);
    });

    test('VsCode related files are added to .gitattributes and defined as linguist-generated', (): void => {
      vscode.testGitAttributes(snapshot);
    });
  });

  describe('GitHub', (): void => {
    test('Builder is registered in project registry', (): void => {
      common.testBuilderInRegistry('GitHubJsii', (project as unknown as TypeScriptProjectBase).builderRegistry);
    });

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
        github.testProjenWorkflows(snapshot);
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
  });

  describe('Prettier', (): void => {
    test('Builder is registered in project registry', (): void => {
      common.testBuilderInRegistry('PrettierJsii', (project as unknown as TypeScriptProjectBase).builderRegistry);
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

    test('Prettier related files are added to .gitattributes and defined as linguist-generated', (): void => {
      prettier.testGitAttributes(snapshot);
    });
  });

  describe('Eslint', (): void => {
    test('Builder is registered in project registry', (): void => {
      common.testBuilderInRegistry('EslintJsii', (project as unknown as TypeScriptProjectBase).builderRegistry);
    });

    test('Config file matches expected template', (): void => {
      const additionalRules: Record<string, string> = {
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/class-literal-property-style': 'off',
        '@typescript-eslint/no-empty-object-type': 'off',
      };
      const additionalIgnores: string[] = ['lib/', '.jsii'];
      eslint.testConfigFile(snapshot, additionalRules, additionalIgnores);
    });

    test('Eslint npm scripts are added properly', (): void => {
      eslint.testScripts(snapshot);
    });

    test('Eslint npm devDependencies are added properly', (): void => {
      eslint.testDevDependencies(snapshot);
    });

    test('Eslint related files are added to .gitattributes and defined as linguist-generated', (): void => {
      eslint.testGitAttributes(snapshot);
    });
  });

  describe('Husky', (): void => {
    test('Builder is registered in project registry', (): void => {
      common.testBuilderInRegistry('HuskyJsii', (project as unknown as TypeScriptProjectBase).builderRegistry);
    });

    test('Commit-msg hook matches expected template', (): void => {
      husky.testCommitMsgHook(snapshot);
    });

    test('Pre-commit hook matches expected template', (): void => {
      husky.testPreCommitHook(snapshot);
    });

    test('Husky npm scripts are added properly', (): void => {
      husky.testScripts(snapshot);
    });

    test('Husky npm devDependencies are added properly', (): void => {
      husky.testDevDependencies(snapshot);
    });

    test('Husky related files are added to .gitattributes and defined as linguist-generated', (): void => {
      husky.testGitAttributes(snapshot);
    });
  });

  describe('CommitLint', (): void => {
    test('Builder is registered in project registry', (): void => {
      common.testBuilderInRegistry('CommitLintJsii', (project as unknown as TypeScriptProjectBase).builderRegistry);
    });

    test('Commitlintrc template matches expected template', (): void => {
      commitlint.testRcTemplate(snapshot);
    });

    test('CommitLint npm scrips are added properly', (): void => {
      commitlint.testScripts(snapshot);
    });

    test('CommitLint configuration in package.json is set properly', (): void => {
      const expectedConfiguration: LintStagedConfig = {
        '**/*.ts': ['npm run eslint', 'npm run prettier'],
      };
      expect(snapshot['package.json']!['lint-staged']).toStrictEqual(expectedConfiguration);
    });

    test('CommitLint npm devDependencies are added properly', (): void => {
      commitlint.testDevDependencies(snapshot);
    });

    test('CommitLint related files are added to .gitattributes and defined as linguist-generated', (): void => {
      commitlint.testGitAttributes(snapshot);
    });
  });
});

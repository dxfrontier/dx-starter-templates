import { SynthOutput, synthSnapshot } from 'projen/lib/util/synth';
import { TypeScriptProjectBaseOptions } from '../../src/base/project';
import { GitHubActionProject } from '../../src/github-action/project';
import { /*LintStagedConfig,*/ ProjenStandardScript } from '../../src/types';
// import * as commitlint from '../shared/commitlint';
import * as common from '../shared/common';
import * as devcontainer from '../shared/devcontainer';
// import * as github from '../shared/github';
// import * as husky from '../shared/husky';
import * as npm from '../shared/npm';
// import * as prettier from '../shared/prettier';
// import * as samplecode from '../shared/samplecode';
import * as vscode from '../shared/vscode';

describe('GitHubActionsProject Builders', (): void => {
  let props: TypeScriptProjectBaseOptions;
  let snapshot: SynthOutput;
  let project: GitHubActionProject;

  beforeEach((): void => {
    props = {
      name: 'my-github-action',
      defaultReleaseBranch: 'main', // this is needed due to https://github.com/projen/projen/pull/524
      description: 'my-description',
      repository: 'my-repository',
    };

    project = new GitHubActionProject(props);
    snapshot = synthSnapshot(project);
  });

  afterEach((): void => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  describe('NPM', (): void => {
    test('Builder is registered in project registry', (): void => {
      common.testBuilderInRegistry('NpmPackage', project.builderRegistry);
    });

    test('Dynamic options in package.json are set properly', (): void => {
      expect(snapshot['package.json']!.name).toBe('my-github-action');
      expect(snapshot['package.json']!.description).toBe('my-description');
      expect(snapshot['package.json']!.repository).toStrictEqual({
        type: 'git',
        url: 'my-repository',
      });
    });

    test('Projen standard npm scripts are removed from package.json', (): void => {
      const keys: string[] = Object.keys(snapshot['package.json']!.scripts);
      const scriptsToRemove: ProjenStandardScript[] = [
        'bump',
        'clobber',
        'compile',
        'default',
        'eject',
        'eslint',
        'package',
        'post-compile',
        'post-upgrade',
        'pre-compile',
        'release',
        'test',
        'test:watch',
        'unbump',
        'upgrade',
        'watch',
        'projen',
      ];
      const keyFound: boolean = keys.some((key: string): boolean =>
        scriptsToRemove.includes(key as ProjenStandardScript),
      );
      expect(keyFound).toBe(false);
    });

    test('Files property in package.json is set properly', (): void => {
      const additionalPatterns: string[] = ['action.yml'];
      npm.testPackageJsonFiles(snapshot, additionalPatterns);
    });

    test('Additional/Overrides devDependencies are added properly', (): void => {
      npm.testDevDependencies(snapshot);
    });

    test('Project related files are added to .gitattributes and defined as linguist-generated', (): void => {
      const expectedPatterns: RegExp[] = [/\/tsconfig\.dev\.json linguist-generated( $|\s|$)/m];
      npm.testGitAttributes(snapshot, expectedPatterns);
    });
  });

  describe('DevContainer', (): void => {
    test('Builder is registered in project registry', (): void => {
      common.testBuilderInRegistry('DevContainer', project.builderRegistry);
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
      common.testBuilderInRegistry('VsCode', project.builderRegistry);
    });

    test('VsCode settings are set properly', (): void => {
      vscode.testSettings(snapshot);
    });

    test('VsCode related files are added to .gitattributes and defined as linguist-generated', (): void => {
      vscode.testGitAttributes(snapshot);
    });
  });

  // describe('GitHub', (): void => {
  //   test('Builder is registered in project registry', (): void => {
  //     common.testBuilderInRegistry('GitHub', project.builderRegistry);
  //   });

  //   describe('GitHub Templates', (): void => {
  //     test('PR template matches expected template', (): void => {
  //       github.testPrTemplate(snapshot);
  //     });

  //     test('Bug issue template matches expected template', (): void => {
  //       github.testBugTemplate(snapshot);
  //     });

  //     test('Feature issue template matches expected template', (): void => {
  //       github.testFeatureTemplate(snapshot);
  //     });

  //     test('Housekeeping issue template matches expected template', (): void => {
  //       github.testBugTemplate(snapshot);
  //     });

  //     test('Question issue template matches expected template', (): void => {
  //       github.testQuestionTemplate(snapshot);
  //     });
  //   });

  //   describe('GitHub Workflows', (): void => {
  //     test('Projen standard workflows are removed', (): void => {
  //       github.testProjenWorkflows(snapshot);
  //     });

  //     test('Release workflow template matches expected template', (): void => {
  //       github.testReleaseWorkflow(snapshot);
  //     });

  //     test('Stale workflow template matches expected template', (): void => {
  //       github.testStaleWorkflow(snapshot);
  //     });

  //     test('Cliff toml template matches expected template', (): void => {
  //       github.testCliffToml(snapshot);
  //     });
  //   });

  //   test('GitHub related files are added to .gitattributes and defined as linguist-generated', (): void => {
  //     github.testGitAttributes(snapshot);
  //   });
  // });

  // describe('Prettier', (): void => {
  //   test('Builder is registered in project registry', (): void => {
  //     common.testBuilderInRegistry('Prettier', project.builderRegistry);
  //   });

  //   test('Prettier settings are set properly', (): void => {
  //     prettier.testSettings(snapshot);
  //   });

  //   test('Prettier npm scripts are added properly', (): void => {
  //     prettier.testScripts(snapshot);
  //   });

  //   test('Ignore patterns matches expected content', (): void => {
  //     prettier.testIgnore(snapshot);
  //   });

  //   test('Prettier related files are added to .gitattributes and defined as linguist-generated', (): void => {
  //     prettier.testGitAttributes(snapshot);
  //   });
  // });

  // describe('Husky', (): void => {
  //   test('Builder is registered in project registry', (): void => {
  //     common.testBuilderInRegistry('Husky', project.builderRegistry);
  //   });

  //   test('Commit-msg hook matches expected template', (): void => {
  //     husky.testCommitMsgHook(snapshot);
  //   });

  //   test('Pre-commit hook matches expected template', (): void => {
  //     husky.testPreCommitHook(snapshot);
  //   });

  //   test('Husky npm scripts are added properly', (): void => {
  //     husky.testScripts(snapshot);
  //   });

  //   test('Husky npm devDependencies are added properly', (): void => {
  //     husky.testDevDependencies(snapshot);
  //   });

  //   test('Husky related files are added to .gitattributes and defined as linguist-generated', (): void => {
  //     husky.testGitAttributes(snapshot);
  //   });
  // });

  // describe('CommitLint', (): void => {
  //   test('Builder is registered in project registry', (): void => {
  //     common.testBuilderInRegistry('CommitLint', project.builderRegistry);
  //   });

  //   test('Commitlintrc template matches expected template', (): void => {
  //     commitlint.testRcTemplate(snapshot);
  //   });

  //   test('CommitLint npm scrips are added properly', (): void => {
  //     commitlint.testScripts(snapshot);
  //   });

  //   test('CommitLint configuration in package.json is set properly', (): void => {
  //     const expectedConfiguration: LintStagedConfig = {
  //       '**/*.{yml,yaml}': ['npm run prettier'],
  //     };
  //     expect(snapshot['package.json']!['lint-staged']).toStrictEqual(expectedConfiguration);
  //   });

  //   test('CommitLint npm devDependencies are added properly', (): void => {
  //     commitlint.testDevDependencies(snapshot);
  //   });

  //   test('CommitLint related files are added to .gitattributes and defined as linguist-generated', (): void => {
  //     commitlint.testGitAttributes(snapshot);
  //   });
  // });

  // describe('SampleCode', (): void => {
  //   test('Builder is registered in project registry', (): void => {
  //     common.testBuilderInRegistry('SampleCode', project.builderRegistry);
  //   });

  //   test('Projen standard sample files are removed from file system', (): void => {
  //     samplecode.testProjenSampleFiles(snapshot);
  //   });

  //   test('Sample action file matches expected file templates', (): void => {
  //     const expectedTemplateLines: string[] = [
  //       "name: 'My Custom Composite Action'",
  //       "description: 'A sample GitHub composite action created with Projen.'",
  //       "author: 'Your Name or Org'",
  //       'branding:',
  //       "  icon: 'zap'",
  //       "  color: 'blue'",
  //       '',
  //       'inputs:',
  //       '  example-input:',
  //       "    description: 'An example input parameter for the action.'",
  //       '    required: false',
  //       "    default: 'default value'",
  //       '',
  //       'outputs:',
  //       '  example-output:',
  //       "    description: 'An example output from the action.'",
  //       '',
  //       'runs:',
  //       "  using: 'composite'",
  //       '  steps:',
  //       "    - name: 'Step 1'",
  //       "      run: echo 'Running Step 1 with input: ${{ inputs.example-input }}'",
  //       '',
  //       "    - name: 'Step 2'",
  //       "      run: echo 'Running Step 2'",
  //       '',
  //       'env:',
  //       "  EXAMPLE_ENV_VAR: 'example-value'",
  //     ];
  //     samplecode.testSampleFilesTemplates(snapshot, 'action.yml', expectedTemplateLines);
  //   });
  // });
});

/**
 * We move the options test into a separate file
 * as the revert of the mocking for testing the builders
 * is not working properly.
 */
import { cdk, javascript } from 'projen';
// import { JsiiProject } from 'projen/lib/cdk/index';
import { JsiiProject } from '../../src/jsii';

jest.mock('projen', (): any => ({
  Component: jest.fn(),
  javascript: {
    NodePackageManager: {
      NPM: 'npm',
    },
  },
  JsonPatch: {
    add: jest.fn(),
  },
  cdk: {
    JsiiProject: jest.fn().mockImplementation((_config: any): Record<string, any> => {
      return {
        synth: jest.fn(),
        addFields: jest.fn(),
        gitattributes: {
          addAttributes: jest.fn(),
        },
        addTask: jest.fn(),
        addDevDeps: jest.fn(),
        addPeerDeps: jest.fn(),
        tryFindObjectFile: jest.fn().mockImplementation((_fileName: string) => {
          return {
            patch: jest.fn(),
          };
        }),
        files: {
          find: jest.fn().mockReturnValue({
            toString: jest.fn().mockReturnValue('some/path/to/ignore'),
            addLine: jest.fn(),
            addPatterns: jest.fn(),
          })
        },
      };
    }),
  },
  JsonFile: jest.fn(),
  TextFile: jest.fn(),
  IgnoreFile: jest.fn(),
}));

jest.mock('projen/lib/github/pr-template', (): any => {
  return {
    PullRequestTemplate: jest.fn(),
  };
});


describe('JsiiProject Constructor Options', (): void => {
  let project: JsiiProject;

  beforeEach(async (): Promise<void> => {
    const projenrc = await import('../../.projenrc.ts');
    project = projenrc.project;
  });

  afterEach((): void => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  afterAll((): void => {
    jest.unmock('projen');
    jest.unmock('projen/lib/github/pr-template');
    jest.restoreAllMocks();
  });

  test('Configuration is set properly', async (): Promise<void> => {
    expect(cdk.JsiiProject).toHaveBeenCalledWith({
      name: '@dxfrontier/projen-template-projects',
      repositoryUrl: 'https://github.com/dxfrontier/projen-template-projects.git',
      author: 'DXFrontier Dev Team',
      authorAddress: 'mathias.von-kaiz@abs-gmbh.de',
      copyrightOwner: 'ABS GmbH',
      licensed: false,
      defaultReleaseBranch: 'dev',

      packageManager: javascript.NodePackageManager.NPM,
      npmignoreEnabled: false,

      projenrcTs: true,
      disableTsconfigDev: false,
      disableTsconfig: true,
      tsconfig: {
        compilerOptions: {
          allowImportingTsExtensions: true,
        },
      },

      prettier: false,
      eslint: false,
      vscode: false,
      github: false,
      sampleCode: false,
      devContainer: false,
      jest: true,

      commitlintEnabled: true,
      devContainerEnabled: true,
      eslintEnabled: true,
      githubEnabled: true,
      huskyEnabled: true,
      jestEnabled: true,
      prettierEnabled: true,
      typescriptEnabled: true,
      vscodeEnabled: true,
      sampleCodeEnabled: true,

      githubOptions: { mergify: false, pullRequestLint: false },
      buildWorkflow: false,
      release: false,
      pullRequestTemplate: false,
      depsUpgrade: false,
    });
  });

  test('Mock of synth function was successful to avoid installation process', (): void => {
    expect(project.synth).toHaveBeenCalledTimes(1);
  });
});

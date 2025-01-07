/**
 * We move the options test into a separate file
 * as the revert of the mocking for testing the builders
 * is not working properly.
 */
import { cdk, javascript } from 'projen';
import { JsiiProject } from 'projen/lib/cdk/index';
import { TypeScriptProjectBase } from '../../src/base/index.ts';

jest.mock('projen', (): any => ({
  javascript: {
    NodePackageManager: {
      NPM: 'npm',
    },
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
      };
    }),
  },
  JsonFile: jest.fn(),
  TextFile: jest.fn(),
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
      author: 'Mathias von Kaiz',
      authorAddress: 'mathias.von-kaiz@abs-gmbh.de',
      copyrightOwner: 'ABS GmbH',
      licensed: false,

      packageManager: javascript.NodePackageManager.NPM,
      npmignoreEnabled: false,

      projenrcTs: true,
      typescriptVersion: '^5.7.2',

      prettier: true,
      eslint: false,

      githubOptions: { mergify: false, pullRequestLint: false },
      buildWorkflow: false,
      release: false,
      pullRequestTemplate: false,
      depsUpgrade: false,

      defaultReleaseBranch: 'main',
      jsiiVersion: '^5.7.1',
      devDeps: [
        '@types/node@^22.10.2',
        'constructs@^10.4.2',
        'jsii-diff@^1.106.0',
        'jsii-docgen@^10.6.1',
        'jsii-pacmak@^1.106.0',
        'ts-node@^10.9.2',
      ],
      peerDeps: ['projen', 'constructs'],
      // bundledDeps: ['construct'],

      tsconfig: {
        compilerOptions: {
          allowImportingTsExtensions: true,
        },
      },
    });
  });

  test('Registry mimic is set properly', (): void => {
    expect((project as unknown as TypeScriptProjectBase).builderRegistry).toBeDefined();
    expect(Array.isArray((project as unknown as TypeScriptProjectBase).builderRegistry)).toBe(true);
    expect(typeof (project as unknown as TypeScriptProjectBase).registerBuilder).toBe('function');
    expect(typeof (project as unknown as TypeScriptProjectBase).postSynthesize).toBe('function');
  });

  test('Mock of synth function was successful to avoid installation process', (): void => {
    expect(project.synth).toHaveBeenCalledTimes(1);
  });
});

/**
 * We move the options test into a separate file
 * as the revert of the mocking for testing the builders
 * is not working properly.
 */
import { TypeScriptProject } from 'projen/lib/typescript';
import { TypeScriptProjectBaseOptions } from '../../src/base/project';
import { GitHubActionProject } from '../../src/github-action/project';

jest.mock('projen', (): any => ({
  javascript: {
    NodePackageManager: {
      NPM: 'npm',
    },
  },
  JsonFile: jest.fn(),
  TextFile: jest.fn(),
  SampleFile: jest.fn(),
}));

jest.mock('projen/lib/github', (): any => {
  const originalModule: any = jest.requireActual('projen/lib/github');
  return {
    ...originalModule,
    PullRequestTemplate: jest.fn(),
  };
});

jest.mock('projen/lib/typescript', (): any => {
  const originalModule: any = jest.requireActual('projen/lib/typescript');
  return {
    ...originalModule,
    TypeScriptProject: jest.fn().mockReturnValue({
      addFields: jest.fn(),
      registerBuilder: jest.fn(),
      addDevDeps: jest.fn(),
      removeScript: jest.fn(),
      addScripts: jest.fn(),
      addTask: jest.fn(),
    }),
  };
});

describe('GitHubActionsProject Constructor Options', (): void => {
  afterEach((): void => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  afterAll((): void => {
    jest.unmock('projen');
    jest.unmock('projen/lib/github');
    jest.unmock('projen/lib/typescript');
    jest.restoreAllMocks();
  });

  test('Configuration is set properly', async (): Promise<void> => {
    const options: TypeScriptProjectBaseOptions = {
      name: 'my-github-action',
      defaultReleaseBranch: 'main', // this is needed due to https://github.com/projen/projen/pull/524
      description: 'my-description',
      repository: 'my-repository',
    };

    new GitHubActionProject(options);

    expect(TypeScriptProject).toHaveBeenCalledWith({
      ...options,
      disableTsconfig: true,
      eslint: false,
      prettier: false,
      jest: false,
      licensed: false,
      packageManager: 'npm',
      npmignoreEnabled: false,
      projenrcTs: true,
      typescriptVersion: '^5.7.2',
      githubOptions: { mergify: false, pullRequestLint: false },
      buildWorkflow: false,
      release: false,
      pullRequestTemplate: false,
      depsUpgrade: false,
      sampleCode: false,
      devDeps: [
        // 'projen',
        // 'construct',
        // '@dxfrontier/projen-template-projects@git+https://github.com/dxfrontier/projen-template-projects.git',
      ],
    });
  });
});

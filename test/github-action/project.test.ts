/**
 * We move the options test into a separate file
 * as the revert of the mocking for testing the builders
 * is not working properly.
 */
import { TypeScriptProject } from 'projen/lib/typescript';
import { GitHubActionProject, GitHubActionProjectOptions } from '../../src/github-action/project';

jest.mock('projen', (): any => ({
  Component: jest.fn(),
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
      initializeBaseConfigs: jest.fn(),
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
    const options: GitHubActionProjectOptions = {
      name: 'my-github-action',
      defaultReleaseBranch: 'dev', // this is needed due to https://github.com/projen/projen/pull/524
      commitlintEnabled: true,
      devContainerEnabled: true,
      githubEnabled: true,
      huskyEnabled: true,
      prettierEnabled: true,
      vscodeEnabled: true,
      sampleCodeEnabled: true,
    };

    new GitHubActionProject(options);

    expect(TypeScriptProject).toHaveBeenCalledWith({
      ...options,
      name: 'my-github-action',
      licensed: false,
      defaultReleaseBranch: 'dev',

      packageManager: 'npm',
      npmignoreEnabled: false,

      projenrcTs: false,
      disableTsconfigDev: true,
      disableTsconfig: false,

      prettier: false,
      eslint: false,
      vscode: false,
      github: false,
      sampleCode: false,
      devContainer: false,
      jest: false,

      commitlintEnabled: true,
      devContainerEnabled: true,
      eslintEnabled: false,
      githubEnabled: true,
      huskyEnabled: true,
      jestEnabled: false,
      prettierEnabled: true,
      vscodeEnabled: true,
      typescriptEnabled: false,

      githubOptions: { mergify: false, pullRequestLint: false },
      buildWorkflow: false,
      release: false,
      pullRequestTemplate: false,
      depsUpgrade: false,
    });
  });
});

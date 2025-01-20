/**
 * We move the options test into a separate file
 * as the revert of the mocking for testing the builders
 * is not working properly.
 */
import { TypeScriptProject } from 'projen/lib/typescript';
import { CapServiceProject, CapServiceProjectOptions } from '../../src/cap-service/project';

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

describe('CapServicesProject Constructor Options', (): void => {
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
    const options: CapServiceProjectOptions = {
      name: 'my-cap-service',
      defaultReleaseBranch: 'dev',
      description: 'SAP CAP Project',
      entityName: 'Entity1',
      namespace: 'de.customer.org.project',
      commitlintEnabled: true,
      devContainerEnabled: true,
      eslintEnabled: true,
      githubEnabled: true,
      huskyEnabled: true,
      jestEnabled: true,
      prettierEnabled: true,
      vscodeEnabled: true,
      typescriptEnabled: true,
      jest: true,
    };

    new CapServiceProject(options);

    expect(TypeScriptProject).toHaveBeenCalledWith({
      ...options,
      name: 'my-cap-service',
      licensed: false,
      defaultReleaseBranch: 'dev',

      packageManager: 'npm',
      npmignoreEnabled: false,

      projenrcTs: true,
      disableTsconfigDev: true,
      disableTsconfig: false,
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
      vscodeEnabled: true,
      typescriptEnabled: true,
      sampleCodeEnabled: true,

      githubOptions: { mergify: false, pullRequestLint: false },
      buildWorkflow: false,
      release: false,
      pullRequestTemplate: false,
      depsUpgrade: false,
    });
  });
});

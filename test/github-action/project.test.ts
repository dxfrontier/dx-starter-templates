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

const expectedReadmeTemplateLines: string[] = [
  `# my-github-action`,
  '',
  `Github project`,
  '',
  '# Table of Contents',
  '',
  `- [my-github-action](#my-github-action)`,
  '- [Table of Contents](#table-of-contents)',
  '  - [`Setup`](#setup)',
  '  - [Project tools and utilities](#project-tools-and-utilities)',
  '    - [Prettier](#prettier)',
  '    - [Lint-staged](#lint-staged)',
  '    - [Commit-Lint](#commit-lint)',
  '    - [Husky](#husky)',
  '  - [Authors](#authors)',
  '',
  '## `Setup`',
  '',
  '1. Create the following three labels in your repository by navigating to `Pull Requests` > `Labels` > `New Label`:',
  '',
  '   - **patch**',
  '   - **minor**',
  '   - **major**',
  '',
  '> [!TIP]',
  '> For more info about `SemVer (MAJOR.MINOR.PATCH)`, visit [SemVer.org](https://semver.org/)',
  '',
  '## Project tools and utilities',
  '',
  'The following tools/utilities are predefined when you create the project using `projen` and do not require any configuration.',
  '',
  '### Prettier',
  '',
  'A code formatter that enforces consistent style across your project automatically.',
  '',
  '> [!NOTE]',
  '> Prettier is triggered when a new commit is committed.',
  '',
  '> [!TIP]',
  '> You can also run it manually by executing:',
  '> ```bash',
  '> npm run prettier:fix',
  '> ```',
  '',
  '### Lint-staged',
  '',
  'Runs linters (e.g., Prettier, ESLint) only on staged Git files before committing.',
  '',
  '### Commit-Lint',
  '',
  'Ensures commit messages follow a specified format (e.g., Conventional Commits).',
  '',
  '### Husky',
  '',
  'Git hooks manager to automate pre-commit and pre-push tasks (e.g., running tests or linters).',
  '',
  '## Authors',
  '',
  '- [@Author1](#link1)',
  '- [@Author2](#link2)',
  '',
  '<p align="right">(<a href="#table-of-contents">back to top</a>)</p>',
];

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
      description: 'Github project',
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
      sampleCodeEnabled: true,

      githubOptions: { mergify: false, pullRequestLint: false },
      buildWorkflow: false,
      release: false,
      pullRequestTemplate: false,
      depsUpgrade: false,

      readme: {
        filename: 'README.md',
        contents: expectedReadmeTemplateLines.join('\n'),
      },
      minNodeVersion: '20.0',
      issuesEnabled: true,
    });
  });
});

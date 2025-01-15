/**
 * Test files test the whole results of the Projen project creation
 * configuration orchestration. E.g. the npm test module does test the result of the whole `package.json` file
 * and that the devcontainer config module scripts are created. The devcontainer test module itself will not test
 * if the related devcontainer npm scripts are created.
 *
 * The `setup.ts` file includes all relevant bootstrap steps for the test files.
 * It is important that each test file imports and uses the `snapshot` otherwise the bootstrap will not run for this test file.
 **/

import * as github from '../../shared/github';
import { snapshot } from './setup';

/**
 * We use not a describe block here because the jest test runner `Test Results` pane will show the test names.
 * The `Testing` pane shows a hierarchy but for this hierarchy we already have the test file names available.
 */
describe('GitHub Templates', (): void => {
  test('PR template matches expected template', (): void => {
    const expectedTemplateLines: string[] = [
      '## Reviewers Checklist',
      '',
      'for complete review list refer to ABS Loop - Review Aspects',
      '',
      '### Organizational Section',
      '',
      '- [ ] PR is assigned to the according story/feature/bug',
      '- [ ] Story/feature/bug is descriptive',
      '- [ ] Story/feature/bug is assigned to according labels',
      '- [ ] Story/feature/bug is assigned to a developer',
      '',
      '### Structure',
      '',
      '- [ ] Readability: Code is easy to understand, with meaningful names for variables, functions, and classes',
      '- [ ] Comments: Meaningful and helpful comments. Code is documented without being over-commented',
      '- [ ] DRY, KISS and YAGNI: Code implements only necessary features; no over-engineering',
      '- [ ] No sensitive data (e.g., passwords, API keys) in the code',
      '- [ ] No major updates for used packages',
      '',
      '### Coding',
      '',
      '- [ ] Model/Binding property changes or renaming does not break the code',
      '- [ ] Model/Binding properties have consistent names (capitalization, lowercase, ..)',
      '- [ ] Type aliases are defined for associations and compositions',
      '- [ ] No hungarian notation (e.g. aList, oModel, ..)',
      '',
      '### Most important (as long as we do not have Test Driven Development in place)',
      '',
      '- [ ] Code is locally tested by developer',
      '',
      '### Second most important',
      '',
      '- [ ] API first: application can be used headless (with the API only)',
    ];
    github.testPrTemplate(snapshot, expectedTemplateLines);
  });

  test('Bug issue template matches expected template', (): void => {
    github.testBugTemplate(snapshot);
  });

  test('Feature issue template matches expected template', (): void => {
    const expectedTemplateLines: string[] = [
      'name: 💡 Feature',
      'description: Story related feature',
      'title: "[FEATURE] <title>"',
      'labels: ["type: feature"]',
      'body:',
      '  - type: textarea',
      '    attributes:',
      '      label: Description',
      '      description: A description of the feature.',
      '    validations:',
      '      required: true',
      '',
      '  - type: textarea',
      '    attributes:',
      '      label: Task List',
      '      description: Describe the steps to fulfill the feature.',
      '      value: |',
      '        - [ ] My First Task',
      '    validations:',
      '      required: true',
    ];
    github.testFeatureTemplate(snapshot, expectedTemplateLines);
  });

  test('Housekeeping issue template matches expected template', (): void => {
    github.testBugTemplate(snapshot);
  });

  test('Question issue template matches expected template', (): void => {
    github.testQuestionTemplate(snapshot);
  });

  test('Story issue template matches expected template', (): void => {
    github.testStoryTemplate(snapshot);
  });
});

describe('GitHub Workflows', (): void => {
  test('Projen standard workflows are removed', (): void => {
    github.testProjenWorkflows(snapshot, 2);
  });

  test('Release workflow template matches expected template', (): void => {
    const expectedTemplateLines: string[] = [
      'name: Release',
      'on:',
      '  pull_request:',
      '    branches:',
      '      - dev',
      '    types:',
      '      - closed',
      'jobs:',
      '  release:',
      '    runs-on: ubuntu-latest',
      '    permissions:',
      '      contents: write',
      '      pull-requests: write',
      '    steps:',
      '      - name: Create release',
      '        uses: dxfrontier/gh-action-release@main',
      '        with:',
      '          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}',
      '          BRANCH: dev',
    ];

    github.testReleaseWorkflow(snapshot, expectedTemplateLines);
  });

  test('Deployment workflow template matches expected template', (): void => {
    github.testDeploymentWorkflow(snapshot);
  });

  test('Cliff toml template matches expected template', (): void => {
    github.testCliffToml(snapshot);
  });
});

test('GitHub related files are added to .gitattributes and defined as linguist-generated', (): void => {
  const expectedTemplateLines: string[] = [
    '# ~~ Generated by projen. To modify, edit .projenrc.ts and run "npx projen".',
    '',
    '* text=auto eol=lf',
    '*.snap linguist-generated',
    '/.commitlintrc.ts linguist-generated',
    '/.devcontainer.json linguist-generated',
    '/.gitattributes linguist-generated',
    '/.github/ISSUE_TEMPLATE/bug.yml linguist-generated',
    '/.github/ISSUE_TEMPLATE/feature.yml linguist-generated',
    '/.github/ISSUE_TEMPLATE/housekeeping.yml linguist-generated',
    '/.github/ISSUE_TEMPLATE/question.yml linguist-generated',
    '/.github/ISSUE_TEMPLATE/story.yml linguist-generated',
    '/.github/pull_request_template.md linguist-generated',
    '/.github/workflows/deployment.yml linguist-generated',
    '/.github/workflows/release.yml linguist-generated',
    '/.gitignore linguist-generated',
    '/.husky/commit-msg linguist-generated',
    '/.husky/pre-commit linguist-generated',
    '/.husky/pre-push linguist-generated',
    '/.prettierignore linguist-generated',
    '/.prettierrc.json linguist-generated',
    '/.projen/** linguist-generated',
    '/.projen/deps.json linguist-generated',
    '/.projen/files.json linguist-generated',
    '/.projen/tasks.json linguist-generated',
    '/.vscode/launch.json linguist-generated',
    '/.vscode/settings.json linguist-generated',
    '/.vscode/tasks.json linguist-generated',
    '/@cds-models linguist-generated',
    '/CHANGELOG.md linguist-generated',
    '/cliff.toml linguist-generated',
    '/dist linguist-generated',
    '/eslint.config.mjs linguist-generated',
    '/gen linguist-generated',
    '/package-lock.json linguist-generated',
    '/package.json linguist-generated',
    '/tsconfig.json linguist-generated',
  ];
  github.testGitAttributes(snapshot, expectedTemplateLines);
});

import { TextFile } from 'projen';
import { GitHubConfigBase } from '../../base';

/**
 * Implementing all relevant GitHub configuration for the CapService project.
 */
export class GitHubConfigCapService extends GitHubConfigBase {
  protected override get configFilePullRequest(): Record<string, string[]> {
    return {
      '.github/pull_request_template.md': [
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
      ],
    };
  }

  // protected override get configFileFeatureIssue(): Record<string, string[]> {
  //   return {
  //     '.github/ISSUE_TEMPLATE/feature.yml': [
  //       'name: 💡 Feature',
  //       'description: Story related feature',
  //       'title: "[FEATURE] <title>"',
  //       'labels: ["type: feature"]',
  //       'body:',
  //       '  - type: textarea',
  //       '    attributes:',
  //       '      label: Description',
  //       '      description: A description of the feature.',
  //       '    validations:',
  //       '      required: true',
  //       '',
  //       '  - type: textarea',
  //       '    attributes:',
  //       '      label: Task List',
  //       '      description: Describe the steps to fulfill the feature.',
  //       '      value: |',
  //       '        - [ ] My First Task',
  //       '    validations:',
  //       '      required: true',
  //     ],
  //   };
  // }

  /**
   * Retrieves the configuration for the story issue template file.
   *
   * @returns A record where the key is the file path and the value is an array of strings
   *          representing the content of the issue template.
   */
  // protected get configFileStoryIssue(): Record<string, string[]> {
  //   return {
  //     '.github/ISSUE_TEMPLATE/story.yml': [
  //       'name: 💡 Story',
  //       'description: As a [role], I [want to], [so that]',
  //       'title: "[STORY] <title>"',
  //       'labels: ["type: story"]',
  //       'body:',
  //       '  - type: textarea',
  //       '    attributes:',
  //       '      label: Description',
  //       "      description: Provide a brief overview of the story, focusing who want's to do what and why.",
  //       '    validations:',
  //       '      required: true',
  //     ],
  //   };
  // }

  protected override get configFileReleaseWorkflow(): Record<string, string[]> {
    return {
      '.github/workflows/release.yml': [
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
      ],
    };
  }

  protected get configFileDeploymentWorkflow(): Record<string, string[]> {
    return {
      '.github/workflows/deployment.yml': [
        'name: Deployment',
        'on:',
        '  pull_request:',
        '    branches:',
        '      - dev',
        '      - main',
        '    types:',
        '      - closed',
        'jobs:',
        '  release:',
        '    runs-on: ubuntu-latest',
        '    permissions:',
        '      contents: write',
        '      pull-requests: write',
        '    steps:',
        '      - name: Deploy to Cloud Foundry',
        '        uses: dxfrontier/gh-action-deploy-cf@main',
        '        with:',
        '          CF_IAS_ORIGIN: ${{ secrets.IAS_ORIGIN }}',
        '          CF_API_DEV: ${{ secrets.CF_API_DEV }}',
        '          CF_ORG_DEV: ${{ secrets.CF_ORG_DEV }}',
        '          CF_SPACE_DEV: ${{ secrets.CF_SPACE_DEV }}',
        '          CF_USERNAME_DEV: ${{ secrets.CF_USERNAME_DEV }}',
        '          CF_PASSWORD_DEV: ${{ secrets.CF_PASSWORD_DEV }}',
        '          CF_API_PROD: ${{ secrets.CF_API_PROD }}',
        '          CF_ORG_PROD: ${{ secrets.CF_ORG_PROD }}',
        '          CF_SPACE_PROD: ${{ secrets.CF_SPACE_PROD }}',
        '          CF_USERNAME_PROD: ${{ secrets.CF_USERNAME_PROD }}',
        '          CF_PASSWORD_PROD: ${{ secrets.CF_PASSWORD_PROD }}',
      ],
    };
  }

  protected override get configs(): Record<string, string[]>[] {
    return [
      this.configFilePullRequest,
      // this.configFileBugIssue,
      // this.configFileFeatureIssue,
      // this.configFileHousekeepingIssue,
      // this.configFileQuestionIssue,
      // this.configFileStoryIssue,
      this.configFileCliff,
      this.configFileReleaseWorkflow,
      this.configFileDeploymentWorkflow,
    ];
  }

  /**
   * Creates a user story issue template file.
   */
  // public createStoryIssue(): void {
  //   const filePath: string = Object.keys(this.configFileStoryIssue)[0];
  //   new TextFile(this.project, filePath, {
  //     lines: this.configFileStoryIssue[filePath],
  //   });
  // }

  /**
   * Creates a deployment workflow template file.
   */
  public createDeploymentWorkflow(): void {
    const filePath: string = Object.keys(this.configFileDeploymentWorkflow)[0];
    new TextFile(this.project, filePath, {
      lines: this.configFileDeploymentWorkflow[filePath],
    });
  }

  public override applyConfig(): void {
    super.applyConfig();
    // this.createStoryIssue();
    this.createDeploymentWorkflow();
  }
}

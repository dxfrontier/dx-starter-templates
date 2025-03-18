import { TextFile } from 'projen';
import { Config } from '../config';
import { ProjectTypes } from '../../util/types/project';
import { util } from '../../util/utils';

/**
 * Base class for implementing all relevant GitHub configuration.
 *
 * This class acts as a base for handling GitHub configuration within projects.
 */
export class IssuesConfigBase extends Config {
  constructor(project: ProjectTypes) {
    super(project);
  }

  /**
   * Retrieves the configuration for the bug issue template file.
   *
   * @returns A record where the key is the file path and the value is an array of strings
   *          representing the content of the issue template.
   */
  protected get configFileBugIssue(): Record<string, string[]> {
    return {
      '.github/ISSUE_TEMPLATE/bug.yml': [
        'name: 🐞 Bug',
        'description: File a bug/issue',
        'title: "[BUG] <title>"',
        'labels: ["type: bug"]',
        'body:',
        '  - type: textarea',
        '    attributes:',
        '      label: Current behavior',
        "      description: A description of what you're experiencing.",
        '    validations:',
        '      required: true',
        '',
        '  - type: textarea',
        '    attributes:',
        '      label: Expected behavior',
        '      description: A description of what you expected to happen.',
        '    validations:',
        '      required: true',
      ],
    };
  }

  /**
   * Retrieves the configuration for the feature request template file.
   *
   * @returns A record where the key is the file path and the value is an array of strings
   *          representing the content of the issue template.
   */
  protected get configFileFeatureIssue(): Record<string, string[]> {
    return {
      '.github/ISSUE_TEMPLATE/feature.yml': [
        'name: 💡 Feature',
        'description: Request for a new feature',
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
      ],
    };
  }

  /**
   * Retrieves the configuration for the housekeeping issue template file.
   *
   * @returns A record where the key is the file path and the value is an array of strings
   *          representing the content of the issue template.
   */
  protected get configFileHousekeepingIssue(): Record<string, string[]> {
    return {
      '.github/ISSUE_TEMPLATE/housekeeping.yml': [
        'name: 💡 Housekeeping',
        'description: Maintenance or refactoring task',
        'title: "[HOUSEKEEPING] <title>"',
        'labels: ["type: housekeeping"]',
        'body:',
        '  - type: textarea',
        '    attributes:',
        '      label: Description',
        '      description: A description of the housekeeping task.',
        '    validations:',
        '      required: true',
        '',
        '  - type: textarea',
        '    attributes:',
        '      label: Task List',
        '      description: Describe the steps to fulfill the housekeeping task.',
        '      value: |',
        '        - [ ] My First Task',
        '    validations:',
        '      required: true',
      ],
    };
  }

  /**
   * Retrieves the configuration for the question issue template file.
   *
   * @returns A record where the key is the file path and the value is an array of strings
   *          representing the content of the issue template.
   */
  protected get configFileQuestionIssue(): Record<string, string[]> {
    return {
      '.github/ISSUE_TEMPLATE/question.yml': [
        'name: ❓ Question',
        'description: Ask a question',
        'title: "[QUESTION] <title>"',
        'labels: ["type: question"]',
        'body:',
        '  - type: textarea',
        '    attributes:',
        '      label: Question',
        '      description: What would you like to know? If you encounter unusual behavior or identified a missing feature, consider opening a bug report instead.',
        '    validations:',
        '      required: true',
      ],
    };
  }

  protected get configFileStoryIssue(): Record<string, string[]> {
    return {
      '.github/ISSUE_TEMPLATE/story.yml': [
        'name: 💡 Story',
        'description: As a [role], I [want to], [so that]',
        'title: "[STORY] <title>"',
        'labels: ["type: story"]',
        'body:',
        '  - type: textarea',
        '    attributes:',
        '      label: Description',
        "      description: Provide a brief overview of the story, focusing who want's to do what and why.",
        '    validations:',
        '      required: true',
      ],
    };
  }

  /**
   * Creates a template file based on the provided configuration.
   *
   * @param config - The configuration object containing the file path and content.
   */
  private createTemplateFile(config: Record<string, string[]>): void {
    const filePath: string = Object.keys(config)[0];
    new TextFile(this.project, filePath, {
      lines: config[filePath],
    });
  }

  /**
   * Gets a list of all relevant config files.
   * @returns List of configs
   */
  protected get configs(): Record<string, string[]>[] {
    return [
      this.configFileBugIssue,
      this.configFileFeatureIssue,
      this.configFileHousekeepingIssue,
      this.configFileQuestionIssue,
      this.configFileStoryIssue,
    ];
  }

  /**
   * Retrieves the file paths for all dynamic configuration files.
   *
   * @returns A list of file path patterns, including dynamic configurations.
   */
  protected get filePatterns(): string[] {
    const dynamicFilePaths: string[] = this.configs
      .map((config: Record<string, string[]>): string => `/${Object.keys(config)[0]}`)
      .filter((filePath: string): string => filePath);

    return [...dynamicFilePaths];
  }

  protected override get additionalIgnorePatterns(): string[] {
    const patterns: string[] = [...this.filePatterns];

    return patterns;
  }

  public override registerConfig(): void {
    if (util.isValidProject(this.project)) {
      (this.project as ProjectTypes).prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
    }
  }

  public override applyConfig(): void {
    this.createTemplateFile(this.configFileBugIssue);
    this.createTemplateFile(this.configFileFeatureIssue);
    this.createTemplateFile(this.configFileHousekeepingIssue);
    this.createTemplateFile(this.configFileQuestionIssue);
    this.createTemplateFile(this.configFileStoryIssue);
  }
}

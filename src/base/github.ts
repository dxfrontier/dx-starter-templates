import { TextFile } from 'projen';
import { JsiiProject } from '../jsii';
import { Config, ConfigStrategy } from './config';
import { BaseProject } from './project';

/**
 * Base class for implementing all relevant GitHub configuration.
 *
 * This class acts as a base for handling GitHub configuration within projects
 * that extend either `BaseProject` or `JsiiProject`. It determines the configuration
 * strategy to use based on whether Projen is being used.
 *
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 * @extends Config
 */
export class GitHubConfigBase<T extends BaseProject | JsiiProject> extends Config<T> {
  constructor(project: T, useProjenApi: boolean) {
    super(project);

    const strategy: ConfigStrategy = useProjenApi
      ? new ProjenStandardGitHubConfigBaseStrategy()
      : new NonApiGitHubConfigBaseStrategy();
    this.setStrategy(strategy);
  }

  /**
   * Retrieves the configuration for the pull request template file.
   *
   * @returns A record where the key is the file path and the value is an array of strings
   *          representing the content of the issue template.
   */
  protected get configFilePullRequest(): Record<string, string[]> {
    return {
      '.github/pull_request_template.md': [
        '## Reviewers Checklist',
        '',
        'for complete review list refer to ABS Loop - Review Aspects',
        '',
        '### Organizational Section',
        '',
        '- [ ] PR is assigned to the according feature/bug',
        '- [ ] Feature/bug is descriptive',
        '- [ ] Feature/bug is assigned to according labels',
        '- [ ] Feature/bug is assigned to a developer',
        '',
        '### Structure',
        '',
        '- [ ] Readability: Code is easy to understand, with meaningful names for variables, functions, and classes',
        '- [ ] Comments: Meaningful and helpful comments. Code is documented without being over-commented',
        '- [ ] DRY, KISS and YAGNI: Code implements only necessary features; no over-engineering',
        '- [ ] No sensitive data (e.g., passwords, API keys) in the code',
        '- [ ] No major updates for used packages',
        '',
        '### Testing',
        '',
        '- [ ] Code is locally tested by developer (if applicable)',
        '- [ ] Automated tests pass successfully',
      ],
    };
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

  /**
   * Retrieves the configuration for the git cliff template file.
   *
   * @returns A record where the key is the file path and the value is an array of strings
   *          representing the content of the issue template.
   */
  protected get configFileCliff(): Record<string, string[]> {
    return {
      'cliff.toml': [
        '[changelog]',
        '# changelog header',
        'header = """',
        '# Changelog\n',
        'All notable changes to this project will be documented in this file.\n',
        '"""',
        '# template for the changelog body',
        '# https://keats.github.io/tera/docs/#introduction',
        'body = """',
        '{% if version %}',
        '    ## [{{ version | trim_start_matches(pat="v") }}] - {{ timestamp | date(format="%Y-%m-%d") }}',
        '{% else %}',
        '    ## [unreleased]',
        '{% endif %}',
        '{% for group, commits in commits | group_by(attribute="group") %}',
        '    ### {{ group | striptags | trim | upper_first }}',
        '    {% for commit in commits %}',
        '        - {% if commit.scope %}*({{ commit.scope }})* {% endif %}',
        '            {% if commit.breaking %}[**breaking**] {% endif %}',
        '            {{ commit.message | upper_first }}',
        '    {% endfor %}',
        '{% endfor %}',
        '"""',
        '# template for the changelog footer',
        'footer = """',
        '<!-- generated by git-cliff -->',
        '"""',
        '# remove the leading and trailing s',
        'trim = true',
        '# postprocessors',
        'postprocessors = [',
        '  # { pattern = "<REPO>", replace = "https://github.com/orhun/git-cliff" }, # replace repository URL',
        ']',
        '',
        '[git]',
        '# parse the commits based on https://www.conventionalcommits.org',
        'conventional_commits = true',
        '# filter out the commits that are not conventional',
        'filter_unconventional = true',
        '# process each line of a commit as an individual commit',
        'split_commits = false',
        '# regex for preprocessing the commit messages',
        'commit_preprocessors = [',
        '  # Replace issue numbers',
        '  #{ pattern = "((w+s)?#([0-9]+))", replace = "([#${2}](<REPO>/issues/${2}))"},',
        '  # Check spelling of the commit with https://github.com/crate-ci/typos',
        '  # If the spelling is incorrect, it will be automatically fixed.',
        '  #{ pattern = ".*", replace_command = "typos --write-changes -" },',
        ']',
        '# regex for parsing and grouping commits',
        'commit_parsers = [',
        '  { message = "^feat", group = "<!-- 0 -->🚀 Features" },',
        '  { message = "^fix", group = "<!-- 1 -->🐛 Bug Fixes" },',
        '  { message = "^doc", group = "<!-- 3 -->📚 Documentation" },',
        '  { message = "^perf", group = "<!-- 4 -->⚡ Performance" },',
        '  { message = "^refactor", group = "<!-- 2 -->🚜 Refactor" },',
        '  { message = "^style", group = "<!-- 5 -->🎨 Styling" },',
        '  { message = "^test", group = "<!-- 6 -->🧪 Testing" },',
        '  { message = "^chore(release): prepare for", skip = true },',
        '  { message = "^chore(deps.*)", skip = true },',
        '  { message = "^chore(pr)", skip = true },',
        '  { message = "^chore(pull)", skip = true },',
        '  { message = "^chore|^ci", group = "<!-- 7 -->⚙️ Miscellaneous Tasks" },',
        '  { body = ".*security", group = "<!-- 8 -->🛡️ Security" },',
        '  { message = "^revert", group = "<!-- 9 -->◀️ Revert" },',
        ']',
        '# protect breaking changes from being skipped due to matching a skipping commit_parser',
        'protect_breaking_commits = false',
        '# filter out the commits that are not matched by commit parsers',
        'filter_commits = false',
        '# regex for matching git tags',
        '# tag_pattern = "v[0-9].*"',
        '# regex for skipping tags',
        '# skip_tags = ""',
        '# regex for ignoring tags',
        '# ignore_tags = ""',
        '# sort the tags topologically',
        'topo_order = false',
        '# sort the commits inside sections by oldest/newest order',
        'sort_commits = "oldest"',
        '# limit the number of commits included in the changelog.',
        '# limit_commits = 42',
      ],
    };
  }

  /**
   * Retrieves the configuration for the release workflow template file.
   *
   * @returns A record where the key is the file path and the value is an array of strings
   *          representing the content of the issue template.
   */
  protected get configFileReleaseWorkflow(): Record<string, string[]> {
    return {
      '.github/workflows/release.yml': [
        'name: Release',
        'on:',
        '  pull_request:',
        '    branches:',
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
        '      - name: Create release',
        '        uses: dxfrontier/gh-action-release@main',
        '        with:',
        '          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}',
        '          BRANCH: main',
      ],
    };
  }

  /**
   * Creates a pull request template file.
   */
  public createPullRequest(): void {
    const filePath: string = Object.keys(this.configFilePullRequest)[0];
    new TextFile(this.project, filePath, {
      lines: this.configFilePullRequest[filePath],
    });
  }

  /**
   * Creates a bug issue template file.
   */
  public createBugIssue(): void {
    const filePath: string = Object.keys(this.configFileBugIssue)[0];
    new TextFile(this.project, filePath, {
      lines: this.configFileBugIssue[filePath],
    });
  }

  /**
   * Creates a feature request template file.
   */
  public createFeatureIssue(): void {
    const filePath: string = Object.keys(this.configFileFeatureIssue)[0];
    new TextFile(this.project, filePath, {
      lines: this.configFileFeatureIssue[filePath],
    });
  }

  /**
   * Creates a housekeeping issue template file.
   */
  public createHousekeepingIssue(): void {
    const filePath: string = Object.keys(this.configFileHousekeepingIssue)[0];
    new TextFile(this.project, filePath, {
      lines: this.configFileHousekeepingIssue[filePath],
    });
  }

  /**
   * Creates a question issue template file.
   */
  public createQuestionIssue(): void {
    const filePath: string = Object.keys(this.configFileQuestionIssue)[0];
    new TextFile(this.project, filePath, {
      lines: this.configFileQuestionIssue[filePath],
    });
  }

  /**
   * Creates a the git cliff template file.
   */
  public createCliff(): void {
    const filePath: string = Object.keys(this.configFileCliff)[0];
    new TextFile(this.project, filePath, {
      lines: this.configFileCliff[filePath],
    });
  }

  /**
   * Creates a release workflow template file.
   */
  public createReleaseWorkflow(): void {
    const filePath: string = Object.keys(this.configFileReleaseWorkflow)[0];
    new TextFile(this.project, filePath, {
      lines: this.configFileReleaseWorkflow[filePath],
    });
  }

  /**
   * Retrieves the file paths for all dynamic and static configuration files.
   *
   * @returns A list of file path patterns, including dynamic configurations and static files like `.gitattributes` and `.gitignore`.
   */
  private get filePatterns(): string[] {
    const configs: Record<string, string[]>[] = [
      this.configFilePullRequest,
      this.configFileBugIssue,
      this.configFileFeatureIssue,
      this.configFileHousekeepingIssue,
      this.configFileQuestionIssue,
      this.configFileCliff,
      this.configFileReleaseWorkflow,
    ];
    const dynamicFilePaths: string[] = configs
      .map((config: Record<string, string[]>): string => `/${Object.keys(config)[0]}`)
      .filter((filePath: string): string => filePath);
    const staticFilePaths: string[] = ['/.gitattributes', '/.gitignore'];

    return [...dynamicFilePaths, ...staticFilePaths];
  }

  /**
   * Gets additional ignore patterns to be added to the project's ignore configuration.
   *
   * @returns A list of ignore patterns.
   */
  protected get additionalIgnorePatterns(): string[] {
    const patterns: string[] = [...this.filePatterns, '/CHANGELOG.md'];

    return patterns;
  }

  public override registerConfig(): void {
    this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
  }
}

/**
 * Configuration strategy for Projen standard API GitHub base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class ProjenStandardGitHubConfigBaseStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  applyConfig(_config: Config<T>): void {}
}

/**
 * Configuration strategy for Projen-tracked GitHub base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class NonApiGitHubConfigBaseStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  applyConfig(config: Config<T>): void {
    if (config instanceof GitHubConfigBase) {
      config.createPullRequest();
      config.createBugIssue();
      config.createFeatureIssue();
      config.createHousekeepingIssue();
      config.createQuestionIssue();
      config.createCliff();
      config.createReleaseWorkflow();
    }
  }
}

"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubConfigBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const config_1 = require("../config");
const utils_1 = require("../../util/utils");
/**
 * Base class for implementing all relevant GitHub configuration.
 *
 * This class acts as a base for handling GitHub configuration within projects.
 */
class GitHubConfigBase extends config_1.Config {
    constructor(project) {
        super(project);
        this.attributePatterns = this.standardAttributesPatterns;
    }
    /**
     * Gets the standard attributes patterns required for configuration.
     *
     * @returns A list of attributes patterns.
     */
    get standardAttributesPatterns() {
        return [];
    }
    /**
     * Retrieves the configuration for the pull request template file.
     *
     * @returns A record where the key is the file path and the value is an array of strings
     *          representing the content of the issue template.
     */
    get configFilePullRequest() {
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
    // /**
    //  * Retrieves the configuration for the bug issue template file.
    //  *
    //  * @returns A record where the key is the file path and the value is an array of strings
    //  *          representing the content of the issue template.
    //  */
    // protected get configFileBugIssue(): Record<string, string[]> {
    //   return {
    //     '.github/ISSUE_TEMPLATE/bug.yml': [
    //       'name: 🐞 Bug',
    //       'description: File a bug/issue',
    //       'title: "[BUG] <title>"',
    //       'labels: ["type: bug"]',
    //       'body:',
    //       '  - type: textarea',
    //       '    attributes:',
    //       '      label: Current behavior',
    //       "      description: A description of what you're experiencing.",
    //       '    validations:',
    //       '      required: true',
    //       '',
    //       '  - type: textarea',
    //       '    attributes:',
    //       '      label: Expected behavior',
    //       '      description: A description of what you expected to happen.',
    //       '    validations:',
    //       '      required: true',
    //     ],
    //   };
    // }
    // /**
    //  * Retrieves the configuration for the feature request template file.
    //  *
    //  * @returns A record where the key is the file path and the value is an array of strings
    //  *          representing the content of the issue template.
    //  */
    // protected get configFileFeatureIssue(): Record<string, string[]> {
    //   return {
    //     '.github/ISSUE_TEMPLATE/feature.yml': [
    //       'name: 💡 Feature',
    //       'description: Request for a new feature',
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
    // /**
    //  * Retrieves the configuration for the housekeeping issue template file.
    //  *
    //  * @returns A record where the key is the file path and the value is an array of strings
    //  *          representing the content of the issue template.
    //  */
    // protected get configFileHousekeepingIssue(): Record<string, string[]> {
    //   return {
    //     '.github/ISSUE_TEMPLATE/housekeeping.yml': [
    //       'name: 💡 Housekeeping',
    //       'description: Maintenance or refactoring task',
    //       'title: "[HOUSEKEEPING] <title>"',
    //       'labels: ["type: housekeeping"]',
    //       'body:',
    //       '  - type: textarea',
    //       '    attributes:',
    //       '      label: Description',
    //       '      description: A description of the housekeeping task.',
    //       '    validations:',
    //       '      required: true',
    //       '',
    //       '  - type: textarea',
    //       '    attributes:',
    //       '      label: Task List',
    //       '      description: Describe the steps to fulfill the housekeeping task.',
    //       '      value: |',
    //       '        - [ ] My First Task',
    //       '    validations:',
    //       '      required: true',
    //     ],
    //   };
    // }
    // /**
    //  * Retrieves the configuration for the question issue template file.
    //  *
    //  * @returns A record where the key is the file path and the value is an array of strings
    //  *          representing the content of the issue template.
    //  */
    // protected get configFileQuestionIssue(): Record<string, string[]> {
    //   return {
    //     '.github/ISSUE_TEMPLATE/question.yml': [
    //       'name: ❓ Question',
    //       'description: Ask a question',
    //       'title: "[QUESTION] <title>"',
    //       'labels: ["type: question"]',
    //       'body:',
    //       '  - type: textarea',
    //       '    attributes:',
    //       '      label: Question',
    //       '      description: What would you like to know? If you encounter unusual behavior or identified a missing feature, consider opening a bug report instead.',
    //       '    validations:',
    //       '      required: true',
    //     ],
    //   };
    // }
    /**
     * Retrieves the configuration for the git cliff template file.
     *
     * @returns A record where the key is the file path and the value is an array of strings
     *          representing the content of the issue template.
     */
    get configFileCliff() {
        return {
            'cliff.toml': [
                '# git-cliff ~ default configuration file',
                '# https://git-cliff.org/docs/configuration',
                '#',
                '# Lines starting with "#" are comments.',
                '# Configuration options are organized into tables and keys.',
                '# See documentation for more information on available options.',
                '',
                '[changelog]',
                '# changelog header',
                'header = """',
                '# Changelog\\n',
                'All notable changes to this project will be documented in this file.\\n',
                '"""',
                '# template for the changelog body',
                '# https://keats.github.io/tera/docs/#introduction',
                'body = """',
                '{% if version %}\\',
                '    ## [{{ version | trim_start_matches(pat="v") }}] - {{ timestamp | date(format="%Y-%m-%d") }}',
                '{% else %}\\',
                '    ## [unreleased]',
                '{% endif %}\\',
                '{% for group, commits in commits | group_by(attribute="group") %}',
                '    ### {{ group | striptags | trim | upper_first }}',
                '    {% for commit in commits %}',
                '        - {% if commit.scope %}*({{ commit.scope }})* {% endif %}\\',
                '            {% if commit.breaking %}[**breaking**] {% endif %}\\',
                '            {{ commit.message | upper_first }}\\',
                '    {% endfor %}',
                '{% endfor %}\\n',
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
                '  #{ pattern = "\\((\\w+\\s)?#([0-9]+)\\)", replace = "([#${2}](<REPO>/issues/${2}))"},',
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
                '  { message = "^chore\\\\(release\\\\): prepare for", skip = true },',
                '  { message = "^chore\\\\(deps.*\\\\)", skip = true },',
                '  { message = "^chore\\\\(pr\\\\)", skip = true },',
                '  { message = "^chore\\\\(pull\\\\)", skip = true },',
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
    get configFileReleaseWorkflow() {
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
    /**
     * Retrieves the configuration for the enforce labels workflow template file.
     *
     * @returns A record where the key is the file path and the value is an array of strings
     *          representing the content of the workflow template.
     */
    get configFileEnforceLabelsWorkflow() {
        return {
            '.github/workflows/enforce-labels.yml': [
                'name: Enforce labels',
                '',
                'on:',
                '  pull_request:',
                '    types: [opened, labeled]',
                '',
                'permissions:',
                '  contents: write',
                '  pull-requests: read',
                '',
                'jobs:',
                '  enforce-label-version-release:',
                "    name: 'Enforce Labels: version: patch, version: minor, version: major, no_release'",
                '    runs-on: ubuntu-latest',
                '    steps:',
                '      - name: Check out code',
                '        uses: actions/checkout@v4',
                '      - name: Enforce version release labels',
                '        uses: yogevbd/enforce-label-action@2.2.2',
                '        with:',
                "          REQUIRED_LABELS_ANY: 'version: patch,version: minor,version: major,no_release'",
                "          REQUIRED_LABELS_ANY_DESCRIPTION: \"Select at least one label ['version: patch', 'version: minor', 'version: major', 'no_release']\"",
            ],
        };
    }
    /**
     * Creates a template file based on the provided configuration.
     *
     * @param config - The configuration object containing the file path and content.
     */
    createTemplateFile(config) {
        const filePath = Object.keys(config)[0];
        new projen_1.TextFile(this.project, filePath, {
            lines: config[filePath],
        });
    }
    /**
     * Adds custom attributes patterns to the project's configuration.
     *
     * @param patterns - An array of file or directory patterns to be added as attributes.
     */
    addAttributePatterns(patterns) {
        this.attributePatterns = [...this.attributePatterns, ...patterns];
    }
    /**
     * Gets a list of all relevant config files.
     * @returns List of configs
     */
    get configs() {
        return [
            this.configFilePullRequest,
            // this.configFileBugIssue,
            // this.configFileFeatureIssue,
            // this.configFileHousekeepingIssue,
            // this.configFileQuestionIssue,
            this.configFileCliff,
            this.configFileReleaseWorkflow,
            this.configFileEnforceLabelsWorkflow,
        ];
    }
    /**
     * Retrieves the file paths for all dynamic and static configuration files.
     *
     * @returns A list of file path patterns, including dynamic configurations and static files like `.gitattributes` and `.gitignore`.
     */
    get filePatterns() {
        const dynamicFilePaths = this.configs
            .map((config) => `/${Object.keys(config)[0]}`)
            .filter((filePath) => filePath);
        const staticFilePaths = ['/.gitattributes', '/.gitignore'];
        return [...dynamicFilePaths, ...staticFilePaths];
    }
    get additionalIgnorePatterns() {
        const patterns = [...this.filePatterns, '/CHANGELOG.md'];
        return patterns;
    }
    get additionalAttributesPatterns() {
        return ['CHANGELOG.md'];
    }
    registerConfig() {
        if (utils_1.util.isValidProject(this.project)) {
            this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
        }
        this.addAttributePatterns(this.additionalAttributesPatterns);
    }
    applyConfig() {
        this.createTemplateFile(this.configFilePullRequest);
        // this.createTemplateFile(this.configFileBugIssue);
        // this.createTemplateFile(this.configFileFeatureIssue);
        // this.createTemplateFile(this.configFileHousekeepingIssue);
        // this.createTemplateFile(this.configFileQuestionIssue);
        this.createTemplateFile(this.configFileCliff);
        this.createTemplateFile(this.configFileReleaseWorkflow);
        this.createTemplateFile(this.configFileEnforceLabelsWorkflow);
        for (const value of this.attributePatterns) {
            this.project.gitattributes.addAttributes(`/${value}`, 'linguist-generated');
        }
    }
}
exports.GitHubConfigBase = GitHubConfigBase;
_a = JSII_RTTI_SYMBOL_1;
GitHubConfigBase[_a] = { fqn: "@dxfrontier/projen-template-projects.GitHubConfigBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Jhc2UvY29uZmlnL2dpdGh1Yi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFrQztBQUNsQyxzQ0FBbUM7QUFFbkMsNENBQXdDO0FBRXhDOzs7O0dBSUc7QUFDSCxNQUFhLGdCQUFpQixTQUFRLGVBQU07SUFHMUMsWUFBWSxPQUFxQjtRQUMvQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFZixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDO0lBQzNELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYywwQkFBMEI7UUFDdEMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxJQUFjLHFCQUFxQjtRQUNqQyxPQUFPO1lBQ0wsa0NBQWtDLEVBQUU7Z0JBQ2xDLHdCQUF3QjtnQkFDeEIsRUFBRTtnQkFDRiw2REFBNkQ7Z0JBQzdELEVBQUU7Z0JBQ0YsNEJBQTRCO2dCQUM1QixFQUFFO2dCQUNGLG1EQUFtRDtnQkFDbkQsa0NBQWtDO2dCQUNsQyxtREFBbUQ7Z0JBQ25ELDhDQUE4QztnQkFDOUMsRUFBRTtnQkFDRixlQUFlO2dCQUNmLEVBQUU7Z0JBQ0YsNEdBQTRHO2dCQUM1RyxrR0FBa0c7Z0JBQ2xHLHlGQUF5RjtnQkFDekYsaUVBQWlFO2dCQUNqRSwwQ0FBMEM7Z0JBQzFDLEVBQUU7Z0JBQ0YsYUFBYTtnQkFDYixFQUFFO2dCQUNGLDJEQUEyRDtnQkFDM0QseUNBQXlDO2FBQzFDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNO0lBQ04sa0VBQWtFO0lBQ2xFLEtBQUs7SUFDTCwyRkFBMkY7SUFDM0YsOERBQThEO0lBQzlELE1BQU07SUFDTixpRUFBaUU7SUFDakUsYUFBYTtJQUNiLDBDQUEwQztJQUMxQyx3QkFBd0I7SUFDeEIseUNBQXlDO0lBQ3pDLGtDQUFrQztJQUNs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SUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVlLFdBQVc7UUFDekIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3BELG9EQUFvRDtRQUNwRCx3REFBd0Q7UUFDeEQsNkRBQTZEO1FBQzdELHlEQUF5RDtRQUN6RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFFOUQsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQzlFLENBQUM7SUFDSCxDQUFDOztBQTFhSCw0Q0EyYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0RmlsZSB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgUHJvamVjdFR5cGVzIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcy9wcm9qZWN0JztcbmltcG9ydCB7IHV0aWwgfSBmcm9tICcuLi8uLi91dGlsL3V0aWxzJztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IEdpdEh1YiBjb25maWd1cmF0aW9uLlxuICpcbiAqIFRoaXMgY2xhc3MgYWN0cyBhcyBhIGJhc2UgZm9yIGhhbmRsaW5nIEdpdEh1YiBjb25maWd1cmF0aW9uIHdpdGhpbiBwcm9qZWN0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIEdpdEh1YkNvbmZpZ0Jhc2UgZXh0ZW5kcyBDb25maWcge1xuICBwcm90ZWN0ZWQgYXR0cmlidXRlUGF0dGVybnM6IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFByb2plY3RUeXBlcykge1xuICAgIHN1cGVyKHByb2plY3QpO1xuXG4gICAgdGhpcy5hdHRyaWJ1dGVQYXR0ZXJucyA9IHRoaXMuc3RhbmRhcmRBdHRyaWJ1dGVzUGF0dGVybnM7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgc3RhbmRhcmQgYXR0cmlidXRlcyBwYXR0ZXJucyByZXF1aXJlZCBmb3IgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMgQSBsaXN0IG9mIGF0dHJpYnV0ZXMgcGF0dGVybnMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHN0YW5kYXJkQXR0cmlidXRlc1BhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUgcHVsbCByZXF1ZXN0IHRlbXBsYXRlIGZpbGUuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgcmVjb3JkIHdoZXJlIHRoZSBrZXkgaXMgdGhlIGZpbGUgcGF0aCBhbmQgdGhlIHZhbHVlIGlzIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAgICogICAgICAgICAgcmVwcmVzZW50aW5nIHRoZSBjb250ZW50IG9mIHRoZSBpc3N1ZSB0ZW1wbGF0ZS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZVB1bGxSZXF1ZXN0KCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuZ2l0aHViL3B1bGxfcmVxdWVzdF90ZW1wbGF0ZS5tZCc6IFtcbiAgICAgICAgJyMjIFJldmlld2VycyBDaGVja2xpc3QnLFxuICAgICAgICAnJyxcbiAgICAgICAgJ2ZvciBjb21wbGV0ZSByZXZpZXcgbGlzdCByZWZlciB0byBBQlMgTG9vcCAtIFJldmlldyBBc3BlY3RzJyxcbiAgICAgICAgJycsXG4gICAgICAgICcjIyMgT3JnYW5pemF0aW9uYWwgU2VjdGlvbicsXG4gICAgICAgICcnLFxuICAgICAgICAnLSBbIF0gUFIgaXMgYXNzaWduZWQgdG8gdGhlIGFjY29yZGluZyBmZWF0dXJlL2J1ZycsXG4gICAgICAgICctIFsgXSBGZWF0dXJlL2J1ZyBpcyBkZXNjcmlwdGl2ZScsXG4gICAgICAgICctIFsgXSBGZWF0dXJlL2J1ZyBpcyBhc3NpZ25lZCB0byBhY2NvcmRpbmcgbGFiZWxzJyxcbiAgICAgICAgJy0gWyBdIEZlYXR1cmUvYnVnIGlzIGFzc2lnbmVkIHRvIGEgZGV2ZWxvcGVyJyxcbiAgICAgICAgJycsXG4gICAgICAgICcjIyMgU3RydWN0dXJlJyxcbiAgICAgICAgJycsXG4gICAgICAgICctIFsgXSBSZWFkYWJpbGl0eTogQ29kZSBpcyBlYXN5IHRvIHVuZGVyc3RhbmQsIHdpdGggbWVhbmluZ2Z1bCBuYW1lcyBmb3IgdmFyaWFibGVzLCBmdW5jdGlvbnMsIGFuZCBjbGFzc2VzJyxcbiAgICAgICAgJy0gWyBdIENvbW1lbnRzOiBNZWFuaW5nZnVsIGFuZCBoZWxwZnVsIGNvbW1lbnRzLiBDb2RlIGlzIGRvY3VtZW50ZWQgd2l0aG91dCBiZWluZyBvdmVyLWNvbW1lbnRlZCcsXG4gICAgICAgICctIFsgXSBEUlksIEtJU1MgYW5kIFlBR05JOiBDb2RlIGltcGxlbWVudHMgb25seSBuZWNlc3NhcnkgZmVhdHVyZXM7IG5vIG92ZXItZW5naW5lZXJpbmcnLFxuICAgICAgICAnLSBbIF0gTm8gc2Vuc2l0aXZlIGRhdGEgKGUuZy4sIHBhc3N3b3JkcywgQVBJIGtleXMpIGluIHRoZSBjb2RlJyxcbiAgICAgICAgJy0gWyBdIE5vIG1ham9yIHVwZGF0ZXMgZm9yIHVzZWQgcGFja2FnZXMnLFxuICAgICAgICAnJyxcbiAgICAgICAgJyMjIyBUZXN0aW5nJyxcbiAgICAgICAgJycsXG4gICAgICAgICctIFsgXSBDb2RlIGlzIGxvY2FsbHkgdGVzdGVkIGJ5IGRldmVsb3BlciAoaWYgYXBwbGljYWJsZSknLFxuICAgICAgICAnLSBbIF0gQXV0b21hdGVkIHRlc3RzIHBhc3Mgc3VjY2Vzc2Z1bGx5JyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIC8vIC8qKlxuICAvLyAgKiBSZXRyaWV2ZXMgdGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBidWcgaXNzdWUgdGVtcGxhdGUgZmlsZS5cbiAgLy8gICpcbiAgLy8gICogQHJldHVybnMgQSByZWNvcmQgd2hlcmUgdGhlIGtleSBpcyB0aGUgZmlsZSBwYXRoIGFuZCB0aGUgdmFsdWUgaXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAvLyAgKiAgICAgICAgICByZXByZXNlbnRpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIGlzc3VlIHRlbXBsYXRlLlxuICAvLyAgKi9cbiAgLy8gcHJvdGVjdGVkIGdldCBjb25maWdGaWxlQnVnSXNzdWUoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgLy8gICByZXR1cm4ge1xuICAvLyAgICAgJy5naXRodWIvSVNTVUVfVEVNUExBVEUvYnVnLnltbCc6IFtcbiAgLy8gICAgICAgJ25hbWU6IPCfkJ4gQnVnJyxcbiAgLy8gICAgICAgJ2Rlc2NyaXB0aW9uOiBGaWxlIGEgYnVnL2lzc3VlJyxcbiAgLy8gICAgICAgJ3RpdGxlOiBcIltCVUddIDx0aXRsZT5cIicsXG4gIC8vICAgICAgICdsYWJlbHM6IFtcInR5cGU6IGJ1Z1wiXScsXG4gIC8vICAgICAgICdib2R5OicsXG4gIC8vICAgICAgICcgIC0gdHlwZTogdGV4dGFyZWEnLFxuICAvLyAgICAgICAnICAgIGF0dHJpYnV0ZXM6JyxcbiAgLy8gICAgICAgJyAgICAgIGxhYmVsOiBDdXJyZW50IGJlaGF2aW9yJyxcbiAgLy8gICAgICAgXCIgICAgICBkZXNjcmlwdGlvbjogQSBkZXNjcmlwdGlvbiBvZiB3aGF0IHlvdSdyZSBleHBlcmllbmNpbmcuXCIsXG4gIC8vICAgICAgICcgICAgdmFsaWRhdGlvbnM6JyxcbiAgLy8gICAgICAgJyAgICAgIHJlcXVpcmVkOiB0cnVlJyxcbiAgLy8gICAgICAgJycsXG4gIC8vICAgICAgICcgIC0gdHlwZTogdGV4dGFyZWEnLFxuICAvLyAgICAgICAnICAgIGF0dHJpYnV0ZXM6JyxcbiAgLy8gICAgICAgJyAgICAgIGxhYmVsOiBFeHBlY3RlZCBiZWhhdmlvcicsXG4gIC8vICAgICAgICcgICAgICBkZXNjcmlwdGlvbjogQSBkZXNjcmlwdGlvbiBvZiB3aGF0IHlvdSBleHBlY3RlZCB0byBoYXBwZW4uJyxcbiAgLy8gICAgICAgJyAgICB2YWxpZGF0aW9uczonLFxuICAvLyAgICAgICAnICAgICAgcmVxdWlyZWQ6IHRydWUnLFxuICAvLyAgICAgXSxcbiAgLy8gICB9O1xuICAvLyB9XG5cbiAgLy8gLyoqXG4gIC8vICAqIFJldHJpZXZlcyB0aGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIGZlYXR1cmUgcmVxdWVzdCB0ZW1wbGF0ZSBmaWxlLlxuICAvLyAgKlxuICAvLyAgKiBAcmV0dXJucyBBIHJlY29yZCB3aGVyZSB0aGUga2V5IGlzIHRoZSBmaWxlIHBhdGggYW5kIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSBvZiBzdHJpbmdzXG4gIC8vICAqICAgICAgICAgIHJlcHJlc2VudGluZyB0aGUgY29udGVudCBvZiB0aGUgaXNzdWUgdGVtcGxhdGUuXG4gIC8vICAqL1xuICAvLyBwcm90ZWN0ZWQgZ2V0IGNvbmZpZ0ZpbGVGZWF0dXJlSXNzdWUoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgLy8gICByZXR1cm4ge1xuICAvLyAgICAgJy5naXRodWIvSVNTVUVfVEVNUExBVEUvZmVhdHVyZS55bWwnOiBbXG4gIC8vICAgICAgICduYW1lOiDwn5KhIEZlYXR1cmUnLFxuICAvLyAgICAgICAnZGVzY3JpcHRpb246IFJlcXVlc3QgZm9yIGEgbmV3IGZlYXR1cmUnLFxuICAvLyAgICAgICAndGl0bGU6IFwiW0ZFQVRVUkVdIDx0aXRsZT5cIicsXG4gIC8vICAgICAgICdsYWJlbHM6IFtcInR5cGU6IGZlYXR1cmVcIl0nLFxuICAvLyAgICAgICAnYm9keTonLFxuICAvLyAgICAgICAnICAtIHR5cGU6IHRleHRhcmVhJyxcbiAgLy8gICAgICAgJyAgICBhdHRyaWJ1dGVzOicsXG4gIC8vICAgICAgICcgICAgICBsYWJlbDogRGVzY3JpcHRpb24nLFxuICAvLyAgICAgICAnICAgICAgZGVzY3JpcHRpb246IEEgZGVzY3JpcHRpb24gb2YgdGhlIGZlYXR1cmUuJyxcbiAgLy8gICAgICAgJyAgICB2YWxpZGF0aW9uczonLFxuICAvLyAgICAgICAnICAgICAgcmVxdWlyZWQ6IHRydWUnLFxuICAvLyAgICAgICAnJyxcbiAgLy8gICAgICAgJyAgLSB0eXBlOiB0ZXh0YXJlYScsXG4gIC8vICAgICAgICcgICAgYXR0cmlidXRlczonLFxuICAvLyAgICAgICAnICAgICAgbGFiZWw6IFRhc2sgTGlzdCcsXG4gIC8vICAgICAgICcgICAgICBkZXNjcmlwdGlvbjogRGVzY3JpYmUgdGhlIHN0ZXBzIHRvIGZ1bGZpbGwgdGhlIGZlYXR1cmUuJyxcbiAgLy8gICAgICAgJyAgICAgIHZhbHVlOiB8JyxcbiAgLy8gICAgICAgJyAgICAgICAgLSBbIF0gTXkgRmlyc3QgVGFzaycsXG4gIC8vICAgICAgICcgICAgdmFsaWRhdGlvbnM6JyxcbiAgLy8gICAgICAgJyAgICAgIHJlcXVpcmVkOiB0cnVlJyxcbiAgLy8gICAgIF0sXG4gIC8vICAgfTtcbiAgLy8gfVxuXG4gIC8vIC8qKlxuICAvLyAgKiBSZXRyaWV2ZXMgdGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBob3VzZWtlZXBpbmcgaXNzdWUgdGVtcGxhdGUgZmlsZS5cbiAgLy8gICpcbiAgLy8gICogQHJldHVybnMgQSByZWNvcmQgd2hlcmUgdGhlIGtleSBpcyB0aGUgZmlsZSBwYXRoIGFuZCB0aGUgdmFsdWUgaXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAvLyAgKiAgICAgICAgICByZXByZXNlbnRpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIGlzc3VlIHRlbXBsYXRlLlxuICAvLyAgKi9cbiAgLy8gcHJvdGVjdGVkIGdldCBjb25maWdGaWxlSG91c2VrZWVwaW5nSXNzdWUoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgLy8gICByZXR1cm4ge1xuICAvLyAgICAgJy5naXRodWIvSVNTVUVfVEVNUExBVEUvaG91c2VrZWVwaW5nLnltbCc6IFtcbiAgLy8gICAgICAgJ25hbWU6IPCfkqEgSG91c2VrZWVwaW5nJyxcbiAgLy8gICAgICAgJ2Rlc2NyaXB0aW9uOiBNYWludGVuYW5jZSBvciByZWZhY3RvcmluZyB0YXNrJyxcbiAgLy8gICAgICAgJ3RpdGxlOiBcIltIT1VTRUtFRVBJTkddIDx0aXRsZT5cIicsXG4gIC8vICAgICAgICdsYWJlbHM6IFtcInR5cGU6IGhvdXNla2VlcGluZ1wiXScsXG4gIC8vICAgICAgICdib2R5OicsXG4gIC8vICAgICAgICcgIC0gdHlwZTogdGV4dGFyZWEnLFxuICAvLyAgICAgICAnICAgIGF0dHJpYnV0ZXM6JyxcbiAgLy8gICAgICAgJyAgICAgIGxhYmVsOiBEZXNjcmlwdGlvbicsXG4gIC8vICAgICAgICcgICAgICBkZXNjcmlwdGlvbjogQSBkZXNjcmlwdGlvbiBvZiB0aGUgaG91c2VrZWVwaW5nIHRhc2suJyxcbiAgLy8gICAgICAgJyAgICB2YWxpZGF0aW9uczonLFxuICAvLyAgICAgICAnICAgICAgcmVxdWlyZWQ6IHRydWUnLFxuICAvLyAgICAgICAnJyxcbiAgLy8gICAgICAgJyAgLSB0eXBlOiB0ZXh0YXJlYScsXG4gIC8vICAgICAgICcgICAgYXR0cmlidXRlczonLFxuICAvLyAgICAgICAnICAgICAgbGFiZWw6IFRhc2sgTGlzdCcsXG4gIC8vICAgICAgICcgICAgICBkZXNjcmlwdGlvbjogRGVzY3JpYmUgdGhlIHN0ZXBzIHRvIGZ1bGZpbGwgdGhlIGhvdXNla2VlcGluZyB0YXNrLicsXG4gIC8vICAgICAgICcgICAgICB2YWx1ZTogfCcsXG4gIC8vICAgICAgICcgICAgICAgIC0gWyBdIE15IEZpcnN0IFRhc2snLFxuICAvLyAgICAgICAnICAgIHZhbGlkYXRpb25zOicsXG4gIC8vICAgICAgICcgICAgICByZXF1aXJlZDogdHJ1ZScsXG4gIC8vICAgICBdLFxuICAvLyAgIH07XG4gIC8vIH1cblxuICAvLyAvKipcbiAgLy8gICogUmV0cmlldmVzIHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUgcXVlc3Rpb24gaXNzdWUgdGVtcGxhdGUgZmlsZS5cbiAgLy8gICpcbiAgLy8gICogQHJldHVybnMgQSByZWNvcmQgd2hlcmUgdGhlIGtleSBpcyB0aGUgZmlsZSBwYXRoIGFuZCB0aGUgdmFsdWUgaXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAvLyAgKiAgICAgICAgICByZXByZXNlbnRpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIGlzc3VlIHRlbXBsYXRlLlxuICAvLyAgKi9cbiAgLy8gcHJvdGVjdGVkIGdldCBjb25maWdGaWxlUXVlc3Rpb25Jc3N1ZSgpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAvLyAgIHJldHVybiB7XG4gIC8vICAgICAnLmdpdGh1Yi9JU1NVRV9URU1QTEFURS9xdWVzdGlvbi55bWwnOiBbXG4gIC8vICAgICAgICduYW1lOiDinZMgUXVlc3Rpb24nLFxuICAvLyAgICAgICAnZGVzY3JpcHRpb246IEFzayBhIHF1ZXN0aW9uJyxcbiAgLy8gICAgICAgJ3RpdGxlOiBcIltRVUVTVElPTl0gPHRpdGxlPlwiJyxcbiAgLy8gICAgICAgJ2xhYmVsczogW1widHlwZTogcXVlc3Rpb25cIl0nLFxuICAvLyAgICAgICAnYm9keTonLFxuICAvLyAgICAgICAnICAtIHR5cGU6IHRleHRhcmVhJyxcbiAgLy8gICAgICAgJyAgICBhdHRyaWJ1dGVzOicsXG4gIC8vICAgICAgICcgICAgICBsYWJlbDogUXVlc3Rpb24nLFxuICAvLyAgICAgICAnICAgICAgZGVzY3JpcHRpb246IFdoYXQgd291bGQgeW91IGxpa2UgdG8ga25vdz8gSWYgeW91IGVuY291bnRlciB1bnVzdWFsIGJlaGF2aW9yIG9yIGlkZW50aWZpZWQgYSBtaXNzaW5nIGZlYXR1cmUsIGNvbnNpZGVyIG9wZW5pbmcgYSBidWcgcmVwb3J0IGluc3RlYWQuJyxcbiAgLy8gICAgICAgJyAgICB2YWxpZGF0aW9uczonLFxuICAvLyAgICAgICAnICAgICAgcmVxdWlyZWQ6IHRydWUnLFxuICAvLyAgICAgXSxcbiAgLy8gICB9O1xuICAvLyB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIGdpdCBjbGlmZiB0ZW1wbGF0ZSBmaWxlLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIHJlY29yZCB3aGVyZSB0aGUga2V5IGlzIHRoZSBmaWxlIHBhdGggYW5kIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSBvZiBzdHJpbmdzXG4gICAqICAgICAgICAgIHJlcHJlc2VudGluZyB0aGUgY29udGVudCBvZiB0aGUgaXNzdWUgdGVtcGxhdGUuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGNvbmZpZ0ZpbGVDbGlmZigpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnY2xpZmYudG9tbCc6IFtcbiAgICAgICAgJyMgZ2l0LWNsaWZmIH4gZGVmYXVsdCBjb25maWd1cmF0aW9uIGZpbGUnLFxuICAgICAgICAnIyBodHRwczovL2dpdC1jbGlmZi5vcmcvZG9jcy9jb25maWd1cmF0aW9uJyxcbiAgICAgICAgJyMnLFxuICAgICAgICAnIyBMaW5lcyBzdGFydGluZyB3aXRoIFwiI1wiIGFyZSBjb21tZW50cy4nLFxuICAgICAgICAnIyBDb25maWd1cmF0aW9uIG9wdGlvbnMgYXJlIG9yZ2FuaXplZCBpbnRvIHRhYmxlcyBhbmQga2V5cy4nLFxuICAgICAgICAnIyBTZWUgZG9jdW1lbnRhdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBhdmFpbGFibGUgb3B0aW9ucy4nLFxuICAgICAgICAnJyxcbiAgICAgICAgJ1tjaGFuZ2Vsb2ddJyxcbiAgICAgICAgJyMgY2hhbmdlbG9nIGhlYWRlcicsXG4gICAgICAgICdoZWFkZXIgPSBcIlwiXCInLFxuICAgICAgICAnIyBDaGFuZ2Vsb2dcXFxcbicsXG4gICAgICAgICdBbGwgbm90YWJsZSBjaGFuZ2VzIHRvIHRoaXMgcHJvamVjdCB3aWxsIGJlIGRvY3VtZW50ZWQgaW4gdGhpcyBmaWxlLlxcXFxuJyxcbiAgICAgICAgJ1wiXCJcIicsXG4gICAgICAgICcjIHRlbXBsYXRlIGZvciB0aGUgY2hhbmdlbG9nIGJvZHknLFxuICAgICAgICAnIyBodHRwczovL2tlYXRzLmdpdGh1Yi5pby90ZXJhL2RvY3MvI2ludHJvZHVjdGlvbicsXG4gICAgICAgICdib2R5ID0gXCJcIlwiJyxcbiAgICAgICAgJ3slIGlmIHZlcnNpb24gJX1cXFxcJyxcbiAgICAgICAgJyAgICAjIyBbe3sgdmVyc2lvbiB8IHRyaW1fc3RhcnRfbWF0Y2hlcyhwYXQ9XCJ2XCIpIH19XSAtIHt7IHRpbWVzdGFtcCB8IGRhdGUoZm9ybWF0PVwiJVktJW0tJWRcIikgfX0nLFxuICAgICAgICAneyUgZWxzZSAlfVxcXFwnLFxuICAgICAgICAnICAgICMjIFt1bnJlbGVhc2VkXScsXG4gICAgICAgICd7JSBlbmRpZiAlfVxcXFwnLFxuICAgICAgICAneyUgZm9yIGdyb3VwLCBjb21taXRzIGluIGNvbW1pdHMgfCBncm91cF9ieShhdHRyaWJ1dGU9XCJncm91cFwiKSAlfScsXG4gICAgICAgICcgICAgIyMjIHt7IGdyb3VwIHwgc3RyaXB0YWdzIHwgdHJpbSB8IHVwcGVyX2ZpcnN0IH19JyxcbiAgICAgICAgJyAgICB7JSBmb3IgY29tbWl0IGluIGNvbW1pdHMgJX0nLFxuICAgICAgICAnICAgICAgICAtIHslIGlmIGNvbW1pdC5zY29wZSAlfSooe3sgY29tbWl0LnNjb3BlIH19KSogeyUgZW5kaWYgJX1cXFxcJyxcbiAgICAgICAgJyAgICAgICAgICAgIHslIGlmIGNvbW1pdC5icmVha2luZyAlfVsqKmJyZWFraW5nKipdIHslIGVuZGlmICV9XFxcXCcsXG4gICAgICAgICcgICAgICAgICAgICB7eyBjb21taXQubWVzc2FnZSB8IHVwcGVyX2ZpcnN0IH19XFxcXCcsXG4gICAgICAgICcgICAgeyUgZW5kZm9yICV9JyxcbiAgICAgICAgJ3slIGVuZGZvciAlfVxcXFxuJyxcbiAgICAgICAgJ1wiXCJcIicsXG4gICAgICAgICcjIHRlbXBsYXRlIGZvciB0aGUgY2hhbmdlbG9nIGZvb3RlcicsXG4gICAgICAgICdmb290ZXIgPSBcIlwiXCInLFxuICAgICAgICAnPCEtLSBnZW5lcmF0ZWQgYnkgZ2l0LWNsaWZmIC0tPicsXG4gICAgICAgICdcIlwiXCInLFxuICAgICAgICAnIyByZW1vdmUgdGhlIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHMnLFxuICAgICAgICAndHJpbSA9IHRydWUnLFxuICAgICAgICAnIyBwb3N0cHJvY2Vzc29ycycsXG4gICAgICAgICdwb3N0cHJvY2Vzc29ycyA9IFsnLFxuICAgICAgICAnICAjIHsgcGF0dGVybiA9IFwiPFJFUE8+XCIsIHJlcGxhY2UgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9vcmh1bi9naXQtY2xpZmZcIiB9LCAjIHJlcGxhY2UgcmVwb3NpdG9yeSBVUkwnLFxuICAgICAgICAnXScsXG4gICAgICAgICcnLFxuICAgICAgICAnW2dpdF0nLFxuICAgICAgICAnIyBwYXJzZSB0aGUgY29tbWl0cyBiYXNlZCBvbiBodHRwczovL3d3dy5jb252ZW50aW9uYWxjb21taXRzLm9yZycsXG4gICAgICAgICdjb252ZW50aW9uYWxfY29tbWl0cyA9IHRydWUnLFxuICAgICAgICAnIyBmaWx0ZXIgb3V0IHRoZSBjb21taXRzIHRoYXQgYXJlIG5vdCBjb252ZW50aW9uYWwnLFxuICAgICAgICAnZmlsdGVyX3VuY29udmVudGlvbmFsID0gdHJ1ZScsXG4gICAgICAgICcjIHByb2Nlc3MgZWFjaCBsaW5lIG9mIGEgY29tbWl0IGFzIGFuIGluZGl2aWR1YWwgY29tbWl0JyxcbiAgICAgICAgJ3NwbGl0X2NvbW1pdHMgPSBmYWxzZScsXG4gICAgICAgICcjIHJlZ2V4IGZvciBwcmVwcm9jZXNzaW5nIHRoZSBjb21taXQgbWVzc2FnZXMnLFxuICAgICAgICAnY29tbWl0X3ByZXByb2Nlc3NvcnMgPSBbJyxcbiAgICAgICAgJyAgIyBSZXBsYWNlIGlzc3VlIG51bWJlcnMnLFxuICAgICAgICAnICAjeyBwYXR0ZXJuID0gXCJcXFxcKChcXFxcdytcXFxccyk/IyhbMC05XSspXFxcXClcIiwgcmVwbGFjZSA9IFwiKFsjJHsyfV0oPFJFUE8+L2lzc3Vlcy8kezJ9KSlcIn0sJyxcbiAgICAgICAgJyAgIyBDaGVjayBzcGVsbGluZyBvZiB0aGUgY29tbWl0IHdpdGggaHR0cHM6Ly9naXRodWIuY29tL2NyYXRlLWNpL3R5cG9zJyxcbiAgICAgICAgJyAgIyBJZiB0aGUgc3BlbGxpbmcgaXMgaW5jb3JyZWN0LCBpdCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZml4ZWQuJyxcbiAgICAgICAgJyAgI3sgcGF0dGVybiA9IFwiLipcIiwgcmVwbGFjZV9jb21tYW5kID0gXCJ0eXBvcyAtLXdyaXRlLWNoYW5nZXMgLVwiIH0sJyxcbiAgICAgICAgJ10nLFxuICAgICAgICAnIyByZWdleCBmb3IgcGFyc2luZyBhbmQgZ3JvdXBpbmcgY29tbWl0cycsXG4gICAgICAgICdjb21taXRfcGFyc2VycyA9IFsnLFxuICAgICAgICAnICB7IG1lc3NhZ2UgPSBcIl5mZWF0XCIsIGdyb3VwID0gXCI8IS0tIDAgLS0+8J+agCBGZWF0dXJlc1wiIH0sJyxcbiAgICAgICAgJyAgeyBtZXNzYWdlID0gXCJeZml4XCIsIGdyb3VwID0gXCI8IS0tIDEgLS0+8J+QmyBCdWcgRml4ZXNcIiB9LCcsXG4gICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXmRvY1wiLCBncm91cCA9IFwiPCEtLSAzIC0tPvCfk5ogRG9jdW1lbnRhdGlvblwiIH0sJyxcbiAgICAgICAgJyAgeyBtZXNzYWdlID0gXCJecGVyZlwiLCBncm91cCA9IFwiPCEtLSA0IC0tPuKaoSBQZXJmb3JtYW5jZVwiIH0sJyxcbiAgICAgICAgJyAgeyBtZXNzYWdlID0gXCJecmVmYWN0b3JcIiwgZ3JvdXAgPSBcIjwhLS0gMiAtLT7wn5qcIFJlZmFjdG9yXCIgfSwnLFxuICAgICAgICAnICB7IG1lc3NhZ2UgPSBcIl5zdHlsZVwiLCBncm91cCA9IFwiPCEtLSA1IC0tPvCfjqggU3R5bGluZ1wiIH0sJyxcbiAgICAgICAgJyAgeyBtZXNzYWdlID0gXCJedGVzdFwiLCBncm91cCA9IFwiPCEtLSA2IC0tPvCfp6ogVGVzdGluZ1wiIH0sJyxcbiAgICAgICAgJyAgeyBtZXNzYWdlID0gXCJeY2hvcmVcXFxcXFxcXChyZWxlYXNlXFxcXFxcXFwpOiBwcmVwYXJlIGZvclwiLCBza2lwID0gdHJ1ZSB9LCcsXG4gICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXmNob3JlXFxcXFxcXFwoZGVwcy4qXFxcXFxcXFwpXCIsIHNraXAgPSB0cnVlIH0sJyxcbiAgICAgICAgJyAgeyBtZXNzYWdlID0gXCJeY2hvcmVcXFxcXFxcXChwclxcXFxcXFxcKVwiLCBza2lwID0gdHJ1ZSB9LCcsXG4gICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXmNob3JlXFxcXFxcXFwocHVsbFxcXFxcXFxcKVwiLCBza2lwID0gdHJ1ZSB9LCcsXG4gICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXmNob3JlfF5jaVwiLCBncm91cCA9IFwiPCEtLSA3IC0tPuKame+4jyBNaXNjZWxsYW5lb3VzIFRhc2tzXCIgfSwnLFxuICAgICAgICAnICB7IGJvZHkgPSBcIi4qc2VjdXJpdHlcIiwgZ3JvdXAgPSBcIjwhLS0gOCAtLT7wn5uh77iPIFNlY3VyaXR5XCIgfSwnLFxuICAgICAgICAnICB7IG1lc3NhZ2UgPSBcIl5yZXZlcnRcIiwgZ3JvdXAgPSBcIjwhLS0gOSAtLT7il4DvuI8gUmV2ZXJ0XCIgfSwnLFxuICAgICAgICAnXScsXG4gICAgICAgICcjIHByb3RlY3QgYnJlYWtpbmcgY2hhbmdlcyBmcm9tIGJlaW5nIHNraXBwZWQgZHVlIHRvIG1hdGNoaW5nIGEgc2tpcHBpbmcgY29tbWl0X3BhcnNlcicsXG4gICAgICAgICdwcm90ZWN0X2JyZWFraW5nX2NvbW1pdHMgPSBmYWxzZScsXG4gICAgICAgICcjIGZpbHRlciBvdXQgdGhlIGNvbW1pdHMgdGhhdCBhcmUgbm90IG1hdGNoZWQgYnkgY29tbWl0IHBhcnNlcnMnLFxuICAgICAgICAnZmlsdGVyX2NvbW1pdHMgPSBmYWxzZScsXG4gICAgICAgICcjIHJlZ2V4IGZvciBtYXRjaGluZyBnaXQgdGFncycsXG4gICAgICAgICcjIHRhZ19wYXR0ZXJuID0gXCJ2WzAtOV0uKlwiJyxcbiAgICAgICAgJyMgcmVnZXggZm9yIHNraXBwaW5nIHRhZ3MnLFxuICAgICAgICAnIyBza2lwX3RhZ3MgPSBcIlwiJyxcbiAgICAgICAgJyMgcmVnZXggZm9yIGlnbm9yaW5nIHRhZ3MnLFxuICAgICAgICAnIyBpZ25vcmVfdGFncyA9IFwiXCInLFxuICAgICAgICAnIyBzb3J0IHRoZSB0YWdzIHRvcG9sb2dpY2FsbHknLFxuICAgICAgICAndG9wb19vcmRlciA9IGZhbHNlJyxcbiAgICAgICAgJyMgc29ydCB0aGUgY29tbWl0cyBpbnNpZGUgc2VjdGlvbnMgYnkgb2xkZXN0L25ld2VzdCBvcmRlcicsXG4gICAgICAgICdzb3J0X2NvbW1pdHMgPSBcIm9sZGVzdFwiJyxcbiAgICAgICAgJyMgbGltaXQgdGhlIG51bWJlciBvZiBjb21taXRzIGluY2x1ZGVkIGluIHRoZSBjaGFuZ2Vsb2cuJyxcbiAgICAgICAgJyMgbGltaXRfY29tbWl0cyA9IDQyJyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSByZWxlYXNlIHdvcmtmbG93IHRlbXBsYXRlIGZpbGUuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgcmVjb3JkIHdoZXJlIHRoZSBrZXkgaXMgdGhlIGZpbGUgcGF0aCBhbmQgdGhlIHZhbHVlIGlzIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAgICogICAgICAgICAgcmVwcmVzZW50aW5nIHRoZSBjb250ZW50IG9mIHRoZSBpc3N1ZSB0ZW1wbGF0ZS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZVJlbGVhc2VXb3JrZmxvdygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnLmdpdGh1Yi93b3JrZmxvd3MvcmVsZWFzZS55bWwnOiBbXG4gICAgICAgICduYW1lOiBSZWxlYXNlJyxcbiAgICAgICAgJ29uOicsXG4gICAgICAgICcgIHB1bGxfcmVxdWVzdDonLFxuICAgICAgICAnICAgIGJyYW5jaGVzOicsXG4gICAgICAgICcgICAgICAtIGRldicsXG4gICAgICAgICcgICAgdHlwZXM6JyxcbiAgICAgICAgJyAgICAgIC0gY2xvc2VkJyxcbiAgICAgICAgJ2pvYnM6JyxcbiAgICAgICAgJyAgcmVsZWFzZTonLFxuICAgICAgICAnICAgIHJ1bnMtb246IHVidW50dS1sYXRlc3QnLFxuICAgICAgICAnICAgIHBlcm1pc3Npb25zOicsXG4gICAgICAgICcgICAgICBjb250ZW50czogd3JpdGUnLFxuICAgICAgICAnICAgICAgcHVsbC1yZXF1ZXN0czogd3JpdGUnLFxuICAgICAgICAnICAgIHN0ZXBzOicsXG4gICAgICAgICcgICAgICAtIG5hbWU6IENyZWF0ZSByZWxlYXNlJyxcbiAgICAgICAgJyAgICAgICAgdXNlczogZHhmcm9udGllci9naC1hY3Rpb24tcmVsZWFzZUBtYWluJyxcbiAgICAgICAgJyAgICAgICAgd2l0aDonLFxuICAgICAgICAnICAgICAgICAgIEdJVEhVQl9UT0tFTjogJHt7IHNlY3JldHMuR0lUSFVCX1RPS0VOIH19JyxcbiAgICAgICAgJyAgICAgICAgICBCUkFOQ0g6IGRldicsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUgZW5mb3JjZSBsYWJlbHMgd29ya2Zsb3cgdGVtcGxhdGUgZmlsZS5cbiAgICpcbiAgICogQHJldHVybnMgQSByZWNvcmQgd2hlcmUgdGhlIGtleSBpcyB0aGUgZmlsZSBwYXRoIGFuZCB0aGUgdmFsdWUgaXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgKiAgICAgICAgICByZXByZXNlbnRpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIHdvcmtmbG93IHRlbXBsYXRlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBjb25maWdGaWxlRW5mb3JjZUxhYmVsc1dvcmtmbG93KCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuZ2l0aHViL3dvcmtmbG93cy9lbmZvcmNlLWxhYmVscy55bWwnOiBbXG4gICAgICAgICduYW1lOiBFbmZvcmNlIGxhYmVscycsXG4gICAgICAgICcnLFxuICAgICAgICAnb246JyxcbiAgICAgICAgJyAgcHVsbF9yZXF1ZXN0OicsXG4gICAgICAgICcgICAgdHlwZXM6IFtvcGVuZWQsIGxhYmVsZWRdJyxcbiAgICAgICAgJycsXG4gICAgICAgICdwZXJtaXNzaW9uczonLFxuICAgICAgICAnICBjb250ZW50czogd3JpdGUnLFxuICAgICAgICAnICBwdWxsLXJlcXVlc3RzOiByZWFkJyxcbiAgICAgICAgJycsXG4gICAgICAgICdqb2JzOicsXG4gICAgICAgICcgIGVuZm9yY2UtbGFiZWwtdmVyc2lvbi1yZWxlYXNlOicsXG4gICAgICAgIFwiICAgIG5hbWU6ICdFbmZvcmNlIExhYmVsczogdmVyc2lvbjogcGF0Y2gsIHZlcnNpb246IG1pbm9yLCB2ZXJzaW9uOiBtYWpvciwgbm9fcmVsZWFzZSdcIixcbiAgICAgICAgJyAgICBydW5zLW9uOiB1YnVudHUtbGF0ZXN0JyxcbiAgICAgICAgJyAgICBzdGVwczonLFxuICAgICAgICAnICAgICAgLSBuYW1lOiBDaGVjayBvdXQgY29kZScsXG4gICAgICAgICcgICAgICAgIHVzZXM6IGFjdGlvbnMvY2hlY2tvdXRAdjQnLFxuICAgICAgICAnICAgICAgLSBuYW1lOiBFbmZvcmNlIHZlcnNpb24gcmVsZWFzZSBsYWJlbHMnLFxuICAgICAgICAnICAgICAgICB1c2VzOiB5b2dldmJkL2VuZm9yY2UtbGFiZWwtYWN0aW9uQDIuMi4yJyxcbiAgICAgICAgJyAgICAgICAgd2l0aDonLFxuICAgICAgICBcIiAgICAgICAgICBSRVFVSVJFRF9MQUJFTFNfQU5ZOiAndmVyc2lvbjogcGF0Y2gsdmVyc2lvbjogbWlub3IsdmVyc2lvbjogbWFqb3Isbm9fcmVsZWFzZSdcIixcbiAgICAgICAgXCIgICAgICAgICAgUkVRVUlSRURfTEFCRUxTX0FOWV9ERVNDUklQVElPTjogXFxcIlNlbGVjdCBhdCBsZWFzdCBvbmUgbGFiZWwgWyd2ZXJzaW9uOiBwYXRjaCcsICd2ZXJzaW9uOiBtaW5vcicsICd2ZXJzaW9uOiBtYWpvcicsICdub19yZWxlYXNlJ11cXFwiXCIsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHRlbXBsYXRlIGZpbGUgYmFzZWQgb24gdGhlIHByb3ZpZGVkIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWcgLSBUaGUgY29uZmlndXJhdGlvbiBvYmplY3QgY29udGFpbmluZyB0aGUgZmlsZSBwYXRoIGFuZCBjb250ZW50LlxuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGVUZW1wbGF0ZUZpbGUoY29uZmlnOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4pOiB2b2lkIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXMoY29uZmlnKVswXTtcbiAgICBuZXcgVGV4dEZpbGUodGhpcy5wcm9qZWN0LCBmaWxlUGF0aCwge1xuICAgICAgbGluZXM6IGNvbmZpZ1tmaWxlUGF0aF0sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBjdXN0b20gYXR0cmlidXRlcyBwYXR0ZXJucyB0byB0aGUgcHJvamVjdCdzIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBwYXR0ZXJucyAtIEFuIGFycmF5IG9mIGZpbGUgb3IgZGlyZWN0b3J5IHBhdHRlcm5zIHRvIGJlIGFkZGVkIGFzIGF0dHJpYnV0ZXMuXG4gICAqL1xuICBwdWJsaWMgYWRkQXR0cmlidXRlUGF0dGVybnMocGF0dGVybnM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgdGhpcy5hdHRyaWJ1dGVQYXR0ZXJucyA9IFsuLi50aGlzLmF0dHJpYnV0ZVBhdHRlcm5zLCAuLi5wYXR0ZXJuc107XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIGxpc3Qgb2YgYWxsIHJlbGV2YW50IGNvbmZpZyBmaWxlcy5cbiAgICogQHJldHVybnMgTGlzdCBvZiBjb25maWdzXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGNvbmZpZ3MoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+W10ge1xuICAgIHJldHVybiBbXG4gICAgICB0aGlzLmNvbmZpZ0ZpbGVQdWxsUmVxdWVzdCxcbiAgICAgIC8vIHRoaXMuY29uZmlnRmlsZUJ1Z0lzc3VlLFxuICAgICAgLy8gdGhpcy5jb25maWdGaWxlRmVhdHVyZUlzc3VlLFxuICAgICAgLy8gdGhpcy5jb25maWdGaWxlSG91c2VrZWVwaW5nSXNzdWUsXG4gICAgICAvLyB0aGlzLmNvbmZpZ0ZpbGVRdWVzdGlvbklzc3VlLFxuICAgICAgdGhpcy5jb25maWdGaWxlQ2xpZmYsXG4gICAgICB0aGlzLmNvbmZpZ0ZpbGVSZWxlYXNlV29ya2Zsb3csXG4gICAgICB0aGlzLmNvbmZpZ0ZpbGVFbmZvcmNlTGFiZWxzV29ya2Zsb3csXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGZpbGUgcGF0aHMgZm9yIGFsbCBkeW5hbWljIGFuZCBzdGF0aWMgY29uZmlndXJhdGlvbiBmaWxlcy5cbiAgICpcbiAgICogQHJldHVybnMgQSBsaXN0IG9mIGZpbGUgcGF0aCBwYXR0ZXJucywgaW5jbHVkaW5nIGR5bmFtaWMgY29uZmlndXJhdGlvbnMgYW5kIHN0YXRpYyBmaWxlcyBsaWtlIGAuZ2l0YXR0cmlidXRlc2AgYW5kIGAuZ2l0aWdub3JlYC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgZmlsZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBkeW5hbWljRmlsZVBhdGhzOiBzdHJpbmdbXSA9IHRoaXMuY29uZmlnc1xuICAgICAgLm1hcCgoY29uZmlnOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4pOiBzdHJpbmcgPT4gYC8ke09iamVjdC5rZXlzKGNvbmZpZylbMF19YClcbiAgICAgIC5maWx0ZXIoKGZpbGVQYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4gZmlsZVBhdGgpO1xuICAgIGNvbnN0IHN0YXRpY0ZpbGVQYXRoczogc3RyaW5nW10gPSBbJy8uZ2l0YXR0cmlidXRlcycsICcvLmdpdGlnbm9yZSddO1xuXG4gICAgcmV0dXJuIFsuLi5keW5hbWljRmlsZVBhdGhzLCAuLi5zdGF0aWNGaWxlUGF0aHNdO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsSWdub3JlUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHBhdHRlcm5zOiBzdHJpbmdbXSA9IFsuLi50aGlzLmZpbGVQYXR0ZXJucywgJy9DSEFOR0VMT0cubWQnXTtcblxuICAgIHJldHVybiBwYXR0ZXJucztcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbEF0dHJpYnV0ZXNQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFsnQ0hBTkdFTE9HLm1kJ107XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcmVnaXN0ZXJDb25maWcoKTogdm9pZCB7XG4gICAgaWYgKHV0aWwuaXNWYWxpZFByb2plY3QodGhpcy5wcm9qZWN0KSkge1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLnByZXR0aWVyQ29uZmlnPy5hZGRJZ25vcmVQYXR0ZXJucyh0aGlzLmFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucyk7XG4gICAgfVxuICAgIHRoaXMuYWRkQXR0cmlidXRlUGF0dGVybnModGhpcy5hZGRpdGlvbmFsQXR0cmlidXRlc1BhdHRlcm5zKTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBhcHBseUNvbmZpZygpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZVRlbXBsYXRlRmlsZSh0aGlzLmNvbmZpZ0ZpbGVQdWxsUmVxdWVzdCk7XG4gICAgLy8gdGhpcy5jcmVhdGVUZW1wbGF0ZUZpbGUodGhpcy5jb25maWdGaWxlQnVnSXNzdWUpO1xuICAgIC8vIHRoaXMuY3JlYXRlVGVtcGxhdGVGaWxlKHRoaXMuY29uZmlnRmlsZUZlYXR1cmVJc3N1ZSk7XG4gICAgLy8gdGhpcy5jcmVhdGVUZW1wbGF0ZUZpbGUodGhpcy5jb25maWdGaWxlSG91c2VrZWVwaW5nSXNzdWUpO1xuICAgIC8vIHRoaXMuY3JlYXRlVGVtcGxhdGVGaWxlKHRoaXMuY29uZmlnRmlsZVF1ZXN0aW9uSXNzdWUpO1xuICAgIHRoaXMuY3JlYXRlVGVtcGxhdGVGaWxlKHRoaXMuY29uZmlnRmlsZUNsaWZmKTtcbiAgICB0aGlzLmNyZWF0ZVRlbXBsYXRlRmlsZSh0aGlzLmNvbmZpZ0ZpbGVSZWxlYXNlV29ya2Zsb3cpO1xuICAgIHRoaXMuY3JlYXRlVGVtcGxhdGVGaWxlKHRoaXMuY29uZmlnRmlsZUVuZm9yY2VMYWJlbHNXb3JrZmxvdyk7XG5cbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHRoaXMuYXR0cmlidXRlUGF0dGVybnMpIHtcbiAgICAgIHRoaXMucHJvamVjdC5naXRhdHRyaWJ1dGVzLmFkZEF0dHJpYnV0ZXMoYC8ke3ZhbHVlfWAsICdsaW5ndWlzdC1nZW5lcmF0ZWQnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
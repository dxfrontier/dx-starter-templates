"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubConfigBase = void 0;
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
    /**
     * Retrieves the configuration for the bug issue template file.
     *
     * @returns A record where the key is the file path and the value is an array of strings
     *          representing the content of the issue template.
     */
    get configFileBugIssue() {
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
    get configFileFeatureIssue() {
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
    get configFileHousekeepingIssue() {
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
    get configFileQuestionIssue() {
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
                '            {{ commit.message | upper_first }}',
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
                '  { message = "^chore\\(release\\): prepare for", skip = true },',
                '  { message = "^chore\\(deps.*\\)", skip = true },',
                '  { message = "^chore\\(pr\\)", skip = true },',
                '  { message = "^chore\\(pull\\)", skip = true },',
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
            this.configFileBugIssue,
            this.configFileFeatureIssue,
            this.configFileHousekeepingIssue,
            this.configFileQuestionIssue,
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
        this.createTemplateFile(this.configFileBugIssue);
        this.createTemplateFile(this.configFileFeatureIssue);
        this.createTemplateFile(this.configFileHousekeepingIssue);
        this.createTemplateFile(this.configFileQuestionIssue);
        this.createTemplateFile(this.configFileCliff);
        this.createTemplateFile(this.configFileReleaseWorkflow);
        this.createTemplateFile(this.configFileEnforceLabelsWorkflow);
        for (const value of this.attributePatterns) {
            this.project.gitattributes.addAttributes(`/${value}`, 'linguist-generated');
        }
    }
}
exports.GitHubConfigBase = GitHubConfigBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Jhc2UvY29uZmlnL2dpdGh1Yi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBa0M7QUFDbEMsc0NBQW1DO0FBRW5DLDRDQUF3QztBQUV4Qzs7OztHQUlHO0FBQ0gsTUFBYSxnQkFBaUIsU0FBUSxlQUFNO0lBRzFDLFlBQVksT0FBcUI7UUFDL0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWYsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsMEJBQTBCO1FBQ3RDLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsSUFBYyxxQkFBcUI7UUFDakMsT0FBTztZQUNMLGtDQUFrQyxFQUFFO2dCQUNsQyx3QkFBd0I7Z0JBQ3hCLEVBQUU7Z0JBQ0YsNkRBQTZEO2dCQUM3RCxFQUFFO2dCQUNGLDRCQUE0QjtnQkFDNUIsRUFBRTtnQkFDRixtREFBbUQ7Z0JBQ25ELGtDQUFrQztnQkFDbEMsbURBQW1EO2dCQUNuRCw4Q0FBOEM7Z0JBQzlDLEVBQUU7Z0JBQ0YsZUFBZTtnQkFDZixFQUFFO2dCQUNGLDRHQUE0RztnQkFDNUcsa0dBQWtHO2dCQUNsRyx5RkFBeUY7Z0JBQ3pGLGlFQUFpRTtnQkFDakUsMENBQTBDO2dCQUMxQyxFQUFFO2dCQUNGLGFBQWE7Z0JBQ2IsRUFBRTtnQkFDRiwyREFBMkQ7Z0JBQzNELHlDQUF5QzthQUMxQztTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxJQUFjLGtCQUFrQjtRQUM5QixPQUFPO1lBQ0wsZ0NBQWdDLEVBQUU7Z0JBQ2hDLGNBQWM7Z0JBQ2QsK0JBQStCO2dCQUMvQix3QkFBd0I7Z0JBQ3hCLHVCQUF1QjtnQkFDdkIsT0FBTztnQkFDUCxvQkFBb0I7Z0JBQ3BCLGlCQUFp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LElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFFOUQsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQzlFLENBQUM7SUFDSCxDQUFDO0NBQ0Y7QUEzYUQsNENBMmFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dEZpbGUgfSBmcm9tICdwcm9qZW4nO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IFByb2plY3RUeXBlcyB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMvcHJvamVjdCc7XG5pbXBvcnQgeyB1dGlsIH0gZnJvbSAnLi4vLi4vdXRpbC91dGlscyc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBHaXRIdWIgY29uZmlndXJhdGlvbi5cbiAqXG4gKiBUaGlzIGNsYXNzIGFjdHMgYXMgYSBiYXNlIGZvciBoYW5kbGluZyBHaXRIdWIgY29uZmlndXJhdGlvbiB3aXRoaW4gcHJvamVjdHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBHaXRIdWJDb25maWdCYXNlIGV4dGVuZHMgQ29uZmlnIHtcbiAgcHJvdGVjdGVkIGF0dHJpYnV0ZVBhdHRlcm5zOiBzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBQcm9qZWN0VHlwZXMpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcblxuICAgIHRoaXMuYXR0cmlidXRlUGF0dGVybnMgPSB0aGlzLnN0YW5kYXJkQXR0cmlidXRlc1BhdHRlcm5zO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHN0YW5kYXJkIGF0dHJpYnV0ZXMgcGF0dGVybnMgcmVxdWlyZWQgZm9yIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIEEgbGlzdCBvZiBhdHRyaWJ1dGVzIHBhdHRlcm5zLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzdGFuZGFyZEF0dHJpYnV0ZXNQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIHB1bGwgcmVxdWVzdCB0ZW1wbGF0ZSBmaWxlLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIHJlY29yZCB3aGVyZSB0aGUga2V5IGlzIHRoZSBmaWxlIHBhdGggYW5kIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSBvZiBzdHJpbmdzXG4gICAqICAgICAgICAgIHJlcHJlc2VudGluZyB0aGUgY29udGVudCBvZiB0aGUgaXNzdWUgdGVtcGxhdGUuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGNvbmZpZ0ZpbGVQdWxsUmVxdWVzdCgpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnLmdpdGh1Yi9wdWxsX3JlcXVlc3RfdGVtcGxhdGUubWQnOiBbXG4gICAgICAgICcjIyBSZXZpZXdlcnMgQ2hlY2tsaXN0JyxcbiAgICAgICAgJycsXG4gICAgICAgICdmb3IgY29tcGxldGUgcmV2aWV3IGxpc3QgcmVmZXIgdG8gQUJTIExvb3AgLSBSZXZpZXcgQXNwZWN0cycsXG4gICAgICAgICcnLFxuICAgICAgICAnIyMjIE9yZ2FuaXphdGlvbmFsIFNlY3Rpb24nLFxuICAgICAgICAnJyxcbiAgICAgICAgJy0gWyBdIFBSIGlzIGFzc2lnbmVkIHRvIHRoZSBhY2NvcmRpbmcgZmVhdHVyZS9idWcnLFxuICAgICAgICAnLSBbIF0gRmVhdHVyZS9idWcgaXMgZGVzY3JpcHRpdmUnLFxuICAgICAgICAnLSBbIF0gRmVhdHVyZS9idWcgaXMgYXNzaWduZWQgdG8gYWNjb3JkaW5nIGxhYmVscycsXG4gICAgICAgICctIFsgXSBGZWF0dXJlL2J1ZyBpcyBhc3NpZ25lZCB0byBhIGRldmVsb3BlcicsXG4gICAgICAgICcnLFxuICAgICAgICAnIyMjIFN0cnVjdHVyZScsXG4gICAgICAgICcnLFxuICAgICAgICAnLSBbIF0gUmVhZGFiaWxpdHk6IENvZGUgaXMgZWFzeSB0byB1bmRlcnN0YW5kLCB3aXRoIG1lYW5pbmdmdWwgbmFtZXMgZm9yIHZhcmlhYmxlcywgZnVuY3Rpb25zLCBhbmQgY2xhc3NlcycsXG4gICAgICAgICctIFsgXSBDb21tZW50czogTWVhbmluZ2Z1bCBhbmQgaGVscGZ1bCBjb21tZW50cy4gQ29kZSBpcyBkb2N1bWVudGVkIHdpdGhvdXQgYmVpbmcgb3Zlci1jb21tZW50ZWQnLFxuICAgICAgICAnLSBbIF0gRFJZLCBLSVNTIGFuZCBZQUdOSTogQ29kZSBpbXBsZW1lbnRzIG9ubHkgbmVjZXNzYXJ5IGZlYXR1cmVzOyBubyBvdmVyLWVuZ2luZWVyaW5nJyxcbiAgICAgICAgJy0gWyBdIE5vIHNlbnNpdGl2ZSBkYXRhIChlLmcuLCBwYXNzd29yZHMsIEFQSSBrZXlzKSBpbiB0aGUgY29kZScsXG4gICAgICAgICctIFsgXSBObyBtYWpvciB1cGRhdGVzIGZvciB1c2VkIHBhY2thZ2VzJyxcbiAgICAgICAgJycsXG4gICAgICAgICcjIyMgVGVzdGluZycsXG4gICAgICAgICcnLFxuICAgICAgICAnLSBbIF0gQ29kZSBpcyBsb2NhbGx5IHRlc3RlZCBieSBkZXZlbG9wZXIgKGlmIGFwcGxpY2FibGUpJyxcbiAgICAgICAgJy0gWyBdIEF1dG9tYXRlZCB0ZXN0cyBwYXNzIHN1Y2Nlc3NmdWxseScsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUgYnVnIGlzc3VlIHRlbXBsYXRlIGZpbGUuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgcmVjb3JkIHdoZXJlIHRoZSBrZXkgaXMgdGhlIGZpbGUgcGF0aCBhbmQgdGhlIHZhbHVlIGlzIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAgICogICAgICAgICAgcmVwcmVzZW50aW5nIHRoZSBjb250ZW50IG9mIHRoZSBpc3N1ZSB0ZW1wbGF0ZS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZUJ1Z0lzc3VlKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuZ2l0aHViL0lTU1VFX1RFTVBMQVRFL2J1Zy55bWwnOiBbXG4gICAgICAgICduYW1lOiDwn5CeIEJ1ZycsXG4gICAgICAgICdkZXNjcmlwdGlvbjogRmlsZSBhIGJ1Zy9pc3N1ZScsXG4gICAgICAgICd0aXRsZTogXCJbQlVHXSA8dGl0bGU+XCInLFxuICAgICAgICAnbGFiZWxzOiBbXCJ0eXBlOiBidWdcIl0nLFxuICAgICAgICAnYm9keTonLFxuICAgICAgICAnICAtIHR5cGU6IHRleHRhcmVhJyxcbiAgICAgICAgJyAgICBhdHRyaWJ1dGVzOicsXG4gICAgICAgICcgICAgICBsYWJlbDogQ3VycmVudCBiZWhhdmlvcicsXG4gICAgICAgIFwiICAgICAgZGVzY3JpcHRpb246IEEgZGVzY3JpcHRpb24gb2Ygd2hhdCB5b3UncmUgZXhwZXJpZW5jaW5nLlwiLFxuICAgICAgICAnICAgIHZhbGlkYXRpb25zOicsXG4gICAgICAgICcgICAgICByZXF1aXJlZDogdHJ1ZScsXG4gICAgICAgICcnLFxuICAgICAgICAnICAtIHR5cGU6IHRleHRhcmVhJyxcbiAgICAgICAgJyAgICBhdHRyaWJ1dGVzOicsXG4gICAgICAgICcgICAgICBsYWJlbDogRXhwZWN0ZWQgYmVoYXZpb3InLFxuICAgICAgICAnICAgICAgZGVzY3JpcHRpb246IEEgZGVzY3JpcHRpb24gb2Ygd2hhdCB5b3UgZXhwZWN0ZWQgdG8gaGFwcGVuLicsXG4gICAgICAgICcgICAgdmFsaWRhdGlvbnM6JyxcbiAgICAgICAgJyAgICAgIHJlcXVpcmVkOiB0cnVlJyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBmZWF0dXJlIHJlcXVlc3QgdGVtcGxhdGUgZmlsZS5cbiAgICpcbiAgICogQHJldHVybnMgQSByZWNvcmQgd2hlcmUgdGhlIGtleSBpcyB0aGUgZmlsZSBwYXRoIGFuZCB0aGUgdmFsdWUgaXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgKiAgICAgICAgICByZXByZXNlbnRpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIGlzc3VlIHRlbXBsYXRlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBjb25maWdGaWxlRmVhdHVyZUlzc3VlKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuZ2l0aHViL0lTU1VFX1RFTVBMQVRFL2ZlYXR1cmUueW1sJzogW1xuICAgICAgICAnbmFtZTog8J+SoSBGZWF0dXJlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uOiBSZXF1ZXN0IGZvciBhIG5ldyBmZWF0dXJlJyxcbiAgICAgICAgJ3RpdGxlOiBcIltGRUFUVVJFXSA8dGl0bGU+XCInLFxuICAgICAgICAnbGFiZWxzOiBbXCJ0eXBlOiBmZWF0dXJlXCJdJyxcbiAgICAgICAgJ2JvZHk6JyxcbiAgICAgICAgJyAgLSB0eXBlOiB0ZXh0YXJlYScsXG4gICAgICAgICcgICAgYXR0cmlidXRlczonLFxuICAgICAgICAnICAgICAgbGFiZWw6IERlc2NyaXB0aW9uJyxcbiAgICAgICAgJyAgICAgIGRlc2NyaXB0aW9uOiBBIGRlc2NyaXB0aW9uIG9mIHRoZSBmZWF0dXJlLicsXG4gICAgICAgICcgICAgdmFsaWRhdGlvbnM6JyxcbiAgICAgICAgJyAgICAgIHJlcXVpcmVkOiB0cnVlJyxcbiAgICAgICAgJycsXG4gICAgICAgICcgIC0gdHlwZTogdGV4dGFyZWEnLFxuICAgICAgICAnICAgIGF0dHJpYnV0ZXM6JyxcbiAgICAgICAgJyAgICAgIGxhYmVsOiBUYXNrIExpc3QnLFxuICAgICAgICAnICAgICAgZGVzY3JpcHRpb246IERlc2NyaWJlIHRoZSBzdGVwcyB0byBmdWxmaWxsIHRoZSBmZWF0dXJlLicsXG4gICAgICAgICcgICAgICB2YWx1ZTogfCcsXG4gICAgICAgICcgICAgICAgIC0gWyBdIE15IEZpcnN0IFRhc2snLFxuICAgICAgICAnICAgIHZhbGlkYXRpb25zOicsXG4gICAgICAgICcgICAgICByZXF1aXJlZDogdHJ1ZScsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUgaG91c2VrZWVwaW5nIGlzc3VlIHRlbXBsYXRlIGZpbGUuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgcmVjb3JkIHdoZXJlIHRoZSBrZXkgaXMgdGhlIGZpbGUgcGF0aCBhbmQgdGhlIHZhbHVlIGlzIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAgICogICAgICAgICAgcmVwcmVzZW50aW5nIHRoZSBjb250ZW50IG9mIHRoZSBpc3N1ZSB0ZW1wbGF0ZS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZUhvdXNla2VlcGluZ0lzc3VlKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuZ2l0aHViL0lTU1VFX1RFTVBMQVRFL2hvdXNla2VlcGluZy55bWwnOiBbXG4gICAgICAgICduYW1lOiDwn5KhIEhvdXNla2VlcGluZycsXG4gICAgICAgICdkZXNjcmlwdGlvbjogTWFpbnRlbmFuY2Ugb3IgcmVmYWN0b3JpbmcgdGFzaycsXG4gICAgICAgICd0aXRsZTogXCJbSE9VU0VLRUVQSU5HXSA8dGl0bGU+XCInLFxuICAgICAgICAnbGFiZWxzOiBbXCJ0eXBlOiBob3VzZWtlZXBpbmdcIl0nLFxuICAgICAgICAnYm9keTonLFxuICAgICAgICAnICAtIHR5cGU6IHRleHRhcmVhJyxcbiAgICAgICAgJyAgICBhdHRyaWJ1dGVzOicsXG4gICAgICAgICcgICAgICBsYWJlbDogRGVzY3JpcHRpb24nLFxuICAgICAgICAnICAgICAgZGVzY3JpcHRpb246IEEgZGVzY3JpcHRpb24gb2YgdGhlIGhvdXNla2VlcGluZyB0YXNrLicsXG4gICAgICAgICcgICAgdmFsaWRhdGlvbnM6JyxcbiAgICAgICAgJyAgICAgIHJlcXVpcmVkOiB0cnVlJyxcbiAgICAgICAgJycsXG4gICAgICAgICcgIC0gdHlwZTogdGV4dGFyZWEnLFxuICAgICAgICAnICAgIGF0dHJpYnV0ZXM6JyxcbiAgICAgICAgJyAgICAgIGxhYmVsOiBUYXNrIExpc3QnLFxuICAgICAgICAnICAgICAgZGVzY3JpcHRpb246IERlc2NyaWJlIHRoZSBzdGVwcyB0byBmdWxmaWxsIHRoZSBob3VzZWtlZXBpbmcgdGFzay4nLFxuICAgICAgICAnICAgICAgdmFsdWU6IHwnLFxuICAgICAgICAnICAgICAgICAtIFsgXSBNeSBGaXJzdCBUYXNrJyxcbiAgICAgICAgJyAgICB2YWxpZGF0aW9uczonLFxuICAgICAgICAnICAgICAgcmVxdWlyZWQ6IHRydWUnLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIHF1ZXN0aW9uIGlzc3VlIHRlbXBsYXRlIGZpbGUuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgcmVjb3JkIHdoZXJlIHRoZSBrZXkgaXMgdGhlIGZpbGUgcGF0aCBhbmQgdGhlIHZhbHVlIGlzIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAgICogICAgICAgICAgcmVwcmVzZW50aW5nIHRoZSBjb250ZW50IG9mIHRoZSBpc3N1ZSB0ZW1wbGF0ZS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZVF1ZXN0aW9uSXNzdWUoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5naXRodWIvSVNTVUVfVEVNUExBVEUvcXVlc3Rpb24ueW1sJzogW1xuICAgICAgICAnbmFtZTog4p2TIFF1ZXN0aW9uJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uOiBBc2sgYSBxdWVzdGlvbicsXG4gICAgICAgICd0aXRsZTogXCJbUVVFU1RJT05dIDx0aXRsZT5cIicsXG4gICAgICAgICdsYWJlbHM6IFtcInR5cGU6IHF1ZXN0aW9uXCJdJyxcbiAgICAgICAgJ2JvZHk6JyxcbiAgICAgICAgJyAgLSB0eXBlOiB0ZXh0YXJlYScsXG4gICAgICAgICcgICAgYXR0cmlidXRlczonLFxuICAgICAgICAnICAgICAgbGFiZWw6IFF1ZXN0aW9uJyxcbiAgICAgICAgJyAgICAgIGRlc2NyaXB0aW9uOiBXaGF0IHdvdWxkIHlvdSBsaWtlIHRvIGtub3c/IElmIHlvdSBlbmNvdW50ZXIgdW51c3VhbCBiZWhhdmlvciBvciBpZGVudGlmaWVkIGEgbWlzc2luZyBmZWF0dXJlLCBjb25zaWRlciBvcGVuaW5nIGEgYnVnIHJlcG9ydCBpbnN0ZWFkLicsXG4gICAgICAgICcgICAgdmFsaWRhdGlvbnM6JyxcbiAgICAgICAgJyAgICAgIHJlcXVpcmVkOiB0cnVlJyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBnaXQgY2xpZmYgdGVtcGxhdGUgZmlsZS5cbiAgICpcbiAgICogQHJldHVybnMgQSByZWNvcmQgd2hlcmUgdGhlIGtleSBpcyB0aGUgZmlsZSBwYXRoIGFuZCB0aGUgdmFsdWUgaXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgKiAgICAgICAgICByZXByZXNlbnRpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIGlzc3VlIHRlbXBsYXRlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBjb25maWdGaWxlQ2xpZmYoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2NsaWZmLnRvbWwnOiBbXG4gICAgICAgICcjIGdpdC1jbGlmZiB+IGRlZmF1bHQgY29uZmlndXJhdGlvbiBmaWxlJyxcbiAgICAgICAgJyMgaHR0cHM6Ly9naXQtY2xpZmYub3JnL2RvY3MvY29uZmlndXJhdGlvbicsXG4gICAgICAgICcjJyxcbiAgICAgICAgJyMgTGluZXMgc3RhcnRpbmcgd2l0aCBcIiNcIiBhcmUgY29tbWVudHMuJyxcbiAgICAgICAgJyMgQ29uZmlndXJhdGlvbiBvcHRpb25zIGFyZSBvcmdhbml6ZWQgaW50byB0YWJsZXMgYW5kIGtleXMuJyxcbiAgICAgICAgJyMgU2VlIGRvY3VtZW50YXRpb24gZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gYXZhaWxhYmxlIG9wdGlvbnMuJyxcbiAgICAgICAgJycsXG4gICAgICAgICdbY2hhbmdlbG9nXScsXG4gICAgICAgICcjIGNoYW5nZWxvZyBoZWFkZXInLFxuICAgICAgICAnaGVhZGVyID0gXCJcIlwiJyxcbiAgICAgICAgJyMgQ2hhbmdlbG9nXFxcXG4nLFxuICAgICAgICAnQWxsIG5vdGFibGUgY2hhbmdlcyB0byB0aGlzIHByb2plY3Qgd2lsbCBiZSBkb2N1bWVudGVkIGluIHRoaXMgZmlsZS5cXFxcbicsXG4gICAgICAgICdcIlwiXCInLFxuICAgICAgICAnIyB0ZW1wbGF0ZSBmb3IgdGhlIGNoYW5nZWxvZyBib2R5JyxcbiAgICAgICAgJyMgaHR0cHM6Ly9rZWF0cy5naXRodWIuaW8vdGVyYS9kb2NzLyNpbnRyb2R1Y3Rpb24nLFxuICAgICAgICAnYm9keSA9IFwiXCJcIicsXG4gICAgICAgICd7JSBpZiB2ZXJzaW9uICV9XFxcXCcsXG4gICAgICAgICcgICAgIyMgW3t7IHZlcnNpb24gfCB0cmltX3N0YXJ0X21hdGNoZXMocGF0PVwidlwiKSB9fV0gLSB7eyB0aW1lc3RhbXAgfCBkYXRlKGZvcm1hdD1cIiVZLSVtLSVkXCIpIH19JyxcbiAgICAgICAgJ3slIGVsc2UgJX1cXFxcJyxcbiAgICAgICAgJyAgICAjIyBbdW5yZWxlYXNlZF0nLFxuICAgICAgICAneyUgZW5kaWYgJX1cXFxcJyxcbiAgICAgICAgJ3slIGZvciBncm91cCwgY29tbWl0cyBpbiBjb21taXRzIHwgZ3JvdXBfYnkoYXR0cmlidXRlPVwiZ3JvdXBcIikgJX0nLFxuICAgICAgICAnICAgICMjIyB7eyBncm91cCB8IHN0cmlwdGFncyB8IHRyaW0gfCB1cHBlcl9maXJzdCB9fScsXG4gICAgICAgICcgICAgeyUgZm9yIGNvbW1pdCBpbiBjb21taXRzICV9JyxcbiAgICAgICAgJyAgICAgICAgLSB7JSBpZiBjb21taXQuc2NvcGUgJX0qKHt7IGNvbW1pdC5zY29wZSB9fSkqIHslIGVuZGlmICV9XFxcXCcsXG4gICAgICAgICcgICAgICAgICAgICB7JSBpZiBjb21taXQuYnJlYWtpbmcgJX1bKipicmVha2luZyoqXSB7JSBlbmRpZiAlfVxcXFwnLFxuICAgICAgICAnICAgICAgICAgICAge3sgY29tbWl0Lm1lc3NhZ2UgfCB1cHBlcl9maXJzdCB9fScsXG4gICAgICAgICcgICAgeyUgZW5kZm9yICV9JyxcbiAgICAgICAgJ3slIGVuZGZvciAlfVxcXFxuJyxcbiAgICAgICAgJ1wiXCJcIicsXG4gICAgICAgICcjIHRlbXBsYXRlIGZvciB0aGUgY2hhbmdlbG9nIGZvb3RlcicsXG4gICAgICAgICdmb290ZXIgPSBcIlwiXCInLFxuICAgICAgICAnPCEtLSBnZW5lcmF0ZWQgYnkgZ2l0LWNsaWZmIC0tPicsXG4gICAgICAgICdcIlwiXCInLFxuICAgICAgICAnIyByZW1vdmUgdGhlIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHMnLFxuICAgICAgICAndHJpbSA9IHRydWUnLFxuICAgICAgICAnIyBwb3N0cHJvY2Vzc29ycycsXG4gICAgICAgICdwb3N0cHJvY2Vzc29ycyA9IFsnLFxuICAgICAgICAnICAjIHsgcGF0dGVybiA9IFwiPFJFUE8+XCIsIHJlcGxhY2UgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9vcmh1bi9naXQtY2xpZmZcIiB9LCAjIHJlcGxhY2UgcmVwb3NpdG9yeSBVUkwnLFxuICAgICAgICAnXScsXG4gICAgICAgICcnLFxuICAgICAgICAnW2dpdF0nLFxuICAgICAgICAnIyBwYXJzZSB0aGUgY29tbWl0cyBiYXNlZCBvbiBodHRwczovL3d3dy5jb252ZW50aW9uYWxjb21taXRzLm9yZycsXG4gICAgICAgICdjb252ZW50aW9uYWxfY29tbWl0cyA9IHRydWUnLFxuICAgICAgICAnIyBmaWx0ZXIgb3V0IHRoZSBjb21taXRzIHRoYXQgYXJlIG5vdCBjb252ZW50aW9uYWwnLFxuICAgICAgICAnZmlsdGVyX3VuY29udmVudGlvbmFsID0gdHJ1ZScsXG4gICAgICAgICcjIHByb2Nlc3MgZWFjaCBsaW5lIG9mIGEgY29tbWl0IGFzIGFuIGluZGl2aWR1YWwgY29tbWl0JyxcbiAgICAgICAgJ3NwbGl0X2NvbW1pdHMgPSBmYWxzZScsXG4gICAgICAgICcjIHJlZ2V4IGZvciBwcmVwcm9jZXNzaW5nIHRoZSBjb21taXQgbWVzc2FnZXMnLFxuICAgICAgICAnY29tbWl0X3ByZXByb2Nlc3NvcnMgPSBbJyxcbiAgICAgICAgJyAgIyBSZXBsYWNlIGlzc3VlIG51bWJlcnMnLFxuICAgICAgICAnICAjeyBwYXR0ZXJuID0gXCJcXFxcKChcXFxcdytcXFxccyk/IyhbMC05XSspXFxcXClcIiwgcmVwbGFjZSA9IFwiKFsjJHsyfV0oPFJFUE8+L2lzc3Vlcy8kezJ9KSlcIn0sJyxcbiAgICAgICAgJyAgIyBDaGVjayBzcGVsbGluZyBvZiB0aGUgY29tbWl0IHdpdGggaHR0cHM6Ly9naXRodWIuY29tL2NyYXRlLWNpL3R5cG9zJyxcbiAgICAgICAgJyAgIyBJZiB0aGUgc3BlbGxpbmcgaXMgaW5jb3JyZWN0LCBpdCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZml4ZWQuJyxcbiAgICAgICAgJyAgI3sgcGF0dGVybiA9IFwiLipcIiwgcmVwbGFjZV9jb21tYW5kID0gXCJ0eXBvcyAtLXdyaXRlLWNoYW5nZXMgLVwiIH0sJyxcbiAgICAgICAgJ10nLFxuICAgICAgICAnIyByZWdleCBmb3IgcGFyc2luZyBhbmQgZ3JvdXBpbmcgY29tbWl0cycsXG4gICAgICAgICdjb21taXRfcGFyc2VycyA9IFsnLFxuICAgICAgICAnICB7IG1lc3NhZ2UgPSBcIl5mZWF0XCIsIGdyb3VwID0gXCI8IS0tIDAgLS0+8J+agCBGZWF0dXJlc1wiIH0sJyxcbiAgICAgICAgJyAgeyBtZXNzYWdlID0gXCJeZml4XCIsIGdyb3VwID0gXCI8IS0tIDEgLS0+8J+QmyBCdWcgRml4ZXNcIiB9LCcsXG4gICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXmRvY1wiLCBncm91cCA9IFwiPCEtLSAzIC0tPvCfk5ogRG9jdW1lbnRhdGlvblwiIH0sJyxcbiAgICAgICAgJyAgeyBtZXNzYWdlID0gXCJecGVyZlwiLCBncm91cCA9IFwiPCEtLSA0IC0tPuKaoSBQZXJmb3JtYW5jZVwiIH0sJyxcbiAgICAgICAgJyAgeyBtZXNzYWdlID0gXCJecmVmYWN0b3JcIiwgZ3JvdXAgPSBcIjwhLS0gMiAtLT7wn5qcIFJlZmFjdG9yXCIgfSwnLFxuICAgICAgICAnICB7IG1lc3NhZ2UgPSBcIl5zdHlsZVwiLCBncm91cCA9IFwiPCEtLSA1IC0tPvCfjqggU3R5bGluZ1wiIH0sJyxcbiAgICAgICAgJyAgeyBtZXNzYWdlID0gXCJedGVzdFwiLCBncm91cCA9IFwiPCEtLSA2IC0tPvCfp6ogVGVzdGluZ1wiIH0sJyxcbiAgICAgICAgJyAgeyBtZXNzYWdlID0gXCJeY2hvcmVcXFxcKHJlbGVhc2VcXFxcKTogcHJlcGFyZSBmb3JcIiwgc2tpcCA9IHRydWUgfSwnLFxuICAgICAgICAnICB7IG1lc3NhZ2UgPSBcIl5jaG9yZVxcXFwoZGVwcy4qXFxcXClcIiwgc2tpcCA9IHRydWUgfSwnLFxuICAgICAgICAnICB7IG1lc3NhZ2UgPSBcIl5jaG9yZVxcXFwocHJcXFxcKVwiLCBza2lwID0gdHJ1ZSB9LCcsXG4gICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXmNob3JlXFxcXChwdWxsXFxcXClcIiwgc2tpcCA9IHRydWUgfSwnLFxuICAgICAgICAnICB7IG1lc3NhZ2UgPSBcIl5jaG9yZXxeY2lcIiwgZ3JvdXAgPSBcIjwhLS0gNyAtLT7impnvuI8gTWlzY2VsbGFuZW91cyBUYXNrc1wiIH0sJyxcbiAgICAgICAgJyAgeyBib2R5ID0gXCIuKnNlY3VyaXR5XCIsIGdyb3VwID0gXCI8IS0tIDggLS0+8J+boe+4jyBTZWN1cml0eVwiIH0sJyxcbiAgICAgICAgJyAgeyBtZXNzYWdlID0gXCJecmV2ZXJ0XCIsIGdyb3VwID0gXCI8IS0tIDkgLS0+4peA77iPIFJldmVydFwiIH0sJyxcbiAgICAgICAgJ10nLFxuICAgICAgICAnIyBwcm90ZWN0IGJyZWFraW5nIGNoYW5nZXMgZnJvbSBiZWluZyBza2lwcGVkIGR1ZSB0byBtYXRjaGluZyBhIHNraXBwaW5nIGNvbW1pdF9wYXJzZXInLFxuICAgICAgICAncHJvdGVjdF9icmVha2luZ19jb21taXRzID0gZmFsc2UnLFxuICAgICAgICAnIyBmaWx0ZXIgb3V0IHRoZSBjb21taXRzIHRoYXQgYXJlIG5vdCBtYXRjaGVkIGJ5IGNvbW1pdCBwYXJzZXJzJyxcbiAgICAgICAgJ2ZpbHRlcl9jb21taXRzID0gZmFsc2UnLFxuICAgICAgICAnIyByZWdleCBmb3IgbWF0Y2hpbmcgZ2l0IHRhZ3MnLFxuICAgICAgICAnIyB0YWdfcGF0dGVybiA9IFwidlswLTldLipcIicsXG4gICAgICAgICcjIHJlZ2V4IGZvciBza2lwcGluZyB0YWdzJyxcbiAgICAgICAgJyMgc2tpcF90YWdzID0gXCJcIicsXG4gICAgICAgICcjIHJlZ2V4IGZvciBpZ25vcmluZyB0YWdzJyxcbiAgICAgICAgJyMgaWdub3JlX3RhZ3MgPSBcIlwiJyxcbiAgICAgICAgJyMgc29ydCB0aGUgdGFncyB0b3BvbG9naWNhbGx5JyxcbiAgICAgICAgJ3RvcG9fb3JkZXIgPSBmYWxzZScsXG4gICAgICAgICcjIHNvcnQgdGhlIGNvbW1pdHMgaW5zaWRlIHNlY3Rpb25zIGJ5IG9sZGVzdC9uZXdlc3Qgb3JkZXInLFxuICAgICAgICAnc29ydF9jb21taXRzID0gXCJvbGRlc3RcIicsXG4gICAgICAgICcjIGxpbWl0IHRoZSBudW1iZXIgb2YgY29tbWl0cyBpbmNsdWRlZCBpbiB0aGUgY2hhbmdlbG9nLicsXG4gICAgICAgICcjIGxpbWl0X2NvbW1pdHMgPSA0MicsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUgcmVsZWFzZSB3b3JrZmxvdyB0ZW1wbGF0ZSBmaWxlLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIHJlY29yZCB3aGVyZSB0aGUga2V5IGlzIHRoZSBmaWxlIHBhdGggYW5kIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSBvZiBzdHJpbmdzXG4gICAqICAgICAgICAgIHJlcHJlc2VudGluZyB0aGUgY29udGVudCBvZiB0aGUgaXNzdWUgdGVtcGxhdGUuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGNvbmZpZ0ZpbGVSZWxlYXNlV29ya2Zsb3coKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5naXRodWIvd29ya2Zsb3dzL3JlbGVhc2UueW1sJzogW1xuICAgICAgICAnbmFtZTogUmVsZWFzZScsXG4gICAgICAgICdvbjonLFxuICAgICAgICAnICBwdWxsX3JlcXVlc3Q6JyxcbiAgICAgICAgJyAgICBicmFuY2hlczonLFxuICAgICAgICAnICAgICAgLSBtYWluJyxcbiAgICAgICAgJyAgICB0eXBlczonLFxuICAgICAgICAnICAgICAgLSBjbG9zZWQnLFxuICAgICAgICAnam9iczonLFxuICAgICAgICAnICByZWxlYXNlOicsXG4gICAgICAgICcgICAgcnVucy1vbjogdWJ1bnR1LWxhdGVzdCcsXG4gICAgICAgICcgICAgcGVybWlzc2lvbnM6JyxcbiAgICAgICAgJyAgICAgIGNvbnRlbnRzOiB3cml0ZScsXG4gICAgICAgICcgICAgICBwdWxsLXJlcXVlc3RzOiB3cml0ZScsXG4gICAgICAgICcgICAgc3RlcHM6JyxcbiAgICAgICAgJyAgICAgIC0gbmFtZTogQ3JlYXRlIHJlbGVhc2UnLFxuICAgICAgICAnICAgICAgICB1c2VzOiBkeGZyb250aWVyL2doLWFjdGlvbi1yZWxlYXNlQG1haW4nLFxuICAgICAgICAnICAgICAgICB3aXRoOicsXG4gICAgICAgICcgICAgICAgICAgR0lUSFVCX1RPS0VOOiAke3sgc2VjcmV0cy5HSVRIVUJfVE9LRU4gfX0nLFxuICAgICAgICAnICAgICAgICAgIEJSQU5DSDogbWFpbicsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUgZW5mb3JjZSBsYWJlbHMgd29ya2Zsb3cgdGVtcGxhdGUgZmlsZS5cbiAgICpcbiAgICogQHJldHVybnMgQSByZWNvcmQgd2hlcmUgdGhlIGtleSBpcyB0aGUgZmlsZSBwYXRoIGFuZCB0aGUgdmFsdWUgaXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgKiAgICAgICAgICByZXByZXNlbnRpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIHdvcmtmbG93IHRlbXBsYXRlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBjb25maWdGaWxlRW5mb3JjZUxhYmVsc1dvcmtmbG93KCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuZ2l0aHViL3dvcmtmbG93cy9lbmZvcmNlLWxhYmVscy55bWwnOiBbXG4gICAgICAgICduYW1lOiBFbmZvcmNlIGxhYmVscycsXG4gICAgICAgICcnLFxuICAgICAgICAnb246JyxcbiAgICAgICAgJyAgcHVsbF9yZXF1ZXN0OicsXG4gICAgICAgICcgICAgdHlwZXM6IFtvcGVuZWQsIGxhYmVsZWRdJyxcbiAgICAgICAgJycsXG4gICAgICAgICdwZXJtaXNzaW9uczonLFxuICAgICAgICAnICBjb250ZW50czogd3JpdGUnLFxuICAgICAgICAnICBwdWxsLXJlcXVlc3RzOiByZWFkJyxcbiAgICAgICAgJycsXG4gICAgICAgICdqb2JzOicsXG4gICAgICAgICcgIGVuZm9yY2UtbGFiZWwtdmVyc2lvbi1yZWxlYXNlOicsXG4gICAgICAgIFwiICAgIG5hbWU6ICdFbmZvcmNlIExhYmVsczogdmVyc2lvbjogcGF0Y2gsIHZlcnNpb246IG1pbm9yLCB2ZXJzaW9uOiBtYWpvciwgbm9fcmVsZWFzZSdcIixcbiAgICAgICAgJyAgICBydW5zLW9uOiB1YnVudHUtbGF0ZXN0JyxcbiAgICAgICAgJyAgICBzdGVwczonLFxuICAgICAgICAnICAgICAgLSBuYW1lOiBDaGVjayBvdXQgY29kZScsXG4gICAgICAgICcgICAgICAgIHVzZXM6IGFjdGlvbnMvY2hlY2tvdXRAdjQnLFxuICAgICAgICAnICAgICAgLSBuYW1lOiBFbmZvcmNlIHZlcnNpb24gcmVsZWFzZSBsYWJlbHMnLFxuICAgICAgICAnICAgICAgICB1c2VzOiB5b2dldmJkL2VuZm9yY2UtbGFiZWwtYWN0aW9uQDIuMi4yJyxcbiAgICAgICAgJyAgICAgICAgd2l0aDonLFxuICAgICAgICBcIiAgICAgICAgICBSRVFVSVJFRF9MQUJFTFNfQU5ZOiAndmVyc2lvbjogcGF0Y2gsdmVyc2lvbjogbWlub3IsdmVyc2lvbjogbWFqb3Isbm9fcmVsZWFzZSdcIixcbiAgICAgICAgXCIgICAgICAgICAgUkVRVUlSRURfTEFCRUxTX0FOWV9ERVNDUklQVElPTjogXFxcIlNlbGVjdCBhdCBsZWFzdCBvbmUgbGFiZWwgWyd2ZXJzaW9uOiBwYXRjaCcsICd2ZXJzaW9uOiBtaW5vcicsICd2ZXJzaW9uOiBtYWpvcicsICdub19yZWxlYXNlJ11cXFwiXCIsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHRlbXBsYXRlIGZpbGUgYmFzZWQgb24gdGhlIHByb3ZpZGVkIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWcgLSBUaGUgY29uZmlndXJhdGlvbiBvYmplY3QgY29udGFpbmluZyB0aGUgZmlsZSBwYXRoIGFuZCBjb250ZW50LlxuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGVUZW1wbGF0ZUZpbGUoY29uZmlnOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4pOiB2b2lkIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXMoY29uZmlnKVswXTtcbiAgICBuZXcgVGV4dEZpbGUodGhpcy5wcm9qZWN0LCBmaWxlUGF0aCwge1xuICAgICAgbGluZXM6IGNvbmZpZ1tmaWxlUGF0aF0sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBjdXN0b20gYXR0cmlidXRlcyBwYXR0ZXJucyB0byB0aGUgcHJvamVjdCdzIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBwYXR0ZXJucyAtIEFuIGFycmF5IG9mIGZpbGUgb3IgZGlyZWN0b3J5IHBhdHRlcm5zIHRvIGJlIGFkZGVkIGFzIGF0dHJpYnV0ZXMuXG4gICAqL1xuICBwdWJsaWMgYWRkQXR0cmlidXRlUGF0dGVybnMocGF0dGVybnM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgdGhpcy5hdHRyaWJ1dGVQYXR0ZXJucyA9IFsuLi50aGlzLmF0dHJpYnV0ZVBhdHRlcm5zLCAuLi5wYXR0ZXJuc107XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIGxpc3Qgb2YgYWxsIHJlbGV2YW50IGNvbmZpZyBmaWxlcy5cbiAgICogQHJldHVybnMgTGlzdCBvZiBjb25maWdzXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGNvbmZpZ3MoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+W10ge1xuICAgIHJldHVybiBbXG4gICAgICB0aGlzLmNvbmZpZ0ZpbGVQdWxsUmVxdWVzdCxcbiAgICAgIHRoaXMuY29uZmlnRmlsZUJ1Z0lzc3VlLFxuICAgICAgdGhpcy5jb25maWdGaWxlRmVhdHVyZUlzc3VlLFxuICAgICAgdGhpcy5jb25maWdGaWxlSG91c2VrZWVwaW5nSXNzdWUsXG4gICAgICB0aGlzLmNvbmZpZ0ZpbGVRdWVzdGlvbklzc3VlLFxuICAgICAgdGhpcy5jb25maWdGaWxlQ2xpZmYsXG4gICAgICB0aGlzLmNvbmZpZ0ZpbGVSZWxlYXNlV29ya2Zsb3csXG4gICAgICB0aGlzLmNvbmZpZ0ZpbGVFbmZvcmNlTGFiZWxzV29ya2Zsb3csXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGZpbGUgcGF0aHMgZm9yIGFsbCBkeW5hbWljIGFuZCBzdGF0aWMgY29uZmlndXJhdGlvbiBmaWxlcy5cbiAgICpcbiAgICogQHJldHVybnMgQSBsaXN0IG9mIGZpbGUgcGF0aCBwYXR0ZXJucywgaW5jbHVkaW5nIGR5bmFtaWMgY29uZmlndXJhdGlvbnMgYW5kIHN0YXRpYyBmaWxlcyBsaWtlIGAuZ2l0YXR0cmlidXRlc2AgYW5kIGAuZ2l0aWdub3JlYC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgZmlsZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBkeW5hbWljRmlsZVBhdGhzOiBzdHJpbmdbXSA9IHRoaXMuY29uZmlnc1xuICAgICAgLm1hcCgoY29uZmlnOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4pOiBzdHJpbmcgPT4gYC8ke09iamVjdC5rZXlzKGNvbmZpZylbMF19YClcbiAgICAgIC5maWx0ZXIoKGZpbGVQYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4gZmlsZVBhdGgpO1xuICAgIGNvbnN0IHN0YXRpY0ZpbGVQYXRoczogc3RyaW5nW10gPSBbJy8uZ2l0YXR0cmlidXRlcycsICcvLmdpdGlnbm9yZSddO1xuXG4gICAgcmV0dXJuIFsuLi5keW5hbWljRmlsZVBhdGhzLCAuLi5zdGF0aWNGaWxlUGF0aHNdO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsSWdub3JlUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHBhdHRlcm5zOiBzdHJpbmdbXSA9IFsuLi50aGlzLmZpbGVQYXR0ZXJucywgJy9DSEFOR0VMT0cubWQnXTtcblxuICAgIHJldHVybiBwYXR0ZXJucztcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbEF0dHJpYnV0ZXNQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFsnQ0hBTkdFTE9HLm1kJ107XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcmVnaXN0ZXJDb25maWcoKTogdm9pZCB7XG4gICAgaWYgKHV0aWwuaXNWYWxpZFByb2plY3QodGhpcy5wcm9qZWN0KSkge1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLnByZXR0aWVyQ29uZmlnPy5hZGRJZ25vcmVQYXR0ZXJucyh0aGlzLmFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucyk7XG4gICAgfVxuICAgIHRoaXMuYWRkQXR0cmlidXRlUGF0dGVybnModGhpcy5hZGRpdGlvbmFsQXR0cmlidXRlc1BhdHRlcm5zKTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBhcHBseUNvbmZpZygpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZVRlbXBsYXRlRmlsZSh0aGlzLmNvbmZpZ0ZpbGVQdWxsUmVxdWVzdCk7XG4gICAgdGhpcy5jcmVhdGVUZW1wbGF0ZUZpbGUodGhpcy5jb25maWdGaWxlQnVnSXNzdWUpO1xuICAgIHRoaXMuY3JlYXRlVGVtcGxhdGVGaWxlKHRoaXMuY29uZmlnRmlsZUZlYXR1cmVJc3N1ZSk7XG4gICAgdGhpcy5jcmVhdGVUZW1wbGF0ZUZpbGUodGhpcy5jb25maWdGaWxlSG91c2VrZWVwaW5nSXNzdWUpO1xuICAgIHRoaXMuY3JlYXRlVGVtcGxhdGVGaWxlKHRoaXMuY29uZmlnRmlsZVF1ZXN0aW9uSXNzdWUpO1xuICAgIHRoaXMuY3JlYXRlVGVtcGxhdGVGaWxlKHRoaXMuY29uZmlnRmlsZUNsaWZmKTtcbiAgICB0aGlzLmNyZWF0ZVRlbXBsYXRlRmlsZSh0aGlzLmNvbmZpZ0ZpbGVSZWxlYXNlV29ya2Zsb3cpO1xuICAgIHRoaXMuY3JlYXRlVGVtcGxhdGVGaWxlKHRoaXMuY29uZmlnRmlsZUVuZm9yY2VMYWJlbHNXb3JrZmxvdyk7XG5cbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHRoaXMuYXR0cmlidXRlUGF0dGVybnMpIHtcbiAgICAgIHRoaXMucHJvamVjdC5naXRhdHRyaWJ1dGVzLmFkZEF0dHJpYnV0ZXMoYC8ke3ZhbHVlfWAsICdsaW5ndWlzdC1nZW5lcmF0ZWQnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubConfigBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const config_1 = require("./config");
const utils_1 = require("../utils");
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
     * Creates a pull request template file.
     */
    createPullRequest() {
        const filePath = Object.keys(this.configFilePullRequest)[0];
        new projen_1.TextFile(this.project, filePath, {
            lines: this.configFilePullRequest[filePath],
        });
    }
    /**
     * Creates a bug issue template file.
     */
    createBugIssue() {
        const filePath = Object.keys(this.configFileBugIssue)[0];
        new projen_1.TextFile(this.project, filePath, {
            lines: this.configFileBugIssue[filePath],
        });
    }
    /**
     * Creates a feature request template file.
     */
    createFeatureIssue() {
        const filePath = Object.keys(this.configFileFeatureIssue)[0];
        new projen_1.TextFile(this.project, filePath, {
            lines: this.configFileFeatureIssue[filePath],
        });
    }
    /**
     * Creates a housekeeping issue template file.
     */
    createHousekeepingIssue() {
        const filePath = Object.keys(this.configFileHousekeepingIssue)[0];
        new projen_1.TextFile(this.project, filePath, {
            lines: this.configFileHousekeepingIssue[filePath],
        });
    }
    /**
     * Creates a question issue template file.
     */
    createQuestionIssue() {
        const filePath = Object.keys(this.configFileQuestionIssue)[0];
        new projen_1.TextFile(this.project, filePath, {
            lines: this.configFileQuestionIssue[filePath],
        });
    }
    /**
     * Creates a the git cliff template file.
     */
    createCliff() {
        const filePath = Object.keys(this.configFileCliff)[0];
        new projen_1.TextFile(this.project, filePath, {
            lines: this.configFileCliff[filePath],
        });
    }
    /**
     * Creates a release workflow template file.
     */
    createReleaseWorkflow() {
        const filePath = Object.keys(this.configFileReleaseWorkflow)[0];
        new projen_1.TextFile(this.project, filePath, {
            lines: this.configFileReleaseWorkflow[filePath],
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
    /**
     * Gets additional ignore patterns to be added to the project's ignore configuration.
     *
     * @returns A list of ignore patterns.
     */
    get additionalIgnorePatterns() {
        const patterns = [...this.filePatterns, '/CHANGELOG.md'];
        return patterns;
    }
    /**
     * Gets additional attributes patterns to be added to the project's ignore configuration.
     *
     * @returns A list of ignore patterns.
     */
    get additionalAttributesPatterns() {
        return ['CHANGELOG.md'];
    }
    registerConfig() {
        if ((0, utils_1.isValidProject)(this.project)) {
            this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
        }
        this.addAttributePatterns(this.additionalAttributesPatterns);
    }
    applyConfig() {
        this.createPullRequest();
        this.createBugIssue();
        this.createFeatureIssue();
        this.createHousekeepingIssue();
        this.createQuestionIssue();
        this.createCliff();
        this.createReleaseWorkflow();
        for (const value of this.attributePatterns) {
            this.project.gitattributes.addAttributes(`/${value}`, 'linguist-generated');
        }
    }
}
exports.GitHubConfigBase = GitHubConfigBase;
_a = JSII_RTTI_SYMBOL_1;
GitHubConfigBase[_a] = { fqn: "@dxfrontier/projen-template-projects.GitHubConfigBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2UvZ2l0aHViLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQWtDO0FBQ2xDLHFDQUFrQztBQUVsQyxvQ0FBMEM7QUFFMUM7Ozs7R0FJRztBQUNILE1BQWEsZ0JBQWlCLFNBQVEsZUFBTTtJQUcxQyxZQUFZLE9BQXFCO1FBQy9CLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVmLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUM7SUFDM0QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLDBCQUEwQjtRQUN0QyxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILElBQWMscUJBQXFCO1FBQ2pDLE9BQU87WUFDTCxrQ0FBa0MsRUFBRTtnQkFDbEMsd0JBQXdCO2dCQUN4QixFQUFFO2dCQUNGLDZEQUE2RDtnQkFDN0QsRUFBRTtnQkFDRiw0QkFBNEI7Z0JBQzVCLEVBQUU7Z0JBQ0YsbURBQW1EO2dCQUNuRCxrQ0FBa0M7Z0JBQ2xDLG1EQUFtRDtnQkFDbkQsOENBQThDO2dCQUM5QyxFQUFFO2dCQUNGLGVBQWU7Z0JBQ2YsRUFBRTtnQkFDRiw0R0FBNEc7Z0JBQzVHLGtHQUFrRztnQkFDbEcseUZBQXlGO2dCQUN6RixpRUFBaUU7Z0JBQ2pFLDBDQUEwQztnQkFDMUMsRUFBRTtnQkFDRixhQUFhO2dCQUNiLEVBQUU7Z0JBQ0YsMkRBQTJEO2dCQUMzRCx5Q0FBeUM7YUFDMUM7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsSUFBYyxrQkFBa0I7UUFDOUIsT0FBTztZQUNMLGdDQUFnQyxFQUFFO2dCQUNoQyxjQUFjO2dCQUNkLCtCQUErQjtnQkFDL0Isd0JBQXdCO2dCQUN4Qix1QkFBdUI7Z0JBQ3ZCLE9BQU87Z0JBQ1Asb0JBQW9CO2dCQUNwQixpQkFBaUI7Z0JBQ2pC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LENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBRTdCLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxFQUFFLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUM5RSxDQUFDO0lBQ0gsQ0FBQzs7QUFsY0gsNENBbWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dEZpbGUgfSBmcm9tICdwcm9qZW4nO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgUHJvamVjdFR5cGVzIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgaXNWYWxpZFByb2plY3QgfSBmcm9tICcuLi91dGlscyc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBHaXRIdWIgY29uZmlndXJhdGlvbi5cbiAqXG4gKiBUaGlzIGNsYXNzIGFjdHMgYXMgYSBiYXNlIGZvciBoYW5kbGluZyBHaXRIdWIgY29uZmlndXJhdGlvbiB3aXRoaW4gcHJvamVjdHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBHaXRIdWJDb25maWdCYXNlIGV4dGVuZHMgQ29uZmlnIHtcbiAgcHJvdGVjdGVkIGF0dHJpYnV0ZVBhdHRlcm5zOiBzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBQcm9qZWN0VHlwZXMpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcblxuICAgIHRoaXMuYXR0cmlidXRlUGF0dGVybnMgPSB0aGlzLnN0YW5kYXJkQXR0cmlidXRlc1BhdHRlcm5zO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHN0YW5kYXJkIGF0dHJpYnV0ZXMgcGF0dGVybnMgcmVxdWlyZWQgZm9yIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIEEgbGlzdCBvZiBhdHRyaWJ1dGVzIHBhdHRlcm5zLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzdGFuZGFyZEF0dHJpYnV0ZXNQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIHB1bGwgcmVxdWVzdCB0ZW1wbGF0ZSBmaWxlLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIHJlY29yZCB3aGVyZSB0aGUga2V5IGlzIHRoZSBmaWxlIHBhdGggYW5kIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSBvZiBzdHJpbmdzXG4gICAqICAgICAgICAgIHJlcHJlc2VudGluZyB0aGUgY29udGVudCBvZiB0aGUgaXNzdWUgdGVtcGxhdGUuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGNvbmZpZ0ZpbGVQdWxsUmVxdWVzdCgpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnLmdpdGh1Yi9wdWxsX3JlcXVlc3RfdGVtcGxhdGUubWQnOiBbXG4gICAgICAgICcjIyBSZXZpZXdlcnMgQ2hlY2tsaXN0JyxcbiAgICAgICAgJycsXG4gICAgICAgICdmb3IgY29tcGxldGUgcmV2aWV3IGxpc3QgcmVmZXIgdG8gQUJTIExvb3AgLSBSZXZpZXcgQXNwZWN0cycsXG4gICAgICAgICcnLFxuICAgICAgICAnIyMjIE9yZ2FuaXphdGlvbmFsIFNlY3Rpb24nLFxuICAgICAgICAnJyxcbiAgICAgICAgJy0gWyBdIFBSIGlzIGFzc2lnbmVkIHRvIHRoZSBhY2NvcmRpbmcgZmVhdHVyZS9idWcnLFxuICAgICAgICAnLSBbIF0gRmVhdHVyZS9idWcgaXMgZGVzY3JpcHRpdmUnLFxuICAgICAgICAnLSBbIF0gRmVhdHVyZS9idWcgaXMgYXNzaWduZWQgdG8gYWNjb3JkaW5nIGxhYmVscycsXG4gICAgICAgICctIFsgXSBGZWF0dXJlL2J1ZyBpcyBhc3NpZ25lZCB0byBhIGRldmVsb3BlcicsXG4gICAgICAgICcnLFxuICAgICAgICAnIyMjIFN0cnVjdHVyZScsXG4gICAgICAgICcnLFxuICAgICAgICAnLSBbIF0gUmVhZGFiaWxpdHk6IENvZGUgaXMgZWFzeSB0byB1bmRlcnN0YW5kLCB3aXRoIG1lYW5pbmdmdWwgbmFtZXMgZm9yIHZhcmlhYmxlcywgZnVuY3Rpb25zLCBhbmQgY2xhc3NlcycsXG4gICAgICAgICctIFsgXSBDb21tZW50czogTWVhbmluZ2Z1bCBhbmQgaGVscGZ1bCBjb21tZW50cy4gQ29kZSBpcyBkb2N1bWVudGVkIHdpdGhvdXQgYmVpbmcgb3Zlci1jb21tZW50ZWQnLFxuICAgICAgICAnLSBbIF0gRFJZLCBLSVNTIGFuZCBZQUdOSTogQ29kZSBpbXBsZW1lbnRzIG9ubHkgbmVjZXNzYXJ5IGZlYXR1cmVzOyBubyBvdmVyLWVuZ2luZWVyaW5nJyxcbiAgICAgICAgJy0gWyBdIE5vIHNlbnNpdGl2ZSBkYXRhIChlLmcuLCBwYXNzd29yZHMsIEFQSSBrZXlzKSBpbiB0aGUgY29kZScsXG4gICAgICAgICctIFsgXSBObyBtYWpvciB1cGRhdGVzIGZvciB1c2VkIHBhY2thZ2VzJyxcbiAgICAgICAgJycsXG4gICAgICAgICcjIyMgVGVzdGluZycsXG4gICAgICAgICcnLFxuICAgICAgICAnLSBbIF0gQ29kZSBpcyBsb2NhbGx5IHRlc3RlZCBieSBkZXZlbG9wZXIgKGlmIGFwcGxpY2FibGUpJyxcbiAgICAgICAgJy0gWyBdIEF1dG9tYXRlZCB0ZXN0cyBwYXNzIHN1Y2Nlc3NmdWxseScsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUgYnVnIGlzc3VlIHRlbXBsYXRlIGZpbGUuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgcmVjb3JkIHdoZXJlIHRoZSBrZXkgaXMgdGhlIGZpbGUgcGF0aCBhbmQgdGhlIHZhbHVlIGlzIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAgICogICAgICAgICAgcmVwcmVzZW50aW5nIHRoZSBjb250ZW50IG9mIHRoZSBpc3N1ZSB0ZW1wbGF0ZS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZUJ1Z0lzc3VlKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuZ2l0aHViL0lTU1VFX1RFTVBMQVRFL2J1Zy55bWwnOiBbXG4gICAgICAgICduYW1lOiDwn5CeIEJ1ZycsXG4gICAgICAgICdkZXNjcmlwdGlvbjogRmlsZSBhIGJ1Zy9pc3N1ZScsXG4gICAgICAgICd0aXRsZTogXCJbQlVHXSA8dGl0bGU+XCInLFxuICAgICAgICAnbGFiZWxzOiBbXCJ0eXBlOiBidWdcIl0nLFxuICAgICAgICAnYm9keTonLFxuICAgICAgICAnICAtIHR5cGU6IHRleHRhcmVhJyxcbiAgICAgICAgJyAgICBhdHRyaWJ1dGVzOicsXG4gICAgICAgICcgICAgICBsYWJlbDogQ3VycmVudCBiZWhhdmlvcicsXG4gICAgICAgIFwiICAgICAgZGVzY3JpcHRpb246IEEgZGVzY3JpcHRpb24gb2Ygd2hhdCB5b3UncmUgZXhwZXJpZW5jaW5nLlwiLFxuICAgICAgICAnICAgIHZhbGlkYXRpb25zOicsXG4gICAgICAgICcgICAgICByZXF1aXJlZDogdHJ1ZScsXG4gICAgICAgICcnLFxuICAgICAgICAnICAtIHR5cGU6IHRleHRhcmVhJyxcbiAgICAgICAgJyAgICBhdHRyaWJ1dGVzOicsXG4gICAgICAgICcgICAgICBsYWJlbDogRXhwZWN0ZWQgYmVoYXZpb3InLFxuICAgICAgICAnICAgICAgZGVzY3JpcHRpb246IEEgZGVzY3JpcHRpb24gb2Ygd2hhdCB5b3UgZXhwZWN0ZWQgdG8gaGFwcGVuLicsXG4gICAgICAgICcgICAgdmFsaWRhdGlvbnM6JyxcbiAgICAgICAgJyAgICAgIHJlcXVpcmVkOiB0cnVlJyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBmZWF0dXJlIHJlcXVlc3QgdGVtcGxhdGUgZmlsZS5cbiAgICpcbiAgICogQHJldHVybnMgQSByZWNvcmQgd2hlcmUgdGhlIGtleSBpcyB0aGUgZmlsZSBwYXRoIGFuZCB0aGUgdmFsdWUgaXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgKiAgICAgICAgICByZXByZXNlbnRpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIGlzc3VlIHRlbXBsYXRlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBjb25maWdGaWxlRmVhdHVyZUlzc3VlKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuZ2l0aHViL0lTU1VFX1RFTVBMQVRFL2ZlYXR1cmUueW1sJzogW1xuICAgICAgICAnbmFtZTog8J+SoSBGZWF0dXJlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uOiBSZXF1ZXN0IGZvciBhIG5ldyBmZWF0dXJlJyxcbiAgICAgICAgJ3RpdGxlOiBcIltGRUFUVVJFXSA8dGl0bGU+XCInLFxuICAgICAgICAnbGFiZWxzOiBbXCJ0eXBlOiBmZWF0dXJlXCJdJyxcbiAgICAgICAgJ2JvZHk6JyxcbiAgICAgICAgJyAgLSB0eXBlOiB0ZXh0YXJlYScsXG4gICAgICAgICcgICAgYXR0cmlidXRlczonLFxuICAgICAgICAnICAgICAgbGFiZWw6IERlc2NyaXB0aW9uJyxcbiAgICAgICAgJyAgICAgIGRlc2NyaXB0aW9uOiBBIGRlc2NyaXB0aW9uIG9mIHRoZSBmZWF0dXJlLicsXG4gICAgICAgICcgICAgdmFsaWRhdGlvbnM6JyxcbiAgICAgICAgJyAgICAgIHJlcXVpcmVkOiB0cnVlJyxcbiAgICAgICAgJycsXG4gICAgICAgICcgIC0gdHlwZTogdGV4dGFyZWEnLFxuICAgICAgICAnICAgIGF0dHJpYnV0ZXM6JyxcbiAgICAgICAgJyAgICAgIGxhYmVsOiBUYXNrIExpc3QnLFxuICAgICAgICAnICAgICAgZGVzY3JpcHRpb246IERlc2NyaWJlIHRoZSBzdGVwcyB0byBmdWxmaWxsIHRoZSBmZWF0dXJlLicsXG4gICAgICAgICcgICAgICB2YWx1ZTogfCcsXG4gICAgICAgICcgICAgICAgIC0gWyBdIE15IEZpcnN0IFRhc2snLFxuICAgICAgICAnICAgIHZhbGlkYXRpb25zOicsXG4gICAgICAgICcgICAgICByZXF1aXJlZDogdHJ1ZScsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUgaG91c2VrZWVwaW5nIGlzc3VlIHRlbXBsYXRlIGZpbGUuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgcmVjb3JkIHdoZXJlIHRoZSBrZXkgaXMgdGhlIGZpbGUgcGF0aCBhbmQgdGhlIHZhbHVlIGlzIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAgICogICAgICAgICAgcmVwcmVzZW50aW5nIHRoZSBjb250ZW50IG9mIHRoZSBpc3N1ZSB0ZW1wbGF0ZS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZUhvdXNla2VlcGluZ0lzc3VlKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuZ2l0aHViL0lTU1VFX1RFTVBMQVRFL2hvdXNla2VlcGluZy55bWwnOiBbXG4gICAgICAgICduYW1lOiDwn5KhIEhvdXNla2VlcGluZycsXG4gICAgICAgICdkZXNjcmlwdGlvbjogTWFpbnRlbmFuY2Ugb3IgcmVmYWN0b3JpbmcgdGFzaycsXG4gICAgICAgICd0aXRsZTogXCJbSE9VU0VLRUVQSU5HXSA8dGl0bGU+XCInLFxuICAgICAgICAnbGFiZWxzOiBbXCJ0eXBlOiBob3VzZWtlZXBpbmdcIl0nLFxuICAgICAgICAnYm9keTonLFxuICAgICAgICAnICAtIHR5cGU6IHRleHRhcmVhJyxcbiAgICAgICAgJyAgICBhdHRyaWJ1dGVzOicsXG4gICAgICAgICcgICAgICBsYWJlbDogRGVzY3JpcHRpb24nLFxuICAgICAgICAnICAgICAgZGVzY3JpcHRpb246IEEgZGVzY3JpcHRpb24gb2YgdGhlIGhvdXNla2VlcGluZyB0YXNrLicsXG4gICAgICAgICcgICAgdmFsaWRhdGlvbnM6JyxcbiAgICAgICAgJyAgICAgIHJlcXVpcmVkOiB0cnVlJyxcbiAgICAgICAgJycsXG4gICAgICAgICcgIC0gdHlwZTogdGV4dGFyZWEnLFxuICAgICAgICAnICAgIGF0dHJpYnV0ZXM6JyxcbiAgICAgICAgJyAgICAgIGxhYmVsOiBUYXNrIExpc3QnLFxuICAgICAgICAnICAgICAgZGVzY3JpcHRpb246IERlc2NyaWJlIHRoZSBzdGVwcyB0byBmdWxmaWxsIHRoZSBob3VzZWtlZXBpbmcgdGFzay4nLFxuICAgICAgICAnICAgICAgdmFsdWU6IHwnLFxuICAgICAgICAnICAgICAgICAtIFsgXSBNeSBGaXJzdCBUYXNrJyxcbiAgICAgICAgJyAgICB2YWxpZGF0aW9uczonLFxuICAgICAgICAnICAgICAgcmVxdWlyZWQ6IHRydWUnLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIHF1ZXN0aW9uIGlzc3VlIHRlbXBsYXRlIGZpbGUuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgcmVjb3JkIHdoZXJlIHRoZSBrZXkgaXMgdGhlIGZpbGUgcGF0aCBhbmQgdGhlIHZhbHVlIGlzIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAgICogICAgICAgICAgcmVwcmVzZW50aW5nIHRoZSBjb250ZW50IG9mIHRoZSBpc3N1ZSB0ZW1wbGF0ZS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZVF1ZXN0aW9uSXNzdWUoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5naXRodWIvSVNTVUVfVEVNUExBVEUvcXVlc3Rpb24ueW1sJzogW1xuICAgICAgICAnbmFtZTog4p2TIFF1ZXN0aW9uJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uOiBBc2sgYSBxdWVzdGlvbicsXG4gICAgICAgICd0aXRsZTogXCJbUVVFU1RJT05dIDx0aXRsZT5cIicsXG4gICAgICAgICdsYWJlbHM6IFtcInR5cGU6IHF1ZXN0aW9uXCJdJyxcbiAgICAgICAgJ2JvZHk6JyxcbiAgICAgICAgJyAgLSB0eXBlOiB0ZXh0YXJlYScsXG4gICAgICAgICcgICAgYXR0cmlidXRlczonLFxuICAgICAgICAnICAgICAgbGFiZWw6IFF1ZXN0aW9uJyxcbiAgICAgICAgJyAgICAgIGRlc2NyaXB0aW9uOiBXaGF0IHdvdWxkIHlvdSBsaWtlIHRvIGtub3c/IElmIHlvdSBlbmNvdW50ZXIgdW51c3VhbCBiZWhhdmlvciBvciBpZGVudGlmaWVkIGEgbWlzc2luZyBmZWF0dXJlLCBjb25zaWRlciBvcGVuaW5nIGEgYnVnIHJlcG9ydCBpbnN0ZWFkLicsXG4gICAgICAgICcgICAgdmFsaWRhdGlvbnM6JyxcbiAgICAgICAgJyAgICAgIHJlcXVpcmVkOiB0cnVlJyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBnaXQgY2xpZmYgdGVtcGxhdGUgZmlsZS5cbiAgICpcbiAgICogQHJldHVybnMgQSByZWNvcmQgd2hlcmUgdGhlIGtleSBpcyB0aGUgZmlsZSBwYXRoIGFuZCB0aGUgdmFsdWUgaXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgKiAgICAgICAgICByZXByZXNlbnRpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIGlzc3VlIHRlbXBsYXRlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBjb25maWdGaWxlQ2xpZmYoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2NsaWZmLnRvbWwnOiBbXG4gICAgICAgICdbY2hhbmdlbG9nXScsXG4gICAgICAgICcjIGNoYW5nZWxvZyBoZWFkZXInLFxuICAgICAgICAnaGVhZGVyID0gXCJcIlwiJyxcbiAgICAgICAgJyMgQ2hhbmdlbG9nXFxuJyxcbiAgICAgICAgJ0FsbCBub3RhYmxlIGNoYW5nZXMgdG8gdGhpcyBwcm9qZWN0IHdpbGwgYmUgZG9jdW1lbnRlZCBpbiB0aGlzIGZpbGUuXFxuJyxcbiAgICAgICAgJ1wiXCJcIicsXG4gICAgICAgICcjIHRlbXBsYXRlIGZvciB0aGUgY2hhbmdlbG9nIGJvZHknLFxuICAgICAgICAnIyBodHRwczovL2tlYXRzLmdpdGh1Yi5pby90ZXJhL2RvY3MvI2ludHJvZHVjdGlvbicsXG4gICAgICAgICdib2R5ID0gXCJcIlwiJyxcbiAgICAgICAgJ3slIGlmIHZlcnNpb24gJX0nLFxuICAgICAgICAnICAgICMjIFt7eyB2ZXJzaW9uIHwgdHJpbV9zdGFydF9tYXRjaGVzKHBhdD1cInZcIikgfX1dIC0ge3sgdGltZXN0YW1wIHwgZGF0ZShmb3JtYXQ9XCIlWS0lbS0lZFwiKSB9fScsXG4gICAgICAgICd7JSBlbHNlICV9JyxcbiAgICAgICAgJyAgICAjIyBbdW5yZWxlYXNlZF0nLFxuICAgICAgICAneyUgZW5kaWYgJX0nLFxuICAgICAgICAneyUgZm9yIGdyb3VwLCBjb21taXRzIGluIGNvbW1pdHMgfCBncm91cF9ieShhdHRyaWJ1dGU9XCJncm91cFwiKSAlfScsXG4gICAgICAgICcgICAgIyMjIHt7IGdyb3VwIHwgc3RyaXB0YWdzIHwgdHJpbSB8IHVwcGVyX2ZpcnN0IH19JyxcbiAgICAgICAgJyAgICB7JSBmb3IgY29tbWl0IGluIGNvbW1pdHMgJX0nLFxuICAgICAgICAnICAgICAgICAtIHslIGlmIGNvbW1pdC5zY29wZSAlfSooe3sgY29tbWl0LnNjb3BlIH19KSogeyUgZW5kaWYgJX0nLFxuICAgICAgICAnICAgICAgICAgICAgeyUgaWYgY29tbWl0LmJyZWFraW5nICV9WyoqYnJlYWtpbmcqKl0geyUgZW5kaWYgJX0nLFxuICAgICAgICAnICAgICAgICAgICAge3sgY29tbWl0Lm1lc3NhZ2UgfCB1cHBlcl9maXJzdCB9fScsXG4gICAgICAgICcgICAgeyUgZW5kZm9yICV9JyxcbiAgICAgICAgJ3slIGVuZGZvciAlfScsXG4gICAgICAgICdcIlwiXCInLFxuICAgICAgICAnIyB0ZW1wbGF0ZSBmb3IgdGhlIGNoYW5nZWxvZyBmb290ZXInLFxuICAgICAgICAnZm9vdGVyID0gXCJcIlwiJyxcbiAgICAgICAgJzwhLS0gZ2VuZXJhdGVkIGJ5IGdpdC1jbGlmZiAtLT4nLFxuICAgICAgICAnXCJcIlwiJyxcbiAgICAgICAgJyMgcmVtb3ZlIHRoZSBsZWFkaW5nIGFuZCB0cmFpbGluZyBzJyxcbiAgICAgICAgJ3RyaW0gPSB0cnVlJyxcbiAgICAgICAgJyMgcG9zdHByb2Nlc3NvcnMnLFxuICAgICAgICAncG9zdHByb2Nlc3NvcnMgPSBbJyxcbiAgICAgICAgJyAgIyB7IHBhdHRlcm4gPSBcIjxSRVBPPlwiLCByZXBsYWNlID0gXCJodHRwczovL2dpdGh1Yi5jb20vb3JodW4vZ2l0LWNsaWZmXCIgfSwgIyByZXBsYWNlIHJlcG9zaXRvcnkgVVJMJyxcbiAgICAgICAgJ10nLFxuICAgICAgICAnJyxcbiAgICAgICAgJ1tnaXRdJyxcbiAgICAgICAgJyMgcGFyc2UgdGhlIGNvbW1pdHMgYmFzZWQgb24gaHR0cHM6Ly93d3cuY29udmVudGlvbmFsY29tbWl0cy5vcmcnLFxuICAgICAgICAnY29udmVudGlvbmFsX2NvbW1pdHMgPSB0cnVlJyxcbiAgICAgICAgJyMgZmlsdGVyIG91dCB0aGUgY29tbWl0cyB0aGF0IGFyZSBub3QgY29udmVudGlvbmFsJyxcbiAgICAgICAgJ2ZpbHRlcl91bmNvbnZlbnRpb25hbCA9IHRydWUnLFxuICAgICAgICAnIyBwcm9jZXNzIGVhY2ggbGluZSBvZiBhIGNvbW1pdCBhcyBhbiBpbmRpdmlkdWFsIGNvbW1pdCcsXG4gICAgICAgICdzcGxpdF9jb21taXRzID0gZmFsc2UnLFxuICAgICAgICAnIyByZWdleCBmb3IgcHJlcHJvY2Vzc2luZyB0aGUgY29tbWl0IG1lc3NhZ2VzJyxcbiAgICAgICAgJ2NvbW1pdF9wcmVwcm9jZXNzb3JzID0gWycsXG4gICAgICAgICcgICMgUmVwbGFjZSBpc3N1ZSBudW1iZXJzJyxcbiAgICAgICAgJyAgI3sgcGF0dGVybiA9IFwiKCh3K3MpPyMoWzAtOV0rKSlcIiwgcmVwbGFjZSA9IFwiKFsjJHsyfV0oPFJFUE8+L2lzc3Vlcy8kezJ9KSlcIn0sJyxcbiAgICAgICAgJyAgIyBDaGVjayBzcGVsbGluZyBvZiB0aGUgY29tbWl0IHdpdGggaHR0cHM6Ly9naXRodWIuY29tL2NyYXRlLWNpL3R5cG9zJyxcbiAgICAgICAgJyAgIyBJZiB0aGUgc3BlbGxpbmcgaXMgaW5jb3JyZWN0LCBpdCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZml4ZWQuJyxcbiAgICAgICAgJyAgI3sgcGF0dGVybiA9IFwiLipcIiwgcmVwbGFjZV9jb21tYW5kID0gXCJ0eXBvcyAtLXdyaXRlLWNoYW5nZXMgLVwiIH0sJyxcbiAgICAgICAgJ10nLFxuICAgICAgICAnIyByZWdleCBmb3IgcGFyc2luZyBhbmQgZ3JvdXBpbmcgY29tbWl0cycsXG4gICAgICAgICdjb21taXRfcGFyc2VycyA9IFsnLFxuICAgICAgICAnICB7IG1lc3NhZ2UgPSBcIl5mZWF0XCIsIGdyb3VwID0gXCI8IS0tIDAgLS0+8J+agCBGZWF0dXJlc1wiIH0sJyxcbiAgICAgICAgJyAgeyBtZXNzYWdlID0gXCJeZml4XCIsIGdyb3VwID0gXCI8IS0tIDEgLS0+8J+QmyBCdWcgRml4ZXNcIiB9LCcsXG4gICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXmRvY1wiLCBncm91cCA9IFwiPCEtLSAzIC0tPvCfk5ogRG9jdW1lbnRhdGlvblwiIH0sJyxcbiAgICAgICAgJyAgeyBtZXNzYWdlID0gXCJecGVyZlwiLCBncm91cCA9IFwiPCEtLSA0IC0tPuKaoSBQZXJmb3JtYW5jZVwiIH0sJyxcbiAgICAgICAgJyAgeyBtZXNzYWdlID0gXCJecmVmYWN0b3JcIiwgZ3JvdXAgPSBcIjwhLS0gMiAtLT7wn5qcIFJlZmFjdG9yXCIgfSwnLFxuICAgICAgICAnICB7IG1lc3NhZ2UgPSBcIl5zdHlsZVwiLCBncm91cCA9IFwiPCEtLSA1IC0tPvCfjqggU3R5bGluZ1wiIH0sJyxcbiAgICAgICAgJyAgeyBtZXNzYWdlID0gXCJedGVzdFwiLCBncm91cCA9IFwiPCEtLSA2IC0tPvCfp6ogVGVzdGluZ1wiIH0sJyxcbiAgICAgICAgJyAgeyBtZXNzYWdlID0gXCJeY2hvcmUocmVsZWFzZSk6IHByZXBhcmUgZm9yXCIsIHNraXAgPSB0cnVlIH0sJyxcbiAgICAgICAgJyAgeyBtZXNzYWdlID0gXCJeY2hvcmUoZGVwcy4qKVwiLCBza2lwID0gdHJ1ZSB9LCcsXG4gICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXmNob3JlKHByKVwiLCBza2lwID0gdHJ1ZSB9LCcsXG4gICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXmNob3JlKHB1bGwpXCIsIHNraXAgPSB0cnVlIH0sJyxcbiAgICAgICAgJyAgeyBtZXNzYWdlID0gXCJeY2hvcmV8XmNpXCIsIGdyb3VwID0gXCI8IS0tIDcgLS0+4pqZ77iPIE1pc2NlbGxhbmVvdXMgVGFza3NcIiB9LCcsXG4gICAgICAgICcgIHsgYm9keSA9IFwiLipzZWN1cml0eVwiLCBncm91cCA9IFwiPCEtLSA4IC0tPvCfm6HvuI8gU2VjdXJpdHlcIiB9LCcsXG4gICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXnJldmVydFwiLCBncm91cCA9IFwiPCEtLSA5IC0tPuKXgO+4jyBSZXZlcnRcIiB9LCcsXG4gICAgICAgICddJyxcbiAgICAgICAgJyMgcHJvdGVjdCBicmVha2luZyBjaGFuZ2VzIGZyb20gYmVpbmcgc2tpcHBlZCBkdWUgdG8gbWF0Y2hpbmcgYSBza2lwcGluZyBjb21taXRfcGFyc2VyJyxcbiAgICAgICAgJ3Byb3RlY3RfYnJlYWtpbmdfY29tbWl0cyA9IGZhbHNlJyxcbiAgICAgICAgJyMgZmlsdGVyIG91dCB0aGUgY29tbWl0cyB0aGF0IGFyZSBub3QgbWF0Y2hlZCBieSBjb21taXQgcGFyc2VycycsXG4gICAgICAgICdmaWx0ZXJfY29tbWl0cyA9IGZhbHNlJyxcbiAgICAgICAgJyMgcmVnZXggZm9yIG1hdGNoaW5nIGdpdCB0YWdzJyxcbiAgICAgICAgJyMgdGFnX3BhdHRlcm4gPSBcInZbMC05XS4qXCInLFxuICAgICAgICAnIyByZWdleCBmb3Igc2tpcHBpbmcgdGFncycsXG4gICAgICAgICcjIHNraXBfdGFncyA9IFwiXCInLFxuICAgICAgICAnIyByZWdleCBmb3IgaWdub3JpbmcgdGFncycsXG4gICAgICAgICcjIGlnbm9yZV90YWdzID0gXCJcIicsXG4gICAgICAgICcjIHNvcnQgdGhlIHRhZ3MgdG9wb2xvZ2ljYWxseScsXG4gICAgICAgICd0b3BvX29yZGVyID0gZmFsc2UnLFxuICAgICAgICAnIyBzb3J0IHRoZSBjb21taXRzIGluc2lkZSBzZWN0aW9ucyBieSBvbGRlc3QvbmV3ZXN0IG9yZGVyJyxcbiAgICAgICAgJ3NvcnRfY29tbWl0cyA9IFwib2xkZXN0XCInLFxuICAgICAgICAnIyBsaW1pdCB0aGUgbnVtYmVyIG9mIGNvbW1pdHMgaW5jbHVkZWQgaW4gdGhlIGNoYW5nZWxvZy4nLFxuICAgICAgICAnIyBsaW1pdF9jb21taXRzID0gNDInLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIHJlbGVhc2Ugd29ya2Zsb3cgdGVtcGxhdGUgZmlsZS5cbiAgICpcbiAgICogQHJldHVybnMgQSByZWNvcmQgd2hlcmUgdGhlIGtleSBpcyB0aGUgZmlsZSBwYXRoIGFuZCB0aGUgdmFsdWUgaXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgKiAgICAgICAgICByZXByZXNlbnRpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIGlzc3VlIHRlbXBsYXRlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBjb25maWdGaWxlUmVsZWFzZVdvcmtmbG93KCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuZ2l0aHViL3dvcmtmbG93cy9yZWxlYXNlLnltbCc6IFtcbiAgICAgICAgJ25hbWU6IFJlbGVhc2UnLFxuICAgICAgICAnb246JyxcbiAgICAgICAgJyAgcHVsbF9yZXF1ZXN0OicsXG4gICAgICAgICcgICAgYnJhbmNoZXM6JyxcbiAgICAgICAgJyAgICAgIC0gbWFpbicsXG4gICAgICAgICcgICAgdHlwZXM6JyxcbiAgICAgICAgJyAgICAgIC0gY2xvc2VkJyxcbiAgICAgICAgJ2pvYnM6JyxcbiAgICAgICAgJyAgcmVsZWFzZTonLFxuICAgICAgICAnICAgIHJ1bnMtb246IHVidW50dS1sYXRlc3QnLFxuICAgICAgICAnICAgIHBlcm1pc3Npb25zOicsXG4gICAgICAgICcgICAgICBjb250ZW50czogd3JpdGUnLFxuICAgICAgICAnICAgICAgcHVsbC1yZXF1ZXN0czogd3JpdGUnLFxuICAgICAgICAnICAgIHN0ZXBzOicsXG4gICAgICAgICcgICAgICAtIG5hbWU6IENyZWF0ZSByZWxlYXNlJyxcbiAgICAgICAgJyAgICAgICAgdXNlczogZHhmcm9udGllci9naC1hY3Rpb24tcmVsZWFzZUBtYWluJyxcbiAgICAgICAgJyAgICAgICAgd2l0aDonLFxuICAgICAgICAnICAgICAgICAgIEdJVEhVQl9UT0tFTjogJHt7IHNlY3JldHMuR0lUSFVCX1RPS0VOIH19JyxcbiAgICAgICAgJyAgICAgICAgICBCUkFOQ0g6IG1haW4nLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBwdWxsIHJlcXVlc3QgdGVtcGxhdGUgZmlsZS5cbiAgICovXG4gIHB1YmxpYyBjcmVhdGVQdWxsUmVxdWVzdCgpOiB2b2lkIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlUHVsbFJlcXVlc3QpWzBdO1xuICAgIG5ldyBUZXh0RmlsZSh0aGlzLnByb2plY3QsIGZpbGVQYXRoLCB7XG4gICAgICBsaW5lczogdGhpcy5jb25maWdGaWxlUHVsbFJlcXVlc3RbZmlsZVBhdGhdLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBidWcgaXNzdWUgdGVtcGxhdGUgZmlsZS5cbiAgICovXG4gIHB1YmxpYyBjcmVhdGVCdWdJc3N1ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlQnVnSXNzdWUpWzBdO1xuICAgIG5ldyBUZXh0RmlsZSh0aGlzLnByb2plY3QsIGZpbGVQYXRoLCB7XG4gICAgICBsaW5lczogdGhpcy5jb25maWdGaWxlQnVnSXNzdWVbZmlsZVBhdGhdLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBmZWF0dXJlIHJlcXVlc3QgdGVtcGxhdGUgZmlsZS5cbiAgICovXG4gIHB1YmxpYyBjcmVhdGVGZWF0dXJlSXNzdWUoKTogdm9pZCB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZUZlYXR1cmVJc3N1ZSlbMF07XG4gICAgbmV3IFRleHRGaWxlKHRoaXMucHJvamVjdCwgZmlsZVBhdGgsIHtcbiAgICAgIGxpbmVzOiB0aGlzLmNvbmZpZ0ZpbGVGZWF0dXJlSXNzdWVbZmlsZVBhdGhdLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBob3VzZWtlZXBpbmcgaXNzdWUgdGVtcGxhdGUgZmlsZS5cbiAgICovXG4gIHB1YmxpYyBjcmVhdGVIb3VzZWtlZXBpbmdJc3N1ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlSG91c2VrZWVwaW5nSXNzdWUpWzBdO1xuICAgIG5ldyBUZXh0RmlsZSh0aGlzLnByb2plY3QsIGZpbGVQYXRoLCB7XG4gICAgICBsaW5lczogdGhpcy5jb25maWdGaWxlSG91c2VrZWVwaW5nSXNzdWVbZmlsZVBhdGhdLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBxdWVzdGlvbiBpc3N1ZSB0ZW1wbGF0ZSBmaWxlLlxuICAgKi9cbiAgcHVibGljIGNyZWF0ZVF1ZXN0aW9uSXNzdWUoKTogdm9pZCB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZVF1ZXN0aW9uSXNzdWUpWzBdO1xuICAgIG5ldyBUZXh0RmlsZSh0aGlzLnByb2plY3QsIGZpbGVQYXRoLCB7XG4gICAgICBsaW5lczogdGhpcy5jb25maWdGaWxlUXVlc3Rpb25Jc3N1ZVtmaWxlUGF0aF0sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHRoZSBnaXQgY2xpZmYgdGVtcGxhdGUgZmlsZS5cbiAgICovXG4gIHB1YmxpYyBjcmVhdGVDbGlmZigpOiB2b2lkIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlQ2xpZmYpWzBdO1xuICAgIG5ldyBUZXh0RmlsZSh0aGlzLnByb2plY3QsIGZpbGVQYXRoLCB7XG4gICAgICBsaW5lczogdGhpcy5jb25maWdGaWxlQ2xpZmZbZmlsZVBhdGhdLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSByZWxlYXNlIHdvcmtmbG93IHRlbXBsYXRlIGZpbGUuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlUmVsZWFzZVdvcmtmbG93KCk6IHZvaWQge1xuICAgIGNvbnN0IGZpbGVQYXRoOiBzdHJpbmcgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ0ZpbGVSZWxlYXNlV29ya2Zsb3cpWzBdO1xuICAgIG5ldyBUZXh0RmlsZSh0aGlzLnByb2plY3QsIGZpbGVQYXRoLCB7XG4gICAgICBsaW5lczogdGhpcy5jb25maWdGaWxlUmVsZWFzZVdvcmtmbG93W2ZpbGVQYXRoXSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGN1c3RvbSBhdHRyaWJ1dGVzIHBhdHRlcm5zIHRvIHRoZSBwcm9qZWN0J3MgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHBhdHRlcm5zIC0gQW4gYXJyYXkgb2YgZmlsZSBvciBkaXJlY3RvcnkgcGF0dGVybnMgdG8gYmUgYWRkZWQgYXMgYXR0cmlidXRlcy5cbiAgICovXG4gIHB1YmxpYyBhZGRBdHRyaWJ1dGVQYXR0ZXJucyhwYXR0ZXJuczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICB0aGlzLmF0dHJpYnV0ZVBhdHRlcm5zID0gWy4uLnRoaXMuYXR0cmlidXRlUGF0dGVybnMsIC4uLnBhdHRlcm5zXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgbGlzdCBvZiBhbGwgcmVsZXZhbnQgY29uZmlnIGZpbGVzLlxuICAgKiBAcmV0dXJucyBMaXN0IG9mIGNvbmZpZ3NcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlncygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT5bXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHRoaXMuY29uZmlnRmlsZVB1bGxSZXF1ZXN0LFxuICAgICAgdGhpcy5jb25maWdGaWxlQnVnSXNzdWUsXG4gICAgICB0aGlzLmNvbmZpZ0ZpbGVGZWF0dXJlSXNzdWUsXG4gICAgICB0aGlzLmNvbmZpZ0ZpbGVIb3VzZWtlZXBpbmdJc3N1ZSxcbiAgICAgIHRoaXMuY29uZmlnRmlsZVF1ZXN0aW9uSXNzdWUsXG4gICAgICB0aGlzLmNvbmZpZ0ZpbGVDbGlmZixcbiAgICAgIHRoaXMuY29uZmlnRmlsZVJlbGVhc2VXb3JrZmxvdyxcbiAgICBdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgZmlsZSBwYXRocyBmb3IgYWxsIGR5bmFtaWMgYW5kIHN0YXRpYyBjb25maWd1cmF0aW9uIGZpbGVzLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGxpc3Qgb2YgZmlsZSBwYXRoIHBhdHRlcm5zLCBpbmNsdWRpbmcgZHluYW1pYyBjb25maWd1cmF0aW9ucyBhbmQgc3RhdGljIGZpbGVzIGxpa2UgYC5naXRhdHRyaWJ1dGVzYCBhbmQgYC5naXRpZ25vcmVgLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBmaWxlUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGR5bmFtaWNGaWxlUGF0aHM6IHN0cmluZ1tdID0gdGhpcy5jb25maWdzXG4gICAgICAubWFwKChjb25maWc6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPik6IHN0cmluZyA9PiBgLyR7T2JqZWN0LmtleXMoY29uZmlnKVswXX1gKVxuICAgICAgLmZpbHRlcigoZmlsZVBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiBmaWxlUGF0aCk7XG4gICAgY29uc3Qgc3RhdGljRmlsZVBhdGhzOiBzdHJpbmdbXSA9IFsnLy5naXRhdHRyaWJ1dGVzJywgJy8uZ2l0aWdub3JlJ107XG5cbiAgICByZXR1cm4gWy4uLmR5bmFtaWNGaWxlUGF0aHMsIC4uLnN0YXRpY0ZpbGVQYXRoc107XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhZGRpdGlvbmFsIGlnbm9yZSBwYXR0ZXJucyB0byBiZSBhZGRlZCB0byB0aGUgcHJvamVjdCdzIGlnbm9yZSBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGxpc3Qgb2YgaWdub3JlIHBhdHRlcm5zLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBhZGRpdGlvbmFsSWdub3JlUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHBhdHRlcm5zOiBzdHJpbmdbXSA9IFsuLi50aGlzLmZpbGVQYXR0ZXJucywgJy9DSEFOR0VMT0cubWQnXTtcblxuICAgIHJldHVybiBwYXR0ZXJucztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGFkZGl0aW9uYWwgYXR0cmlidXRlcyBwYXR0ZXJucyB0byBiZSBhZGRlZCB0byB0aGUgcHJvamVjdCdzIGlnbm9yZSBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGxpc3Qgb2YgaWdub3JlIHBhdHRlcm5zLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBhZGRpdGlvbmFsQXR0cmlidXRlc1BhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gWydDSEFOR0VMT0cubWQnXTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSByZWdpc3RlckNvbmZpZygpOiB2b2lkIHtcbiAgICBpZiAoaXNWYWxpZFByb2plY3QodGhpcy5wcm9qZWN0KSkge1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLnByZXR0aWVyQ29uZmlnPy5hZGRJZ25vcmVQYXR0ZXJucyh0aGlzLmFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucyk7XG4gICAgfVxuICAgIHRoaXMuYWRkQXR0cmlidXRlUGF0dGVybnModGhpcy5hZGRpdGlvbmFsQXR0cmlidXRlc1BhdHRlcm5zKTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBhcHBseUNvbmZpZygpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZVB1bGxSZXF1ZXN0KCk7XG4gICAgdGhpcy5jcmVhdGVCdWdJc3N1ZSgpO1xuICAgIHRoaXMuY3JlYXRlRmVhdHVyZUlzc3VlKCk7XG4gICAgdGhpcy5jcmVhdGVIb3VzZWtlZXBpbmdJc3N1ZSgpO1xuICAgIHRoaXMuY3JlYXRlUXVlc3Rpb25Jc3N1ZSgpO1xuICAgIHRoaXMuY3JlYXRlQ2xpZmYoKTtcbiAgICB0aGlzLmNyZWF0ZVJlbGVhc2VXb3JrZmxvdygpO1xuXG4gICAgZm9yIChjb25zdCB2YWx1ZSBvZiB0aGlzLmF0dHJpYnV0ZVBhdHRlcm5zKSB7XG4gICAgICB0aGlzLnByb2plY3QuZ2l0YXR0cmlidXRlcy5hZGRBdHRyaWJ1dGVzKGAvJHt2YWx1ZX1gLCAnbGluZ3Vpc3QtZ2VuZXJhdGVkJyk7XG4gICAgfVxuICB9XG59XG4iXX0=
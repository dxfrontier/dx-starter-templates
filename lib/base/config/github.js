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
                '{% if version %}\\',
                '    ## [{{ version | trim_start_matches(pat="v") }}] - {{ timestamp | date(format="%Y-%m-%d") }}',
                '{% else %}\\',
                '    ## [unreleased]',
                '{% endif %}\\',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Jhc2UvY29uZmlnL2dpdGh1Yi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFrQztBQUNsQyxzQ0FBbUM7QUFFbkMsNENBQXdDO0FBRXhDOzs7O0dBSUc7QUFDSCxNQUFhLGdCQUFpQixTQUFRLGVBQU07SUFHMUMsWUFBWSxPQUFxQjtRQUMvQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFZixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDO0lBQzNELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYywwQkFBMEI7UUFDdEMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxJQUFjLHFCQUFxQjtRQUNqQyxPQUFPO1lBQ0wsa0NBQWtDLEVBQUU7Z0JBQ2xDLHdCQUF3QjtnQkFDeEIsRUFBRTtnQkFDRiw2REFBNkQ7Z0JBQzdELEVBQUU7Z0JBQ0YsNEJBQTRCO2dCQUM1QixFQUFFO2dCQUNGLG1EQUFtRDtnQkFDbkQsa0NBQWtDO2dCQUNsQyxtREFBbUQ7Z0JBQ25ELDhDQUE4QztnQkFDOUMsRUFBRTtnQkFDRixlQUFlO2dCQUNmLEVBQUU7Z0JBQ0YsNEdBQTRHO2dCQUM1RyxrR0FBa0c7Z0JBQ2xHLHlGQUF5RjtnQkFDekYsaUVBQWlFO2dCQUNqRSwwQ0FBMEM7Z0JBQzFDLEVBQUU7Z0JBQ0YsYUFBYTtnQkFDYixFQUFFO2dCQUNGLDJEQUEyRDtnQkFDM0QseUNBQXlDO2FBQzFDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILElBQWMsa0JBQWtCO1FBQzlCLE9BQU87WUFDTCxnQ0FBZ0MsRUFBRTtnQkFDaEMsY0FBYztnQkFDZCwrQkFBK0I7Z0JBQy9CLHdCQUF3QjtnQkFDeEIsdUJBQXVCO2dCQUN2QixPQUFPO2dCQUNQLG9CQUFvQjtnQkFDcEIsaUJB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LEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFN0IsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQzlFLENBQUM7SUFDSCxDQUFDOztBQXhiSCw0Q0F5YkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0RmlsZSB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgUHJvamVjdFR5cGVzIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcy9wcm9qZWN0JztcbmltcG9ydCB7IHV0aWwgfSBmcm9tICcuLi8uLi91dGlsL3V0aWxzJztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IEdpdEh1YiBjb25maWd1cmF0aW9uLlxuICpcbiAqIFRoaXMgY2xhc3MgYWN0cyBhcyBhIGJhc2UgZm9yIGhhbmRsaW5nIEdpdEh1YiBjb25maWd1cmF0aW9uIHdpdGhpbiBwcm9qZWN0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIEdpdEh1YkNvbmZpZ0Jhc2UgZXh0ZW5kcyBDb25maWcge1xuICBwcm90ZWN0ZWQgYXR0cmlidXRlUGF0dGVybnM6IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFByb2plY3RUeXBlcykge1xuICAgIHN1cGVyKHByb2plY3QpO1xuXG4gICAgdGhpcy5hdHRyaWJ1dGVQYXR0ZXJucyA9IHRoaXMuc3RhbmRhcmRBdHRyaWJ1dGVzUGF0dGVybnM7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgc3RhbmRhcmQgYXR0cmlidXRlcyBwYXR0ZXJucyByZXF1aXJlZCBmb3IgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMgQSBsaXN0IG9mIGF0dHJpYnV0ZXMgcGF0dGVybnMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHN0YW5kYXJkQXR0cmlidXRlc1BhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUgcHVsbCByZXF1ZXN0IHRlbXBsYXRlIGZpbGUuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgcmVjb3JkIHdoZXJlIHRoZSBrZXkgaXMgdGhlIGZpbGUgcGF0aCBhbmQgdGhlIHZhbHVlIGlzIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAgICogICAgICAgICAgcmVwcmVzZW50aW5nIHRoZSBjb250ZW50IG9mIHRoZSBpc3N1ZSB0ZW1wbGF0ZS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZVB1bGxSZXF1ZXN0KCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuZ2l0aHViL3B1bGxfcmVxdWVzdF90ZW1wbGF0ZS5tZCc6IFtcbiAgICAgICAgJyMjIFJldmlld2VycyBDaGVja2xpc3QnLFxuICAgICAgICAnJyxcbiAgICAgICAgJ2ZvciBjb21wbGV0ZSByZXZpZXcgbGlzdCByZWZlciB0byBBQlMgTG9vcCAtIFJldmlldyBBc3BlY3RzJyxcbiAgICAgICAgJycsXG4gICAgICAgICcjIyMgT3JnYW5pemF0aW9uYWwgU2VjdGlvbicsXG4gICAgICAgICcnLFxuICAgICAgICAnLSBbIF0gUFIgaXMgYXNzaWduZWQgdG8gdGhlIGFjY29yZGluZyBmZWF0dXJlL2J1ZycsXG4gICAgICAgICctIFsgXSBGZWF0dXJlL2J1ZyBpcyBkZXNjcmlwdGl2ZScsXG4gICAgICAgICctIFsgXSBGZWF0dXJlL2J1ZyBpcyBhc3NpZ25lZCB0byBhY2NvcmRpbmcgbGFiZWxzJyxcbiAgICAgICAgJy0gWyBdIEZlYXR1cmUvYnVnIGlzIGFzc2lnbmVkIHRvIGEgZGV2ZWxvcGVyJyxcbiAgICAgICAgJycsXG4gICAgICAgICcjIyMgU3RydWN0dXJlJyxcbiAgICAgICAgJycsXG4gICAgICAgICctIFsgXSBSZWFkYWJpbGl0eTogQ29kZSBpcyBlYXN5IHRvIHVuZGVyc3RhbmQsIHdpdGggbWVhbmluZ2Z1bCBuYW1lcyBmb3IgdmFyaWFibGVzLCBmdW5jdGlvbnMsIGFuZCBjbGFzc2VzJyxcbiAgICAgICAgJy0gWyBdIENvbW1lbnRzOiBNZWFuaW5nZnVsIGFuZCBoZWxwZnVsIGNvbW1lbnRzLiBDb2RlIGlzIGRvY3VtZW50ZWQgd2l0aG91dCBiZWluZyBvdmVyLWNvbW1lbnRlZCcsXG4gICAgICAgICctIFsgXSBEUlksIEtJU1MgYW5kIFlBR05JOiBDb2RlIGltcGxlbWVudHMgb25seSBuZWNlc3NhcnkgZmVhdHVyZXM7IG5vIG92ZXItZW5naW5lZXJpbmcnLFxuICAgICAgICAnLSBbIF0gTm8gc2Vuc2l0aXZlIGRhdGEgKGUuZy4sIHBhc3N3b3JkcywgQVBJIGtleXMpIGluIHRoZSBjb2RlJyxcbiAgICAgICAgJy0gWyBdIE5vIG1ham9yIHVwZGF0ZXMgZm9yIHVzZWQgcGFja2FnZXMnLFxuICAgICAgICAnJyxcbiAgICAgICAgJyMjIyBUZXN0aW5nJyxcbiAgICAgICAgJycsXG4gICAgICAgICctIFsgXSBDb2RlIGlzIGxvY2FsbHkgdGVzdGVkIGJ5IGRldmVsb3BlciAoaWYgYXBwbGljYWJsZSknLFxuICAgICAgICAnLSBbIF0gQXV0b21hdGVkIHRlc3RzIHBhc3Mgc3VjY2Vzc2Z1bGx5JyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBidWcgaXNzdWUgdGVtcGxhdGUgZmlsZS5cbiAgICpcbiAgICogQHJldHVybnMgQSByZWNvcmQgd2hlcmUgdGhlIGtleSBpcyB0aGUgZmlsZSBwYXRoIGFuZCB0aGUgdmFsdWUgaXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgKiAgICAgICAgICByZXByZXNlbnRpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIGlzc3VlIHRlbXBsYXRlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBjb25maWdGaWxlQnVnSXNzdWUoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5naXRodWIvSVNTVUVfVEVNUExBVEUvYnVnLnltbCc6IFtcbiAgICAgICAgJ25hbWU6IPCfkJ4gQnVnJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uOiBGaWxlIGEgYnVnL2lzc3VlJyxcbiAgICAgICAgJ3RpdGxlOiBcIltCVUddIDx0aXRsZT5cIicsXG4gICAgICAgICdsYWJlbHM6IFtcInR5cGU6IGJ1Z1wiXScsXG4gICAgICAgICdib2R5OicsXG4gICAgICAgICcgIC0gdHlwZTogdGV4dGFyZWEnLFxuICAgICAgICAnICAgIGF0dHJpYnV0ZXM6JyxcbiAgICAgICAgJyAgICAgIGxhYmVsOiBDdXJyZW50IGJlaGF2aW9yJyxcbiAgICAgICAgXCIgICAgICBkZXNjcmlwdGlvbjogQSBkZXNjcmlwdGlvbiBvZiB3aGF0IHlvdSdyZSBleHBlcmllbmNpbmcuXCIsXG4gICAgICAgICcgICAgdmFsaWRhdGlvbnM6JyxcbiAgICAgICAgJyAgICAgIHJlcXVpcmVkOiB0cnVlJyxcbiAgICAgICAgJycsXG4gICAgICAgICcgIC0gdHlwZTogdGV4dGFyZWEnLFxuICAgICAgICAnICAgIGF0dHJpYnV0ZXM6JyxcbiAgICAgICAgJyAgICAgIGxhYmVsOiBFeHBlY3RlZCBiZWhhdmlvcicsXG4gICAgICAgICcgICAgICBkZXNjcmlwdGlvbjogQSBkZXNjcmlwdGlvbiBvZiB3aGF0IHlvdSBleHBlY3RlZCB0byBoYXBwZW4uJyxcbiAgICAgICAgJyAgICB2YWxpZGF0aW9uczonLFxuICAgICAgICAnICAgICAgcmVxdWlyZWQ6IHRydWUnLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIGZlYXR1cmUgcmVxdWVzdCB0ZW1wbGF0ZSBmaWxlLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIHJlY29yZCB3aGVyZSB0aGUga2V5IGlzIHRoZSBmaWxlIHBhdGggYW5kIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSBvZiBzdHJpbmdzXG4gICAqICAgICAgICAgIHJlcHJlc2VudGluZyB0aGUgY29udGVudCBvZiB0aGUgaXNzdWUgdGVtcGxhdGUuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGNvbmZpZ0ZpbGVGZWF0dXJlSXNzdWUoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5naXRodWIvSVNTVUVfVEVNUExBVEUvZmVhdHVyZS55bWwnOiBbXG4gICAgICAgICduYW1lOiDwn5KhIEZlYXR1cmUnLFxuICAgICAgICAnZGVzY3JpcHRpb246IFJlcXVlc3QgZm9yIGEgbmV3IGZlYXR1cmUnLFxuICAgICAgICAndGl0bGU6IFwiW0ZFQVRVUkVdIDx0aXRsZT5cIicsXG4gICAgICAgICdsYWJlbHM6IFtcInR5cGU6IGZlYXR1cmVcIl0nLFxuICAgICAgICAnYm9keTonLFxuICAgICAgICAnICAtIHR5cGU6IHRleHRhcmVhJyxcbiAgICAgICAgJyAgICBhdHRyaWJ1dGVzOicsXG4gICAgICAgICcgICAgICBsYWJlbDogRGVzY3JpcHRpb24nLFxuICAgICAgICAnICAgICAgZGVzY3JpcHRpb246IEEgZGVzY3JpcHRpb24gb2YgdGhlIGZlYXR1cmUuJyxcbiAgICAgICAgJyAgICB2YWxpZGF0aW9uczonLFxuICAgICAgICAnICAgICAgcmVxdWlyZWQ6IHRydWUnLFxuICAgICAgICAnJyxcbiAgICAgICAgJyAgLSB0eXBlOiB0ZXh0YXJlYScsXG4gICAgICAgICcgICAgYXR0cmlidXRlczonLFxuICAgICAgICAnICAgICAgbGFiZWw6IFRhc2sgTGlzdCcsXG4gICAgICAgICcgICAgICBkZXNjcmlwdGlvbjogRGVzY3JpYmUgdGhlIHN0ZXBzIHRvIGZ1bGZpbGwgdGhlIGZlYXR1cmUuJyxcbiAgICAgICAgJyAgICAgIHZhbHVlOiB8JyxcbiAgICAgICAgJyAgICAgICAgLSBbIF0gTXkgRmlyc3QgVGFzaycsXG4gICAgICAgICcgICAgdmFsaWRhdGlvbnM6JyxcbiAgICAgICAgJyAgICAgIHJlcXVpcmVkOiB0cnVlJyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBob3VzZWtlZXBpbmcgaXNzdWUgdGVtcGxhdGUgZmlsZS5cbiAgICpcbiAgICogQHJldHVybnMgQSByZWNvcmQgd2hlcmUgdGhlIGtleSBpcyB0aGUgZmlsZSBwYXRoIGFuZCB0aGUgdmFsdWUgaXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgKiAgICAgICAgICByZXByZXNlbnRpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIGlzc3VlIHRlbXBsYXRlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBjb25maWdGaWxlSG91c2VrZWVwaW5nSXNzdWUoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5naXRodWIvSVNTVUVfVEVNUExBVEUvaG91c2VrZWVwaW5nLnltbCc6IFtcbiAgICAgICAgJ25hbWU6IPCfkqEgSG91c2VrZWVwaW5nJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uOiBNYWludGVuYW5jZSBvciByZWZhY3RvcmluZyB0YXNrJyxcbiAgICAgICAgJ3RpdGxlOiBcIltIT1VTRUtFRVBJTkddIDx0aXRsZT5cIicsXG4gICAgICAgICdsYWJlbHM6IFtcInR5cGU6IGhvdXNla2VlcGluZ1wiXScsXG4gICAgICAgICdib2R5OicsXG4gICAgICAgICcgIC0gdHlwZTogdGV4dGFyZWEnLFxuICAgICAgICAnICAgIGF0dHJpYnV0ZXM6JyxcbiAgICAgICAgJyAgICAgIGxhYmVsOiBEZXNjcmlwdGlvbicsXG4gICAgICAgICcgICAgICBkZXNjcmlwdGlvbjogQSBkZXNjcmlwdGlvbiBvZiB0aGUgaG91c2VrZWVwaW5nIHRhc2suJyxcbiAgICAgICAgJyAgICB2YWxpZGF0aW9uczonLFxuICAgICAgICAnICAgICAgcmVxdWlyZWQ6IHRydWUnLFxuICAgICAgICAnJyxcbiAgICAgICAgJyAgLSB0eXBlOiB0ZXh0YXJlYScsXG4gICAgICAgICcgICAgYXR0cmlidXRlczonLFxuICAgICAgICAnICAgICAgbGFiZWw6IFRhc2sgTGlzdCcsXG4gICAgICAgICcgICAgICBkZXNjcmlwdGlvbjogRGVzY3JpYmUgdGhlIHN0ZXBzIHRvIGZ1bGZpbGwgdGhlIGhvdXNla2VlcGluZyB0YXNrLicsXG4gICAgICAgICcgICAgICB2YWx1ZTogfCcsXG4gICAgICAgICcgICAgICAgIC0gWyBdIE15IEZpcnN0IFRhc2snLFxuICAgICAgICAnICAgIHZhbGlkYXRpb25zOicsXG4gICAgICAgICcgICAgICByZXF1aXJlZDogdHJ1ZScsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUgcXVlc3Rpb24gaXNzdWUgdGVtcGxhdGUgZmlsZS5cbiAgICpcbiAgICogQHJldHVybnMgQSByZWNvcmQgd2hlcmUgdGhlIGtleSBpcyB0aGUgZmlsZSBwYXRoIGFuZCB0aGUgdmFsdWUgaXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgKiAgICAgICAgICByZXByZXNlbnRpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIGlzc3VlIHRlbXBsYXRlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBjb25maWdGaWxlUXVlc3Rpb25Jc3N1ZSgpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnLmdpdGh1Yi9JU1NVRV9URU1QTEFURS9xdWVzdGlvbi55bWwnOiBbXG4gICAgICAgICduYW1lOiDinZMgUXVlc3Rpb24nLFxuICAgICAgICAnZGVzY3JpcHRpb246IEFzayBhIHF1ZXN0aW9uJyxcbiAgICAgICAgJ3RpdGxlOiBcIltRVUVTVElPTl0gPHRpdGxlPlwiJyxcbiAgICAgICAgJ2xhYmVsczogW1widHlwZTogcXVlc3Rpb25cIl0nLFxuICAgICAgICAnYm9keTonLFxuICAgICAgICAnICAtIHR5cGU6IHRleHRhcmVhJyxcbiAgICAgICAgJyAgICBhdHRyaWJ1dGVzOicsXG4gICAgICAgICcgICAgICBsYWJlbDogUXVlc3Rpb24nLFxuICAgICAgICAnICAgICAgZGVzY3JpcHRpb246IFdoYXQgd291bGQgeW91IGxpa2UgdG8ga25vdz8gSWYgeW91IGVuY291bnRlciB1bnVzdWFsIGJlaGF2aW9yIG9yIGlkZW50aWZpZWQgYSBtaXNzaW5nIGZlYXR1cmUsIGNvbnNpZGVyIG9wZW5pbmcgYSBidWcgcmVwb3J0IGluc3RlYWQuJyxcbiAgICAgICAgJyAgICB2YWxpZGF0aW9uczonLFxuICAgICAgICAnICAgICAgcmVxdWlyZWQ6IHRydWUnLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIGdpdCBjbGlmZiB0ZW1wbGF0ZSBmaWxlLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIHJlY29yZCB3aGVyZSB0aGUga2V5IGlzIHRoZSBmaWxlIHBhdGggYW5kIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSBvZiBzdHJpbmdzXG4gICAqICAgICAgICAgIHJlcHJlc2VudGluZyB0aGUgY29udGVudCBvZiB0aGUgaXNzdWUgdGVtcGxhdGUuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGNvbmZpZ0ZpbGVDbGlmZigpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnY2xpZmYudG9tbCc6IFtcbiAgICAgICAgJ1tjaGFuZ2Vsb2ddJyxcbiAgICAgICAgJyMgY2hhbmdlbG9nIGhlYWRlcicsXG4gICAgICAgICdoZWFkZXIgPSBcIlwiXCInLFxuICAgICAgICAnIyBDaGFuZ2Vsb2dcXG4nLFxuICAgICAgICAnQWxsIG5vdGFibGUgY2hhbmdlcyB0byB0aGlzIHByb2plY3Qgd2lsbCBiZSBkb2N1bWVudGVkIGluIHRoaXMgZmlsZS5cXG4nLFxuICAgICAgICAnXCJcIlwiJyxcbiAgICAgICAgJyMgdGVtcGxhdGUgZm9yIHRoZSBjaGFuZ2Vsb2cgYm9keScsXG4gICAgICAgICcjIGh0dHBzOi8va2VhdHMuZ2l0aHViLmlvL3RlcmEvZG9jcy8jaW50cm9kdWN0aW9uJyxcbiAgICAgICAgJ2JvZHkgPSBcIlwiXCInLFxuICAgICAgICAneyUgaWYgdmVyc2lvbiAlfVxcXFwnLFxuICAgICAgICAnICAgICMjIFt7eyB2ZXJzaW9uIHwgdHJpbV9zdGFydF9tYXRjaGVzKHBhdD1cInZcIikgfX1dIC0ge3sgdGltZXN0YW1wIHwgZGF0ZShmb3JtYXQ9XCIlWS0lbS0lZFwiKSB9fScsXG4gICAgICAgICd7JSBlbHNlICV9XFxcXCcsXG4gICAgICAgICcgICAgIyMgW3VucmVsZWFzZWRdJyxcbiAgICAgICAgJ3slIGVuZGlmICV9XFxcXCcsXG4gICAgICAgICd7JSBmb3IgZ3JvdXAsIGNvbW1pdHMgaW4gY29tbWl0cyB8IGdyb3VwX2J5KGF0dHJpYnV0ZT1cImdyb3VwXCIpICV9JyxcbiAgICAgICAgJyAgICAjIyMge3sgZ3JvdXAgfCBzdHJpcHRhZ3MgfCB0cmltIHwgdXBwZXJfZmlyc3QgfX0nLFxuICAgICAgICAnICAgIHslIGZvciBjb21taXQgaW4gY29tbWl0cyAlfScsXG4gICAgICAgICcgICAgICAgIC0geyUgaWYgY29tbWl0LnNjb3BlICV9Kih7eyBjb21taXQuc2NvcGUgfX0pKiB7JSBlbmRpZiAlfScsXG4gICAgICAgICcgICAgICAgICAgICB7JSBpZiBjb21taXQuYnJlYWtpbmcgJX1bKipicmVha2luZyoqXSB7JSBlbmRpZiAlfScsXG4gICAgICAgICcgICAgICAgICAgICB7eyBjb21taXQubWVzc2FnZSB8IHVwcGVyX2ZpcnN0IH19JyxcbiAgICAgICAgJyAgICB7JSBlbmRmb3IgJX0nLFxuICAgICAgICAneyUgZW5kZm9yICV9JyxcbiAgICAgICAgJ1wiXCJcIicsXG4gICAgICAgICcjIHRlbXBsYXRlIGZvciB0aGUgY2hhbmdlbG9nIGZvb3RlcicsXG4gICAgICAgICdmb290ZXIgPSBcIlwiXCInLFxuICAgICAgICAnPCEtLSBnZW5lcmF0ZWQgYnkgZ2l0LWNsaWZmIC0tPicsXG4gICAgICAgICdcIlwiXCInLFxuICAgICAgICAnIyByZW1vdmUgdGhlIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHMnLFxuICAgICAgICAndHJpbSA9IHRydWUnLFxuICAgICAgICAnIyBwb3N0cHJvY2Vzc29ycycsXG4gICAgICAgICdwb3N0cHJvY2Vzc29ycyA9IFsnLFxuICAgICAgICAnICAjIHsgcGF0dGVybiA9IFwiPFJFUE8+XCIsIHJlcGxhY2UgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9vcmh1bi9naXQtY2xpZmZcIiB9LCAjIHJlcGxhY2UgcmVwb3NpdG9yeSBVUkwnLFxuICAgICAgICAnXScsXG4gICAgICAgICcnLFxuICAgICAgICAnW2dpdF0nLFxuICAgICAgICAnIyBwYXJzZSB0aGUgY29tbWl0cyBiYXNlZCBvbiBodHRwczovL3d3dy5jb252ZW50aW9uYWxjb21taXRzLm9yZycsXG4gICAgICAgICdjb252ZW50aW9uYWxfY29tbWl0cyA9IHRydWUnLFxuICAgICAgICAnIyBmaWx0ZXIgb3V0IHRoZSBjb21taXRzIHRoYXQgYXJlIG5vdCBjb252ZW50aW9uYWwnLFxuICAgICAgICAnZmlsdGVyX3VuY29udmVudGlvbmFsID0gdHJ1ZScsXG4gICAgICAgICcjIHByb2Nlc3MgZWFjaCBsaW5lIG9mIGEgY29tbWl0IGFzIGFuIGluZGl2aWR1YWwgY29tbWl0JyxcbiAgICAgICAgJ3NwbGl0X2NvbW1pdHMgPSBmYWxzZScsXG4gICAgICAgICcjIHJlZ2V4IGZvciBwcmVwcm9jZXNzaW5nIHRoZSBjb21taXQgbWVzc2FnZXMnLFxuICAgICAgICAnY29tbWl0X3ByZXByb2Nlc3NvcnMgPSBbJyxcbiAgICAgICAgJyAgIyBSZXBsYWNlIGlzc3VlIG51bWJlcnMnLFxuICAgICAgICAnICAjeyBwYXR0ZXJuID0gXCIoKHcrcyk/IyhbMC05XSspKVwiLCByZXBsYWNlID0gXCIoWyMkezJ9XSg8UkVQTz4vaXNzdWVzLyR7Mn0pKVwifSwnLFxuICAgICAgICAnICAjIENoZWNrIHNwZWxsaW5nIG9mIHRoZSBjb21taXQgd2l0aCBodHRwczovL2dpdGh1Yi5jb20vY3JhdGUtY2kvdHlwb3MnLFxuICAgICAgICAnICAjIElmIHRoZSBzcGVsbGluZyBpcyBpbmNvcnJlY3QsIGl0IHdpbGwgYmUgYXV0b21hdGljYWxseSBmaXhlZC4nLFxuICAgICAgICAnICAjeyBwYXR0ZXJuID0gXCIuKlwiLCByZXBsYWNlX2NvbW1hbmQgPSBcInR5cG9zIC0td3JpdGUtY2hhbmdlcyAtXCIgfSwnLFxuICAgICAgICAnXScsXG4gICAgICAgICcjIHJlZ2V4IGZvciBwYXJzaW5nIGFuZCBncm91cGluZyBjb21taXRzJyxcbiAgICAgICAgJ2NvbW1pdF9wYXJzZXJzID0gWycsXG4gICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXmZlYXRcIiwgZ3JvdXAgPSBcIjwhLS0gMCAtLT7wn5qAIEZlYXR1cmVzXCIgfSwnLFxuICAgICAgICAnICB7IG1lc3NhZ2UgPSBcIl5maXhcIiwgZ3JvdXAgPSBcIjwhLS0gMSAtLT7wn5CbIEJ1ZyBGaXhlc1wiIH0sJyxcbiAgICAgICAgJyAgeyBtZXNzYWdlID0gXCJeZG9jXCIsIGdyb3VwID0gXCI8IS0tIDMgLS0+8J+TmiBEb2N1bWVudGF0aW9uXCIgfSwnLFxuICAgICAgICAnICB7IG1lc3NhZ2UgPSBcIl5wZXJmXCIsIGdyb3VwID0gXCI8IS0tIDQgLS0+4pqhIFBlcmZvcm1hbmNlXCIgfSwnLFxuICAgICAgICAnICB7IG1lc3NhZ2UgPSBcIl5yZWZhY3RvclwiLCBncm91cCA9IFwiPCEtLSAyIC0tPvCfmpwgUmVmYWN0b3JcIiB9LCcsXG4gICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXnN0eWxlXCIsIGdyb3VwID0gXCI8IS0tIDUgLS0+8J+OqCBTdHlsaW5nXCIgfSwnLFxuICAgICAgICAnICB7IG1lc3NhZ2UgPSBcIl50ZXN0XCIsIGdyb3VwID0gXCI8IS0tIDYgLS0+8J+nqiBUZXN0aW5nXCIgfSwnLFxuICAgICAgICAnICB7IG1lc3NhZ2UgPSBcIl5jaG9yZShyZWxlYXNlKTogcHJlcGFyZSBmb3JcIiwgc2tpcCA9IHRydWUgfSwnLFxuICAgICAgICAnICB7IG1lc3NhZ2UgPSBcIl5jaG9yZShkZXBzLiopXCIsIHNraXAgPSB0cnVlIH0sJyxcbiAgICAgICAgJyAgeyBtZXNzYWdlID0gXCJeY2hvcmUocHIpXCIsIHNraXAgPSB0cnVlIH0sJyxcbiAgICAgICAgJyAgeyBtZXNzYWdlID0gXCJeY2hvcmUocHVsbClcIiwgc2tpcCA9IHRydWUgfSwnLFxuICAgICAgICAnICB7IG1lc3NhZ2UgPSBcIl5jaG9yZXxeY2lcIiwgZ3JvdXAgPSBcIjwhLS0gNyAtLT7impnvuI8gTWlzY2VsbGFuZW91cyBUYXNrc1wiIH0sJyxcbiAgICAgICAgJyAgeyBib2R5ID0gXCIuKnNlY3VyaXR5XCIsIGdyb3VwID0gXCI8IS0tIDggLS0+8J+boe+4jyBTZWN1cml0eVwiIH0sJyxcbiAgICAgICAgJyAgeyBtZXNzYWdlID0gXCJecmV2ZXJ0XCIsIGdyb3VwID0gXCI8IS0tIDkgLS0+4peA77iPIFJldmVydFwiIH0sJyxcbiAgICAgICAgJ10nLFxuICAgICAgICAnIyBwcm90ZWN0IGJyZWFraW5nIGNoYW5nZXMgZnJvbSBiZWluZyBza2lwcGVkIGR1ZSB0byBtYXRjaGluZyBhIHNraXBwaW5nIGNvbW1pdF9wYXJzZXInLFxuICAgICAgICAncHJvdGVjdF9icmVha2luZ19jb21taXRzID0gZmFsc2UnLFxuICAgICAgICAnIyBmaWx0ZXIgb3V0IHRoZSBjb21taXRzIHRoYXQgYXJlIG5vdCBtYXRjaGVkIGJ5IGNvbW1pdCBwYXJzZXJzJyxcbiAgICAgICAgJ2ZpbHRlcl9jb21taXRzID0gZmFsc2UnLFxuICAgICAgICAnIyByZWdleCBmb3IgbWF0Y2hpbmcgZ2l0IHRhZ3MnLFxuICAgICAgICAnIyB0YWdfcGF0dGVybiA9IFwidlswLTldLipcIicsXG4gICAgICAgICcjIHJlZ2V4IGZvciBza2lwcGluZyB0YWdzJyxcbiAgICAgICAgJyMgc2tpcF90YWdzID0gXCJcIicsXG4gICAgICAgICcjIHJlZ2V4IGZvciBpZ25vcmluZyB0YWdzJyxcbiAgICAgICAgJyMgaWdub3JlX3RhZ3MgPSBcIlwiJyxcbiAgICAgICAgJyMgc29ydCB0aGUgdGFncyB0b3BvbG9naWNhbGx5JyxcbiAgICAgICAgJ3RvcG9fb3JkZXIgPSBmYWxzZScsXG4gICAgICAgICcjIHNvcnQgdGhlIGNvbW1pdHMgaW5zaWRlIHNlY3Rpb25zIGJ5IG9sZGVzdC9uZXdlc3Qgb3JkZXInLFxuICAgICAgICAnc29ydF9jb21taXRzID0gXCJvbGRlc3RcIicsXG4gICAgICAgICcjIGxpbWl0IHRoZSBudW1iZXIgb2YgY29tbWl0cyBpbmNsdWRlZCBpbiB0aGUgY2hhbmdlbG9nLicsXG4gICAgICAgICcjIGxpbWl0X2NvbW1pdHMgPSA0MicsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUgcmVsZWFzZSB3b3JrZmxvdyB0ZW1wbGF0ZSBmaWxlLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIHJlY29yZCB3aGVyZSB0aGUga2V5IGlzIHRoZSBmaWxlIHBhdGggYW5kIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSBvZiBzdHJpbmdzXG4gICAqICAgICAgICAgIHJlcHJlc2VudGluZyB0aGUgY29udGVudCBvZiB0aGUgaXNzdWUgdGVtcGxhdGUuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGNvbmZpZ0ZpbGVSZWxlYXNlV29ya2Zsb3coKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5naXRodWIvd29ya2Zsb3dzL3JlbGVhc2UueW1sJzogW1xuICAgICAgICAnbmFtZTogUmVsZWFzZScsXG4gICAgICAgICdvbjonLFxuICAgICAgICAnICBwdWxsX3JlcXVlc3Q6JyxcbiAgICAgICAgJyAgICBicmFuY2hlczonLFxuICAgICAgICAnICAgICAgLSBtYWluJyxcbiAgICAgICAgJyAgICB0eXBlczonLFxuICAgICAgICAnICAgICAgLSBjbG9zZWQnLFxuICAgICAgICAnam9iczonLFxuICAgICAgICAnICByZWxlYXNlOicsXG4gICAgICAgICcgICAgcnVucy1vbjogdWJ1bnR1LWxhdGVzdCcsXG4gICAgICAgICcgICAgcGVybWlzc2lvbnM6JyxcbiAgICAgICAgJyAgICAgIGNvbnRlbnRzOiB3cml0ZScsXG4gICAgICAgICcgICAgICBwdWxsLXJlcXVlc3RzOiB3cml0ZScsXG4gICAgICAgICcgICAgc3RlcHM6JyxcbiAgICAgICAgJyAgICAgIC0gbmFtZTogQ3JlYXRlIHJlbGVhc2UnLFxuICAgICAgICAnICAgICAgICB1c2VzOiBkeGZyb250aWVyL2doLWFjdGlvbi1yZWxlYXNlQG1haW4nLFxuICAgICAgICAnICAgICAgICB3aXRoOicsXG4gICAgICAgICcgICAgICAgICAgR0lUSFVCX1RPS0VOOiAke3sgc2VjcmV0cy5HSVRIVUJfVE9LRU4gfX0nLFxuICAgICAgICAnICAgICAgICAgIEJSQU5DSDogbWFpbicsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHB1bGwgcmVxdWVzdCB0ZW1wbGF0ZSBmaWxlLlxuICAgKi9cbiAgcHVibGljIGNyZWF0ZVB1bGxSZXF1ZXN0KCk6IHZvaWQge1xuICAgIGNvbnN0IGZpbGVQYXRoOiBzdHJpbmcgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ0ZpbGVQdWxsUmVxdWVzdClbMF07XG4gICAgbmV3IFRleHRGaWxlKHRoaXMucHJvamVjdCwgZmlsZVBhdGgsIHtcbiAgICAgIGxpbmVzOiB0aGlzLmNvbmZpZ0ZpbGVQdWxsUmVxdWVzdFtmaWxlUGF0aF0sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGJ1ZyBpc3N1ZSB0ZW1wbGF0ZSBmaWxlLlxuICAgKi9cbiAgcHVibGljIGNyZWF0ZUJ1Z0lzc3VlKCk6IHZvaWQge1xuICAgIGNvbnN0IGZpbGVQYXRoOiBzdHJpbmcgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ0ZpbGVCdWdJc3N1ZSlbMF07XG4gICAgbmV3IFRleHRGaWxlKHRoaXMucHJvamVjdCwgZmlsZVBhdGgsIHtcbiAgICAgIGxpbmVzOiB0aGlzLmNvbmZpZ0ZpbGVCdWdJc3N1ZVtmaWxlUGF0aF0sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGZlYXR1cmUgcmVxdWVzdCB0ZW1wbGF0ZSBmaWxlLlxuICAgKi9cbiAgcHVibGljIGNyZWF0ZUZlYXR1cmVJc3N1ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlRmVhdHVyZUlzc3VlKVswXTtcbiAgICBuZXcgVGV4dEZpbGUodGhpcy5wcm9qZWN0LCBmaWxlUGF0aCwge1xuICAgICAgbGluZXM6IHRoaXMuY29uZmlnRmlsZUZlYXR1cmVJc3N1ZVtmaWxlUGF0aF0sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGhvdXNla2VlcGluZyBpc3N1ZSB0ZW1wbGF0ZSBmaWxlLlxuICAgKi9cbiAgcHVibGljIGNyZWF0ZUhvdXNla2VlcGluZ0lzc3VlKCk6IHZvaWQge1xuICAgIGNvbnN0IGZpbGVQYXRoOiBzdHJpbmcgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ0ZpbGVIb3VzZWtlZXBpbmdJc3N1ZSlbMF07XG4gICAgbmV3IFRleHRGaWxlKHRoaXMucHJvamVjdCwgZmlsZVBhdGgsIHtcbiAgICAgIGxpbmVzOiB0aGlzLmNvbmZpZ0ZpbGVIb3VzZWtlZXBpbmdJc3N1ZVtmaWxlUGF0aF0sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHF1ZXN0aW9uIGlzc3VlIHRlbXBsYXRlIGZpbGUuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlUXVlc3Rpb25Jc3N1ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlUXVlc3Rpb25Jc3N1ZSlbMF07XG4gICAgbmV3IFRleHRGaWxlKHRoaXMucHJvamVjdCwgZmlsZVBhdGgsIHtcbiAgICAgIGxpbmVzOiB0aGlzLmNvbmZpZ0ZpbGVRdWVzdGlvbklzc3VlW2ZpbGVQYXRoXSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgdGhlIGdpdCBjbGlmZiB0ZW1wbGF0ZSBmaWxlLlxuICAgKi9cbiAgcHVibGljIGNyZWF0ZUNsaWZmKCk6IHZvaWQge1xuICAgIGNvbnN0IGZpbGVQYXRoOiBzdHJpbmcgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ0ZpbGVDbGlmZilbMF07XG4gICAgbmV3IFRleHRGaWxlKHRoaXMucHJvamVjdCwgZmlsZVBhdGgsIHtcbiAgICAgIGxpbmVzOiB0aGlzLmNvbmZpZ0ZpbGVDbGlmZltmaWxlUGF0aF0sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHJlbGVhc2Ugd29ya2Zsb3cgdGVtcGxhdGUgZmlsZS5cbiAgICovXG4gIHB1YmxpYyBjcmVhdGVSZWxlYXNlV29ya2Zsb3coKTogdm9pZCB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZVJlbGVhc2VXb3JrZmxvdylbMF07XG4gICAgbmV3IFRleHRGaWxlKHRoaXMucHJvamVjdCwgZmlsZVBhdGgsIHtcbiAgICAgIGxpbmVzOiB0aGlzLmNvbmZpZ0ZpbGVSZWxlYXNlV29ya2Zsb3dbZmlsZVBhdGhdLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgY3VzdG9tIGF0dHJpYnV0ZXMgcGF0dGVybnMgdG8gdGhlIHByb2plY3QncyBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gcGF0dGVybnMgLSBBbiBhcnJheSBvZiBmaWxlIG9yIGRpcmVjdG9yeSBwYXR0ZXJucyB0byBiZSBhZGRlZCBhcyBhdHRyaWJ1dGVzLlxuICAgKi9cbiAgcHVibGljIGFkZEF0dHJpYnV0ZVBhdHRlcm5zKHBhdHRlcm5zOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIHRoaXMuYXR0cmlidXRlUGF0dGVybnMgPSBbLi4udGhpcy5hdHRyaWJ1dGVQYXR0ZXJucywgLi4ucGF0dGVybnNdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSBsaXN0IG9mIGFsbCByZWxldmFudCBjb25maWcgZmlsZXMuXG4gICAqIEByZXR1cm5zIExpc3Qgb2YgY29uZmlnc1xuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBjb25maWdzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPltdIHtcbiAgICByZXR1cm4gW1xuICAgICAgdGhpcy5jb25maWdGaWxlUHVsbFJlcXVlc3QsXG4gICAgICB0aGlzLmNvbmZpZ0ZpbGVCdWdJc3N1ZSxcbiAgICAgIHRoaXMuY29uZmlnRmlsZUZlYXR1cmVJc3N1ZSxcbiAgICAgIHRoaXMuY29uZmlnRmlsZUhvdXNla2VlcGluZ0lzc3VlLFxuICAgICAgdGhpcy5jb25maWdGaWxlUXVlc3Rpb25Jc3N1ZSxcbiAgICAgIHRoaXMuY29uZmlnRmlsZUNsaWZmLFxuICAgICAgdGhpcy5jb25maWdGaWxlUmVsZWFzZVdvcmtmbG93LFxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBmaWxlIHBhdGhzIGZvciBhbGwgZHluYW1pYyBhbmQgc3RhdGljIGNvbmZpZ3VyYXRpb24gZmlsZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgbGlzdCBvZiBmaWxlIHBhdGggcGF0dGVybnMsIGluY2x1ZGluZyBkeW5hbWljIGNvbmZpZ3VyYXRpb25zIGFuZCBzdGF0aWMgZmlsZXMgbGlrZSBgLmdpdGF0dHJpYnV0ZXNgIGFuZCBgLmdpdGlnbm9yZWAuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGZpbGVQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZHluYW1pY0ZpbGVQYXRoczogc3RyaW5nW10gPSB0aGlzLmNvbmZpZ3NcbiAgICAgIC5tYXAoKGNvbmZpZzogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+KTogc3RyaW5nID0+IGAvJHtPYmplY3Qua2V5cyhjb25maWcpWzBdfWApXG4gICAgICAuZmlsdGVyKChmaWxlUGF0aDogc3RyaW5nKTogc3RyaW5nID0+IGZpbGVQYXRoKTtcbiAgICBjb25zdCBzdGF0aWNGaWxlUGF0aHM6IHN0cmluZ1tdID0gWycvLmdpdGF0dHJpYnV0ZXMnLCAnLy5naXRpZ25vcmUnXTtcblxuICAgIHJldHVybiBbLi4uZHluYW1pY0ZpbGVQYXRocywgLi4uc3RhdGljRmlsZVBhdGhzXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBwYXR0ZXJuczogc3RyaW5nW10gPSBbLi4udGhpcy5maWxlUGF0dGVybnMsICcvQ0hBTkdFTE9HLm1kJ107XG5cbiAgICByZXR1cm4gcGF0dGVybnM7XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxBdHRyaWJ1dGVzUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJ0NIQU5HRUxPRy5tZCddO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHJlZ2lzdGVyQ29uZmlnKCk6IHZvaWQge1xuICAgIGlmICh1dGlsLmlzVmFsaWRQcm9qZWN0KHRoaXMucHJvamVjdCkpIHtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5wcmV0dGllckNvbmZpZz8uYWRkSWdub3JlUGF0dGVybnModGhpcy5hZGRpdGlvbmFsSWdub3JlUGF0dGVybnMpO1xuICAgIH1cbiAgICB0aGlzLmFkZEF0dHJpYnV0ZVBhdHRlcm5zKHRoaXMuYWRkaXRpb25hbEF0dHJpYnV0ZXNQYXR0ZXJucyk7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgYXBwbHlDb25maWcoKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVQdWxsUmVxdWVzdCgpO1xuICAgIHRoaXMuY3JlYXRlQnVnSXNzdWUoKTtcbiAgICB0aGlzLmNyZWF0ZUZlYXR1cmVJc3N1ZSgpO1xuICAgIHRoaXMuY3JlYXRlSG91c2VrZWVwaW5nSXNzdWUoKTtcbiAgICB0aGlzLmNyZWF0ZVF1ZXN0aW9uSXNzdWUoKTtcbiAgICB0aGlzLmNyZWF0ZUNsaWZmKCk7XG4gICAgdGhpcy5jcmVhdGVSZWxlYXNlV29ya2Zsb3coKTtcblxuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdGhpcy5hdHRyaWJ1dGVQYXR0ZXJucykge1xuICAgICAgdGhpcy5wcm9qZWN0LmdpdGF0dHJpYnV0ZXMuYWRkQXR0cmlidXRlcyhgLyR7dmFsdWV9YCwgJ2xpbmd1aXN0LWdlbmVyYXRlZCcpO1xuICAgIH1cbiAgfVxufVxuIl19
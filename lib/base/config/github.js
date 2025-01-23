"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubConfigBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const config_1 = require("../config");
const utils_1 = require("../../utils");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Jhc2UvY29uZmlnL2dpdGh1Yi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFrQztBQUNsQyxzQ0FBbUM7QUFFbkMsdUNBQTZDO0FBRTdDOzs7O0dBSUc7QUFDSCxNQUFhLGdCQUFpQixTQUFRLGVBQU07SUFHMUMsWUFBWSxPQUFxQjtRQUMvQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFZixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDO0lBQzNELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYywwQkFBMEI7UUFDdEMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxJQUFjLHFCQUFxQjtRQUNqQyxPQUFPO1lBQ0wsa0NBQWtDLEVBQUU7Z0JBQ2xDLHdCQUF3QjtnQkFDeEIsRUFBRTtnQkFDRiw2REFBNkQ7Z0JBQzdELEVBQUU7Z0JBQ0YsNEJBQTRCO2dCQUM1QixFQUFFO2dCQUNGLG1EQUFtRDtnQkFDbkQsa0NBQWtDO2dCQUNsQyxtREFBbUQ7Z0JBQ25ELDhDQUE4QztnQkFDOUMsRUFBRTtnQkFDRixlQUFlO2dCQUNmLEVBQUU7Z0JBQ0YsNEdBQTRHO2dCQUM1RyxrR0FBa0c7Z0JBQ2xHLHlGQUF5RjtnQkFDekYsaUVBQWlFO2dCQUNqRSwwQ0FBMEM7Z0JBQzFDLEVBQUU7Z0JBQ0YsYUFBYTtnQkFDYixFQUFFO2dCQUNGLDJEQUEyRDtnQkFDM0QseUNBQXlDO2FBQzFDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILElBQWMsa0JBQWtCO1FBQzlCLE9BQU87WUFDTCxnQ0FBZ0MsRUFBRTtnQkFDaEMsY0FBYztnQkFDZCwrQkFBK0I7Z0JBQy9CLHdCQUF3QjtnQkFDeEIsdUJBQXVCO2dCQUN2QixPQUFPO2dCQUNQLG9CQUFvQjtnQkFDcEIsaUJB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RSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUU3QixLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDOUUsQ0FBQztJQUNILENBQUM7O0FBeGJILDRDQXliQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHRGaWxlIH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBQcm9qZWN0VHlwZXMgfSBmcm9tICcuLi8uLi90eXBlcy9wcm9qZWN0JztcbmltcG9ydCB7IGlzVmFsaWRQcm9qZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgR2l0SHViIGNvbmZpZ3VyYXRpb24uXG4gKlxuICogVGhpcyBjbGFzcyBhY3RzIGFzIGEgYmFzZSBmb3IgaGFuZGxpbmcgR2l0SHViIGNvbmZpZ3VyYXRpb24gd2l0aGluIHByb2plY3RzLlxuICovXG5leHBvcnQgY2xhc3MgR2l0SHViQ29uZmlnQmFzZSBleHRlbmRzIENvbmZpZyB7XG4gIHByb3RlY3RlZCBhdHRyaWJ1dGVQYXR0ZXJuczogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IocHJvamVjdDogUHJvamVjdFR5cGVzKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG5cbiAgICB0aGlzLmF0dHJpYnV0ZVBhdHRlcm5zID0gdGhpcy5zdGFuZGFyZEF0dHJpYnV0ZXNQYXR0ZXJucztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBzdGFuZGFyZCBhdHRyaWJ1dGVzIHBhdHRlcm5zIHJlcXVpcmVkIGZvciBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGxpc3Qgb2YgYXR0cmlidXRlcyBwYXR0ZXJucy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc3RhbmRhcmRBdHRyaWJ1dGVzUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBwdWxsIHJlcXVlc3QgdGVtcGxhdGUgZmlsZS5cbiAgICpcbiAgICogQHJldHVybnMgQSByZWNvcmQgd2hlcmUgdGhlIGtleSBpcyB0aGUgZmlsZSBwYXRoIGFuZCB0aGUgdmFsdWUgaXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgKiAgICAgICAgICByZXByZXNlbnRpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIGlzc3VlIHRlbXBsYXRlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBjb25maWdGaWxlUHVsbFJlcXVlc3QoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5naXRodWIvcHVsbF9yZXF1ZXN0X3RlbXBsYXRlLm1kJzogW1xuICAgICAgICAnIyMgUmV2aWV3ZXJzIENoZWNrbGlzdCcsXG4gICAgICAgICcnLFxuICAgICAgICAnZm9yIGNvbXBsZXRlIHJldmlldyBsaXN0IHJlZmVyIHRvIEFCUyBMb29wIC0gUmV2aWV3IEFzcGVjdHMnLFxuICAgICAgICAnJyxcbiAgICAgICAgJyMjIyBPcmdhbml6YXRpb25hbCBTZWN0aW9uJyxcbiAgICAgICAgJycsXG4gICAgICAgICctIFsgXSBQUiBpcyBhc3NpZ25lZCB0byB0aGUgYWNjb3JkaW5nIGZlYXR1cmUvYnVnJyxcbiAgICAgICAgJy0gWyBdIEZlYXR1cmUvYnVnIGlzIGRlc2NyaXB0aXZlJyxcbiAgICAgICAgJy0gWyBdIEZlYXR1cmUvYnVnIGlzIGFzc2lnbmVkIHRvIGFjY29yZGluZyBsYWJlbHMnLFxuICAgICAgICAnLSBbIF0gRmVhdHVyZS9idWcgaXMgYXNzaWduZWQgdG8gYSBkZXZlbG9wZXInLFxuICAgICAgICAnJyxcbiAgICAgICAgJyMjIyBTdHJ1Y3R1cmUnLFxuICAgICAgICAnJyxcbiAgICAgICAgJy0gWyBdIFJlYWRhYmlsaXR5OiBDb2RlIGlzIGVhc3kgdG8gdW5kZXJzdGFuZCwgd2l0aCBtZWFuaW5nZnVsIG5hbWVzIGZvciB2YXJpYWJsZXMsIGZ1bmN0aW9ucywgYW5kIGNsYXNzZXMnLFxuICAgICAgICAnLSBbIF0gQ29tbWVudHM6IE1lYW5pbmdmdWwgYW5kIGhlbHBmdWwgY29tbWVudHMuIENvZGUgaXMgZG9jdW1lbnRlZCB3aXRob3V0IGJlaW5nIG92ZXItY29tbWVudGVkJyxcbiAgICAgICAgJy0gWyBdIERSWSwgS0lTUyBhbmQgWUFHTkk6IENvZGUgaW1wbGVtZW50cyBvbmx5IG5lY2Vzc2FyeSBmZWF0dXJlczsgbm8gb3Zlci1lbmdpbmVlcmluZycsXG4gICAgICAgICctIFsgXSBObyBzZW5zaXRpdmUgZGF0YSAoZS5nLiwgcGFzc3dvcmRzLCBBUEkga2V5cykgaW4gdGhlIGNvZGUnLFxuICAgICAgICAnLSBbIF0gTm8gbWFqb3IgdXBkYXRlcyBmb3IgdXNlZCBwYWNrYWdlcycsXG4gICAgICAgICcnLFxuICAgICAgICAnIyMjIFRlc3RpbmcnLFxuICAgICAgICAnJyxcbiAgICAgICAgJy0gWyBdIENvZGUgaXMgbG9jYWxseSB0ZXN0ZWQgYnkgZGV2ZWxvcGVyIChpZiBhcHBsaWNhYmxlKScsXG4gICAgICAgICctIFsgXSBBdXRvbWF0ZWQgdGVzdHMgcGFzcyBzdWNjZXNzZnVsbHknLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIGJ1ZyBpc3N1ZSB0ZW1wbGF0ZSBmaWxlLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIHJlY29yZCB3aGVyZSB0aGUga2V5IGlzIHRoZSBmaWxlIHBhdGggYW5kIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSBvZiBzdHJpbmdzXG4gICAqICAgICAgICAgIHJlcHJlc2VudGluZyB0aGUgY29udGVudCBvZiB0aGUgaXNzdWUgdGVtcGxhdGUuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGNvbmZpZ0ZpbGVCdWdJc3N1ZSgpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnLmdpdGh1Yi9JU1NVRV9URU1QTEFURS9idWcueW1sJzogW1xuICAgICAgICAnbmFtZTog8J+QniBCdWcnLFxuICAgICAgICAnZGVzY3JpcHRpb246IEZpbGUgYSBidWcvaXNzdWUnLFxuICAgICAgICAndGl0bGU6IFwiW0JVR10gPHRpdGxlPlwiJyxcbiAgICAgICAgJ2xhYmVsczogW1widHlwZTogYnVnXCJdJyxcbiAgICAgICAgJ2JvZHk6JyxcbiAgICAgICAgJyAgLSB0eXBlOiB0ZXh0YXJlYScsXG4gICAgICAgICcgICAgYXR0cmlidXRlczonLFxuICAgICAgICAnICAgICAgbGFiZWw6IEN1cnJlbnQgYmVoYXZpb3InLFxuICAgICAgICBcIiAgICAgIGRlc2NyaXB0aW9uOiBBIGRlc2NyaXB0aW9uIG9mIHdoYXQgeW91J3JlIGV4cGVyaWVuY2luZy5cIixcbiAgICAgICAgJyAgICB2YWxpZGF0aW9uczonLFxuICAgICAgICAnICAgICAgcmVxdWlyZWQ6IHRydWUnLFxuICAgICAgICAnJyxcbiAgICAgICAgJyAgLSB0eXBlOiB0ZXh0YXJlYScsXG4gICAgICAgICcgICAgYXR0cmlidXRlczonLFxuICAgICAgICAnICAgICAgbGFiZWw6IEV4cGVjdGVkIGJlaGF2aW9yJyxcbiAgICAgICAgJyAgICAgIGRlc2NyaXB0aW9uOiBBIGRlc2NyaXB0aW9uIG9mIHdoYXQgeW91IGV4cGVjdGVkIHRvIGhhcHBlbi4nLFxuICAgICAgICAnICAgIHZhbGlkYXRpb25zOicsXG4gICAgICAgICcgICAgICByZXF1aXJlZDogdHJ1ZScsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUgZmVhdHVyZSByZXF1ZXN0IHRlbXBsYXRlIGZpbGUuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgcmVjb3JkIHdoZXJlIHRoZSBrZXkgaXMgdGhlIGZpbGUgcGF0aCBhbmQgdGhlIHZhbHVlIGlzIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAgICogICAgICAgICAgcmVwcmVzZW50aW5nIHRoZSBjb250ZW50IG9mIHRoZSBpc3N1ZSB0ZW1wbGF0ZS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZUZlYXR1cmVJc3N1ZSgpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnLmdpdGh1Yi9JU1NVRV9URU1QTEFURS9mZWF0dXJlLnltbCc6IFtcbiAgICAgICAgJ25hbWU6IPCfkqEgRmVhdHVyZScsXG4gICAgICAgICdkZXNjcmlwdGlvbjogUmVxdWVzdCBmb3IgYSBuZXcgZmVhdHVyZScsXG4gICAgICAgICd0aXRsZTogXCJbRkVBVFVSRV0gPHRpdGxlPlwiJyxcbiAgICAgICAgJ2xhYmVsczogW1widHlwZTogZmVhdHVyZVwiXScsXG4gICAgICAgICdib2R5OicsXG4gICAgICAgICcgIC0gdHlwZTogdGV4dGFyZWEnLFxuICAgICAgICAnICAgIGF0dHJpYnV0ZXM6JyxcbiAgICAgICAgJyAgICAgIGxhYmVsOiBEZXNjcmlwdGlvbicsXG4gICAgICAgICcgICAgICBkZXNjcmlwdGlvbjogQSBkZXNjcmlwdGlvbiBvZiB0aGUgZmVhdHVyZS4nLFxuICAgICAgICAnICAgIHZhbGlkYXRpb25zOicsXG4gICAgICAgICcgICAgICByZXF1aXJlZDogdHJ1ZScsXG4gICAgICAgICcnLFxuICAgICAgICAnICAtIHR5cGU6IHRleHRhcmVhJyxcbiAgICAgICAgJyAgICBhdHRyaWJ1dGVzOicsXG4gICAgICAgICcgICAgICBsYWJlbDogVGFzayBMaXN0JyxcbiAgICAgICAgJyAgICAgIGRlc2NyaXB0aW9uOiBEZXNjcmliZSB0aGUgc3RlcHMgdG8gZnVsZmlsbCB0aGUgZmVhdHVyZS4nLFxuICAgICAgICAnICAgICAgdmFsdWU6IHwnLFxuICAgICAgICAnICAgICAgICAtIFsgXSBNeSBGaXJzdCBUYXNrJyxcbiAgICAgICAgJyAgICB2YWxpZGF0aW9uczonLFxuICAgICAgICAnICAgICAgcmVxdWlyZWQ6IHRydWUnLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIGhvdXNla2VlcGluZyBpc3N1ZSB0ZW1wbGF0ZSBmaWxlLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIHJlY29yZCB3aGVyZSB0aGUga2V5IGlzIHRoZSBmaWxlIHBhdGggYW5kIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSBvZiBzdHJpbmdzXG4gICAqICAgICAgICAgIHJlcHJlc2VudGluZyB0aGUgY29udGVudCBvZiB0aGUgaXNzdWUgdGVtcGxhdGUuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGNvbmZpZ0ZpbGVIb3VzZWtlZXBpbmdJc3N1ZSgpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnLmdpdGh1Yi9JU1NVRV9URU1QTEFURS9ob3VzZWtlZXBpbmcueW1sJzogW1xuICAgICAgICAnbmFtZTog8J+SoSBIb3VzZWtlZXBpbmcnLFxuICAgICAgICAnZGVzY3JpcHRpb246IE1haW50ZW5hbmNlIG9yIHJlZmFjdG9yaW5nIHRhc2snLFxuICAgICAgICAndGl0bGU6IFwiW0hPVVNFS0VFUElOR10gPHRpdGxlPlwiJyxcbiAgICAgICAgJ2xhYmVsczogW1widHlwZTogaG91c2VrZWVwaW5nXCJdJyxcbiAgICAgICAgJ2JvZHk6JyxcbiAgICAgICAgJyAgLSB0eXBlOiB0ZXh0YXJlYScsXG4gICAgICAgICcgICAgYXR0cmlidXRlczonLFxuICAgICAgICAnICAgICAgbGFiZWw6IERlc2NyaXB0aW9uJyxcbiAgICAgICAgJyAgICAgIGRlc2NyaXB0aW9uOiBBIGRlc2NyaXB0aW9uIG9mIHRoZSBob3VzZWtlZXBpbmcgdGFzay4nLFxuICAgICAgICAnICAgIHZhbGlkYXRpb25zOicsXG4gICAgICAgICcgICAgICByZXF1aXJlZDogdHJ1ZScsXG4gICAgICAgICcnLFxuICAgICAgICAnICAtIHR5cGU6IHRleHRhcmVhJyxcbiAgICAgICAgJyAgICBhdHRyaWJ1dGVzOicsXG4gICAgICAgICcgICAgICBsYWJlbDogVGFzayBMaXN0JyxcbiAgICAgICAgJyAgICAgIGRlc2NyaXB0aW9uOiBEZXNjcmliZSB0aGUgc3RlcHMgdG8gZnVsZmlsbCB0aGUgaG91c2VrZWVwaW5nIHRhc2suJyxcbiAgICAgICAgJyAgICAgIHZhbHVlOiB8JyxcbiAgICAgICAgJyAgICAgICAgLSBbIF0gTXkgRmlyc3QgVGFzaycsXG4gICAgICAgICcgICAgdmFsaWRhdGlvbnM6JyxcbiAgICAgICAgJyAgICAgIHJlcXVpcmVkOiB0cnVlJyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBxdWVzdGlvbiBpc3N1ZSB0ZW1wbGF0ZSBmaWxlLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIHJlY29yZCB3aGVyZSB0aGUga2V5IGlzIHRoZSBmaWxlIHBhdGggYW5kIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSBvZiBzdHJpbmdzXG4gICAqICAgICAgICAgIHJlcHJlc2VudGluZyB0aGUgY29udGVudCBvZiB0aGUgaXNzdWUgdGVtcGxhdGUuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGNvbmZpZ0ZpbGVRdWVzdGlvbklzc3VlKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuZ2l0aHViL0lTU1VFX1RFTVBMQVRFL3F1ZXN0aW9uLnltbCc6IFtcbiAgICAgICAgJ25hbWU6IOKdkyBRdWVzdGlvbicsXG4gICAgICAgICdkZXNjcmlwdGlvbjogQXNrIGEgcXVlc3Rpb24nLFxuICAgICAgICAndGl0bGU6IFwiW1FVRVNUSU9OXSA8dGl0bGU+XCInLFxuICAgICAgICAnbGFiZWxzOiBbXCJ0eXBlOiBxdWVzdGlvblwiXScsXG4gICAgICAgICdib2R5OicsXG4gICAgICAgICcgIC0gdHlwZTogdGV4dGFyZWEnLFxuICAgICAgICAnICAgIGF0dHJpYnV0ZXM6JyxcbiAgICAgICAgJyAgICAgIGxhYmVsOiBRdWVzdGlvbicsXG4gICAgICAgICcgICAgICBkZXNjcmlwdGlvbjogV2hhdCB3b3VsZCB5b3UgbGlrZSB0byBrbm93PyBJZiB5b3UgZW5jb3VudGVyIHVudXN1YWwgYmVoYXZpb3Igb3IgaWRlbnRpZmllZCBhIG1pc3NpbmcgZmVhdHVyZSwgY29uc2lkZXIgb3BlbmluZyBhIGJ1ZyByZXBvcnQgaW5zdGVhZC4nLFxuICAgICAgICAnICAgIHZhbGlkYXRpb25zOicsXG4gICAgICAgICcgICAgICByZXF1aXJlZDogdHJ1ZScsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUgZ2l0IGNsaWZmIHRlbXBsYXRlIGZpbGUuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgcmVjb3JkIHdoZXJlIHRoZSBrZXkgaXMgdGhlIGZpbGUgcGF0aCBhbmQgdGhlIHZhbHVlIGlzIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAgICogICAgICAgICAgcmVwcmVzZW50aW5nIHRoZSBjb250ZW50IG9mIHRoZSBpc3N1ZSB0ZW1wbGF0ZS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZUNsaWZmKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdjbGlmZi50b21sJzogW1xuICAgICAgICAnW2NoYW5nZWxvZ10nLFxuICAgICAgICAnIyBjaGFuZ2Vsb2cgaGVhZGVyJyxcbiAgICAgICAgJ2hlYWRlciA9IFwiXCJcIicsXG4gICAgICAgICcjIENoYW5nZWxvZ1xcbicsXG4gICAgICAgICdBbGwgbm90YWJsZSBjaGFuZ2VzIHRvIHRoaXMgcHJvamVjdCB3aWxsIGJlIGRvY3VtZW50ZWQgaW4gdGhpcyBmaWxlLlxcbicsXG4gICAgICAgICdcIlwiXCInLFxuICAgICAgICAnIyB0ZW1wbGF0ZSBmb3IgdGhlIGNoYW5nZWxvZyBib2R5JyxcbiAgICAgICAgJyMgaHR0cHM6Ly9rZWF0cy5naXRodWIuaW8vdGVyYS9kb2NzLyNpbnRyb2R1Y3Rpb24nLFxuICAgICAgICAnYm9keSA9IFwiXCJcIicsXG4gICAgICAgICd7JSBpZiB2ZXJzaW9uICV9XFxcXCcsXG4gICAgICAgICcgICAgIyMgW3t7IHZlcnNpb24gfCB0cmltX3N0YXJ0X21hdGNoZXMocGF0PVwidlwiKSB9fV0gLSB7eyB0aW1lc3RhbXAgfCBkYXRlKGZvcm1hdD1cIiVZLSVtLSVkXCIpIH19JyxcbiAgICAgICAgJ3slIGVsc2UgJX1cXFxcJyxcbiAgICAgICAgJyAgICAjIyBbdW5yZWxlYXNlZF0nLFxuICAgICAgICAneyUgZW5kaWYgJX1cXFxcJyxcbiAgICAgICAgJ3slIGZvciBncm91cCwgY29tbWl0cyBpbiBjb21taXRzIHwgZ3JvdXBfYnkoYXR0cmlidXRlPVwiZ3JvdXBcIikgJX0nLFxuICAgICAgICAnICAgICMjIyB7eyBncm91cCB8IHN0cmlwdGFncyB8IHRyaW0gfCB1cHBlcl9maXJzdCB9fScsXG4gICAgICAgICcgICAgeyUgZm9yIGNvbW1pdCBpbiBjb21taXRzICV9JyxcbiAgICAgICAgJyAgICAgICAgLSB7JSBpZiBjb21taXQuc2NvcGUgJX0qKHt7IGNvbW1pdC5zY29wZSB9fSkqIHslIGVuZGlmICV9JyxcbiAgICAgICAgJyAgICAgICAgICAgIHslIGlmIGNvbW1pdC5icmVha2luZyAlfVsqKmJyZWFraW5nKipdIHslIGVuZGlmICV9JyxcbiAgICAgICAgJyAgICAgICAgICAgIHt7IGNvbW1pdC5tZXNzYWdlIHwgdXBwZXJfZmlyc3QgfX0nLFxuICAgICAgICAnICAgIHslIGVuZGZvciAlfScsXG4gICAgICAgICd7JSBlbmRmb3IgJX0nLFxuICAgICAgICAnXCJcIlwiJyxcbiAgICAgICAgJyMgdGVtcGxhdGUgZm9yIHRoZSBjaGFuZ2Vsb2cgZm9vdGVyJyxcbiAgICAgICAgJ2Zvb3RlciA9IFwiXCJcIicsXG4gICAgICAgICc8IS0tIGdlbmVyYXRlZCBieSBnaXQtY2xpZmYgLS0+JyxcbiAgICAgICAgJ1wiXCJcIicsXG4gICAgICAgICcjIHJlbW92ZSB0aGUgbGVhZGluZyBhbmQgdHJhaWxpbmcgcycsXG4gICAgICAgICd0cmltID0gdHJ1ZScsXG4gICAgICAgICcjIHBvc3Rwcm9jZXNzb3JzJyxcbiAgICAgICAgJ3Bvc3Rwcm9jZXNzb3JzID0gWycsXG4gICAgICAgICcgICMgeyBwYXR0ZXJuID0gXCI8UkVQTz5cIiwgcmVwbGFjZSA9IFwiaHR0cHM6Ly9naXRodWIuY29tL29yaHVuL2dpdC1jbGlmZlwiIH0sICMgcmVwbGFjZSByZXBvc2l0b3J5IFVSTCcsXG4gICAgICAgICddJyxcbiAgICAgICAgJycsXG4gICAgICAgICdbZ2l0XScsXG4gICAgICAgICcjIHBhcnNlIHRoZSBjb21taXRzIGJhc2VkIG9uIGh0dHBzOi8vd3d3LmNvbnZlbnRpb25hbGNvbW1pdHMub3JnJyxcbiAgICAgICAgJ2NvbnZlbnRpb25hbF9jb21taXRzID0gdHJ1ZScsXG4gICAgICAgICcjIGZpbHRlciBvdXQgdGhlIGNvbW1pdHMgdGhhdCBhcmUgbm90IGNvbnZlbnRpb25hbCcsXG4gICAgICAgICdmaWx0ZXJfdW5jb252ZW50aW9uYWwgPSB0cnVlJyxcbiAgICAgICAgJyMgcHJvY2VzcyBlYWNoIGxpbmUgb2YgYSBjb21taXQgYXMgYW4gaW5kaXZpZHVhbCBjb21taXQnLFxuICAgICAgICAnc3BsaXRfY29tbWl0cyA9IGZhbHNlJyxcbiAgICAgICAgJyMgcmVnZXggZm9yIHByZXByb2Nlc3NpbmcgdGhlIGNvbW1pdCBtZXNzYWdlcycsXG4gICAgICAgICdjb21taXRfcHJlcHJvY2Vzc29ycyA9IFsnLFxuICAgICAgICAnICAjIFJlcGxhY2UgaXNzdWUgbnVtYmVycycsXG4gICAgICAgICcgICN7IHBhdHRlcm4gPSBcIigodytzKT8jKFswLTldKykpXCIsIHJlcGxhY2UgPSBcIihbIyR7Mn1dKDxSRVBPPi9pc3N1ZXMvJHsyfSkpXCJ9LCcsXG4gICAgICAgICcgICMgQ2hlY2sgc3BlbGxpbmcgb2YgdGhlIGNvbW1pdCB3aXRoIGh0dHBzOi8vZ2l0aHViLmNvbS9jcmF0ZS1jaS90eXBvcycsXG4gICAgICAgICcgICMgSWYgdGhlIHNwZWxsaW5nIGlzIGluY29ycmVjdCwgaXQgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGZpeGVkLicsXG4gICAgICAgICcgICN7IHBhdHRlcm4gPSBcIi4qXCIsIHJlcGxhY2VfY29tbWFuZCA9IFwidHlwb3MgLS13cml0ZS1jaGFuZ2VzIC1cIiB9LCcsXG4gICAgICAgICddJyxcbiAgICAgICAgJyMgcmVnZXggZm9yIHBhcnNpbmcgYW5kIGdyb3VwaW5nIGNvbW1pdHMnLFxuICAgICAgICAnY29tbWl0X3BhcnNlcnMgPSBbJyxcbiAgICAgICAgJyAgeyBtZXNzYWdlID0gXCJeZmVhdFwiLCBncm91cCA9IFwiPCEtLSAwIC0tPvCfmoAgRmVhdHVyZXNcIiB9LCcsXG4gICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXmZpeFwiLCBncm91cCA9IFwiPCEtLSAxIC0tPvCfkJsgQnVnIEZpeGVzXCIgfSwnLFxuICAgICAgICAnICB7IG1lc3NhZ2UgPSBcIl5kb2NcIiwgZ3JvdXAgPSBcIjwhLS0gMyAtLT7wn5OaIERvY3VtZW50YXRpb25cIiB9LCcsXG4gICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXnBlcmZcIiwgZ3JvdXAgPSBcIjwhLS0gNCAtLT7imqEgUGVyZm9ybWFuY2VcIiB9LCcsXG4gICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXnJlZmFjdG9yXCIsIGdyb3VwID0gXCI8IS0tIDIgLS0+8J+anCBSZWZhY3RvclwiIH0sJyxcbiAgICAgICAgJyAgeyBtZXNzYWdlID0gXCJec3R5bGVcIiwgZ3JvdXAgPSBcIjwhLS0gNSAtLT7wn46oIFN0eWxpbmdcIiB9LCcsXG4gICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXnRlc3RcIiwgZ3JvdXAgPSBcIjwhLS0gNiAtLT7wn6eqIFRlc3RpbmdcIiB9LCcsXG4gICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXmNob3JlKHJlbGVhc2UpOiBwcmVwYXJlIGZvclwiLCBza2lwID0gdHJ1ZSB9LCcsXG4gICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXmNob3JlKGRlcHMuKilcIiwgc2tpcCA9IHRydWUgfSwnLFxuICAgICAgICAnICB7IG1lc3NhZ2UgPSBcIl5jaG9yZShwcilcIiwgc2tpcCA9IHRydWUgfSwnLFxuICAgICAgICAnICB7IG1lc3NhZ2UgPSBcIl5jaG9yZShwdWxsKVwiLCBza2lwID0gdHJ1ZSB9LCcsXG4gICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXmNob3JlfF5jaVwiLCBncm91cCA9IFwiPCEtLSA3IC0tPuKame+4jyBNaXNjZWxsYW5lb3VzIFRhc2tzXCIgfSwnLFxuICAgICAgICAnICB7IGJvZHkgPSBcIi4qc2VjdXJpdHlcIiwgZ3JvdXAgPSBcIjwhLS0gOCAtLT7wn5uh77iPIFNlY3VyaXR5XCIgfSwnLFxuICAgICAgICAnICB7IG1lc3NhZ2UgPSBcIl5yZXZlcnRcIiwgZ3JvdXAgPSBcIjwhLS0gOSAtLT7il4DvuI8gUmV2ZXJ0XCIgfSwnLFxuICAgICAgICAnXScsXG4gICAgICAgICcjIHByb3RlY3QgYnJlYWtpbmcgY2hhbmdlcyBmcm9tIGJlaW5nIHNraXBwZWQgZHVlIHRvIG1hdGNoaW5nIGEgc2tpcHBpbmcgY29tbWl0X3BhcnNlcicsXG4gICAgICAgICdwcm90ZWN0X2JyZWFraW5nX2NvbW1pdHMgPSBmYWxzZScsXG4gICAgICAgICcjIGZpbHRlciBvdXQgdGhlIGNvbW1pdHMgdGhhdCBhcmUgbm90IG1hdGNoZWQgYnkgY29tbWl0IHBhcnNlcnMnLFxuICAgICAgICAnZmlsdGVyX2NvbW1pdHMgPSBmYWxzZScsXG4gICAgICAgICcjIHJlZ2V4IGZvciBtYXRjaGluZyBnaXQgdGFncycsXG4gICAgICAgICcjIHRhZ19wYXR0ZXJuID0gXCJ2WzAtOV0uKlwiJyxcbiAgICAgICAgJyMgcmVnZXggZm9yIHNraXBwaW5nIHRhZ3MnLFxuICAgICAgICAnIyBza2lwX3RhZ3MgPSBcIlwiJyxcbiAgICAgICAgJyMgcmVnZXggZm9yIGlnbm9yaW5nIHRhZ3MnLFxuICAgICAgICAnIyBpZ25vcmVfdGFncyA9IFwiXCInLFxuICAgICAgICAnIyBzb3J0IHRoZSB0YWdzIHRvcG9sb2dpY2FsbHknLFxuICAgICAgICAndG9wb19vcmRlciA9IGZhbHNlJyxcbiAgICAgICAgJyMgc29ydCB0aGUgY29tbWl0cyBpbnNpZGUgc2VjdGlvbnMgYnkgb2xkZXN0L25ld2VzdCBvcmRlcicsXG4gICAgICAgICdzb3J0X2NvbW1pdHMgPSBcIm9sZGVzdFwiJyxcbiAgICAgICAgJyMgbGltaXQgdGhlIG51bWJlciBvZiBjb21taXRzIGluY2x1ZGVkIGluIHRoZSBjaGFuZ2Vsb2cuJyxcbiAgICAgICAgJyMgbGltaXRfY29tbWl0cyA9IDQyJyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSByZWxlYXNlIHdvcmtmbG93IHRlbXBsYXRlIGZpbGUuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgcmVjb3JkIHdoZXJlIHRoZSBrZXkgaXMgdGhlIGZpbGUgcGF0aCBhbmQgdGhlIHZhbHVlIGlzIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAgICogICAgICAgICAgcmVwcmVzZW50aW5nIHRoZSBjb250ZW50IG9mIHRoZSBpc3N1ZSB0ZW1wbGF0ZS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZVJlbGVhc2VXb3JrZmxvdygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnLmdpdGh1Yi93b3JrZmxvd3MvcmVsZWFzZS55bWwnOiBbXG4gICAgICAgICduYW1lOiBSZWxlYXNlJyxcbiAgICAgICAgJ29uOicsXG4gICAgICAgICcgIHB1bGxfcmVxdWVzdDonLFxuICAgICAgICAnICAgIGJyYW5jaGVzOicsXG4gICAgICAgICcgICAgICAtIG1haW4nLFxuICAgICAgICAnICAgIHR5cGVzOicsXG4gICAgICAgICcgICAgICAtIGNsb3NlZCcsXG4gICAgICAgICdqb2JzOicsXG4gICAgICAgICcgIHJlbGVhc2U6JyxcbiAgICAgICAgJyAgICBydW5zLW9uOiB1YnVudHUtbGF0ZXN0JyxcbiAgICAgICAgJyAgICBwZXJtaXNzaW9uczonLFxuICAgICAgICAnICAgICAgY29udGVudHM6IHdyaXRlJyxcbiAgICAgICAgJyAgICAgIHB1bGwtcmVxdWVzdHM6IHdyaXRlJyxcbiAgICAgICAgJyAgICBzdGVwczonLFxuICAgICAgICAnICAgICAgLSBuYW1lOiBDcmVhdGUgcmVsZWFzZScsXG4gICAgICAgICcgICAgICAgIHVzZXM6IGR4ZnJvbnRpZXIvZ2gtYWN0aW9uLXJlbGVhc2VAbWFpbicsXG4gICAgICAgICcgICAgICAgIHdpdGg6JyxcbiAgICAgICAgJyAgICAgICAgICBHSVRIVUJfVE9LRU46ICR7eyBzZWNyZXRzLkdJVEhVQl9UT0tFTiB9fScsXG4gICAgICAgICcgICAgICAgICAgQlJBTkNIOiBtYWluJyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgcHVsbCByZXF1ZXN0IHRlbXBsYXRlIGZpbGUuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlUHVsbFJlcXVlc3QoKTogdm9pZCB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZVB1bGxSZXF1ZXN0KVswXTtcbiAgICBuZXcgVGV4dEZpbGUodGhpcy5wcm9qZWN0LCBmaWxlUGF0aCwge1xuICAgICAgbGluZXM6IHRoaXMuY29uZmlnRmlsZVB1bGxSZXF1ZXN0W2ZpbGVQYXRoXSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgYnVnIGlzc3VlIHRlbXBsYXRlIGZpbGUuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlQnVnSXNzdWUoKTogdm9pZCB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZUJ1Z0lzc3VlKVswXTtcbiAgICBuZXcgVGV4dEZpbGUodGhpcy5wcm9qZWN0LCBmaWxlUGF0aCwge1xuICAgICAgbGluZXM6IHRoaXMuY29uZmlnRmlsZUJ1Z0lzc3VlW2ZpbGVQYXRoXSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgZmVhdHVyZSByZXF1ZXN0IHRlbXBsYXRlIGZpbGUuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlRmVhdHVyZUlzc3VlKCk6IHZvaWQge1xuICAgIGNvbnN0IGZpbGVQYXRoOiBzdHJpbmcgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ0ZpbGVGZWF0dXJlSXNzdWUpWzBdO1xuICAgIG5ldyBUZXh0RmlsZSh0aGlzLnByb2plY3QsIGZpbGVQYXRoLCB7XG4gICAgICBsaW5lczogdGhpcy5jb25maWdGaWxlRmVhdHVyZUlzc3VlW2ZpbGVQYXRoXSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgaG91c2VrZWVwaW5nIGlzc3VlIHRlbXBsYXRlIGZpbGUuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlSG91c2VrZWVwaW5nSXNzdWUoKTogdm9pZCB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZUhvdXNla2VlcGluZ0lzc3VlKVswXTtcbiAgICBuZXcgVGV4dEZpbGUodGhpcy5wcm9qZWN0LCBmaWxlUGF0aCwge1xuICAgICAgbGluZXM6IHRoaXMuY29uZmlnRmlsZUhvdXNla2VlcGluZ0lzc3VlW2ZpbGVQYXRoXSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgcXVlc3Rpb24gaXNzdWUgdGVtcGxhdGUgZmlsZS5cbiAgICovXG4gIHB1YmxpYyBjcmVhdGVRdWVzdGlvbklzc3VlKCk6IHZvaWQge1xuICAgIGNvbnN0IGZpbGVQYXRoOiBzdHJpbmcgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ0ZpbGVRdWVzdGlvbklzc3VlKVswXTtcbiAgICBuZXcgVGV4dEZpbGUodGhpcy5wcm9qZWN0LCBmaWxlUGF0aCwge1xuICAgICAgbGluZXM6IHRoaXMuY29uZmlnRmlsZVF1ZXN0aW9uSXNzdWVbZmlsZVBhdGhdLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSB0aGUgZ2l0IGNsaWZmIHRlbXBsYXRlIGZpbGUuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlQ2xpZmYoKTogdm9pZCB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZUNsaWZmKVswXTtcbiAgICBuZXcgVGV4dEZpbGUodGhpcy5wcm9qZWN0LCBmaWxlUGF0aCwge1xuICAgICAgbGluZXM6IHRoaXMuY29uZmlnRmlsZUNsaWZmW2ZpbGVQYXRoXSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgcmVsZWFzZSB3b3JrZmxvdyB0ZW1wbGF0ZSBmaWxlLlxuICAgKi9cbiAgcHVibGljIGNyZWF0ZVJlbGVhc2VXb3JrZmxvdygpOiB2b2lkIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlUmVsZWFzZVdvcmtmbG93KVswXTtcbiAgICBuZXcgVGV4dEZpbGUodGhpcy5wcm9qZWN0LCBmaWxlUGF0aCwge1xuICAgICAgbGluZXM6IHRoaXMuY29uZmlnRmlsZVJlbGVhc2VXb3JrZmxvd1tmaWxlUGF0aF0sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBjdXN0b20gYXR0cmlidXRlcyBwYXR0ZXJucyB0byB0aGUgcHJvamVjdCdzIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBwYXR0ZXJucyAtIEFuIGFycmF5IG9mIGZpbGUgb3IgZGlyZWN0b3J5IHBhdHRlcm5zIHRvIGJlIGFkZGVkIGFzIGF0dHJpYnV0ZXMuXG4gICAqL1xuICBwdWJsaWMgYWRkQXR0cmlidXRlUGF0dGVybnMocGF0dGVybnM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgdGhpcy5hdHRyaWJ1dGVQYXR0ZXJucyA9IFsuLi50aGlzLmF0dHJpYnV0ZVBhdHRlcm5zLCAuLi5wYXR0ZXJuc107XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIGxpc3Qgb2YgYWxsIHJlbGV2YW50IGNvbmZpZyBmaWxlcy5cbiAgICogQHJldHVybnMgTGlzdCBvZiBjb25maWdzXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGNvbmZpZ3MoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+W10ge1xuICAgIHJldHVybiBbXG4gICAgICB0aGlzLmNvbmZpZ0ZpbGVQdWxsUmVxdWVzdCxcbiAgICAgIHRoaXMuY29uZmlnRmlsZUJ1Z0lzc3VlLFxuICAgICAgdGhpcy5jb25maWdGaWxlRmVhdHVyZUlzc3VlLFxuICAgICAgdGhpcy5jb25maWdGaWxlSG91c2VrZWVwaW5nSXNzdWUsXG4gICAgICB0aGlzLmNvbmZpZ0ZpbGVRdWVzdGlvbklzc3VlLFxuICAgICAgdGhpcy5jb25maWdGaWxlQ2xpZmYsXG4gICAgICB0aGlzLmNvbmZpZ0ZpbGVSZWxlYXNlV29ya2Zsb3csXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGZpbGUgcGF0aHMgZm9yIGFsbCBkeW5hbWljIGFuZCBzdGF0aWMgY29uZmlndXJhdGlvbiBmaWxlcy5cbiAgICpcbiAgICogQHJldHVybnMgQSBsaXN0IG9mIGZpbGUgcGF0aCBwYXR0ZXJucywgaW5jbHVkaW5nIGR5bmFtaWMgY29uZmlndXJhdGlvbnMgYW5kIHN0YXRpYyBmaWxlcyBsaWtlIGAuZ2l0YXR0cmlidXRlc2AgYW5kIGAuZ2l0aWdub3JlYC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgZmlsZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBkeW5hbWljRmlsZVBhdGhzOiBzdHJpbmdbXSA9IHRoaXMuY29uZmlnc1xuICAgICAgLm1hcCgoY29uZmlnOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4pOiBzdHJpbmcgPT4gYC8ke09iamVjdC5rZXlzKGNvbmZpZylbMF19YClcbiAgICAgIC5maWx0ZXIoKGZpbGVQYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4gZmlsZVBhdGgpO1xuICAgIGNvbnN0IHN0YXRpY0ZpbGVQYXRoczogc3RyaW5nW10gPSBbJy8uZ2l0YXR0cmlidXRlcycsICcvLmdpdGlnbm9yZSddO1xuXG4gICAgcmV0dXJuIFsuLi5keW5hbWljRmlsZVBhdGhzLCAuLi5zdGF0aWNGaWxlUGF0aHNdO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsSWdub3JlUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHBhdHRlcm5zOiBzdHJpbmdbXSA9IFsuLi50aGlzLmZpbGVQYXR0ZXJucywgJy9DSEFOR0VMT0cubWQnXTtcblxuICAgIHJldHVybiBwYXR0ZXJucztcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbEF0dHJpYnV0ZXNQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFsnQ0hBTkdFTE9HLm1kJ107XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcmVnaXN0ZXJDb25maWcoKTogdm9pZCB7XG4gICAgaWYgKGlzVmFsaWRQcm9qZWN0KHRoaXMucHJvamVjdCkpIHtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5wcmV0dGllckNvbmZpZz8uYWRkSWdub3JlUGF0dGVybnModGhpcy5hZGRpdGlvbmFsSWdub3JlUGF0dGVybnMpO1xuICAgIH1cbiAgICB0aGlzLmFkZEF0dHJpYnV0ZVBhdHRlcm5zKHRoaXMuYWRkaXRpb25hbEF0dHJpYnV0ZXNQYXR0ZXJucyk7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgYXBwbHlDb25maWcoKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVQdWxsUmVxdWVzdCgpO1xuICAgIHRoaXMuY3JlYXRlQnVnSXNzdWUoKTtcbiAgICB0aGlzLmNyZWF0ZUZlYXR1cmVJc3N1ZSgpO1xuICAgIHRoaXMuY3JlYXRlSG91c2VrZWVwaW5nSXNzdWUoKTtcbiAgICB0aGlzLmNyZWF0ZVF1ZXN0aW9uSXNzdWUoKTtcbiAgICB0aGlzLmNyZWF0ZUNsaWZmKCk7XG4gICAgdGhpcy5jcmVhdGVSZWxlYXNlV29ya2Zsb3coKTtcblxuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdGhpcy5hdHRyaWJ1dGVQYXR0ZXJucykge1xuICAgICAgdGhpcy5wcm9qZWN0LmdpdGF0dHJpYnV0ZXMuYWRkQXR0cmlidXRlcyhgLyR7dmFsdWV9YCwgJ2xpbmd1aXN0LWdlbmVyYXRlZCcpO1xuICAgIH1cbiAgfVxufVxuIl19
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
_a = JSII_RTTI_SYMBOL_1;
GitHubConfigBase[_a] = { fqn: "@dxfrontier/projen-template-projects.GitHubConfigBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Jhc2UvY29uZmlnL2dpdGh1Yi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFrQztBQUNsQyxzQ0FBbUM7QUFFbkMsNENBQXdDO0FBRXhDOzs7O0dBSUc7QUFDSCxNQUFhLGdCQUFpQixTQUFRLGVBQU07SUFHMUMsWUFBWSxPQUFxQjtRQUMvQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFZixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDO0lBQzNELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYywwQkFBMEI7UUFDdEMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxJQUFjLHFCQUFxQjtRQUNqQyxPQUFPO1lBQ0wsa0NBQWtDLEVBQUU7Z0JBQ2xDLHdCQUF3QjtnQkFDeEIsRUFBRTtnQkFDRiw2REFBNkQ7Z0JBQzdELEVBQUU7Z0JBQ0YsNEJBQTRCO2dCQUM1QixFQUFFO2dCQUNGLG1EQUFtRDtnQkFDbkQsa0NBQWtDO2dCQUNsQyxtREFBbUQ7Z0JBQ25ELDhDQUE4QztnQkFDOUMsRUFBRTtnQkFDRixlQUFlO2dCQUNmLEVBQUU7Z0JBQ0YsNEdBQTRHO2dCQUM1RyxrR0FBa0c7Z0JBQ2xHLHlGQUF5RjtnQkFDekYsaUVBQWlFO2dCQUNqRSwwQ0FBMEM7Z0JBQzFDLEVBQUU7Z0JBQ0YsYUFBYTtnQkFDYixFQUFFO2dCQUNGLDJEQUEyRDtnQkFDM0QseUNBQXlDO2FBQzFDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILElBQWMsa0JBQWtCO1FBQzlCLE9BQU87WUFDTCxnQ0FBZ0MsRUFBRTtnQkFDaEMsY0FBYztnQkFDZCwrQkFBK0I7Z0JBQy9CLHdCQUF3QjtnQkFDeEIsdUJBQXVCO2dCQUN2QixPQUFPO2dCQUNQLG9CQUFvQjtnQkFDcEIsaUJB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cEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUU5RCxLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDOUUsQ0FBQztJQUNILENBQUM7O0FBMWFILDRDQTJhQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHRGaWxlIH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBQcm9qZWN0VHlwZXMgfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzL3Byb2plY3QnO1xuaW1wb3J0IHsgdXRpbCB9IGZyb20gJy4uLy4uL3V0aWwvdXRpbHMnO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgR2l0SHViIGNvbmZpZ3VyYXRpb24uXG4gKlxuICogVGhpcyBjbGFzcyBhY3RzIGFzIGEgYmFzZSBmb3IgaGFuZGxpbmcgR2l0SHViIGNvbmZpZ3VyYXRpb24gd2l0aGluIHByb2plY3RzLlxuICovXG5leHBvcnQgY2xhc3MgR2l0SHViQ29uZmlnQmFzZSBleHRlbmRzIENvbmZpZyB7XG4gIHByb3RlY3RlZCBhdHRyaWJ1dGVQYXR0ZXJuczogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IocHJvamVjdDogUHJvamVjdFR5cGVzKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG5cbiAgICB0aGlzLmF0dHJpYnV0ZVBhdHRlcm5zID0gdGhpcy5zdGFuZGFyZEF0dHJpYnV0ZXNQYXR0ZXJucztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBzdGFuZGFyZCBhdHRyaWJ1dGVzIHBhdHRlcm5zIHJlcXVpcmVkIGZvciBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGxpc3Qgb2YgYXR0cmlidXRlcyBwYXR0ZXJucy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc3RhbmRhcmRBdHRyaWJ1dGVzUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBwdWxsIHJlcXVlc3QgdGVtcGxhdGUgZmlsZS5cbiAgICpcbiAgICogQHJldHVybnMgQSByZWNvcmQgd2hlcmUgdGhlIGtleSBpcyB0aGUgZmlsZSBwYXRoIGFuZCB0aGUgdmFsdWUgaXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgKiAgICAgICAgICByZXByZXNlbnRpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIGlzc3VlIHRlbXBsYXRlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBjb25maWdGaWxlUHVsbFJlcXVlc3QoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5naXRodWIvcHVsbF9yZXF1ZXN0X3RlbXBsYXRlLm1kJzogW1xuICAgICAgICAnIyMgUmV2aWV3ZXJzIENoZWNrbGlzdCcsXG4gICAgICAgICcnLFxuICAgICAgICAnZm9yIGNvbXBsZXRlIHJldmlldyBsaXN0IHJlZmVyIHRvIEFCUyBMb29wIC0gUmV2aWV3IEFzcGVjdHMnLFxuICAgICAgICAnJyxcbiAgICAgICAgJyMjIyBPcmdhbml6YXRpb25hbCBTZWN0aW9uJyxcbiAgICAgICAgJycsXG4gICAgICAgICctIFsgXSBQUiBpcyBhc3NpZ25lZCB0byB0aGUgYWNjb3JkaW5nIGZlYXR1cmUvYnVnJyxcbiAgICAgICAgJy0gWyBdIEZlYXR1cmUvYnVnIGlzIGRlc2NyaXB0aXZlJyxcbiAgICAgICAgJy0gWyBdIEZlYXR1cmUvYnVnIGlzIGFzc2lnbmVkIHRvIGFjY29yZGluZyBsYWJlbHMnLFxuICAgICAgICAnLSBbIF0gRmVhdHVyZS9idWcgaXMgYXNzaWduZWQgdG8gYSBkZXZlbG9wZXInLFxuICAgICAgICAnJyxcbiAgICAgICAgJyMjIyBTdHJ1Y3R1cmUnLFxuICAgICAgICAnJyxcbiAgICAgICAgJy0gWyBdIFJlYWRhYmlsaXR5OiBDb2RlIGlzIGVhc3kgdG8gdW5kZXJzdGFuZCwgd2l0aCBtZWFuaW5nZnVsIG5hbWVzIGZvciB2YXJpYWJsZXMsIGZ1bmN0aW9ucywgYW5kIGNsYXNzZXMnLFxuICAgICAgICAnLSBbIF0gQ29tbWVudHM6IE1lYW5pbmdmdWwgYW5kIGhlbHBmdWwgY29tbWVudHMuIENvZGUgaXMgZG9jdW1lbnRlZCB3aXRob3V0IGJlaW5nIG92ZXItY29tbWVudGVkJyxcbiAgICAgICAgJy0gWyBdIERSWSwgS0lTUyBhbmQgWUFHTkk6IENvZGUgaW1wbGVtZW50cyBvbmx5IG5lY2Vzc2FyeSBmZWF0dXJlczsgbm8gb3Zlci1lbmdpbmVlcmluZycsXG4gICAgICAgICctIFsgXSBObyBzZW5zaXRpdmUgZGF0YSAoZS5nLiwgcGFzc3dvcmRzLCBBUEkga2V5cykgaW4gdGhlIGNvZGUnLFxuICAgICAgICAnLSBbIF0gTm8gbWFqb3IgdXBkYXRlcyBmb3IgdXNlZCBwYWNrYWdlcycsXG4gICAgICAgICcnLFxuICAgICAgICAnIyMjIFRlc3RpbmcnLFxuICAgICAgICAnJyxcbiAgICAgICAgJy0gWyBdIENvZGUgaXMgbG9jYWxseSB0ZXN0ZWQgYnkgZGV2ZWxvcGVyIChpZiBhcHBsaWNhYmxlKScsXG4gICAgICAgICctIFsgXSBBdXRvbWF0ZWQgdGVzdHMgcGFzcyBzdWNjZXNzZnVsbHknLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIGJ1ZyBpc3N1ZSB0ZW1wbGF0ZSBmaWxlLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIHJlY29yZCB3aGVyZSB0aGUga2V5IGlzIHRoZSBmaWxlIHBhdGggYW5kIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSBvZiBzdHJpbmdzXG4gICAqICAgICAgICAgIHJlcHJlc2VudGluZyB0aGUgY29udGVudCBvZiB0aGUgaXNzdWUgdGVtcGxhdGUuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGNvbmZpZ0ZpbGVCdWdJc3N1ZSgpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnLmdpdGh1Yi9JU1NVRV9URU1QTEFURS9idWcueW1sJzogW1xuICAgICAgICAnbmFtZTog8J+QniBCdWcnLFxuICAgICAgICAnZGVzY3JpcHRpb246IEZpbGUgYSBidWcvaXNzdWUnLFxuICAgICAgICAndGl0bGU6IFwiW0JVR10gPHRpdGxlPlwiJyxcbiAgICAgICAgJ2xhYmVsczogW1widHlwZTogYnVnXCJdJyxcbiAgICAgICAgJ2JvZHk6JyxcbiAgICAgICAgJyAgLSB0eXBlOiB0ZXh0YXJlYScsXG4gICAgICAgICcgICAgYXR0cmlidXRlczonLFxuICAgICAgICAnICAgICAgbGFiZWw6IEN1cnJlbnQgYmVoYXZpb3InLFxuICAgICAgICBcIiAgICAgIGRlc2NyaXB0aW9uOiBBIGRlc2NyaXB0aW9uIG9mIHdoYXQgeW91J3JlIGV4cGVyaWVuY2luZy5cIixcbiAgICAgICAgJyAgICB2YWxpZGF0aW9uczonLFxuICAgICAgICAnICAgICAgcmVxdWlyZWQ6IHRydWUnLFxuICAgICAgICAnJyxcbiAgICAgICAgJyAgLSB0eXBlOiB0ZXh0YXJlYScsXG4gICAgICAgICcgICAgYXR0cmlidXRlczonLFxuICAgICAgICAnICAgICAgbGFiZWw6IEV4cGVjdGVkIGJlaGF2aW9yJyxcbiAgICAgICAgJyAgICAgIGRlc2NyaXB0aW9uOiBBIGRlc2NyaXB0aW9uIG9mIHdoYXQgeW91IGV4cGVjdGVkIHRvIGhhcHBlbi4nLFxuICAgICAgICAnICAgIHZhbGlkYXRpb25zOicsXG4gICAgICAgICcgICAgICByZXF1aXJlZDogdHJ1ZScsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUgZmVhdHVyZSByZXF1ZXN0IHRlbXBsYXRlIGZpbGUuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgcmVjb3JkIHdoZXJlIHRoZSBrZXkgaXMgdGhlIGZpbGUgcGF0aCBhbmQgdGhlIHZhbHVlIGlzIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAgICogICAgICAgICAgcmVwcmVzZW50aW5nIHRoZSBjb250ZW50IG9mIHRoZSBpc3N1ZSB0ZW1wbGF0ZS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZUZlYXR1cmVJc3N1ZSgpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnLmdpdGh1Yi9JU1NVRV9URU1QTEFURS9mZWF0dXJlLnltbCc6IFtcbiAgICAgICAgJ25hbWU6IPCfkqEgRmVhdHVyZScsXG4gICAgICAgICdkZXNjcmlwdGlvbjogUmVxdWVzdCBmb3IgYSBuZXcgZmVhdHVyZScsXG4gICAgICAgICd0aXRsZTogXCJbRkVBVFVSRV0gPHRpdGxlPlwiJyxcbiAgICAgICAgJ2xhYmVsczogW1widHlwZTogZmVhdHVyZVwiXScsXG4gICAgICAgICdib2R5OicsXG4gICAgICAgICcgIC0gdHlwZTogdGV4dGFyZWEnLFxuICAgICAgICAnICAgIGF0dHJpYnV0ZXM6JyxcbiAgICAgICAgJyAgICAgIGxhYmVsOiBEZXNjcmlwdGlvbicsXG4gICAgICAgICcgICAgICBkZXNjcmlwdGlvbjogQSBkZXNjcmlwdGlvbiBvZiB0aGUgZmVhdHVyZS4nLFxuICAgICAgICAnICAgIHZhbGlkYXRpb25zOicsXG4gICAgICAgICcgICAgICByZXF1aXJlZDogdHJ1ZScsXG4gICAgICAgICcnLFxuICAgICAgICAnICAtIHR5cGU6IHRleHRhcmVhJyxcbiAgICAgICAgJyAgICBhdHRyaWJ1dGVzOicsXG4gICAgICAgICcgICAgICBsYWJlbDogVGFzayBMaXN0JyxcbiAgICAgICAgJyAgICAgIGRlc2NyaXB0aW9uOiBEZXNjcmliZSB0aGUgc3RlcHMgdG8gZnVsZmlsbCB0aGUgZmVhdHVyZS4nLFxuICAgICAgICAnICAgICAgdmFsdWU6IHwnLFxuICAgICAgICAnICAgICAgICAtIFsgXSBNeSBGaXJzdCBUYXNrJyxcbiAgICAgICAgJyAgICB2YWxpZGF0aW9uczonLFxuICAgICAgICAnICAgICAgcmVxdWlyZWQ6IHRydWUnLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIGhvdXNla2VlcGluZyBpc3N1ZSB0ZW1wbGF0ZSBmaWxlLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIHJlY29yZCB3aGVyZSB0aGUga2V5IGlzIHRoZSBmaWxlIHBhdGggYW5kIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSBvZiBzdHJpbmdzXG4gICAqICAgICAgICAgIHJlcHJlc2VudGluZyB0aGUgY29udGVudCBvZiB0aGUgaXNzdWUgdGVtcGxhdGUuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGNvbmZpZ0ZpbGVIb3VzZWtlZXBpbmdJc3N1ZSgpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnLmdpdGh1Yi9JU1NVRV9URU1QTEFURS9ob3VzZWtlZXBpbmcueW1sJzogW1xuICAgICAgICAnbmFtZTog8J+SoSBIb3VzZWtlZXBpbmcnLFxuICAgICAgICAnZGVzY3JpcHRpb246IE1haW50ZW5hbmNlIG9yIHJlZmFjdG9yaW5nIHRhc2snLFxuICAgICAgICAndGl0bGU6IFwiW0hPVVNFS0VFUElOR10gPHRpdGxlPlwiJyxcbiAgICAgICAgJ2xhYmVsczogW1widHlwZTogaG91c2VrZWVwaW5nXCJdJyxcbiAgICAgICAgJ2JvZHk6JyxcbiAgICAgICAgJyAgLSB0eXBlOiB0ZXh0YXJlYScsXG4gICAgICAgICcgICAgYXR0cmlidXRlczonLFxuICAgICAgICAnICAgICAgbGFiZWw6IERlc2NyaXB0aW9uJyxcbiAgICAgICAgJyAgICAgIGRlc2NyaXB0aW9uOiBBIGRlc2NyaXB0aW9uIG9mIHRoZSBob3VzZWtlZXBpbmcgdGFzay4nLFxuICAgICAgICAnICAgIHZhbGlkYXRpb25zOicsXG4gICAgICAgICcgICAgICByZXF1aXJlZDogdHJ1ZScsXG4gICAgICAgICcnLFxuICAgICAgICAnICAtIHR5cGU6IHRleHRhcmVhJyxcbiAgICAgICAgJyAgICBhdHRyaWJ1dGVzOicsXG4gICAgICAgICcgICAgICBsYWJlbDogVGFzayBMaXN0JyxcbiAgICAgICAgJyAgICAgIGRlc2NyaXB0aW9uOiBEZXNjcmliZSB0aGUgc3RlcHMgdG8gZnVsZmlsbCB0aGUgaG91c2VrZWVwaW5nIHRhc2suJyxcbiAgICAgICAgJyAgICAgIHZhbHVlOiB8JyxcbiAgICAgICAgJyAgICAgICAgLSBbIF0gTXkgRmlyc3QgVGFzaycsXG4gICAgICAgICcgICAgdmFsaWRhdGlvbnM6JyxcbiAgICAgICAgJyAgICAgIHJlcXVpcmVkOiB0cnVlJyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBxdWVzdGlvbiBpc3N1ZSB0ZW1wbGF0ZSBmaWxlLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIHJlY29yZCB3aGVyZSB0aGUga2V5IGlzIHRoZSBmaWxlIHBhdGggYW5kIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSBvZiBzdHJpbmdzXG4gICAqICAgICAgICAgIHJlcHJlc2VudGluZyB0aGUgY29udGVudCBvZiB0aGUgaXNzdWUgdGVtcGxhdGUuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGNvbmZpZ0ZpbGVRdWVzdGlvbklzc3VlKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuZ2l0aHViL0lTU1VFX1RFTVBMQVRFL3F1ZXN0aW9uLnltbCc6IFtcbiAgICAgICAgJ25hbWU6IOKdkyBRdWVzdGlvbicsXG4gICAgICAgICdkZXNjcmlwdGlvbjogQXNrIGEgcXVlc3Rpb24nLFxuICAgICAgICAndGl0bGU6IFwiW1FVRVNUSU9OXSA8dGl0bGU+XCInLFxuICAgICAgICAnbGFiZWxzOiBbXCJ0eXBlOiBxdWVzdGlvblwiXScsXG4gICAgICAgICdib2R5OicsXG4gICAgICAgICcgIC0gdHlwZTogdGV4dGFyZWEnLFxuICAgICAgICAnICAgIGF0dHJpYnV0ZXM6JyxcbiAgICAgICAgJyAgICAgIGxhYmVsOiBRdWVzdGlvbicsXG4gICAgICAgICcgICAgICBkZXNjcmlwdGlvbjogV2hhdCB3b3VsZCB5b3UgbGlrZSB0byBrbm93PyBJZiB5b3UgZW5jb3VudGVyIHVudXN1YWwgYmVoYXZpb3Igb3IgaWRlbnRpZmllZCBhIG1pc3NpbmcgZmVhdHVyZSwgY29uc2lkZXIgb3BlbmluZyBhIGJ1ZyByZXBvcnQgaW5zdGVhZC4nLFxuICAgICAgICAnICAgIHZhbGlkYXRpb25zOicsXG4gICAgICAgICcgICAgICByZXF1aXJlZDogdHJ1ZScsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUgZ2l0IGNsaWZmIHRlbXBsYXRlIGZpbGUuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgcmVjb3JkIHdoZXJlIHRoZSBrZXkgaXMgdGhlIGZpbGUgcGF0aCBhbmQgdGhlIHZhbHVlIGlzIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAgICogICAgICAgICAgcmVwcmVzZW50aW5nIHRoZSBjb250ZW50IG9mIHRoZSBpc3N1ZSB0ZW1wbGF0ZS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZUNsaWZmKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdjbGlmZi50b21sJzogW1xuICAgICAgICAnIyBnaXQtY2xpZmYgfiBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gZmlsZScsXG4gICAgICAgICcjIGh0dHBzOi8vZ2l0LWNsaWZmLm9yZy9kb2NzL2NvbmZpZ3VyYXRpb24nLFxuICAgICAgICAnIycsXG4gICAgICAgICcjIExpbmVzIHN0YXJ0aW5nIHdpdGggXCIjXCIgYXJlIGNvbW1lbnRzLicsXG4gICAgICAgICcjIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBhcmUgb3JnYW5pemVkIGludG8gdGFibGVzIGFuZCBrZXlzLicsXG4gICAgICAgICcjIFNlZSBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIGF2YWlsYWJsZSBvcHRpb25zLicsXG4gICAgICAgICcnLFxuICAgICAgICAnW2NoYW5nZWxvZ10nLFxuICAgICAgICAnIyBjaGFuZ2Vsb2cgaGVhZGVyJyxcbiAgICAgICAgJ2hlYWRlciA9IFwiXCJcIicsXG4gICAgICAgICcjIENoYW5nZWxvZ1xcXFxuJyxcbiAgICAgICAgJ0FsbCBub3RhYmxlIGNoYW5nZXMgdG8gdGhpcyBwcm9qZWN0IHdpbGwgYmUgZG9jdW1lbnRlZCBpbiB0aGlzIGZpbGUuXFxcXG4nLFxuICAgICAgICAnXCJcIlwiJyxcbiAgICAgICAgJyMgdGVtcGxhdGUgZm9yIHRoZSBjaGFuZ2Vsb2cgYm9keScsXG4gICAgICAgICcjIGh0dHBzOi8va2VhdHMuZ2l0aHViLmlvL3RlcmEvZG9jcy8jaW50cm9kdWN0aW9uJyxcbiAgICAgICAgJ2JvZHkgPSBcIlwiXCInLFxuICAgICAgICAneyUgaWYgdmVyc2lvbiAlfVxcXFwnLFxuICAgICAgICAnICAgICMjIFt7eyB2ZXJzaW9uIHwgdHJpbV9zdGFydF9tYXRjaGVzKHBhdD1cInZcIikgfX1dIC0ge3sgdGltZXN0YW1wIHwgZGF0ZShmb3JtYXQ9XCIlWS0lbS0lZFwiKSB9fScsXG4gICAgICAgICd7JSBlbHNlICV9XFxcXCcsXG4gICAgICAgICcgICAgIyMgW3VucmVsZWFzZWRdJyxcbiAgICAgICAgJ3slIGVuZGlmICV9XFxcXCcsXG4gICAgICAgICd7JSBmb3IgZ3JvdXAsIGNvbW1pdHMgaW4gY29tbWl0cyB8IGdyb3VwX2J5KGF0dHJpYnV0ZT1cImdyb3VwXCIpICV9JyxcbiAgICAgICAgJyAgICAjIyMge3sgZ3JvdXAgfCBzdHJpcHRhZ3MgfCB0cmltIHwgdXBwZXJfZmlyc3QgfX0nLFxuICAgICAgICAnICAgIHslIGZvciBjb21taXQgaW4gY29tbWl0cyAlfScsXG4gICAgICAgICcgICAgICAgIC0geyUgaWYgY29tbWl0LnNjb3BlICV9Kih7eyBjb21taXQuc2NvcGUgfX0pKiB7JSBlbmRpZiAlfVxcXFwnLFxuICAgICAgICAnICAgICAgICAgICAgeyUgaWYgY29tbWl0LmJyZWFraW5nICV9WyoqYnJlYWtpbmcqKl0geyUgZW5kaWYgJX1cXFxcJyxcbiAgICAgICAgJyAgICAgICAgICAgIHt7IGNvbW1pdC5tZXNzYWdlIHwgdXBwZXJfZmlyc3QgfX0nLFxuICAgICAgICAnICAgIHslIGVuZGZvciAlfScsXG4gICAgICAgICd7JSBlbmRmb3IgJX1cXFxcbicsXG4gICAgICAgICdcIlwiXCInLFxuICAgICAgICAnIyB0ZW1wbGF0ZSBmb3IgdGhlIGNoYW5nZWxvZyBmb290ZXInLFxuICAgICAgICAnZm9vdGVyID0gXCJcIlwiJyxcbiAgICAgICAgJzwhLS0gZ2VuZXJhdGVkIGJ5IGdpdC1jbGlmZiAtLT4nLFxuICAgICAgICAnXCJcIlwiJyxcbiAgICAgICAgJyMgcmVtb3ZlIHRoZSBsZWFkaW5nIGFuZCB0cmFpbGluZyBzJyxcbiAgICAgICAgJ3RyaW0gPSB0cnVlJyxcbiAgICAgICAgJyMgcG9zdHByb2Nlc3NvcnMnLFxuICAgICAgICAncG9zdHByb2Nlc3NvcnMgPSBbJyxcbiAgICAgICAgJyAgIyB7IHBhdHRlcm4gPSBcIjxSRVBPPlwiLCByZXBsYWNlID0gXCJodHRwczovL2dpdGh1Yi5jb20vb3JodW4vZ2l0LWNsaWZmXCIgfSwgIyByZXBsYWNlIHJlcG9zaXRvcnkgVVJMJyxcbiAgICAgICAgJ10nLFxuICAgICAgICAnJyxcbiAgICAgICAgJ1tnaXRdJyxcbiAgICAgICAgJyMgcGFyc2UgdGhlIGNvbW1pdHMgYmFzZWQgb24gaHR0cHM6Ly93d3cuY29udmVudGlvbmFsY29tbWl0cy5vcmcnLFxuICAgICAgICAnY29udmVudGlvbmFsX2NvbW1pdHMgPSB0cnVlJyxcbiAgICAgICAgJyMgZmlsdGVyIG91dCB0aGUgY29tbWl0cyB0aGF0IGFyZSBub3QgY29udmVudGlvbmFsJyxcbiAgICAgICAgJ2ZpbHRlcl91bmNvbnZlbnRpb25hbCA9IHRydWUnLFxuICAgICAgICAnIyBwcm9jZXNzIGVhY2ggbGluZSBvZiBhIGNvbW1pdCBhcyBhbiBpbmRpdmlkdWFsIGNvbW1pdCcsXG4gICAgICAgICdzcGxpdF9jb21taXRzID0gZmFsc2UnLFxuICAgICAgICAnIyByZWdleCBmb3IgcHJlcHJvY2Vzc2luZyB0aGUgY29tbWl0IG1lc3NhZ2VzJyxcbiAgICAgICAgJ2NvbW1pdF9wcmVwcm9jZXNzb3JzID0gWycsXG4gICAgICAgICcgICMgUmVwbGFjZSBpc3N1ZSBudW1iZXJzJyxcbiAgICAgICAgJyAgI3sgcGF0dGVybiA9IFwiXFxcXCgoXFxcXHcrXFxcXHMpPyMoWzAtOV0rKVxcXFwpXCIsIHJlcGxhY2UgPSBcIihbIyR7Mn1dKDxSRVBPPi9pc3N1ZXMvJHsyfSkpXCJ9LCcsXG4gICAgICAgICcgICMgQ2hlY2sgc3BlbGxpbmcgb2YgdGhlIGNvbW1pdCB3aXRoIGh0dHBzOi8vZ2l0aHViLmNvbS9jcmF0ZS1jaS90eXBvcycsXG4gICAgICAgICcgICMgSWYgdGhlIHNwZWxsaW5nIGlzIGluY29ycmVjdCwgaXQgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGZpeGVkLicsXG4gICAgICAgICcgICN7IHBhdHRlcm4gPSBcIi4qXCIsIHJlcGxhY2VfY29tbWFuZCA9IFwidHlwb3MgLS13cml0ZS1jaGFuZ2VzIC1cIiB9LCcsXG4gICAgICAgICddJyxcbiAgICAgICAgJyMgcmVnZXggZm9yIHBhcnNpbmcgYW5kIGdyb3VwaW5nIGNvbW1pdHMnLFxuICAgICAgICAnY29tbWl0X3BhcnNlcnMgPSBbJyxcbiAgICAgICAgJyAgeyBtZXNzYWdlID0gXCJeZmVhdFwiLCBncm91cCA9IFwiPCEtLSAwIC0tPvCfmoAgRmVhdHVyZXNcIiB9LCcsXG4gICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXmZpeFwiLCBncm91cCA9IFwiPCEtLSAxIC0tPvCfkJsgQnVnIEZpeGVzXCIgfSwnLFxuICAgICAgICAnICB7IG1lc3NhZ2UgPSBcIl5kb2NcIiwgZ3JvdXAgPSBcIjwhLS0gMyAtLT7wn5OaIERvY3VtZW50YXRpb25cIiB9LCcsXG4gICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXnBlcmZcIiwgZ3JvdXAgPSBcIjwhLS0gNCAtLT7imqEgUGVyZm9ybWFuY2VcIiB9LCcsXG4gICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXnJlZmFjdG9yXCIsIGdyb3VwID0gXCI8IS0tIDIgLS0+8J+anCBSZWZhY3RvclwiIH0sJyxcbiAgICAgICAgJyAgeyBtZXNzYWdlID0gXCJec3R5bGVcIiwgZ3JvdXAgPSBcIjwhLS0gNSAtLT7wn46oIFN0eWxpbmdcIiB9LCcsXG4gICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXnRlc3RcIiwgZ3JvdXAgPSBcIjwhLS0gNiAtLT7wn6eqIFRlc3RpbmdcIiB9LCcsXG4gICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXmNob3JlXFxcXChyZWxlYXNlXFxcXCk6IHByZXBhcmUgZm9yXCIsIHNraXAgPSB0cnVlIH0sJyxcbiAgICAgICAgJyAgeyBtZXNzYWdlID0gXCJeY2hvcmVcXFxcKGRlcHMuKlxcXFwpXCIsIHNraXAgPSB0cnVlIH0sJyxcbiAgICAgICAgJyAgeyBtZXNzYWdlID0gXCJeY2hvcmVcXFxcKHByXFxcXClcIiwgc2tpcCA9IHRydWUgfSwnLFxuICAgICAgICAnICB7IG1lc3NhZ2UgPSBcIl5jaG9yZVxcXFwocHVsbFxcXFwpXCIsIHNraXAgPSB0cnVlIH0sJyxcbiAgICAgICAgJyAgeyBtZXNzYWdlID0gXCJeY2hvcmV8XmNpXCIsIGdyb3VwID0gXCI8IS0tIDcgLS0+4pqZ77iPIE1pc2NlbGxhbmVvdXMgVGFza3NcIiB9LCcsXG4gICAgICAgICcgIHsgYm9keSA9IFwiLipzZWN1cml0eVwiLCBncm91cCA9IFwiPCEtLSA4IC0tPvCfm6HvuI8gU2VjdXJpdHlcIiB9LCcsXG4gICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXnJldmVydFwiLCBncm91cCA9IFwiPCEtLSA5IC0tPuKXgO+4jyBSZXZlcnRcIiB9LCcsXG4gICAgICAgICddJyxcbiAgICAgICAgJyMgcHJvdGVjdCBicmVha2luZyBjaGFuZ2VzIGZyb20gYmVpbmcgc2tpcHBlZCBkdWUgdG8gbWF0Y2hpbmcgYSBza2lwcGluZyBjb21taXRfcGFyc2VyJyxcbiAgICAgICAgJ3Byb3RlY3RfYnJlYWtpbmdfY29tbWl0cyA9IGZhbHNlJyxcbiAgICAgICAgJyMgZmlsdGVyIG91dCB0aGUgY29tbWl0cyB0aGF0IGFyZSBub3QgbWF0Y2hlZCBieSBjb21taXQgcGFyc2VycycsXG4gICAgICAgICdmaWx0ZXJfY29tbWl0cyA9IGZhbHNlJyxcbiAgICAgICAgJyMgcmVnZXggZm9yIG1hdGNoaW5nIGdpdCB0YWdzJyxcbiAgICAgICAgJyMgdGFnX3BhdHRlcm4gPSBcInZbMC05XS4qXCInLFxuICAgICAgICAnIyByZWdleCBmb3Igc2tpcHBpbmcgdGFncycsXG4gICAgICAgICcjIHNraXBfdGFncyA9IFwiXCInLFxuICAgICAgICAnIyByZWdleCBmb3IgaWdub3JpbmcgdGFncycsXG4gICAgICAgICcjIGlnbm9yZV90YWdzID0gXCJcIicsXG4gICAgICAgICcjIHNvcnQgdGhlIHRhZ3MgdG9wb2xvZ2ljYWxseScsXG4gICAgICAgICd0b3BvX29yZGVyID0gZmFsc2UnLFxuICAgICAgICAnIyBzb3J0IHRoZSBjb21taXRzIGluc2lkZSBzZWN0aW9ucyBieSBvbGRlc3QvbmV3ZXN0IG9yZGVyJyxcbiAgICAgICAgJ3NvcnRfY29tbWl0cyA9IFwib2xkZXN0XCInLFxuICAgICAgICAnIyBsaW1pdCB0aGUgbnVtYmVyIG9mIGNvbW1pdHMgaW5jbHVkZWQgaW4gdGhlIGNoYW5nZWxvZy4nLFxuICAgICAgICAnIyBsaW1pdF9jb21taXRzID0gNDInLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIHJlbGVhc2Ugd29ya2Zsb3cgdGVtcGxhdGUgZmlsZS5cbiAgICpcbiAgICogQHJldHVybnMgQSByZWNvcmQgd2hlcmUgdGhlIGtleSBpcyB0aGUgZmlsZSBwYXRoIGFuZCB0aGUgdmFsdWUgaXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgKiAgICAgICAgICByZXByZXNlbnRpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIGlzc3VlIHRlbXBsYXRlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBjb25maWdGaWxlUmVsZWFzZVdvcmtmbG93KCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuZ2l0aHViL3dvcmtmbG93cy9yZWxlYXNlLnltbCc6IFtcbiAgICAgICAgJ25hbWU6IFJlbGVhc2UnLFxuICAgICAgICAnb246JyxcbiAgICAgICAgJyAgcHVsbF9yZXF1ZXN0OicsXG4gICAgICAgICcgICAgYnJhbmNoZXM6JyxcbiAgICAgICAgJyAgICAgIC0gbWFpbicsXG4gICAgICAgICcgICAgdHlwZXM6JyxcbiAgICAgICAgJyAgICAgIC0gY2xvc2VkJyxcbiAgICAgICAgJ2pvYnM6JyxcbiAgICAgICAgJyAgcmVsZWFzZTonLFxuICAgICAgICAnICAgIHJ1bnMtb246IHVidW50dS1sYXRlc3QnLFxuICAgICAgICAnICAgIHBlcm1pc3Npb25zOicsXG4gICAgICAgICcgICAgICBjb250ZW50czogd3JpdGUnLFxuICAgICAgICAnICAgICAgcHVsbC1yZXF1ZXN0czogd3JpdGUnLFxuICAgICAgICAnICAgIHN0ZXBzOicsXG4gICAgICAgICcgICAgICAtIG5hbWU6IENyZWF0ZSByZWxlYXNlJyxcbiAgICAgICAgJyAgICAgICAgdXNlczogZHhmcm9udGllci9naC1hY3Rpb24tcmVsZWFzZUBtYWluJyxcbiAgICAgICAgJyAgICAgICAgd2l0aDonLFxuICAgICAgICAnICAgICAgICAgIEdJVEhVQl9UT0tFTjogJHt7IHNlY3JldHMuR0lUSFVCX1RPS0VOIH19JyxcbiAgICAgICAgJyAgICAgICAgICBCUkFOQ0g6IG1haW4nLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIGVuZm9yY2UgbGFiZWxzIHdvcmtmbG93IHRlbXBsYXRlIGZpbGUuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgcmVjb3JkIHdoZXJlIHRoZSBrZXkgaXMgdGhlIGZpbGUgcGF0aCBhbmQgdGhlIHZhbHVlIGlzIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAgICogICAgICAgICAgcmVwcmVzZW50aW5nIHRoZSBjb250ZW50IG9mIHRoZSB3b3JrZmxvdyB0ZW1wbGF0ZS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZUVuZm9yY2VMYWJlbHNXb3JrZmxvdygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnLmdpdGh1Yi93b3JrZmxvd3MvZW5mb3JjZS1sYWJlbHMueW1sJzogW1xuICAgICAgICAnbmFtZTogRW5mb3JjZSBsYWJlbHMnLFxuICAgICAgICAnJyxcbiAgICAgICAgJ29uOicsXG4gICAgICAgICcgIHB1bGxfcmVxdWVzdDonLFxuICAgICAgICAnICAgIHR5cGVzOiBbb3BlbmVkLCBsYWJlbGVkXScsXG4gICAgICAgICcnLFxuICAgICAgICAncGVybWlzc2lvbnM6JyxcbiAgICAgICAgJyAgY29udGVudHM6IHdyaXRlJyxcbiAgICAgICAgJyAgcHVsbC1yZXF1ZXN0czogcmVhZCcsXG4gICAgICAgICcnLFxuICAgICAgICAnam9iczonLFxuICAgICAgICAnICBlbmZvcmNlLWxhYmVsLXZlcnNpb24tcmVsZWFzZTonLFxuICAgICAgICBcIiAgICBuYW1lOiAnRW5mb3JjZSBMYWJlbHM6IHZlcnNpb246IHBhdGNoLCB2ZXJzaW9uOiBtaW5vciwgdmVyc2lvbjogbWFqb3IsIG5vX3JlbGVhc2UnXCIsXG4gICAgICAgICcgICAgcnVucy1vbjogdWJ1bnR1LWxhdGVzdCcsXG4gICAgICAgICcgICAgc3RlcHM6JyxcbiAgICAgICAgJyAgICAgIC0gbmFtZTogQ2hlY2sgb3V0IGNvZGUnLFxuICAgICAgICAnICAgICAgICB1c2VzOiBhY3Rpb25zL2NoZWNrb3V0QHY0JyxcbiAgICAgICAgJyAgICAgIC0gbmFtZTogRW5mb3JjZSB2ZXJzaW9uIHJlbGVhc2UgbGFiZWxzJyxcbiAgICAgICAgJyAgICAgICAgdXNlczogeW9nZXZiZC9lbmZvcmNlLWxhYmVsLWFjdGlvbkAyLjIuMicsXG4gICAgICAgICcgICAgICAgIHdpdGg6JyxcbiAgICAgICAgXCIgICAgICAgICAgUkVRVUlSRURfTEFCRUxTX0FOWTogJ3ZlcnNpb246IHBhdGNoLHZlcnNpb246IG1pbm9yLHZlcnNpb246IG1ham9yLG5vX3JlbGVhc2UnXCIsXG4gICAgICAgIFwiICAgICAgICAgIFJFUVVJUkVEX0xBQkVMU19BTllfREVTQ1JJUFRJT046IFxcXCJTZWxlY3QgYXQgbGVhc3Qgb25lIGxhYmVsIFsndmVyc2lvbjogcGF0Y2gnLCAndmVyc2lvbjogbWlub3InLCAndmVyc2lvbjogbWFqb3InLCAnbm9fcmVsZWFzZSddXFxcIlwiLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSB0ZW1wbGF0ZSBmaWxlIGJhc2VkIG9uIHRoZSBwcm92aWRlZCBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gY29uZmlnIC0gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGZpbGUgcGF0aCBhbmQgY29udGVudC5cbiAgICovXG4gIHByaXZhdGUgY3JlYXRlVGVtcGxhdGVGaWxlKGNvbmZpZzogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+KTogdm9pZCB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKGNvbmZpZylbMF07XG4gICAgbmV3IFRleHRGaWxlKHRoaXMucHJvamVjdCwgZmlsZVBhdGgsIHtcbiAgICAgIGxpbmVzOiBjb25maWdbZmlsZVBhdGhdLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgY3VzdG9tIGF0dHJpYnV0ZXMgcGF0dGVybnMgdG8gdGhlIHByb2plY3QncyBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gcGF0dGVybnMgLSBBbiBhcnJheSBvZiBmaWxlIG9yIGRpcmVjdG9yeSBwYXR0ZXJucyB0byBiZSBhZGRlZCBhcyBhdHRyaWJ1dGVzLlxuICAgKi9cbiAgcHVibGljIGFkZEF0dHJpYnV0ZVBhdHRlcm5zKHBhdHRlcm5zOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIHRoaXMuYXR0cmlidXRlUGF0dGVybnMgPSBbLi4udGhpcy5hdHRyaWJ1dGVQYXR0ZXJucywgLi4ucGF0dGVybnNdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSBsaXN0IG9mIGFsbCByZWxldmFudCBjb25maWcgZmlsZXMuXG4gICAqIEByZXR1cm5zIExpc3Qgb2YgY29uZmlnc1xuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBjb25maWdzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPltdIHtcbiAgICByZXR1cm4gW1xuICAgICAgdGhpcy5jb25maWdGaWxlUHVsbFJlcXVlc3QsXG4gICAgICB0aGlzLmNvbmZpZ0ZpbGVCdWdJc3N1ZSxcbiAgICAgIHRoaXMuY29uZmlnRmlsZUZlYXR1cmVJc3N1ZSxcbiAgICAgIHRoaXMuY29uZmlnRmlsZUhvdXNla2VlcGluZ0lzc3VlLFxuICAgICAgdGhpcy5jb25maWdGaWxlUXVlc3Rpb25Jc3N1ZSxcbiAgICAgIHRoaXMuY29uZmlnRmlsZUNsaWZmLFxuICAgICAgdGhpcy5jb25maWdGaWxlUmVsZWFzZVdvcmtmbG93LFxuICAgICAgdGhpcy5jb25maWdGaWxlRW5mb3JjZUxhYmVsc1dvcmtmbG93LFxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBmaWxlIHBhdGhzIGZvciBhbGwgZHluYW1pYyBhbmQgc3RhdGljIGNvbmZpZ3VyYXRpb24gZmlsZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgbGlzdCBvZiBmaWxlIHBhdGggcGF0dGVybnMsIGluY2x1ZGluZyBkeW5hbWljIGNvbmZpZ3VyYXRpb25zIGFuZCBzdGF0aWMgZmlsZXMgbGlrZSBgLmdpdGF0dHJpYnV0ZXNgIGFuZCBgLmdpdGlnbm9yZWAuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGZpbGVQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZHluYW1pY0ZpbGVQYXRoczogc3RyaW5nW10gPSB0aGlzLmNvbmZpZ3NcbiAgICAgIC5tYXAoKGNvbmZpZzogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+KTogc3RyaW5nID0+IGAvJHtPYmplY3Qua2V5cyhjb25maWcpWzBdfWApXG4gICAgICAuZmlsdGVyKChmaWxlUGF0aDogc3RyaW5nKTogc3RyaW5nID0+IGZpbGVQYXRoKTtcbiAgICBjb25zdCBzdGF0aWNGaWxlUGF0aHM6IHN0cmluZ1tdID0gWycvLmdpdGF0dHJpYnV0ZXMnLCAnLy5naXRpZ25vcmUnXTtcblxuICAgIHJldHVybiBbLi4uZHluYW1pY0ZpbGVQYXRocywgLi4uc3RhdGljRmlsZVBhdGhzXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBwYXR0ZXJuczogc3RyaW5nW10gPSBbLi4udGhpcy5maWxlUGF0dGVybnMsICcvQ0hBTkdFTE9HLm1kJ107XG5cbiAgICByZXR1cm4gcGF0dGVybnM7XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxBdHRyaWJ1dGVzUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJ0NIQU5HRUxPRy5tZCddO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHJlZ2lzdGVyQ29uZmlnKCk6IHZvaWQge1xuICAgIGlmICh1dGlsLmlzVmFsaWRQcm9qZWN0KHRoaXMucHJvamVjdCkpIHtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5wcmV0dGllckNvbmZpZz8uYWRkSWdub3JlUGF0dGVybnModGhpcy5hZGRpdGlvbmFsSWdub3JlUGF0dGVybnMpO1xuICAgIH1cbiAgICB0aGlzLmFkZEF0dHJpYnV0ZVBhdHRlcm5zKHRoaXMuYWRkaXRpb25hbEF0dHJpYnV0ZXNQYXR0ZXJucyk7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgYXBwbHlDb25maWcoKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVUZW1wbGF0ZUZpbGUodGhpcy5jb25maWdGaWxlUHVsbFJlcXVlc3QpO1xuICAgIHRoaXMuY3JlYXRlVGVtcGxhdGVGaWxlKHRoaXMuY29uZmlnRmlsZUJ1Z0lzc3VlKTtcbiAgICB0aGlzLmNyZWF0ZVRlbXBsYXRlRmlsZSh0aGlzLmNvbmZpZ0ZpbGVGZWF0dXJlSXNzdWUpO1xuICAgIHRoaXMuY3JlYXRlVGVtcGxhdGVGaWxlKHRoaXMuY29uZmlnRmlsZUhvdXNla2VlcGluZ0lzc3VlKTtcbiAgICB0aGlzLmNyZWF0ZVRlbXBsYXRlRmlsZSh0aGlzLmNvbmZpZ0ZpbGVRdWVzdGlvbklzc3VlKTtcbiAgICB0aGlzLmNyZWF0ZVRlbXBsYXRlRmlsZSh0aGlzLmNvbmZpZ0ZpbGVDbGlmZik7XG4gICAgdGhpcy5jcmVhdGVUZW1wbGF0ZUZpbGUodGhpcy5jb25maWdGaWxlUmVsZWFzZVdvcmtmbG93KTtcbiAgICB0aGlzLmNyZWF0ZVRlbXBsYXRlRmlsZSh0aGlzLmNvbmZpZ0ZpbGVFbmZvcmNlTGFiZWxzV29ya2Zsb3cpO1xuXG4gICAgZm9yIChjb25zdCB2YWx1ZSBvZiB0aGlzLmF0dHJpYnV0ZVBhdHRlcm5zKSB7XG4gICAgICB0aGlzLnByb2plY3QuZ2l0YXR0cmlidXRlcy5hZGRBdHRyaWJ1dGVzKGAvJHt2YWx1ZX1gLCAnbGluZ3Vpc3QtZ2VuZXJhdGVkJyk7XG4gICAgfVxuICB9XG59XG4iXX0=
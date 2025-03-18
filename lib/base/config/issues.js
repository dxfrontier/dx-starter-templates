"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuesConfigBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const config_1 = require("../config");
const utils_1 = require("../../util/utils");
/**
 * Base class for implementing all relevant GitHub configuration.
 *
 * This class acts as a base for handling GitHub configuration within projects.
 */
class IssuesConfigBase extends config_1.Config {
    // protected attributePatterns: string[];
    constructor(project) {
        super(project);
        // this.attributePatterns = this.standardAttributesPatterns;
    }
    // /**
    //  * Gets the standard attributes patterns required for configuration.
    //  *
    //  * @returns A list of attributes patterns.
    //  */
    // protected get standardAttributesPatterns(): string[] {
    //   return [];
    // }
    // /**
    //  * Retrieves the configuration for the pull request template file.
    //  *
    //  * @returns A record where the key is the file path and the value is an array of strings
    //  *          representing the content of the issue template.
    //  */
    // protected get configFilePullRequest(): Record<string, string[]> {
    //   return {
    //     '.github/pull_request_template.md': [
    //       '## Reviewers Checklist',
    //       '',
    //       'for complete review list refer to ABS Loop - Review Aspects',
    //       '',
    //       '### Organizational Section',
    //       '',
    //       '- [ ] PR is assigned to the according feature/bug',
    //       '- [ ] Feature/bug is descriptive',
    //       '- [ ] Feature/bug is assigned to according labels',
    //       '- [ ] Feature/bug is assigned to a developer',
    //       '',
    //       '### Structure',
    //       '',
    //       '- [ ] Readability: Code is easy to understand, with meaningful names for variables, functions, and classes',
    //       '- [ ] Comments: Meaningful and helpful comments. Code is documented without being over-commented',
    //       '- [ ] DRY, KISS and YAGNI: Code implements only necessary features; no over-engineering',
    //       '- [ ] No sensitive data (e.g., passwords, API keys) in the code',
    //       '- [ ] No major updates for used packages',
    //       '',
    //       '### Testing',
    //       '',
    //       '- [ ] Code is locally tested by developer (if applicable)',
    //       '- [ ] Automated tests pass successfully',
    //     ],
    //   };
    // }
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
    get configFileStoryIssue() {
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
    // /**
    //  * Retrieves the configuration for the git cliff template file.
    //  *
    //  * @returns A record where the key is the file path and the value is an array of strings
    //  *          representing the content of the issue template.
    //  */
    // protected get configFileCliff(): Record<string, string[]> {
    //   return {
    //     'cliff.toml': [
    //       '# git-cliff ~ default configuration file',
    //       '# https://git-cliff.org/docs/configuration',
    //       '#',
    //       '# Lines starting with "#" are comments.',
    //       '# Configuration options are organized into tables and keys.',
    //       '# See documentation for more information on available options.',
    //       '',
    //       '[changelog]',
    //       '# changelog header',
    //       'header = """',
    //       '# Changelog\\n',
    //       'All notable changes to this project will be documented in this file.\\n',
    //       '"""',
    //       '# template for the changelog body',
    //       '# https://keats.github.io/tera/docs/#introduction',
    //       'body = """',
    //       '{% if version %}\\',
    //       '    ## [{{ version | trim_start_matches(pat="v") }}] - {{ timestamp | date(format="%Y-%m-%d") }}',
    //       '{% else %}\\',
    //       '    ## [unreleased]',
    //       '{% endif %}\\',
    //       '{% for group, commits in commits | group_by(attribute="group") %}',
    //       '    ### {{ group | striptags | trim | upper_first }}',
    //       '    {% for commit in commits %}',
    //       '        - {% if commit.scope %}*({{ commit.scope }})* {% endif %}\\',
    //       '            {% if commit.breaking %}[**breaking**] {% endif %}\\',
    //       '            {{ commit.message | upper_first }}\\',
    //       '    {% endfor %}',
    //       '{% endfor %}\\n',
    //       '"""',
    //       '# template for the changelog footer',
    //       'footer = """',
    //       '<!-- generated by git-cliff -->',
    //       '"""',
    //       '# remove the leading and trailing s',
    //       'trim = true',
    //       '# postprocessors',
    //       'postprocessors = [',
    //       '  # { pattern = "<REPO>", replace = "https://github.com/orhun/git-cliff" }, # replace repository URL',
    //       ']',
    //       '',
    //       '[git]',
    //       '# parse the commits based on https://www.conventionalcommits.org',
    //       'conventional_commits = true',
    //       '# filter out the commits that are not conventional',
    //       'filter_unconventional = true',
    //       '# process each line of a commit as an individual commit',
    //       'split_commits = false',
    //       '# regex for preprocessing the commit messages',
    //       'commit_preprocessors = [',
    //       '  # Replace issue numbers',
    //       '  #{ pattern = "\\((\\w+\\s)?#([0-9]+)\\)", replace = "([#${2}](<REPO>/issues/${2}))"},',
    //       '  # Check spelling of the commit with https://github.com/crate-ci/typos',
    //       '  # If the spelling is incorrect, it will be automatically fixed.',
    //       '  #{ pattern = ".*", replace_command = "typos --write-changes -" },',
    //       ']',
    //       '# regex for parsing and grouping commits',
    //       'commit_parsers = [',
    //       '  { message = "^feat", group = "<!-- 0 -->🚀 Features" },',
    //       '  { message = "^fix", group = "<!-- 1 -->🐛 Bug Fixes" },',
    //       '  { message = "^doc", group = "<!-- 3 -->📚 Documentation" },',
    //       '  { message = "^perf", group = "<!-- 4 -->⚡ Performance" },',
    //       '  { message = "^refactor", group = "<!-- 2 -->🚜 Refactor" },',
    //       '  { message = "^style", group = "<!-- 5 -->🎨 Styling" },',
    //       '  { message = "^test", group = "<!-- 6 -->🧪 Testing" },',
    //       '  { message = "^chore\\\\(release\\\\): prepare for", skip = true },',
    //       '  { message = "^chore\\\\(deps.*\\\\)", skip = true },',
    //       '  { message = "^chore\\\\(pr\\\\)", skip = true },',
    //       '  { message = "^chore\\\\(pull\\\\)", skip = true },',
    //       '  { message = "^chore|^ci", group = "<!-- 7 -->⚙️ Miscellaneous Tasks" },',
    //       '  { body = ".*security", group = "<!-- 8 -->🛡️ Security" },',
    //       '  { message = "^revert", group = "<!-- 9 -->◀️ Revert" },',
    //       ']',
    //       '# protect breaking changes from being skipped due to matching a skipping commit_parser',
    //       'protect_breaking_commits = false',
    //       '# filter out the commits that are not matched by commit parsers',
    //       'filter_commits = false',
    //       '# regex for matching git tags',
    //       '# tag_pattern = "v[0-9].*"',
    //       '# regex for skipping tags',
    //       '# skip_tags = ""',
    //       '# regex for ignoring tags',
    //       '# ignore_tags = ""',
    //       '# sort the tags topologically',
    //       'topo_order = false',
    //       '# sort the commits inside sections by oldest/newest order',
    //       'sort_commits = "oldest"',
    //       '# limit the number of commits included in the changelog.',
    //       '# limit_commits = 42',
    //     ],
    //   };
    // }
    // /**
    //  * Retrieves the configuration for the release workflow template file.
    //  *
    //  * @returns A record where the key is the file path and the value is an array of strings
    //  *          representing the content of the issue template.
    //  */
    // protected get configFileReleaseWorkflow(): Record<string, string[]> {
    //   return {
    //     '.github/workflows/release.yml': [
    //       'name: Release',
    //       'on:',
    //       '  pull_request:',
    //       '    branches:',
    //       '      - dev',
    //       '    types:',
    //       '      - closed',
    //       'jobs:',
    //       '  release:',
    //       '    runs-on: ubuntu-latest',
    //       '    permissions:',
    //       '      contents: write',
    //       '      pull-requests: write',
    //       '    steps:',
    //       '      - name: Create release',
    //       '        uses: dxfrontier/gh-action-release@main',
    //       '        with:',
    //       '          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}',
    //       '          BRANCH: dev',
    //     ],
    //   };
    // }
    // /**
    //  * Retrieves the configuration for the enforce labels workflow template file.
    //  *
    //  * @returns A record where the key is the file path and the value is an array of strings
    //  *          representing the content of the workflow template.
    //  */
    // protected get configFileEnforceLabelsWorkflow(): Record<string, string[]> {
    //   return {
    //     '.github/workflows/enforce-labels.yml': [
    //       'name: Enforce labels',
    //       '',
    //       'on:',
    //       '  pull_request:',
    //       '    types: [opened, labeled]',
    //       '',
    //       'permissions:',
    //       '  contents: write',
    //       '  pull-requests: read',
    //       '',
    //       'jobs:',
    //       '  enforce-label-version-release:',
    //       "    name: 'Enforce Labels: version: patch, version: minor, version: major, no_release'",
    //       '    runs-on: ubuntu-latest',
    //       '    steps:',
    //       '      - name: Check out code',
    //       '        uses: actions/checkout@v4',
    //       '      - name: Enforce version release labels',
    //       '        uses: yogevbd/enforce-label-action@2.2.2',
    //       '        with:',
    //       "          REQUIRED_LABELS_ANY: 'version: patch,version: minor,version: major,no_release'",
    //       "          REQUIRED_LABELS_ANY_DESCRIPTION: \"Select at least one label ['version: patch', 'version: minor', 'version: major', 'no_release']\"",
    //     ],
    //   };
    // }
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
    // /**
    //  * Adds custom attributes patterns to the project's configuration.
    //  *
    //  * @param patterns - An array of file or directory patterns to be added as attributes.
    //  */
    // public addAttributePatterns(patterns: string[]): void {
    //   this.attributePatterns = [...this.attributePatterns, ...patterns];
    // }
    /**
     * Gets a list of all relevant config files.
     * @returns List of configs
     */
    get configs() {
        return [
            // this.configFilePullRequest,
            this.configFileBugIssue,
            this.configFileFeatureIssue,
            this.configFileHousekeepingIssue,
            this.configFileQuestionIssue,
            this.configFileStoryIssue,
            // this.configFileBugIssue,
            // this.configFileCliff,
            // this.configFileReleaseWorkflow,
            // this.configFileEnforceLabelsWorkflow,
        ];
    }
    /**
     * Retrieves the file paths for all dynamic configuration files.
     *
     * @returns A list of file path patterns, including dynamic configurations.
     */
    get filePatterns() {
        const dynamicFilePaths = this.configs
            .map((config) => `/${Object.keys(config)[0]}`)
            .filter((filePath) => filePath);
        // const staticFilePaths: string[] = ['/.gitattributes', '/.gitignore'];
        // return [...dynamicFilePaths, ...staticFilePaths];
        return [...dynamicFilePaths];
    }
    get additionalIgnorePatterns() {
        const patterns = [...this.filePatterns];
        return patterns;
    }
    // protected override get additionalAttributesPatterns(): string[] {
    //   return ['CHANGELOG.md'];
    // }
    registerConfig() {
        if (utils_1.util.isValidProject(this.project)) {
            this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
        }
        // this.addAttributePatterns(this.additionalAttributesPatterns);
    }
    applyConfig() {
        // this.createTemplateFile(this.configFilePullRequest);
        this.createTemplateFile(this.configFileBugIssue);
        this.createTemplateFile(this.configFileFeatureIssue);
        this.createTemplateFile(this.configFileHousekeepingIssue);
        this.createTemplateFile(this.configFileQuestionIssue);
        this.createTemplateFile(this.configFileStoryIssue);
        // this.createTemplateFile(this.configFileCliff);
        // this.createTemplateFile(this.configFileReleaseWorkflow);
        // this.createTemplateFile(this.configFileEnforceLabelsWorkflow);
        // for (const value of this.attributePatterns) {
        //   this.project.gitattributes.addAttributes(`/${value}`, 'linguist-generated');
        // }
    }
}
exports.IssuesConfigBase = IssuesConfigBase;
_a = JSII_RTTI_SYMBOL_1;
IssuesConfigBase[_a] = { fqn: "@dxfrontier/projen-template-projects.IssuesConfigBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNzdWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Jhc2UvY29uZmlnL2lzc3Vlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFrQztBQUNsQyxzQ0FBbUM7QUFFbkMsNENBQXdDO0FBRXhDOzs7O0dBSUc7QUFDSCxNQUFhLGdCQUFpQixTQUFRLGVBQU07SUFDMUMseUNBQXlDO0lBRXpDLFlBQVksT0FBcUI7UUFDL0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWYsNERBQTREO0lBQzlELENBQUM7SUFFRCxNQUFNO0lBQ04sdUVBQXVFO0lBQ3ZFLEtBQUs7SUFDTCw2Q0FBNkM7SUFDN0MsTUFBTTtJQUNOLHlEQUF5RDtJQUN6RCxlQUFlO0lBQ2YsSUFBSTtJQUVKLE1BQU07SUFDTixxRUFBcUU7SUFDckUsS0FBSztJQUNMLDJGQUEyRjtJQUMzRiw4REFBOEQ7SUFDOUQsTUFBTTtJQUNOLG9FQUFvRTtJQUNwRSxhQUFhO0lBQ2IsNENBQTRDO0lBQzVDLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osdUVBQXVFO0lBQ3ZFLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLDZEQUE2RDtJQUM3RCw0Q0FBNEM7SUFDNUMsNkRBQTZEO0lBQzdELHdEQUF3RDtJQUN4RCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixzSEFBc0g7SUFDdEgsNEdBQTRHO0lBQzVHLG1HQUFtRztJQUNuRywyRUFBMkU7SUFDM0Usb0RBQW9EO0lBQ3BELFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHFFQUFxRTtJQUNyRSxtREFBbUQ7SUFDbkQsU0FBUztJQUNULE9BQU87SUFDUCxJQUFJO0lBRUo7Ozs7O09BS0c7SUFDSCxJQUFjLGtCQUFrQjtRQUM5QixPQUFPO1lBQ0wsZ0NBQWdDLEVBQUU7Z0JBQ2hDLGNBQWM7Z0JBQ2QsK0JBQStCO2dCQUMvQix3QkFBd0I7Z0JBQ3hCLHVCQUF1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LEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsT0FBd0IsQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDbEcsQ0FBQztRQUNELGdFQUFnRTtJQUNsRSxDQUFDO0lBRWUsV0FBVztRQUN6Qix1REFBdUQ7UUFDdkQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNuRCxpREFBaUQ7UUFDakQsMkRBQTJEO1FBQzNELGlFQUFpRTtRQUVqRSxnREFBZ0Q7UUFDaEQsaUZBQWlGO1FBQ2pGLElBQUk7SUFDTixDQUFDOztBQWhjSCw0Q0FpY0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0RmlsZSB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgUHJvamVjdFR5cGVzIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcy9wcm9qZWN0JztcbmltcG9ydCB7IHV0aWwgfSBmcm9tICcuLi8uLi91dGlsL3V0aWxzJztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IEdpdEh1YiBjb25maWd1cmF0aW9uLlxuICpcbiAqIFRoaXMgY2xhc3MgYWN0cyBhcyBhIGJhc2UgZm9yIGhhbmRsaW5nIEdpdEh1YiBjb25maWd1cmF0aW9uIHdpdGhpbiBwcm9qZWN0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIElzc3Vlc0NvbmZpZ0Jhc2UgZXh0ZW5kcyBDb25maWcge1xuICAvLyBwcm90ZWN0ZWQgYXR0cmlidXRlUGF0dGVybnM6IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFByb2plY3RUeXBlcykge1xuICAgIHN1cGVyKHByb2plY3QpO1xuXG4gICAgLy8gdGhpcy5hdHRyaWJ1dGVQYXR0ZXJucyA9IHRoaXMuc3RhbmRhcmRBdHRyaWJ1dGVzUGF0dGVybnM7XG4gIH1cblxuICAvLyAvKipcbiAgLy8gICogR2V0cyB0aGUgc3RhbmRhcmQgYXR0cmlidXRlcyBwYXR0ZXJucyByZXF1aXJlZCBmb3IgY29uZmlndXJhdGlvbi5cbiAgLy8gICpcbiAgLy8gICogQHJldHVybnMgQSBsaXN0IG9mIGF0dHJpYnV0ZXMgcGF0dGVybnMuXG4gIC8vICAqL1xuICAvLyBwcm90ZWN0ZWQgZ2V0IHN0YW5kYXJkQXR0cmlidXRlc1BhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgLy8gICByZXR1cm4gW107XG4gIC8vIH1cblxuICAvLyAvKipcbiAgLy8gICogUmV0cmlldmVzIHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUgcHVsbCByZXF1ZXN0IHRlbXBsYXRlIGZpbGUuXG4gIC8vICAqXG4gIC8vICAqIEByZXR1cm5zIEEgcmVjb3JkIHdoZXJlIHRoZSBrZXkgaXMgdGhlIGZpbGUgcGF0aCBhbmQgdGhlIHZhbHVlIGlzIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAgLy8gICogICAgICAgICAgcmVwcmVzZW50aW5nIHRoZSBjb250ZW50IG9mIHRoZSBpc3N1ZSB0ZW1wbGF0ZS5cbiAgLy8gICovXG4gIC8vIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZVB1bGxSZXF1ZXN0KCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gIC8vICAgcmV0dXJuIHtcbiAgLy8gICAgICcuZ2l0aHViL3B1bGxfcmVxdWVzdF90ZW1wbGF0ZS5tZCc6IFtcbiAgLy8gICAgICAgJyMjIFJldmlld2VycyBDaGVja2xpc3QnLFxuICAvLyAgICAgICAnJyxcbiAgLy8gICAgICAgJ2ZvciBjb21wbGV0ZSByZXZpZXcgbGlzdCByZWZlciB0byBBQlMgTG9vcCAtIFJldmlldyBBc3BlY3RzJyxcbiAgLy8gICAgICAgJycsXG4gIC8vICAgICAgICcjIyMgT3JnYW5pemF0aW9uYWwgU2VjdGlvbicsXG4gIC8vICAgICAgICcnLFxuICAvLyAgICAgICAnLSBbIF0gUFIgaXMgYXNzaWduZWQgdG8gdGhlIGFjY29yZGluZyBmZWF0dXJlL2J1ZycsXG4gIC8vICAgICAgICctIFsgXSBGZWF0dXJlL2J1ZyBpcyBkZXNjcmlwdGl2ZScsXG4gIC8vICAgICAgICctIFsgXSBGZWF0dXJlL2J1ZyBpcyBhc3NpZ25lZCB0byBhY2NvcmRpbmcgbGFiZWxzJyxcbiAgLy8gICAgICAgJy0gWyBdIEZlYXR1cmUvYnVnIGlzIGFzc2lnbmVkIHRvIGEgZGV2ZWxvcGVyJyxcbiAgLy8gICAgICAgJycsXG4gIC8vICAgICAgICcjIyMgU3RydWN0dXJlJyxcbiAgLy8gICAgICAgJycsXG4gIC8vICAgICAgICctIFsgXSBSZWFkYWJpbGl0eTogQ29kZSBpcyBlYXN5IHRvIHVuZGVyc3RhbmQsIHdpdGggbWVhbmluZ2Z1bCBuYW1lcyBmb3IgdmFyaWFibGVzLCBmdW5jdGlvbnMsIGFuZCBjbGFzc2VzJyxcbiAgLy8gICAgICAgJy0gWyBdIENvbW1lbnRzOiBNZWFuaW5nZnVsIGFuZCBoZWxwZnVsIGNvbW1lbnRzLiBDb2RlIGlzIGRvY3VtZW50ZWQgd2l0aG91dCBiZWluZyBvdmVyLWNvbW1lbnRlZCcsXG4gIC8vICAgICAgICctIFsgXSBEUlksIEtJU1MgYW5kIFlBR05JOiBDb2RlIGltcGxlbWVudHMgb25seSBuZWNlc3NhcnkgZmVhdHVyZXM7IG5vIG92ZXItZW5naW5lZXJpbmcnLFxuICAvLyAgICAgICAnLSBbIF0gTm8gc2Vuc2l0aXZlIGRhdGEgKGUuZy4sIHBhc3N3b3JkcywgQVBJIGtleXMpIGluIHRoZSBjb2RlJyxcbiAgLy8gICAgICAgJy0gWyBdIE5vIG1ham9yIHVwZGF0ZXMgZm9yIHVzZWQgcGFja2FnZXMnLFxuICAvLyAgICAgICAnJyxcbiAgLy8gICAgICAgJyMjIyBUZXN0aW5nJyxcbiAgLy8gICAgICAgJycsXG4gIC8vICAgICAgICctIFsgXSBDb2RlIGlzIGxvY2FsbHkgdGVzdGVkIGJ5IGRldmVsb3BlciAoaWYgYXBwbGljYWJsZSknLFxuICAvLyAgICAgICAnLSBbIF0gQXV0b21hdGVkIHRlc3RzIHBhc3Mgc3VjY2Vzc2Z1bGx5JyxcbiAgLy8gICAgIF0sXG4gIC8vICAgfTtcbiAgLy8gfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBidWcgaXNzdWUgdGVtcGxhdGUgZmlsZS5cbiAgICpcbiAgICogQHJldHVybnMgQSByZWNvcmQgd2hlcmUgdGhlIGtleSBpcyB0aGUgZmlsZSBwYXRoIGFuZCB0aGUgdmFsdWUgaXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgKiAgICAgICAgICByZXByZXNlbnRpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIGlzc3VlIHRlbXBsYXRlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBjb25maWdGaWxlQnVnSXNzdWUoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5naXRodWIvSVNTVUVfVEVNUExBVEUvYnVnLnltbCc6IFtcbiAgICAgICAgJ25hbWU6IPCfkJ4gQnVnJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uOiBGaWxlIGEgYnVnL2lzc3VlJyxcbiAgICAgICAgJ3RpdGxlOiBcIltCVUddIDx0aXRsZT5cIicsXG4gICAgICAgICdsYWJlbHM6IFtcInR5cGU6IGJ1Z1wiXScsXG4gICAgICAgICdib2R5OicsXG4gICAgICAgICcgIC0gdHlwZTogdGV4dGFyZWEnLFxuICAgICAgICAnICAgIGF0dHJpYnV0ZXM6JyxcbiAgICAgICAgJyAgICAgIGxhYmVsOiBDdXJyZW50IGJlaGF2aW9yJyxcbiAgICAgICAgXCIgICAgICBkZXNjcmlwdGlvbjogQSBkZXNjcmlwdGlvbiBvZiB3aGF0IHlvdSdyZSBleHBlcmllbmNpbmcuXCIsXG4gICAgICAgICcgICAgdmFsaWRhdGlvbnM6JyxcbiAgICAgICAgJyAgICAgIHJlcXVpcmVkOiB0cnVlJyxcbiAgICAgICAgJycsXG4gICAgICAgICcgIC0gdHlwZTogdGV4dGFyZWEnLFxuICAgICAgICAnICAgIGF0dHJpYnV0ZXM6JyxcbiAgICAgICAgJyAgICAgIGxhYmVsOiBFeHBlY3RlZCBiZWhhdmlvcicsXG4gICAgICAgICcgICAgICBkZXNjcmlwdGlvbjogQSBkZXNjcmlwdGlvbiBvZiB3aGF0IHlvdSBleHBlY3RlZCB0byBoYXBwZW4uJyxcbiAgICAgICAgJyAgICB2YWxpZGF0aW9uczonLFxuICAgICAgICAnICAgICAgcmVxdWlyZWQ6IHRydWUnLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIGZlYXR1cmUgcmVxdWVzdCB0ZW1wbGF0ZSBmaWxlLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIHJlY29yZCB3aGVyZSB0aGUga2V5IGlzIHRoZSBmaWxlIHBhdGggYW5kIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSBvZiBzdHJpbmdzXG4gICAqICAgICAgICAgIHJlcHJlc2VudGluZyB0aGUgY29udGVudCBvZiB0aGUgaXNzdWUgdGVtcGxhdGUuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGNvbmZpZ0ZpbGVGZWF0dXJlSXNzdWUoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5naXRodWIvSVNTVUVfVEVNUExBVEUvZmVhdHVyZS55bWwnOiBbXG4gICAgICAgICduYW1lOiDwn5KhIEZlYXR1cmUnLFxuICAgICAgICAnZGVzY3JpcHRpb246IFJlcXVlc3QgZm9yIGEgbmV3IGZlYXR1cmUnLFxuICAgICAgICAndGl0bGU6IFwiW0ZFQVRVUkVdIDx0aXRsZT5cIicsXG4gICAgICAgICdsYWJlbHM6IFtcInR5cGU6IGZlYXR1cmVcIl0nLFxuICAgICAgICAnYm9keTonLFxuICAgICAgICAnICAtIHR5cGU6IHRleHRhcmVhJyxcbiAgICAgICAgJyAgICBhdHRyaWJ1dGVzOicsXG4gICAgICAgICcgICAgICBsYWJlbDogRGVzY3JpcHRpb24nLFxuICAgICAgICAnICAgICAgZGVzY3JpcHRpb246IEEgZGVzY3JpcHRpb24gb2YgdGhlIGZlYXR1cmUuJyxcbiAgICAgICAgJyAgICB2YWxpZGF0aW9uczonLFxuICAgICAgICAnICAgICAgcmVxdWlyZWQ6IHRydWUnLFxuICAgICAgICAnJyxcbiAgICAgICAgJyAgLSB0eXBlOiB0ZXh0YXJlYScsXG4gICAgICAgICcgICAgYXR0cmlidXRlczonLFxuICAgICAgICAnICAgICAgbGFiZWw6IFRhc2sgTGlzdCcsXG4gICAgICAgICcgICAgICBkZXNjcmlwdGlvbjogRGVzY3JpYmUgdGhlIHN0ZXBzIHRvIGZ1bGZpbGwgdGhlIGZlYXR1cmUuJyxcbiAgICAgICAgJyAgICAgIHZhbHVlOiB8JyxcbiAgICAgICAgJyAgICAgICAgLSBbIF0gTXkgRmlyc3QgVGFzaycsXG4gICAgICAgICcgICAgdmFsaWRhdGlvbnM6JyxcbiAgICAgICAgJyAgICAgIHJlcXVpcmVkOiB0cnVlJyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBob3VzZWtlZXBpbmcgaXNzdWUgdGVtcGxhdGUgZmlsZS5cbiAgICpcbiAgICogQHJldHVybnMgQSByZWNvcmQgd2hlcmUgdGhlIGtleSBpcyB0aGUgZmlsZSBwYXRoIGFuZCB0aGUgdmFsdWUgaXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgKiAgICAgICAgICByZXByZXNlbnRpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIGlzc3VlIHRlbXBsYXRlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBjb25maWdGaWxlSG91c2VrZWVwaW5nSXNzdWUoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5naXRodWIvSVNTVUVfVEVNUExBVEUvaG91c2VrZWVwaW5nLnltbCc6IFtcbiAgICAgICAgJ25hbWU6IPCfkqEgSG91c2VrZWVwaW5nJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uOiBNYWludGVuYW5jZSBvciByZWZhY3RvcmluZyB0YXNrJyxcbiAgICAgICAgJ3RpdGxlOiBcIltIT1VTRUtFRVBJTkddIDx0aXRsZT5cIicsXG4gICAgICAgICdsYWJlbHM6IFtcInR5cGU6IGhvdXNla2VlcGluZ1wiXScsXG4gICAgICAgICdib2R5OicsXG4gICAgICAgICcgIC0gdHlwZTogdGV4dGFyZWEnLFxuICAgICAgICAnICAgIGF0dHJpYnV0ZXM6JyxcbiAgICAgICAgJyAgICAgIGxhYmVsOiBEZXNjcmlwdGlvbicsXG4gICAgICAgICcgICAgICBkZXNjcmlwdGlvbjogQSBkZXNjcmlwdGlvbiBvZiB0aGUgaG91c2VrZWVwaW5nIHRhc2suJyxcbiAgICAgICAgJyAgICB2YWxpZGF0aW9uczonLFxuICAgICAgICAnICAgICAgcmVxdWlyZWQ6IHRydWUnLFxuICAgICAgICAnJyxcbiAgICAgICAgJyAgLSB0eXBlOiB0ZXh0YXJlYScsXG4gICAgICAgICcgICAgYXR0cmlidXRlczonLFxuICAgICAgICAnICAgICAgbGFiZWw6IFRhc2sgTGlzdCcsXG4gICAgICAgICcgICAgICBkZXNjcmlwdGlvbjogRGVzY3JpYmUgdGhlIHN0ZXBzIHRvIGZ1bGZpbGwgdGhlIGhvdXNla2VlcGluZyB0YXNrLicsXG4gICAgICAgICcgICAgICB2YWx1ZTogfCcsXG4gICAgICAgICcgICAgICAgIC0gWyBdIE15IEZpcnN0IFRhc2snLFxuICAgICAgICAnICAgIHZhbGlkYXRpb25zOicsXG4gICAgICAgICcgICAgICByZXF1aXJlZDogdHJ1ZScsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUgcXVlc3Rpb24gaXNzdWUgdGVtcGxhdGUgZmlsZS5cbiAgICpcbiAgICogQHJldHVybnMgQSByZWNvcmQgd2hlcmUgdGhlIGtleSBpcyB0aGUgZmlsZSBwYXRoIGFuZCB0aGUgdmFsdWUgaXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgKiAgICAgICAgICByZXByZXNlbnRpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIGlzc3VlIHRlbXBsYXRlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBjb25maWdGaWxlUXVlc3Rpb25Jc3N1ZSgpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnLmdpdGh1Yi9JU1NVRV9URU1QTEFURS9xdWVzdGlvbi55bWwnOiBbXG4gICAgICAgICduYW1lOiDinZMgUXVlc3Rpb24nLFxuICAgICAgICAnZGVzY3JpcHRpb246IEFzayBhIHF1ZXN0aW9uJyxcbiAgICAgICAgJ3RpdGxlOiBcIltRVUVTVElPTl0gPHRpdGxlPlwiJyxcbiAgICAgICAgJ2xhYmVsczogW1widHlwZTogcXVlc3Rpb25cIl0nLFxuICAgICAgICAnYm9keTonLFxuICAgICAgICAnICAtIHR5cGU6IHRleHRhcmVhJyxcbiAgICAgICAgJyAgICBhdHRyaWJ1dGVzOicsXG4gICAgICAgICcgICAgICBsYWJlbDogUXVlc3Rpb24nLFxuICAgICAgICAnICAgICAgZGVzY3JpcHRpb246IFdoYXQgd291bGQgeW91IGxpa2UgdG8ga25vdz8gSWYgeW91IGVuY291bnRlciB1bnVzdWFsIGJlaGF2aW9yIG9yIGlkZW50aWZpZWQgYSBtaXNzaW5nIGZlYXR1cmUsIGNvbnNpZGVyIG9wZW5pbmcgYSBidWcgcmVwb3J0IGluc3RlYWQuJyxcbiAgICAgICAgJyAgICB2YWxpZGF0aW9uczonLFxuICAgICAgICAnICAgICAgcmVxdWlyZWQ6IHRydWUnLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBjb25maWdGaWxlU3RvcnlJc3N1ZSgpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnLmdpdGh1Yi9JU1NVRV9URU1QTEFURS9zdG9yeS55bWwnOiBbXG4gICAgICAgICduYW1lOiDwn5KhIFN0b3J5JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uOiBBcyBhIFtyb2xlXSwgSSBbd2FudCB0b10sIFtzbyB0aGF0XScsXG4gICAgICAgICd0aXRsZTogXCJbU1RPUlldIDx0aXRsZT5cIicsXG4gICAgICAgICdsYWJlbHM6IFtcInR5cGU6IHN0b3J5XCJdJyxcbiAgICAgICAgJ2JvZHk6JyxcbiAgICAgICAgJyAgLSB0eXBlOiB0ZXh0YXJlYScsXG4gICAgICAgICcgICAgYXR0cmlidXRlczonLFxuICAgICAgICAnICAgICAgbGFiZWw6IERlc2NyaXB0aW9uJyxcbiAgICAgICAgXCIgICAgICBkZXNjcmlwdGlvbjogUHJvdmlkZSBhIGJyaWVmIG92ZXJ2aWV3IG9mIHRoZSBzdG9yeSwgZm9jdXNpbmcgd2hvIHdhbnQncyB0byBkbyB3aGF0IGFuZCB3aHkuXCIsXG4gICAgICAgICcgICAgdmFsaWRhdGlvbnM6JyxcbiAgICAgICAgJyAgICAgIHJlcXVpcmVkOiB0cnVlJyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIC8vIC8qKlxuICAvLyAgKiBSZXRyaWV2ZXMgdGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBnaXQgY2xpZmYgdGVtcGxhdGUgZmlsZS5cbiAgLy8gICpcbiAgLy8gICogQHJldHVybnMgQSByZWNvcmQgd2hlcmUgdGhlIGtleSBpcyB0aGUgZmlsZSBwYXRoIGFuZCB0aGUgdmFsdWUgaXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAvLyAgKiAgICAgICAgICByZXByZXNlbnRpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIGlzc3VlIHRlbXBsYXRlLlxuICAvLyAgKi9cbiAgLy8gcHJvdGVjdGVkIGdldCBjb25maWdGaWxlQ2xpZmYoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgLy8gICByZXR1cm4ge1xuICAvLyAgICAgJ2NsaWZmLnRvbWwnOiBbXG4gIC8vICAgICAgICcjIGdpdC1jbGlmZiB+IGRlZmF1bHQgY29uZmlndXJhdGlvbiBmaWxlJyxcbiAgLy8gICAgICAgJyMgaHR0cHM6Ly9naXQtY2xpZmYub3JnL2RvY3MvY29uZmlndXJhdGlvbicsXG4gIC8vICAgICAgICcjJyxcbiAgLy8gICAgICAgJyMgTGluZXMgc3RhcnRpbmcgd2l0aCBcIiNcIiBhcmUgY29tbWVudHMuJyxcbiAgLy8gICAgICAgJyMgQ29uZmlndXJhdGlvbiBvcHRpb25zIGFyZSBvcmdhbml6ZWQgaW50byB0YWJsZXMgYW5kIGtleXMuJyxcbiAgLy8gICAgICAgJyMgU2VlIGRvY3VtZW50YXRpb24gZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gYXZhaWxhYmxlIG9wdGlvbnMuJyxcbiAgLy8gICAgICAgJycsXG4gIC8vICAgICAgICdbY2hhbmdlbG9nXScsXG4gIC8vICAgICAgICcjIGNoYW5nZWxvZyBoZWFkZXInLFxuICAvLyAgICAgICAnaGVhZGVyID0gXCJcIlwiJyxcbiAgLy8gICAgICAgJyMgQ2hhbmdlbG9nXFxcXG4nLFxuICAvLyAgICAgICAnQWxsIG5vdGFibGUgY2hhbmdlcyB0byB0aGlzIHByb2plY3Qgd2lsbCBiZSBkb2N1bWVudGVkIGluIHRoaXMgZmlsZS5cXFxcbicsXG4gIC8vICAgICAgICdcIlwiXCInLFxuICAvLyAgICAgICAnIyB0ZW1wbGF0ZSBmb3IgdGhlIGNoYW5nZWxvZyBib2R5JyxcbiAgLy8gICAgICAgJyMgaHR0cHM6Ly9rZWF0cy5naXRodWIuaW8vdGVyYS9kb2NzLyNpbnRyb2R1Y3Rpb24nLFxuICAvLyAgICAgICAnYm9keSA9IFwiXCJcIicsXG4gIC8vICAgICAgICd7JSBpZiB2ZXJzaW9uICV9XFxcXCcsXG4gIC8vICAgICAgICcgICAgIyMgW3t7IHZlcnNpb24gfCB0cmltX3N0YXJ0X21hdGNoZXMocGF0PVwidlwiKSB9fV0gLSB7eyB0aW1lc3RhbXAgfCBkYXRlKGZvcm1hdD1cIiVZLSVtLSVkXCIpIH19JyxcbiAgLy8gICAgICAgJ3slIGVsc2UgJX1cXFxcJyxcbiAgLy8gICAgICAgJyAgICAjIyBbdW5yZWxlYXNlZF0nLFxuICAvLyAgICAgICAneyUgZW5kaWYgJX1cXFxcJyxcbiAgLy8gICAgICAgJ3slIGZvciBncm91cCwgY29tbWl0cyBpbiBjb21taXRzIHwgZ3JvdXBfYnkoYXR0cmlidXRlPVwiZ3JvdXBcIikgJX0nLFxuICAvLyAgICAgICAnICAgICMjIyB7eyBncm91cCB8IHN0cmlwdGFncyB8IHRyaW0gfCB1cHBlcl9maXJzdCB9fScsXG4gIC8vICAgICAgICcgICAgeyUgZm9yIGNvbW1pdCBpbiBjb21taXRzICV9JyxcbiAgLy8gICAgICAgJyAgICAgICAgLSB7JSBpZiBjb21taXQuc2NvcGUgJX0qKHt7IGNvbW1pdC5zY29wZSB9fSkqIHslIGVuZGlmICV9XFxcXCcsXG4gIC8vICAgICAgICcgICAgICAgICAgICB7JSBpZiBjb21taXQuYnJlYWtpbmcgJX1bKipicmVha2luZyoqXSB7JSBlbmRpZiAlfVxcXFwnLFxuICAvLyAgICAgICAnICAgICAgICAgICAge3sgY29tbWl0Lm1lc3NhZ2UgfCB1cHBlcl9maXJzdCB9fVxcXFwnLFxuICAvLyAgICAgICAnICAgIHslIGVuZGZvciAlfScsXG4gIC8vICAgICAgICd7JSBlbmRmb3IgJX1cXFxcbicsXG4gIC8vICAgICAgICdcIlwiXCInLFxuICAvLyAgICAgICAnIyB0ZW1wbGF0ZSBmb3IgdGhlIGNoYW5nZWxvZyBmb290ZXInLFxuICAvLyAgICAgICAnZm9vdGVyID0gXCJcIlwiJyxcbiAgLy8gICAgICAgJzwhLS0gZ2VuZXJhdGVkIGJ5IGdpdC1jbGlmZiAtLT4nLFxuICAvLyAgICAgICAnXCJcIlwiJyxcbiAgLy8gICAgICAgJyMgcmVtb3ZlIHRoZSBsZWFkaW5nIGFuZCB0cmFpbGluZyBzJyxcbiAgLy8gICAgICAgJ3RyaW0gPSB0cnVlJyxcbiAgLy8gICAgICAgJyMgcG9zdHByb2Nlc3NvcnMnLFxuICAvLyAgICAgICAncG9zdHByb2Nlc3NvcnMgPSBbJyxcbiAgLy8gICAgICAgJyAgIyB7IHBhdHRlcm4gPSBcIjxSRVBPPlwiLCByZXBsYWNlID0gXCJodHRwczovL2dpdGh1Yi5jb20vb3JodW4vZ2l0LWNsaWZmXCIgfSwgIyByZXBsYWNlIHJlcG9zaXRvcnkgVVJMJyxcbiAgLy8gICAgICAgJ10nLFxuICAvLyAgICAgICAnJyxcbiAgLy8gICAgICAgJ1tnaXRdJyxcbiAgLy8gICAgICAgJyMgcGFyc2UgdGhlIGNvbW1pdHMgYmFzZWQgb24gaHR0cHM6Ly93d3cuY29udmVudGlvbmFsY29tbWl0cy5vcmcnLFxuICAvLyAgICAgICAnY29udmVudGlvbmFsX2NvbW1pdHMgPSB0cnVlJyxcbiAgLy8gICAgICAgJyMgZmlsdGVyIG91dCB0aGUgY29tbWl0cyB0aGF0IGFyZSBub3QgY29udmVudGlvbmFsJyxcbiAgLy8gICAgICAgJ2ZpbHRlcl91bmNvbnZlbnRpb25hbCA9IHRydWUnLFxuICAvLyAgICAgICAnIyBwcm9jZXNzIGVhY2ggbGluZSBvZiBhIGNvbW1pdCBhcyBhbiBpbmRpdmlkdWFsIGNvbW1pdCcsXG4gIC8vICAgICAgICdzcGxpdF9jb21taXRzID0gZmFsc2UnLFxuICAvLyAgICAgICAnIyByZWdleCBmb3IgcHJlcHJvY2Vzc2luZyB0aGUgY29tbWl0IG1lc3NhZ2VzJyxcbiAgLy8gICAgICAgJ2NvbW1pdF9wcmVwcm9jZXNzb3JzID0gWycsXG4gIC8vICAgICAgICcgICMgUmVwbGFjZSBpc3N1ZSBudW1iZXJzJyxcbiAgLy8gICAgICAgJyAgI3sgcGF0dGVybiA9IFwiXFxcXCgoXFxcXHcrXFxcXHMpPyMoWzAtOV0rKVxcXFwpXCIsIHJlcGxhY2UgPSBcIihbIyR7Mn1dKDxSRVBPPi9pc3N1ZXMvJHsyfSkpXCJ9LCcsXG4gIC8vICAgICAgICcgICMgQ2hlY2sgc3BlbGxpbmcgb2YgdGhlIGNvbW1pdCB3aXRoIGh0dHBzOi8vZ2l0aHViLmNvbS9jcmF0ZS1jaS90eXBvcycsXG4gIC8vICAgICAgICcgICMgSWYgdGhlIHNwZWxsaW5nIGlzIGluY29ycmVjdCwgaXQgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGZpeGVkLicsXG4gIC8vICAgICAgICcgICN7IHBhdHRlcm4gPSBcIi4qXCIsIHJlcGxhY2VfY29tbWFuZCA9IFwidHlwb3MgLS13cml0ZS1jaGFuZ2VzIC1cIiB9LCcsXG4gIC8vICAgICAgICddJyxcbiAgLy8gICAgICAgJyMgcmVnZXggZm9yIHBhcnNpbmcgYW5kIGdyb3VwaW5nIGNvbW1pdHMnLFxuICAvLyAgICAgICAnY29tbWl0X3BhcnNlcnMgPSBbJyxcbiAgLy8gICAgICAgJyAgeyBtZXNzYWdlID0gXCJeZmVhdFwiLCBncm91cCA9IFwiPCEtLSAwIC0tPvCfmoAgRmVhdHVyZXNcIiB9LCcsXG4gIC8vICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXmZpeFwiLCBncm91cCA9IFwiPCEtLSAxIC0tPvCfkJsgQnVnIEZpeGVzXCIgfSwnLFxuICAvLyAgICAgICAnICB7IG1lc3NhZ2UgPSBcIl5kb2NcIiwgZ3JvdXAgPSBcIjwhLS0gMyAtLT7wn5OaIERvY3VtZW50YXRpb25cIiB9LCcsXG4gIC8vICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXnBlcmZcIiwgZ3JvdXAgPSBcIjwhLS0gNCAtLT7imqEgUGVyZm9ybWFuY2VcIiB9LCcsXG4gIC8vICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXnJlZmFjdG9yXCIsIGdyb3VwID0gXCI8IS0tIDIgLS0+8J+anCBSZWZhY3RvclwiIH0sJyxcbiAgLy8gICAgICAgJyAgeyBtZXNzYWdlID0gXCJec3R5bGVcIiwgZ3JvdXAgPSBcIjwhLS0gNSAtLT7wn46oIFN0eWxpbmdcIiB9LCcsXG4gIC8vICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXnRlc3RcIiwgZ3JvdXAgPSBcIjwhLS0gNiAtLT7wn6eqIFRlc3RpbmdcIiB9LCcsXG4gIC8vICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXmNob3JlXFxcXFxcXFwocmVsZWFzZVxcXFxcXFxcKTogcHJlcGFyZSBmb3JcIiwgc2tpcCA9IHRydWUgfSwnLFxuICAvLyAgICAgICAnICB7IG1lc3NhZ2UgPSBcIl5jaG9yZVxcXFxcXFxcKGRlcHMuKlxcXFxcXFxcKVwiLCBza2lwID0gdHJ1ZSB9LCcsXG4gIC8vICAgICAgICcgIHsgbWVzc2FnZSA9IFwiXmNob3JlXFxcXFxcXFwocHJcXFxcXFxcXClcIiwgc2tpcCA9IHRydWUgfSwnLFxuICAvLyAgICAgICAnICB7IG1lc3NhZ2UgPSBcIl5jaG9yZVxcXFxcXFxcKHB1bGxcXFxcXFxcXClcIiwgc2tpcCA9IHRydWUgfSwnLFxuICAvLyAgICAgICAnICB7IG1lc3NhZ2UgPSBcIl5jaG9yZXxeY2lcIiwgZ3JvdXAgPSBcIjwhLS0gNyAtLT7impnvuI8gTWlzY2VsbGFuZW91cyBUYXNrc1wiIH0sJyxcbiAgLy8gICAgICAgJyAgeyBib2R5ID0gXCIuKnNlY3VyaXR5XCIsIGdyb3VwID0gXCI8IS0tIDggLS0+8J+boe+4jyBTZWN1cml0eVwiIH0sJyxcbiAgLy8gICAgICAgJyAgeyBtZXNzYWdlID0gXCJecmV2ZXJ0XCIsIGdyb3VwID0gXCI8IS0tIDkgLS0+4peA77iPIFJldmVydFwiIH0sJyxcbiAgLy8gICAgICAgJ10nLFxuICAvLyAgICAgICAnIyBwcm90ZWN0IGJyZWFraW5nIGNoYW5nZXMgZnJvbSBiZWluZyBza2lwcGVkIGR1ZSB0byBtYXRjaGluZyBhIHNraXBwaW5nIGNvbW1pdF9wYXJzZXInLFxuICAvLyAgICAgICAncHJvdGVjdF9icmVha2luZ19jb21taXRzID0gZmFsc2UnLFxuICAvLyAgICAgICAnIyBmaWx0ZXIgb3V0IHRoZSBjb21taXRzIHRoYXQgYXJlIG5vdCBtYXRjaGVkIGJ5IGNvbW1pdCBwYXJzZXJzJyxcbiAgLy8gICAgICAgJ2ZpbHRlcl9jb21taXRzID0gZmFsc2UnLFxuICAvLyAgICAgICAnIyByZWdleCBmb3IgbWF0Y2hpbmcgZ2l0IHRhZ3MnLFxuICAvLyAgICAgICAnIyB0YWdfcGF0dGVybiA9IFwidlswLTldLipcIicsXG4gIC8vICAgICAgICcjIHJlZ2V4IGZvciBza2lwcGluZyB0YWdzJyxcbiAgLy8gICAgICAgJyMgc2tpcF90YWdzID0gXCJcIicsXG4gIC8vICAgICAgICcjIHJlZ2V4IGZvciBpZ25vcmluZyB0YWdzJyxcbiAgLy8gICAgICAgJyMgaWdub3JlX3RhZ3MgPSBcIlwiJyxcbiAgLy8gICAgICAgJyMgc29ydCB0aGUgdGFncyB0b3BvbG9naWNhbGx5JyxcbiAgLy8gICAgICAgJ3RvcG9fb3JkZXIgPSBmYWxzZScsXG4gIC8vICAgICAgICcjIHNvcnQgdGhlIGNvbW1pdHMgaW5zaWRlIHNlY3Rpb25zIGJ5IG9sZGVzdC9uZXdlc3Qgb3JkZXInLFxuICAvLyAgICAgICAnc29ydF9jb21taXRzID0gXCJvbGRlc3RcIicsXG4gIC8vICAgICAgICcjIGxpbWl0IHRoZSBudW1iZXIgb2YgY29tbWl0cyBpbmNsdWRlZCBpbiB0aGUgY2hhbmdlbG9nLicsXG4gIC8vICAgICAgICcjIGxpbWl0X2NvbW1pdHMgPSA0MicsXG4gIC8vICAgICBdLFxuICAvLyAgIH07XG4gIC8vIH1cblxuICAvLyAvKipcbiAgLy8gICogUmV0cmlldmVzIHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUgcmVsZWFzZSB3b3JrZmxvdyB0ZW1wbGF0ZSBmaWxlLlxuICAvLyAgKlxuICAvLyAgKiBAcmV0dXJucyBBIHJlY29yZCB3aGVyZSB0aGUga2V5IGlzIHRoZSBmaWxlIHBhdGggYW5kIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSBvZiBzdHJpbmdzXG4gIC8vICAqICAgICAgICAgIHJlcHJlc2VudGluZyB0aGUgY29udGVudCBvZiB0aGUgaXNzdWUgdGVtcGxhdGUuXG4gIC8vICAqL1xuICAvLyBwcm90ZWN0ZWQgZ2V0IGNvbmZpZ0ZpbGVSZWxlYXNlV29ya2Zsb3coKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgLy8gICByZXR1cm4ge1xuICAvLyAgICAgJy5naXRodWIvd29ya2Zsb3dzL3JlbGVhc2UueW1sJzogW1xuICAvLyAgICAgICAnbmFtZTogUmVsZWFzZScsXG4gIC8vICAgICAgICdvbjonLFxuICAvLyAgICAgICAnICBwdWxsX3JlcXVlc3Q6JyxcbiAgLy8gICAgICAgJyAgICBicmFuY2hlczonLFxuICAvLyAgICAgICAnICAgICAgLSBkZXYnLFxuICAvLyAgICAgICAnICAgIHR5cGVzOicsXG4gIC8vICAgICAgICcgICAgICAtIGNsb3NlZCcsXG4gIC8vICAgICAgICdqb2JzOicsXG4gIC8vICAgICAgICcgIHJlbGVhc2U6JyxcbiAgLy8gICAgICAgJyAgICBydW5zLW9uOiB1YnVudHUtbGF0ZXN0JyxcbiAgLy8gICAgICAgJyAgICBwZXJtaXNzaW9uczonLFxuICAvLyAgICAgICAnICAgICAgY29udGVudHM6IHdyaXRlJyxcbiAgLy8gICAgICAgJyAgICAgIHB1bGwtcmVxdWVzdHM6IHdyaXRlJyxcbiAgLy8gICAgICAgJyAgICBzdGVwczonLFxuICAvLyAgICAgICAnICAgICAgLSBuYW1lOiBDcmVhdGUgcmVsZWFzZScsXG4gIC8vICAgICAgICcgICAgICAgIHVzZXM6IGR4ZnJvbnRpZXIvZ2gtYWN0aW9uLXJlbGVhc2VAbWFpbicsXG4gIC8vICAgICAgICcgICAgICAgIHdpdGg6JyxcbiAgLy8gICAgICAgJyAgICAgICAgICBHSVRIVUJfVE9LRU46ICR7eyBzZWNyZXRzLkdJVEhVQl9UT0tFTiB9fScsXG4gIC8vICAgICAgICcgICAgICAgICAgQlJBTkNIOiBkZXYnLFxuICAvLyAgICAgXSxcbiAgLy8gICB9O1xuICAvLyB9XG5cbiAgLy8gLyoqXG4gIC8vICAqIFJldHJpZXZlcyB0aGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIGVuZm9yY2UgbGFiZWxzIHdvcmtmbG93IHRlbXBsYXRlIGZpbGUuXG4gIC8vICAqXG4gIC8vICAqIEByZXR1cm5zIEEgcmVjb3JkIHdoZXJlIHRoZSBrZXkgaXMgdGhlIGZpbGUgcGF0aCBhbmQgdGhlIHZhbHVlIGlzIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAgLy8gICogICAgICAgICAgcmVwcmVzZW50aW5nIHRoZSBjb250ZW50IG9mIHRoZSB3b3JrZmxvdyB0ZW1wbGF0ZS5cbiAgLy8gICovXG4gIC8vIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZUVuZm9yY2VMYWJlbHNXb3JrZmxvdygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAvLyAgIHJldHVybiB7XG4gIC8vICAgICAnLmdpdGh1Yi93b3JrZmxvd3MvZW5mb3JjZS1sYWJlbHMueW1sJzogW1xuICAvLyAgICAgICAnbmFtZTogRW5mb3JjZSBsYWJlbHMnLFxuICAvLyAgICAgICAnJyxcbiAgLy8gICAgICAgJ29uOicsXG4gIC8vICAgICAgICcgIHB1bGxfcmVxdWVzdDonLFxuICAvLyAgICAgICAnICAgIHR5cGVzOiBbb3BlbmVkLCBsYWJlbGVkXScsXG4gIC8vICAgICAgICcnLFxuICAvLyAgICAgICAncGVybWlzc2lvbnM6JyxcbiAgLy8gICAgICAgJyAgY29udGVudHM6IHdyaXRlJyxcbiAgLy8gICAgICAgJyAgcHVsbC1yZXF1ZXN0czogcmVhZCcsXG4gIC8vICAgICAgICcnLFxuICAvLyAgICAgICAnam9iczonLFxuICAvLyAgICAgICAnICBlbmZvcmNlLWxhYmVsLXZlcnNpb24tcmVsZWFzZTonLFxuICAvLyAgICAgICBcIiAgICBuYW1lOiAnRW5mb3JjZSBMYWJlbHM6IHZlcnNpb246IHBhdGNoLCB2ZXJzaW9uOiBtaW5vciwgdmVyc2lvbjogbWFqb3IsIG5vX3JlbGVhc2UnXCIsXG4gIC8vICAgICAgICcgICAgcnVucy1vbjogdWJ1bnR1LWxhdGVzdCcsXG4gIC8vICAgICAgICcgICAgc3RlcHM6JyxcbiAgLy8gICAgICAgJyAgICAgIC0gbmFtZTogQ2hlY2sgb3V0IGNvZGUnLFxuICAvLyAgICAgICAnICAgICAgICB1c2VzOiBhY3Rpb25zL2NoZWNrb3V0QHY0JyxcbiAgLy8gICAgICAgJyAgICAgIC0gbmFtZTogRW5mb3JjZSB2ZXJzaW9uIHJlbGVhc2UgbGFiZWxzJyxcbiAgLy8gICAgICAgJyAgICAgICAgdXNlczogeW9nZXZiZC9lbmZvcmNlLWxhYmVsLWFjdGlvbkAyLjIuMicsXG4gIC8vICAgICAgICcgICAgICAgIHdpdGg6JyxcbiAgLy8gICAgICAgXCIgICAgICAgICAgUkVRVUlSRURfTEFCRUxTX0FOWTogJ3ZlcnNpb246IHBhdGNoLHZlcnNpb246IG1pbm9yLHZlcnNpb246IG1ham9yLG5vX3JlbGVhc2UnXCIsXG4gIC8vICAgICAgIFwiICAgICAgICAgIFJFUVVJUkVEX0xBQkVMU19BTllfREVTQ1JJUFRJT046IFxcXCJTZWxlY3QgYXQgbGVhc3Qgb25lIGxhYmVsIFsndmVyc2lvbjogcGF0Y2gnLCAndmVyc2lvbjogbWlub3InLCAndmVyc2lvbjogbWFqb3InLCAnbm9fcmVsZWFzZSddXFxcIlwiLFxuICAvLyAgICAgXSxcbiAgLy8gICB9O1xuICAvLyB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSB0ZW1wbGF0ZSBmaWxlIGJhc2VkIG9uIHRoZSBwcm92aWRlZCBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gY29uZmlnIC0gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGZpbGUgcGF0aCBhbmQgY29udGVudC5cbiAgICovXG4gIHByaXZhdGUgY3JlYXRlVGVtcGxhdGVGaWxlKGNvbmZpZzogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+KTogdm9pZCB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKGNvbmZpZylbMF07XG4gICAgbmV3IFRleHRGaWxlKHRoaXMucHJvamVjdCwgZmlsZVBhdGgsIHtcbiAgICAgIGxpbmVzOiBjb25maWdbZmlsZVBhdGhdLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gLyoqXG4gIC8vICAqIEFkZHMgY3VzdG9tIGF0dHJpYnV0ZXMgcGF0dGVybnMgdG8gdGhlIHByb2plY3QncyBjb25maWd1cmF0aW9uLlxuICAvLyAgKlxuICAvLyAgKiBAcGFyYW0gcGF0dGVybnMgLSBBbiBhcnJheSBvZiBmaWxlIG9yIGRpcmVjdG9yeSBwYXR0ZXJucyB0byBiZSBhZGRlZCBhcyBhdHRyaWJ1dGVzLlxuICAvLyAgKi9cbiAgLy8gcHVibGljIGFkZEF0dHJpYnV0ZVBhdHRlcm5zKHBhdHRlcm5zOiBzdHJpbmdbXSk6IHZvaWQge1xuICAvLyAgIHRoaXMuYXR0cmlidXRlUGF0dGVybnMgPSBbLi4udGhpcy5hdHRyaWJ1dGVQYXR0ZXJucywgLi4ucGF0dGVybnNdO1xuICAvLyB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSBsaXN0IG9mIGFsbCByZWxldmFudCBjb25maWcgZmlsZXMuXG4gICAqIEByZXR1cm5zIExpc3Qgb2YgY29uZmlnc1xuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBjb25maWdzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPltdIHtcbiAgICByZXR1cm4gW1xuICAgICAgLy8gdGhpcy5jb25maWdGaWxlUHVsbFJlcXVlc3QsXG4gICAgICB0aGlzLmNvbmZpZ0ZpbGVCdWdJc3N1ZSxcbiAgICAgIHRoaXMuY29uZmlnRmlsZUZlYXR1cmVJc3N1ZSxcbiAgICAgIHRoaXMuY29uZmlnRmlsZUhvdXNla2VlcGluZ0lzc3VlLFxuICAgICAgdGhpcy5jb25maWdGaWxlUXVlc3Rpb25Jc3N1ZSxcbiAgICAgIHRoaXMuY29uZmlnRmlsZVN0b3J5SXNzdWUsXG4gICAgICAvLyB0aGlzLmNvbmZpZ0ZpbGVCdWdJc3N1ZSxcbiAgICAgIC8vIHRoaXMuY29uZmlnRmlsZUNsaWZmLFxuICAgICAgLy8gdGhpcy5jb25maWdGaWxlUmVsZWFzZVdvcmtmbG93LFxuICAgICAgLy8gdGhpcy5jb25maWdGaWxlRW5mb3JjZUxhYmVsc1dvcmtmbG93LFxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBmaWxlIHBhdGhzIGZvciBhbGwgZHluYW1pYyBjb25maWd1cmF0aW9uIGZpbGVzLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGxpc3Qgb2YgZmlsZSBwYXRoIHBhdHRlcm5zLCBpbmNsdWRpbmcgZHluYW1pYyBjb25maWd1cmF0aW9ucy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgZmlsZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBkeW5hbWljRmlsZVBhdGhzOiBzdHJpbmdbXSA9IHRoaXMuY29uZmlnc1xuICAgICAgLm1hcCgoY29uZmlnOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4pOiBzdHJpbmcgPT4gYC8ke09iamVjdC5rZXlzKGNvbmZpZylbMF19YClcbiAgICAgIC5maWx0ZXIoKGZpbGVQYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4gZmlsZVBhdGgpO1xuICAgIC8vIGNvbnN0IHN0YXRpY0ZpbGVQYXRoczogc3RyaW5nW10gPSBbJy8uZ2l0YXR0cmlidXRlcycsICcvLmdpdGlnbm9yZSddO1xuXG4gICAgLy8gcmV0dXJuIFsuLi5keW5hbWljRmlsZVBhdGhzLCAuLi5zdGF0aWNGaWxlUGF0aHNdO1xuICAgIHJldHVybiBbLi4uZHluYW1pY0ZpbGVQYXRoc107XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgcGF0dGVybnM6IHN0cmluZ1tdID0gWy4uLnRoaXMuZmlsZVBhdHRlcm5zXTtcblxuICAgIHJldHVybiBwYXR0ZXJucztcbiAgfVxuXG4gIC8vIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbEF0dHJpYnV0ZXNQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gIC8vICAgcmV0dXJuIFsnQ0hBTkdFTE9HLm1kJ107XG4gIC8vIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcmVnaXN0ZXJDb25maWcoKTogdm9pZCB7XG4gICAgaWYgKHV0aWwuaXNWYWxpZFByb2plY3QodGhpcy5wcm9qZWN0KSkge1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLnByZXR0aWVyQ29uZmlnPy5hZGRJZ25vcmVQYXR0ZXJucyh0aGlzLmFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucyk7XG4gICAgfVxuICAgIC8vIHRoaXMuYWRkQXR0cmlidXRlUGF0dGVybnModGhpcy5hZGRpdGlvbmFsQXR0cmlidXRlc1BhdHRlcm5zKTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBhcHBseUNvbmZpZygpOiB2b2lkIHtcbiAgICAvLyB0aGlzLmNyZWF0ZVRlbXBsYXRlRmlsZSh0aGlzLmNvbmZpZ0ZpbGVQdWxsUmVxdWVzdCk7XG4gICAgdGhpcy5jcmVhdGVUZW1wbGF0ZUZpbGUodGhpcy5jb25maWdGaWxlQnVnSXNzdWUpO1xuICAgIHRoaXMuY3JlYXRlVGVtcGxhdGVGaWxlKHRoaXMuY29uZmlnRmlsZUZlYXR1cmVJc3N1ZSk7XG4gICAgdGhpcy5jcmVhdGVUZW1wbGF0ZUZpbGUodGhpcy5jb25maWdGaWxlSG91c2VrZWVwaW5nSXNzdWUpO1xuICAgIHRoaXMuY3JlYXRlVGVtcGxhdGVGaWxlKHRoaXMuY29uZmlnRmlsZVF1ZXN0aW9uSXNzdWUpO1xuICAgIHRoaXMuY3JlYXRlVGVtcGxhdGVGaWxlKHRoaXMuY29uZmlnRmlsZVN0b3J5SXNzdWUpO1xuICAgIC8vIHRoaXMuY3JlYXRlVGVtcGxhdGVGaWxlKHRoaXMuY29uZmlnRmlsZUNsaWZmKTtcbiAgICAvLyB0aGlzLmNyZWF0ZVRlbXBsYXRlRmlsZSh0aGlzLmNvbmZpZ0ZpbGVSZWxlYXNlV29ya2Zsb3cpO1xuICAgIC8vIHRoaXMuY3JlYXRlVGVtcGxhdGVGaWxlKHRoaXMuY29uZmlnRmlsZUVuZm9yY2VMYWJlbHNXb3JrZmxvdyk7XG5cbiAgICAvLyBmb3IgKGNvbnN0IHZhbHVlIG9mIHRoaXMuYXR0cmlidXRlUGF0dGVybnMpIHtcbiAgICAvLyAgIHRoaXMucHJvamVjdC5naXRhdHRyaWJ1dGVzLmFkZEF0dHJpYnV0ZXMoYC8ke3ZhbHVlfWAsICdsaW5ndWlzdC1nZW5lcmF0ZWQnKTtcbiAgICAvLyB9XG4gIH1cbn1cbiJdfQ==
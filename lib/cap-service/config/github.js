"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubConfigCapService = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const base_1 = require("../../base");
/**
 * Implementing all relevant GitHub configuration for the CapService project.
 */
class GitHubConfigCapService extends base_1.GitHubConfigBase {
    get configFilePullRequest() {
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
    get configFileDeploymentWorkflow() {
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
    get configs() {
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
    createDeploymentWorkflow() {
        const filePath = Object.keys(this.configFileDeploymentWorkflow)[0];
        new projen_1.TextFile(this.project, filePath, {
            lines: this.configFileDeploymentWorkflow[filePath],
        });
    }
    applyConfig() {
        super.applyConfig();
        // this.createStoryIssue();
        this.createDeploymentWorkflow();
    }
}
exports.GitHubConfigCapService = GitHubConfigCapService;
_a = JSII_RTTI_SYMBOL_1;
GitHubConfigCapService[_a] = { fqn: "@dxfrontier/projen-template-projects.GitHubConfigCapService", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NhcC1zZXJ2aWNlL2NvbmZpZy9naXRodWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBa0M7QUFDbEMscUNBQThDO0FBRTlDOztHQUVHO0FBQ0gsTUFBYSxzQkFBdUIsU0FBUSx1QkFBZ0I7SUFDMUQsSUFBdUIscUJBQXFCO1FBQzFDLE9BQU87WUFDTCxrQ0FBa0MsRUFBRTtnQkFDbEMsd0JBQXdCO2dCQUN4QixFQUFFO2dCQUNGLDZEQUE2RDtnQkFDN0QsRUFBRTtnQkFDRiw0QkFBNEI7Z0JBQzVCLEVBQUU7Z0JBQ0YseURBQXlEO2dCQUN6RCx3Q0FBd0M7Z0JBQ3hDLHlEQUF5RDtnQkFDekQsb0RBQW9EO2dCQUNwRCxFQUFFO2dCQUNGLGVBQWU7Z0JBQ2YsRUFBRTtnQkFDRiw0R0FBNEc7Z0JBQzVHLGtHQUFrRztnQkFDbEcseUZBQXlGO2dCQUN6RixpRUFBaUU7Z0JBQ2pFLDBDQUEwQztnQkFDMUMsRUFBRTtnQkFDRixZQUFZO2dCQUNaLEVBQUU7Z0JBQ0YsMEVBQTBFO2dCQUMxRSxzRkFBc0Y7Z0JBQ3RGLGtFQUFrRTtnQkFDbEUsc0RBQXNEO2dCQUN0RCxFQUFFO2dCQUNGLGlGQUFpRjtnQkFDakYsRUFBRTtnQkFDRiwyQ0FBMkM7Z0JBQzNDLEVBQUU7Z0JBQ0YsMkJBQTJCO2dCQUMzQixFQUFFO2dCQUNGLHVFQUF1RTthQUN4RTtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsOEVBQThFO0lBQzlFLGFBQWE7SUFDYiw4Q0FBOEM7SUFDOUMsNEJBQTRCO0lBQzVCLDhDQUE4QztJQUM5QyxzQ0FBc0M7SUFDdEMscUNBQXFDO0lBQ3JDLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLG9DQUFvQztJQUNwQyw0REFBNEQ7SUFDNUQsNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osOEJBQThCO0lBQzlC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YkNvbmZpZ0Jhc2UgfSBmcm9tICcuLi8uLi9iYXNlJztcblxuLyoqXG4gKiBJbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IEdpdEh1YiBjb25maWd1cmF0aW9uIGZvciB0aGUgQ2FwU2VydmljZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgR2l0SHViQ29uZmlnQ2FwU2VydmljZSBleHRlbmRzIEdpdEh1YkNvbmZpZ0Jhc2Uge1xuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGNvbmZpZ0ZpbGVQdWxsUmVxdWVzdCgpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnLmdpdGh1Yi9wdWxsX3JlcXVlc3RfdGVtcGxhdGUubWQnOiBbXG4gICAgICAgICcjIyBSZXZpZXdlcnMgQ2hlY2tsaXN0JyxcbiAgICAgICAgJycsXG4gICAgICAgICdmb3IgY29tcGxldGUgcmV2aWV3IGxpc3QgcmVmZXIgdG8gQUJTIExvb3AgLSBSZXZpZXcgQXNwZWN0cycsXG4gICAgICAgICcnLFxuICAgICAgICAnIyMjIE9yZ2FuaXphdGlvbmFsIFNlY3Rpb24nLFxuICAgICAgICAnJyxcbiAgICAgICAgJy0gWyBdIFBSIGlzIGFzc2lnbmVkIHRvIHRoZSBhY2NvcmRpbmcgc3RvcnkvZmVhdHVyZS9idWcnLFxuICAgICAgICAnLSBbIF0gU3RvcnkvZmVhdHVyZS9idWcgaXMgZGVzY3JpcHRpdmUnLFxuICAgICAgICAnLSBbIF0gU3RvcnkvZmVhdHVyZS9idWcgaXMgYXNzaWduZWQgdG8gYWNjb3JkaW5nIGxhYmVscycsXG4gICAgICAgICctIFsgXSBTdG9yeS9mZWF0dXJlL2J1ZyBpcyBhc3NpZ25lZCB0byBhIGRldmVsb3BlcicsXG4gICAgICAgICcnLFxuICAgICAgICAnIyMjIFN0cnVjdHVyZScsXG4gICAgICAgICcnLFxuICAgICAgICAnLSBbIF0gUmVhZGFiaWxpdHk6IENvZGUgaXMgZWFzeSB0byB1bmRlcnN0YW5kLCB3aXRoIG1lYW5pbmdmdWwgbmFtZXMgZm9yIHZhcmlhYmxlcywgZnVuY3Rpb25zLCBhbmQgY2xhc3NlcycsXG4gICAgICAgICctIFsgXSBDb21tZW50czogTWVhbmluZ2Z1bCBhbmQgaGVscGZ1bCBjb21tZW50cy4gQ29kZSBpcyBkb2N1bWVudGVkIHdpdGhvdXQgYmVpbmcgb3Zlci1jb21tZW50ZWQnLFxuICAgICAgICAnLSBbIF0gRFJZLCBLSVNTIGFuZCBZQUdOSTogQ29kZSBpbXBsZW1lbnRzIG9ubHkgbmVjZXNzYXJ5IGZlYXR1cmVzOyBubyBvdmVyLWVuZ2luZWVyaW5nJyxcbiAgICAgICAgJy0gWyBdIE5vIHNlbnNpdGl2ZSBkYXRhIChlLmcuLCBwYXNzd29yZHMsIEFQSSBrZXlzKSBpbiB0aGUgY29kZScsXG4gICAgICAgICctIFsgXSBObyBtYWpvciB1cGRhdGVzIGZvciB1c2VkIHBhY2thZ2VzJyxcbiAgICAgICAgJycsXG4gICAgICAgICcjIyMgQ29kaW5nJyxcbiAgICAgICAgJycsXG4gICAgICAgICctIFsgXSBNb2RlbC9CaW5kaW5nIHByb3BlcnR5IGNoYW5nZXMgb3IgcmVuYW1pbmcgZG9lcyBub3QgYnJlYWsgdGhlIGNvZGUnLFxuICAgICAgICAnLSBbIF0gTW9kZWwvQmluZGluZyBwcm9wZXJ0aWVzIGhhdmUgY29uc2lzdGVudCBuYW1lcyAoY2FwaXRhbGl6YXRpb24sIGxvd2VyY2FzZSwgLi4pJyxcbiAgICAgICAgJy0gWyBdIFR5cGUgYWxpYXNlcyBhcmUgZGVmaW5lZCBmb3IgYXNzb2NpYXRpb25zIGFuZCBjb21wb3NpdGlvbnMnLFxuICAgICAgICAnLSBbIF0gTm8gaHVuZ2FyaWFuIG5vdGF0aW9uIChlLmcuIGFMaXN0LCBvTW9kZWwsIC4uKScsXG4gICAgICAgICcnLFxuICAgICAgICAnIyMjIE1vc3QgaW1wb3J0YW50IChhcyBsb25nIGFzIHdlIGRvIG5vdCBoYXZlIFRlc3QgRHJpdmVuIERldmVsb3BtZW50IGluIHBsYWNlKScsXG4gICAgICAgICcnLFxuICAgICAgICAnLSBbIF0gQ29kZSBpcyBsb2NhbGx5IHRlc3RlZCBieSBkZXZlbG9wZXInLFxuICAgICAgICAnJyxcbiAgICAgICAgJyMjIyBTZWNvbmQgbW9zdCBpbXBvcnRhbnQnLFxuICAgICAgICAnJyxcbiAgICAgICAgJy0gWyBdIEFQSSBmaXJzdDogYXBwbGljYXRpb24gY2FuIGJlIHVzZWQgaGVhZGxlc3MgKHdpdGggdGhlIEFQSSBvbmx5KScsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvLyBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGNvbmZpZ0ZpbGVGZWF0dXJlSXNzdWUoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgLy8gICByZXR1cm4ge1xuICAvLyAgICAgJy5naXRodWIvSVNTVUVfVEVNUExBVEUvZmVhdHVyZS55bWwnOiBbXG4gIC8vICAgICAgICduYW1lOiDwn5KhIEZlYXR1cmUnLFxuICAvLyAgICAgICAnZGVzY3JpcHRpb246IFN0b3J5IHJlbGF0ZWQgZmVhdHVyZScsXG4gIC8vICAgICAgICd0aXRsZTogXCJbRkVBVFVSRV0gPHRpdGxlPlwiJyxcbiAgLy8gICAgICAgJ2xhYmVsczogW1widHlwZTogZmVhdHVyZVwiXScsXG4gIC8vICAgICAgICdib2R5OicsXG4gIC8vICAgICAgICcgIC0gdHlwZTogdGV4dGFyZWEnLFxuICAvLyAgICAgICAnICAgIGF0dHJpYnV0ZXM6JyxcbiAgLy8gICAgICAgJyAgICAgIGxhYmVsOiBEZXNjcmlwdGlvbicsXG4gIC8vICAgICAgICcgICAgICBkZXNjcmlwdGlvbjogQSBkZXNjcmlwdGlvbiBvZiB0aGUgZmVhdHVyZS4nLFxuICAvLyAgICAgICAnICAgIHZhbGlkYXRpb25zOicsXG4gIC8vICAgICAgICcgICAgICByZXF1aXJlZDogdHJ1ZScsXG4gIC8vICAgICAgICcnLFxuICAvLyAgICAgICAnICAtIHR5cGU6IHRleHRhcmVhJyxcbiAgLy8gICAgICAgJyAgICBhdHRyaWJ1dGVzOicsXG4gIC8vICAgICAgICcgICAgICBsYWJlbDogVGFzayBMaXN0JyxcbiAgLy8gICAgICAgJyAgICAgIGRlc2NyaXB0aW9uOiBEZXNjcmliZSB0aGUgc3RlcHMgdG8gZnVsZmlsbCB0aGUgZmVhdHVyZS4nLFxuICAvLyAgICAgICAnICAgICAgdmFsdWU6IHwnLFxuICAvLyAgICAgICAnICAgICAgICAtIFsgXSBNeSBGaXJzdCBUYXNrJyxcbiAgLy8gICAgICAgJyAgICB2YWxpZGF0aW9uczonLFxuICAvLyAgICAgICAnICAgICAgcmVxdWlyZWQ6IHRydWUnLFxuICAvLyAgICAgXSxcbiAgLy8gICB9O1xuICAvLyB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIHN0b3J5IGlzc3VlIHRlbXBsYXRlIGZpbGUuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgcmVjb3JkIHdoZXJlIHRoZSBrZXkgaXMgdGhlIGZpbGUgcGF0aCBhbmQgdGhlIHZhbHVlIGlzIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAgICogICAgICAgICAgcmVwcmVzZW50aW5nIHRoZSBjb250ZW50IG9mIHRoZSBpc3N1ZSB0ZW1wbGF0ZS5cbiAgICovXG4gIC8vIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZVN0b3J5SXNzdWUoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgLy8gICByZXR1cm4ge1xuICAvLyAgICAgJy5naXRodWIvSVNTVUVfVEVNUExBVEUvc3RvcnkueW1sJzogW1xuICAvLyAgICAgICAnbmFtZTog8J+SoSBTdG9yeScsXG4gIC8vICAgICAgICdkZXNjcmlwdGlvbjogQXMgYSBbcm9sZV0sIEkgW3dhbnQgdG9dLCBbc28gdGhhdF0nLFxuICAvLyAgICAgICAndGl0bGU6IFwiW1NUT1JZXSA8dGl0bGU+XCInLFxuICAvLyAgICAgICAnbGFiZWxzOiBbXCJ0eXBlOiBzdG9yeVwiXScsXG4gIC8vICAgICAgICdib2R5OicsXG4gIC8vICAgICAgICcgIC0gdHlwZTogdGV4dGFyZWEnLFxuICAvLyAgICAgICAnICAgIGF0dHJpYnV0ZXM6JyxcbiAgLy8gICAgICAgJyAgICAgIGxhYmVsOiBEZXNjcmlwdGlvbicsXG4gIC8vICAgICAgIFwiICAgICAgZGVzY3JpcHRpb246IFByb3ZpZGUgYSBicmllZiBvdmVydmlldyBvZiB0aGUgc3RvcnksIGZvY3VzaW5nIHdobyB3YW50J3MgdG8gZG8gd2hhdCBhbmQgd2h5LlwiLFxuICAvLyAgICAgICAnICAgIHZhbGlkYXRpb25zOicsXG4gIC8vICAgICAgICcgICAgICByZXF1aXJlZDogdHJ1ZScsXG4gIC8vICAgICBdLFxuICAvLyAgIH07XG4gIC8vIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGNvbmZpZ0ZpbGVSZWxlYXNlV29ya2Zsb3coKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5naXRodWIvd29ya2Zsb3dzL3JlbGVhc2UueW1sJzogW1xuICAgICAgICAnbmFtZTogUmVsZWFzZScsXG4gICAgICAgICdvbjonLFxuICAgICAgICAnICBwdWxsX3JlcXVlc3Q6JyxcbiAgICAgICAgJyAgICBicmFuY2hlczonLFxuICAgICAgICAnICAgICAgLSBkZXYnLFxuICAgICAgICAnICAgIHR5cGVzOicsXG4gICAgICAgICcgICAgICAtIGNsb3NlZCcsXG4gICAgICAgICdqb2JzOicsXG4gICAgICAgICcgIHJlbGVhc2U6JyxcbiAgICAgICAgJyAgICBydW5zLW9uOiB1YnVudHUtbGF0ZXN0JyxcbiAgICAgICAgJyAgICBwZXJtaXNzaW9uczonLFxuICAgICAgICAnICAgICAgY29udGVudHM6IHdyaXRlJyxcbiAgICAgICAgJyAgICAgIHB1bGwtcmVxdWVzdHM6IHdyaXRlJyxcbiAgICAgICAgJyAgICBzdGVwczonLFxuICAgICAgICAnICAgICAgLSBuYW1lOiBDcmVhdGUgcmVsZWFzZScsXG4gICAgICAgICcgICAgICAgIHVzZXM6IGR4ZnJvbnRpZXIvZ2gtYWN0aW9uLXJlbGVhc2VAbWFpbicsXG4gICAgICAgICcgICAgICAgIHdpdGg6JyxcbiAgICAgICAgJyAgICAgICAgICBHSVRIVUJfVE9LRU46ICR7eyBzZWNyZXRzLkdJVEhVQl9UT0tFTiB9fScsXG4gICAgICAgICcgICAgICAgICAgQlJBTkNIOiBkZXYnLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBjb25maWdGaWxlRGVwbG95bWVudFdvcmtmbG93KCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuZ2l0aHViL3dvcmtmbG93cy9kZXBsb3ltZW50LnltbCc6IFtcbiAgICAgICAgJ25hbWU6IERlcGxveW1lbnQnLFxuICAgICAgICAnb246JyxcbiAgICAgICAgJyAgcHVsbF9yZXF1ZXN0OicsXG4gICAgICAgICcgICAgYnJhbmNoZXM6JyxcbiAgICAgICAgJyAgICAgIC0gZGV2JyxcbiAgICAgICAgJyAgICAgIC0gbWFpbicsXG4gICAgICAgICcgICAgdHlwZXM6JyxcbiAgICAgICAgJyAgICAgIC0gY2xvc2VkJyxcbiAgICAgICAgJ2pvYnM6JyxcbiAgICAgICAgJyAgcmVsZWFzZTonLFxuICAgICAgICAnICAgIHJ1bnMtb246IHVidW50dS1sYXRlc3QnLFxuICAgICAgICAnICAgIHBlcm1pc3Npb25zOicsXG4gICAgICAgICcgICAgICBjb250ZW50czogd3JpdGUnLFxuICAgICAgICAnICAgICAgcHVsbC1yZXF1ZXN0czogd3JpdGUnLFxuICAgICAgICAnICAgIHN0ZXBzOicsXG4gICAgICAgICcgICAgICAtIG5hbWU6IERlcGxveSB0byBDbG91ZCBGb3VuZHJ5JyxcbiAgICAgICAgJyAgICAgICAgdXNlczogZHhmcm9udGllci9naC1hY3Rpb24tZGVwbG95LWNmQG1haW4nLFxuICAgICAgICAnICAgICAgICB3aXRoOicsXG4gICAgICAgICcgICAgICAgICAgQ0ZfSUFTX09SSUdJTjogJHt7IHNlY3JldHMuSUFTX09SSUdJTiB9fScsXG4gICAgICAgICcgICAgICAgICAgQ0ZfQVBJX0RFVjogJHt7IHNlY3JldHMuQ0ZfQVBJX0RFViB9fScsXG4gICAgICAgICcgICAgICAgICAgQ0ZfT1JHX0RFVjogJHt7IHNlY3JldHMuQ0ZfT1JHX0RFViB9fScsXG4gICAgICAgICcgICAgICAgICAgQ0ZfU1BBQ0VfREVWOiAke3sgc2VjcmV0cy5DRl9TUEFDRV9ERVYgfX0nLFxuICAgICAgICAnICAgICAgICAgIENGX1VTRVJOQU1FX0RFVjogJHt7IHNlY3JldHMuQ0ZfVVNFUk5BTUVfREVWIH19JyxcbiAgICAgICAgJyAgICAgICAgICBDRl9QQVNTV09SRF9ERVY6ICR7eyBzZWNyZXRzLkNGX1BBU1NXT1JEX0RFViB9fScsXG4gICAgICAgICcgICAgICAgICAgQ0ZfQVBJX1BST0Q6ICR7eyBzZWNyZXRzLkNGX0FQSV9QUk9EIH19JyxcbiAgICAgICAgJyAgICAgICAgICBDRl9PUkdfUFJPRDogJHt7IHNlY3JldHMuQ0ZfT1JHX1BST0QgfX0nLFxuICAgICAgICAnICAgICAgICAgIENGX1NQQUNFX1BST0Q6ICR7eyBzZWNyZXRzLkNGX1NQQUNFX1BST0QgfX0nLFxuICAgICAgICAnICAgICAgICAgIENGX1VTRVJOQU1FX1BST0Q6ICR7eyBzZWNyZXRzLkNGX1VTRVJOQU1FX1BST0QgfX0nLFxuICAgICAgICAnICAgICAgICAgIENGX1BBU1NXT1JEX1BST0Q6ICR7eyBzZWNyZXRzLkNGX1BBU1NXT1JEX1BST0QgfX0nLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBjb25maWdzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPltdIHtcbiAgICByZXR1cm4gW1xuICAgICAgdGhpcy5jb25maWdGaWxlUHVsbFJlcXVlc3QsXG4gICAgICAvLyB0aGlzLmNvbmZpZ0ZpbGVCdWdJc3N1ZSxcbiAgICAgIC8vIHRoaXMuY29uZmlnRmlsZUZlYXR1cmVJc3N1ZSxcbiAgICAgIC8vIHRoaXMuY29uZmlnRmlsZUhvdXNla2VlcGluZ0lzc3VlLFxuICAgICAgLy8gdGhpcy5jb25maWdGaWxlUXVlc3Rpb25Jc3N1ZSxcbiAgICAgIC8vIHRoaXMuY29uZmlnRmlsZVN0b3J5SXNzdWUsXG4gICAgICB0aGlzLmNvbmZpZ0ZpbGVDbGlmZixcbiAgICAgIHRoaXMuY29uZmlnRmlsZVJlbGVhc2VXb3JrZmxvdyxcbiAgICAgIHRoaXMuY29uZmlnRmlsZURlcGxveW1lbnRXb3JrZmxvdyxcbiAgICBdO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSB1c2VyIHN0b3J5IGlzc3VlIHRlbXBsYXRlIGZpbGUuXG4gICAqL1xuICAvLyBwdWJsaWMgY3JlYXRlU3RvcnlJc3N1ZSgpOiB2b2lkIHtcbiAgLy8gICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlU3RvcnlJc3N1ZSlbMF07XG4gIC8vICAgbmV3IFRleHRGaWxlKHRoaXMucHJvamVjdCwgZmlsZVBhdGgsIHtcbiAgLy8gICAgIGxpbmVzOiB0aGlzLmNvbmZpZ0ZpbGVTdG9yeUlzc3VlW2ZpbGVQYXRoXSxcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgZGVwbG95bWVudCB3b3JrZmxvdyB0ZW1wbGF0ZSBmaWxlLlxuICAgKi9cbiAgcHVibGljIGNyZWF0ZURlcGxveW1lbnRXb3JrZmxvdygpOiB2b2lkIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlRGVwbG95bWVudFdvcmtmbG93KVswXTtcbiAgICBuZXcgVGV4dEZpbGUodGhpcy5wcm9qZWN0LCBmaWxlUGF0aCwge1xuICAgICAgbGluZXM6IHRoaXMuY29uZmlnRmlsZURlcGxveW1lbnRXb3JrZmxvd1tmaWxlUGF0aF0sXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgYXBwbHlDb25maWcoKTogdm9pZCB7XG4gICAgc3VwZXIuYXBwbHlDb25maWcoKTtcbiAgICAvLyB0aGlzLmNyZWF0ZVN0b3J5SXNzdWUoKTtcbiAgICB0aGlzLmNyZWF0ZURlcGxveW1lbnRXb3JrZmxvdygpO1xuICB9XG59XG4iXX0=
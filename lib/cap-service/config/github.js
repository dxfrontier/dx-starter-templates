"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubConfigCapService = void 0;
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
    get configFileFeatureIssue() {
        return {
            '.github/ISSUE_TEMPLATE/feature.yml': [
                'name: 💡 Feature',
                'description: Story related feature',
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
     * Retrieves the configuration for the story issue template file.
     *
     * @returns A record where the key is the file path and the value is an array of strings
     *          representing the content of the issue template.
     */
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
            this.configFileBugIssue,
            this.configFileFeatureIssue,
            this.configFileHousekeepingIssue,
            this.configFileQuestionIssue,
            this.configFileStoryIssue,
            this.configFileCliff,
            this.configFileReleaseWorkflow,
            this.configFileDeploymentWorkflow,
        ];
    }
    /**
     * Creates a user story issue template file.
     */
    createStoryIssue() {
        const filePath = Object.keys(this.configFileStoryIssue)[0];
        new projen_1.TextFile(this.project, filePath, {
            lines: this.configFileStoryIssue[filePath],
        });
    }
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
        this.createStoryIssue();
        this.createDeploymentWorkflow();
    }
}
exports.GitHubConfigCapService = GitHubConfigCapService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NhcC1zZXJ2aWNlL2NvbmZpZy9naXRodWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQWtDO0FBQ2xDLHFDQUE4QztBQUU5Qzs7R0FFRztBQUNILE1BQWEsc0JBQXVCLFNBQVEsdUJBQWdCO0lBQzFELElBQXVCLHFCQUFxQjtRQUMxQyxPQUFPO1lBQ0wsa0NBQWtDLEVBQUU7Z0JBQ2xDLHdCQUF3QjtnQkFDeEIsRUFBRTtnQkFDRiw2REFBNkQ7Z0JBQzdELEVBQUU7Z0JBQ0YsNEJBQTRCO2dCQUM1QixFQUFFO2dCQUNGLHlEQUF5RDtnQkFDekQsd0NBQXdDO2dCQUN4Qyx5REFBeUQ7Z0JBQ3pELG9EQUFvRDtnQkFDcEQsRUFBRTtnQkFDRixlQUFlO2dCQUNmLEVBQUU7Z0JBQ0YsNEdBQTRHO2dCQUM1RyxrR0FBa0c7Z0JBQ2xHLHlGQUF5RjtnQkFDekYsaUVBQWlFO2dCQUNqRSwwQ0FBMEM7Z0JBQzFDLEVBQUU7Z0JBQ0YsWUFBWTtnQkFDWixFQUFFO2dCQUNGLDBFQUEwRTtnQkFDMUUsc0ZBQXNGO2dCQUN0RixrRUFBa0U7Z0JBQ2xFLHNEQUFzRDtnQkFDdEQsRUFBRTtnQkFDRixpRkFBaUY7Z0JBQ2pGLEVBQUU7Z0JBQ0YsMkNBQTJDO2dCQUMzQyxFQUFFO2dCQUNGLDJCQUEyQjtnQkFDM0IsRUFBRTtnQkFDRix1RUFBdUU7YUFDeEU7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELElBQXVCLHNCQUFzQjtRQUMzQyxPQUFPO1lBQ0wsb0NBQW9DLEVBQUU7Z0JBQ3BDLGtCQUFrQjtnQkFDbEIsb0NBQW9DO2dCQUNwQyw0QkFBNEI7Z0JBQzVCLDJCQUEyQjtnQkFDM0IsT0FBTztnQkFDUCxvQkFBb0I7Z0JBQ3BCLGlCQUFpQjtnQkFDakIsMEJBQTBCO2dCQUMxQixrREFBa0Q7Z0JBQ2xELGtCQUFrQjtnQkFDbEIsc0JBQXNCO2dCQUN0QixFQUFF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QUMsNEJBQTRCLENBQUMsUUFBUSxDQUFDO1NBQ25ELENBQUMsQ0FBQztJQUNMLENBQUM7SUFFZSxXQUFXO1FBQ3pCLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0NBQ0Y7QUFqTUQsd0RBaU1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dEZpbGUgfSBmcm9tICdwcm9qZW4nO1xuaW1wb3J0IHsgR2l0SHViQ29uZmlnQmFzZSB9IGZyb20gJy4uLy4uL2Jhc2UnO1xuXG4vKipcbiAqIEltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgR2l0SHViIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBDYXBTZXJ2aWNlIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBHaXRIdWJDb25maWdDYXBTZXJ2aWNlIGV4dGVuZHMgR2l0SHViQ29uZmlnQmFzZSB7XG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgY29uZmlnRmlsZVB1bGxSZXF1ZXN0KCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuZ2l0aHViL3B1bGxfcmVxdWVzdF90ZW1wbGF0ZS5tZCc6IFtcbiAgICAgICAgJyMjIFJldmlld2VycyBDaGVja2xpc3QnLFxuICAgICAgICAnJyxcbiAgICAgICAgJ2ZvciBjb21wbGV0ZSByZXZpZXcgbGlzdCByZWZlciB0byBBQlMgTG9vcCAtIFJldmlldyBBc3BlY3RzJyxcbiAgICAgICAgJycsXG4gICAgICAgICcjIyMgT3JnYW5pemF0aW9uYWwgU2VjdGlvbicsXG4gICAgICAgICcnLFxuICAgICAgICAnLSBbIF0gUFIgaXMgYXNzaWduZWQgdG8gdGhlIGFjY29yZGluZyBzdG9yeS9mZWF0dXJlL2J1ZycsXG4gICAgICAgICctIFsgXSBTdG9yeS9mZWF0dXJlL2J1ZyBpcyBkZXNjcmlwdGl2ZScsXG4gICAgICAgICctIFsgXSBTdG9yeS9mZWF0dXJlL2J1ZyBpcyBhc3NpZ25lZCB0byBhY2NvcmRpbmcgbGFiZWxzJyxcbiAgICAgICAgJy0gWyBdIFN0b3J5L2ZlYXR1cmUvYnVnIGlzIGFzc2lnbmVkIHRvIGEgZGV2ZWxvcGVyJyxcbiAgICAgICAgJycsXG4gICAgICAgICcjIyMgU3RydWN0dXJlJyxcbiAgICAgICAgJycsXG4gICAgICAgICctIFsgXSBSZWFkYWJpbGl0eTogQ29kZSBpcyBlYXN5IHRvIHVuZGVyc3RhbmQsIHdpdGggbWVhbmluZ2Z1bCBuYW1lcyBmb3IgdmFyaWFibGVzLCBmdW5jdGlvbnMsIGFuZCBjbGFzc2VzJyxcbiAgICAgICAgJy0gWyBdIENvbW1lbnRzOiBNZWFuaW5nZnVsIGFuZCBoZWxwZnVsIGNvbW1lbnRzLiBDb2RlIGlzIGRvY3VtZW50ZWQgd2l0aG91dCBiZWluZyBvdmVyLWNvbW1lbnRlZCcsXG4gICAgICAgICctIFsgXSBEUlksIEtJU1MgYW5kIFlBR05JOiBDb2RlIGltcGxlbWVudHMgb25seSBuZWNlc3NhcnkgZmVhdHVyZXM7IG5vIG92ZXItZW5naW5lZXJpbmcnLFxuICAgICAgICAnLSBbIF0gTm8gc2Vuc2l0aXZlIGRhdGEgKGUuZy4sIHBhc3N3b3JkcywgQVBJIGtleXMpIGluIHRoZSBjb2RlJyxcbiAgICAgICAgJy0gWyBdIE5vIG1ham9yIHVwZGF0ZXMgZm9yIHVzZWQgcGFja2FnZXMnLFxuICAgICAgICAnJyxcbiAgICAgICAgJyMjIyBDb2RpbmcnLFxuICAgICAgICAnJyxcbiAgICAgICAgJy0gWyBdIE1vZGVsL0JpbmRpbmcgcHJvcGVydHkgY2hhbmdlcyBvciByZW5hbWluZyBkb2VzIG5vdCBicmVhayB0aGUgY29kZScsXG4gICAgICAgICctIFsgXSBNb2RlbC9CaW5kaW5nIHByb3BlcnRpZXMgaGF2ZSBjb25zaXN0ZW50IG5hbWVzIChjYXBpdGFsaXphdGlvbiwgbG93ZXJjYXNlLCAuLiknLFxuICAgICAgICAnLSBbIF0gVHlwZSBhbGlhc2VzIGFyZSBkZWZpbmVkIGZvciBhc3NvY2lhdGlvbnMgYW5kIGNvbXBvc2l0aW9ucycsXG4gICAgICAgICctIFsgXSBObyBodW5nYXJpYW4gbm90YXRpb24gKGUuZy4gYUxpc3QsIG9Nb2RlbCwgLi4pJyxcbiAgICAgICAgJycsXG4gICAgICAgICcjIyMgTW9zdCBpbXBvcnRhbnQgKGFzIGxvbmcgYXMgd2UgZG8gbm90IGhhdmUgVGVzdCBEcml2ZW4gRGV2ZWxvcG1lbnQgaW4gcGxhY2UpJyxcbiAgICAgICAgJycsXG4gICAgICAgICctIFsgXSBDb2RlIGlzIGxvY2FsbHkgdGVzdGVkIGJ5IGRldmVsb3BlcicsXG4gICAgICAgICcnLFxuICAgICAgICAnIyMjIFNlY29uZCBtb3N0IGltcG9ydGFudCcsXG4gICAgICAgICcnLFxuICAgICAgICAnLSBbIF0gQVBJIGZpcnN0OiBhcHBsaWNhdGlvbiBjYW4gYmUgdXNlZCBoZWFkbGVzcyAod2l0aCB0aGUgQVBJIG9ubHkpJyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgY29uZmlnRmlsZUZlYXR1cmVJc3N1ZSgpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnLmdpdGh1Yi9JU1NVRV9URU1QTEFURS9mZWF0dXJlLnltbCc6IFtcbiAgICAgICAgJ25hbWU6IPCfkqEgRmVhdHVyZScsXG4gICAgICAgICdkZXNjcmlwdGlvbjogU3RvcnkgcmVsYXRlZCBmZWF0dXJlJyxcbiAgICAgICAgJ3RpdGxlOiBcIltGRUFUVVJFXSA8dGl0bGU+XCInLFxuICAgICAgICAnbGFiZWxzOiBbXCJ0eXBlOiBmZWF0dXJlXCJdJyxcbiAgICAgICAgJ2JvZHk6JyxcbiAgICAgICAgJyAgLSB0eXBlOiB0ZXh0YXJlYScsXG4gICAgICAgICcgICAgYXR0cmlidXRlczonLFxuICAgICAgICAnICAgICAgbGFiZWw6IERlc2NyaXB0aW9uJyxcbiAgICAgICAgJyAgICAgIGRlc2NyaXB0aW9uOiBBIGRlc2NyaXB0aW9uIG9mIHRoZSBmZWF0dXJlLicsXG4gICAgICAgICcgICAgdmFsaWRhdGlvbnM6JyxcbiAgICAgICAgJyAgICAgIHJlcXVpcmVkOiB0cnVlJyxcbiAgICAgICAgJycsXG4gICAgICAgICcgIC0gdHlwZTogdGV4dGFyZWEnLFxuICAgICAgICAnICAgIGF0dHJpYnV0ZXM6JyxcbiAgICAgICAgJyAgICAgIGxhYmVsOiBUYXNrIExpc3QnLFxuICAgICAgICAnICAgICAgZGVzY3JpcHRpb246IERlc2NyaWJlIHRoZSBzdGVwcyB0byBmdWxmaWxsIHRoZSBmZWF0dXJlLicsXG4gICAgICAgICcgICAgICB2YWx1ZTogfCcsXG4gICAgICAgICcgICAgICAgIC0gWyBdIE15IEZpcnN0IFRhc2snLFxuICAgICAgICAnICAgIHZhbGlkYXRpb25zOicsXG4gICAgICAgICcgICAgICByZXF1aXJlZDogdHJ1ZScsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUgc3RvcnkgaXNzdWUgdGVtcGxhdGUgZmlsZS5cbiAgICpcbiAgICogQHJldHVybnMgQSByZWNvcmQgd2hlcmUgdGhlIGtleSBpcyB0aGUgZmlsZSBwYXRoIGFuZCB0aGUgdmFsdWUgaXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgKiAgICAgICAgICByZXByZXNlbnRpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIGlzc3VlIHRlbXBsYXRlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBjb25maWdGaWxlU3RvcnlJc3N1ZSgpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnLmdpdGh1Yi9JU1NVRV9URU1QTEFURS9zdG9yeS55bWwnOiBbXG4gICAgICAgICduYW1lOiDwn5KhIFN0b3J5JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uOiBBcyBhIFtyb2xlXSwgSSBbd2FudCB0b10sIFtzbyB0aGF0XScsXG4gICAgICAgICd0aXRsZTogXCJbU1RPUlldIDx0aXRsZT5cIicsXG4gICAgICAgICdsYWJlbHM6IFtcInR5cGU6IHN0b3J5XCJdJyxcbiAgICAgICAgJ2JvZHk6JyxcbiAgICAgICAgJyAgLSB0eXBlOiB0ZXh0YXJlYScsXG4gICAgICAgICcgICAgYXR0cmlidXRlczonLFxuICAgICAgICAnICAgICAgbGFiZWw6IERlc2NyaXB0aW9uJyxcbiAgICAgICAgXCIgICAgICBkZXNjcmlwdGlvbjogUHJvdmlkZSBhIGJyaWVmIG92ZXJ2aWV3IG9mIHRoZSBzdG9yeSwgZm9jdXNpbmcgd2hvIHdhbnQncyB0byBkbyB3aGF0IGFuZCB3aHkuXCIsXG4gICAgICAgICcgICAgdmFsaWRhdGlvbnM6JyxcbiAgICAgICAgJyAgICAgIHJlcXVpcmVkOiB0cnVlJyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgY29uZmlnRmlsZVJlbGVhc2VXb3JrZmxvdygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnLmdpdGh1Yi93b3JrZmxvd3MvcmVsZWFzZS55bWwnOiBbXG4gICAgICAgICduYW1lOiBSZWxlYXNlJyxcbiAgICAgICAgJ29uOicsXG4gICAgICAgICcgIHB1bGxfcmVxdWVzdDonLFxuICAgICAgICAnICAgIGJyYW5jaGVzOicsXG4gICAgICAgICcgICAgICAtIGRldicsXG4gICAgICAgICcgICAgdHlwZXM6JyxcbiAgICAgICAgJyAgICAgIC0gY2xvc2VkJyxcbiAgICAgICAgJ2pvYnM6JyxcbiAgICAgICAgJyAgcmVsZWFzZTonLFxuICAgICAgICAnICAgIHJ1bnMtb246IHVidW50dS1sYXRlc3QnLFxuICAgICAgICAnICAgIHBlcm1pc3Npb25zOicsXG4gICAgICAgICcgICAgICBjb250ZW50czogd3JpdGUnLFxuICAgICAgICAnICAgICAgcHVsbC1yZXF1ZXN0czogd3JpdGUnLFxuICAgICAgICAnICAgIHN0ZXBzOicsXG4gICAgICAgICcgICAgICAtIG5hbWU6IENyZWF0ZSByZWxlYXNlJyxcbiAgICAgICAgJyAgICAgICAgdXNlczogZHhmcm9udGllci9naC1hY3Rpb24tcmVsZWFzZUBtYWluJyxcbiAgICAgICAgJyAgICAgICAgd2l0aDonLFxuICAgICAgICAnICAgICAgICAgIEdJVEhVQl9UT0tFTjogJHt7IHNlY3JldHMuR0lUSFVCX1RPS0VOIH19JyxcbiAgICAgICAgJyAgICAgICAgICBCUkFOQ0g6IGRldicsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGNvbmZpZ0ZpbGVEZXBsb3ltZW50V29ya2Zsb3coKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5naXRodWIvd29ya2Zsb3dzL2RlcGxveW1lbnQueW1sJzogW1xuICAgICAgICAnbmFtZTogRGVwbG95bWVudCcsXG4gICAgICAgICdvbjonLFxuICAgICAgICAnICBwdWxsX3JlcXVlc3Q6JyxcbiAgICAgICAgJyAgICBicmFuY2hlczonLFxuICAgICAgICAnICAgICAgLSBkZXYnLFxuICAgICAgICAnICAgICAgLSBtYWluJyxcbiAgICAgICAgJyAgICB0eXBlczonLFxuICAgICAgICAnICAgICAgLSBjbG9zZWQnLFxuICAgICAgICAnam9iczonLFxuICAgICAgICAnICByZWxlYXNlOicsXG4gICAgICAgICcgICAgcnVucy1vbjogdWJ1bnR1LWxhdGVzdCcsXG4gICAgICAgICcgICAgcGVybWlzc2lvbnM6JyxcbiAgICAgICAgJyAgICAgIGNvbnRlbnRzOiB3cml0ZScsXG4gICAgICAgICcgICAgICBwdWxsLXJlcXVlc3RzOiB3cml0ZScsXG4gICAgICAgICcgICAgc3RlcHM6JyxcbiAgICAgICAgJyAgICAgIC0gbmFtZTogRGVwbG95IHRvIENsb3VkIEZvdW5kcnknLFxuICAgICAgICAnICAgICAgICB1c2VzOiBkeGZyb250aWVyL2doLWFjdGlvbi1kZXBsb3ktY2ZAbWFpbicsXG4gICAgICAgICcgICAgICAgIHdpdGg6JyxcbiAgICAgICAgJyAgICAgICAgICBDRl9JQVNfT1JJR0lOOiAke3sgc2VjcmV0cy5JQVNfT1JJR0lOIH19JyxcbiAgICAgICAgJyAgICAgICAgICBDRl9BUElfREVWOiAke3sgc2VjcmV0cy5DRl9BUElfREVWIH19JyxcbiAgICAgICAgJyAgICAgICAgICBDRl9PUkdfREVWOiAke3sgc2VjcmV0cy5DRl9PUkdfREVWIH19JyxcbiAgICAgICAgJyAgICAgICAgICBDRl9TUEFDRV9ERVY6ICR7eyBzZWNyZXRzLkNGX1NQQUNFX0RFViB9fScsXG4gICAgICAgICcgICAgICAgICAgQ0ZfVVNFUk5BTUVfREVWOiAke3sgc2VjcmV0cy5DRl9VU0VSTkFNRV9ERVYgfX0nLFxuICAgICAgICAnICAgICAgICAgIENGX1BBU1NXT1JEX0RFVjogJHt7IHNlY3JldHMuQ0ZfUEFTU1dPUkRfREVWIH19JyxcbiAgICAgICAgJyAgICAgICAgICBDRl9BUElfUFJPRDogJHt7IHNlY3JldHMuQ0ZfQVBJX1BST0QgfX0nLFxuICAgICAgICAnICAgICAgICAgIENGX09SR19QUk9EOiAke3sgc2VjcmV0cy5DRl9PUkdfUFJPRCB9fScsXG4gICAgICAgICcgICAgICAgICAgQ0ZfU1BBQ0VfUFJPRDogJHt7IHNlY3JldHMuQ0ZfU1BBQ0VfUFJPRCB9fScsXG4gICAgICAgICcgICAgICAgICAgQ0ZfVVNFUk5BTUVfUFJPRDogJHt7IHNlY3JldHMuQ0ZfVVNFUk5BTUVfUFJPRCB9fScsXG4gICAgICAgICcgICAgICAgICAgQ0ZfUEFTU1dPUkRfUFJPRDogJHt7IHNlY3JldHMuQ0ZfUEFTU1dPUkRfUFJPRCB9fScsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGNvbmZpZ3MoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+W10ge1xuICAgIHJldHVybiBbXG4gICAgICB0aGlzLmNvbmZpZ0ZpbGVQdWxsUmVxdWVzdCxcbiAgICAgIHRoaXMuY29uZmlnRmlsZUJ1Z0lzc3VlLFxuICAgICAgdGhpcy5jb25maWdGaWxlRmVhdHVyZUlzc3VlLFxuICAgICAgdGhpcy5jb25maWdGaWxlSG91c2VrZWVwaW5nSXNzdWUsXG4gICAgICB0aGlzLmNvbmZpZ0ZpbGVRdWVzdGlvbklzc3VlLFxuICAgICAgdGhpcy5jb25maWdGaWxlU3RvcnlJc3N1ZSxcbiAgICAgIHRoaXMuY29uZmlnRmlsZUNsaWZmLFxuICAgICAgdGhpcy5jb25maWdGaWxlUmVsZWFzZVdvcmtmbG93LFxuICAgICAgdGhpcy5jb25maWdGaWxlRGVwbG95bWVudFdvcmtmbG93LFxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHVzZXIgc3RvcnkgaXNzdWUgdGVtcGxhdGUgZmlsZS5cbiAgICovXG4gIHB1YmxpYyBjcmVhdGVTdG9yeUlzc3VlKCk6IHZvaWQge1xuICAgIGNvbnN0IGZpbGVQYXRoOiBzdHJpbmcgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ0ZpbGVTdG9yeUlzc3VlKVswXTtcbiAgICBuZXcgVGV4dEZpbGUodGhpcy5wcm9qZWN0LCBmaWxlUGF0aCwge1xuICAgICAgbGluZXM6IHRoaXMuY29uZmlnRmlsZVN0b3J5SXNzdWVbZmlsZVBhdGhdLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBkZXBsb3ltZW50IHdvcmtmbG93IHRlbXBsYXRlIGZpbGUuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlRGVwbG95bWVudFdvcmtmbG93KCk6IHZvaWQge1xuICAgIGNvbnN0IGZpbGVQYXRoOiBzdHJpbmcgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ0ZpbGVEZXBsb3ltZW50V29ya2Zsb3cpWzBdO1xuICAgIG5ldyBUZXh0RmlsZSh0aGlzLnByb2plY3QsIGZpbGVQYXRoLCB7XG4gICAgICBsaW5lczogdGhpcy5jb25maWdGaWxlRGVwbG95bWVudFdvcmtmbG93W2ZpbGVQYXRoXSxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBhcHBseUNvbmZpZygpOiB2b2lkIHtcbiAgICBzdXBlci5hcHBseUNvbmZpZygpO1xuICAgIHRoaXMuY3JlYXRlU3RvcnlJc3N1ZSgpO1xuICAgIHRoaXMuY3JlYXRlRGVwbG95bWVudFdvcmtmbG93KCk7XG4gIH1cbn1cbiJdfQ==
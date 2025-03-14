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
            this.configFileCliff,
            this.configFileReleaseWorkflow,
            this.configFileDeploymentWorkflow,
        ];
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
        this.createDeploymentWorkflow();
    }
}
exports.GitHubConfigCapService = GitHubConfigCapService;
_a = JSII_RTTI_SYMBOL_1;
GitHubConfigCapService[_a] = { fqn: "@dxfrontier/projen-template-projects.GitHubConfigCapService", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NhcC1zZXJ2aWNlL2NvbmZpZy9naXRodWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBa0M7QUFDbEMscUNBQThDO0FBRTlDOztHQUVHO0FBQ0gsTUFBYSxzQkFBdUIsU0FBUSx1QkFBZ0I7SUFDMUQsSUFBdUIscUJBQXFCO1FBQzFDLE9BQU87WUFDTCxrQ0FBa0MsRUFBRTtnQkFDbEMsd0JBQXdCO2dCQUN4QixFQUFFO2dCQUNGLDZEQUE2RDtnQkFDN0QsRUFBRTtnQkFDRiw0QkFBNEI7Z0JBQzVCLEVBQUU7Z0JBQ0YseURBQXlEO2dCQUN6RCx3Q0FBd0M7Z0JBQ3hDLHlEQUF5RDtnQkFDekQsb0RBQW9EO2dCQUNwRCxFQUFFO2dCQUNGLGVBQWU7Z0JBQ2YsRUFBRTtnQkFDRiw0R0FBNEc7Z0JBQzVHLGtHQUFrRztnQkFDbEcseUZBQXlGO2dCQUN6RixpRUFBaUU7Z0JBQ2pFLDBDQUEwQztnQkFDMUMsRUFBRTtnQkFDRixZQUFZO2dCQUNaLEVBQUU7Z0JBQ0YsMEVBQTBFO2dCQUMxRSxzRkFBc0Y7Z0JBQ3RGLGtFQUFrRTtnQkFDbEUsc0RBQXNEO2dCQUN0RCxFQUFFO2dCQUNGLGlGQUFpRjtnQkFDakYsRUFBRTtnQkFDRiwyQ0FBMkM7Z0JBQzNDLEVBQUU7Z0JBQ0YsMkJBQTJCO2dCQUMzQixFQUFFO2dCQUNGLHVFQUF1RTthQUN4RTtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBdUIseUJBQXlCO1FBQzlDLE9BQU87WUFDTCwrQkFBK0IsRUFBRTtnQkFDL0IsZUFBZTtnQkFDZixLQUFLO2dCQUNMLGlCQUFpQjtnQkFDakIsZUFBZTtnQkFDZixhQUFhO2dCQUNiLFlBQVk7Z0JBQ1osZ0JBQWdCO2dCQUNoQixPQUFPO2dCQUNQLFlBQVk7Z0JBQ1osNEJBQTRCO2dCQUM1QixrQkFBa0I7Z0JBQ2xCLHVCQUF1QjtnQkFDdkIsNEJBQTRCO2dCQUM1QixZQUFZO2dCQUNaLDhCQUE4QjtnQkFDOUIsaURBQWlEO2dCQUNqRCxlQUFlO2dCQUNmLHFEQUFxRDtnQkFDckQsdUJBQXVCO2FBQ3hCO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFjLDRCQUE0QjtRQUN4QyxPQUFPO1lBQ0wsa0NBQWtDLEVBQUU7Z0JBQ2xDLGtCQUFrQjtnQkFDbEIsS0FBSztnQkFDTCxpQkFBaUI7Z0JBQ2pCLGVBQWU7Z0JBQ2YsYUFBYTtnQkFDYixjQUFjO2dCQUNkLFlBQVk7Z0JBQ1osZ0JBQWdCO2dCQUNoQixPQUFPO2dCQUNQLFlBQVk7Z0JBQ1osNEJBQTRCO2dCQUM1QixrQkFBa0I7Z0JBQ2xCLHVCQUF1QjtnQkFDdkIsNEJBQTRCO2dCQUM1QixZQUFZO2dCQUNaLHVDQUF1QztnQkFDdkMsbURBQW1EO2dCQUNuRCxlQUFlO2dCQUNmLG9EQUFvRDtnQkFDcEQsaURBQWlEO2dCQUNqRCxpREFBaUQ7Z0JBQ2pELHFEQUFxRDtnQkFDckQsMkRBQTJEO2dCQUMzRCwyREFBMkQ7Z0JBQzNELG1EQUFtRDtnQkFDbkQsbURBQW1EO2dCQUNuRCx1REFBdUQ7Z0JBQ3ZELDZEQUE2RDtnQkFDN0QsNkRBQTZEO2FBQzlEO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUF1QixPQUFPO1FBQzVCLE9BQU87WUFDTCxJQUFJLENBQUMscUJBQXFCO1lBQzFCLElBQUksQ0FBQyxlQUFlO1lBQ3BCLElBQUksQ0FBQyx5QkFBeUI7WUFDOUIsSUFBSSxDQUFDLDRCQUE0QjtTQUNsQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0ksd0JBQXdCO1FBQzdCLE1BQU0sUUFBUSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0UsSUFBSSxpQkFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFO1lBQ25DLEtBQUssRUFBRSxJQUFJLENBQUMsNEJBQTRCLENBQUMsUUFBUSxDQUFDO1NBQ25ELENBQUMsQ0FBQztJQUNMLENBQUM7SUFFZSxXQUFXO1FBQ3pCLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNsQyxDQUFDOztBQTdISCx3REE4SEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0RmlsZSB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBHaXRIdWJDb25maWdCYXNlIH0gZnJvbSAnLi4vLi4vYmFzZSc7XG5cbi8qKlxuICogSW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBHaXRIdWIgY29uZmlndXJhdGlvbiBmb3IgdGhlIENhcFNlcnZpY2UgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIEdpdEh1YkNvbmZpZ0NhcFNlcnZpY2UgZXh0ZW5kcyBHaXRIdWJDb25maWdCYXNlIHtcbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBjb25maWdGaWxlUHVsbFJlcXVlc3QoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5naXRodWIvcHVsbF9yZXF1ZXN0X3RlbXBsYXRlLm1kJzogW1xuICAgICAgICAnIyMgUmV2aWV3ZXJzIENoZWNrbGlzdCcsXG4gICAgICAgICcnLFxuICAgICAgICAnZm9yIGNvbXBsZXRlIHJldmlldyBsaXN0IHJlZmVyIHRvIEFCUyBMb29wIC0gUmV2aWV3IEFzcGVjdHMnLFxuICAgICAgICAnJyxcbiAgICAgICAgJyMjIyBPcmdhbml6YXRpb25hbCBTZWN0aW9uJyxcbiAgICAgICAgJycsXG4gICAgICAgICctIFsgXSBQUiBpcyBhc3NpZ25lZCB0byB0aGUgYWNjb3JkaW5nIHN0b3J5L2ZlYXR1cmUvYnVnJyxcbiAgICAgICAgJy0gWyBdIFN0b3J5L2ZlYXR1cmUvYnVnIGlzIGRlc2NyaXB0aXZlJyxcbiAgICAgICAgJy0gWyBdIFN0b3J5L2ZlYXR1cmUvYnVnIGlzIGFzc2lnbmVkIHRvIGFjY29yZGluZyBsYWJlbHMnLFxuICAgICAgICAnLSBbIF0gU3RvcnkvZmVhdHVyZS9idWcgaXMgYXNzaWduZWQgdG8gYSBkZXZlbG9wZXInLFxuICAgICAgICAnJyxcbiAgICAgICAgJyMjIyBTdHJ1Y3R1cmUnLFxuICAgICAgICAnJyxcbiAgICAgICAgJy0gWyBdIFJlYWRhYmlsaXR5OiBDb2RlIGlzIGVhc3kgdG8gdW5kZXJzdGFuZCwgd2l0aCBtZWFuaW5nZnVsIG5hbWVzIGZvciB2YXJpYWJsZXMsIGZ1bmN0aW9ucywgYW5kIGNsYXNzZXMnLFxuICAgICAgICAnLSBbIF0gQ29tbWVudHM6IE1lYW5pbmdmdWwgYW5kIGhlbHBmdWwgY29tbWVudHMuIENvZGUgaXMgZG9jdW1lbnRlZCB3aXRob3V0IGJlaW5nIG92ZXItY29tbWVudGVkJyxcbiAgICAgICAgJy0gWyBdIERSWSwgS0lTUyBhbmQgWUFHTkk6IENvZGUgaW1wbGVtZW50cyBvbmx5IG5lY2Vzc2FyeSBmZWF0dXJlczsgbm8gb3Zlci1lbmdpbmVlcmluZycsXG4gICAgICAgICctIFsgXSBObyBzZW5zaXRpdmUgZGF0YSAoZS5nLiwgcGFzc3dvcmRzLCBBUEkga2V5cykgaW4gdGhlIGNvZGUnLFxuICAgICAgICAnLSBbIF0gTm8gbWFqb3IgdXBkYXRlcyBmb3IgdXNlZCBwYWNrYWdlcycsXG4gICAgICAgICcnLFxuICAgICAgICAnIyMjIENvZGluZycsXG4gICAgICAgICcnLFxuICAgICAgICAnLSBbIF0gTW9kZWwvQmluZGluZyBwcm9wZXJ0eSBjaGFuZ2VzIG9yIHJlbmFtaW5nIGRvZXMgbm90IGJyZWFrIHRoZSBjb2RlJyxcbiAgICAgICAgJy0gWyBdIE1vZGVsL0JpbmRpbmcgcHJvcGVydGllcyBoYXZlIGNvbnNpc3RlbnQgbmFtZXMgKGNhcGl0YWxpemF0aW9uLCBsb3dlcmNhc2UsIC4uKScsXG4gICAgICAgICctIFsgXSBUeXBlIGFsaWFzZXMgYXJlIGRlZmluZWQgZm9yIGFzc29jaWF0aW9ucyBhbmQgY29tcG9zaXRpb25zJyxcbiAgICAgICAgJy0gWyBdIE5vIGh1bmdhcmlhbiBub3RhdGlvbiAoZS5nLiBhTGlzdCwgb01vZGVsLCAuLiknLFxuICAgICAgICAnJyxcbiAgICAgICAgJyMjIyBNb3N0IGltcG9ydGFudCAoYXMgbG9uZyBhcyB3ZSBkbyBub3QgaGF2ZSBUZXN0IERyaXZlbiBEZXZlbG9wbWVudCBpbiBwbGFjZSknLFxuICAgICAgICAnJyxcbiAgICAgICAgJy0gWyBdIENvZGUgaXMgbG9jYWxseSB0ZXN0ZWQgYnkgZGV2ZWxvcGVyJyxcbiAgICAgICAgJycsXG4gICAgICAgICcjIyMgU2Vjb25kIG1vc3QgaW1wb3J0YW50JyxcbiAgICAgICAgJycsXG4gICAgICAgICctIFsgXSBBUEkgZmlyc3Q6IGFwcGxpY2F0aW9uIGNhbiBiZSB1c2VkIGhlYWRsZXNzICh3aXRoIHRoZSBBUEkgb25seSknLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBjb25maWdGaWxlUmVsZWFzZVdvcmtmbG93KCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuZ2l0aHViL3dvcmtmbG93cy9yZWxlYXNlLnltbCc6IFtcbiAgICAgICAgJ25hbWU6IFJlbGVhc2UnLFxuICAgICAgICAnb246JyxcbiAgICAgICAgJyAgcHVsbF9yZXF1ZXN0OicsXG4gICAgICAgICcgICAgYnJhbmNoZXM6JyxcbiAgICAgICAgJyAgICAgIC0gZGV2JyxcbiAgICAgICAgJyAgICB0eXBlczonLFxuICAgICAgICAnICAgICAgLSBjbG9zZWQnLFxuICAgICAgICAnam9iczonLFxuICAgICAgICAnICByZWxlYXNlOicsXG4gICAgICAgICcgICAgcnVucy1vbjogdWJ1bnR1LWxhdGVzdCcsXG4gICAgICAgICcgICAgcGVybWlzc2lvbnM6JyxcbiAgICAgICAgJyAgICAgIGNvbnRlbnRzOiB3cml0ZScsXG4gICAgICAgICcgICAgICBwdWxsLXJlcXVlc3RzOiB3cml0ZScsXG4gICAgICAgICcgICAgc3RlcHM6JyxcbiAgICAgICAgJyAgICAgIC0gbmFtZTogQ3JlYXRlIHJlbGVhc2UnLFxuICAgICAgICAnICAgICAgICB1c2VzOiBkeGZyb250aWVyL2doLWFjdGlvbi1yZWxlYXNlQG1haW4nLFxuICAgICAgICAnICAgICAgICB3aXRoOicsXG4gICAgICAgICcgICAgICAgICAgR0lUSFVCX1RPS0VOOiAke3sgc2VjcmV0cy5HSVRIVUJfVE9LRU4gfX0nLFxuICAgICAgICAnICAgICAgICAgIEJSQU5DSDogZGV2JyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZURlcGxveW1lbnRXb3JrZmxvdygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnLmdpdGh1Yi93b3JrZmxvd3MvZGVwbG95bWVudC55bWwnOiBbXG4gICAgICAgICduYW1lOiBEZXBsb3ltZW50JyxcbiAgICAgICAgJ29uOicsXG4gICAgICAgICcgIHB1bGxfcmVxdWVzdDonLFxuICAgICAgICAnICAgIGJyYW5jaGVzOicsXG4gICAgICAgICcgICAgICAtIGRldicsXG4gICAgICAgICcgICAgICAtIG1haW4nLFxuICAgICAgICAnICAgIHR5cGVzOicsXG4gICAgICAgICcgICAgICAtIGNsb3NlZCcsXG4gICAgICAgICdqb2JzOicsXG4gICAgICAgICcgIHJlbGVhc2U6JyxcbiAgICAgICAgJyAgICBydW5zLW9uOiB1YnVudHUtbGF0ZXN0JyxcbiAgICAgICAgJyAgICBwZXJtaXNzaW9uczonLFxuICAgICAgICAnICAgICAgY29udGVudHM6IHdyaXRlJyxcbiAgICAgICAgJyAgICAgIHB1bGwtcmVxdWVzdHM6IHdyaXRlJyxcbiAgICAgICAgJyAgICBzdGVwczonLFxuICAgICAgICAnICAgICAgLSBuYW1lOiBEZXBsb3kgdG8gQ2xvdWQgRm91bmRyeScsXG4gICAgICAgICcgICAgICAgIHVzZXM6IGR4ZnJvbnRpZXIvZ2gtYWN0aW9uLWRlcGxveS1jZkBtYWluJyxcbiAgICAgICAgJyAgICAgICAgd2l0aDonLFxuICAgICAgICAnICAgICAgICAgIENGX0lBU19PUklHSU46ICR7eyBzZWNyZXRzLklBU19PUklHSU4gfX0nLFxuICAgICAgICAnICAgICAgICAgIENGX0FQSV9ERVY6ICR7eyBzZWNyZXRzLkNGX0FQSV9ERVYgfX0nLFxuICAgICAgICAnICAgICAgICAgIENGX09SR19ERVY6ICR7eyBzZWNyZXRzLkNGX09SR19ERVYgfX0nLFxuICAgICAgICAnICAgICAgICAgIENGX1NQQUNFX0RFVjogJHt7IHNlY3JldHMuQ0ZfU1BBQ0VfREVWIH19JyxcbiAgICAgICAgJyAgICAgICAgICBDRl9VU0VSTkFNRV9ERVY6ICR7eyBzZWNyZXRzLkNGX1VTRVJOQU1FX0RFViB9fScsXG4gICAgICAgICcgICAgICAgICAgQ0ZfUEFTU1dPUkRfREVWOiAke3sgc2VjcmV0cy5DRl9QQVNTV09SRF9ERVYgfX0nLFxuICAgICAgICAnICAgICAgICAgIENGX0FQSV9QUk9EOiAke3sgc2VjcmV0cy5DRl9BUElfUFJPRCB9fScsXG4gICAgICAgICcgICAgICAgICAgQ0ZfT1JHX1BST0Q6ICR7eyBzZWNyZXRzLkNGX09SR19QUk9EIH19JyxcbiAgICAgICAgJyAgICAgICAgICBDRl9TUEFDRV9QUk9EOiAke3sgc2VjcmV0cy5DRl9TUEFDRV9QUk9EIH19JyxcbiAgICAgICAgJyAgICAgICAgICBDRl9VU0VSTkFNRV9QUk9EOiAke3sgc2VjcmV0cy5DRl9VU0VSTkFNRV9QUk9EIH19JyxcbiAgICAgICAgJyAgICAgICAgICBDRl9QQVNTV09SRF9QUk9EOiAke3sgc2VjcmV0cy5DRl9QQVNTV09SRF9QUk9EIH19JyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgY29uZmlncygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT5bXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHRoaXMuY29uZmlnRmlsZVB1bGxSZXF1ZXN0LFxuICAgICAgdGhpcy5jb25maWdGaWxlQ2xpZmYsXG4gICAgICB0aGlzLmNvbmZpZ0ZpbGVSZWxlYXNlV29ya2Zsb3csXG4gICAgICB0aGlzLmNvbmZpZ0ZpbGVEZXBsb3ltZW50V29ya2Zsb3csXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgZGVwbG95bWVudCB3b3JrZmxvdyB0ZW1wbGF0ZSBmaWxlLlxuICAgKi9cbiAgcHVibGljIGNyZWF0ZURlcGxveW1lbnRXb3JrZmxvdygpOiB2b2lkIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlRGVwbG95bWVudFdvcmtmbG93KVswXTtcbiAgICBuZXcgVGV4dEZpbGUodGhpcy5wcm9qZWN0LCBmaWxlUGF0aCwge1xuICAgICAgbGluZXM6IHRoaXMuY29uZmlnRmlsZURlcGxveW1lbnRXb3JrZmxvd1tmaWxlUGF0aF0sXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgYXBwbHlDb25maWcoKTogdm9pZCB7XG4gICAgc3VwZXIuYXBwbHlDb25maWcoKTtcbiAgICB0aGlzLmNyZWF0ZURlcGxveW1lbnRXb3JrZmxvdygpO1xuICB9XG59XG4iXX0=
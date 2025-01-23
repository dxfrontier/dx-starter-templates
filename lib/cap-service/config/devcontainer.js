"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevContainerConfigCapService = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../../base");
/**
 * Implementing all relevant DevContainer configuration for the CapService project.
 */
class DevContainerConfigCapService extends base_1.DevContainerConfigBase {
    get additionalScripts() {
        return {};
    }
    get configFile() {
        return {
            '.devcontainer.json': {
                image: 'mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye',
                postCreateCommand: `
          sudo apt-get update && \
          sudo apt-get install -y xdg-utils && \
          npm install -g @sap/cds-dk typescript ts-node @ui5/cli git-cliff && \
          npm install && \
          wget -q -O - https://packages.cloudfoundry.org/debian/cli.cloudfoundry.org.key | sudo apt-key add - && \
          echo "deb https://packages.cloudfoundry.org/debian stable main" | sudo tee /etc/apt/sources.list.d/cloudfoundry-cli.list && \
          sudo apt-get update && \
          sudo apt-get install cf8-cli
        `,
                features: {
                    'ghcr.io/devcontainers-contrib/features/curl-apt-get': 'latest',
                    'ghcr.io/devcontainers/features/github-cli': 'latest',
                },
                customizations: {
                    vscode: {
                        extensions: [
                            'Orta.vscode-jest',
                            'firsttris.vscode-jest-runner',
                            // Rest
                            'humao.rest-client',
                            // VsCode
                            'aaron-bond.better-comments',
                            'alefragnani.Bookmarks',
                            'alefragnani.project-manager',
                            // NPM
                            'christian-kohler.npm-intellisense',
                            'mskelton.npm-outdated',
                            // Theme
                            'PKief.material-icon-theme',
                            'zhuangtongfa.material-theme',
                            'GitHub.github-vscode-theme',
                            // SAP CAP
                            'SAPSE.vscode-cds',
                            'SAPOSS.app-studio-toolkit',
                            'SAPOSS.app-studio-remote-access',
                            'SAPOS.yeoman-ui',
                            // Docker
                            'ms-vscode-remote.remote-containers',
                            // .env
                            'mikestead.dotenv',
                            // UI5
                            'SAPSE.sap-ux-fiori-tools-extension-pack',
                            // SQLite
                            'qwtel.sqlite-viewer',
                            // CSV
                            'janisdd.vscode-edit-csv',
                            'mechatroner.rainbow-csv',
                            // TypeScript
                            'usernamehw.errorlens',
                            'dbaeumer.vscode-eslint',
                            'oderwat.indent-rainbow',
                            'esbenp.prettier-vscode',
                            'YoavBls.pretty-ts-errors',
                            'streetsidesoftware.code-spell-checker',
                            'wayou.vscode-todo-highlight',
                            'mike-co.import-sorter',
                            'VisualStudioExptTeam.vscodeintellicode',
                            // XML & YAML'
                            'redhat.vscode-yaml',
                            'DotJoshJohnson.xml',
                            'SAPOSS.xml-toolkit',
                            // Git
                            'waderyan.gitblame',
                            'donjayamanne.githistory',
                            'GitHub.vscode-pull-request-github',
                            // README
                            'yzhang.markdown-all-in-one',
                            'DavidAnson.vscode-markdownlint',
                            'bierner.jsdoc-markdown-highlighting',
                            // Others
                            'VisualStudioExptTeam.vscodeintellicode',
                            'christian-kohler.path-intellisense',
                            'AykutSarac.jsoncrack-vscode',
                            'tamasfe.even-better-toml',
                            'github.copilot',
                        ],
                    },
                },
            },
        };
    }
}
exports.DevContainerConfigCapService = DevContainerConfigCapService;
_a = JSII_RTTI_SYMBOL_1;
DevContainerConfigCapService[_a] = { fqn: "@dxfrontier/projen-template-projects.DevContainerConfigCapService", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2Y29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NhcC1zZXJ2aWNlL2NvbmZpZy9kZXZjb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQ0FBb0Q7QUFHcEQ7O0dBRUc7QUFDSCxNQUFhLDRCQUE2QixTQUFRLDZCQUFzQjtJQUN0RSxJQUF1QixpQkFBaUI7UUFDdEMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsSUFBdUIsVUFBVTtRQUMvQixPQUFPO1lBQ0wsb0JBQW9CLEVBQUU7Z0JBQ3BCLEtBQUssRUFBRSwrREFBK0Q7Z0JBQ3RFLGlCQUFpQixFQUFFOzs7Ozs7Ozs7U0FTbEI7Z0JBQ0QsUUFBUSxFQUFFO29CQUNSLHFEQUFxRCxFQUFFLFFBQVE7b0JBQy9ELDJDQUEyQyxFQUFFLFFBQVE7aUJBQ3REO2dCQUNELGNBQWMsRUFBRTtvQkFDZCxNQUFNLEVBQUU7d0JBQ04sVUFBVSxFQUFFOzRCQUNWLGtCQUFrQjs0QkFDbEIsOEJBQThCOzRCQUU5QixPQUFPOzRCQUNQLG1CQUFtQjs0QkFFbkIsU0FBUzs0QkFDVCw0QkFBNEI7NEJBQzVCLHVCQUF1Qjs0QkFDdkIsNkJBQTZCOzRCQUU3QixNQUFNOzRCQUNOLG1DQUFtQzs0QkFDbkMsdUJBQXVCOzRCQUV2QixRQUFROzRCQUNSLDJCQUEyQjs0QkFDM0IsNkJBQTZCOzRCQUM3Qiw0QkFBNEI7NEJBRTVCLFVBQVU7NEJBQ1Ysa0JBQWtCOzRCQUNsQiwyQkFBMkI7NEJBQzNCLGlDQUFpQzs0QkFDakMsaUJBQWlCOzRCQUVqQixTQUFTOzRCQUNULG9DQUFvQzs0QkFFcEMsT0FBTzs0QkFDUCxrQkFBa0I7NEJBRWxCLE1BQU07NEJBQ04seUNBQXlDOzRCQUV6QyxTQUFTOzRCQUNULHFCQUFxQjs0QkFFckIsTUFBTTs0QkFDTix5QkFBeUI7NEJBQ3pCLHlCQUF5Qjs0QkFFekIsYUFBYTs0QkFDYixzQkFBc0I7NEJBQ3RCLHdCQUF3Qjs0QkFDeEIsd0JBQXdCOzRCQUN4Qix3QkFBd0I7NEJBQ3hCLDBCQUEwQjs0QkFDMUIsdUNBQXVDOzRCQUN2Qyw2QkFBNkI7NEJBQzdCLHVCQUF1Qjs0QkFDdkIsd0NBQXdDOzRCQUV4QyxjQUFjOzRCQUNkLG9CQUFvQjs0QkFDcEIsb0JBQW9COzRCQUNwQixvQkFBb0I7NEJBRXBCLE1BQU07NEJBQ04sbUJBQW1COzRCQUNuQix5QkFBeUI7NEJBQ3pCLG1DQUFtQzs0QkFFbkMsU0FBUzs0QkFDVCw0QkFBNEI7NEJBQzVCLGdDQUFnQzs0QkFDaEMscUNBQXFDOzRCQUVyQyxTQUFTOzRCQUNULHdDQUF3Qzs0QkFDeEMsb0NBQW9DOzRCQUNwQyw2QkFBNkI7NEJBQzdCLDBCQUEwQjs0QkFDMUIsZ0JBQWdCO3lCQUNqQjtxQkFDRjtpQkFDRjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0FBekdILG9FQTBHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERldkNvbnRhaW5lckNvbmZpZ0Jhc2UgfSBmcm9tICcuLi8uLi9iYXNlJztcbmltcG9ydCB7IENvbmZpZ0ZpbGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbi8qKlxuICogSW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBEZXZDb250YWluZXIgY29uZmlndXJhdGlvbiBmb3IgdGhlIENhcFNlcnZpY2UgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIERldkNvbnRhaW5lckNvbmZpZ0NhcFNlcnZpY2UgZXh0ZW5kcyBEZXZDb250YWluZXJDb25maWdCYXNlIHtcbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2NyaXB0cygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGNvbmZpZ0ZpbGUoKTogQ29uZmlnRmlsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuZGV2Y29udGFpbmVyLmpzb24nOiB7XG4gICAgICAgIGltYWdlOiAnbWNyLm1pY3Jvc29mdC5jb20vZGV2Y29udGFpbmVycy90eXBlc2NyaXB0LW5vZGU6MS0yMC1idWxsc2V5ZScsXG4gICAgICAgIHBvc3RDcmVhdGVDb21tYW5kOiBgXG4gICAgICAgICAgc3VkbyBhcHQtZ2V0IHVwZGF0ZSAmJiBcXFxuICAgICAgICAgIHN1ZG8gYXB0LWdldCBpbnN0YWxsIC15IHhkZy11dGlscyAmJiBcXFxuICAgICAgICAgIG5wbSBpbnN0YWxsIC1nIEBzYXAvY2RzLWRrIHR5cGVzY3JpcHQgdHMtbm9kZSBAdWk1L2NsaSBnaXQtY2xpZmYgJiYgXFxcbiAgICAgICAgICBucG0gaW5zdGFsbCAmJiBcXFxuICAgICAgICAgIHdnZXQgLXEgLU8gLSBodHRwczovL3BhY2thZ2VzLmNsb3VkZm91bmRyeS5vcmcvZGViaWFuL2NsaS5jbG91ZGZvdW5kcnkub3JnLmtleSB8IHN1ZG8gYXB0LWtleSBhZGQgLSAmJiBcXFxuICAgICAgICAgIGVjaG8gXCJkZWIgaHR0cHM6Ly9wYWNrYWdlcy5jbG91ZGZvdW5kcnkub3JnL2RlYmlhbiBzdGFibGUgbWFpblwiIHwgc3VkbyB0ZWUgL2V0Yy9hcHQvc291cmNlcy5saXN0LmQvY2xvdWRmb3VuZHJ5LWNsaS5saXN0ICYmIFxcXG4gICAgICAgICAgc3VkbyBhcHQtZ2V0IHVwZGF0ZSAmJiBcXFxuICAgICAgICAgIHN1ZG8gYXB0LWdldCBpbnN0YWxsIGNmOC1jbGlcbiAgICAgICAgYCxcbiAgICAgICAgZmVhdHVyZXM6IHtcbiAgICAgICAgICAnZ2hjci5pby9kZXZjb250YWluZXJzLWNvbnRyaWIvZmVhdHVyZXMvY3VybC1hcHQtZ2V0JzogJ2xhdGVzdCcsXG4gICAgICAgICAgJ2doY3IuaW8vZGV2Y29udGFpbmVycy9mZWF0dXJlcy9naXRodWItY2xpJzogJ2xhdGVzdCcsXG4gICAgICAgIH0sXG4gICAgICAgIGN1c3RvbWl6YXRpb25zOiB7XG4gICAgICAgICAgdnNjb2RlOiB7XG4gICAgICAgICAgICBleHRlbnNpb25zOiBbXG4gICAgICAgICAgICAgICdPcnRhLnZzY29kZS1qZXN0JyxcbiAgICAgICAgICAgICAgJ2ZpcnN0dHJpcy52c2NvZGUtamVzdC1ydW5uZXInLFxuXG4gICAgICAgICAgICAgIC8vIFJlc3RcbiAgICAgICAgICAgICAgJ2h1bWFvLnJlc3QtY2xpZW50JyxcblxuICAgICAgICAgICAgICAvLyBWc0NvZGVcbiAgICAgICAgICAgICAgJ2Fhcm9uLWJvbmQuYmV0dGVyLWNvbW1lbnRzJyxcbiAgICAgICAgICAgICAgJ2FsZWZyYWduYW5pLkJvb2ttYXJrcycsXG4gICAgICAgICAgICAgICdhbGVmcmFnbmFuaS5wcm9qZWN0LW1hbmFnZXInLFxuXG4gICAgICAgICAgICAgIC8vIE5QTVxuICAgICAgICAgICAgICAnY2hyaXN0aWFuLWtvaGxlci5ucG0taW50ZWxsaXNlbnNlJyxcbiAgICAgICAgICAgICAgJ21za2VsdG9uLm5wbS1vdXRkYXRlZCcsXG5cbiAgICAgICAgICAgICAgLy8gVGhlbWVcbiAgICAgICAgICAgICAgJ1BLaWVmLm1hdGVyaWFsLWljb24tdGhlbWUnLFxuICAgICAgICAgICAgICAnemh1YW5ndG9uZ2ZhLm1hdGVyaWFsLXRoZW1lJyxcbiAgICAgICAgICAgICAgJ0dpdEh1Yi5naXRodWItdnNjb2RlLXRoZW1lJyxcblxuICAgICAgICAgICAgICAvLyBTQVAgQ0FQXG4gICAgICAgICAgICAgICdTQVBTRS52c2NvZGUtY2RzJyxcbiAgICAgICAgICAgICAgJ1NBUE9TUy5hcHAtc3R1ZGlvLXRvb2xraXQnLFxuICAgICAgICAgICAgICAnU0FQT1NTLmFwcC1zdHVkaW8tcmVtb3RlLWFjY2VzcycsXG4gICAgICAgICAgICAgICdTQVBPUy55ZW9tYW4tdWknLFxuXG4gICAgICAgICAgICAgIC8vIERvY2tlclxuICAgICAgICAgICAgICAnbXMtdnNjb2RlLXJlbW90ZS5yZW1vdGUtY29udGFpbmVycycsXG5cbiAgICAgICAgICAgICAgLy8gLmVudlxuICAgICAgICAgICAgICAnbWlrZXN0ZWFkLmRvdGVudicsXG5cbiAgICAgICAgICAgICAgLy8gVUk1XG4gICAgICAgICAgICAgICdTQVBTRS5zYXAtdXgtZmlvcmktdG9vbHMtZXh0ZW5zaW9uLXBhY2snLFxuXG4gICAgICAgICAgICAgIC8vIFNRTGl0ZVxuICAgICAgICAgICAgICAncXd0ZWwuc3FsaXRlLXZpZXdlcicsXG5cbiAgICAgICAgICAgICAgLy8gQ1NWXG4gICAgICAgICAgICAgICdqYW5pc2RkLnZzY29kZS1lZGl0LWNzdicsXG4gICAgICAgICAgICAgICdtZWNoYXRyb25lci5yYWluYm93LWNzdicsXG5cbiAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdFxuICAgICAgICAgICAgICAndXNlcm5hbWVody5lcnJvcmxlbnMnLFxuICAgICAgICAgICAgICAnZGJhZXVtZXIudnNjb2RlLWVzbGludCcsXG4gICAgICAgICAgICAgICdvZGVyd2F0LmluZGVudC1yYWluYm93JyxcbiAgICAgICAgICAgICAgJ2VzYmVucC5wcmV0dGllci12c2NvZGUnLFxuICAgICAgICAgICAgICAnWW9hdkJscy5wcmV0dHktdHMtZXJyb3JzJyxcbiAgICAgICAgICAgICAgJ3N0cmVldHNpZGVzb2Z0d2FyZS5jb2RlLXNwZWxsLWNoZWNrZXInLFxuICAgICAgICAgICAgICAnd2F5b3UudnNjb2RlLXRvZG8taGlnaGxpZ2h0JyxcbiAgICAgICAgICAgICAgJ21pa2UtY28uaW1wb3J0LXNvcnRlcicsXG4gICAgICAgICAgICAgICdWaXN1YWxTdHVkaW9FeHB0VGVhbS52c2NvZGVpbnRlbGxpY29kZScsXG5cbiAgICAgICAgICAgICAgLy8gWE1MICYgWUFNTCdcbiAgICAgICAgICAgICAgJ3JlZGhhdC52c2NvZGUteWFtbCcsXG4gICAgICAgICAgICAgICdEb3RKb3NoSm9obnNvbi54bWwnLFxuICAgICAgICAgICAgICAnU0FQT1NTLnhtbC10b29sa2l0JyxcblxuICAgICAgICAgICAgICAvLyBHaXRcbiAgICAgICAgICAgICAgJ3dhZGVyeWFuLmdpdGJsYW1lJyxcbiAgICAgICAgICAgICAgJ2RvbmpheWFtYW5uZS5naXRoaXN0b3J5JyxcbiAgICAgICAgICAgICAgJ0dpdEh1Yi52c2NvZGUtcHVsbC1yZXF1ZXN0LWdpdGh1YicsXG5cbiAgICAgICAgICAgICAgLy8gUkVBRE1FXG4gICAgICAgICAgICAgICd5emhhbmcubWFya2Rvd24tYWxsLWluLW9uZScsXG4gICAgICAgICAgICAgICdEYXZpZEFuc29uLnZzY29kZS1tYXJrZG93bmxpbnQnLFxuICAgICAgICAgICAgICAnYmllcm5lci5qc2RvYy1tYXJrZG93bi1oaWdobGlnaHRpbmcnLFxuXG4gICAgICAgICAgICAgIC8vIE90aGVyc1xuICAgICAgICAgICAgICAnVmlzdWFsU3R1ZGlvRXhwdFRlYW0udnNjb2RlaW50ZWxsaWNvZGUnLFxuICAgICAgICAgICAgICAnY2hyaXN0aWFuLWtvaGxlci5wYXRoLWludGVsbGlzZW5zZScsXG4gICAgICAgICAgICAgICdBeWt1dFNhcmFjLmpzb25jcmFjay12c2NvZGUnLFxuICAgICAgICAgICAgICAndGFtYXNmZS5ldmVuLWJldHRlci10b21sJyxcbiAgICAgICAgICAgICAgJ2dpdGh1Yi5jb3BpbG90JyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuIl19
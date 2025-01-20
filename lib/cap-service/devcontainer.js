"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevContainerConfigCapService = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../base");
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
                postCreateCommand: [
                    'sudo apt-get update',
                    'sudo apt-get install -y xdg-utils',
                    'npm install -g @sap/cds-dk typescript ts-node @ui5/cli git-cliff',
                    'npm install',
                    'wget -q -O - https://packages.cloudfoundry.org/debian/cli.cloudfoundry.org.key | sudo apt-key add -',
                    'echo "deb https://packages.cloudfoundry.org/debian stable main" | sudo tee /etc/apt/sources.list.d/cloudfoundry-cli.list',
                    'sudo apt-get update',
                    'sudo apt-get install cf8-cli',
                ],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2Y29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NhcC1zZXJ2aWNlL2RldmNvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtDQUFpRDtBQUdqRDs7R0FFRztBQUNILE1BQWEsNEJBQTZCLFNBQVEsNkJBQXNCO0lBQ3RFLElBQWMsaUJBQWlCO1FBQzdCLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVELElBQXVCLFVBQVU7UUFDL0IsT0FBTztZQUNMLG9CQUFvQixFQUFFO2dCQUNwQixLQUFLLEVBQUUsK0RBQStEO2dCQUN0RSxpQkFBaUIsRUFBRTtvQkFDakIscUJBQXFCO29CQUNyQixtQ0FBbUM7b0JBQ25DLGtFQUFrRTtvQkFDbEUsYUFBYTtvQkFDYixxR0FBcUc7b0JBQ3JHLDBIQUEwSDtvQkFDMUgscUJBQXFCO29CQUNyQiw4QkFBOEI7aUJBQy9CO2dCQUNELFFBQVEsRUFBRTtvQkFDUixxREFBcUQsRUFBRSxRQUFRO29CQUMvRCwyQ0FBMkMsRUFBRSxRQUFRO2lCQUN0RDtnQkFDRCxjQUFjLEVBQUU7b0JBQ2QsTUFBTSxFQUFFO3dCQUNOLFVBQVUsRUFBRTs0QkFDVixrQkFBa0I7NEJBQ2xCLDhCQUE4Qjs0QkFFOUIsT0FBTzs0QkFDUCxtQkFBbUI7NEJBRW5CLFNBQVM7NEJBQ1QsNEJBQTRCOzRCQUM1Qix1QkFBdUI7NEJBQ3ZCLDZCQUE2Qjs0QkFFN0IsTUFBTTs0QkFDTixtQ0FBbUM7NEJBQ25DLHVCQUF1Qjs0QkFFdkIsUUFBUTs0QkFDUiwyQkFBMkI7NEJBQzNCLDZCQUE2Qjs0QkFDN0IsNEJBQTRCOzRCQUU1QixVQUFVOzRCQUNWLGtCQUFrQjs0QkFDbEIsMkJBQTJCOzRCQUMzQixpQ0FBaUM7NEJBQ2pDLGlCQUFpQjs0QkFFakIsU0FBUzs0QkFDVCxvQ0FBb0M7NEJBRXBDLE9BQU87NEJBQ1Asa0JBQWtCOzRCQUVsQixNQUFNOzRCQUNOLHlDQUF5Qzs0QkFFekMsU0FBUzs0QkFDVCxxQkFBcUI7NEJBRXJCLE1BQU07NEJBQ04seUJBQXlCOzRCQUN6Qix5QkFBeUI7NEJBRXpCLGFBQWE7NEJBQ2Isc0JBQXNCOzRCQUN0Qix3QkFBd0I7NEJBQ3hCLHdCQUF3Qjs0QkFDeEIsd0JBQXdCOzRCQUN4QiwwQkFBMEI7NEJBQzFCLHVDQUF1Qzs0QkFDdkMsNkJBQTZCOzRCQUM3Qix1QkFBdUI7NEJBQ3ZCLHdDQUF3Qzs0QkFFeEMsY0FBYzs0QkFDZCxvQkFBb0I7NEJBQ3BCLG9CQUFvQjs0QkFDcEIsb0JBQW9COzRCQUVwQixNQUFNOzRCQUNOLG1CQUFtQjs0QkFDbkIseUJBQXlCOzRCQUN6QixtQ0FBbUM7NEJBRW5DLFNBQVM7NEJBQ1QsNEJBQTRCOzRCQUM1QixnQ0FBZ0M7NEJBQ2hDLHFDQUFxQzs0QkFFckMsU0FBUzs0QkFDVCx3Q0FBd0M7NEJBQ3hDLG9DQUFvQzs0QkFDcEMsNkJBQTZCOzRCQUM3QiwwQkFBMEI7NEJBQzFCLGdCQUFnQjt5QkFDakI7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztBQXpHSCxvRUEwR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXZDb250YWluZXJDb25maWdCYXNlIH0gZnJvbSAnLi4vYmFzZSc7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4uL3R5cGVzJztcblxuLyoqXG4gKiBJbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IERldkNvbnRhaW5lciBjb25maWd1cmF0aW9uIGZvciB0aGUgQ2FwU2VydmljZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgRGV2Q29udGFpbmVyQ29uZmlnQ2FwU2VydmljZSBleHRlbmRzIERldkNvbnRhaW5lckNvbmZpZ0Jhc2Uge1xuICBwcm90ZWN0ZWQgZ2V0IGFkZGl0aW9uYWxTY3JpcHRzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgY29uZmlnRmlsZSgpOiBTZXR0aW5ncyB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuZGV2Y29udGFpbmVyLmpzb24nOiB7XG4gICAgICAgIGltYWdlOiAnbWNyLm1pY3Jvc29mdC5jb20vZGV2Y29udGFpbmVycy90eXBlc2NyaXB0LW5vZGU6MS0yMC1idWxsc2V5ZScsXG4gICAgICAgIHBvc3RDcmVhdGVDb21tYW5kOiBbXG4gICAgICAgICAgJ3N1ZG8gYXB0LWdldCB1cGRhdGUnLFxuICAgICAgICAgICdzdWRvIGFwdC1nZXQgaW5zdGFsbCAteSB4ZGctdXRpbHMnLFxuICAgICAgICAgICducG0gaW5zdGFsbCAtZyBAc2FwL2Nkcy1kayB0eXBlc2NyaXB0IHRzLW5vZGUgQHVpNS9jbGkgZ2l0LWNsaWZmJyxcbiAgICAgICAgICAnbnBtIGluc3RhbGwnLFxuICAgICAgICAgICd3Z2V0IC1xIC1PIC0gaHR0cHM6Ly9wYWNrYWdlcy5jbG91ZGZvdW5kcnkub3JnL2RlYmlhbi9jbGkuY2xvdWRmb3VuZHJ5Lm9yZy5rZXkgfCBzdWRvIGFwdC1rZXkgYWRkIC0nLFxuICAgICAgICAgICdlY2hvIFwiZGViIGh0dHBzOi8vcGFja2FnZXMuY2xvdWRmb3VuZHJ5Lm9yZy9kZWJpYW4gc3RhYmxlIG1haW5cIiB8IHN1ZG8gdGVlIC9ldGMvYXB0L3NvdXJjZXMubGlzdC5kL2Nsb3VkZm91bmRyeS1jbGkubGlzdCcsXG4gICAgICAgICAgJ3N1ZG8gYXB0LWdldCB1cGRhdGUnLFxuICAgICAgICAgICdzdWRvIGFwdC1nZXQgaW5zdGFsbCBjZjgtY2xpJyxcbiAgICAgICAgXSxcbiAgICAgICAgZmVhdHVyZXM6IHtcbiAgICAgICAgICAnZ2hjci5pby9kZXZjb250YWluZXJzLWNvbnRyaWIvZmVhdHVyZXMvY3VybC1hcHQtZ2V0JzogJ2xhdGVzdCcsXG4gICAgICAgICAgJ2doY3IuaW8vZGV2Y29udGFpbmVycy9mZWF0dXJlcy9naXRodWItY2xpJzogJ2xhdGVzdCcsXG4gICAgICAgIH0sXG4gICAgICAgIGN1c3RvbWl6YXRpb25zOiB7XG4gICAgICAgICAgdnNjb2RlOiB7XG4gICAgICAgICAgICBleHRlbnNpb25zOiBbXG4gICAgICAgICAgICAgICdPcnRhLnZzY29kZS1qZXN0JyxcbiAgICAgICAgICAgICAgJ2ZpcnN0dHJpcy52c2NvZGUtamVzdC1ydW5uZXInLFxuXG4gICAgICAgICAgICAgIC8vIFJlc3RcbiAgICAgICAgICAgICAgJ2h1bWFvLnJlc3QtY2xpZW50JyxcblxuICAgICAgICAgICAgICAvLyBWc0NvZGVcbiAgICAgICAgICAgICAgJ2Fhcm9uLWJvbmQuYmV0dGVyLWNvbW1lbnRzJyxcbiAgICAgICAgICAgICAgJ2FsZWZyYWduYW5pLkJvb2ttYXJrcycsXG4gICAgICAgICAgICAgICdhbGVmcmFnbmFuaS5wcm9qZWN0LW1hbmFnZXInLFxuXG4gICAgICAgICAgICAgIC8vIE5QTVxuICAgICAgICAgICAgICAnY2hyaXN0aWFuLWtvaGxlci5ucG0taW50ZWxsaXNlbnNlJyxcbiAgICAgICAgICAgICAgJ21za2VsdG9uLm5wbS1vdXRkYXRlZCcsXG5cbiAgICAgICAgICAgICAgLy8gVGhlbWVcbiAgICAgICAgICAgICAgJ1BLaWVmLm1hdGVyaWFsLWljb24tdGhlbWUnLFxuICAgICAgICAgICAgICAnemh1YW5ndG9uZ2ZhLm1hdGVyaWFsLXRoZW1lJyxcbiAgICAgICAgICAgICAgJ0dpdEh1Yi5naXRodWItdnNjb2RlLXRoZW1lJyxcblxuICAgICAgICAgICAgICAvLyBTQVAgQ0FQXG4gICAgICAgICAgICAgICdTQVBTRS52c2NvZGUtY2RzJyxcbiAgICAgICAgICAgICAgJ1NBUE9TUy5hcHAtc3R1ZGlvLXRvb2xraXQnLFxuICAgICAgICAgICAgICAnU0FQT1NTLmFwcC1zdHVkaW8tcmVtb3RlLWFjY2VzcycsXG4gICAgICAgICAgICAgICdTQVBPUy55ZW9tYW4tdWknLFxuXG4gICAgICAgICAgICAgIC8vIERvY2tlclxuICAgICAgICAgICAgICAnbXMtdnNjb2RlLXJlbW90ZS5yZW1vdGUtY29udGFpbmVycycsXG5cbiAgICAgICAgICAgICAgLy8gLmVudlxuICAgICAgICAgICAgICAnbWlrZXN0ZWFkLmRvdGVudicsXG5cbiAgICAgICAgICAgICAgLy8gVUk1XG4gICAgICAgICAgICAgICdTQVBTRS5zYXAtdXgtZmlvcmktdG9vbHMtZXh0ZW5zaW9uLXBhY2snLFxuXG4gICAgICAgICAgICAgIC8vIFNRTGl0ZVxuICAgICAgICAgICAgICAncXd0ZWwuc3FsaXRlLXZpZXdlcicsXG5cbiAgICAgICAgICAgICAgLy8gQ1NWXG4gICAgICAgICAgICAgICdqYW5pc2RkLnZzY29kZS1lZGl0LWNzdicsXG4gICAgICAgICAgICAgICdtZWNoYXRyb25lci5yYWluYm93LWNzdicsXG5cbiAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdFxuICAgICAgICAgICAgICAndXNlcm5hbWVody5lcnJvcmxlbnMnLFxuICAgICAgICAgICAgICAnZGJhZXVtZXIudnNjb2RlLWVzbGludCcsXG4gICAgICAgICAgICAgICdvZGVyd2F0LmluZGVudC1yYWluYm93JyxcbiAgICAgICAgICAgICAgJ2VzYmVucC5wcmV0dGllci12c2NvZGUnLFxuICAgICAgICAgICAgICAnWW9hdkJscy5wcmV0dHktdHMtZXJyb3JzJyxcbiAgICAgICAgICAgICAgJ3N0cmVldHNpZGVzb2Z0d2FyZS5jb2RlLXNwZWxsLWNoZWNrZXInLFxuICAgICAgICAgICAgICAnd2F5b3UudnNjb2RlLXRvZG8taGlnaGxpZ2h0JyxcbiAgICAgICAgICAgICAgJ21pa2UtY28uaW1wb3J0LXNvcnRlcicsXG4gICAgICAgICAgICAgICdWaXN1YWxTdHVkaW9FeHB0VGVhbS52c2NvZGVpbnRlbGxpY29kZScsXG5cbiAgICAgICAgICAgICAgLy8gWE1MICYgWUFNTCdcbiAgICAgICAgICAgICAgJ3JlZGhhdC52c2NvZGUteWFtbCcsXG4gICAgICAgICAgICAgICdEb3RKb3NoSm9obnNvbi54bWwnLFxuICAgICAgICAgICAgICAnU0FQT1NTLnhtbC10b29sa2l0JyxcblxuICAgICAgICAgICAgICAvLyBHaXRcbiAgICAgICAgICAgICAgJ3dhZGVyeWFuLmdpdGJsYW1lJyxcbiAgICAgICAgICAgICAgJ2RvbmpheWFtYW5uZS5naXRoaXN0b3J5JyxcbiAgICAgICAgICAgICAgJ0dpdEh1Yi52c2NvZGUtcHVsbC1yZXF1ZXN0LWdpdGh1YicsXG5cbiAgICAgICAgICAgICAgLy8gUkVBRE1FXG4gICAgICAgICAgICAgICd5emhhbmcubWFya2Rvd24tYWxsLWluLW9uZScsXG4gICAgICAgICAgICAgICdEYXZpZEFuc29uLnZzY29kZS1tYXJrZG93bmxpbnQnLFxuICAgICAgICAgICAgICAnYmllcm5lci5qc2RvYy1tYXJrZG93bi1oaWdobGlnaHRpbmcnLFxuXG4gICAgICAgICAgICAgIC8vIE90aGVyc1xuICAgICAgICAgICAgICAnVmlzdWFsU3R1ZGlvRXhwdFRlYW0udnNjb2RlaW50ZWxsaWNvZGUnLFxuICAgICAgICAgICAgICAnY2hyaXN0aWFuLWtvaGxlci5wYXRoLWludGVsbGlzZW5zZScsXG4gICAgICAgICAgICAgICdBeWt1dFNhcmFjLmpzb25jcmFjay12c2NvZGUnLFxuICAgICAgICAgICAgICAndGFtYXNmZS5ldmVuLWJldHRlci10b21sJyxcbiAgICAgICAgICAgICAgJ2dpdGh1Yi5jb3BpbG90JyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuIl19
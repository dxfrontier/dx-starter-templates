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
            '.devcontainer/devcontainer.json': {
                image: 'mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye',
                postCreateCommand: 'bash scripts/install-dependencies.sh',
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
            '.devcontainer/scripts/install-dependencies.sh': [
                '#!/bin/bash',
                'set -e # Exit on error',
                'set -x # Print commands for debugging',
                '',
                '# Install global npm packages',
                'npm install -g mbt @sap/cds @sap/cds-dk ts-node',
                '',
                '# Install project dependencies',
                'npm install',
                '',
                '# Generate CDS typings',
                'npx @cap-js/cds-typer "*" --outputDirectory @cds-models',
                '',
                '# Add Cloud Foundry CLI repository',
                'wget -q -O - https://packages.cloudfoundry.org/debian/cli.cloudfoundry.org.key | sudo apt-key add -',
                'echo "deb https://packages.cloudfoundry.org/debian stable main" | sudo tee /etc/apt/sources.list.d/cloudfoundry-cli.list',
                '',
                '# Update package lists and install required packages',
                'sudo apt-get update',
                'sudo apt-get install -y xdg-utils jq cf8-cli',
                '',
                '# Install Cloud Foundry MultiApps Plugin',
                'cf install-plugin -f https://github.com/cloudfoundry-incubator/multiapps-cli-plugin/releases/latest/download/multiapps-plugin.linux64',
            ],
        };
    }
}
exports.DevContainerConfigCapService = DevContainerConfigCapService;
_a = JSII_RTTI_SYMBOL_1;
DevContainerConfigCapService[_a] = { fqn: "@dxfrontier/projen-template-projects.DevContainerConfigCapService", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2Y29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NhcC1zZXJ2aWNlL2NvbmZpZy9kZXZjb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQ0FBb0Q7QUFHcEQ7O0dBRUc7QUFDSCxNQUFhLDRCQUE2QixTQUFRLDZCQUFzQjtJQUN0RSxJQUF1QixpQkFBaUI7UUFDdEMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsSUFBdUIsVUFBVTtRQUMvQixPQUFPO1lBQ0wsaUNBQWlDLEVBQUU7Z0JBQ2pDLEtBQUssRUFBRSwrREFBK0Q7Z0JBQ3RFLGlCQUFpQixFQUFFLHNDQUFzQztnQkFDekQsUUFBUSxFQUFFO29CQUNSLHFEQUFxRCxFQUFFLFFBQVE7b0JBQy9ELDJDQUEyQyxFQUFFLFFBQVE7aUJBQ3REO2dCQUNELGNBQWMsRUFBRTtvQkFDZCxNQUFNLEVBQUU7d0JBQ04sVUFBVSxFQUFFOzRCQUNWLGtCQUFrQjs0QkFDbEIsOEJBQThCOzRCQUU5QixPQUFPOzRCQUNQLG1CQUFtQjs0QkFFbkIsU0FBUzs0QkFDVCw0QkFBNEI7NEJBQzVCLHVCQUF1Qjs0QkFDdkIsNkJBQTZCOzRCQUU3QixNQUFNOzRCQUNOLG1DQUFtQzs0QkFDbkMsdUJBQXVCOzRCQUV2QixRQUFROzRCQUNSLDJCQUEyQjs0QkFDM0IsNkJBQTZCOzRCQUM3Qiw0QkFBNEI7NEJBRTVCLFVBQVU7NEJBQ1Ysa0JBQWtCOzRCQUNsQiwyQkFBMkI7NEJBQzNCLGlDQUFpQzs0QkFDakMsaUJBQWlCOzRCQUVqQixTQUFTOzRCQUNULG9DQUFvQzs0QkFFcEMsT0FBTzs0QkFDUCxrQkFBa0I7NEJBRWxCLE1BQU07NEJBQ04seUNBQXlDOzRCQUV6QyxTQUFTOzRCQUNULHFCQUFxQjs0QkFFckIsTUFBTTs0QkFDTix5QkFBeUI7NEJBQ3pCLHlCQUF5Qjs0QkFFekIsYUFBYTs0QkFDYixzQkFBc0I7NEJBQ3RCLHdCQUF3Qjs0QkFDeEIsd0JBQXdCOzRCQUN4Qix3QkFBd0I7NEJBQ3hCLDBCQUEwQjs0QkFDMUIsdUNBQXVDOzRCQUN2Qyw2QkFBNkI7NEJBQzdCLHVCQUF1Qjs0QkFDdkIsd0NBQXdDOzRCQUV4QyxjQUFjOzRCQUNkLG9CQUFvQjs0QkFDcEIsb0JBQW9COzRCQUNwQixvQkFBb0I7NEJBRXBCLE1BQU07NEJBQ04sbUJBQW1COzRCQUNuQix5QkFBeUI7NEJBQ3pCLG1DQUFtQzs0QkFFbkMsU0FBUzs0QkFDVCw0QkFBNEI7NEJBQzVCLGdDQUFnQzs0QkFDaEMscUNBQXFDOzRCQUVyQyxTQUFTOzRCQUNULHdDQUF3Qzs0QkFDeEMsb0NBQW9DOzRCQUNwQyw2QkFBNkI7NEJBQzdCLDBCQUEwQjs0QkFDMUIsZ0JBQWdCO3lCQUNqQjtxQkFDRjtpQkFDRjthQUNGO1lBQ0QsK0NBQStDLEVBQUU7Z0JBQy9DLGFBQWE7Z0JBQ2Isd0JBQXdCO2dCQUN4Qix1Q0FBdUM7Z0JBQ3ZDLEVBQUU7Z0JBQ0YsK0JBQStCO2dCQUMvQixpREFBaUQ7Z0JBQ2pELEVBQUU7Z0JBQ0YsZ0NBQWdDO2dCQUNoQyxhQUFhO2dCQUNiLEVBQUU7Z0JBQ0Ysd0JBQXdCO2dCQUN4Qix5REFBeUQ7Z0JBQ3pELEVBQUU7Z0JBQ0Ysb0NBQW9DO2dCQUNwQyxxR0FBcUc7Z0JBQ3JHLDBIQUEwSDtnQkFDMUgsRUFBRTtnQkFDRixzREFBc0Q7Z0JBQ3RELHFCQUFxQjtnQkFDckIsOENBQThDO2dCQUM5QyxFQUFFO2dCQUNGLDBDQUEwQztnQkFDMUMsdUlBQXVJO2FBQ3hJO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0FBekhILG9FQTBIQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERldkNvbnRhaW5lckNvbmZpZ0Jhc2UgfSBmcm9tICcuLi8uLi9iYXNlJztcbmltcG9ydCB7IENvbmZpZ0ZpbGUgfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJztcblxuLyoqXG4gKiBJbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IERldkNvbnRhaW5lciBjb25maWd1cmF0aW9uIGZvciB0aGUgQ2FwU2VydmljZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgRGV2Q29udGFpbmVyQ29uZmlnQ2FwU2VydmljZSBleHRlbmRzIERldkNvbnRhaW5lckNvbmZpZ0Jhc2Uge1xuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxTY3JpcHRzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgY29uZmlnRmlsZSgpOiBDb25maWdGaWxlIHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5kZXZjb250YWluZXIvZGV2Y29udGFpbmVyLmpzb24nOiB7XG4gICAgICAgIGltYWdlOiAnbWNyLm1pY3Jvc29mdC5jb20vZGV2Y29udGFpbmVycy90eXBlc2NyaXB0LW5vZGU6MS0yMC1idWxsc2V5ZScsXG4gICAgICAgIHBvc3RDcmVhdGVDb21tYW5kOiAnYmFzaCBzY3JpcHRzL2luc3RhbGwtZGVwZW5kZW5jaWVzLnNoJyxcbiAgICAgICAgZmVhdHVyZXM6IHtcbiAgICAgICAgICAnZ2hjci5pby9kZXZjb250YWluZXJzLWNvbnRyaWIvZmVhdHVyZXMvY3VybC1hcHQtZ2V0JzogJ2xhdGVzdCcsXG4gICAgICAgICAgJ2doY3IuaW8vZGV2Y29udGFpbmVycy9mZWF0dXJlcy9naXRodWItY2xpJzogJ2xhdGVzdCcsXG4gICAgICAgIH0sXG4gICAgICAgIGN1c3RvbWl6YXRpb25zOiB7XG4gICAgICAgICAgdnNjb2RlOiB7XG4gICAgICAgICAgICBleHRlbnNpb25zOiBbXG4gICAgICAgICAgICAgICdPcnRhLnZzY29kZS1qZXN0JyxcbiAgICAgICAgICAgICAgJ2ZpcnN0dHJpcy52c2NvZGUtamVzdC1ydW5uZXInLFxuXG4gICAgICAgICAgICAgIC8vIFJlc3RcbiAgICAgICAgICAgICAgJ2h1bWFvLnJlc3QtY2xpZW50JyxcblxuICAgICAgICAgICAgICAvLyBWc0NvZGVcbiAgICAgICAgICAgICAgJ2Fhcm9uLWJvbmQuYmV0dGVyLWNvbW1lbnRzJyxcbiAgICAgICAgICAgICAgJ2FsZWZyYWduYW5pLkJvb2ttYXJrcycsXG4gICAgICAgICAgICAgICdhbGVmcmFnbmFuaS5wcm9qZWN0LW1hbmFnZXInLFxuXG4gICAgICAgICAgICAgIC8vIE5QTVxuICAgICAgICAgICAgICAnY2hyaXN0aWFuLWtvaGxlci5ucG0taW50ZWxsaXNlbnNlJyxcbiAgICAgICAgICAgICAgJ21za2VsdG9uLm5wbS1vdXRkYXRlZCcsXG5cbiAgICAgICAgICAgICAgLy8gVGhlbWVcbiAgICAgICAgICAgICAgJ1BLaWVmLm1hdGVyaWFsLWljb24tdGhlbWUnLFxuICAgICAgICAgICAgICAnemh1YW5ndG9uZ2ZhLm1hdGVyaWFsLXRoZW1lJyxcbiAgICAgICAgICAgICAgJ0dpdEh1Yi5naXRodWItdnNjb2RlLXRoZW1lJyxcblxuICAgICAgICAgICAgICAvLyBTQVAgQ0FQXG4gICAgICAgICAgICAgICdTQVBTRS52c2NvZGUtY2RzJyxcbiAgICAgICAgICAgICAgJ1NBUE9TUy5hcHAtc3R1ZGlvLXRvb2xraXQnLFxuICAgICAgICAgICAgICAnU0FQT1NTLmFwcC1zdHVkaW8tcmVtb3RlLWFjY2VzcycsXG4gICAgICAgICAgICAgICdTQVBPUy55ZW9tYW4tdWknLFxuXG4gICAgICAgICAgICAgIC8vIERvY2tlclxuICAgICAgICAgICAgICAnbXMtdnNjb2RlLXJlbW90ZS5yZW1vdGUtY29udGFpbmVycycsXG5cbiAgICAgICAgICAgICAgLy8gLmVudlxuICAgICAgICAgICAgICAnbWlrZXN0ZWFkLmRvdGVudicsXG5cbiAgICAgICAgICAgICAgLy8gVUk1XG4gICAgICAgICAgICAgICdTQVBTRS5zYXAtdXgtZmlvcmktdG9vbHMtZXh0ZW5zaW9uLXBhY2snLFxuXG4gICAgICAgICAgICAgIC8vIFNRTGl0ZVxuICAgICAgICAgICAgICAncXd0ZWwuc3FsaXRlLXZpZXdlcicsXG5cbiAgICAgICAgICAgICAgLy8gQ1NWXG4gICAgICAgICAgICAgICdqYW5pc2RkLnZzY29kZS1lZGl0LWNzdicsXG4gICAgICAgICAgICAgICdtZWNoYXRyb25lci5yYWluYm93LWNzdicsXG5cbiAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdFxuICAgICAgICAgICAgICAndXNlcm5hbWVody5lcnJvcmxlbnMnLFxuICAgICAgICAgICAgICAnZGJhZXVtZXIudnNjb2RlLWVzbGludCcsXG4gICAgICAgICAgICAgICdvZGVyd2F0LmluZGVudC1yYWluYm93JyxcbiAgICAgICAgICAgICAgJ2VzYmVucC5wcmV0dGllci12c2NvZGUnLFxuICAgICAgICAgICAgICAnWW9hdkJscy5wcmV0dHktdHMtZXJyb3JzJyxcbiAgICAgICAgICAgICAgJ3N0cmVldHNpZGVzb2Z0d2FyZS5jb2RlLXNwZWxsLWNoZWNrZXInLFxuICAgICAgICAgICAgICAnd2F5b3UudnNjb2RlLXRvZG8taGlnaGxpZ2h0JyxcbiAgICAgICAgICAgICAgJ21pa2UtY28uaW1wb3J0LXNvcnRlcicsXG4gICAgICAgICAgICAgICdWaXN1YWxTdHVkaW9FeHB0VGVhbS52c2NvZGVpbnRlbGxpY29kZScsXG5cbiAgICAgICAgICAgICAgLy8gWE1MICYgWUFNTCdcbiAgICAgICAgICAgICAgJ3JlZGhhdC52c2NvZGUteWFtbCcsXG4gICAgICAgICAgICAgICdEb3RKb3NoSm9obnNvbi54bWwnLFxuICAgICAgICAgICAgICAnU0FQT1NTLnhtbC10b29sa2l0JyxcblxuICAgICAgICAgICAgICAvLyBHaXRcbiAgICAgICAgICAgICAgJ3dhZGVyeWFuLmdpdGJsYW1lJyxcbiAgICAgICAgICAgICAgJ2RvbmpheWFtYW5uZS5naXRoaXN0b3J5JyxcbiAgICAgICAgICAgICAgJ0dpdEh1Yi52c2NvZGUtcHVsbC1yZXF1ZXN0LWdpdGh1YicsXG5cbiAgICAgICAgICAgICAgLy8gUkVBRE1FXG4gICAgICAgICAgICAgICd5emhhbmcubWFya2Rvd24tYWxsLWluLW9uZScsXG4gICAgICAgICAgICAgICdEYXZpZEFuc29uLnZzY29kZS1tYXJrZG93bmxpbnQnLFxuICAgICAgICAgICAgICAnYmllcm5lci5qc2RvYy1tYXJrZG93bi1oaWdobGlnaHRpbmcnLFxuXG4gICAgICAgICAgICAgIC8vIE90aGVyc1xuICAgICAgICAgICAgICAnVmlzdWFsU3R1ZGlvRXhwdFRlYW0udnNjb2RlaW50ZWxsaWNvZGUnLFxuICAgICAgICAgICAgICAnY2hyaXN0aWFuLWtvaGxlci5wYXRoLWludGVsbGlzZW5zZScsXG4gICAgICAgICAgICAgICdBeWt1dFNhcmFjLmpzb25jcmFjay12c2NvZGUnLFxuICAgICAgICAgICAgICAndGFtYXNmZS5ldmVuLWJldHRlci10b21sJyxcbiAgICAgICAgICAgICAgJ2dpdGh1Yi5jb3BpbG90JyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAnLmRldmNvbnRhaW5lci9zY3JpcHRzL2luc3RhbGwtZGVwZW5kZW5jaWVzLnNoJzogW1xuICAgICAgICAnIyEvYmluL2Jhc2gnLFxuICAgICAgICAnc2V0IC1lICMgRXhpdCBvbiBlcnJvcicsXG4gICAgICAgICdzZXQgLXggIyBQcmludCBjb21tYW5kcyBmb3IgZGVidWdnaW5nJyxcbiAgICAgICAgJycsXG4gICAgICAgICcjIEluc3RhbGwgZ2xvYmFsIG5wbSBwYWNrYWdlcycsXG4gICAgICAgICducG0gaW5zdGFsbCAtZyBtYnQgQHNhcC9jZHMgQHNhcC9jZHMtZGsgdHMtbm9kZScsXG4gICAgICAgICcnLFxuICAgICAgICAnIyBJbnN0YWxsIHByb2plY3QgZGVwZW5kZW5jaWVzJyxcbiAgICAgICAgJ25wbSBpbnN0YWxsJyxcbiAgICAgICAgJycsXG4gICAgICAgICcjIEdlbmVyYXRlIENEUyB0eXBpbmdzJyxcbiAgICAgICAgJ25weCBAY2FwLWpzL2Nkcy10eXBlciBcIipcIiAtLW91dHB1dERpcmVjdG9yeSBAY2RzLW1vZGVscycsXG4gICAgICAgICcnLFxuICAgICAgICAnIyBBZGQgQ2xvdWQgRm91bmRyeSBDTEkgcmVwb3NpdG9yeScsXG4gICAgICAgICd3Z2V0IC1xIC1PIC0gaHR0cHM6Ly9wYWNrYWdlcy5jbG91ZGZvdW5kcnkub3JnL2RlYmlhbi9jbGkuY2xvdWRmb3VuZHJ5Lm9yZy5rZXkgfCBzdWRvIGFwdC1rZXkgYWRkIC0nLFxuICAgICAgICAnZWNobyBcImRlYiBodHRwczovL3BhY2thZ2VzLmNsb3VkZm91bmRyeS5vcmcvZGViaWFuIHN0YWJsZSBtYWluXCIgfCBzdWRvIHRlZSAvZXRjL2FwdC9zb3VyY2VzLmxpc3QuZC9jbG91ZGZvdW5kcnktY2xpLmxpc3QnLFxuICAgICAgICAnJyxcbiAgICAgICAgJyMgVXBkYXRlIHBhY2thZ2UgbGlzdHMgYW5kIGluc3RhbGwgcmVxdWlyZWQgcGFja2FnZXMnLFxuICAgICAgICAnc3VkbyBhcHQtZ2V0IHVwZGF0ZScsXG4gICAgICAgICdzdWRvIGFwdC1nZXQgaW5zdGFsbCAteSB4ZGctdXRpbHMganEgY2Y4LWNsaScsXG4gICAgICAgICcnLFxuICAgICAgICAnIyBJbnN0YWxsIENsb3VkIEZvdW5kcnkgTXVsdGlBcHBzIFBsdWdpbicsXG4gICAgICAgICdjZiBpbnN0YWxsLXBsdWdpbiAtZiBodHRwczovL2dpdGh1Yi5jb20vY2xvdWRmb3VuZHJ5LWluY3ViYXRvci9tdWx0aWFwcHMtY2xpLXBsdWdpbi9yZWxlYXNlcy9sYXRlc3QvZG93bmxvYWQvbXVsdGlhcHBzLXBsdWdpbi5saW51eDY0JyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19
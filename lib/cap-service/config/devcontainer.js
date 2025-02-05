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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2Y29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NhcC1zZXJ2aWNlL2NvbmZpZy9kZXZjb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQ0FBb0Q7QUFHcEQ7O0dBRUc7QUFDSCxNQUFhLDRCQUE2QixTQUFRLDZCQUFzQjtJQUN0RSxJQUF1QixpQkFBaUI7UUFDdEMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsSUFBdUIsVUFBVTtRQUMvQixPQUFPO1lBQ0wsb0JBQW9CLEVBQUU7Z0JBQ3BCLEtBQUssRUFBRSwrREFBK0Q7Z0JBQ3RFLGlCQUFpQixFQUFFOzs7Ozs7Ozs7U0FTbEI7Z0JBQ0QsUUFBUSxFQUFFO29CQUNSLHFEQUFxRCxFQUFFLFFBQVE7b0JBQy9ELDJDQUEyQyxFQUFFLFFBQVE7aUJBQ3REO2dCQUNELGNBQWMsRUFBRTtvQkFDZCxNQUFNLEVBQUU7d0JBQ04sVUFBVSxFQUFFOzRCQUNWLGtCQUFrQjs0QkFDbEIsOEJBQThCOzRCQUU5QixPQUFPOzRCQUNQLG1CQUFtQjs0QkFFbkIsU0FBUzs0QkFDVCw0QkFBNEI7NEJBQzVCLHVCQUF1Qjs0QkFDdkIsNkJBQTZCOzRCQUU3QixNQUFNOzRCQUNOLG1DQUFtQzs0QkFDbkMsdUJBQXVCOzRCQUV2QixRQUFROzRCQUNSLDJCQUEyQjs0QkFDM0IsNkJBQTZCOzRCQUM3Qiw0QkFBNEI7NEJBRTVCLFVBQVU7NEJBQ1Ysa0JBQWtCOzRCQUNsQiwyQkFBMkI7NEJBQzNCLGlDQUFpQzs0QkFDakMsaUJBQWlCOzRCQUVqQixTQUFTOzRCQUNULG9DQUFvQzs0QkFFcEMsT0FBTzs0QkFDUCxrQkFBa0I7NEJBRWxCLE1BQU07NEJBQ04seUNBQXlDOzRCQUV6QyxTQUFTOzRCQUNULHFCQUFxQjs0QkFFckIsTUFBTTs0QkFDTix5QkFBeUI7NEJBQ3pCLHlCQUF5Qjs0QkFFekIsYUFBYTs0QkFDYixzQkFBc0I7NEJBQ3RCLHdCQUF3Qjs0QkFDeEIsd0JBQXdCOzRCQUN4Qix3QkFBd0I7NEJBQ3hCLDBCQUEwQjs0QkFDMUIsdUNBQXVDOzRCQUN2Qyw2QkFBNkI7NEJBQzdCLHVCQUF1Qjs0QkFDdkIsd0NBQXdDOzRCQUV4QyxjQUFjOzRCQUNkLG9CQUFvQjs0QkFDcEIsb0JBQW9COzRCQUNwQixvQkFBb0I7NEJBRXBCLE1BQU07NEJBQ04sbUJBQW1COzRCQUNuQix5QkFBeUI7NEJBQ3pCLG1DQUFtQzs0QkFFbkMsU0FBUzs0QkFDVCw0QkFBNEI7NEJBQzVCLGdDQUFnQzs0QkFDaEMscUNBQXFDOzRCQUVyQyxTQUFTOzRCQUNULHdDQUF3Qzs0QkFDeEMsb0NBQW9DOzRCQUNwQyw2QkFBNkI7NEJBQzdCLDBCQUEwQjs0QkFDMUIsZ0JBQWdCO3lCQUNqQjtxQkFDRjtpQkFDRjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0FBekdILG9FQTBHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERldkNvbnRhaW5lckNvbmZpZ0Jhc2UgfSBmcm9tICcuLi8uLi9iYXNlJztcbmltcG9ydCB7IENvbmZpZ0ZpbGUgfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJztcblxuLyoqXG4gKiBJbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IERldkNvbnRhaW5lciBjb25maWd1cmF0aW9uIGZvciB0aGUgQ2FwU2VydmljZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgRGV2Q29udGFpbmVyQ29uZmlnQ2FwU2VydmljZSBleHRlbmRzIERldkNvbnRhaW5lckNvbmZpZ0Jhc2Uge1xuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxTY3JpcHRzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgY29uZmlnRmlsZSgpOiBDb25maWdGaWxlIHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5kZXZjb250YWluZXIuanNvbic6IHtcbiAgICAgICAgaW1hZ2U6ICdtY3IubWljcm9zb2Z0LmNvbS9kZXZjb250YWluZXJzL3R5cGVzY3JpcHQtbm9kZToxLTIwLWJ1bGxzZXllJyxcbiAgICAgICAgcG9zdENyZWF0ZUNvbW1hbmQ6IGBcbiAgICAgICAgICBzdWRvIGFwdC1nZXQgdXBkYXRlICYmIFxcXG4gICAgICAgICAgc3VkbyBhcHQtZ2V0IGluc3RhbGwgLXkgeGRnLXV0aWxzICYmIFxcXG4gICAgICAgICAgbnBtIGluc3RhbGwgLWcgQHNhcC9jZHMtZGsgdHlwZXNjcmlwdCB0cy1ub2RlIEB1aTUvY2xpIGdpdC1jbGlmZiAmJiBcXFxuICAgICAgICAgIG5wbSBpbnN0YWxsICYmIFxcXG4gICAgICAgICAgd2dldCAtcSAtTyAtIGh0dHBzOi8vcGFja2FnZXMuY2xvdWRmb3VuZHJ5Lm9yZy9kZWJpYW4vY2xpLmNsb3VkZm91bmRyeS5vcmcua2V5IHwgc3VkbyBhcHQta2V5IGFkZCAtICYmIFxcXG4gICAgICAgICAgZWNobyBcImRlYiBodHRwczovL3BhY2thZ2VzLmNsb3VkZm91bmRyeS5vcmcvZGViaWFuIHN0YWJsZSBtYWluXCIgfCBzdWRvIHRlZSAvZXRjL2FwdC9zb3VyY2VzLmxpc3QuZC9jbG91ZGZvdW5kcnktY2xpLmxpc3QgJiYgXFxcbiAgICAgICAgICBzdWRvIGFwdC1nZXQgdXBkYXRlICYmIFxcXG4gICAgICAgICAgc3VkbyBhcHQtZ2V0IGluc3RhbGwgY2Y4LWNsaVxuICAgICAgICBgLFxuICAgICAgICBmZWF0dXJlczoge1xuICAgICAgICAgICdnaGNyLmlvL2RldmNvbnRhaW5lcnMtY29udHJpYi9mZWF0dXJlcy9jdXJsLWFwdC1nZXQnOiAnbGF0ZXN0JyxcbiAgICAgICAgICAnZ2hjci5pby9kZXZjb250YWluZXJzL2ZlYXR1cmVzL2dpdGh1Yi1jbGknOiAnbGF0ZXN0JyxcbiAgICAgICAgfSxcbiAgICAgICAgY3VzdG9taXphdGlvbnM6IHtcbiAgICAgICAgICB2c2NvZGU6IHtcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IFtcbiAgICAgICAgICAgICAgJ09ydGEudnNjb2RlLWplc3QnLFxuICAgICAgICAgICAgICAnZmlyc3R0cmlzLnZzY29kZS1qZXN0LXJ1bm5lcicsXG5cbiAgICAgICAgICAgICAgLy8gUmVzdFxuICAgICAgICAgICAgICAnaHVtYW8ucmVzdC1jbGllbnQnLFxuXG4gICAgICAgICAgICAgIC8vIFZzQ29kZVxuICAgICAgICAgICAgICAnYWFyb24tYm9uZC5iZXR0ZXItY29tbWVudHMnLFxuICAgICAgICAgICAgICAnYWxlZnJhZ25hbmkuQm9va21hcmtzJyxcbiAgICAgICAgICAgICAgJ2FsZWZyYWduYW5pLnByb2plY3QtbWFuYWdlcicsXG5cbiAgICAgICAgICAgICAgLy8gTlBNXG4gICAgICAgICAgICAgICdjaHJpc3RpYW4ta29obGVyLm5wbS1pbnRlbGxpc2Vuc2UnLFxuICAgICAgICAgICAgICAnbXNrZWx0b24ubnBtLW91dGRhdGVkJyxcblxuICAgICAgICAgICAgICAvLyBUaGVtZVxuICAgICAgICAgICAgICAnUEtpZWYubWF0ZXJpYWwtaWNvbi10aGVtZScsXG4gICAgICAgICAgICAgICd6aHVhbmd0b25nZmEubWF0ZXJpYWwtdGhlbWUnLFxuICAgICAgICAgICAgICAnR2l0SHViLmdpdGh1Yi12c2NvZGUtdGhlbWUnLFxuXG4gICAgICAgICAgICAgIC8vIFNBUCBDQVBcbiAgICAgICAgICAgICAgJ1NBUFNFLnZzY29kZS1jZHMnLFxuICAgICAgICAgICAgICAnU0FQT1NTLmFwcC1zdHVkaW8tdG9vbGtpdCcsXG4gICAgICAgICAgICAgICdTQVBPU1MuYXBwLXN0dWRpby1yZW1vdGUtYWNjZXNzJyxcbiAgICAgICAgICAgICAgJ1NBUE9TLnllb21hbi11aScsXG5cbiAgICAgICAgICAgICAgLy8gRG9ja2VyXG4gICAgICAgICAgICAgICdtcy12c2NvZGUtcmVtb3RlLnJlbW90ZS1jb250YWluZXJzJyxcblxuICAgICAgICAgICAgICAvLyAuZW52XG4gICAgICAgICAgICAgICdtaWtlc3RlYWQuZG90ZW52JyxcblxuICAgICAgICAgICAgICAvLyBVSTVcbiAgICAgICAgICAgICAgJ1NBUFNFLnNhcC11eC1maW9yaS10b29scy1leHRlbnNpb24tcGFjaycsXG5cbiAgICAgICAgICAgICAgLy8gU1FMaXRlXG4gICAgICAgICAgICAgICdxd3RlbC5zcWxpdGUtdmlld2VyJyxcblxuICAgICAgICAgICAgICAvLyBDU1ZcbiAgICAgICAgICAgICAgJ2phbmlzZGQudnNjb2RlLWVkaXQtY3N2JyxcbiAgICAgICAgICAgICAgJ21lY2hhdHJvbmVyLnJhaW5ib3ctY3N2JyxcblxuICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0XG4gICAgICAgICAgICAgICd1c2VybmFtZWh3LmVycm9ybGVucycsXG4gICAgICAgICAgICAgICdkYmFldW1lci52c2NvZGUtZXNsaW50JyxcbiAgICAgICAgICAgICAgJ29kZXJ3YXQuaW5kZW50LXJhaW5ib3cnLFxuICAgICAgICAgICAgICAnZXNiZW5wLnByZXR0aWVyLXZzY29kZScsXG4gICAgICAgICAgICAgICdZb2F2QmxzLnByZXR0eS10cy1lcnJvcnMnLFxuICAgICAgICAgICAgICAnc3RyZWV0c2lkZXNvZnR3YXJlLmNvZGUtc3BlbGwtY2hlY2tlcicsXG4gICAgICAgICAgICAgICd3YXlvdS52c2NvZGUtdG9kby1oaWdobGlnaHQnLFxuICAgICAgICAgICAgICAnbWlrZS1jby5pbXBvcnQtc29ydGVyJyxcbiAgICAgICAgICAgICAgJ1Zpc3VhbFN0dWRpb0V4cHRUZWFtLnZzY29kZWludGVsbGljb2RlJyxcblxuICAgICAgICAgICAgICAvLyBYTUwgJiBZQU1MJ1xuICAgICAgICAgICAgICAncmVkaGF0LnZzY29kZS15YW1sJyxcbiAgICAgICAgICAgICAgJ0RvdEpvc2hKb2huc29uLnhtbCcsXG4gICAgICAgICAgICAgICdTQVBPU1MueG1sLXRvb2xraXQnLFxuXG4gICAgICAgICAgICAgIC8vIEdpdFxuICAgICAgICAgICAgICAnd2FkZXJ5YW4uZ2l0YmxhbWUnLFxuICAgICAgICAgICAgICAnZG9uamF5YW1hbm5lLmdpdGhpc3RvcnknLFxuICAgICAgICAgICAgICAnR2l0SHViLnZzY29kZS1wdWxsLXJlcXVlc3QtZ2l0aHViJyxcblxuICAgICAgICAgICAgICAvLyBSRUFETUVcbiAgICAgICAgICAgICAgJ3l6aGFuZy5tYXJrZG93bi1hbGwtaW4tb25lJyxcbiAgICAgICAgICAgICAgJ0RhdmlkQW5zb24udnNjb2RlLW1hcmtkb3dubGludCcsXG4gICAgICAgICAgICAgICdiaWVybmVyLmpzZG9jLW1hcmtkb3duLWhpZ2hsaWdodGluZycsXG5cbiAgICAgICAgICAgICAgLy8gT3RoZXJzXG4gICAgICAgICAgICAgICdWaXN1YWxTdHVkaW9FeHB0VGVhbS52c2NvZGVpbnRlbGxpY29kZScsXG4gICAgICAgICAgICAgICdjaHJpc3RpYW4ta29obGVyLnBhdGgtaW50ZWxsaXNlbnNlJyxcbiAgICAgICAgICAgICAgJ0F5a3V0U2FyYWMuanNvbmNyYWNrLXZzY29kZScsXG4gICAgICAgICAgICAgICd0YW1hc2ZlLmV2ZW4tYmV0dGVyLXRvbWwnLFxuICAgICAgICAgICAgICAnZ2l0aHViLmNvcGlsb3QnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG4iXX0=
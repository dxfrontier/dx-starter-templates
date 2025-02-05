"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevContainerConfigCapService = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2Y29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NhcC1zZXJ2aWNlL2NvbmZpZy9kZXZjb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQW9EO0FBR3BEOztHQUVHO0FBQ0gsTUFBYSw0QkFBNkIsU0FBUSw2QkFBc0I7SUFDdEUsSUFBdUIsaUJBQWlCO1FBQ3RDLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVELElBQXVCLFVBQVU7UUFDL0IsT0FBTztZQUNMLG9CQUFvQixFQUFFO2dCQUNwQixLQUFLLEVBQUUsK0RBQStEO2dCQUN0RSxpQkFBaUIsRUFBRTs7Ozs7Ozs7O1NBU2xCO2dCQUNELFFBQVEsRUFBRTtvQkFDUixxREFBcUQsRUFBRSxRQUFRO29CQUMvRCwyQ0FBMkMsRUFBRSxRQUFRO2lCQUN0RDtnQkFDRCxjQUFjLEVBQUU7b0JBQ2QsTUFBTSxFQUFFO3dCQUNOLFVBQVUsRUFBRTs0QkFDVixrQkFBa0I7NEJBQ2xCLDhCQUE4Qjs0QkFFOUIsT0FBTzs0QkFDUCxtQkFBbUI7NEJBRW5CLFNBQVM7NEJBQ1QsNEJBQTRCOzRCQUM1Qix1QkFBdUI7NEJBQ3ZCLDZCQUE2Qjs0QkFFN0IsTUFBTTs0QkFDTixtQ0FBbUM7NEJBQ25DLHVCQUF1Qjs0QkFFdkIsUUFBUTs0QkFDUiwyQkFBMkI7NEJBQzNCLDZCQUE2Qjs0QkFDN0IsNEJBQTRCOzRCQUU1QixVQUFVOzRCQUNWLGtCQUFrQjs0QkFDbEIsMkJBQTJCOzRCQUMzQixpQ0FBaUM7NEJBQ2pDLGlCQUFpQjs0QkFFakIsU0FBUzs0QkFDVCxvQ0FBb0M7NEJBRXBDLE9BQU87NEJBQ1Asa0JBQWtCOzRCQUVsQixNQUFNOzRCQUNOLHlDQUF5Qzs0QkFFekMsU0FBUzs0QkFDVCxxQkFBcUI7NEJBRXJCLE1BQU07NEJBQ04seUJBQXlCOzRCQUN6Qix5QkFBeUI7NEJBRXpCLGFBQWE7NEJBQ2Isc0JBQXNCOzRCQUN0Qix3QkFBd0I7NEJBQ3hCLHdCQUF3Qjs0QkFDeEIsd0JBQXdCOzRCQUN4QiwwQkFBMEI7NEJBQzFCLHVDQUF1Qzs0QkFDdkMsNkJBQTZCOzRCQUM3Qix1QkFBdUI7NEJBQ3ZCLHdDQUF3Qzs0QkFFeEMsY0FBYzs0QkFDZCxvQkFBb0I7NEJBQ3BCLG9CQUFvQjs0QkFDcEIsb0JBQW9COzRCQUVwQixNQUFNOzRCQUNOLG1CQUFtQjs0QkFDbkIseUJBQXlCOzRCQUN6QixtQ0FBbUM7NEJBRW5DLFNBQVM7NEJBQ1QsNEJBQTRCOzRCQUM1QixnQ0FBZ0M7NEJBQ2hDLHFDQUFxQzs0QkFFckMsU0FBUzs0QkFDVCx3Q0FBd0M7NEJBQ3hDLG9DQUFvQzs0QkFDcEMsNkJBQTZCOzRCQUM3QiwwQkFBMEI7NEJBQzFCLGdCQUFnQjt5QkFDakI7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUExR0Qsb0VBMEdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2Q29udGFpbmVyQ29uZmlnQmFzZSB9IGZyb20gJy4uLy4uL2Jhc2UnO1xuaW1wb3J0IHsgQ29uZmlnRmlsZSB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnO1xuXG4vKipcbiAqIEltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgRGV2Q29udGFpbmVyIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBDYXBTZXJ2aWNlIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBEZXZDb250YWluZXJDb25maWdDYXBTZXJ2aWNlIGV4dGVuZHMgRGV2Q29udGFpbmVyQ29uZmlnQmFzZSB7XG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbFNjcmlwdHMoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBjb25maWdGaWxlKCk6IENvbmZpZ0ZpbGUge1xuICAgIHJldHVybiB7XG4gICAgICAnLmRldmNvbnRhaW5lci5qc29uJzoge1xuICAgICAgICBpbWFnZTogJ21jci5taWNyb3NvZnQuY29tL2RldmNvbnRhaW5lcnMvdHlwZXNjcmlwdC1ub2RlOjEtMjAtYnVsbHNleWUnLFxuICAgICAgICBwb3N0Q3JlYXRlQ29tbWFuZDogYFxuICAgICAgICAgIHN1ZG8gYXB0LWdldCB1cGRhdGUgJiYgXFxcbiAgICAgICAgICBzdWRvIGFwdC1nZXQgaW5zdGFsbCAteSB4ZGctdXRpbHMgJiYgXFxcbiAgICAgICAgICBucG0gaW5zdGFsbCAtZyBAc2FwL2Nkcy1kayB0eXBlc2NyaXB0IHRzLW5vZGUgQHVpNS9jbGkgZ2l0LWNsaWZmICYmIFxcXG4gICAgICAgICAgbnBtIGluc3RhbGwgJiYgXFxcbiAgICAgICAgICB3Z2V0IC1xIC1PIC0gaHR0cHM6Ly9wYWNrYWdlcy5jbG91ZGZvdW5kcnkub3JnL2RlYmlhbi9jbGkuY2xvdWRmb3VuZHJ5Lm9yZy5rZXkgfCBzdWRvIGFwdC1rZXkgYWRkIC0gJiYgXFxcbiAgICAgICAgICBlY2hvIFwiZGViIGh0dHBzOi8vcGFja2FnZXMuY2xvdWRmb3VuZHJ5Lm9yZy9kZWJpYW4gc3RhYmxlIG1haW5cIiB8IHN1ZG8gdGVlIC9ldGMvYXB0L3NvdXJjZXMubGlzdC5kL2Nsb3VkZm91bmRyeS1jbGkubGlzdCAmJiBcXFxuICAgICAgICAgIHN1ZG8gYXB0LWdldCB1cGRhdGUgJiYgXFxcbiAgICAgICAgICBzdWRvIGFwdC1nZXQgaW5zdGFsbCBjZjgtY2xpXG4gICAgICAgIGAsXG4gICAgICAgIGZlYXR1cmVzOiB7XG4gICAgICAgICAgJ2doY3IuaW8vZGV2Y29udGFpbmVycy1jb250cmliL2ZlYXR1cmVzL2N1cmwtYXB0LWdldCc6ICdsYXRlc3QnLFxuICAgICAgICAgICdnaGNyLmlvL2RldmNvbnRhaW5lcnMvZmVhdHVyZXMvZ2l0aHViLWNsaSc6ICdsYXRlc3QnLFxuICAgICAgICB9LFxuICAgICAgICBjdXN0b21pemF0aW9uczoge1xuICAgICAgICAgIHZzY29kZToge1xuICAgICAgICAgICAgZXh0ZW5zaW9uczogW1xuICAgICAgICAgICAgICAnT3J0YS52c2NvZGUtamVzdCcsXG4gICAgICAgICAgICAgICdmaXJzdHRyaXMudnNjb2RlLWplc3QtcnVubmVyJyxcblxuICAgICAgICAgICAgICAvLyBSZXN0XG4gICAgICAgICAgICAgICdodW1hby5yZXN0LWNsaWVudCcsXG5cbiAgICAgICAgICAgICAgLy8gVnNDb2RlXG4gICAgICAgICAgICAgICdhYXJvbi1ib25kLmJldHRlci1jb21tZW50cycsXG4gICAgICAgICAgICAgICdhbGVmcmFnbmFuaS5Cb29rbWFya3MnLFxuICAgICAgICAgICAgICAnYWxlZnJhZ25hbmkucHJvamVjdC1tYW5hZ2VyJyxcblxuICAgICAgICAgICAgICAvLyBOUE1cbiAgICAgICAgICAgICAgJ2NocmlzdGlhbi1rb2hsZXIubnBtLWludGVsbGlzZW5zZScsXG4gICAgICAgICAgICAgICdtc2tlbHRvbi5ucG0tb3V0ZGF0ZWQnLFxuXG4gICAgICAgICAgICAgIC8vIFRoZW1lXG4gICAgICAgICAgICAgICdQS2llZi5tYXRlcmlhbC1pY29uLXRoZW1lJyxcbiAgICAgICAgICAgICAgJ3podWFuZ3RvbmdmYS5tYXRlcmlhbC10aGVtZScsXG4gICAgICAgICAgICAgICdHaXRIdWIuZ2l0aHViLXZzY29kZS10aGVtZScsXG5cbiAgICAgICAgICAgICAgLy8gU0FQIENBUFxuICAgICAgICAgICAgICAnU0FQU0UudnNjb2RlLWNkcycsXG4gICAgICAgICAgICAgICdTQVBPU1MuYXBwLXN0dWRpby10b29sa2l0JyxcbiAgICAgICAgICAgICAgJ1NBUE9TUy5hcHAtc3R1ZGlvLXJlbW90ZS1hY2Nlc3MnLFxuICAgICAgICAgICAgICAnU0FQT1MueWVvbWFuLXVpJyxcblxuICAgICAgICAgICAgICAvLyBEb2NrZXJcbiAgICAgICAgICAgICAgJ21zLXZzY29kZS1yZW1vdGUucmVtb3RlLWNvbnRhaW5lcnMnLFxuXG4gICAgICAgICAgICAgIC8vIC5lbnZcbiAgICAgICAgICAgICAgJ21pa2VzdGVhZC5kb3RlbnYnLFxuXG4gICAgICAgICAgICAgIC8vIFVJNVxuICAgICAgICAgICAgICAnU0FQU0Uuc2FwLXV4LWZpb3JpLXRvb2xzLWV4dGVuc2lvbi1wYWNrJyxcblxuICAgICAgICAgICAgICAvLyBTUUxpdGVcbiAgICAgICAgICAgICAgJ3F3dGVsLnNxbGl0ZS12aWV3ZXInLFxuXG4gICAgICAgICAgICAgIC8vIENTVlxuICAgICAgICAgICAgICAnamFuaXNkZC52c2NvZGUtZWRpdC1jc3YnLFxuICAgICAgICAgICAgICAnbWVjaGF0cm9uZXIucmFpbmJvdy1jc3YnLFxuXG4gICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHRcbiAgICAgICAgICAgICAgJ3VzZXJuYW1laHcuZXJyb3JsZW5zJyxcbiAgICAgICAgICAgICAgJ2RiYWV1bWVyLnZzY29kZS1lc2xpbnQnLFxuICAgICAgICAgICAgICAnb2RlcndhdC5pbmRlbnQtcmFpbmJvdycsXG4gICAgICAgICAgICAgICdlc2JlbnAucHJldHRpZXItdnNjb2RlJyxcbiAgICAgICAgICAgICAgJ1lvYXZCbHMucHJldHR5LXRzLWVycm9ycycsXG4gICAgICAgICAgICAgICdzdHJlZXRzaWRlc29mdHdhcmUuY29kZS1zcGVsbC1jaGVja2VyJyxcbiAgICAgICAgICAgICAgJ3dheW91LnZzY29kZS10b2RvLWhpZ2hsaWdodCcsXG4gICAgICAgICAgICAgICdtaWtlLWNvLmltcG9ydC1zb3J0ZXInLFxuICAgICAgICAgICAgICAnVmlzdWFsU3R1ZGlvRXhwdFRlYW0udnNjb2RlaW50ZWxsaWNvZGUnLFxuXG4gICAgICAgICAgICAgIC8vIFhNTCAmIFlBTUwnXG4gICAgICAgICAgICAgICdyZWRoYXQudnNjb2RlLXlhbWwnLFxuICAgICAgICAgICAgICAnRG90Sm9zaEpvaG5zb24ueG1sJyxcbiAgICAgICAgICAgICAgJ1NBUE9TUy54bWwtdG9vbGtpdCcsXG5cbiAgICAgICAgICAgICAgLy8gR2l0XG4gICAgICAgICAgICAgICd3YWRlcnlhbi5naXRibGFtZScsXG4gICAgICAgICAgICAgICdkb25qYXlhbWFubmUuZ2l0aGlzdG9yeScsXG4gICAgICAgICAgICAgICdHaXRIdWIudnNjb2RlLXB1bGwtcmVxdWVzdC1naXRodWInLFxuXG4gICAgICAgICAgICAgIC8vIFJFQURNRVxuICAgICAgICAgICAgICAneXpoYW5nLm1hcmtkb3duLWFsbC1pbi1vbmUnLFxuICAgICAgICAgICAgICAnRGF2aWRBbnNvbi52c2NvZGUtbWFya2Rvd25saW50JyxcbiAgICAgICAgICAgICAgJ2JpZXJuZXIuanNkb2MtbWFya2Rvd24taGlnaGxpZ2h0aW5nJyxcblxuICAgICAgICAgICAgICAvLyBPdGhlcnNcbiAgICAgICAgICAgICAgJ1Zpc3VhbFN0dWRpb0V4cHRUZWFtLnZzY29kZWludGVsbGljb2RlJyxcbiAgICAgICAgICAgICAgJ2NocmlzdGlhbi1rb2hsZXIucGF0aC1pbnRlbGxpc2Vuc2UnLFxuICAgICAgICAgICAgICAnQXlrdXRTYXJhYy5qc29uY3JhY2stdnNjb2RlJyxcbiAgICAgICAgICAgICAgJ3RhbWFzZmUuZXZlbi1iZXR0ZXItdG9tbCcsXG4gICAgICAgICAgICAgICdnaXRodWIuY29waWxvdCcsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
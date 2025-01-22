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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2Y29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NhcC1zZXJ2aWNlL2RldmNvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtDQUFpRDtBQUdqRDs7R0FFRztBQUNILE1BQWEsNEJBQTZCLFNBQVEsNkJBQXNCO0lBQ3RFLElBQXVCLGlCQUFpQjtRQUN0QyxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCxJQUF1QixVQUFVO1FBQy9CLE9BQU87WUFDTCxvQkFBb0IsRUFBRTtnQkFDcEIsS0FBSyxFQUFFLCtEQUErRDtnQkFDdEUsaUJBQWlCLEVBQUU7Ozs7Ozs7OztTQVNsQjtnQkFDRCxRQUFRLEVBQUU7b0JBQ1IscURBQXFELEVBQUUsUUFBUTtvQkFDL0QsMkNBQTJDLEVBQUUsUUFBUTtpQkFDdEQ7Z0JBQ0QsY0FBYyxFQUFFO29CQUNkLE1BQU0sRUFBRTt3QkFDTixVQUFVLEVBQUU7NEJBQ1Ysa0JBQWtCOzRCQUNsQiw4QkFBOEI7NEJBRTlCLE9BQU87NEJBQ1AsbUJBQW1COzRCQUVuQixTQUFTOzRCQUNULDRCQUE0Qjs0QkFDNUIsdUJBQXVCOzRCQUN2Qiw2QkFBNkI7NEJBRTdCLE1BQU07NEJBQ04sbUNBQW1DOzRCQUNuQyx1QkFBdUI7NEJBRXZCLFFBQVE7NEJBQ1IsMkJBQTJCOzRCQUMzQiw2QkFBNkI7NEJBQzdCLDRCQUE0Qjs0QkFFNUIsVUFBVTs0QkFDVixrQkFBa0I7NEJBQ2xCLDJCQUEyQjs0QkFDM0IsaUNBQWlDOzRCQUNqQyxpQkFBaUI7NEJBRWpCLFNBQVM7NEJBQ1Qsb0NBQW9DOzRCQUVwQyxPQUFPOzRCQUNQLGtCQUFrQjs0QkFFbEIsTUFBTTs0QkFDTix5Q0FBeUM7NEJBRXpDLFNBQVM7NEJBQ1QscUJBQXFCOzRCQUVyQixNQUFNOzRCQUNOLHlCQUF5Qjs0QkFDekIseUJBQXlCOzRCQUV6QixhQUFhOzRCQUNiLHNCQUFzQjs0QkFDdEIsd0JBQXdCOzRCQUN4Qix3QkFBd0I7NEJBQ3hCLHdCQUF3Qjs0QkFDeEIsMEJBQTBCOzRCQUMxQix1Q0FBdUM7NEJBQ3ZDLDZCQUE2Qjs0QkFDN0IsdUJBQXVCOzRCQUN2Qix3Q0FBd0M7NEJBRXhDLGNBQWM7NEJBQ2Qsb0JBQW9COzRCQUNwQixvQkFBb0I7NEJBQ3BCLG9CQUFvQjs0QkFFcEIsTUFBTTs0QkFDTixtQkFBbUI7NEJBQ25CLHlCQUF5Qjs0QkFDekIsbUNBQW1DOzRCQUVuQyxTQUFTOzRCQUNULDRCQUE0Qjs0QkFDNUIsZ0NBQWdDOzRCQUNoQyxxQ0FBcUM7NEJBRXJDLFNBQVM7NEJBQ1Qsd0NBQXdDOzRCQUN4QyxvQ0FBb0M7NEJBQ3BDLDZCQUE2Qjs0QkFDN0IsMEJBQTBCOzRCQUMxQixnQkFBZ0I7eUJBQ2pCO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7QUF6R0gsb0VBMEdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2Q29udGFpbmVyQ29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UnO1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8qKlxuICogSW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBEZXZDb250YWluZXIgY29uZmlndXJhdGlvbiBmb3IgdGhlIENhcFNlcnZpY2UgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIERldkNvbnRhaW5lckNvbmZpZ0NhcFNlcnZpY2UgZXh0ZW5kcyBEZXZDb250YWluZXJDb25maWdCYXNlIHtcbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2NyaXB0cygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGNvbmZpZ0ZpbGUoKTogU2V0dGluZ3Mge1xuICAgIHJldHVybiB7XG4gICAgICAnLmRldmNvbnRhaW5lci5qc29uJzoge1xuICAgICAgICBpbWFnZTogJ21jci5taWNyb3NvZnQuY29tL2RldmNvbnRhaW5lcnMvdHlwZXNjcmlwdC1ub2RlOjEtMjAtYnVsbHNleWUnLFxuICAgICAgICBwb3N0Q3JlYXRlQ29tbWFuZDogYFxuICAgICAgICAgIHN1ZG8gYXB0LWdldCB1cGRhdGUgJiYgXFxcbiAgICAgICAgICBzdWRvIGFwdC1nZXQgaW5zdGFsbCAteSB4ZGctdXRpbHMgJiYgXFxcbiAgICAgICAgICBucG0gaW5zdGFsbCAtZyBAc2FwL2Nkcy1kayB0eXBlc2NyaXB0IHRzLW5vZGUgQHVpNS9jbGkgZ2l0LWNsaWZmICYmIFxcXG4gICAgICAgICAgbnBtIGluc3RhbGwgJiYgXFxcbiAgICAgICAgICB3Z2V0IC1xIC1PIC0gaHR0cHM6Ly9wYWNrYWdlcy5jbG91ZGZvdW5kcnkub3JnL2RlYmlhbi9jbGkuY2xvdWRmb3VuZHJ5Lm9yZy5rZXkgfCBzdWRvIGFwdC1rZXkgYWRkIC0gJiYgXFxcbiAgICAgICAgICBlY2hvIFwiZGViIGh0dHBzOi8vcGFja2FnZXMuY2xvdWRmb3VuZHJ5Lm9yZy9kZWJpYW4gc3RhYmxlIG1haW5cIiB8IHN1ZG8gdGVlIC9ldGMvYXB0L3NvdXJjZXMubGlzdC5kL2Nsb3VkZm91bmRyeS1jbGkubGlzdCAmJiBcXFxuICAgICAgICAgIHN1ZG8gYXB0LWdldCB1cGRhdGUgJiYgXFxcbiAgICAgICAgICBzdWRvIGFwdC1nZXQgaW5zdGFsbCBjZjgtY2xpXG4gICAgICAgIGAsXG4gICAgICAgIGZlYXR1cmVzOiB7XG4gICAgICAgICAgJ2doY3IuaW8vZGV2Y29udGFpbmVycy1jb250cmliL2ZlYXR1cmVzL2N1cmwtYXB0LWdldCc6ICdsYXRlc3QnLFxuICAgICAgICAgICdnaGNyLmlvL2RldmNvbnRhaW5lcnMvZmVhdHVyZXMvZ2l0aHViLWNsaSc6ICdsYXRlc3QnLFxuICAgICAgICB9LFxuICAgICAgICBjdXN0b21pemF0aW9uczoge1xuICAgICAgICAgIHZzY29kZToge1xuICAgICAgICAgICAgZXh0ZW5zaW9uczogW1xuICAgICAgICAgICAgICAnT3J0YS52c2NvZGUtamVzdCcsXG4gICAgICAgICAgICAgICdmaXJzdHRyaXMudnNjb2RlLWplc3QtcnVubmVyJyxcblxuICAgICAgICAgICAgICAvLyBSZXN0XG4gICAgICAgICAgICAgICdodW1hby5yZXN0LWNsaWVudCcsXG5cbiAgICAgICAgICAgICAgLy8gVnNDb2RlXG4gICAgICAgICAgICAgICdhYXJvbi1ib25kLmJldHRlci1jb21tZW50cycsXG4gICAgICAgICAgICAgICdhbGVmcmFnbmFuaS5Cb29rbWFya3MnLFxuICAgICAgICAgICAgICAnYWxlZnJhZ25hbmkucHJvamVjdC1tYW5hZ2VyJyxcblxuICAgICAgICAgICAgICAvLyBOUE1cbiAgICAgICAgICAgICAgJ2NocmlzdGlhbi1rb2hsZXIubnBtLWludGVsbGlzZW5zZScsXG4gICAgICAgICAgICAgICdtc2tlbHRvbi5ucG0tb3V0ZGF0ZWQnLFxuXG4gICAgICAgICAgICAgIC8vIFRoZW1lXG4gICAgICAgICAgICAgICdQS2llZi5tYXRlcmlhbC1pY29uLXRoZW1lJyxcbiAgICAgICAgICAgICAgJ3podWFuZ3RvbmdmYS5tYXRlcmlhbC10aGVtZScsXG4gICAgICAgICAgICAgICdHaXRIdWIuZ2l0aHViLXZzY29kZS10aGVtZScsXG5cbiAgICAgICAgICAgICAgLy8gU0FQIENBUFxuICAgICAgICAgICAgICAnU0FQU0UudnNjb2RlLWNkcycsXG4gICAgICAgICAgICAgICdTQVBPU1MuYXBwLXN0dWRpby10b29sa2l0JyxcbiAgICAgICAgICAgICAgJ1NBUE9TUy5hcHAtc3R1ZGlvLXJlbW90ZS1hY2Nlc3MnLFxuICAgICAgICAgICAgICAnU0FQT1MueWVvbWFuLXVpJyxcblxuICAgICAgICAgICAgICAvLyBEb2NrZXJcbiAgICAgICAgICAgICAgJ21zLXZzY29kZS1yZW1vdGUucmVtb3RlLWNvbnRhaW5lcnMnLFxuXG4gICAgICAgICAgICAgIC8vIC5lbnZcbiAgICAgICAgICAgICAgJ21pa2VzdGVhZC5kb3RlbnYnLFxuXG4gICAgICAgICAgICAgIC8vIFVJNVxuICAgICAgICAgICAgICAnU0FQU0Uuc2FwLXV4LWZpb3JpLXRvb2xzLWV4dGVuc2lvbi1wYWNrJyxcblxuICAgICAgICAgICAgICAvLyBTUUxpdGVcbiAgICAgICAgICAgICAgJ3F3dGVsLnNxbGl0ZS12aWV3ZXInLFxuXG4gICAgICAgICAgICAgIC8vIENTVlxuICAgICAgICAgICAgICAnamFuaXNkZC52c2NvZGUtZWRpdC1jc3YnLFxuICAgICAgICAgICAgICAnbWVjaGF0cm9uZXIucmFpbmJvdy1jc3YnLFxuXG4gICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHRcbiAgICAgICAgICAgICAgJ3VzZXJuYW1laHcuZXJyb3JsZW5zJyxcbiAgICAgICAgICAgICAgJ2RiYWV1bWVyLnZzY29kZS1lc2xpbnQnLFxuICAgICAgICAgICAgICAnb2RlcndhdC5pbmRlbnQtcmFpbmJvdycsXG4gICAgICAgICAgICAgICdlc2JlbnAucHJldHRpZXItdnNjb2RlJyxcbiAgICAgICAgICAgICAgJ1lvYXZCbHMucHJldHR5LXRzLWVycm9ycycsXG4gICAgICAgICAgICAgICdzdHJlZXRzaWRlc29mdHdhcmUuY29kZS1zcGVsbC1jaGVja2VyJyxcbiAgICAgICAgICAgICAgJ3dheW91LnZzY29kZS10b2RvLWhpZ2hsaWdodCcsXG4gICAgICAgICAgICAgICdtaWtlLWNvLmltcG9ydC1zb3J0ZXInLFxuICAgICAgICAgICAgICAnVmlzdWFsU3R1ZGlvRXhwdFRlYW0udnNjb2RlaW50ZWxsaWNvZGUnLFxuXG4gICAgICAgICAgICAgIC8vIFhNTCAmIFlBTUwnXG4gICAgICAgICAgICAgICdyZWRoYXQudnNjb2RlLXlhbWwnLFxuICAgICAgICAgICAgICAnRG90Sm9zaEpvaG5zb24ueG1sJyxcbiAgICAgICAgICAgICAgJ1NBUE9TUy54bWwtdG9vbGtpdCcsXG5cbiAgICAgICAgICAgICAgLy8gR2l0XG4gICAgICAgICAgICAgICd3YWRlcnlhbi5naXRibGFtZScsXG4gICAgICAgICAgICAgICdkb25qYXlhbWFubmUuZ2l0aGlzdG9yeScsXG4gICAgICAgICAgICAgICdHaXRIdWIudnNjb2RlLXB1bGwtcmVxdWVzdC1naXRodWInLFxuXG4gICAgICAgICAgICAgIC8vIFJFQURNRVxuICAgICAgICAgICAgICAneXpoYW5nLm1hcmtkb3duLWFsbC1pbi1vbmUnLFxuICAgICAgICAgICAgICAnRGF2aWRBbnNvbi52c2NvZGUtbWFya2Rvd25saW50JyxcbiAgICAgICAgICAgICAgJ2JpZXJuZXIuanNkb2MtbWFya2Rvd24taGlnaGxpZ2h0aW5nJyxcblxuICAgICAgICAgICAgICAvLyBPdGhlcnNcbiAgICAgICAgICAgICAgJ1Zpc3VhbFN0dWRpb0V4cHRUZWFtLnZzY29kZWludGVsbGljb2RlJyxcbiAgICAgICAgICAgICAgJ2NocmlzdGlhbi1rb2hsZXIucGF0aC1pbnRlbGxpc2Vuc2UnLFxuICAgICAgICAgICAgICAnQXlrdXRTYXJhYy5qc29uY3JhY2stdnNjb2RlJyxcbiAgICAgICAgICAgICAgJ3RhbWFzZmUuZXZlbi1iZXR0ZXItdG9tbCcsXG4gICAgICAgICAgICAgICdnaXRodWIuY29waWxvdCcsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevContainerConfigBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const config_1 = require("./config");
const utils_1 = require("../utils");
/**
 * Base class for implementing all relevant DevContainer configuration.
 *
 * This class acts as a base for handling DevContainer configuration within projects.
 */
class DevContainerConfigBase extends config_1.Config {
    get configFile() {
        return {
            '.devcontainer.json': {
                image: 'mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye',
                postCreateCommand: 'npm install',
                features: {
                    'ghcr.io/devcontainers-contrib/features/curl-apt-get': 'latest',
                    'ghcr.io/devcontainers/features/github-cli': 'latest',
                },
                customizations: {
                    vscode: {
                        extensions: [
                            'Orta.vscode-jest',
                            'firsttris.vscode-jest-runner',
                            'humao.rest-client',
                            'aaron-bond.better-comments',
                            'alefragnani.Bookmarks',
                            'alefragnani.project-manager',
                            'christian-kohler.npm-intellisense',
                            'mskelton.npm-outdated',
                            'PKief.material-icon-theme',
                            'zhuangtongfa.material-theme',
                            'GitHub.github-vscode-theme',
                            'ms-vscode-remote.remote-containers',
                            'mikestead.dotenv',
                            'usernamehw.errorlens',
                            'dbaeumer.vscode-eslint',
                            'oderwat.indent-rainbow',
                            'esbenp.prettier-vscode',
                            'YoavBls.pretty-ts-errors',
                            'streetsidesoftware.code-spell-checker',
                            'wayou.vscode-todo-highlight',
                            'mike-co.import-sorter',
                            'VisualStudioExptTeam.vscodeintellicode',
                            'redhat.vscode-yaml',
                            'DotJoshJohnson.xml',
                            'waderyan.gitblame',
                            'donjayamanne.githistory',
                            'GitHub.vscode-pull-request-github',
                            'yzhang.markdown-all-in-one',
                            'DavidAnson.vscode-markdownlint',
                            'bierner.jsdoc-markdown-highlighting',
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
    get additionalIgnorePatterns() {
        const filePath = Object.keys(this.configFile)[0];
        return [`/${filePath}`];
    }
    registerConfig() {
        if ((0, utils_1.isValidProject)(this.project)) {
            this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
        }
    }
    applyConfig() {
        const filePath = Object.keys(this.configFile)[0];
        new projen_1.JsonFile(this.project, filePath, {
            obj: this.configFile[filePath],
        });
    }
}
exports.DevContainerConfigBase = DevContainerConfigBase;
_a = JSII_RTTI_SYMBOL_1;
DevContainerConfigBase[_a] = { fqn: "@dxfrontier/projen-template-projects.DevContainerConfigBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2Y29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2UvZGV2Y29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQWtDO0FBQ2xDLHFDQUFrQztBQUVsQyxvQ0FBMEM7QUFHMUM7Ozs7R0FJRztBQUNILE1BQWEsc0JBQXVCLFNBQVEsZUFBTTtJQUNoRCxJQUF1QixVQUFVO1FBQy9CLE9BQU87WUFDTCxvQkFBb0IsRUFBRTtnQkFDcEIsS0FBSyxFQUFFLCtEQUErRDtnQkFDdEUsaUJBQWlCLEVBQUUsYUFBYTtnQkFDaEMsUUFBUSxFQUFFO29CQUNSLHFEQUFxRCxFQUFFLFFBQVE7b0JBQy9ELDJDQUEyQyxFQUFFLFFBQVE7aUJBQ3REO2dCQUNELGNBQWMsRUFBRTtvQkFDZCxNQUFNLEVBQUU7d0JBQ04sVUFBVSxFQUFFOzRCQUNWLGtCQUFrQjs0QkFDbEIsOEJBQThCOzRCQUM5QixtQkFBbUI7NEJBQ25CLDRCQUE0Qjs0QkFDNUIsdUJBQXVCOzRCQUN2Qiw2QkFBNkI7NEJBQzdCLG1DQUFtQzs0QkFDbkMsdUJBQXVCOzRCQUN2QiwyQkFBMkI7NEJBQzNCLDZCQUE2Qjs0QkFDN0IsNEJBQTRCOzRCQUM1QixvQ0FBb0M7NEJBQ3BDLGtCQUFrQjs0QkFDbEIsc0JBQXNCOzRCQUN0Qix3QkFBd0I7NEJBQ3hCLHdCQUF3Qjs0QkFDeEIsd0JBQXdCOzRCQUN4QiwwQkFBMEI7NEJBQzFCLHVDQUF1Qzs0QkFDdkMsNkJBQTZCOzRCQUM3Qix1QkFBdUI7NEJBQ3ZCLHdDQUF3Qzs0QkFDeEMsb0JBQW9COzRCQUNwQixvQkFBb0I7NEJBQ3BCLG1CQUFtQjs0QkFDbkIseUJBQXlCOzRCQUN6QixtQ0FBbUM7NEJBQ25DLDRCQUE0Qjs0QkFDNUIsZ0NBQWdDOzRCQUNoQyxxQ0FBcUM7NEJBQ3JDLHdDQUF3Qzs0QkFDeEMsb0NBQW9DOzRCQUNwQyw2QkFBNkI7NEJBQzdCLDBCQUEwQjs0QkFDMUIsZ0JBQWdCO3lCQUNqQjtxQkFDRjtpQkFDRjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUF1Qix3QkFBd0I7UUFDN0MsTUFBTSxRQUFRLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsT0FBTyxDQUFDLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRWUsY0FBYztRQUM1QixJQUFJLElBQUEsc0JBQWMsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsT0FBd0IsQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDbEcsQ0FBQztJQUNILENBQUM7SUFFZSxXQUFXO1FBQ3pCLE1BQU0sUUFBUSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksaUJBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRTtZQUNuQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDL0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7QUF2RUgsd0RBd0VDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSnNvbkZpbGUgfSBmcm9tICdwcm9qZW4nO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgUHJvamVjdFR5cGVzIH0gZnJvbSAnLi4vdHlwZXMvcHJvamVjdCc7XG5pbXBvcnQgeyBpc1ZhbGlkUHJvamVjdCB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgRGV2Q29udGFpbmVyIGNvbmZpZ3VyYXRpb24uXG4gKlxuICogVGhpcyBjbGFzcyBhY3RzIGFzIGEgYmFzZSBmb3IgaGFuZGxpbmcgRGV2Q29udGFpbmVyIGNvbmZpZ3VyYXRpb24gd2l0aGluIHByb2plY3RzLlxuICovXG5leHBvcnQgY2xhc3MgRGV2Q29udGFpbmVyQ29uZmlnQmFzZSBleHRlbmRzIENvbmZpZyB7XG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgY29uZmlnRmlsZSgpOiBTZXR0aW5ncyB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuZGV2Y29udGFpbmVyLmpzb24nOiB7XG4gICAgICAgIGltYWdlOiAnbWNyLm1pY3Jvc29mdC5jb20vZGV2Y29udGFpbmVycy90eXBlc2NyaXB0LW5vZGU6MS0yMC1idWxsc2V5ZScsXG4gICAgICAgIHBvc3RDcmVhdGVDb21tYW5kOiAnbnBtIGluc3RhbGwnLFxuICAgICAgICBmZWF0dXJlczoge1xuICAgICAgICAgICdnaGNyLmlvL2RldmNvbnRhaW5lcnMtY29udHJpYi9mZWF0dXJlcy9jdXJsLWFwdC1nZXQnOiAnbGF0ZXN0JyxcbiAgICAgICAgICAnZ2hjci5pby9kZXZjb250YWluZXJzL2ZlYXR1cmVzL2dpdGh1Yi1jbGknOiAnbGF0ZXN0JyxcbiAgICAgICAgfSxcbiAgICAgICAgY3VzdG9taXphdGlvbnM6IHtcbiAgICAgICAgICB2c2NvZGU6IHtcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IFtcbiAgICAgICAgICAgICAgJ09ydGEudnNjb2RlLWplc3QnLFxuICAgICAgICAgICAgICAnZmlyc3R0cmlzLnZzY29kZS1qZXN0LXJ1bm5lcicsXG4gICAgICAgICAgICAgICdodW1hby5yZXN0LWNsaWVudCcsXG4gICAgICAgICAgICAgICdhYXJvbi1ib25kLmJldHRlci1jb21tZW50cycsXG4gICAgICAgICAgICAgICdhbGVmcmFnbmFuaS5Cb29rbWFya3MnLFxuICAgICAgICAgICAgICAnYWxlZnJhZ25hbmkucHJvamVjdC1tYW5hZ2VyJyxcbiAgICAgICAgICAgICAgJ2NocmlzdGlhbi1rb2hsZXIubnBtLWludGVsbGlzZW5zZScsXG4gICAgICAgICAgICAgICdtc2tlbHRvbi5ucG0tb3V0ZGF0ZWQnLFxuICAgICAgICAgICAgICAnUEtpZWYubWF0ZXJpYWwtaWNvbi10aGVtZScsXG4gICAgICAgICAgICAgICd6aHVhbmd0b25nZmEubWF0ZXJpYWwtdGhlbWUnLFxuICAgICAgICAgICAgICAnR2l0SHViLmdpdGh1Yi12c2NvZGUtdGhlbWUnLFxuICAgICAgICAgICAgICAnbXMtdnNjb2RlLXJlbW90ZS5yZW1vdGUtY29udGFpbmVycycsXG4gICAgICAgICAgICAgICdtaWtlc3RlYWQuZG90ZW52JyxcbiAgICAgICAgICAgICAgJ3VzZXJuYW1laHcuZXJyb3JsZW5zJyxcbiAgICAgICAgICAgICAgJ2RiYWV1bWVyLnZzY29kZS1lc2xpbnQnLFxuICAgICAgICAgICAgICAnb2RlcndhdC5pbmRlbnQtcmFpbmJvdycsXG4gICAgICAgICAgICAgICdlc2JlbnAucHJldHRpZXItdnNjb2RlJyxcbiAgICAgICAgICAgICAgJ1lvYXZCbHMucHJldHR5LXRzLWVycm9ycycsXG4gICAgICAgICAgICAgICdzdHJlZXRzaWRlc29mdHdhcmUuY29kZS1zcGVsbC1jaGVja2VyJyxcbiAgICAgICAgICAgICAgJ3dheW91LnZzY29kZS10b2RvLWhpZ2hsaWdodCcsXG4gICAgICAgICAgICAgICdtaWtlLWNvLmltcG9ydC1zb3J0ZXInLFxuICAgICAgICAgICAgICAnVmlzdWFsU3R1ZGlvRXhwdFRlYW0udnNjb2RlaW50ZWxsaWNvZGUnLFxuICAgICAgICAgICAgICAncmVkaGF0LnZzY29kZS15YW1sJyxcbiAgICAgICAgICAgICAgJ0RvdEpvc2hKb2huc29uLnhtbCcsXG4gICAgICAgICAgICAgICd3YWRlcnlhbi5naXRibGFtZScsXG4gICAgICAgICAgICAgICdkb25qYXlhbWFubmUuZ2l0aGlzdG9yeScsXG4gICAgICAgICAgICAgICdHaXRIdWIudnNjb2RlLXB1bGwtcmVxdWVzdC1naXRodWInLFxuICAgICAgICAgICAgICAneXpoYW5nLm1hcmtkb3duLWFsbC1pbi1vbmUnLFxuICAgICAgICAgICAgICAnRGF2aWRBbnNvbi52c2NvZGUtbWFya2Rvd25saW50JyxcbiAgICAgICAgICAgICAgJ2JpZXJuZXIuanNkb2MtbWFya2Rvd24taGlnaGxpZ2h0aW5nJyxcbiAgICAgICAgICAgICAgJ1Zpc3VhbFN0dWRpb0V4cHRUZWFtLnZzY29kZWludGVsbGljb2RlJyxcbiAgICAgICAgICAgICAgJ2NocmlzdGlhbi1rb2hsZXIucGF0aC1pbnRlbGxpc2Vuc2UnLFxuICAgICAgICAgICAgICAnQXlrdXRTYXJhYy5qc29uY3JhY2stdnNjb2RlJyxcbiAgICAgICAgICAgICAgJ3RhbWFzZmUuZXZlbi1iZXR0ZXItdG9tbCcsXG4gICAgICAgICAgICAgICdnaXRodWIuY29waWxvdCcsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZSlbMF07XG4gICAgcmV0dXJuIFtgLyR7ZmlsZVBhdGh9YF07XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcmVnaXN0ZXJDb25maWcoKTogdm9pZCB7XG4gICAgaWYgKGlzVmFsaWRQcm9qZWN0KHRoaXMucHJvamVjdCkpIHtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5wcmV0dGllckNvbmZpZz8uYWRkSWdub3JlUGF0dGVybnModGhpcy5hZGRpdGlvbmFsSWdub3JlUGF0dGVybnMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBhcHBseUNvbmZpZygpOiB2b2lkIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlKVswXTtcbiAgICBuZXcgSnNvbkZpbGUodGhpcy5wcm9qZWN0LCBmaWxlUGF0aCwge1xuICAgICAgb2JqOiB0aGlzLmNvbmZpZ0ZpbGVbZmlsZVBhdGhdLFxuICAgIH0pO1xuICB9XG59XG4iXX0=
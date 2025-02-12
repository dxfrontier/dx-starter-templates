"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevContainerConfigBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const config_1 = require("../config");
const utils_1 = require("../../util/utils");
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
        if (utils_1.util.isValidProject(this.project)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2Y29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Jhc2UvY29uZmlnL2RldmNvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFrQztBQUNsQyxzQ0FBbUM7QUFFbkMsNENBQXdDO0FBR3hDOzs7O0dBSUc7QUFDSCxNQUFhLHNCQUF1QixTQUFRLGVBQU07SUFDaEQsSUFBdUIsVUFBVTtRQUMvQixPQUFPO1lBQ0wsb0JBQW9CLEVBQUU7Z0JBQ3BCLEtBQUssRUFBRSwrREFBK0Q7Z0JBQ3RFLGlCQUFpQixFQUFFLGFBQWE7Z0JBQ2hDLFFBQVEsRUFBRTtvQkFDUixxREFBcUQsRUFBRSxRQUFRO29CQUMvRCwyQ0FBMkMsRUFBRSxRQUFRO2lCQUN0RDtnQkFDRCxjQUFjLEVBQUU7b0JBQ2QsTUFBTSxFQUFFO3dCQUNOLFVBQVUsRUFBRTs0QkFDVixrQkFBa0I7NEJBQ2xCLDhCQUE4Qjs0QkFDOUIsbUJBQW1COzRCQUNuQiw0QkFBNEI7NEJBQzVCLHVCQUF1Qjs0QkFDdkIsNkJBQTZCOzRCQUM3QixtQ0FBbUM7NEJBQ25DLHVCQUF1Qjs0QkFDdkIsMkJBQTJCOzRCQUMzQiw2QkFBNkI7NEJBQzdCLDRCQUE0Qjs0QkFDNUIsb0NBQW9DOzRCQUNwQyxrQkFBa0I7NEJBQ2xCLHNCQUFzQjs0QkFDdEIsd0JBQXdCOzRCQUN4Qix3QkFBd0I7NEJBQ3hCLHdCQUF3Qjs0QkFDeEIsMEJBQTBCOzRCQUMxQix1Q0FBdUM7NEJBQ3ZDLDZCQUE2Qjs0QkFDN0IsdUJBQXVCOzRCQUN2Qix3Q0FBd0M7NEJBQ3hDLG9CQUFvQjs0QkFDcEIsb0JBQW9COzRCQUNwQixtQkFBbUI7NEJBQ25CLHlCQUF5Qjs0QkFDekIsbUNBQW1DOzRCQUNuQyw0QkFBNEI7NEJBQzVCLGdDQUFnQzs0QkFDaEMscUNBQXFDOzRCQUNyQyx3Q0FBd0M7NEJBQ3hDLG9DQUFvQzs0QkFDcEMsNkJBQTZCOzRCQUM3QiwwQkFBMEI7NEJBQzFCLGdCQUFnQjt5QkFDakI7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBdUIsd0JBQXdCO1FBQzdDLE1BQU0sUUFBUSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE9BQU8sQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVlLGNBQWM7UUFDNUIsSUFBSSxZQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxPQUF3QixDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNsRyxDQUFDO0lBQ0gsQ0FBQztJQUVlLFdBQVc7UUFDekIsTUFBTSxRQUFRLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxpQkFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFO1lBQ25DLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDOztBQXZFSCx3REF3RUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBKc29uRmlsZSB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgUHJvamVjdFR5cGVzIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcy9wcm9qZWN0JztcbmltcG9ydCB7IHV0aWwgfSBmcm9tICcuLi8uLi91dGlsL3V0aWxzJztcbmltcG9ydCB7IENvbmZpZ0ZpbGUgfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzL3R5cGVzJztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IERldkNvbnRhaW5lciBjb25maWd1cmF0aW9uLlxuICpcbiAqIFRoaXMgY2xhc3MgYWN0cyBhcyBhIGJhc2UgZm9yIGhhbmRsaW5nIERldkNvbnRhaW5lciBjb25maWd1cmF0aW9uIHdpdGhpbiBwcm9qZWN0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIERldkNvbnRhaW5lckNvbmZpZ0Jhc2UgZXh0ZW5kcyBDb25maWcge1xuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGNvbmZpZ0ZpbGUoKTogQ29uZmlnRmlsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuZGV2Y29udGFpbmVyLmpzb24nOiB7XG4gICAgICAgIGltYWdlOiAnbWNyLm1pY3Jvc29mdC5jb20vZGV2Y29udGFpbmVycy90eXBlc2NyaXB0LW5vZGU6MS0yMC1idWxsc2V5ZScsXG4gICAgICAgIHBvc3RDcmVhdGVDb21tYW5kOiAnbnBtIGluc3RhbGwnLFxuICAgICAgICBmZWF0dXJlczoge1xuICAgICAgICAgICdnaGNyLmlvL2RldmNvbnRhaW5lcnMtY29udHJpYi9mZWF0dXJlcy9jdXJsLWFwdC1nZXQnOiAnbGF0ZXN0JyxcbiAgICAgICAgICAnZ2hjci5pby9kZXZjb250YWluZXJzL2ZlYXR1cmVzL2dpdGh1Yi1jbGknOiAnbGF0ZXN0JyxcbiAgICAgICAgfSxcbiAgICAgICAgY3VzdG9taXphdGlvbnM6IHtcbiAgICAgICAgICB2c2NvZGU6IHtcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IFtcbiAgICAgICAgICAgICAgJ09ydGEudnNjb2RlLWplc3QnLFxuICAgICAgICAgICAgICAnZmlyc3R0cmlzLnZzY29kZS1qZXN0LXJ1bm5lcicsXG4gICAgICAgICAgICAgICdodW1hby5yZXN0LWNsaWVudCcsXG4gICAgICAgICAgICAgICdhYXJvbi1ib25kLmJldHRlci1jb21tZW50cycsXG4gICAgICAgICAgICAgICdhbGVmcmFnbmFuaS5Cb29rbWFya3MnLFxuICAgICAgICAgICAgICAnYWxlZnJhZ25hbmkucHJvamVjdC1tYW5hZ2VyJyxcbiAgICAgICAgICAgICAgJ2NocmlzdGlhbi1rb2hsZXIubnBtLWludGVsbGlzZW5zZScsXG4gICAgICAgICAgICAgICdtc2tlbHRvbi5ucG0tb3V0ZGF0ZWQnLFxuICAgICAgICAgICAgICAnUEtpZWYubWF0ZXJpYWwtaWNvbi10aGVtZScsXG4gICAgICAgICAgICAgICd6aHVhbmd0b25nZmEubWF0ZXJpYWwtdGhlbWUnLFxuICAgICAgICAgICAgICAnR2l0SHViLmdpdGh1Yi12c2NvZGUtdGhlbWUnLFxuICAgICAgICAgICAgICAnbXMtdnNjb2RlLXJlbW90ZS5yZW1vdGUtY29udGFpbmVycycsXG4gICAgICAgICAgICAgICdtaWtlc3RlYWQuZG90ZW52JyxcbiAgICAgICAgICAgICAgJ3VzZXJuYW1laHcuZXJyb3JsZW5zJyxcbiAgICAgICAgICAgICAgJ2RiYWV1bWVyLnZzY29kZS1lc2xpbnQnLFxuICAgICAgICAgICAgICAnb2RlcndhdC5pbmRlbnQtcmFpbmJvdycsXG4gICAgICAgICAgICAgICdlc2JlbnAucHJldHRpZXItdnNjb2RlJyxcbiAgICAgICAgICAgICAgJ1lvYXZCbHMucHJldHR5LXRzLWVycm9ycycsXG4gICAgICAgICAgICAgICdzdHJlZXRzaWRlc29mdHdhcmUuY29kZS1zcGVsbC1jaGVja2VyJyxcbiAgICAgICAgICAgICAgJ3dheW91LnZzY29kZS10b2RvLWhpZ2hsaWdodCcsXG4gICAgICAgICAgICAgICdtaWtlLWNvLmltcG9ydC1zb3J0ZXInLFxuICAgICAgICAgICAgICAnVmlzdWFsU3R1ZGlvRXhwdFRlYW0udnNjb2RlaW50ZWxsaWNvZGUnLFxuICAgICAgICAgICAgICAncmVkaGF0LnZzY29kZS15YW1sJyxcbiAgICAgICAgICAgICAgJ0RvdEpvc2hKb2huc29uLnhtbCcsXG4gICAgICAgICAgICAgICd3YWRlcnlhbi5naXRibGFtZScsXG4gICAgICAgICAgICAgICdkb25qYXlhbWFubmUuZ2l0aGlzdG9yeScsXG4gICAgICAgICAgICAgICdHaXRIdWIudnNjb2RlLXB1bGwtcmVxdWVzdC1naXRodWInLFxuICAgICAgICAgICAgICAneXpoYW5nLm1hcmtkb3duLWFsbC1pbi1vbmUnLFxuICAgICAgICAgICAgICAnRGF2aWRBbnNvbi52c2NvZGUtbWFya2Rvd25saW50JyxcbiAgICAgICAgICAgICAgJ2JpZXJuZXIuanNkb2MtbWFya2Rvd24taGlnaGxpZ2h0aW5nJyxcbiAgICAgICAgICAgICAgJ1Zpc3VhbFN0dWRpb0V4cHRUZWFtLnZzY29kZWludGVsbGljb2RlJyxcbiAgICAgICAgICAgICAgJ2NocmlzdGlhbi1rb2hsZXIucGF0aC1pbnRlbGxpc2Vuc2UnLFxuICAgICAgICAgICAgICAnQXlrdXRTYXJhYy5qc29uY3JhY2stdnNjb2RlJyxcbiAgICAgICAgICAgICAgJ3RhbWFzZmUuZXZlbi1iZXR0ZXItdG9tbCcsXG4gICAgICAgICAgICAgICdnaXRodWIuY29waWxvdCcsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZSlbMF07XG4gICAgcmV0dXJuIFtgLyR7ZmlsZVBhdGh9YF07XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcmVnaXN0ZXJDb25maWcoKTogdm9pZCB7XG4gICAgaWYgKHV0aWwuaXNWYWxpZFByb2plY3QodGhpcy5wcm9qZWN0KSkge1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLnByZXR0aWVyQ29uZmlnPy5hZGRJZ25vcmVQYXR0ZXJucyh0aGlzLmFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIGFwcGx5Q29uZmlnKCk6IHZvaWQge1xuICAgIGNvbnN0IGZpbGVQYXRoOiBzdHJpbmcgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ0ZpbGUpWzBdO1xuICAgIG5ldyBKc29uRmlsZSh0aGlzLnByb2plY3QsIGZpbGVQYXRoLCB7XG4gICAgICBvYmo6IHRoaXMuY29uZmlnRmlsZVtmaWxlUGF0aF0sXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
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
    /**
     * Gets the additional npm scripts to be added to the project's configuration.
     *
     * @returns A record of script names and their corresponding commands.
     */
    get additionalScripts() {
        return {
            'install-dependencies': 'npm install',
        };
    }
    /**
     * Gets the config file to be added to the project's configuration.
     *
     * @returns A record of the having the path to the file as key and the content as value.
     */
    get configFile() {
        return {
            '.devcontainer.json': {
                image: 'mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye',
                postCreateCommand: ['npm run install-dependencies'],
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
    /**
     * Gets additional ignore patterns to be added to the project's ignore configuration.
     *
     * @returns A list of ignore patterns.
     */
    get additionalIgnorePatterns() {
        const filePath = Object.keys(this.configFile)[0];
        return [`/${filePath}`];
    }
    registerConfig() {
        if ((0, utils_1.isValidProject)(this.project)) {
            this.project.npmConfig?.addScripts(this.additionalScripts);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2Y29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2UvZGV2Y29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQWtDO0FBQ2xDLHFDQUFrQztBQUVsQyxvQ0FBMEM7QUFFMUM7Ozs7R0FJRztBQUNILE1BQWEsc0JBQXVCLFNBQVEsZUFBTTtJQUNoRDs7OztPQUlHO0lBQ0gsSUFBYyxpQkFBaUI7UUFDN0IsT0FBTztZQUNMLHNCQUFzQixFQUFFLGFBQWE7U0FDdEMsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxVQUFVO1FBQ3RCLE9BQU87WUFDTCxvQkFBb0IsRUFBRTtnQkFDcEIsS0FBSyxFQUFFLCtEQUErRDtnQkFDdEUsaUJBQWlCLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztnQkFDbkQsUUFBUSxFQUFFO29CQUNSLHFEQUFxRCxFQUFFLFFBQVE7b0JBQy9ELDJDQUEyQyxFQUFFLFFBQVE7aUJBQ3REO2dCQUNELGNBQWMsRUFBRTtvQkFDZCxNQUFNLEVBQUU7d0JBQ04sVUFBVSxFQUFFOzRCQUNWLGtCQUFrQjs0QkFDbEIsOEJBQThCOzRCQUM5QixtQkFBbUI7NEJBQ25CLDRCQUE0Qjs0QkFDNUIsdUJBQXVCOzRCQUN2Qiw2QkFBNkI7NEJBQzdCLG1DQUFtQzs0QkFDbkMsdUJBQXVCOzRCQUN2QiwyQkFBMkI7NEJBQzNCLDZCQUE2Qjs0QkFDN0IsNEJBQTRCOzRCQUM1QixvQ0FBb0M7NEJBQ3BDLGtCQUFrQjs0QkFDbEIsc0JBQXNCOzRCQUN0Qix3QkFBd0I7NEJBQ3hCLHdCQUF3Qjs0QkFDeEIsd0JBQXdCOzRCQUN4QiwwQkFBMEI7NEJBQzFCLHVDQUF1Qzs0QkFDdkMsNkJBQTZCOzRCQUM3Qix1QkFBdUI7NEJBQ3ZCLHdDQUF3Qzs0QkFDeEMsb0JBQW9COzRCQUNwQixvQkFBb0I7NEJBQ3BCLG1CQUFtQjs0QkFDbkIseUJBQXlCOzRCQUN6QixtQ0FBbUM7NEJBQ25DLDRCQUE0Qjs0QkFDNUIsZ0NBQWdDOzRCQUNoQyxxQ0FBcUM7NEJBQ3JDLHdDQUF3Qzs0QkFDeEMsb0NBQW9DOzRCQUNwQyw2QkFBNkI7NEJBQzdCLDBCQUEwQjs0QkFDMUIsZ0JBQWdCO3lCQUNqQjtxQkFDRjtpQkFDRjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyx3QkFBd0I7UUFDcEMsTUFBTSxRQUFRLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsT0FBTyxDQUFDLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRWUsY0FBYztRQUM1QixJQUFJLElBQUEsc0JBQWMsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsT0FBd0IsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxPQUF3QixDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNsRyxDQUFDO0lBQ0gsQ0FBQztJQUVlLFdBQVc7UUFDekIsTUFBTSxRQUFRLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxpQkFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFO1lBQ25DLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDOztBQTdGSCx3REE4RkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBKc29uRmlsZSB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBQcm9qZWN0VHlwZXMsIFNldHRpbmdzIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgaXNWYWxpZFByb2plY3QgfSBmcm9tICcuLi91dGlscyc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBEZXZDb250YWluZXIgY29uZmlndXJhdGlvbi5cbiAqXG4gKiBUaGlzIGNsYXNzIGFjdHMgYXMgYSBiYXNlIGZvciBoYW5kbGluZyBEZXZDb250YWluZXIgY29uZmlndXJhdGlvbiB3aXRoaW4gcHJvamVjdHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBEZXZDb250YWluZXJDb25maWdCYXNlIGV4dGVuZHMgQ29uZmlnIHtcbiAgLyoqXG4gICAqIEdldHMgdGhlIGFkZGl0aW9uYWwgbnBtIHNjcmlwdHMgdG8gYmUgYWRkZWQgdG8gdGhlIHByb2plY3QncyBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIHJlY29yZCBvZiBzY3JpcHQgbmFtZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgY29tbWFuZHMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGFkZGl0aW9uYWxTY3JpcHRzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIHJldHVybiB7XG4gICAgICAnaW5zdGFsbC1kZXBlbmRlbmNpZXMnOiAnbnBtIGluc3RhbGwnLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgY29uZmlnIGZpbGUgdG8gYmUgYWRkZWQgdG8gdGhlIHByb2plY3QncyBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIHJlY29yZCBvZiB0aGUgaGF2aW5nIHRoZSBwYXRoIHRvIHRoZSBmaWxlIGFzIGtleSBhbmQgdGhlIGNvbnRlbnQgYXMgdmFsdWUuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGNvbmZpZ0ZpbGUoKTogU2V0dGluZ3Mge1xuICAgIHJldHVybiB7XG4gICAgICAnLmRldmNvbnRhaW5lci5qc29uJzoge1xuICAgICAgICBpbWFnZTogJ21jci5taWNyb3NvZnQuY29tL2RldmNvbnRhaW5lcnMvdHlwZXNjcmlwdC1ub2RlOjEtMjAtYnVsbHNleWUnLFxuICAgICAgICBwb3N0Q3JlYXRlQ29tbWFuZDogWyducG0gcnVuIGluc3RhbGwtZGVwZW5kZW5jaWVzJ10sXG4gICAgICAgIGZlYXR1cmVzOiB7XG4gICAgICAgICAgJ2doY3IuaW8vZGV2Y29udGFpbmVycy1jb250cmliL2ZlYXR1cmVzL2N1cmwtYXB0LWdldCc6ICdsYXRlc3QnLFxuICAgICAgICAgICdnaGNyLmlvL2RldmNvbnRhaW5lcnMvZmVhdHVyZXMvZ2l0aHViLWNsaSc6ICdsYXRlc3QnLFxuICAgICAgICB9LFxuICAgICAgICBjdXN0b21pemF0aW9uczoge1xuICAgICAgICAgIHZzY29kZToge1xuICAgICAgICAgICAgZXh0ZW5zaW9uczogW1xuICAgICAgICAgICAgICAnT3J0YS52c2NvZGUtamVzdCcsXG4gICAgICAgICAgICAgICdmaXJzdHRyaXMudnNjb2RlLWplc3QtcnVubmVyJyxcbiAgICAgICAgICAgICAgJ2h1bWFvLnJlc3QtY2xpZW50JyxcbiAgICAgICAgICAgICAgJ2Fhcm9uLWJvbmQuYmV0dGVyLWNvbW1lbnRzJyxcbiAgICAgICAgICAgICAgJ2FsZWZyYWduYW5pLkJvb2ttYXJrcycsXG4gICAgICAgICAgICAgICdhbGVmcmFnbmFuaS5wcm9qZWN0LW1hbmFnZXInLFxuICAgICAgICAgICAgICAnY2hyaXN0aWFuLWtvaGxlci5ucG0taW50ZWxsaXNlbnNlJyxcbiAgICAgICAgICAgICAgJ21za2VsdG9uLm5wbS1vdXRkYXRlZCcsXG4gICAgICAgICAgICAgICdQS2llZi5tYXRlcmlhbC1pY29uLXRoZW1lJyxcbiAgICAgICAgICAgICAgJ3podWFuZ3RvbmdmYS5tYXRlcmlhbC10aGVtZScsXG4gICAgICAgICAgICAgICdHaXRIdWIuZ2l0aHViLXZzY29kZS10aGVtZScsXG4gICAgICAgICAgICAgICdtcy12c2NvZGUtcmVtb3RlLnJlbW90ZS1jb250YWluZXJzJyxcbiAgICAgICAgICAgICAgJ21pa2VzdGVhZC5kb3RlbnYnLFxuICAgICAgICAgICAgICAndXNlcm5hbWVody5lcnJvcmxlbnMnLFxuICAgICAgICAgICAgICAnZGJhZXVtZXIudnNjb2RlLWVzbGludCcsXG4gICAgICAgICAgICAgICdvZGVyd2F0LmluZGVudC1yYWluYm93JyxcbiAgICAgICAgICAgICAgJ2VzYmVucC5wcmV0dGllci12c2NvZGUnLFxuICAgICAgICAgICAgICAnWW9hdkJscy5wcmV0dHktdHMtZXJyb3JzJyxcbiAgICAgICAgICAgICAgJ3N0cmVldHNpZGVzb2Z0d2FyZS5jb2RlLXNwZWxsLWNoZWNrZXInLFxuICAgICAgICAgICAgICAnd2F5b3UudnNjb2RlLXRvZG8taGlnaGxpZ2h0JyxcbiAgICAgICAgICAgICAgJ21pa2UtY28uaW1wb3J0LXNvcnRlcicsXG4gICAgICAgICAgICAgICdWaXN1YWxTdHVkaW9FeHB0VGVhbS52c2NvZGVpbnRlbGxpY29kZScsXG4gICAgICAgICAgICAgICdyZWRoYXQudnNjb2RlLXlhbWwnLFxuICAgICAgICAgICAgICAnRG90Sm9zaEpvaG5zb24ueG1sJyxcbiAgICAgICAgICAgICAgJ3dhZGVyeWFuLmdpdGJsYW1lJyxcbiAgICAgICAgICAgICAgJ2RvbmpheWFtYW5uZS5naXRoaXN0b3J5JyxcbiAgICAgICAgICAgICAgJ0dpdEh1Yi52c2NvZGUtcHVsbC1yZXF1ZXN0LWdpdGh1YicsXG4gICAgICAgICAgICAgICd5emhhbmcubWFya2Rvd24tYWxsLWluLW9uZScsXG4gICAgICAgICAgICAgICdEYXZpZEFuc29uLnZzY29kZS1tYXJrZG93bmxpbnQnLFxuICAgICAgICAgICAgICAnYmllcm5lci5qc2RvYy1tYXJrZG93bi1oaWdobGlnaHRpbmcnLFxuICAgICAgICAgICAgICAnVmlzdWFsU3R1ZGlvRXhwdFRlYW0udnNjb2RlaW50ZWxsaWNvZGUnLFxuICAgICAgICAgICAgICAnY2hyaXN0aWFuLWtvaGxlci5wYXRoLWludGVsbGlzZW5zZScsXG4gICAgICAgICAgICAgICdBeWt1dFNhcmFjLmpzb25jcmFjay12c2NvZGUnLFxuICAgICAgICAgICAgICAndGFtYXNmZS5ldmVuLWJldHRlci10b21sJyxcbiAgICAgICAgICAgICAgJ2dpdGh1Yi5jb3BpbG90JyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGFkZGl0aW9uYWwgaWdub3JlIHBhdHRlcm5zIHRvIGJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0J3MgaWdub3JlIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIEEgbGlzdCBvZiBpZ25vcmUgcGF0dGVybnMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZSlbMF07XG4gICAgcmV0dXJuIFtgLyR7ZmlsZVBhdGh9YF07XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcmVnaXN0ZXJDb25maWcoKTogdm9pZCB7XG4gICAgaWYgKGlzVmFsaWRQcm9qZWN0KHRoaXMucHJvamVjdCkpIHtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5ucG1Db25maWc/LmFkZFNjcmlwdHModGhpcy5hZGRpdGlvbmFsU2NyaXB0cyk7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykucHJldHRpZXJDb25maWc/LmFkZElnbm9yZVBhdHRlcm5zKHRoaXMuYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgYXBwbHlDb25maWcoKTogdm9pZCB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZSlbMF07XG4gICAgbmV3IEpzb25GaWxlKHRoaXMucHJvamVjdCwgZmlsZVBhdGgsIHtcbiAgICAgIG9iajogdGhpcy5jb25maWdGaWxlW2ZpbGVQYXRoXSxcbiAgICB9KTtcbiAgfVxufVxuIl19
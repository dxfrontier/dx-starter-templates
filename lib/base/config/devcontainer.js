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
            '.devcontainer/scripts/install-dependencies.sh': [
                '#!/bin/bash',
                'set -e # Exit on error',
                'set -x # Print commands for debugging',
                'npm install',
            ],
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
        const devContainerJson = Object.keys(this.configFile)[0];
        new projen_1.JsonFile(this.project, devContainerJson, {
            obj: this.configFile[devContainerJson],
        });
        const devContainerDependencies = Object.keys(this.configFile)[1];
        new projen_1.TextFile(this.project, devContainerDependencies, {
            lines: this.configFile[devContainerDependencies],
            executable: true,
        });
    }
}
exports.DevContainerConfigBase = DevContainerConfigBase;
_a = JSII_RTTI_SYMBOL_1;
DevContainerConfigBase[_a] = { fqn: "@dxfrontier/projen-template-projects.DevContainerConfigBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2Y29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Jhc2UvY29uZmlnL2RldmNvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUE0QztBQUM1QyxzQ0FBbUM7QUFFbkMsNENBQXdDO0FBR3hDOzs7O0dBSUc7QUFDSCxNQUFhLHNCQUF1QixTQUFRLGVBQU07SUFDaEQsSUFBdUIsVUFBVTtRQUMvQixPQUFPO1lBQ0wsaUNBQWlDLEVBQUU7Z0JBQ2pDLEtBQUssRUFBRSwrREFBK0Q7Z0JBQ3RFLGlCQUFpQixFQUFFLHNDQUFzQztnQkFDekQsUUFBUSxFQUFFO29CQUNSLHFEQUFxRCxFQUFFLFFBQVE7b0JBQy9ELDJDQUEyQyxFQUFFLFFBQVE7aUJBQ3REO2dCQUNELGNBQWMsRUFBRTtvQkFDZCxNQUFNLEVBQUU7d0JBQ04sVUFBVSxFQUFFOzRCQUNWLGtCQUFrQjs0QkFDbEIsOEJBQThCOzRCQUM5QixtQkFBbUI7NEJBQ25CLDRCQUE0Qjs0QkFDNUIsdUJBQXVCOzRCQUN2Qiw2QkFBNkI7NEJBQzdCLG1DQUFtQzs0QkFDbkMsdUJBQXVCOzRCQUN2QiwyQkFBMkI7NEJBQzNCLDZCQUE2Qjs0QkFDN0IsNEJBQTRCOzRCQUM1QixvQ0FBb0M7NEJBQ3BDLGtCQUFrQjs0QkFDbEIsc0JBQXNCOzRCQUN0Qix3QkFBd0I7NEJBQ3hCLHdCQUF3Qjs0QkFDeEIsd0JBQXdCOzRCQUN4QiwwQkFBMEI7NEJBQzFCLHVDQUF1Qzs0QkFDdkMsNkJBQTZCOzRCQUM3Qix1QkFBdUI7NEJBQ3ZCLHdDQUF3Qzs0QkFDeEMsb0JBQW9COzRCQUNwQixvQkFBb0I7NEJBQ3BCLG1CQUFtQjs0QkFDbkIseUJBQXlCOzRCQUN6QixtQ0FBbUM7NEJBQ25DLDRCQUE0Qjs0QkFDNUIsZ0NBQWdDOzRCQUNoQyxxQ0FBcUM7NEJBQ3JDLHdDQUF3Qzs0QkFDeEMsb0NBQW9DOzRCQUNwQyw2QkFBNkI7NEJBQzdCLDBCQUEwQjs0QkFDMUIsZ0JBQWdCO3lCQUNqQjtxQkFDRjtpQkFDRjthQUNGO1lBQ0QsK0NBQStDLEVBQUU7Z0JBQy9DLGFBQWE7Z0JBQ2Isd0JBQXdCO2dCQUN4Qix1Q0FBdUM7Z0JBQ3ZDLGFBQWE7YUFDZDtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBdUIsd0JBQXdCO1FBQzdDLE1BQU0sUUFBUSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE9BQU8sQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVlLGNBQWM7UUFDNUIsSUFBSSxZQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxPQUF3QixDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNsRyxDQUFDO0lBQ0gsQ0FBQztJQUVlLFdBQVc7UUFDekIsTUFBTSxnQkFBZ0IsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRTtZQUMzQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztTQUN2QyxDQUFDLENBQUM7UUFFSCxNQUFNLHdCQUF3QixHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksaUJBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFO1lBQ25ELEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFhO1lBQzVELFVBQVUsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQztJQUNMLENBQUM7O0FBbkZILHdEQW9GQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEpzb25GaWxlLCBUZXh0RmlsZSB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgUHJvamVjdFR5cGVzIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcy9wcm9qZWN0JztcbmltcG9ydCB7IHV0aWwgfSBmcm9tICcuLi8uLi91dGlsL3V0aWxzJztcbmltcG9ydCB7IENvbmZpZ0ZpbGUgfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzL3R5cGVzJztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IERldkNvbnRhaW5lciBjb25maWd1cmF0aW9uLlxuICpcbiAqIFRoaXMgY2xhc3MgYWN0cyBhcyBhIGJhc2UgZm9yIGhhbmRsaW5nIERldkNvbnRhaW5lciBjb25maWd1cmF0aW9uIHdpdGhpbiBwcm9qZWN0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIERldkNvbnRhaW5lckNvbmZpZ0Jhc2UgZXh0ZW5kcyBDb25maWcge1xuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGNvbmZpZ0ZpbGUoKTogQ29uZmlnRmlsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuZGV2Y29udGFpbmVyL2RldmNvbnRhaW5lci5qc29uJzoge1xuICAgICAgICBpbWFnZTogJ21jci5taWNyb3NvZnQuY29tL2RldmNvbnRhaW5lcnMvdHlwZXNjcmlwdC1ub2RlOjEtMjAtYnVsbHNleWUnLFxuICAgICAgICBwb3N0Q3JlYXRlQ29tbWFuZDogJ2Jhc2ggc2NyaXB0cy9pbnN0YWxsLWRlcGVuZGVuY2llcy5zaCcsXG4gICAgICAgIGZlYXR1cmVzOiB7XG4gICAgICAgICAgJ2doY3IuaW8vZGV2Y29udGFpbmVycy1jb250cmliL2ZlYXR1cmVzL2N1cmwtYXB0LWdldCc6ICdsYXRlc3QnLFxuICAgICAgICAgICdnaGNyLmlvL2RldmNvbnRhaW5lcnMvZmVhdHVyZXMvZ2l0aHViLWNsaSc6ICdsYXRlc3QnLFxuICAgICAgICB9LFxuICAgICAgICBjdXN0b21pemF0aW9uczoge1xuICAgICAgICAgIHZzY29kZToge1xuICAgICAgICAgICAgZXh0ZW5zaW9uczogW1xuICAgICAgICAgICAgICAnT3J0YS52c2NvZGUtamVzdCcsXG4gICAgICAgICAgICAgICdmaXJzdHRyaXMudnNjb2RlLWplc3QtcnVubmVyJyxcbiAgICAgICAgICAgICAgJ2h1bWFvLnJlc3QtY2xpZW50JyxcbiAgICAgICAgICAgICAgJ2Fhcm9uLWJvbmQuYmV0dGVyLWNvbW1lbnRzJyxcbiAgICAgICAgICAgICAgJ2FsZWZyYWduYW5pLkJvb2ttYXJrcycsXG4gICAgICAgICAgICAgICdhbGVmcmFnbmFuaS5wcm9qZWN0LW1hbmFnZXInLFxuICAgICAgICAgICAgICAnY2hyaXN0aWFuLWtvaGxlci5ucG0taW50ZWxsaXNlbnNlJyxcbiAgICAgICAgICAgICAgJ21za2VsdG9uLm5wbS1vdXRkYXRlZCcsXG4gICAgICAgICAgICAgICdQS2llZi5tYXRlcmlhbC1pY29uLXRoZW1lJyxcbiAgICAgICAgICAgICAgJ3podWFuZ3RvbmdmYS5tYXRlcmlhbC10aGVtZScsXG4gICAgICAgICAgICAgICdHaXRIdWIuZ2l0aHViLXZzY29kZS10aGVtZScsXG4gICAgICAgICAgICAgICdtcy12c2NvZGUtcmVtb3RlLnJlbW90ZS1jb250YWluZXJzJyxcbiAgICAgICAgICAgICAgJ21pa2VzdGVhZC5kb3RlbnYnLFxuICAgICAgICAgICAgICAndXNlcm5hbWVody5lcnJvcmxlbnMnLFxuICAgICAgICAgICAgICAnZGJhZXVtZXIudnNjb2RlLWVzbGludCcsXG4gICAgICAgICAgICAgICdvZGVyd2F0LmluZGVudC1yYWluYm93JyxcbiAgICAgICAgICAgICAgJ2VzYmVucC5wcmV0dGllci12c2NvZGUnLFxuICAgICAgICAgICAgICAnWW9hdkJscy5wcmV0dHktdHMtZXJyb3JzJyxcbiAgICAgICAgICAgICAgJ3N0cmVldHNpZGVzb2Z0d2FyZS5jb2RlLXNwZWxsLWNoZWNrZXInLFxuICAgICAgICAgICAgICAnd2F5b3UudnNjb2RlLXRvZG8taGlnaGxpZ2h0JyxcbiAgICAgICAgICAgICAgJ21pa2UtY28uaW1wb3J0LXNvcnRlcicsXG4gICAgICAgICAgICAgICdWaXN1YWxTdHVkaW9FeHB0VGVhbS52c2NvZGVpbnRlbGxpY29kZScsXG4gICAgICAgICAgICAgICdyZWRoYXQudnNjb2RlLXlhbWwnLFxuICAgICAgICAgICAgICAnRG90Sm9zaEpvaG5zb24ueG1sJyxcbiAgICAgICAgICAgICAgJ3dhZGVyeWFuLmdpdGJsYW1lJyxcbiAgICAgICAgICAgICAgJ2RvbmpheWFtYW5uZS5naXRoaXN0b3J5JyxcbiAgICAgICAgICAgICAgJ0dpdEh1Yi52c2NvZGUtcHVsbC1yZXF1ZXN0LWdpdGh1YicsXG4gICAgICAgICAgICAgICd5emhhbmcubWFya2Rvd24tYWxsLWluLW9uZScsXG4gICAgICAgICAgICAgICdEYXZpZEFuc29uLnZzY29kZS1tYXJrZG93bmxpbnQnLFxuICAgICAgICAgICAgICAnYmllcm5lci5qc2RvYy1tYXJrZG93bi1oaWdobGlnaHRpbmcnLFxuICAgICAgICAgICAgICAnVmlzdWFsU3R1ZGlvRXhwdFRlYW0udnNjb2RlaW50ZWxsaWNvZGUnLFxuICAgICAgICAgICAgICAnY2hyaXN0aWFuLWtvaGxlci5wYXRoLWludGVsbGlzZW5zZScsXG4gICAgICAgICAgICAgICdBeWt1dFNhcmFjLmpzb25jcmFjay12c2NvZGUnLFxuICAgICAgICAgICAgICAndGFtYXNmZS5ldmVuLWJldHRlci10b21sJyxcbiAgICAgICAgICAgICAgJ2dpdGh1Yi5jb3BpbG90JyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAnLmRldmNvbnRhaW5lci9zY3JpcHRzL2luc3RhbGwtZGVwZW5kZW5jaWVzLnNoJzogW1xuICAgICAgICAnIyEvYmluL2Jhc2gnLFxuICAgICAgICAnc2V0IC1lICMgRXhpdCBvbiBlcnJvcicsXG4gICAgICAgICdzZXQgLXggIyBQcmludCBjb21tYW5kcyBmb3IgZGVidWdnaW5nJyxcbiAgICAgICAgJ25wbSBpbnN0YWxsJyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlKVswXTtcbiAgICByZXR1cm4gW2AvJHtmaWxlUGF0aH1gXTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSByZWdpc3RlckNvbmZpZygpOiB2b2lkIHtcbiAgICBpZiAodXRpbC5pc1ZhbGlkUHJvamVjdCh0aGlzLnByb2plY3QpKSB7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykucHJldHRpZXJDb25maWc/LmFkZElnbm9yZVBhdHRlcm5zKHRoaXMuYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgYXBwbHlDb25maWcoKTogdm9pZCB7XG4gICAgY29uc3QgZGV2Q29udGFpbmVySnNvbjogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlKVswXTtcbiAgICBuZXcgSnNvbkZpbGUodGhpcy5wcm9qZWN0LCBkZXZDb250YWluZXJKc29uLCB7XG4gICAgICBvYmo6IHRoaXMuY29uZmlnRmlsZVtkZXZDb250YWluZXJKc29uXSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGRldkNvbnRhaW5lckRlcGVuZGVuY2llczogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlKVsxXTtcbiAgICBuZXcgVGV4dEZpbGUodGhpcy5wcm9qZWN0LCBkZXZDb250YWluZXJEZXBlbmRlbmNpZXMsIHtcbiAgICAgIGxpbmVzOiB0aGlzLmNvbmZpZ0ZpbGVbZGV2Q29udGFpbmVyRGVwZW5kZW5jaWVzXSBhcyBzdHJpbmdbXSxcbiAgICAgIGV4ZWN1dGFibGU6IHRydWUsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapServiceProject = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../base");
const constants_1 = require("../util/constants");
const commitlint_1 = require("./config/commitlint");
const devcontainer_1 = require("./config/devcontainer");
const eslint_1 = require("./config/eslint");
const git_1 = require("./config/git");
const github_1 = require("./config/github");
const husky_1 = require("./config/husky");
const jest_1 = require("./config/jest");
const npm_1 = require("./config/npm");
const prettier_1 = require("./config/prettier");
const samplecode_1 = require("./config/samplecode");
const typescript_1 = require("./config/typescript");
const vscode_1 = require("./config/vscode");
/**
 * Base class for managing project CapService configuration.
 */
class CapServiceProject extends base_1.BaseProject {
    /**
     * Initializes the project.
     * @param options Additional project options.
     */
    constructor(options) {
        const updatedOptions = {
            ...options,
            commitlintEnabled: options.commitlintEnabled ?? true,
            devContainerEnabled: options.devContainerEnabled ?? true,
            eslintEnabled: options.eslintEnabled ?? true,
            githubEnabled: options.githubEnabled ?? true,
            huskyEnabled: options.huskyEnabled ?? true,
            jestEnabled: options.jestEnabled ?? true,
            prettierEnabled: options.prettierEnabled ?? true,
            vscodeEnabled: options.vscodeEnabled ?? true,
            sampleCodeEnabled: options.sampleCodeEnabled ?? true,
            typescriptEnabled: true,
            name: options.name,
            namespace: options.namespace ?? constants_1.constants.PROJECT_NAMESPACE,
            description: options.description ?? constants_1.constants.PROJECT_DESCRIPTION,
            entityName: options.entityName ?? constants_1.constants.ENTITY_NAME,
        };
        super({
            ...base_1.BaseOptions.sharedOptions(updatedOptions),
        });
        this.gitConfig = new git_1.GitConfigCapService(this);
        this.npmConfig = new npm_1.NpmConfigCapService(this);
        this.typescriptConfig = new typescript_1.TypeScriptConfigCapService(this);
        if (updatedOptions.commitlintEnabled) {
            this.commitlintConfig = new commitlint_1.CommitLintConfigCapService(this);
        }
        if (updatedOptions.devContainerEnabled) {
            this.devContainerConfig = new devcontainer_1.DevContainerConfigCapService(this);
        }
        if (updatedOptions.eslintEnabled) {
            this.eslintConfig = new eslint_1.EsLintConfigCapService(this);
        }
        if (updatedOptions.jestEnabled) {
            this.jestConfig = new jest_1.JestConfigCapService(this);
        }
        if (updatedOptions.githubEnabled) {
            this.githubConfig = new github_1.GitHubConfigCapService(this);
        }
        if (updatedOptions.prettierEnabled) {
            this.prettierConfig = new prettier_1.PrettierConfigCapService(this);
        }
        if (updatedOptions.vscodeEnabled) {
            this.vscodeConfig = new vscode_1.VsCodeConfigCapService(this);
        }
        if (updatedOptions.huskyEnabled) {
            this.huskyConfig = new husky_1.HuskyConfigCapService(this);
        }
        if (updatedOptions.sampleCodeEnabled) {
            this.sampleCodeConfig = new samplecode_1.SampleCodeConfigCapService(this, updatedOptions);
        }
    }
    initializeBaseConfigs(options) {
        super.initializeBaseConfigs(options);
    }
}
exports.CapServiceProject = CapServiceProject;
_a = JSII_RTTI_SYMBOL_1;
CapServiceProject[_a] = { fqn: "@dxfrontier/projen-template-projects.CapServiceProject", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYXAtc2VydmljZS9wcm9qZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQXVFO0FBQ3ZFLGlEQUE4QztBQUM5QyxvREFBaUU7QUFDakUsd0RBQXFFO0FBQ3JFLDRDQUF5RDtBQUN6RCxzQ0FBbUQ7QUFDbkQsNENBQXlEO0FBQ3pELDBDQUF1RDtBQUN2RCx3Q0FBcUQ7QUFDckQsc0NBQW1EO0FBQ25ELGdEQUE2RDtBQUM3RCxvREFBaUU7QUFDakUsb0RBQWlFO0FBQ2pFLDRDQUF5RDtBQU96RDs7R0FFRztBQUNILE1BQWEsaUJBQWtCLFNBQVEsa0JBQVc7SUFDaEQ7OztPQUdHO0lBQ0gsWUFBWSxPQUFpQztRQUMzQyxNQUFNLGNBQWMsR0FBRztZQUNyQixHQUFHLE9BQU87WUFDVixpQkFBaUIsRUFBRSxPQUFPLENBQUMsaUJBQWlCLElBQUksSUFBSTtZQUNwRCxtQkFBbUIsRUFBRSxPQUFPLENBQUMsbUJBQW1CLElBQUksSUFBSTtZQUN4RCxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJO1lBQzVDLGFBQWEsRUFBRSxPQUFPLENBQUMsYUFBYSxJQUFJLElBQUk7WUFDNUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZQUFZLElBQUksSUFBSTtZQUMxQyxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsSUFBSSxJQUFJO1lBQ3hDLGVBQWUsRUFBRSxPQUFPLENBQUMsZUFBZSxJQUFJLElBQUk7WUFDaEQsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSTtZQUM1QyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsaUJBQWlCLElBQUksSUFBSTtZQUNwRCxpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNsQixTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsSUFBSSxxQkFBUyxDQUFDLGlCQUFpQjtZQUMzRCxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsSUFBSSxxQkFBUyxDQUFDLG1CQUFtQjtZQUNqRSxVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVUsSUFBSSxxQkFBUyxDQUFDLFdBQVc7U0FDeEQsQ0FBQztRQUNGLEtBQUssQ0FBQztZQUNKLEdBQUcsa0JBQVcsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDO1NBQzdDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSx5QkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUkseUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksdUNBQTBCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFN0QsSUFBSSxjQUFjLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSx1Q0FBMEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRCxDQUFDO1FBQ0QsSUFBSSxjQUFjLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUN2QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSwyQ0FBNEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRSxDQUFDO1FBQ0QsSUFBSSxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLCtCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFDRCxJQUFJLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksMkJBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUNELElBQUksY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSwrQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RCxDQUFDO1FBQ0QsSUFBSSxjQUFjLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLG1DQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNELENBQUM7UUFDRCxJQUFJLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksK0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUNELElBQUksY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSw2QkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBQ0QsSUFBSSxjQUFjLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSx1Q0FBMEIsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDL0UsQ0FBQztJQUNILENBQUM7SUFFa0IscUJBQXFCLENBQUMsT0FBMkI7UUFDbEUsS0FBSyxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7O0FBOURILDhDQStEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VQcm9qZWN0T3B0aW9ucywgQmFzZVByb2plY3QsIEJhc2VPcHRpb25zIH0gZnJvbSAnLi4vYmFzZSc7XG5pbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tICcuLi91dGlsL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBDb21taXRMaW50Q29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2NvbW1pdGxpbnQnO1xuaW1wb3J0IHsgRGV2Q29udGFpbmVyQ29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2RldmNvbnRhaW5lcic7XG5pbXBvcnQgeyBFc0xpbnRDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvZXNsaW50JztcbmltcG9ydCB7IEdpdENvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9naXQnO1xuaW1wb3J0IHsgR2l0SHViQ29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2dpdGh1Yic7XG5pbXBvcnQgeyBIdXNreUNvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9odXNreSc7XG5pbXBvcnQgeyBKZXN0Q29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2plc3QnO1xuaW1wb3J0IHsgTnBtQ29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL25wbSc7XG5pbXBvcnQgeyBQcmV0dGllckNvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9wcmV0dGllcic7XG5pbXBvcnQgeyBTYW1wbGVDb2RlQ29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL3NhbXBsZWNvZGUnO1xuaW1wb3J0IHsgVHlwZVNjcmlwdENvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy90eXBlc2NyaXB0JztcbmltcG9ydCB7IFZzQ29kZUNvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy92c2NvZGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcFNlcnZpY2VQcm9qZWN0T3B0aW9ucyBleHRlbmRzIEJhc2VQcm9qZWN0T3B0aW9ucyB7XG4gIHJlYWRvbmx5IG5hbWVzcGFjZT86IHN0cmluZztcbiAgcmVhZG9ubHkgZW50aXR5TmFtZT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBtYW5hZ2luZyBwcm9qZWN0IENhcFNlcnZpY2UgY29uZmlndXJhdGlvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIENhcFNlcnZpY2VQcm9qZWN0IGV4dGVuZHMgQmFzZVByb2plY3Qge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIHByb2plY3QuXG4gICAqIEBwYXJhbSBvcHRpb25zIEFkZGl0aW9uYWwgcHJvamVjdCBvcHRpb25zLlxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9uczogQ2FwU2VydmljZVByb2plY3RPcHRpb25zKSB7XG4gICAgY29uc3QgdXBkYXRlZE9wdGlvbnMgPSB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgY29tbWl0bGludEVuYWJsZWQ6IG9wdGlvbnMuY29tbWl0bGludEVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIGRldkNvbnRhaW5lckVuYWJsZWQ6IG9wdGlvbnMuZGV2Q29udGFpbmVyRW5hYmxlZCA/PyB0cnVlLFxuICAgICAgZXNsaW50RW5hYmxlZDogb3B0aW9ucy5lc2xpbnRFbmFibGVkID8/IHRydWUsXG4gICAgICBnaXRodWJFbmFibGVkOiBvcHRpb25zLmdpdGh1YkVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIGh1c2t5RW5hYmxlZDogb3B0aW9ucy5odXNreUVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIGplc3RFbmFibGVkOiBvcHRpb25zLmplc3RFbmFibGVkID8/IHRydWUsXG4gICAgICBwcmV0dGllckVuYWJsZWQ6IG9wdGlvbnMucHJldHRpZXJFbmFibGVkID8/IHRydWUsXG4gICAgICB2c2NvZGVFbmFibGVkOiBvcHRpb25zLnZzY29kZUVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIHNhbXBsZUNvZGVFbmFibGVkOiBvcHRpb25zLnNhbXBsZUNvZGVFbmFibGVkID8/IHRydWUsXG4gICAgICB0eXBlc2NyaXB0RW5hYmxlZDogdHJ1ZSxcbiAgICAgIG5hbWU6IG9wdGlvbnMubmFtZSxcbiAgICAgIG5hbWVzcGFjZTogb3B0aW9ucy5uYW1lc3BhY2UgPz8gY29uc3RhbnRzLlBST0pFQ1RfTkFNRVNQQUNFLFxuICAgICAgZGVzY3JpcHRpb246IG9wdGlvbnMuZGVzY3JpcHRpb24gPz8gY29uc3RhbnRzLlBST0pFQ1RfREVTQ1JJUFRJT04sXG4gICAgICBlbnRpdHlOYW1lOiBvcHRpb25zLmVudGl0eU5hbWUgPz8gY29uc3RhbnRzLkVOVElUWV9OQU1FLFxuICAgIH07XG4gICAgc3VwZXIoe1xuICAgICAgLi4uQmFzZU9wdGlvbnMuc2hhcmVkT3B0aW9ucyh1cGRhdGVkT3B0aW9ucyksXG4gICAgfSk7XG5cbiAgICB0aGlzLmdpdENvbmZpZyA9IG5ldyBHaXRDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIHRoaXMubnBtQ29uZmlnID0gbmV3IE5wbUNvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgdGhpcy50eXBlc2NyaXB0Q29uZmlnID0gbmV3IFR5cGVTY3JpcHRDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuXG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLmNvbW1pdGxpbnRFbmFibGVkKSB7XG4gICAgICB0aGlzLmNvbW1pdGxpbnRDb25maWcgPSBuZXcgQ29tbWl0TGludENvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5kZXZDb250YWluZXJFbmFibGVkKSB7XG4gICAgICB0aGlzLmRldkNvbnRhaW5lckNvbmZpZyA9IG5ldyBEZXZDb250YWluZXJDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuZXNsaW50RW5hYmxlZCkge1xuICAgICAgdGhpcy5lc2xpbnRDb25maWcgPSBuZXcgRXNMaW50Q29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLmplc3RFbmFibGVkKSB7XG4gICAgICB0aGlzLmplc3RDb25maWcgPSBuZXcgSmVzdENvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5naXRodWJFbmFibGVkKSB7XG4gICAgICB0aGlzLmdpdGh1YkNvbmZpZyA9IG5ldyBHaXRIdWJDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMucHJldHRpZXJFbmFibGVkKSB7XG4gICAgICB0aGlzLnByZXR0aWVyQ29uZmlnID0gbmV3IFByZXR0aWVyQ29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLnZzY29kZUVuYWJsZWQpIHtcbiAgICAgIHRoaXMudnNjb2RlQ29uZmlnID0gbmV3IFZzQ29kZUNvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5odXNreUVuYWJsZWQpIHtcbiAgICAgIHRoaXMuaHVza3lDb25maWcgPSBuZXcgSHVza3lDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuc2FtcGxlQ29kZUVuYWJsZWQpIHtcbiAgICAgIHRoaXMuc2FtcGxlQ29kZUNvbmZpZyA9IG5ldyBTYW1wbGVDb2RlQ29uZmlnQ2FwU2VydmljZSh0aGlzLCB1cGRhdGVkT3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGluaXRpYWxpemVCYXNlQ29uZmlncyhvcHRpb25zOiBCYXNlUHJvamVjdE9wdGlvbnMpOiB2b2lkIHtcbiAgICBzdXBlci5pbml0aWFsaXplQmFzZUNvbmZpZ3Mob3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==
"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapServiceProject = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../base");
const constants_1 = require("../util/constants");
const utils_1 = require("../util/utils");
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
const readme_1 = require("./config/readme");
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
            readme: new readme_1.ReadmeConfigCapService().getReadme(options), // special case
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
    postSynthesize() {
        super.postSynthesize();
        utils_1.util.setupExitHandler();
    }
}
exports.CapServiceProject = CapServiceProject;
_a = JSII_RTTI_SYMBOL_1;
CapServiceProject[_a] = { fqn: "@dxfrontier/projen-template-projects.CapServiceProject", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYXAtc2VydmljZS9wcm9qZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQXVFO0FBQ3ZFLGlEQUE4QztBQUM5Qyx5Q0FBcUM7QUFDckMsb0RBQWlFO0FBQ2pFLHdEQUFxRTtBQUNyRSw0Q0FBeUQ7QUFDekQsc0NBQW1EO0FBQ25ELDRDQUF5RDtBQUN6RCwwQ0FBdUQ7QUFDdkQsd0NBQXFEO0FBQ3JELHNDQUFtRDtBQUNuRCxnREFBNkQ7QUFDN0Qsb0RBQWlFO0FBQ2pFLG9EQUFpRTtBQUNqRSw0Q0FBeUQ7QUFDekQsNENBQXlEO0FBT3pEOztHQUVHO0FBQ0gsTUFBYSxpQkFBa0IsU0FBUSxrQkFBVztJQUNoRDs7O09BR0c7SUFDSCxZQUFZLE9BQWlDO1FBQzNDLE1BQU0sY0FBYyxHQUFHO1lBQ3JCLEdBQUcsT0FBTztZQUNWLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsSUFBSSxJQUFJO1lBQ3BELG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxtQkFBbUIsSUFBSSxJQUFJO1lBQ3hELGFBQWEsRUFBRSxPQUFPLENBQUMsYUFBYSxJQUFJLElBQUk7WUFDNUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSTtZQUM1QyxZQUFZLEVBQUUsT0FBTyxDQUFDLFlBQVksSUFBSSxJQUFJO1lBQzFDLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVyxJQUFJLElBQUk7WUFDeEMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxlQUFlLElBQUksSUFBSTtZQUNoRCxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJO1lBQzVDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsSUFBSSxJQUFJO1lBQ3BELGlCQUFpQixFQUFFLElBQUk7WUFDdkIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ2xCLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUyxJQUFJLHFCQUFTLENBQUMsaUJBQWlCO1lBQzNELFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVyxJQUFJLHFCQUFTLENBQUMsbUJBQW1CO1lBQ2pFLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVSxJQUFJLHFCQUFTLENBQUMsV0FBVztZQUN2RCxNQUFNLEVBQUUsSUFBSSwrQkFBc0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxlQUFlO1NBQ3pFLENBQUM7UUFDRixLQUFLLENBQUM7WUFDSixHQUFHLGtCQUFXLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztTQUM3QyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUkseUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHlCQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLHVDQUEwQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTdELElBQUksY0FBYyxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksdUNBQTBCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0QsQ0FBQztRQUNELElBQUksY0FBYyxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksMkNBQTRCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkUsQ0FBQztRQUNELElBQUksY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSwrQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RCxDQUFDO1FBQ0QsSUFBSSxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLDJCQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELENBQUM7UUFDRCxJQUFJLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksK0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUNELElBQUksY0FBYyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxtQ0FBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzRCxDQUFDO1FBQ0QsSUFBSSxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLCtCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFDRCxJQUFJLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksNkJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckQsQ0FBQztRQUNELElBQUksY0FBYyxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksdUNBQTBCLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQy9FLENBQUM7SUFDSCxDQUFDO0lBRWtCLHFCQUFxQixDQUFDLE9BQTJCO1FBQ2xFLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRWUsY0FBYztRQUM1QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdkIsWUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQzs7QUFyRUgsOENBc0VDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZVByb2plY3RPcHRpb25zLCBCYXNlUHJvamVjdCwgQmFzZU9wdGlvbnMgfSBmcm9tICcuLi9iYXNlJztcbmltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gJy4uL3V0aWwvY29uc3RhbnRzJztcbmltcG9ydCB7IHV0aWwgfSBmcm9tICcuLi91dGlsL3V0aWxzJztcbmltcG9ydCB7IENvbW1pdExpbnRDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvY29tbWl0bGludCc7XG5pbXBvcnQgeyBEZXZDb250YWluZXJDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvZGV2Y29udGFpbmVyJztcbmltcG9ydCB7IEVzTGludENvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9lc2xpbnQnO1xuaW1wb3J0IHsgR2l0Q29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2dpdCc7XG5pbXBvcnQgeyBHaXRIdWJDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvZ2l0aHViJztcbmltcG9ydCB7IEh1c2t5Q29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2h1c2t5JztcbmltcG9ydCB7IEplc3RDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvamVzdCc7XG5pbXBvcnQgeyBOcG1Db25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvbnBtJztcbmltcG9ydCB7IFByZXR0aWVyQ29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL3ByZXR0aWVyJztcbmltcG9ydCB7IFNhbXBsZUNvZGVDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvc2FtcGxlY29kZSc7XG5pbXBvcnQgeyBUeXBlU2NyaXB0Q29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL3R5cGVzY3JpcHQnO1xuaW1wb3J0IHsgVnNDb2RlQ29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL3ZzY29kZSc7XG5pbXBvcnQgeyBSZWFkbWVDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvcmVhZG1lJztcblxuZXhwb3J0IGludGVyZmFjZSBDYXBTZXJ2aWNlUHJvamVjdE9wdGlvbnMgZXh0ZW5kcyBCYXNlUHJvamVjdE9wdGlvbnMge1xuICByZWFkb25seSBuYW1lc3BhY2U/OiBzdHJpbmc7XG4gIHJlYWRvbmx5IGVudGl0eU5hbWU/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgbWFuYWdpbmcgcHJvamVjdCBDYXBTZXJ2aWNlIGNvbmZpZ3VyYXRpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBDYXBTZXJ2aWNlUHJvamVjdCBleHRlbmRzIEJhc2VQcm9qZWN0IHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBwcm9qZWN0LlxuICAgKiBAcGFyYW0gb3B0aW9ucyBBZGRpdGlvbmFsIHByb2plY3Qgb3B0aW9ucy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IENhcFNlcnZpY2VQcm9qZWN0T3B0aW9ucykge1xuICAgIGNvbnN0IHVwZGF0ZWRPcHRpb25zID0ge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIGNvbW1pdGxpbnRFbmFibGVkOiBvcHRpb25zLmNvbW1pdGxpbnRFbmFibGVkID8/IHRydWUsXG4gICAgICBkZXZDb250YWluZXJFbmFibGVkOiBvcHRpb25zLmRldkNvbnRhaW5lckVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIGVzbGludEVuYWJsZWQ6IG9wdGlvbnMuZXNsaW50RW5hYmxlZCA/PyB0cnVlLFxuICAgICAgZ2l0aHViRW5hYmxlZDogb3B0aW9ucy5naXRodWJFbmFibGVkID8/IHRydWUsXG4gICAgICBodXNreUVuYWJsZWQ6IG9wdGlvbnMuaHVza3lFbmFibGVkID8/IHRydWUsXG4gICAgICBqZXN0RW5hYmxlZDogb3B0aW9ucy5qZXN0RW5hYmxlZCA/PyB0cnVlLFxuICAgICAgcHJldHRpZXJFbmFibGVkOiBvcHRpb25zLnByZXR0aWVyRW5hYmxlZCA/PyB0cnVlLFxuICAgICAgdnNjb2RlRW5hYmxlZDogb3B0aW9ucy52c2NvZGVFbmFibGVkID8/IHRydWUsXG4gICAgICBzYW1wbGVDb2RlRW5hYmxlZDogb3B0aW9ucy5zYW1wbGVDb2RlRW5hYmxlZCA/PyB0cnVlLFxuICAgICAgdHlwZXNjcmlwdEVuYWJsZWQ6IHRydWUsXG4gICAgICBuYW1lOiBvcHRpb25zLm5hbWUsXG4gICAgICBuYW1lc3BhY2U6IG9wdGlvbnMubmFtZXNwYWNlID8/IGNvbnN0YW50cy5QUk9KRUNUX05BTUVTUEFDRSxcbiAgICAgIGRlc2NyaXB0aW9uOiBvcHRpb25zLmRlc2NyaXB0aW9uID8/IGNvbnN0YW50cy5QUk9KRUNUX0RFU0NSSVBUSU9OLFxuICAgICAgZW50aXR5TmFtZTogb3B0aW9ucy5lbnRpdHlOYW1lID8/IGNvbnN0YW50cy5FTlRJVFlfTkFNRSxcbiAgICAgIHJlYWRtZTogbmV3IFJlYWRtZUNvbmZpZ0NhcFNlcnZpY2UoKS5nZXRSZWFkbWUob3B0aW9ucyksIC8vIHNwZWNpYWwgY2FzZVxuICAgIH07XG4gICAgc3VwZXIoe1xuICAgICAgLi4uQmFzZU9wdGlvbnMuc2hhcmVkT3B0aW9ucyh1cGRhdGVkT3B0aW9ucyksXG4gICAgfSk7XG5cbiAgICB0aGlzLmdpdENvbmZpZyA9IG5ldyBHaXRDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIHRoaXMubnBtQ29uZmlnID0gbmV3IE5wbUNvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgdGhpcy50eXBlc2NyaXB0Q29uZmlnID0gbmV3IFR5cGVTY3JpcHRDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuXG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLmNvbW1pdGxpbnRFbmFibGVkKSB7XG4gICAgICB0aGlzLmNvbW1pdGxpbnRDb25maWcgPSBuZXcgQ29tbWl0TGludENvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5kZXZDb250YWluZXJFbmFibGVkKSB7XG4gICAgICB0aGlzLmRldkNvbnRhaW5lckNvbmZpZyA9IG5ldyBEZXZDb250YWluZXJDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuZXNsaW50RW5hYmxlZCkge1xuICAgICAgdGhpcy5lc2xpbnRDb25maWcgPSBuZXcgRXNMaW50Q29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLmplc3RFbmFibGVkKSB7XG4gICAgICB0aGlzLmplc3RDb25maWcgPSBuZXcgSmVzdENvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5naXRodWJFbmFibGVkKSB7XG4gICAgICB0aGlzLmdpdGh1YkNvbmZpZyA9IG5ldyBHaXRIdWJDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMucHJldHRpZXJFbmFibGVkKSB7XG4gICAgICB0aGlzLnByZXR0aWVyQ29uZmlnID0gbmV3IFByZXR0aWVyQ29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLnZzY29kZUVuYWJsZWQpIHtcbiAgICAgIHRoaXMudnNjb2RlQ29uZmlnID0gbmV3IFZzQ29kZUNvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5odXNreUVuYWJsZWQpIHtcbiAgICAgIHRoaXMuaHVza3lDb25maWcgPSBuZXcgSHVza3lDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuc2FtcGxlQ29kZUVuYWJsZWQpIHtcbiAgICAgIHRoaXMuc2FtcGxlQ29kZUNvbmZpZyA9IG5ldyBTYW1wbGVDb2RlQ29uZmlnQ2FwU2VydmljZSh0aGlzLCB1cGRhdGVkT3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGluaXRpYWxpemVCYXNlQ29uZmlncyhvcHRpb25zOiBCYXNlUHJvamVjdE9wdGlvbnMpOiB2b2lkIHtcbiAgICBzdXBlci5pbml0aWFsaXplQmFzZUNvbmZpZ3Mob3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcG9zdFN5bnRoZXNpemUoKTogdm9pZCB7XG4gICAgc3VwZXIucG9zdFN5bnRoZXNpemUoKTtcblxuICAgIHV0aWwuc2V0dXBFeGl0SGFuZGxlcigpO1xuICB9XG59XG4iXX0=
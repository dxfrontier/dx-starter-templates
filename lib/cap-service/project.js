"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapServiceProject = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../base");
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
const typescript_1 = require("./typescript");
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
            namespace: options.namespace ?? 'de.customer.org.project',
            description: options.description ?? 'SAP CAP Project',
            entityName: options.entityName ?? 'Entity1',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYXAtc2VydmljZS9wcm9qZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQXVFO0FBQ3ZFLG9EQUFpRTtBQUNqRSx3REFBcUU7QUFDckUsNENBQXlEO0FBQ3pELHNDQUFtRDtBQUNuRCw0Q0FBeUQ7QUFDekQsMENBQXVEO0FBQ3ZELHdDQUFxRDtBQUNyRCxzQ0FBbUQ7QUFDbkQsZ0RBQTZEO0FBQzdELG9EQUFpRTtBQUNqRSw2Q0FBMEQ7QUFDMUQsNENBQXlEO0FBT3pEOztHQUVHO0FBQ0gsTUFBYSxpQkFBa0IsU0FBUSxrQkFBVztJQUNoRDs7O09BR0c7SUFDSCxZQUFZLE9BQWlDO1FBQzNDLE1BQU0sY0FBYyxHQUFHO1lBQ3JCLEdBQUcsT0FBTztZQUNWLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsSUFBSSxJQUFJO1lBQ3BELG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxtQkFBbUIsSUFBSSxJQUFJO1lBQ3hELGFBQWEsRUFBRSxPQUFPLENBQUMsYUFBYSxJQUFJLElBQUk7WUFDNUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSTtZQUM1QyxZQUFZLEVBQUUsT0FBTyxDQUFDLFlBQVksSUFBSSxJQUFJO1lBQzFDLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVyxJQUFJLElBQUk7WUFDeEMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxlQUFlLElBQUksSUFBSTtZQUNoRCxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJO1lBQzVDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsSUFBSSxJQUFJO1lBQ3BELGlCQUFpQixFQUFFLElBQUk7WUFDdkIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ2xCLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUyxJQUFJLHlCQUF5QjtZQUN6RCxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsSUFBSSxpQkFBaUI7WUFDckQsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVLElBQUksU0FBUztTQUM1QyxDQUFDO1FBQ0YsS0FBSyxDQUFDO1lBQ0osR0FBRyxrQkFBVyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUM7U0FDN0MsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHlCQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSx5QkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSx1Q0FBMEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3RCxJQUFJLGNBQWMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLHVDQUEwQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9ELENBQUM7UUFDRCxJQUFJLGNBQWMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLDJDQUE0QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25FLENBQUM7UUFDRCxJQUFJLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksK0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUNELElBQUksY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSwyQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBQ0QsSUFBSSxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLCtCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFDRCxJQUFJLGNBQWMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksbUNBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0QsQ0FBQztRQUNELElBQUksY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSwrQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RCxDQUFDO1FBQ0QsSUFBSSxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLDZCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFDRCxJQUFJLGNBQWMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLHVDQUEwQixDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQztRQUMvRSxDQUFDO0lBQ0gsQ0FBQztJQUVrQixxQkFBcUIsQ0FBQyxPQUEyQjtRQUNsRSxLQUFLLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7QUE5REgsOENBK0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZVByb2plY3RPcHRpb25zLCBCYXNlUHJvamVjdCwgQmFzZU9wdGlvbnMgfSBmcm9tICcuLi9iYXNlJztcbmltcG9ydCB7IENvbW1pdExpbnRDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvY29tbWl0bGludCc7XG5pbXBvcnQgeyBEZXZDb250YWluZXJDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvZGV2Y29udGFpbmVyJztcbmltcG9ydCB7IEVzTGludENvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9lc2xpbnQnO1xuaW1wb3J0IHsgR2l0Q29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2dpdCc7XG5pbXBvcnQgeyBHaXRIdWJDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvZ2l0aHViJztcbmltcG9ydCB7IEh1c2t5Q29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2h1c2t5JztcbmltcG9ydCB7IEplc3RDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvamVzdCc7XG5pbXBvcnQgeyBOcG1Db25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvbnBtJztcbmltcG9ydCB7IFByZXR0aWVyQ29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL3ByZXR0aWVyJztcbmltcG9ydCB7IFNhbXBsZUNvZGVDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvc2FtcGxlY29kZSc7XG5pbXBvcnQgeyBUeXBlU2NyaXB0Q29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyBWc0NvZGVDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvdnNjb2RlJztcblxuZXhwb3J0IGludGVyZmFjZSBDYXBTZXJ2aWNlUHJvamVjdE9wdGlvbnMgZXh0ZW5kcyBCYXNlUHJvamVjdE9wdGlvbnMge1xuICByZWFkb25seSBuYW1lc3BhY2U/OiBzdHJpbmc7XG4gIHJlYWRvbmx5IGVudGl0eU5hbWU/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgbWFuYWdpbmcgcHJvamVjdCBDYXBTZXJ2aWNlIGNvbmZpZ3VyYXRpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBDYXBTZXJ2aWNlUHJvamVjdCBleHRlbmRzIEJhc2VQcm9qZWN0IHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBwcm9qZWN0LlxuICAgKiBAcGFyYW0gb3B0aW9ucyBBZGRpdGlvbmFsIHByb2plY3Qgb3B0aW9ucy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IENhcFNlcnZpY2VQcm9qZWN0T3B0aW9ucykge1xuICAgIGNvbnN0IHVwZGF0ZWRPcHRpb25zID0ge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIGNvbW1pdGxpbnRFbmFibGVkOiBvcHRpb25zLmNvbW1pdGxpbnRFbmFibGVkID8/IHRydWUsXG4gICAgICBkZXZDb250YWluZXJFbmFibGVkOiBvcHRpb25zLmRldkNvbnRhaW5lckVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIGVzbGludEVuYWJsZWQ6IG9wdGlvbnMuZXNsaW50RW5hYmxlZCA/PyB0cnVlLFxuICAgICAgZ2l0aHViRW5hYmxlZDogb3B0aW9ucy5naXRodWJFbmFibGVkID8/IHRydWUsXG4gICAgICBodXNreUVuYWJsZWQ6IG9wdGlvbnMuaHVza3lFbmFibGVkID8/IHRydWUsXG4gICAgICBqZXN0RW5hYmxlZDogb3B0aW9ucy5qZXN0RW5hYmxlZCA/PyB0cnVlLFxuICAgICAgcHJldHRpZXJFbmFibGVkOiBvcHRpb25zLnByZXR0aWVyRW5hYmxlZCA/PyB0cnVlLFxuICAgICAgdnNjb2RlRW5hYmxlZDogb3B0aW9ucy52c2NvZGVFbmFibGVkID8/IHRydWUsXG4gICAgICBzYW1wbGVDb2RlRW5hYmxlZDogb3B0aW9ucy5zYW1wbGVDb2RlRW5hYmxlZCA/PyB0cnVlLFxuICAgICAgdHlwZXNjcmlwdEVuYWJsZWQ6IHRydWUsXG4gICAgICBuYW1lOiBvcHRpb25zLm5hbWUsXG4gICAgICBuYW1lc3BhY2U6IG9wdGlvbnMubmFtZXNwYWNlID8/ICdkZS5jdXN0b21lci5vcmcucHJvamVjdCcsXG4gICAgICBkZXNjcmlwdGlvbjogb3B0aW9ucy5kZXNjcmlwdGlvbiA/PyAnU0FQIENBUCBQcm9qZWN0JyxcbiAgICAgIGVudGl0eU5hbWU6IG9wdGlvbnMuZW50aXR5TmFtZSA/PyAnRW50aXR5MScsXG4gICAgfTtcbiAgICBzdXBlcih7XG4gICAgICAuLi5CYXNlT3B0aW9ucy5zaGFyZWRPcHRpb25zKHVwZGF0ZWRPcHRpb25zKSxcbiAgICB9KTtcblxuICAgIHRoaXMuZ2l0Q29uZmlnID0gbmV3IEdpdENvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgdGhpcy5ucG1Db25maWcgPSBuZXcgTnBtQ29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB0aGlzLnR5cGVzY3JpcHRDb25maWcgPSBuZXcgVHlwZVNjcmlwdENvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG5cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuY29tbWl0bGludEVuYWJsZWQpIHtcbiAgICAgIHRoaXMuY29tbWl0bGludENvbmZpZyA9IG5ldyBDb21taXRMaW50Q29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLmRldkNvbnRhaW5lckVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZGV2Q29udGFpbmVyQ29uZmlnID0gbmV3IERldkNvbnRhaW5lckNvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5lc2xpbnRFbmFibGVkKSB7XG4gICAgICB0aGlzLmVzbGludENvbmZpZyA9IG5ldyBFc0xpbnRDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuamVzdEVuYWJsZWQpIHtcbiAgICAgIHRoaXMuamVzdENvbmZpZyA9IG5ldyBKZXN0Q29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLmdpdGh1YkVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZ2l0aHViQ29uZmlnID0gbmV3IEdpdEh1YkNvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5wcmV0dGllckVuYWJsZWQpIHtcbiAgICAgIHRoaXMucHJldHRpZXJDb25maWcgPSBuZXcgUHJldHRpZXJDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMudnNjb2RlRW5hYmxlZCkge1xuICAgICAgdGhpcy52c2NvZGVDb25maWcgPSBuZXcgVnNDb2RlQ29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLmh1c2t5RW5hYmxlZCkge1xuICAgICAgdGhpcy5odXNreUNvbmZpZyA9IG5ldyBIdXNreUNvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5zYW1wbGVDb2RlRW5hYmxlZCkge1xuICAgICAgdGhpcy5zYW1wbGVDb2RlQ29uZmlnID0gbmV3IFNhbXBsZUNvZGVDb25maWdDYXBTZXJ2aWNlKHRoaXMsIHVwZGF0ZWRPcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgaW5pdGlhbGl6ZUJhc2VDb25maWdzKG9wdGlvbnM6IEJhc2VQcm9qZWN0T3B0aW9ucyk6IHZvaWQge1xuICAgIHN1cGVyLmluaXRpYWxpemVCYXNlQ29uZmlncyhvcHRpb25zKTtcbiAgfVxufVxuIl19
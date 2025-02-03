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
    postSynthesize() {
        super.postSynthesize();
        utils_1.util.setupExitHandler();
    }
}
exports.CapServiceProject = CapServiceProject;
_a = JSII_RTTI_SYMBOL_1;
CapServiceProject[_a] = { fqn: "@dxfrontier/projen-template-projects.CapServiceProject", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYXAtc2VydmljZS9wcm9qZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQXVFO0FBQ3ZFLGlEQUE4QztBQUM5Qyx5Q0FBcUM7QUFDckMsb0RBQWlFO0FBQ2pFLHdEQUFxRTtBQUNyRSw0Q0FBeUQ7QUFDekQsc0NBQW1EO0FBQ25ELDRDQUF5RDtBQUN6RCwwQ0FBdUQ7QUFDdkQsd0NBQXFEO0FBQ3JELHNDQUFtRDtBQUNuRCxnREFBNkQ7QUFDN0Qsb0RBQWlFO0FBQ2pFLG9EQUFpRTtBQUNqRSw0Q0FBeUQ7QUFPekQ7O0dBRUc7QUFDSCxNQUFhLGlCQUFrQixTQUFRLGtCQUFXO0lBQ2hEOzs7T0FHRztJQUNILFlBQVksT0FBaUM7UUFDM0MsTUFBTSxjQUFjLEdBQUc7WUFDckIsR0FBRyxPQUFPO1lBQ1YsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixJQUFJLElBQUk7WUFDcEQsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLG1CQUFtQixJQUFJLElBQUk7WUFDeEQsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSTtZQUM1QyxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJO1lBQzVDLFlBQVksRUFBRSxPQUFPLENBQUMsWUFBWSxJQUFJLElBQUk7WUFDMUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLElBQUksSUFBSTtZQUN4QyxlQUFlLEVBQUUsT0FBTyxDQUFDLGVBQWUsSUFBSSxJQUFJO1lBQ2hELGFBQWEsRUFBRSxPQUFPLENBQUMsYUFBYSxJQUFJLElBQUk7WUFDNUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixJQUFJLElBQUk7WUFDcEQsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDbEIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTLElBQUkscUJBQVMsQ0FBQyxpQkFBaUI7WUFDM0QsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLElBQUkscUJBQVMsQ0FBQyxtQkFBbUI7WUFDakUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVLElBQUkscUJBQVMsQ0FBQyxXQUFXO1NBQ3hELENBQUM7UUFDRixLQUFLLENBQUM7WUFDSixHQUFHLGtCQUFXLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztTQUM3QyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUkseUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHlCQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLHVDQUEwQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTdELElBQUksY0FBYyxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksdUNBQTBCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0QsQ0FBQztRQUNELElBQUksY0FBYyxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksMkNBQTRCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkUsQ0FBQztRQUNELElBQUksY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSwrQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RCxDQUFDO1FBQ0QsSUFBSSxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLDJCQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELENBQUM7UUFDRCxJQUFJLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksK0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUNELElBQUksY0FBYyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxtQ0FBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzRCxDQUFDO1FBQ0QsSUFBSSxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLCtCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFDRCxJQUFJLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksNkJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckQsQ0FBQztRQUNELElBQUksY0FBYyxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksdUNBQTBCLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQy9FLENBQUM7SUFDSCxDQUFDO0lBRWtCLHFCQUFxQixDQUFDLE9BQTJCO1FBQ2xFLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRWUsY0FBYztRQUM1QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdkIsWUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQzs7QUFwRUgsOENBcUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZVByb2plY3RPcHRpb25zLCBCYXNlUHJvamVjdCwgQmFzZU9wdGlvbnMgfSBmcm9tICcuLi9iYXNlJztcbmltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gJy4uL3V0aWwvY29uc3RhbnRzJztcbmltcG9ydCB7IHV0aWwgfSBmcm9tICcuLi91dGlsL3V0aWxzJztcbmltcG9ydCB7IENvbW1pdExpbnRDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvY29tbWl0bGludCc7XG5pbXBvcnQgeyBEZXZDb250YWluZXJDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvZGV2Y29udGFpbmVyJztcbmltcG9ydCB7IEVzTGludENvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9lc2xpbnQnO1xuaW1wb3J0IHsgR2l0Q29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2dpdCc7XG5pbXBvcnQgeyBHaXRIdWJDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvZ2l0aHViJztcbmltcG9ydCB7IEh1c2t5Q29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2h1c2t5JztcbmltcG9ydCB7IEplc3RDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvamVzdCc7XG5pbXBvcnQgeyBOcG1Db25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvbnBtJztcbmltcG9ydCB7IFByZXR0aWVyQ29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL3ByZXR0aWVyJztcbmltcG9ydCB7IFNhbXBsZUNvZGVDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvc2FtcGxlY29kZSc7XG5pbXBvcnQgeyBUeXBlU2NyaXB0Q29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL3R5cGVzY3JpcHQnO1xuaW1wb3J0IHsgVnNDb2RlQ29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL3ZzY29kZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FwU2VydmljZVByb2plY3RPcHRpb25zIGV4dGVuZHMgQmFzZVByb2plY3RPcHRpb25zIHtcbiAgcmVhZG9ubHkgbmFtZXNwYWNlPzogc3RyaW5nO1xuICByZWFkb25seSBlbnRpdHlOYW1lPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIG1hbmFnaW5nIHByb2plY3QgQ2FwU2VydmljZSBjb25maWd1cmF0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgQ2FwU2VydmljZVByb2plY3QgZXh0ZW5kcyBCYXNlUHJvamVjdCB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgcHJvamVjdC5cbiAgICogQHBhcmFtIG9wdGlvbnMgQWRkaXRpb25hbCBwcm9qZWN0IG9wdGlvbnMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBDYXBTZXJ2aWNlUHJvamVjdE9wdGlvbnMpIHtcbiAgICBjb25zdCB1cGRhdGVkT3B0aW9ucyA9IHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBjb21taXRsaW50RW5hYmxlZDogb3B0aW9ucy5jb21taXRsaW50RW5hYmxlZCA/PyB0cnVlLFxuICAgICAgZGV2Q29udGFpbmVyRW5hYmxlZDogb3B0aW9ucy5kZXZDb250YWluZXJFbmFibGVkID8/IHRydWUsXG4gICAgICBlc2xpbnRFbmFibGVkOiBvcHRpb25zLmVzbGludEVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIGdpdGh1YkVuYWJsZWQ6IG9wdGlvbnMuZ2l0aHViRW5hYmxlZCA/PyB0cnVlLFxuICAgICAgaHVza3lFbmFibGVkOiBvcHRpb25zLmh1c2t5RW5hYmxlZCA/PyB0cnVlLFxuICAgICAgamVzdEVuYWJsZWQ6IG9wdGlvbnMuamVzdEVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIHByZXR0aWVyRW5hYmxlZDogb3B0aW9ucy5wcmV0dGllckVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIHZzY29kZUVuYWJsZWQ6IG9wdGlvbnMudnNjb2RlRW5hYmxlZCA/PyB0cnVlLFxuICAgICAgc2FtcGxlQ29kZUVuYWJsZWQ6IG9wdGlvbnMuc2FtcGxlQ29kZUVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIHR5cGVzY3JpcHRFbmFibGVkOiB0cnVlLFxuICAgICAgbmFtZTogb3B0aW9ucy5uYW1lLFxuICAgICAgbmFtZXNwYWNlOiBvcHRpb25zLm5hbWVzcGFjZSA/PyBjb25zdGFudHMuUFJPSkVDVF9OQU1FU1BBQ0UsXG4gICAgICBkZXNjcmlwdGlvbjogb3B0aW9ucy5kZXNjcmlwdGlvbiA/PyBjb25zdGFudHMuUFJPSkVDVF9ERVNDUklQVElPTixcbiAgICAgIGVudGl0eU5hbWU6IG9wdGlvbnMuZW50aXR5TmFtZSA/PyBjb25zdGFudHMuRU5USVRZX05BTUUsXG4gICAgfTtcbiAgICBzdXBlcih7XG4gICAgICAuLi5CYXNlT3B0aW9ucy5zaGFyZWRPcHRpb25zKHVwZGF0ZWRPcHRpb25zKSxcbiAgICB9KTtcblxuICAgIHRoaXMuZ2l0Q29uZmlnID0gbmV3IEdpdENvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgdGhpcy5ucG1Db25maWcgPSBuZXcgTnBtQ29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB0aGlzLnR5cGVzY3JpcHRDb25maWcgPSBuZXcgVHlwZVNjcmlwdENvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG5cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuY29tbWl0bGludEVuYWJsZWQpIHtcbiAgICAgIHRoaXMuY29tbWl0bGludENvbmZpZyA9IG5ldyBDb21taXRMaW50Q29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLmRldkNvbnRhaW5lckVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZGV2Q29udGFpbmVyQ29uZmlnID0gbmV3IERldkNvbnRhaW5lckNvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5lc2xpbnRFbmFibGVkKSB7XG4gICAgICB0aGlzLmVzbGludENvbmZpZyA9IG5ldyBFc0xpbnRDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuamVzdEVuYWJsZWQpIHtcbiAgICAgIHRoaXMuamVzdENvbmZpZyA9IG5ldyBKZXN0Q29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLmdpdGh1YkVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZ2l0aHViQ29uZmlnID0gbmV3IEdpdEh1YkNvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5wcmV0dGllckVuYWJsZWQpIHtcbiAgICAgIHRoaXMucHJldHRpZXJDb25maWcgPSBuZXcgUHJldHRpZXJDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMudnNjb2RlRW5hYmxlZCkge1xuICAgICAgdGhpcy52c2NvZGVDb25maWcgPSBuZXcgVnNDb2RlQ29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLmh1c2t5RW5hYmxlZCkge1xuICAgICAgdGhpcy5odXNreUNvbmZpZyA9IG5ldyBIdXNreUNvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5zYW1wbGVDb2RlRW5hYmxlZCkge1xuICAgICAgdGhpcy5zYW1wbGVDb2RlQ29uZmlnID0gbmV3IFNhbXBsZUNvZGVDb25maWdDYXBTZXJ2aWNlKHRoaXMsIHVwZGF0ZWRPcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgaW5pdGlhbGl6ZUJhc2VDb25maWdzKG9wdGlvbnM6IEJhc2VQcm9qZWN0T3B0aW9ucyk6IHZvaWQge1xuICAgIHN1cGVyLmluaXRpYWxpemVCYXNlQ29uZmlncyhvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBwb3N0U3ludGhlc2l6ZSgpOiB2b2lkIHtcbiAgICBzdXBlci5wb3N0U3ludGhlc2l6ZSgpO1xuXG4gICAgdXRpbC5zZXR1cEV4aXRIYW5kbGVyKCk7XG4gIH1cbn1cbiJdfQ==
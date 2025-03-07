"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubActionProject = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../base");
const devcontainer_1 = require("../base/config/devcontainer");
const git_1 = require("../base/config/git");
const github_1 = require("../base/config/github");
const husky_1 = require("../base/config/husky");
const options_1 = require("../base/config/options");
const project_1 = require("../base/project");
const vscode_1 = require("../base/config/vscode");
const commitlint_1 = require("./config/commitlint");
const npm_1 = require("./config/npm");
const samplecode_1 = require("./config/samplecode");
const typescript_1 = require("./config/typescript");
const utils_1 = require("../util/utils");
const readme_1 = require("./config/readme");
const constants_1 = require("../util/constants");
/**
 * Base class for managing project GitHubAction configuration.
 */
class GitHubActionProject extends project_1.BaseProject {
    /**
     * Initializes the project.
     * @param options Additional project options.
     */
    constructor(options) {
        const updatedOptions = {
            ...options,
            commitlintEnabled: options.commitlintEnabled ?? true,
            devContainerEnabled: options.devContainerEnabled ?? true,
            eslintEnabled: options.eslintEnabled ?? false,
            githubEnabled: options.githubEnabled ?? true,
            huskyEnabled: options.huskyEnabled ?? true,
            jestEnabled: options.jestEnabled ?? false,
            prettierEnabled: options.prettierEnabled ?? true,
            vscodeEnabled: options.vscodeEnabled ?? true,
            sampleCodeEnabled: options.sampleCodeEnabled ?? true,
            typescriptEnabled: false,
            description: options.description ?? constants_1.constants.GITHUB_PROJECT_DESCRIPTION,
        };
        super({
            ...options_1.BaseOptions.sharedOptions(updatedOptions),
            readme: new readme_1.ReadmeConfigGitHubAction().getReadme(updatedOptions),
        });
        this.npmConfig = new npm_1.NpmConfigGitHubAction(this);
        if (updatedOptions.commitlintEnabled) {
            this.commitlintConfig = new commitlint_1.CommitLintConfigGitHubAction(this);
        }
        if (updatedOptions.sampleCodeEnabled) {
            this.sampleCodeConfig = new samplecode_1.SampleCodeConfigGitHubAction(this);
        }
    }
    initializeBaseConfigs(options) {
        super.initializeBaseConfigs(options);
        this.gitConfig = new git_1.GitConfigBase(this);
        this.typescriptConfig = new typescript_1.TypeScriptConfigGitHubAction(this);
        if (options.prettierEnabled) {
            this.prettierConfig = new base_1.PrettierConfigBase(this);
        }
        if (options.devContainerEnabled) {
            this.devContainerConfig = new devcontainer_1.DevContainerConfigBase(this);
        }
        if (options.githubEnabled) {
            this.githubConfig = new github_1.GitHubConfigBase(this);
        }
        if (options.vscodeEnabled) {
            this.vscodeConfig = new vscode_1.VsCodeConfigBase(this);
        }
        if (options.huskyEnabled) {
            this.huskyConfig = new husky_1.HuskyConfigBase(this);
        }
    }
    postSynthesize() {
        super.postSynthesize();
        utils_1.util.setupExitHandler(GitHubActionProject.cleanCommand);
    }
}
exports.GitHubActionProject = GitHubActionProject;
_a = JSII_RTTI_SYMBOL_1;
GitHubActionProject[_a] = { fqn: "@dxfrontier/projen-template-projects.GitHubActionProject", version: "0.0.0" };
GitHubActionProject.cleanCommand = 'npx projen eject && rm -rf .projenrc.js.bak scripts .projen';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9naXRodWItYWN0aW9uL3Byb2plY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrQ0FBNkM7QUFDN0MsOERBQXFFO0FBQ3JFLDRDQUFtRDtBQUNuRCxrREFBeUQ7QUFDekQsZ0RBQXVEO0FBQ3ZELG9EQUFxRDtBQUNyRCw2Q0FBa0U7QUFDbEUsa0RBQXlEO0FBQ3pELG9EQUFtRTtBQUNuRSxzQ0FBcUQ7QUFDckQsb0RBQW1FO0FBQ25FLG9EQUFtRTtBQUNuRSx5Q0FBcUM7QUFDckMsNENBQTJEO0FBQzNELGlEQUE4QztBQUk5Qzs7R0FFRztBQUNILE1BQWEsbUJBQW9CLFNBQVEscUJBQVc7SUFHbEQ7OztPQUdHO0lBRUgsWUFBWSxPQUFtQztRQUM3QyxNQUFNLGNBQWMsR0FBRztZQUNyQixHQUFHLE9BQU87WUFDVixpQkFBaUIsRUFBRSxPQUFPLENBQUMsaUJBQWlCLElBQUksSUFBSTtZQUNwRCxtQkFBbUIsRUFBRSxPQUFPLENBQUMsbUJBQW1CLElBQUksSUFBSTtZQUN4RCxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxLQUFLO1lBQzdDLGFBQWEsRUFBRSxPQUFPLENBQUMsYUFBYSxJQUFJLElBQUk7WUFDNUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZQUFZLElBQUksSUFBSTtZQUMxQyxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsSUFBSSxLQUFLO1lBQ3pDLGVBQWUsRUFBRSxPQUFPLENBQUMsZUFBZSxJQUFJLElBQUk7WUFDaEQsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSTtZQUM1QyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsaUJBQWlCLElBQUksSUFBSTtZQUNwRCxpQkFBaUIsRUFBRSxLQUFLO1lBQ3hCLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVyxJQUFJLHFCQUFTLENBQUMsMEJBQTBCO1NBQ3pFLENBQUM7UUFDRixLQUFLLENBQUM7WUFDSixHQUFHLHFCQUFXLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztZQUM1QyxNQUFNLEVBQUUsSUFBSSxpQ0FBd0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUM7U0FDakUsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLDJCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpELElBQUksY0FBYyxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUkseUNBQTRCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakUsQ0FBQztRQUNELElBQUksY0FBYyxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUkseUNBQTRCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakUsQ0FBQztJQUNILENBQUM7SUFFa0IscUJBQXFCLENBQUMsT0FBMkI7UUFDbEUsS0FBSyxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxtQkFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLHlDQUE0QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9ELElBQUksT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSx5QkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxxQ0FBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3RCxDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHlCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUkseUJBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx1QkFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLENBQUM7SUFDSCxDQUFDO0lBRWUsY0FBYztRQUM1QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdkIsWUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFELENBQUM7O0FBakVILGtEQWtFQzs7O0FBakVRLGdDQUFZLEdBQUcsNkRBQTZELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmV0dGllckNvbmZpZ0Jhc2UgfSBmcm9tICcuLi9iYXNlJztcbmltcG9ydCB7IERldkNvbnRhaW5lckNvbmZpZ0Jhc2UgfSBmcm9tICcuLi9iYXNlL2NvbmZpZy9kZXZjb250YWluZXInO1xuaW1wb3J0IHsgR2l0Q29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UvY29uZmlnL2dpdCc7XG5pbXBvcnQgeyBHaXRIdWJDb25maWdCYXNlIH0gZnJvbSAnLi4vYmFzZS9jb25maWcvZ2l0aHViJztcbmltcG9ydCB7IEh1c2t5Q29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UvY29uZmlnL2h1c2t5JztcbmltcG9ydCB7IEJhc2VPcHRpb25zIH0gZnJvbSAnLi4vYmFzZS9jb25maWcvb3B0aW9ucyc7XG5pbXBvcnQgeyBCYXNlUHJvamVjdE9wdGlvbnMsIEJhc2VQcm9qZWN0IH0gZnJvbSAnLi4vYmFzZS9wcm9qZWN0JztcbmltcG9ydCB7IFZzQ29kZUNvbmZpZ0Jhc2UgfSBmcm9tICcuLi9iYXNlL2NvbmZpZy92c2NvZGUnO1xuaW1wb3J0IHsgQ29tbWl0TGludENvbmZpZ0dpdEh1YkFjdGlvbiB9IGZyb20gJy4vY29uZmlnL2NvbW1pdGxpbnQnO1xuaW1wb3J0IHsgTnBtQ29uZmlnR2l0SHViQWN0aW9uIH0gZnJvbSAnLi9jb25maWcvbnBtJztcbmltcG9ydCB7IFNhbXBsZUNvZGVDb25maWdHaXRIdWJBY3Rpb24gfSBmcm9tICcuL2NvbmZpZy9zYW1wbGVjb2RlJztcbmltcG9ydCB7IFR5cGVTY3JpcHRDb25maWdHaXRIdWJBY3Rpb24gfSBmcm9tICcuL2NvbmZpZy90eXBlc2NyaXB0JztcbmltcG9ydCB7IHV0aWwgfSBmcm9tICcuLi91dGlsL3V0aWxzJztcbmltcG9ydCB7IFJlYWRtZUNvbmZpZ0dpdEh1YkFjdGlvbiB9IGZyb20gJy4vY29uZmlnL3JlYWRtZSc7XG5pbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tICcuLi91dGlsL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2l0SHViQWN0aW9uUHJvamVjdE9wdGlvbnMgZXh0ZW5kcyBCYXNlUHJvamVjdE9wdGlvbnMge31cblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBtYW5hZ2luZyBwcm9qZWN0IEdpdEh1YkFjdGlvbiBjb25maWd1cmF0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgR2l0SHViQWN0aW9uUHJvamVjdCBleHRlbmRzIEJhc2VQcm9qZWN0IHtcbiAgc3RhdGljIGNsZWFuQ29tbWFuZCA9ICducHggcHJvamVuIGVqZWN0ICYmIHJtIC1yZiAucHJvamVucmMuanMuYmFrIHNjcmlwdHMgLnByb2plbic7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBwcm9qZWN0LlxuICAgKiBAcGFyYW0gb3B0aW9ucyBBZGRpdGlvbmFsIHByb2plY3Qgb3B0aW9ucy5cbiAgICovXG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogR2l0SHViQWN0aW9uUHJvamVjdE9wdGlvbnMpIHtcbiAgICBjb25zdCB1cGRhdGVkT3B0aW9ucyA9IHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBjb21taXRsaW50RW5hYmxlZDogb3B0aW9ucy5jb21taXRsaW50RW5hYmxlZCA/PyB0cnVlLFxuICAgICAgZGV2Q29udGFpbmVyRW5hYmxlZDogb3B0aW9ucy5kZXZDb250YWluZXJFbmFibGVkID8/IHRydWUsXG4gICAgICBlc2xpbnRFbmFibGVkOiBvcHRpb25zLmVzbGludEVuYWJsZWQgPz8gZmFsc2UsXG4gICAgICBnaXRodWJFbmFibGVkOiBvcHRpb25zLmdpdGh1YkVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIGh1c2t5RW5hYmxlZDogb3B0aW9ucy5odXNreUVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIGplc3RFbmFibGVkOiBvcHRpb25zLmplc3RFbmFibGVkID8/IGZhbHNlLFxuICAgICAgcHJldHRpZXJFbmFibGVkOiBvcHRpb25zLnByZXR0aWVyRW5hYmxlZCA/PyB0cnVlLFxuICAgICAgdnNjb2RlRW5hYmxlZDogb3B0aW9ucy52c2NvZGVFbmFibGVkID8/IHRydWUsXG4gICAgICBzYW1wbGVDb2RlRW5hYmxlZDogb3B0aW9ucy5zYW1wbGVDb2RlRW5hYmxlZCA/PyB0cnVlLFxuICAgICAgdHlwZXNjcmlwdEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246IG9wdGlvbnMuZGVzY3JpcHRpb24gPz8gY29uc3RhbnRzLkdJVEhVQl9QUk9KRUNUX0RFU0NSSVBUSU9OLFxuICAgIH07XG4gICAgc3VwZXIoe1xuICAgICAgLi4uQmFzZU9wdGlvbnMuc2hhcmVkT3B0aW9ucyh1cGRhdGVkT3B0aW9ucyksXG4gICAgICByZWFkbWU6IG5ldyBSZWFkbWVDb25maWdHaXRIdWJBY3Rpb24oKS5nZXRSZWFkbWUodXBkYXRlZE9wdGlvbnMpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5ucG1Db25maWcgPSBuZXcgTnBtQ29uZmlnR2l0SHViQWN0aW9uKHRoaXMpO1xuXG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLmNvbW1pdGxpbnRFbmFibGVkKSB7XG4gICAgICB0aGlzLmNvbW1pdGxpbnRDb25maWcgPSBuZXcgQ29tbWl0TGludENvbmZpZ0dpdEh1YkFjdGlvbih0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLnNhbXBsZUNvZGVFbmFibGVkKSB7XG4gICAgICB0aGlzLnNhbXBsZUNvZGVDb25maWcgPSBuZXcgU2FtcGxlQ29kZUNvbmZpZ0dpdEh1YkFjdGlvbih0aGlzKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgaW5pdGlhbGl6ZUJhc2VDb25maWdzKG9wdGlvbnM6IEJhc2VQcm9qZWN0T3B0aW9ucyk6IHZvaWQge1xuICAgIHN1cGVyLmluaXRpYWxpemVCYXNlQ29uZmlncyhvcHRpb25zKTtcblxuICAgIHRoaXMuZ2l0Q29uZmlnID0gbmV3IEdpdENvbmZpZ0Jhc2UodGhpcyk7XG4gICAgdGhpcy50eXBlc2NyaXB0Q29uZmlnID0gbmV3IFR5cGVTY3JpcHRDb25maWdHaXRIdWJBY3Rpb24odGhpcyk7XG5cbiAgICBpZiAob3B0aW9ucy5wcmV0dGllckVuYWJsZWQpIHtcbiAgICAgIHRoaXMucHJldHRpZXJDb25maWcgPSBuZXcgUHJldHRpZXJDb25maWdCYXNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5kZXZDb250YWluZXJFbmFibGVkKSB7XG4gICAgICB0aGlzLmRldkNvbnRhaW5lckNvbmZpZyA9IG5ldyBEZXZDb250YWluZXJDb25maWdCYXNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5naXRodWJFbmFibGVkKSB7XG4gICAgICB0aGlzLmdpdGh1YkNvbmZpZyA9IG5ldyBHaXRIdWJDb25maWdCYXNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy52c2NvZGVFbmFibGVkKSB7XG4gICAgICB0aGlzLnZzY29kZUNvbmZpZyA9IG5ldyBWc0NvZGVDb25maWdCYXNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5odXNreUVuYWJsZWQpIHtcbiAgICAgIHRoaXMuaHVza3lDb25maWcgPSBuZXcgSHVza3lDb25maWdCYXNlKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBwb3N0U3ludGhlc2l6ZSgpOiB2b2lkIHtcbiAgICBzdXBlci5wb3N0U3ludGhlc2l6ZSgpO1xuXG4gICAgdXRpbC5zZXR1cEV4aXRIYW5kbGVyKEdpdEh1YkFjdGlvblByb2plY3QuY2xlYW5Db21tYW5kKTtcbiAgfVxufVxuIl19
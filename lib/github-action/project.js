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
const issues_1 = require("../base/config/issues");
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
            issuesEnabled: options.issuesEnabled ?? true,
        };
        super({
            ...options_1.BaseOptions.sharedStandardOptions(updatedOptions),
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
        if (options.issuesEnabled) {
            this.issuesConfig = new issues_1.IssuesConfigBase(this);
        }
    }
    postSynthesize() {
        super.postSynthesize();
        utils_1.util.setupExitHandler(GitHubActionProject.cleanCommand);
    }
}
exports.GitHubActionProject = GitHubActionProject;
_a = JSII_RTTI_SYMBOL_1;
GitHubActionProject[_a] = { fqn: "@dxfrontier/dx-starter-templates.GitHubActionProject", version: "0.0.0" };
GitHubActionProject.cleanCommand = 'npx projen eject && rm -rf .projenrc.js.bak scripts .projen';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9naXRodWItYWN0aW9uL3Byb2plY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrQ0FBNkM7QUFDN0MsOERBQXFFO0FBQ3JFLDRDQUFtRDtBQUNuRCxrREFBeUQ7QUFDekQsZ0RBQXVEO0FBQ3ZELG9EQUFxRDtBQUNyRCw2Q0FBa0U7QUFDbEUsa0RBQXlEO0FBQ3pELG9EQUFtRTtBQUNuRSxzQ0FBcUQ7QUFDckQsb0RBQW1FO0FBQ25FLG9EQUFtRTtBQUNuRSx5Q0FBcUM7QUFDckMsNENBQTJEO0FBQzNELGlEQUE4QztBQUM5QyxrREFBeUQ7QUFJekQ7O0dBRUc7QUFDSCxNQUFhLG1CQUFvQixTQUFRLHFCQUFXO0lBR2xEOzs7T0FHRztJQUVILFlBQVksT0FBbUM7UUFDN0MsTUFBTSxjQUFjLEdBQUc7WUFDckIsR0FBRyxPQUFPO1lBQ1YsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixJQUFJLElBQUk7WUFDcEQsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLG1CQUFtQixJQUFJLElBQUk7WUFDeEQsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUksS0FBSztZQUM3QyxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJO1lBQzVDLFlBQVksRUFBRSxPQUFPLENBQUMsWUFBWSxJQUFJLElBQUk7WUFDMUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLElBQUksS0FBSztZQUN6QyxlQUFlLEVBQUUsT0FBTyxDQUFDLGVBQWUsSUFBSSxJQUFJO1lBQ2hELGFBQWEsRUFBRSxPQUFPLENBQUMsYUFBYSxJQUFJLElBQUk7WUFDNUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixJQUFJLElBQUk7WUFDcEQsaUJBQWlCLEVBQUUsS0FBSztZQUN4QixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsSUFBSSxxQkFBUyxDQUFDLDBCQUEwQjtZQUN4RSxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJO1NBQzdDLENBQUM7UUFDRixLQUFLLENBQUM7WUFDSixHQUFHLHFCQUFXLENBQUMscUJBQXFCLENBQUMsY0FBYyxDQUFDO1lBQ3BELE1BQU0sRUFBRSxJQUFJLGlDQUF3QixFQUFFLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQztTQUNqRSxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksMkJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakQsSUFBSSxjQUFjLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSx5Q0FBNEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRSxDQUFDO1FBQ0QsSUFBSSxjQUFjLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSx5Q0FBNEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRSxDQUFDO0lBQ0gsQ0FBQztJQUVrQixxQkFBcUIsQ0FBQyxPQUEyQjtRQUNsRSxLQUFLLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLG1CQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUkseUNBQTRCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFL0QsSUFBSSxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLHlCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLHFDQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdELENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUkseUJBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSx5QkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLHVCQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSx5QkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxDQUFDO0lBQ0gsQ0FBQztJQUVlLGNBQWM7UUFDNUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLFlBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxRCxDQUFDOztBQXJFSCxrREFzRUM7OztBQXJFUSxnQ0FBWSxHQUFHLDZEQUE2RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJldHRpZXJDb25maWdCYXNlIH0gZnJvbSAnLi4vYmFzZSc7XG5pbXBvcnQgeyBEZXZDb250YWluZXJDb25maWdCYXNlIH0gZnJvbSAnLi4vYmFzZS9jb25maWcvZGV2Y29udGFpbmVyJztcbmltcG9ydCB7IEdpdENvbmZpZ0Jhc2UgfSBmcm9tICcuLi9iYXNlL2NvbmZpZy9naXQnO1xuaW1wb3J0IHsgR2l0SHViQ29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UvY29uZmlnL2dpdGh1Yic7XG5pbXBvcnQgeyBIdXNreUNvbmZpZ0Jhc2UgfSBmcm9tICcuLi9iYXNlL2NvbmZpZy9odXNreSc7XG5pbXBvcnQgeyBCYXNlT3B0aW9ucyB9IGZyb20gJy4uL2Jhc2UvY29uZmlnL29wdGlvbnMnO1xuaW1wb3J0IHsgQmFzZVByb2plY3RPcHRpb25zLCBCYXNlUHJvamVjdCB9IGZyb20gJy4uL2Jhc2UvcHJvamVjdCc7XG5pbXBvcnQgeyBWc0NvZGVDb25maWdCYXNlIH0gZnJvbSAnLi4vYmFzZS9jb25maWcvdnNjb2RlJztcbmltcG9ydCB7IENvbW1pdExpbnRDb25maWdHaXRIdWJBY3Rpb24gfSBmcm9tICcuL2NvbmZpZy9jb21taXRsaW50JztcbmltcG9ydCB7IE5wbUNvbmZpZ0dpdEh1YkFjdGlvbiB9IGZyb20gJy4vY29uZmlnL25wbSc7XG5pbXBvcnQgeyBTYW1wbGVDb2RlQ29uZmlnR2l0SHViQWN0aW9uIH0gZnJvbSAnLi9jb25maWcvc2FtcGxlY29kZSc7XG5pbXBvcnQgeyBUeXBlU2NyaXB0Q29uZmlnR2l0SHViQWN0aW9uIH0gZnJvbSAnLi9jb25maWcvdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyB1dGlsIH0gZnJvbSAnLi4vdXRpbC91dGlscyc7XG5pbXBvcnQgeyBSZWFkbWVDb25maWdHaXRIdWJBY3Rpb24gfSBmcm9tICcuL2NvbmZpZy9yZWFkbWUnO1xuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSAnLi4vdXRpbC9jb25zdGFudHMnO1xuaW1wb3J0IHsgSXNzdWVzQ29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UvY29uZmlnL2lzc3Vlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2l0SHViQWN0aW9uUHJvamVjdE9wdGlvbnMgZXh0ZW5kcyBCYXNlUHJvamVjdE9wdGlvbnMge31cblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBtYW5hZ2luZyBwcm9qZWN0IEdpdEh1YkFjdGlvbiBjb25maWd1cmF0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgR2l0SHViQWN0aW9uUHJvamVjdCBleHRlbmRzIEJhc2VQcm9qZWN0IHtcbiAgc3RhdGljIGNsZWFuQ29tbWFuZCA9ICducHggcHJvamVuIGVqZWN0ICYmIHJtIC1yZiAucHJvamVucmMuanMuYmFrIHNjcmlwdHMgLnByb2plbic7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBwcm9qZWN0LlxuICAgKiBAcGFyYW0gb3B0aW9ucyBBZGRpdGlvbmFsIHByb2plY3Qgb3B0aW9ucy5cbiAgICovXG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogR2l0SHViQWN0aW9uUHJvamVjdE9wdGlvbnMpIHtcbiAgICBjb25zdCB1cGRhdGVkT3B0aW9ucyA9IHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBjb21taXRsaW50RW5hYmxlZDogb3B0aW9ucy5jb21taXRsaW50RW5hYmxlZCA/PyB0cnVlLFxuICAgICAgZGV2Q29udGFpbmVyRW5hYmxlZDogb3B0aW9ucy5kZXZDb250YWluZXJFbmFibGVkID8/IHRydWUsXG4gICAgICBlc2xpbnRFbmFibGVkOiBvcHRpb25zLmVzbGludEVuYWJsZWQgPz8gZmFsc2UsXG4gICAgICBnaXRodWJFbmFibGVkOiBvcHRpb25zLmdpdGh1YkVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIGh1c2t5RW5hYmxlZDogb3B0aW9ucy5odXNreUVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIGplc3RFbmFibGVkOiBvcHRpb25zLmplc3RFbmFibGVkID8/IGZhbHNlLFxuICAgICAgcHJldHRpZXJFbmFibGVkOiBvcHRpb25zLnByZXR0aWVyRW5hYmxlZCA/PyB0cnVlLFxuICAgICAgdnNjb2RlRW5hYmxlZDogb3B0aW9ucy52c2NvZGVFbmFibGVkID8/IHRydWUsXG4gICAgICBzYW1wbGVDb2RlRW5hYmxlZDogb3B0aW9ucy5zYW1wbGVDb2RlRW5hYmxlZCA/PyB0cnVlLFxuICAgICAgdHlwZXNjcmlwdEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246IG9wdGlvbnMuZGVzY3JpcHRpb24gPz8gY29uc3RhbnRzLkdJVEhVQl9QUk9KRUNUX0RFU0NSSVBUSU9OLFxuICAgICAgaXNzdWVzRW5hYmxlZDogb3B0aW9ucy5pc3N1ZXNFbmFibGVkID8/IHRydWUsXG4gICAgfTtcbiAgICBzdXBlcih7XG4gICAgICAuLi5CYXNlT3B0aW9ucy5zaGFyZWRTdGFuZGFyZE9wdGlvbnModXBkYXRlZE9wdGlvbnMpLFxuICAgICAgcmVhZG1lOiBuZXcgUmVhZG1lQ29uZmlnR2l0SHViQWN0aW9uKCkuZ2V0UmVhZG1lKHVwZGF0ZWRPcHRpb25zKSxcbiAgICB9KTtcblxuICAgIHRoaXMubnBtQ29uZmlnID0gbmV3IE5wbUNvbmZpZ0dpdEh1YkFjdGlvbih0aGlzKTtcblxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5jb21taXRsaW50RW5hYmxlZCkge1xuICAgICAgdGhpcy5jb21taXRsaW50Q29uZmlnID0gbmV3IENvbW1pdExpbnRDb25maWdHaXRIdWJBY3Rpb24odGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5zYW1wbGVDb2RlRW5hYmxlZCkge1xuICAgICAgdGhpcy5zYW1wbGVDb2RlQ29uZmlnID0gbmV3IFNhbXBsZUNvZGVDb25maWdHaXRIdWJBY3Rpb24odGhpcyk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGluaXRpYWxpemVCYXNlQ29uZmlncyhvcHRpb25zOiBCYXNlUHJvamVjdE9wdGlvbnMpOiB2b2lkIHtcbiAgICBzdXBlci5pbml0aWFsaXplQmFzZUNvbmZpZ3Mob3B0aW9ucyk7XG5cbiAgICB0aGlzLmdpdENvbmZpZyA9IG5ldyBHaXRDb25maWdCYXNlKHRoaXMpO1xuICAgIHRoaXMudHlwZXNjcmlwdENvbmZpZyA9IG5ldyBUeXBlU2NyaXB0Q29uZmlnR2l0SHViQWN0aW9uKHRoaXMpO1xuXG4gICAgaWYgKG9wdGlvbnMucHJldHRpZXJFbmFibGVkKSB7XG4gICAgICB0aGlzLnByZXR0aWVyQ29uZmlnID0gbmV3IFByZXR0aWVyQ29uZmlnQmFzZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuZGV2Q29udGFpbmVyRW5hYmxlZCkge1xuICAgICAgdGhpcy5kZXZDb250YWluZXJDb25maWcgPSBuZXcgRGV2Q29udGFpbmVyQ29uZmlnQmFzZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuZ2l0aHViRW5hYmxlZCkge1xuICAgICAgdGhpcy5naXRodWJDb25maWcgPSBuZXcgR2l0SHViQ29uZmlnQmFzZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMudnNjb2RlRW5hYmxlZCkge1xuICAgICAgdGhpcy52c2NvZGVDb25maWcgPSBuZXcgVnNDb2RlQ29uZmlnQmFzZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuaHVza3lFbmFibGVkKSB7XG4gICAgICB0aGlzLmh1c2t5Q29uZmlnID0gbmV3IEh1c2t5Q29uZmlnQmFzZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuaXNzdWVzRW5hYmxlZCkge1xuICAgICAgdGhpcy5pc3N1ZXNDb25maWcgPSBuZXcgSXNzdWVzQ29uZmlnQmFzZSh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcG9zdFN5bnRoZXNpemUoKTogdm9pZCB7XG4gICAgc3VwZXIucG9zdFN5bnRoZXNpemUoKTtcblxuICAgIHV0aWwuc2V0dXBFeGl0SGFuZGxlcihHaXRIdWJBY3Rpb25Qcm9qZWN0LmNsZWFuQ29tbWFuZCk7XG4gIH1cbn1cbiJdfQ==
"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubActionProject = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../base");
const devcontainer_1 = require("../base/devcontainer");
const git_1 = require("../base/git");
const github_1 = require("../base/github");
const husky_1 = require("../base/husky");
const options_1 = require("../base/options");
const project_1 = require("../base/project");
const vscode_1 = require("../base/vscode");
const commitlint_1 = require("./commitlint");
const npm_1 = require("./npm");
const samplecode_1 = require("./samplecode");
const typescript_1 = require("./typescript");
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
            typescriptEnabled: false,
            jestEnabled: false,
            eslintEnabled: false,
        };
        super({
            ...options_1.BaseOptions.sharedOptions(updatedOptions),
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
}
exports.GitHubActionProject = GitHubActionProject;
_a = JSII_RTTI_SYMBOL_1;
GitHubActionProject[_a] = { fqn: "@dxfrontier/projen-template-projects.GitHubActionProject", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9naXRodWItYWN0aW9uL3Byb2plY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrQ0FBNkM7QUFDN0MsdURBQThEO0FBQzlELHFDQUE0QztBQUM1QywyQ0FBa0Q7QUFDbEQseUNBQWdEO0FBQ2hELDZDQUE4QztBQUM5Qyw2Q0FBa0U7QUFDbEUsMkNBQWtEO0FBQ2xELDZDQUE0RDtBQUM1RCwrQkFBOEM7QUFDOUMsNkNBQTREO0FBQzVELDZDQUE0RDtBQUk1RDs7R0FFRztBQUNILE1BQWEsbUJBQW9CLFNBQVEscUJBQVc7SUFDbEQ7OztPQUdHO0lBQ0gsWUFBWSxPQUFtQztRQUM3QyxNQUFNLGNBQWMsR0FBRztZQUNyQixHQUFHLE9BQU87WUFDVixpQkFBaUIsRUFBRSxLQUFLO1lBQ3hCLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLGFBQWEsRUFBRSxLQUFLO1NBQ3JCLENBQUM7UUFDRixLQUFLLENBQUM7WUFDSixHQUFHLHFCQUFXLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztTQUM3QyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksMkJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakQsSUFBSSxjQUFjLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSx5Q0FBNEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRSxDQUFDO1FBQ0QsSUFBSSxjQUFjLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSx5Q0FBNEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRSxDQUFDO0lBQ0gsQ0FBQztJQUVrQixxQkFBcUIsQ0FBQyxPQUEyQjtRQUNsRSxLQUFLLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLG1CQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUkseUNBQTRCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFL0QsSUFBSSxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLHlCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLHFDQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdELENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUkseUJBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSx5QkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLHVCQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsQ0FBQztJQUNILENBQUM7O0FBL0NILGtEQWdEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByZXR0aWVyQ29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UnO1xuaW1wb3J0IHsgRGV2Q29udGFpbmVyQ29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UvZGV2Y29udGFpbmVyJztcbmltcG9ydCB7IEdpdENvbmZpZ0Jhc2UgfSBmcm9tICcuLi9iYXNlL2dpdCc7XG5pbXBvcnQgeyBHaXRIdWJDb25maWdCYXNlIH0gZnJvbSAnLi4vYmFzZS9naXRodWInO1xuaW1wb3J0IHsgSHVza3lDb25maWdCYXNlIH0gZnJvbSAnLi4vYmFzZS9odXNreSc7XG5pbXBvcnQgeyBCYXNlT3B0aW9ucyB9IGZyb20gJy4uL2Jhc2Uvb3B0aW9ucyc7XG5pbXBvcnQgeyBCYXNlUHJvamVjdE9wdGlvbnMsIEJhc2VQcm9qZWN0IH0gZnJvbSAnLi4vYmFzZS9wcm9qZWN0JztcbmltcG9ydCB7IFZzQ29kZUNvbmZpZ0Jhc2UgfSBmcm9tICcuLi9iYXNlL3ZzY29kZSc7XG5pbXBvcnQgeyBDb21taXRMaW50Q29uZmlnR2l0SHViQWN0aW9uIH0gZnJvbSAnLi9jb21taXRsaW50JztcbmltcG9ydCB7IE5wbUNvbmZpZ0dpdEh1YkFjdGlvbiB9IGZyb20gJy4vbnBtJztcbmltcG9ydCB7IFNhbXBsZUNvZGVDb25maWdHaXRIdWJBY3Rpb24gfSBmcm9tICcuL3NhbXBsZWNvZGUnO1xuaW1wb3J0IHsgVHlwZVNjcmlwdENvbmZpZ0dpdEh1YkFjdGlvbiB9IGZyb20gJy4vdHlwZXNjcmlwdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2l0SHViQWN0aW9uUHJvamVjdE9wdGlvbnMgZXh0ZW5kcyBCYXNlUHJvamVjdE9wdGlvbnMge31cblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBtYW5hZ2luZyBwcm9qZWN0IEdpdEh1YkFjdGlvbiBjb25maWd1cmF0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgR2l0SHViQWN0aW9uUHJvamVjdCBleHRlbmRzIEJhc2VQcm9qZWN0IHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBwcm9qZWN0LlxuICAgKiBAcGFyYW0gb3B0aW9ucyBBZGRpdGlvbmFsIHByb2plY3Qgb3B0aW9ucy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEdpdEh1YkFjdGlvblByb2plY3RPcHRpb25zKSB7XG4gICAgY29uc3QgdXBkYXRlZE9wdGlvbnMgPSB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgdHlwZXNjcmlwdEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgamVzdEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgZXNsaW50RW5hYmxlZDogZmFsc2UsXG4gICAgfTtcbiAgICBzdXBlcih7XG4gICAgICAuLi5CYXNlT3B0aW9ucy5zaGFyZWRPcHRpb25zKHVwZGF0ZWRPcHRpb25zKSxcbiAgICB9KTtcblxuICAgIHRoaXMubnBtQ29uZmlnID0gbmV3IE5wbUNvbmZpZ0dpdEh1YkFjdGlvbih0aGlzKTtcblxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5jb21taXRsaW50RW5hYmxlZCkge1xuICAgICAgdGhpcy5jb21taXRsaW50Q29uZmlnID0gbmV3IENvbW1pdExpbnRDb25maWdHaXRIdWJBY3Rpb24odGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5zYW1wbGVDb2RlRW5hYmxlZCkge1xuICAgICAgdGhpcy5zYW1wbGVDb2RlQ29uZmlnID0gbmV3IFNhbXBsZUNvZGVDb25maWdHaXRIdWJBY3Rpb24odGhpcyk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGluaXRpYWxpemVCYXNlQ29uZmlncyhvcHRpb25zOiBCYXNlUHJvamVjdE9wdGlvbnMpOiB2b2lkIHtcbiAgICBzdXBlci5pbml0aWFsaXplQmFzZUNvbmZpZ3Mob3B0aW9ucyk7XG5cbiAgICB0aGlzLmdpdENvbmZpZyA9IG5ldyBHaXRDb25maWdCYXNlKHRoaXMpO1xuICAgIHRoaXMudHlwZXNjcmlwdENvbmZpZyA9IG5ldyBUeXBlU2NyaXB0Q29uZmlnR2l0SHViQWN0aW9uKHRoaXMpO1xuXG4gICAgaWYgKG9wdGlvbnMucHJldHRpZXJFbmFibGVkKSB7XG4gICAgICB0aGlzLnByZXR0aWVyQ29uZmlnID0gbmV3IFByZXR0aWVyQ29uZmlnQmFzZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuZGV2Q29udGFpbmVyRW5hYmxlZCkge1xuICAgICAgdGhpcy5kZXZDb250YWluZXJDb25maWcgPSBuZXcgRGV2Q29udGFpbmVyQ29uZmlnQmFzZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuZ2l0aHViRW5hYmxlZCkge1xuICAgICAgdGhpcy5naXRodWJDb25maWcgPSBuZXcgR2l0SHViQ29uZmlnQmFzZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMudnNjb2RlRW5hYmxlZCkge1xuICAgICAgdGhpcy52c2NvZGVDb25maWcgPSBuZXcgVnNDb2RlQ29uZmlnQmFzZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuaHVza3lFbmFibGVkKSB7XG4gICAgICB0aGlzLmh1c2t5Q29uZmlnID0gbmV3IEh1c2t5Q29uZmlnQmFzZSh0aGlzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
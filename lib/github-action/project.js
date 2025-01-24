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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9naXRodWItYWN0aW9uL3Byb2plY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrQ0FBNkM7QUFDN0MsOERBQXFFO0FBQ3JFLDRDQUFtRDtBQUNuRCxrREFBeUQ7QUFDekQsZ0RBQXVEO0FBQ3ZELG9EQUFxRDtBQUNyRCw2Q0FBa0U7QUFDbEUsa0RBQXlEO0FBQ3pELG9EQUFtRTtBQUNuRSxzQ0FBcUQ7QUFDckQsb0RBQW1FO0FBQ25FLG9EQUFtRTtBQUluRTs7R0FFRztBQUNILE1BQWEsbUJBQW9CLFNBQVEscUJBQVc7SUFDbEQ7OztPQUdHO0lBQ0gsWUFBWSxPQUFtQztRQUM3QyxNQUFNLGNBQWMsR0FBRztZQUNyQixHQUFHLE9BQU87WUFDVixpQkFBaUIsRUFBRSxLQUFLO1lBQ3hCLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLGFBQWEsRUFBRSxLQUFLO1NBQ3JCLENBQUM7UUFDRixLQUFLLENBQUM7WUFDSixHQUFHLHFCQUFXLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztTQUM3QyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksMkJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakQsSUFBSSxjQUFjLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSx5Q0FBNEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRSxDQUFDO1FBQ0QsSUFBSSxjQUFjLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSx5Q0FBNEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRSxDQUFDO0lBQ0gsQ0FBQztJQUVrQixxQkFBcUIsQ0FBQyxPQUEyQjtRQUNsRSxLQUFLLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLG1CQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUkseUNBQTRCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFL0QsSUFBSSxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLHlCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLHFDQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdELENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUkseUJBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSx5QkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLHVCQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsQ0FBQztJQUNILENBQUM7O0FBL0NILGtEQWdEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByZXR0aWVyQ29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UnO1xuaW1wb3J0IHsgRGV2Q29udGFpbmVyQ29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UvY29uZmlnL2RldmNvbnRhaW5lcic7XG5pbXBvcnQgeyBHaXRDb25maWdCYXNlIH0gZnJvbSAnLi4vYmFzZS9jb25maWcvZ2l0JztcbmltcG9ydCB7IEdpdEh1YkNvbmZpZ0Jhc2UgfSBmcm9tICcuLi9iYXNlL2NvbmZpZy9naXRodWInO1xuaW1wb3J0IHsgSHVza3lDb25maWdCYXNlIH0gZnJvbSAnLi4vYmFzZS9jb25maWcvaHVza3knO1xuaW1wb3J0IHsgQmFzZU9wdGlvbnMgfSBmcm9tICcuLi9iYXNlL2NvbmZpZy9vcHRpb25zJztcbmltcG9ydCB7IEJhc2VQcm9qZWN0T3B0aW9ucywgQmFzZVByb2plY3QgfSBmcm9tICcuLi9iYXNlL3Byb2plY3QnO1xuaW1wb3J0IHsgVnNDb2RlQ29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UvY29uZmlnL3ZzY29kZSc7XG5pbXBvcnQgeyBDb21taXRMaW50Q29uZmlnR2l0SHViQWN0aW9uIH0gZnJvbSAnLi9jb25maWcvY29tbWl0bGludCc7XG5pbXBvcnQgeyBOcG1Db25maWdHaXRIdWJBY3Rpb24gfSBmcm9tICcuL2NvbmZpZy9ucG0nO1xuaW1wb3J0IHsgU2FtcGxlQ29kZUNvbmZpZ0dpdEh1YkFjdGlvbiB9IGZyb20gJy4vY29uZmlnL3NhbXBsZWNvZGUnO1xuaW1wb3J0IHsgVHlwZVNjcmlwdENvbmZpZ0dpdEh1YkFjdGlvbiB9IGZyb20gJy4vY29uZmlnL3R5cGVzY3JpcHQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdpdEh1YkFjdGlvblByb2plY3RPcHRpb25zIGV4dGVuZHMgQmFzZVByb2plY3RPcHRpb25zIHt9XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgbWFuYWdpbmcgcHJvamVjdCBHaXRIdWJBY3Rpb24gY29uZmlndXJhdGlvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIEdpdEh1YkFjdGlvblByb2plY3QgZXh0ZW5kcyBCYXNlUHJvamVjdCB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgcHJvamVjdC5cbiAgICogQHBhcmFtIG9wdGlvbnMgQWRkaXRpb25hbCBwcm9qZWN0IG9wdGlvbnMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBHaXRIdWJBY3Rpb25Qcm9qZWN0T3B0aW9ucykge1xuICAgIGNvbnN0IHVwZGF0ZWRPcHRpb25zID0ge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIHR5cGVzY3JpcHRFbmFibGVkOiBmYWxzZSxcbiAgICAgIGplc3RFbmFibGVkOiBmYWxzZSxcbiAgICAgIGVzbGludEVuYWJsZWQ6IGZhbHNlLFxuICAgIH07XG4gICAgc3VwZXIoe1xuICAgICAgLi4uQmFzZU9wdGlvbnMuc2hhcmVkT3B0aW9ucyh1cGRhdGVkT3B0aW9ucyksXG4gICAgfSk7XG5cbiAgICB0aGlzLm5wbUNvbmZpZyA9IG5ldyBOcG1Db25maWdHaXRIdWJBY3Rpb24odGhpcyk7XG5cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuY29tbWl0bGludEVuYWJsZWQpIHtcbiAgICAgIHRoaXMuY29tbWl0bGludENvbmZpZyA9IG5ldyBDb21taXRMaW50Q29uZmlnR2l0SHViQWN0aW9uKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuc2FtcGxlQ29kZUVuYWJsZWQpIHtcbiAgICAgIHRoaXMuc2FtcGxlQ29kZUNvbmZpZyA9IG5ldyBTYW1wbGVDb2RlQ29uZmlnR2l0SHViQWN0aW9uKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBpbml0aWFsaXplQmFzZUNvbmZpZ3Mob3B0aW9uczogQmFzZVByb2plY3RPcHRpb25zKTogdm9pZCB7XG4gICAgc3VwZXIuaW5pdGlhbGl6ZUJhc2VDb25maWdzKG9wdGlvbnMpO1xuXG4gICAgdGhpcy5naXRDb25maWcgPSBuZXcgR2l0Q29uZmlnQmFzZSh0aGlzKTtcbiAgICB0aGlzLnR5cGVzY3JpcHRDb25maWcgPSBuZXcgVHlwZVNjcmlwdENvbmZpZ0dpdEh1YkFjdGlvbih0aGlzKTtcblxuICAgIGlmIChvcHRpb25zLnByZXR0aWVyRW5hYmxlZCkge1xuICAgICAgdGhpcy5wcmV0dGllckNvbmZpZyA9IG5ldyBQcmV0dGllckNvbmZpZ0Jhc2UodGhpcyk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmRldkNvbnRhaW5lckVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZGV2Q29udGFpbmVyQ29uZmlnID0gbmV3IERldkNvbnRhaW5lckNvbmZpZ0Jhc2UodGhpcyk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmdpdGh1YkVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZ2l0aHViQ29uZmlnID0gbmV3IEdpdEh1YkNvbmZpZ0Jhc2UodGhpcyk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnZzY29kZUVuYWJsZWQpIHtcbiAgICAgIHRoaXMudnNjb2RlQ29uZmlnID0gbmV3IFZzQ29kZUNvbmZpZ0Jhc2UodGhpcyk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmh1c2t5RW5hYmxlZCkge1xuICAgICAgdGhpcy5odXNreUNvbmZpZyA9IG5ldyBIdXNreUNvbmZpZ0Jhc2UodGhpcyk7XG4gICAgfVxuICB9XG59XG4iXX0=
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
GitHubActionProject[_a] = { fqn: "@dxfrontier/projen-template-projects.GitHubActionProject", version: "0.0.0" };
GitHubActionProject.cleanCommand = 'npx projen eject && rm -rf .projenrc.js.bak scripts .projen';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9naXRodWItYWN0aW9uL3Byb2plY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrQ0FBNkM7QUFDN0MsOERBQXFFO0FBQ3JFLDRDQUFtRDtBQUNuRCxrREFBeUQ7QUFDekQsZ0RBQXVEO0FBQ3ZELG9EQUFxRDtBQUNyRCw2Q0FBa0U7QUFDbEUsa0RBQXlEO0FBQ3pELG9EQUFtRTtBQUNuRSxzQ0FBcUQ7QUFDckQsb0RBQW1FO0FBQ25FLG9EQUFtRTtBQUNuRSx5Q0FBcUM7QUFDckMsNENBQTJEO0FBQzNELGlEQUE4QztBQUM5QyxrREFBeUQ7QUFJekQ7O0dBRUc7QUFDSCxNQUFhLG1CQUFvQixTQUFRLHFCQUFXO0lBR2xEOzs7T0FHRztJQUVILFlBQVksT0FBbUM7UUFDN0MsTUFBTSxjQUFjLEdBQUc7WUFDckIsR0FBRyxPQUFPO1lBQ1YsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixJQUFJLElBQUk7WUFDcEQsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLG1CQUFtQixJQUFJLElBQUk7WUFDeEQsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUksS0FBSztZQUM3QyxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJO1lBQzVDLFlBQVksRUFBRSxPQUFPLENBQUMsWUFBWSxJQUFJLElBQUk7WUFDMUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLElBQUksS0FBSztZQUN6QyxlQUFlLEVBQUUsT0FBTyxDQUFDLGVBQWUsSUFBSSxJQUFJO1lBQ2hELGFBQWEsRUFBRSxPQUFPLENBQUMsYUFBYSxJQUFJLElBQUk7WUFDNUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixJQUFJLElBQUk7WUFDcEQsaUJBQWlCLEVBQUUsS0FBSztZQUN4QixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsSUFBSSxxQkFBUyxDQUFDLDBCQUEwQjtZQUN4RSxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJO1NBQzdDLENBQUM7UUFDRixLQUFLLENBQUM7WUFDSixHQUFHLHFCQUFXLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztZQUM1QyxNQUFNLEVBQUUsSUFBSSxpQ0FBd0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUM7U0FDakUsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLDJCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpELElBQUksY0FBYyxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUkseUNBQTRCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakUsQ0FBQztRQUNELElBQUksY0FBYyxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUkseUNBQTRCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakUsQ0FBQztJQUNILENBQUM7SUFFa0IscUJBQXFCLENBQUMsT0FBMkI7UUFDbEUsS0FBSyxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxtQkFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLHlDQUE0QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9ELElBQUksT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSx5QkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxxQ0FBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3RCxDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHlCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUkseUJBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx1QkFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUkseUJBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsQ0FBQztJQUNILENBQUM7SUFFZSxjQUFjO1FBQzVCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV2QixZQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7QUFyRUgsa0RBc0VDOzs7QUFyRVEsZ0NBQVksR0FBRyw2REFBNkQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByZXR0aWVyQ29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UnO1xuaW1wb3J0IHsgRGV2Q29udGFpbmVyQ29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UvY29uZmlnL2RldmNvbnRhaW5lcic7XG5pbXBvcnQgeyBHaXRDb25maWdCYXNlIH0gZnJvbSAnLi4vYmFzZS9jb25maWcvZ2l0JztcbmltcG9ydCB7IEdpdEh1YkNvbmZpZ0Jhc2UgfSBmcm9tICcuLi9iYXNlL2NvbmZpZy9naXRodWInO1xuaW1wb3J0IHsgSHVza3lDb25maWdCYXNlIH0gZnJvbSAnLi4vYmFzZS9jb25maWcvaHVza3knO1xuaW1wb3J0IHsgQmFzZU9wdGlvbnMgfSBmcm9tICcuLi9iYXNlL2NvbmZpZy9vcHRpb25zJztcbmltcG9ydCB7IEJhc2VQcm9qZWN0T3B0aW9ucywgQmFzZVByb2plY3QgfSBmcm9tICcuLi9iYXNlL3Byb2plY3QnO1xuaW1wb3J0IHsgVnNDb2RlQ29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UvY29uZmlnL3ZzY29kZSc7XG5pbXBvcnQgeyBDb21taXRMaW50Q29uZmlnR2l0SHViQWN0aW9uIH0gZnJvbSAnLi9jb25maWcvY29tbWl0bGludCc7XG5pbXBvcnQgeyBOcG1Db25maWdHaXRIdWJBY3Rpb24gfSBmcm9tICcuL2NvbmZpZy9ucG0nO1xuaW1wb3J0IHsgU2FtcGxlQ29kZUNvbmZpZ0dpdEh1YkFjdGlvbiB9IGZyb20gJy4vY29uZmlnL3NhbXBsZWNvZGUnO1xuaW1wb3J0IHsgVHlwZVNjcmlwdENvbmZpZ0dpdEh1YkFjdGlvbiB9IGZyb20gJy4vY29uZmlnL3R5cGVzY3JpcHQnO1xuaW1wb3J0IHsgdXRpbCB9IGZyb20gJy4uL3V0aWwvdXRpbHMnO1xuaW1wb3J0IHsgUmVhZG1lQ29uZmlnR2l0SHViQWN0aW9uIH0gZnJvbSAnLi9jb25maWcvcmVhZG1lJztcbmltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gJy4uL3V0aWwvY29uc3RhbnRzJztcbmltcG9ydCB7IElzc3Vlc0NvbmZpZ0Jhc2UgfSBmcm9tICcuLi9iYXNlL2NvbmZpZy9pc3N1ZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdpdEh1YkFjdGlvblByb2plY3RPcHRpb25zIGV4dGVuZHMgQmFzZVByb2plY3RPcHRpb25zIHt9XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgbWFuYWdpbmcgcHJvamVjdCBHaXRIdWJBY3Rpb24gY29uZmlndXJhdGlvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIEdpdEh1YkFjdGlvblByb2plY3QgZXh0ZW5kcyBCYXNlUHJvamVjdCB7XG4gIHN0YXRpYyBjbGVhbkNvbW1hbmQgPSAnbnB4IHByb2plbiBlamVjdCAmJiBybSAtcmYgLnByb2plbnJjLmpzLmJhayBzY3JpcHRzIC5wcm9qZW4nO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgcHJvamVjdC5cbiAgICogQHBhcmFtIG9wdGlvbnMgQWRkaXRpb25hbCBwcm9qZWN0IG9wdGlvbnMuXG4gICAqL1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEdpdEh1YkFjdGlvblByb2plY3RPcHRpb25zKSB7XG4gICAgY29uc3QgdXBkYXRlZE9wdGlvbnMgPSB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgY29tbWl0bGludEVuYWJsZWQ6IG9wdGlvbnMuY29tbWl0bGludEVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIGRldkNvbnRhaW5lckVuYWJsZWQ6IG9wdGlvbnMuZGV2Q29udGFpbmVyRW5hYmxlZCA/PyB0cnVlLFxuICAgICAgZXNsaW50RW5hYmxlZDogb3B0aW9ucy5lc2xpbnRFbmFibGVkID8/IGZhbHNlLFxuICAgICAgZ2l0aHViRW5hYmxlZDogb3B0aW9ucy5naXRodWJFbmFibGVkID8/IHRydWUsXG4gICAgICBodXNreUVuYWJsZWQ6IG9wdGlvbnMuaHVza3lFbmFibGVkID8/IHRydWUsXG4gICAgICBqZXN0RW5hYmxlZDogb3B0aW9ucy5qZXN0RW5hYmxlZCA/PyBmYWxzZSxcbiAgICAgIHByZXR0aWVyRW5hYmxlZDogb3B0aW9ucy5wcmV0dGllckVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIHZzY29kZUVuYWJsZWQ6IG9wdGlvbnMudnNjb2RlRW5hYmxlZCA/PyB0cnVlLFxuICAgICAgc2FtcGxlQ29kZUVuYWJsZWQ6IG9wdGlvbnMuc2FtcGxlQ29kZUVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIHR5cGVzY3JpcHRFbmFibGVkOiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBvcHRpb25zLmRlc2NyaXB0aW9uID8/IGNvbnN0YW50cy5HSVRIVUJfUFJPSkVDVF9ERVNDUklQVElPTixcbiAgICAgIGlzc3Vlc0VuYWJsZWQ6IG9wdGlvbnMuaXNzdWVzRW5hYmxlZCA/PyB0cnVlLFxuICAgIH07XG4gICAgc3VwZXIoe1xuICAgICAgLi4uQmFzZU9wdGlvbnMuc2hhcmVkT3B0aW9ucyh1cGRhdGVkT3B0aW9ucyksXG4gICAgICByZWFkbWU6IG5ldyBSZWFkbWVDb25maWdHaXRIdWJBY3Rpb24oKS5nZXRSZWFkbWUodXBkYXRlZE9wdGlvbnMpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5ucG1Db25maWcgPSBuZXcgTnBtQ29uZmlnR2l0SHViQWN0aW9uKHRoaXMpO1xuXG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLmNvbW1pdGxpbnRFbmFibGVkKSB7XG4gICAgICB0aGlzLmNvbW1pdGxpbnRDb25maWcgPSBuZXcgQ29tbWl0TGludENvbmZpZ0dpdEh1YkFjdGlvbih0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLnNhbXBsZUNvZGVFbmFibGVkKSB7XG4gICAgICB0aGlzLnNhbXBsZUNvZGVDb25maWcgPSBuZXcgU2FtcGxlQ29kZUNvbmZpZ0dpdEh1YkFjdGlvbih0aGlzKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgaW5pdGlhbGl6ZUJhc2VDb25maWdzKG9wdGlvbnM6IEJhc2VQcm9qZWN0T3B0aW9ucyk6IHZvaWQge1xuICAgIHN1cGVyLmluaXRpYWxpemVCYXNlQ29uZmlncyhvcHRpb25zKTtcblxuICAgIHRoaXMuZ2l0Q29uZmlnID0gbmV3IEdpdENvbmZpZ0Jhc2UodGhpcyk7XG4gICAgdGhpcy50eXBlc2NyaXB0Q29uZmlnID0gbmV3IFR5cGVTY3JpcHRDb25maWdHaXRIdWJBY3Rpb24odGhpcyk7XG5cbiAgICBpZiAob3B0aW9ucy5wcmV0dGllckVuYWJsZWQpIHtcbiAgICAgIHRoaXMucHJldHRpZXJDb25maWcgPSBuZXcgUHJldHRpZXJDb25maWdCYXNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5kZXZDb250YWluZXJFbmFibGVkKSB7XG4gICAgICB0aGlzLmRldkNvbnRhaW5lckNvbmZpZyA9IG5ldyBEZXZDb250YWluZXJDb25maWdCYXNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5naXRodWJFbmFibGVkKSB7XG4gICAgICB0aGlzLmdpdGh1YkNvbmZpZyA9IG5ldyBHaXRIdWJDb25maWdCYXNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy52c2NvZGVFbmFibGVkKSB7XG4gICAgICB0aGlzLnZzY29kZUNvbmZpZyA9IG5ldyBWc0NvZGVDb25maWdCYXNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5odXNreUVuYWJsZWQpIHtcbiAgICAgIHRoaXMuaHVza3lDb25maWcgPSBuZXcgSHVza3lDb25maWdCYXNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5pc3N1ZXNFbmFibGVkKSB7XG4gICAgICB0aGlzLmlzc3Vlc0NvbmZpZyA9IG5ldyBJc3N1ZXNDb25maWdCYXNlKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBwb3N0U3ludGhlc2l6ZSgpOiB2b2lkIHtcbiAgICBzdXBlci5wb3N0U3ludGhlc2l6ZSgpO1xuXG4gICAgdXRpbC5zZXR1cEV4aXRIYW5kbGVyKEdpdEh1YkFjdGlvblByb2plY3QuY2xlYW5Db21tYW5kKTtcbiAgfVxufVxuIl19
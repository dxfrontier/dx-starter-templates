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
            readme: new readme_1.ReadmeConfigGithub().getReadme(updatedOptions),
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
GitHubActionProject.cleanCommand = 'npx projen eject && rm -rf .projenrc.ts.bak scripts .projen';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9naXRodWItYWN0aW9uL3Byb2plY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrQ0FBNkM7QUFDN0MsOERBQXFFO0FBQ3JFLDRDQUFtRDtBQUNuRCxrREFBeUQ7QUFDekQsZ0RBQXVEO0FBQ3ZELG9EQUFxRDtBQUNyRCw2Q0FBa0U7QUFDbEUsa0RBQXlEO0FBQ3pELG9EQUFtRTtBQUNuRSxzQ0FBcUQ7QUFDckQsb0RBQW1FO0FBQ25FLG9EQUFtRTtBQUNuRSx5Q0FBcUM7QUFDckMsNENBQXFEO0FBSXJEOztHQUVHO0FBQ0gsTUFBYSxtQkFBb0IsU0FBUSxxQkFBVztJQUdsRDs7O09BR0c7SUFFSCxZQUFZLE9BQW1DO1FBQzdDLE1BQU0sY0FBYyxHQUFHO1lBQ3JCLEdBQUcsT0FBTztZQUNWLGlCQUFpQixFQUFFLEtBQUs7WUFDeEIsV0FBVyxFQUFFLEtBQUs7WUFDbEIsYUFBYSxFQUFFLEtBQUs7U0FDckIsQ0FBQztRQUNGLEtBQUssQ0FBQztZQUNKLEdBQUcscUJBQVcsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDO1lBQzVDLE1BQU0sRUFBRSxJQUFJLDJCQUFrQixFQUFFLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQztTQUMzRCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksMkJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakQsSUFBSSxjQUFjLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSx5Q0FBNEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRSxDQUFDO1FBQ0QsSUFBSSxjQUFjLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSx5Q0FBNEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRSxDQUFDO0lBQ0gsQ0FBQztJQUVrQixxQkFBcUIsQ0FBQyxPQUEyQjtRQUNsRSxLQUFLLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLG1CQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUkseUNBQTRCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFL0QsSUFBSSxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLHlCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLHFDQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdELENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUkseUJBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSx5QkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLHVCQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsQ0FBQztJQUNILENBQUM7SUFFZSxjQUFjO1FBQzVCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV2QixZQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7QUF6REgsa0RBMERDOzs7QUF6RFEsZ0NBQVksR0FBRyw2REFBNkQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByZXR0aWVyQ29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UnO1xuaW1wb3J0IHsgRGV2Q29udGFpbmVyQ29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UvY29uZmlnL2RldmNvbnRhaW5lcic7XG5pbXBvcnQgeyBHaXRDb25maWdCYXNlIH0gZnJvbSAnLi4vYmFzZS9jb25maWcvZ2l0JztcbmltcG9ydCB7IEdpdEh1YkNvbmZpZ0Jhc2UgfSBmcm9tICcuLi9iYXNlL2NvbmZpZy9naXRodWInO1xuaW1wb3J0IHsgSHVza3lDb25maWdCYXNlIH0gZnJvbSAnLi4vYmFzZS9jb25maWcvaHVza3knO1xuaW1wb3J0IHsgQmFzZU9wdGlvbnMgfSBmcm9tICcuLi9iYXNlL2NvbmZpZy9vcHRpb25zJztcbmltcG9ydCB7IEJhc2VQcm9qZWN0T3B0aW9ucywgQmFzZVByb2plY3QgfSBmcm9tICcuLi9iYXNlL3Byb2plY3QnO1xuaW1wb3J0IHsgVnNDb2RlQ29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UvY29uZmlnL3ZzY29kZSc7XG5pbXBvcnQgeyBDb21taXRMaW50Q29uZmlnR2l0SHViQWN0aW9uIH0gZnJvbSAnLi9jb25maWcvY29tbWl0bGludCc7XG5pbXBvcnQgeyBOcG1Db25maWdHaXRIdWJBY3Rpb24gfSBmcm9tICcuL2NvbmZpZy9ucG0nO1xuaW1wb3J0IHsgU2FtcGxlQ29kZUNvbmZpZ0dpdEh1YkFjdGlvbiB9IGZyb20gJy4vY29uZmlnL3NhbXBsZWNvZGUnO1xuaW1wb3J0IHsgVHlwZVNjcmlwdENvbmZpZ0dpdEh1YkFjdGlvbiB9IGZyb20gJy4vY29uZmlnL3R5cGVzY3JpcHQnO1xuaW1wb3J0IHsgdXRpbCB9IGZyb20gJy4uL3V0aWwvdXRpbHMnO1xuaW1wb3J0IHsgUmVhZG1lQ29uZmlnR2l0aHViIH0gZnJvbSAnLi9jb25maWcvcmVhZG1lJztcblxuZXhwb3J0IGludGVyZmFjZSBHaXRIdWJBY3Rpb25Qcm9qZWN0T3B0aW9ucyBleHRlbmRzIEJhc2VQcm9qZWN0T3B0aW9ucyB7fVxuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIG1hbmFnaW5nIHByb2plY3QgR2l0SHViQWN0aW9uIGNvbmZpZ3VyYXRpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBHaXRIdWJBY3Rpb25Qcm9qZWN0IGV4dGVuZHMgQmFzZVByb2plY3Qge1xuICBzdGF0aWMgY2xlYW5Db21tYW5kID0gJ25weCBwcm9qZW4gZWplY3QgJiYgcm0gLXJmIC5wcm9qZW5yYy50cy5iYWsgc2NyaXB0cyAucHJvamVuJztcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIHByb2plY3QuXG4gICAqIEBwYXJhbSBvcHRpb25zIEFkZGl0aW9uYWwgcHJvamVjdCBvcHRpb25zLlxuICAgKi9cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBHaXRIdWJBY3Rpb25Qcm9qZWN0T3B0aW9ucykge1xuICAgIGNvbnN0IHVwZGF0ZWRPcHRpb25zID0ge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIHR5cGVzY3JpcHRFbmFibGVkOiBmYWxzZSxcbiAgICAgIGplc3RFbmFibGVkOiBmYWxzZSxcbiAgICAgIGVzbGludEVuYWJsZWQ6IGZhbHNlLFxuICAgIH07XG4gICAgc3VwZXIoe1xuICAgICAgLi4uQmFzZU9wdGlvbnMuc2hhcmVkT3B0aW9ucyh1cGRhdGVkT3B0aW9ucyksXG4gICAgICByZWFkbWU6IG5ldyBSZWFkbWVDb25maWdHaXRodWIoKS5nZXRSZWFkbWUodXBkYXRlZE9wdGlvbnMpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5ucG1Db25maWcgPSBuZXcgTnBtQ29uZmlnR2l0SHViQWN0aW9uKHRoaXMpO1xuXG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLmNvbW1pdGxpbnRFbmFibGVkKSB7XG4gICAgICB0aGlzLmNvbW1pdGxpbnRDb25maWcgPSBuZXcgQ29tbWl0TGludENvbmZpZ0dpdEh1YkFjdGlvbih0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLnNhbXBsZUNvZGVFbmFibGVkKSB7XG4gICAgICB0aGlzLnNhbXBsZUNvZGVDb25maWcgPSBuZXcgU2FtcGxlQ29kZUNvbmZpZ0dpdEh1YkFjdGlvbih0aGlzKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgaW5pdGlhbGl6ZUJhc2VDb25maWdzKG9wdGlvbnM6IEJhc2VQcm9qZWN0T3B0aW9ucyk6IHZvaWQge1xuICAgIHN1cGVyLmluaXRpYWxpemVCYXNlQ29uZmlncyhvcHRpb25zKTtcblxuICAgIHRoaXMuZ2l0Q29uZmlnID0gbmV3IEdpdENvbmZpZ0Jhc2UodGhpcyk7XG4gICAgdGhpcy50eXBlc2NyaXB0Q29uZmlnID0gbmV3IFR5cGVTY3JpcHRDb25maWdHaXRIdWJBY3Rpb24odGhpcyk7XG5cbiAgICBpZiAob3B0aW9ucy5wcmV0dGllckVuYWJsZWQpIHtcbiAgICAgIHRoaXMucHJldHRpZXJDb25maWcgPSBuZXcgUHJldHRpZXJDb25maWdCYXNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5kZXZDb250YWluZXJFbmFibGVkKSB7XG4gICAgICB0aGlzLmRldkNvbnRhaW5lckNvbmZpZyA9IG5ldyBEZXZDb250YWluZXJDb25maWdCYXNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5naXRodWJFbmFibGVkKSB7XG4gICAgICB0aGlzLmdpdGh1YkNvbmZpZyA9IG5ldyBHaXRIdWJDb25maWdCYXNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy52c2NvZGVFbmFibGVkKSB7XG4gICAgICB0aGlzLnZzY29kZUNvbmZpZyA9IG5ldyBWc0NvZGVDb25maWdCYXNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5odXNreUVuYWJsZWQpIHtcbiAgICAgIHRoaXMuaHVza3lDb25maWcgPSBuZXcgSHVza3lDb25maWdCYXNlKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBwb3N0U3ludGhlc2l6ZSgpOiB2b2lkIHtcbiAgICBzdXBlci5wb3N0U3ludGhlc2l6ZSgpO1xuXG4gICAgdXRpbC5zZXR1cEV4aXRIYW5kbGVyKEdpdEh1YkFjdGlvblByb2plY3QuY2xlYW5Db21tYW5kKTtcbiAgfVxufVxuIl19
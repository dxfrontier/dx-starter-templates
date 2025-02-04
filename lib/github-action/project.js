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
    postSynthesize() {
        super.postSynthesize();
        utils_1.util.setupExitHandler(GitHubActionProject.cleanCommand);
    }
}
exports.GitHubActionProject = GitHubActionProject;
_a = JSII_RTTI_SYMBOL_1;
GitHubActionProject[_a] = { fqn: "@dxfrontier/projen-template-projects.GitHubActionProject", version: "0.0.0" };
GitHubActionProject.cleanCommand = 'npx projen eject && rm -rf .projenrc.ts.bak scripts .projen';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9naXRodWItYWN0aW9uL3Byb2plY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrQ0FBNkM7QUFDN0MsOERBQXFFO0FBQ3JFLDRDQUFtRDtBQUNuRCxrREFBeUQ7QUFDekQsZ0RBQXVEO0FBQ3ZELG9EQUFxRDtBQUNyRCw2Q0FBa0U7QUFDbEUsa0RBQXlEO0FBQ3pELG9EQUFtRTtBQUNuRSxzQ0FBcUQ7QUFDckQsb0RBQW1FO0FBQ25FLG9EQUFtRTtBQUNuRSx5Q0FBcUM7QUFJckM7O0dBRUc7QUFDSCxNQUFhLG1CQUFvQixTQUFRLHFCQUFXO0lBR2xEOzs7T0FHRztJQUVILFlBQVksT0FBbUM7UUFDN0MsTUFBTSxjQUFjLEdBQUc7WUFDckIsR0FBRyxPQUFPO1lBQ1YsaUJBQWlCLEVBQUUsS0FBSztZQUN4QixXQUFXLEVBQUUsS0FBSztZQUNsQixhQUFhLEVBQUUsS0FBSztTQUNyQixDQUFDO1FBQ0YsS0FBSyxDQUFDO1lBQ0osR0FBRyxxQkFBVyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUM7U0FDN0MsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLDJCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpELElBQUksY0FBYyxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUkseUNBQTRCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakUsQ0FBQztRQUNELElBQUksY0FBYyxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUkseUNBQTRCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakUsQ0FBQztJQUNILENBQUM7SUFFa0IscUJBQXFCLENBQUMsT0FBMkI7UUFDbEUsS0FBSyxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxtQkFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLHlDQUE0QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9ELElBQUksT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSx5QkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxxQ0FBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3RCxDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHlCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUkseUJBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx1QkFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLENBQUM7SUFDSCxDQUFDO0lBRWUsY0FBYztRQUM1QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdkIsWUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFELENBQUM7O0FBeERILGtEQXlEQzs7O0FBeERRLGdDQUFZLEdBQUcsNkRBQTZELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmV0dGllckNvbmZpZ0Jhc2UgfSBmcm9tICcuLi9iYXNlJztcbmltcG9ydCB7IERldkNvbnRhaW5lckNvbmZpZ0Jhc2UgfSBmcm9tICcuLi9iYXNlL2NvbmZpZy9kZXZjb250YWluZXInO1xuaW1wb3J0IHsgR2l0Q29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UvY29uZmlnL2dpdCc7XG5pbXBvcnQgeyBHaXRIdWJDb25maWdCYXNlIH0gZnJvbSAnLi4vYmFzZS9jb25maWcvZ2l0aHViJztcbmltcG9ydCB7IEh1c2t5Q29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UvY29uZmlnL2h1c2t5JztcbmltcG9ydCB7IEJhc2VPcHRpb25zIH0gZnJvbSAnLi4vYmFzZS9jb25maWcvb3B0aW9ucyc7XG5pbXBvcnQgeyBCYXNlUHJvamVjdE9wdGlvbnMsIEJhc2VQcm9qZWN0IH0gZnJvbSAnLi4vYmFzZS9wcm9qZWN0JztcbmltcG9ydCB7IFZzQ29kZUNvbmZpZ0Jhc2UgfSBmcm9tICcuLi9iYXNlL2NvbmZpZy92c2NvZGUnO1xuaW1wb3J0IHsgQ29tbWl0TGludENvbmZpZ0dpdEh1YkFjdGlvbiB9IGZyb20gJy4vY29uZmlnL2NvbW1pdGxpbnQnO1xuaW1wb3J0IHsgTnBtQ29uZmlnR2l0SHViQWN0aW9uIH0gZnJvbSAnLi9jb25maWcvbnBtJztcbmltcG9ydCB7IFNhbXBsZUNvZGVDb25maWdHaXRIdWJBY3Rpb24gfSBmcm9tICcuL2NvbmZpZy9zYW1wbGVjb2RlJztcbmltcG9ydCB7IFR5cGVTY3JpcHRDb25maWdHaXRIdWJBY3Rpb24gfSBmcm9tICcuL2NvbmZpZy90eXBlc2NyaXB0JztcbmltcG9ydCB7IHV0aWwgfSBmcm9tICcuLi91dGlsL3V0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBHaXRIdWJBY3Rpb25Qcm9qZWN0T3B0aW9ucyBleHRlbmRzIEJhc2VQcm9qZWN0T3B0aW9ucyB7fVxuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIG1hbmFnaW5nIHByb2plY3QgR2l0SHViQWN0aW9uIGNvbmZpZ3VyYXRpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBHaXRIdWJBY3Rpb25Qcm9qZWN0IGV4dGVuZHMgQmFzZVByb2plY3Qge1xuICBzdGF0aWMgY2xlYW5Db21tYW5kID0gJ25weCBwcm9qZW4gZWplY3QgJiYgcm0gLXJmIC5wcm9qZW5yYy50cy5iYWsgc2NyaXB0cyAucHJvamVuJztcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIHByb2plY3QuXG4gICAqIEBwYXJhbSBvcHRpb25zIEFkZGl0aW9uYWwgcHJvamVjdCBvcHRpb25zLlxuICAgKi9cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBHaXRIdWJBY3Rpb25Qcm9qZWN0T3B0aW9ucykge1xuICAgIGNvbnN0IHVwZGF0ZWRPcHRpb25zID0ge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIHR5cGVzY3JpcHRFbmFibGVkOiBmYWxzZSxcbiAgICAgIGplc3RFbmFibGVkOiBmYWxzZSxcbiAgICAgIGVzbGludEVuYWJsZWQ6IGZhbHNlLFxuICAgIH07XG4gICAgc3VwZXIoe1xuICAgICAgLi4uQmFzZU9wdGlvbnMuc2hhcmVkT3B0aW9ucyh1cGRhdGVkT3B0aW9ucyksXG4gICAgfSk7XG5cbiAgICB0aGlzLm5wbUNvbmZpZyA9IG5ldyBOcG1Db25maWdHaXRIdWJBY3Rpb24odGhpcyk7XG5cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuY29tbWl0bGludEVuYWJsZWQpIHtcbiAgICAgIHRoaXMuY29tbWl0bGludENvbmZpZyA9IG5ldyBDb21taXRMaW50Q29uZmlnR2l0SHViQWN0aW9uKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuc2FtcGxlQ29kZUVuYWJsZWQpIHtcbiAgICAgIHRoaXMuc2FtcGxlQ29kZUNvbmZpZyA9IG5ldyBTYW1wbGVDb2RlQ29uZmlnR2l0SHViQWN0aW9uKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBpbml0aWFsaXplQmFzZUNvbmZpZ3Mob3B0aW9uczogQmFzZVByb2plY3RPcHRpb25zKTogdm9pZCB7XG4gICAgc3VwZXIuaW5pdGlhbGl6ZUJhc2VDb25maWdzKG9wdGlvbnMpO1xuXG4gICAgdGhpcy5naXRDb25maWcgPSBuZXcgR2l0Q29uZmlnQmFzZSh0aGlzKTtcbiAgICB0aGlzLnR5cGVzY3JpcHRDb25maWcgPSBuZXcgVHlwZVNjcmlwdENvbmZpZ0dpdEh1YkFjdGlvbih0aGlzKTtcblxuICAgIGlmIChvcHRpb25zLnByZXR0aWVyRW5hYmxlZCkge1xuICAgICAgdGhpcy5wcmV0dGllckNvbmZpZyA9IG5ldyBQcmV0dGllckNvbmZpZ0Jhc2UodGhpcyk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmRldkNvbnRhaW5lckVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZGV2Q29udGFpbmVyQ29uZmlnID0gbmV3IERldkNvbnRhaW5lckNvbmZpZ0Jhc2UodGhpcyk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmdpdGh1YkVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZ2l0aHViQ29uZmlnID0gbmV3IEdpdEh1YkNvbmZpZ0Jhc2UodGhpcyk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnZzY29kZUVuYWJsZWQpIHtcbiAgICAgIHRoaXMudnNjb2RlQ29uZmlnID0gbmV3IFZzQ29kZUNvbmZpZ0Jhc2UodGhpcyk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmh1c2t5RW5hYmxlZCkge1xuICAgICAgdGhpcy5odXNreUNvbmZpZyA9IG5ldyBIdXNreUNvbmZpZ0Jhc2UodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHBvc3RTeW50aGVzaXplKCk6IHZvaWQge1xuICAgIHN1cGVyLnBvc3RTeW50aGVzaXplKCk7XG5cbiAgICB1dGlsLnNldHVwRXhpdEhhbmRsZXIoR2l0SHViQWN0aW9uUHJvamVjdC5jbGVhbkNvbW1hbmQpO1xuICB9XG59XG4iXX0=
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
            typescriptEnabled: false,
            jestEnabled: false,
            eslintEnabled: false,
            description: options.description ?? constants_1.constants.GITHUB_PROJECT_DESCRIPTION,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9naXRodWItYWN0aW9uL3Byb2plY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrQ0FBNkM7QUFDN0MsOERBQXFFO0FBQ3JFLDRDQUFtRDtBQUNuRCxrREFBeUQ7QUFDekQsZ0RBQXVEO0FBQ3ZELG9EQUFxRDtBQUNyRCw2Q0FBa0U7QUFDbEUsa0RBQXlEO0FBQ3pELG9EQUFtRTtBQUNuRSxzQ0FBcUQ7QUFDckQsb0RBQW1FO0FBQ25FLG9EQUFtRTtBQUNuRSx5Q0FBcUM7QUFDckMsNENBQXFEO0FBQ3JELGlEQUE4QztBQUk5Qzs7R0FFRztBQUNILE1BQWEsbUJBQW9CLFNBQVEscUJBQVc7SUFHbEQ7OztPQUdHO0lBRUgsWUFBWSxPQUFtQztRQUM3QyxNQUFNLGNBQWMsR0FBRztZQUNyQixHQUFHLE9BQU87WUFDVixpQkFBaUIsRUFBRSxLQUFLO1lBQ3hCLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVyxJQUFJLHFCQUFTLENBQUMsMEJBQTBCO1NBQ3pFLENBQUM7UUFDRixLQUFLLENBQUM7WUFDSixHQUFHLHFCQUFXLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztZQUM1QyxNQUFNLEVBQUUsSUFBSSwyQkFBa0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUM7U0FDM0QsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLDJCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpELElBQUksY0FBYyxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUkseUNBQTRCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakUsQ0FBQztRQUNELElBQUksY0FBYyxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUkseUNBQTRCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakUsQ0FBQztJQUNILENBQUM7SUFFa0IscUJBQXFCLENBQUMsT0FBMkI7UUFDbEUsS0FBSyxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxtQkFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLHlDQUE0QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9ELElBQUksT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSx5QkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxxQ0FBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3RCxDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHlCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUkseUJBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx1QkFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLENBQUM7SUFDSCxDQUFDO0lBRWUsY0FBYztRQUM1QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdkIsWUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFELENBQUM7O0FBMURILGtEQTJEQzs7O0FBMURRLGdDQUFZLEdBQUcsNkRBQTZELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmV0dGllckNvbmZpZ0Jhc2UgfSBmcm9tICcuLi9iYXNlJztcbmltcG9ydCB7IERldkNvbnRhaW5lckNvbmZpZ0Jhc2UgfSBmcm9tICcuLi9iYXNlL2NvbmZpZy9kZXZjb250YWluZXInO1xuaW1wb3J0IHsgR2l0Q29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UvY29uZmlnL2dpdCc7XG5pbXBvcnQgeyBHaXRIdWJDb25maWdCYXNlIH0gZnJvbSAnLi4vYmFzZS9jb25maWcvZ2l0aHViJztcbmltcG9ydCB7IEh1c2t5Q29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UvY29uZmlnL2h1c2t5JztcbmltcG9ydCB7IEJhc2VPcHRpb25zIH0gZnJvbSAnLi4vYmFzZS9jb25maWcvb3B0aW9ucyc7XG5pbXBvcnQgeyBCYXNlUHJvamVjdE9wdGlvbnMsIEJhc2VQcm9qZWN0IH0gZnJvbSAnLi4vYmFzZS9wcm9qZWN0JztcbmltcG9ydCB7IFZzQ29kZUNvbmZpZ0Jhc2UgfSBmcm9tICcuLi9iYXNlL2NvbmZpZy92c2NvZGUnO1xuaW1wb3J0IHsgQ29tbWl0TGludENvbmZpZ0dpdEh1YkFjdGlvbiB9IGZyb20gJy4vY29uZmlnL2NvbW1pdGxpbnQnO1xuaW1wb3J0IHsgTnBtQ29uZmlnR2l0SHViQWN0aW9uIH0gZnJvbSAnLi9jb25maWcvbnBtJztcbmltcG9ydCB7IFNhbXBsZUNvZGVDb25maWdHaXRIdWJBY3Rpb24gfSBmcm9tICcuL2NvbmZpZy9zYW1wbGVjb2RlJztcbmltcG9ydCB7IFR5cGVTY3JpcHRDb25maWdHaXRIdWJBY3Rpb24gfSBmcm9tICcuL2NvbmZpZy90eXBlc2NyaXB0JztcbmltcG9ydCB7IHV0aWwgfSBmcm9tICcuLi91dGlsL3V0aWxzJztcbmltcG9ydCB7IFJlYWRtZUNvbmZpZ0dpdGh1YiB9IGZyb20gJy4vY29uZmlnL3JlYWRtZSc7XG5pbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tICcuLi91dGlsL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2l0SHViQWN0aW9uUHJvamVjdE9wdGlvbnMgZXh0ZW5kcyBCYXNlUHJvamVjdE9wdGlvbnMge31cblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBtYW5hZ2luZyBwcm9qZWN0IEdpdEh1YkFjdGlvbiBjb25maWd1cmF0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgR2l0SHViQWN0aW9uUHJvamVjdCBleHRlbmRzIEJhc2VQcm9qZWN0IHtcbiAgc3RhdGljIGNsZWFuQ29tbWFuZCA9ICducHggcHJvamVuIGVqZWN0ICYmIHJtIC1yZiAucHJvamVucmMudHMuYmFrIHNjcmlwdHMgLnByb2plbic7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBwcm9qZWN0LlxuICAgKiBAcGFyYW0gb3B0aW9ucyBBZGRpdGlvbmFsIHByb2plY3Qgb3B0aW9ucy5cbiAgICovXG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogR2l0SHViQWN0aW9uUHJvamVjdE9wdGlvbnMpIHtcbiAgICBjb25zdCB1cGRhdGVkT3B0aW9ucyA9IHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICB0eXBlc2NyaXB0RW5hYmxlZDogZmFsc2UsXG4gICAgICBqZXN0RW5hYmxlZDogZmFsc2UsXG4gICAgICBlc2xpbnRFbmFibGVkOiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBvcHRpb25zLmRlc2NyaXB0aW9uID8/IGNvbnN0YW50cy5HSVRIVUJfUFJPSkVDVF9ERVNDUklQVElPTixcbiAgICB9O1xuICAgIHN1cGVyKHtcbiAgICAgIC4uLkJhc2VPcHRpb25zLnNoYXJlZE9wdGlvbnModXBkYXRlZE9wdGlvbnMpLFxuICAgICAgcmVhZG1lOiBuZXcgUmVhZG1lQ29uZmlnR2l0aHViKCkuZ2V0UmVhZG1lKHVwZGF0ZWRPcHRpb25zKSxcbiAgICB9KTtcblxuICAgIHRoaXMubnBtQ29uZmlnID0gbmV3IE5wbUNvbmZpZ0dpdEh1YkFjdGlvbih0aGlzKTtcblxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5jb21taXRsaW50RW5hYmxlZCkge1xuICAgICAgdGhpcy5jb21taXRsaW50Q29uZmlnID0gbmV3IENvbW1pdExpbnRDb25maWdHaXRIdWJBY3Rpb24odGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5zYW1wbGVDb2RlRW5hYmxlZCkge1xuICAgICAgdGhpcy5zYW1wbGVDb2RlQ29uZmlnID0gbmV3IFNhbXBsZUNvZGVDb25maWdHaXRIdWJBY3Rpb24odGhpcyk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGluaXRpYWxpemVCYXNlQ29uZmlncyhvcHRpb25zOiBCYXNlUHJvamVjdE9wdGlvbnMpOiB2b2lkIHtcbiAgICBzdXBlci5pbml0aWFsaXplQmFzZUNvbmZpZ3Mob3B0aW9ucyk7XG5cbiAgICB0aGlzLmdpdENvbmZpZyA9IG5ldyBHaXRDb25maWdCYXNlKHRoaXMpO1xuICAgIHRoaXMudHlwZXNjcmlwdENvbmZpZyA9IG5ldyBUeXBlU2NyaXB0Q29uZmlnR2l0SHViQWN0aW9uKHRoaXMpO1xuXG4gICAgaWYgKG9wdGlvbnMucHJldHRpZXJFbmFibGVkKSB7XG4gICAgICB0aGlzLnByZXR0aWVyQ29uZmlnID0gbmV3IFByZXR0aWVyQ29uZmlnQmFzZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuZGV2Q29udGFpbmVyRW5hYmxlZCkge1xuICAgICAgdGhpcy5kZXZDb250YWluZXJDb25maWcgPSBuZXcgRGV2Q29udGFpbmVyQ29uZmlnQmFzZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuZ2l0aHViRW5hYmxlZCkge1xuICAgICAgdGhpcy5naXRodWJDb25maWcgPSBuZXcgR2l0SHViQ29uZmlnQmFzZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMudnNjb2RlRW5hYmxlZCkge1xuICAgICAgdGhpcy52c2NvZGVDb25maWcgPSBuZXcgVnNDb2RlQ29uZmlnQmFzZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuaHVza3lFbmFibGVkKSB7XG4gICAgICB0aGlzLmh1c2t5Q29uZmlnID0gbmV3IEh1c2t5Q29uZmlnQmFzZSh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcG9zdFN5bnRoZXNpemUoKTogdm9pZCB7XG4gICAgc3VwZXIucG9zdFN5bnRoZXNpemUoKTtcblxuICAgIHV0aWwuc2V0dXBFeGl0SGFuZGxlcihHaXRIdWJBY3Rpb25Qcm9qZWN0LmNsZWFuQ29tbWFuZCk7XG4gIH1cbn1cbiJdfQ==
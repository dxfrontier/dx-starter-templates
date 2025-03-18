"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapServiceProject = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../base");
const constants_1 = require("../util/constants");
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
const readme_1 = require("./config/readme");
const utils_1 = require("../util/utils");
// import { IssuesConfigCapService } from './config/issues';
const issues_1 = require("../base/config/issues");
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
            name: options.name, // projen presets the option with 'project' if no custom option is given.
            namespace: options.namespace ?? constants_1.constants.PROJECT_NAMESPACE,
            description: options.description ?? constants_1.constants.CAP_PROJECT_DESCRIPTION,
            entityName: options.entityName ?? constants_1.constants.ENTITY_NAME,
            issuesEnabled: options.issuesEnabled ?? true,
        };
        super({
            ...base_1.BaseOptions.sharedOptions(updatedOptions),
            readme: new readme_1.ReadmeConfigCapService().getReadme(updatedOptions), // needs to be treated as special case due to Projen workflow.
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
        if (updatedOptions.issuesEnabled) {
            this.issuesConfig = new issues_1.IssuesConfigBase(this);
        }
    }
    initializeBaseConfigs(options) {
        super.initializeBaseConfigs(options);
    }
    postSynthesize() {
        super.postSynthesize();
        utils_1.util.setupExitHandler(CapServiceProject.cleanCommand);
    }
}
exports.CapServiceProject = CapServiceProject;
_a = JSII_RTTI_SYMBOL_1;
CapServiceProject[_a] = { fqn: "@dxfrontier/projen-template-projects.CapServiceProject", version: "0.0.0" };
CapServiceProject.cleanCommand = `npx @cap-js/cds-typer '*' --outputDirectory @cds-models && npx projen eject && rm -rf .projenrc.ts.bak scripts .projen && npm install ${constants_1.constants['@dxfrontier/cds-ts-dispatcher'].NAME}@${constants_1.constants['@dxfrontier/cds-ts-dispatcher'].VERSION}`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYXAtc2VydmljZS9wcm9qZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQXVFO0FBQ3ZFLGlEQUE4QztBQUM5QyxvREFBaUU7QUFDakUsd0RBQXFFO0FBQ3JFLDRDQUF5RDtBQUN6RCxzQ0FBbUQ7QUFDbkQsNENBQXlEO0FBQ3pELDBDQUF1RDtBQUN2RCx3Q0FBcUQ7QUFDckQsc0NBQW1EO0FBQ25ELGdEQUE2RDtBQUM3RCxvREFBaUU7QUFDakUsb0RBQWlFO0FBQ2pFLDRDQUF5RDtBQUN6RCw0Q0FBeUQ7QUFDekQseUNBQXFDO0FBQ3JDLDREQUE0RDtBQUM1RCxrREFBeUQ7QUFPekQ7O0dBRUc7QUFDSCxNQUFhLGlCQUFrQixTQUFRLGtCQUFXO0lBR2hEOzs7T0FHRztJQUNILFlBQVksT0FBaUM7UUFDM0MsTUFBTSxjQUFjLEdBQUc7WUFDckIsR0FBRyxPQUFPO1lBQ1YsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixJQUFJLElBQUk7WUFDcEQsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLG1CQUFtQixJQUFJLElBQUk7WUFDeEQsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSTtZQUM1QyxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJO1lBQzVDLFlBQVksRUFBRSxPQUFPLENBQUMsWUFBWSxJQUFJLElBQUk7WUFDMUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLElBQUksSUFBSTtZQUN4QyxlQUFlLEVBQUUsT0FBTyxDQUFDLGVBQWUsSUFBSSxJQUFJO1lBQ2hELGFBQWEsRUFBRSxPQUFPLENBQUMsYUFBYSxJQUFJLElBQUk7WUFDNUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixJQUFJLElBQUk7WUFDcEQsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksRUFB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RUgsOENBNEVDOzs7QUEzRVEsOEJBQVksR0FBRyx5SUFBeUkscUJBQVMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLElBQUksSUFBSSxxQkFBUyxDQUFDLCtCQUErQixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlUHJvamVjdE9wdGlvbnMsIEJhc2VQcm9qZWN0LCBCYXNlT3B0aW9ucyB9IGZyb20gJy4uL2Jhc2UnO1xuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSAnLi4vdXRpbC9jb25zdGFudHMnO1xuaW1wb3J0IHsgQ29tbWl0TGludENvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9jb21taXRsaW50JztcbmltcG9ydCB7IERldkNvbnRhaW5lckNvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9kZXZjb250YWluZXInO1xuaW1wb3J0IHsgRXNMaW50Q29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2VzbGludCc7XG5pbXBvcnQgeyBHaXRDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvZ2l0JztcbmltcG9ydCB7IEdpdEh1YkNvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9naXRodWInO1xuaW1wb3J0IHsgSHVza3lDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvaHVza3knO1xuaW1wb3J0IHsgSmVzdENvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9qZXN0JztcbmltcG9ydCB7IE5wbUNvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9ucG0nO1xuaW1wb3J0IHsgUHJldHRpZXJDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvcHJldHRpZXInO1xuaW1wb3J0IHsgU2FtcGxlQ29kZUNvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9zYW1wbGVjb2RlJztcbmltcG9ydCB7IFR5cGVTY3JpcHRDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyBWc0NvZGVDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvdnNjb2RlJztcbmltcG9ydCB7IFJlYWRtZUNvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9yZWFkbWUnO1xuaW1wb3J0IHsgdXRpbCB9IGZyb20gJy4uL3V0aWwvdXRpbHMnO1xuLy8gaW1wb3J0IHsgSXNzdWVzQ29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2lzc3Vlcyc7XG5pbXBvcnQgeyBJc3N1ZXNDb25maWdCYXNlIH0gZnJvbSAnLi4vYmFzZS9jb25maWcvaXNzdWVzJztcblxuZXhwb3J0IGludGVyZmFjZSBDYXBTZXJ2aWNlUHJvamVjdE9wdGlvbnMgZXh0ZW5kcyBCYXNlUHJvamVjdE9wdGlvbnMge1xuICByZWFkb25seSBuYW1lc3BhY2U/OiBzdHJpbmc7XG4gIHJlYWRvbmx5IGVudGl0eU5hbWU/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgbWFuYWdpbmcgcHJvamVjdCBDYXBTZXJ2aWNlIGNvbmZpZ3VyYXRpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBDYXBTZXJ2aWNlUHJvamVjdCBleHRlbmRzIEJhc2VQcm9qZWN0IHtcbiAgc3RhdGljIGNsZWFuQ29tbWFuZCA9IGBucHggQGNhcC1qcy9jZHMtdHlwZXIgJyonIC0tb3V0cHV0RGlyZWN0b3J5IEBjZHMtbW9kZWxzICYmIG5weCBwcm9qZW4gZWplY3QgJiYgcm0gLXJmIC5wcm9qZW5yYy50cy5iYWsgc2NyaXB0cyAucHJvamVuICYmIG5wbSBpbnN0YWxsICR7Y29uc3RhbnRzWydAZHhmcm9udGllci9jZHMtdHMtZGlzcGF0Y2hlciddLk5BTUV9QCR7Y29uc3RhbnRzWydAZHhmcm9udGllci9jZHMtdHMtZGlzcGF0Y2hlciddLlZFUlNJT059YDtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIHByb2plY3QuXG4gICAqIEBwYXJhbSBvcHRpb25zIEFkZGl0aW9uYWwgcHJvamVjdCBvcHRpb25zLlxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9uczogQ2FwU2VydmljZVByb2plY3RPcHRpb25zKSB7XG4gICAgY29uc3QgdXBkYXRlZE9wdGlvbnMgPSB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgY29tbWl0bGludEVuYWJsZWQ6IG9wdGlvbnMuY29tbWl0bGludEVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIGRldkNvbnRhaW5lckVuYWJsZWQ6IG9wdGlvbnMuZGV2Q29udGFpbmVyRW5hYmxlZCA/PyB0cnVlLFxuICAgICAgZXNsaW50RW5hYmxlZDogb3B0aW9ucy5lc2xpbnRFbmFibGVkID8/IHRydWUsXG4gICAgICBnaXRodWJFbmFibGVkOiBvcHRpb25zLmdpdGh1YkVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIGh1c2t5RW5hYmxlZDogb3B0aW9ucy5odXNreUVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIGplc3RFbmFibGVkOiBvcHRpb25zLmplc3RFbmFibGVkID8/IHRydWUsXG4gICAgICBwcmV0dGllckVuYWJsZWQ6IG9wdGlvbnMucHJldHRpZXJFbmFibGVkID8/IHRydWUsXG4gICAgICB2c2NvZGVFbmFibGVkOiBvcHRpb25zLnZzY29kZUVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIHNhbXBsZUNvZGVFbmFibGVkOiBvcHRpb25zLnNhbXBsZUNvZGVFbmFibGVkID8/IHRydWUsXG4gICAgICB0eXBlc2NyaXB0RW5hYmxlZDogdHJ1ZSxcbiAgICAgIG5hbWU6IG9wdGlvbnMubmFtZSwgLy8gcHJvamVuIHByZXNldHMgdGhlIG9wdGlvbiB3aXRoICdwcm9qZWN0JyBpZiBubyBjdXN0b20gb3B0aW9uIGlzIGdpdmVuLlxuICAgICAgbmFtZXNwYWNlOiBvcHRpb25zLm5hbWVzcGFjZSA/PyBjb25zdGFudHMuUFJPSkVDVF9OQU1FU1BBQ0UsXG4gICAgICBkZXNjcmlwdGlvbjogb3B0aW9ucy5kZXNjcmlwdGlvbiA/PyBjb25zdGFudHMuQ0FQX1BST0pFQ1RfREVTQ1JJUFRJT04sXG4gICAgICBlbnRpdHlOYW1lOiBvcHRpb25zLmVudGl0eU5hbWUgPz8gY29uc3RhbnRzLkVOVElUWV9OQU1FLFxuICAgICAgaXNzdWVzRW5hYmxlZDogb3B0aW9ucy5pc3N1ZXNFbmFibGVkID8/IHRydWUsXG4gICAgfTtcbiAgICBzdXBlcih7XG4gICAgICAuLi5CYXNlT3B0aW9ucy5zaGFyZWRPcHRpb25zKHVwZGF0ZWRPcHRpb25zKSxcbiAgICAgIHJlYWRtZTogbmV3IFJlYWRtZUNvbmZpZ0NhcFNlcnZpY2UoKS5nZXRSZWFkbWUodXBkYXRlZE9wdGlvbnMpLCAvLyBuZWVkcyB0byBiZSB0cmVhdGVkIGFzIHNwZWNpYWwgY2FzZSBkdWUgdG8gUHJvamVuIHdvcmtmbG93LlxuICAgIH0pO1xuXG4gICAgdGhpcy5naXRDb25maWcgPSBuZXcgR2l0Q29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB0aGlzLm5wbUNvbmZpZyA9IG5ldyBOcG1Db25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIHRoaXMudHlwZXNjcmlwdENvbmZpZyA9IG5ldyBUeXBlU2NyaXB0Q29uZmlnQ2FwU2VydmljZSh0aGlzKTtcblxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5jb21taXRsaW50RW5hYmxlZCkge1xuICAgICAgdGhpcy5jb21taXRsaW50Q29uZmlnID0gbmV3IENvbW1pdExpbnRDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuZGV2Q29udGFpbmVyRW5hYmxlZCkge1xuICAgICAgdGhpcy5kZXZDb250YWluZXJDb25maWcgPSBuZXcgRGV2Q29udGFpbmVyQ29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLmVzbGludEVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZXNsaW50Q29uZmlnID0gbmV3IEVzTGludENvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5qZXN0RW5hYmxlZCkge1xuICAgICAgdGhpcy5qZXN0Q29uZmlnID0gbmV3IEplc3RDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuZ2l0aHViRW5hYmxlZCkge1xuICAgICAgdGhpcy5naXRodWJDb25maWcgPSBuZXcgR2l0SHViQ29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLnByZXR0aWVyRW5hYmxlZCkge1xuICAgICAgdGhpcy5wcmV0dGllckNvbmZpZyA9IG5ldyBQcmV0dGllckNvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy52c2NvZGVFbmFibGVkKSB7XG4gICAgICB0aGlzLnZzY29kZUNvbmZpZyA9IG5ldyBWc0NvZGVDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuaHVza3lFbmFibGVkKSB7XG4gICAgICB0aGlzLmh1c2t5Q29uZmlnID0gbmV3IEh1c2t5Q29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLnNhbXBsZUNvZGVFbmFibGVkKSB7XG4gICAgICB0aGlzLnNhbXBsZUNvZGVDb25maWcgPSBuZXcgU2FtcGxlQ29kZUNvbmZpZ0NhcFNlcnZpY2UodGhpcywgdXBkYXRlZE9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuaXNzdWVzRW5hYmxlZCkge1xuICAgICAgdGhpcy5pc3N1ZXNDb25maWcgPSBuZXcgSXNzdWVzQ29uZmlnQmFzZSh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgaW5pdGlhbGl6ZUJhc2VDb25maWdzKG9wdGlvbnM6IEJhc2VQcm9qZWN0T3B0aW9ucyk6IHZvaWQge1xuICAgIHN1cGVyLmluaXRpYWxpemVCYXNlQ29uZmlncyhvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBwb3N0U3ludGhlc2l6ZSgpOiB2b2lkIHtcbiAgICBzdXBlci5wb3N0U3ludGhlc2l6ZSgpO1xuXG4gICAgdXRpbC5zZXR1cEV4aXRIYW5kbGVyKENhcFNlcnZpY2VQcm9qZWN0LmNsZWFuQ29tbWFuZCk7XG4gIH1cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYXAtc2VydmljZS9wcm9qZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQXVFO0FBQ3ZFLGlEQUE4QztBQUM5QyxvREFBaUU7QUFDakUsd0RBQXFFO0FBQ3JFLDRDQUF5RDtBQUN6RCxzQ0FBbUQ7QUFDbkQsNENBQXlEO0FBQ3pELDBDQUF1RDtBQUN2RCx3Q0FBcUQ7QUFDckQsc0NBQW1EO0FBQ25ELGdEQUE2RDtBQUM3RCxvREFBaUU7QUFDakUsb0RBQWlFO0FBQ2pFLDRDQUF5RDtBQUN6RCw0Q0FBeUQ7QUFDekQseUNBQXFDO0FBT3JDOztHQUVHO0FBQ0gsTUFBYSxpQkFBa0IsU0FBUSxrQkFBVztJQUdoRDs7O09BR0c7SUFDSCxZQUFZLE9BQWlDO1FBQzNDLE1BQU0sY0FBYyxHQUFHO1lBQ3JCLEdBQUcsT0FBTztZQUNWLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsSUFBSSxJQUFJO1lBQ3BELG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxtQkFBbUIsSUFBSSxJQUFJO1lBQ3hELGFBQWEsRUFBRSxPQUFPLENBQUMsYUFBYSxJQUFJLElBQUk7WUFDNUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSTtZQUM1QyxZQUFZLEVBQUUsT0FBTyxDQUFDLFlBQVksSUFBSSxJQUFJO1lBQzFDLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVyxJQUFJLElBQUk7WUFDeEMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxlQUFlLElBQUksSUFBSTtZQUNoRCxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJO1lBQzVDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsSUFBSSxJQUFJO1lBQ3BELGlCQUFpQixFQUFFLElBQUk7WUFDdkIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUseUVBQXlFO1lBQzdGLFNBQVMsRUFBRSxP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cm9qZWN0LCBCYXNlT3B0aW9ucyB9IGZyb20gJy4uL2Jhc2UnO1xuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSAnLi4vdXRpbC9jb25zdGFudHMnO1xuaW1wb3J0IHsgQ29tbWl0TGludENvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9jb21taXRsaW50JztcbmltcG9ydCB7IERldkNvbnRhaW5lckNvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9kZXZjb250YWluZXInO1xuaW1wb3J0IHsgRXNMaW50Q29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2VzbGludCc7XG5pbXBvcnQgeyBHaXRDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvZ2l0JztcbmltcG9ydCB7IEdpdEh1YkNvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9naXRodWInO1xuaW1wb3J0IHsgSHVza3lDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvaHVza3knO1xuaW1wb3J0IHsgSmVzdENvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9qZXN0JztcbmltcG9ydCB7IE5wbUNvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9ucG0nO1xuaW1wb3J0IHsgUHJldHRpZXJDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvcHJldHRpZXInO1xuaW1wb3J0IHsgU2FtcGxlQ29kZUNvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9zYW1wbGVjb2RlJztcbmltcG9ydCB7IFR5cGVTY3JpcHRDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyBWc0NvZGVDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvdnNjb2RlJztcbmltcG9ydCB7IFJlYWRtZUNvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9yZWFkbWUnO1xuaW1wb3J0IHsgdXRpbCB9IGZyb20gJy4uL3V0aWwvdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcFNlcnZpY2VQcm9qZWN0T3B0aW9ucyBleHRlbmRzIEJhc2VQcm9qZWN0T3B0aW9ucyB7XG4gIHJlYWRvbmx5IG5hbWVzcGFjZT86IHN0cmluZztcbiAgcmVhZG9ubHkgZW50aXR5TmFtZT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBtYW5hZ2luZyBwcm9qZWN0IENhcFNlcnZpY2UgY29uZmlndXJhdGlvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIENhcFNlcnZpY2VQcm9qZWN0IGV4dGVuZHMgQmFzZVByb2plY3Qge1xuICBzdGF0aWMgY2xlYW5Db21tYW5kID0gYG5weCBAY2FwLWpzL2Nkcy10eXBlciAnKicgLS1vdXRwdXREaXJlY3RvcnkgQGNkcy1tb2RlbHMgJiYgbnB4IHByb2plbiBlamVjdCAmJiBybSAtcmYgLnByb2plbnJjLnRzLmJhayBzY3JpcHRzIC5wcm9qZW4gJiYgbnBtIGluc3RhbGwgJHtjb25zdGFudHNbJ0BkeGZyb250aWVyL2Nkcy10cy1kaXNwYXRjaGVyJ10uTkFNRX1AJHtjb25zdGFudHNbJ0BkeGZyb250aWVyL2Nkcy10cy1kaXNwYXRjaGVyJ10uVkVSU0lPTn1gO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgcHJvamVjdC5cbiAgICogQHBhcmFtIG9wdGlvbnMgQWRkaXRpb25hbCBwcm9qZWN0IG9wdGlvbnMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBDYXBTZXJ2aWNlUHJvamVjdE9wdGlvbnMpIHtcbiAgICBjb25zdCB1cGRhdGVkT3B0aW9ucyA9IHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBjb21taXRsaW50RW5hYmxlZDogb3B0aW9ucy5jb21taXRsaW50RW5hYmxlZCA/PyB0cnVlLFxuICAgICAgZGV2Q29udGFpbmVyRW5hYmxlZDogb3B0aW9ucy5kZXZDb250YWluZXJFbmFibGVkID8/IHRydWUsXG4gICAgICBlc2xpbnRFbmFibGVkOiBvcHRpb25zLmVzbGludEVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIGdpdGh1YkVuYWJsZWQ6IG9wdGlvbnMuZ2l0aHViRW5hYmxlZCA/PyB0cnVlLFxuICAgICAgaHVza3lFbmFibGVkOiBvcHRpb25zLmh1c2t5RW5hYmxlZCA/PyB0cnVlLFxuICAgICAgamVzdEVuYWJsZWQ6IG9wdGlvbnMuamVzdEVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIHByZXR0aWVyRW5hYmxlZDogb3B0aW9ucy5wcmV0dGllckVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIHZzY29kZUVuYWJsZWQ6IG9wdGlvbnMudnNjb2RlRW5hYmxlZCA/PyB0cnVlLFxuICAgICAgc2FtcGxlQ29kZUVuYWJsZWQ6IG9wdGlvbnMuc2FtcGxlQ29kZUVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIHR5cGVzY3JpcHRFbmFibGVkOiB0cnVlLFxuICAgICAgbmFtZTogb3B0aW9ucy5uYW1lLCAvLyBwcm9qZW4gcHJlc2V0cyB0aGUgb3B0aW9uIHdpdGggJ3Byb2plY3QnIGlmIG5vIGN1c3RvbSBvcHRpb24gaXMgZ2l2ZW4uXG4gICAgICBuYW1lc3BhY2U6IG9wdGlvbnMubmFtZXNwYWNlID8/IGNvbnN0YW50cy5QUk9KRUNUX05BTUVTUEFDRSxcbiAgICAgIGRlc2NyaXB0aW9uOiBvcHRpb25zLmRlc2NyaXB0aW9uID8/IGNvbnN0YW50cy5DQVBfUFJPSkVDVF9ERVNDUklQVElPTixcbiAgICAgIGVudGl0eU5hbWU6IG9wdGlvbnMuZW50aXR5TmFtZSA/PyBjb25zdGFudHMuRU5USVRZX05BTUUsXG4gICAgfTtcbiAgICBzdXBlcih7XG4gICAgICAuLi5CYXNlT3B0aW9ucy5zaGFyZWRPcHRpb25zKHVwZGF0ZWRPcHRpb25zKSxcbiAgICAgIHJlYWRtZTogbmV3IFJlYWRtZUNvbmZpZ0NhcFNlcnZpY2UoKS5nZXRSZWFkbWUodXBkYXRlZE9wdGlvbnMpLCAvLyBuZWVkcyB0byBiZSB0cmVhdGVkIGFzIHNwZWNpYWwgY2FzZSBkdWUgdG8gUHJvamVuIHdvcmtmbG93LlxuICAgIH0pO1xuXG4gICAgdGhpcy5naXRDb25maWcgPSBuZXcgR2l0Q29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB0aGlzLm5wbUNvbmZpZyA9IG5ldyBOcG1Db25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIHRoaXMudHlwZXNjcmlwdENvbmZpZyA9IG5ldyBUeXBlU2NyaXB0Q29uZmlnQ2FwU2VydmljZSh0aGlzKTtcblxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5jb21taXRsaW50RW5hYmxlZCkge1xuICAgICAgdGhpcy5jb21taXRsaW50Q29uZmlnID0gbmV3IENvbW1pdExpbnRDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuZGV2Q29udGFpbmVyRW5hYmxlZCkge1xuICAgICAgdGhpcy5kZXZDb250YWluZXJDb25maWcgPSBuZXcgRGV2Q29udGFpbmVyQ29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLmVzbGludEVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZXNsaW50Q29uZmlnID0gbmV3IEVzTGludENvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5qZXN0RW5hYmxlZCkge1xuICAgICAgdGhpcy5qZXN0Q29uZmlnID0gbmV3IEplc3RDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuZ2l0aHViRW5hYmxlZCkge1xuICAgICAgdGhpcy5naXRodWJDb25maWcgPSBuZXcgR2l0SHViQ29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLnByZXR0aWVyRW5hYmxlZCkge1xuICAgICAgdGhpcy5wcmV0dGllckNvbmZpZyA9IG5ldyBQcmV0dGllckNvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy52c2NvZGVFbmFibGVkKSB7XG4gICAgICB0aGlzLnZzY29kZUNvbmZpZyA9IG5ldyBWc0NvZGVDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuaHVza3lFbmFibGVkKSB7XG4gICAgICB0aGlzLmh1c2t5Q29uZmlnID0gbmV3IEh1c2t5Q29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLnNhbXBsZUNvZGVFbmFibGVkKSB7XG4gICAgICB0aGlzLnNhbXBsZUNvZGVDb25maWcgPSBuZXcgU2FtcGxlQ29kZUNvbmZpZ0NhcFNlcnZpY2UodGhpcywgdXBkYXRlZE9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBpbml0aWFsaXplQmFzZUNvbmZpZ3Mob3B0aW9uczogQmFzZVByb2plY3RPcHRpb25zKTogdm9pZCB7XG4gICAgc3VwZXIuaW5pdGlhbGl6ZUJhc2VDb25maWdzKG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHBvc3RTeW50aGVzaXplKCk6IHZvaWQge1xuICAgIHN1cGVyLnBvc3RTeW50aGVzaXplKCk7XG5cbiAgICB1dGlsLnNldHVwRXhpdEhhbmRsZXIoQ2FwU2VydmljZVByb2plY3QuY2xlYW5Db21tYW5kKTtcbiAgfVxufVxuIl19
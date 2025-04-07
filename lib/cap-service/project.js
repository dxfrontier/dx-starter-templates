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
            ...base_1.BaseOptions.sharedStandardOptions(updatedOptions),
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
CapServiceProject[_a] = { fqn: "@dxfrontier/dx-starter-templates.CapServiceProject", version: "0.0.0" };
CapServiceProject.cleanCommand = `npx @cap-js/cds-typer '*' --outputDirectory @cds-models && npx projen eject && rm -rf .projenrc.ts.bak scripts .projen && npm install ${constants_1.constants['@dxfrontier/cds-ts-dispatcher'].NAME}@${constants_1.constants['@dxfrontier/cds-ts-dispatcher'].VERSION}`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYXAtc2VydmljZS9wcm9qZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQXVFO0FBQ3ZFLGlEQUE4QztBQUM5QyxvREFBaUU7QUFDakUsd0RBQXFFO0FBQ3JFLDRDQUF5RDtBQUN6RCxzQ0FBbUQ7QUFDbkQsNENBQXlEO0FBQ3pELDBDQUF1RDtBQUN2RCx3Q0FBcUQ7QUFDckQsc0NBQW1EO0FBQ25ELGdEQUE2RDtBQUM3RCxvREFBaUU7QUFDakUsb0RBQWlFO0FBQ2pFLDRDQUF5RDtBQUN6RCw0Q0FBeUQ7QUFDekQseUNBQXFDO0FBQ3JDLGtEQUF5RDtBQU96RDs7R0FFRztBQUNILE1BQWEsaUJBQWtCLFNBQVEsa0JBQVc7SUFHaEQ7OztPQUdHO0lBQ0gsWUFBWSxPQUFpQztRQUMzQyxNQUFNLGNBQWMsR0FBRztZQUNyQixHQUFHLE9BQU87WUFDVixpQkFBaUIsRUFBRSxPQUFPLENBQUMsaUJBQWlCLElBQUksSUFBSTtZQUNwRCxtQkFBbUIsRUFBRSxPQUFPLENBQUMsbUJBQW1CLElBQUksSUFBSTtZQUN4RCxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJO1lBQzVDLGFBQWEsRUFBRSxPQUFPLENBQUMsYUFBYSxJQUFJLElBQUk7WUFDNUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZQUFZLElBQUksSUFBSTtZQUMxQyxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsSUFBSSxJQUFJO1lBQ3hDLGVBQWUsRUFBRSxPQUFPLENBQUMsZUFBZSxJQUFJLElBQUk7WUFDaEQsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSTtZQUM1QyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsaUJBQWlCLElBQUksSUFBSTtZQUNwRCxpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLHlFQUF5RTtZQUM3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O0FBM0VRLDhCQUFZLEdBQUcseUlBQXlJLHFCQUFTLENBQUMsK0JBQStCLENBQUMsQ0FBQyxJQUFJLElBQUkscUJBQVMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZVByb2plY3RPcHRpb25zLCBCYXNlUHJvamVjdCwgQmFzZU9wdGlvbnMgfSBmcm9tICcuLi9iYXNlJztcbmltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gJy4uL3V0aWwvY29uc3RhbnRzJztcbmltcG9ydCB7IENvbW1pdExpbnRDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvY29tbWl0bGludCc7XG5pbXBvcnQgeyBEZXZDb250YWluZXJDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvZGV2Y29udGFpbmVyJztcbmltcG9ydCB7IEVzTGludENvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9lc2xpbnQnO1xuaW1wb3J0IHsgR2l0Q29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2dpdCc7XG5pbXBvcnQgeyBHaXRIdWJDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvZ2l0aHViJztcbmltcG9ydCB7IEh1c2t5Q29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2h1c2t5JztcbmltcG9ydCB7IEplc3RDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvamVzdCc7XG5pbXBvcnQgeyBOcG1Db25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvbnBtJztcbmltcG9ydCB7IFByZXR0aWVyQ29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL3ByZXR0aWVyJztcbmltcG9ydCB7IFNhbXBsZUNvZGVDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvc2FtcGxlY29kZSc7XG5pbXBvcnQgeyBUeXBlU2NyaXB0Q29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL3R5cGVzY3JpcHQnO1xuaW1wb3J0IHsgVnNDb2RlQ29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL3ZzY29kZSc7XG5pbXBvcnQgeyBSZWFkbWVDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvcmVhZG1lJztcbmltcG9ydCB7IHV0aWwgfSBmcm9tICcuLi91dGlsL3V0aWxzJztcbmltcG9ydCB7IElzc3Vlc0NvbmZpZ0Jhc2UgfSBmcm9tICcuLi9iYXNlL2NvbmZpZy9pc3N1ZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcFNlcnZpY2VQcm9qZWN0T3B0aW9ucyBleHRlbmRzIEJhc2VQcm9qZWN0T3B0aW9ucyB7XG4gIHJlYWRvbmx5IG5hbWVzcGFjZT86IHN0cmluZztcbiAgcmVhZG9ubHkgZW50aXR5TmFtZT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBtYW5hZ2luZyBwcm9qZWN0IENhcFNlcnZpY2UgY29uZmlndXJhdGlvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIENhcFNlcnZpY2VQcm9qZWN0IGV4dGVuZHMgQmFzZVByb2plY3Qge1xuICBzdGF0aWMgY2xlYW5Db21tYW5kID0gYG5weCBAY2FwLWpzL2Nkcy10eXBlciAnKicgLS1vdXRwdXREaXJlY3RvcnkgQGNkcy1tb2RlbHMgJiYgbnB4IHByb2plbiBlamVjdCAmJiBybSAtcmYgLnByb2plbnJjLnRzLmJhayBzY3JpcHRzIC5wcm9qZW4gJiYgbnBtIGluc3RhbGwgJHtjb25zdGFudHNbJ0BkeGZyb250aWVyL2Nkcy10cy1kaXNwYXRjaGVyJ10uTkFNRX1AJHtjb25zdGFudHNbJ0BkeGZyb250aWVyL2Nkcy10cy1kaXNwYXRjaGVyJ10uVkVSU0lPTn1gO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgcHJvamVjdC5cbiAgICogQHBhcmFtIG9wdGlvbnMgQWRkaXRpb25hbCBwcm9qZWN0IG9wdGlvbnMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBDYXBTZXJ2aWNlUHJvamVjdE9wdGlvbnMpIHtcbiAgICBjb25zdCB1cGRhdGVkT3B0aW9ucyA9IHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBjb21taXRsaW50RW5hYmxlZDogb3B0aW9ucy5jb21taXRsaW50RW5hYmxlZCA/PyB0cnVlLFxuICAgICAgZGV2Q29udGFpbmVyRW5hYmxlZDogb3B0aW9ucy5kZXZDb250YWluZXJFbmFibGVkID8/IHRydWUsXG4gICAgICBlc2xpbnRFbmFibGVkOiBvcHRpb25zLmVzbGludEVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIGdpdGh1YkVuYWJsZWQ6IG9wdGlvbnMuZ2l0aHViRW5hYmxlZCA/PyB0cnVlLFxuICAgICAgaHVza3lFbmFibGVkOiBvcHRpb25zLmh1c2t5RW5hYmxlZCA/PyB0cnVlLFxuICAgICAgamVzdEVuYWJsZWQ6IG9wdGlvbnMuamVzdEVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIHByZXR0aWVyRW5hYmxlZDogb3B0aW9ucy5wcmV0dGllckVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIHZzY29kZUVuYWJsZWQ6IG9wdGlvbnMudnNjb2RlRW5hYmxlZCA/PyB0cnVlLFxuICAgICAgc2FtcGxlQ29kZUVuYWJsZWQ6IG9wdGlvbnMuc2FtcGxlQ29kZUVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIHR5cGVzY3JpcHRFbmFibGVkOiB0cnVlLFxuICAgICAgbmFtZTogb3B0aW9ucy5uYW1lLCAvLyBwcm9qZW4gcHJlc2V0cyB0aGUgb3B0aW9uIHdpdGggJ3Byb2plY3QnIGlmIG5vIGN1c3RvbSBvcHRpb24gaXMgZ2l2ZW4uXG4gICAgICBuYW1lc3BhY2U6IG9wdGlvbnMubmFtZXNwYWNlID8/IGNvbnN0YW50cy5QUk9KRUNUX05BTUVTUEFDRSxcbiAgICAgIGRlc2NyaXB0aW9uOiBvcHRpb25zLmRlc2NyaXB0aW9uID8/IGNvbnN0YW50cy5DQVBfUFJPSkVDVF9ERVNDUklQVElPTixcbiAgICAgIGVudGl0eU5hbWU6IG9wdGlvbnMuZW50aXR5TmFtZSA/PyBjb25zdGFudHMuRU5USVRZX05BTUUsXG4gICAgICBpc3N1ZXNFbmFibGVkOiBvcHRpb25zLmlzc3Vlc0VuYWJsZWQgPz8gdHJ1ZSxcbiAgICB9O1xuICAgIHN1cGVyKHtcbiAgICAgIC4uLkJhc2VPcHRpb25zLnNoYXJlZFN0YW5kYXJkT3B0aW9ucyh1cGRhdGVkT3B0aW9ucyksXG4gICAgICByZWFkbWU6IG5ldyBSZWFkbWVDb25maWdDYXBTZXJ2aWNlKCkuZ2V0UmVhZG1lKHVwZGF0ZWRPcHRpb25zKSwgLy8gbmVlZHMgdG8gYmUgdHJlYXRlZCBhcyBzcGVjaWFsIGNhc2UgZHVlIHRvIFByb2plbiB3b3JrZmxvdy5cbiAgICB9KTtcblxuICAgIHRoaXMuZ2l0Q29uZmlnID0gbmV3IEdpdENvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgdGhpcy5ucG1Db25maWcgPSBuZXcgTnBtQ29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB0aGlzLnR5cGVzY3JpcHRDb25maWcgPSBuZXcgVHlwZVNjcmlwdENvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG5cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuY29tbWl0bGludEVuYWJsZWQpIHtcbiAgICAgIHRoaXMuY29tbWl0bGludENvbmZpZyA9IG5ldyBDb21taXRMaW50Q29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLmRldkNvbnRhaW5lckVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZGV2Q29udGFpbmVyQ29uZmlnID0gbmV3IERldkNvbnRhaW5lckNvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5lc2xpbnRFbmFibGVkKSB7XG4gICAgICB0aGlzLmVzbGludENvbmZpZyA9IG5ldyBFc0xpbnRDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuamVzdEVuYWJsZWQpIHtcbiAgICAgIHRoaXMuamVzdENvbmZpZyA9IG5ldyBKZXN0Q29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLmdpdGh1YkVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZ2l0aHViQ29uZmlnID0gbmV3IEdpdEh1YkNvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5wcmV0dGllckVuYWJsZWQpIHtcbiAgICAgIHRoaXMucHJldHRpZXJDb25maWcgPSBuZXcgUHJldHRpZXJDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMudnNjb2RlRW5hYmxlZCkge1xuICAgICAgdGhpcy52c2NvZGVDb25maWcgPSBuZXcgVnNDb2RlQ29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLmh1c2t5RW5hYmxlZCkge1xuICAgICAgdGhpcy5odXNreUNvbmZpZyA9IG5ldyBIdXNreUNvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5zYW1wbGVDb2RlRW5hYmxlZCkge1xuICAgICAgdGhpcy5zYW1wbGVDb2RlQ29uZmlnID0gbmV3IFNhbXBsZUNvZGVDb25maWdDYXBTZXJ2aWNlKHRoaXMsIHVwZGF0ZWRPcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLmlzc3Vlc0VuYWJsZWQpIHtcbiAgICAgIHRoaXMuaXNzdWVzQ29uZmlnID0gbmV3IElzc3Vlc0NvbmZpZ0Jhc2UodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGluaXRpYWxpemVCYXNlQ29uZmlncyhvcHRpb25zOiBCYXNlUHJvamVjdE9wdGlvbnMpOiB2b2lkIHtcbiAgICBzdXBlci5pbml0aWFsaXplQmFzZUNvbmZpZ3Mob3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcG9zdFN5bnRoZXNpemUoKTogdm9pZCB7XG4gICAgc3VwZXIucG9zdFN5bnRoZXNpemUoKTtcblxuICAgIHV0aWwuc2V0dXBFeGl0SGFuZGxlcihDYXBTZXJ2aWNlUHJvamVjdC5jbGVhbkNvbW1hbmQpO1xuICB9XG59XG4iXX0=
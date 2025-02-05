"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapServiceProject = void 0;
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
CapServiceProject.cleanCommand = `npx projen eject && rm -rf .projenrc.ts.bak scripts .projen && npm install ${constants_1.constants['@dxfrontier/cds-ts-dispatcher'].NAME}@${constants_1.constants['@dxfrontier/cds-ts-dispatcher'].VERSION}`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYXAtc2VydmljZS9wcm9qZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGtDQUF1RTtBQUN2RSxpREFBOEM7QUFDOUMsb0RBQWlFO0FBQ2pFLHdEQUFxRTtBQUNyRSw0Q0FBeUQ7QUFDekQsc0NBQW1EO0FBQ25ELDRDQUF5RDtBQUN6RCwwQ0FBdUQ7QUFDdkQsd0NBQXFEO0FBQ3JELHNDQUFtRDtBQUNuRCxnREFBNkQ7QUFDN0Qsb0RBQWlFO0FBQ2pFLG9EQUFpRTtBQUNqRSw0Q0FBeUQ7QUFDekQsNENBQXlEO0FBQ3pELHlDQUFxQztBQU9yQzs7R0FFRztBQUNILE1BQWEsaUJBQWtCLFNBQVEsa0JBQVc7SUFHaEQ7OztPQUdHO0lBQ0gsWUFBWSxPQUFpQztRQUMzQyxNQUFNLGNBQWMsR0FBRztZQUNyQixHQUFHLE9BQU87WUFDVixpQkFBaUIsRUFBRSxPQUFPLENBQUMsaUJBQWlCLElBQUksSUFBSTtZQUNwRCxtQkFBbUIsRUFBRSxPQUFPLENBQUMsbUJBQW1CLElBQUksSUFBSTtZQUN4RCxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJO1lBQzVDLGFBQWEsRUFBRSxPQUFPLENBQUMsYUFBYSxJQUFJLElBQUk7WUFDNUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZQUFZLElBQUksSUFBSTtZQUMxQyxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsSUFBSSxJQUFJO1lBQ3hDLGVBQWUsRUFBRSxPQUFPLENBQUMsZUFBZSxJQUFJLElBQUk7WUFDaEQsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSTtZQUM1QyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsaUJBQWlCLElBQUksSUFBSTtZQUNwRCxpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLHlFQUF5RTtZQUM3RixTQUFTLEVBQUUsT0FB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Y3QsIEJhc2VPcHRpb25zIH0gZnJvbSAnLi4vYmFzZSc7XG5pbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tICcuLi91dGlsL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBDb21taXRMaW50Q29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2NvbW1pdGxpbnQnO1xuaW1wb3J0IHsgRGV2Q29udGFpbmVyQ29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2RldmNvbnRhaW5lcic7XG5pbXBvcnQgeyBFc0xpbnRDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvZXNsaW50JztcbmltcG9ydCB7IEdpdENvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9naXQnO1xuaW1wb3J0IHsgR2l0SHViQ29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2dpdGh1Yic7XG5pbXBvcnQgeyBIdXNreUNvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9odXNreSc7XG5pbXBvcnQgeyBKZXN0Q29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2plc3QnO1xuaW1wb3J0IHsgTnBtQ29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL25wbSc7XG5pbXBvcnQgeyBQcmV0dGllckNvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9wcmV0dGllcic7XG5pbXBvcnQgeyBTYW1wbGVDb2RlQ29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL3NhbXBsZWNvZGUnO1xuaW1wb3J0IHsgVHlwZVNjcmlwdENvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy90eXBlc2NyaXB0JztcbmltcG9ydCB7IFZzQ29kZUNvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy92c2NvZGUnO1xuaW1wb3J0IHsgUmVhZG1lQ29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL3JlYWRtZSc7XG5pbXBvcnQgeyB1dGlsIH0gZnJvbSAnLi4vdXRpbC91dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FwU2VydmljZVByb2plY3RPcHRpb25zIGV4dGVuZHMgQmFzZVByb2plY3RPcHRpb25zIHtcbiAgcmVhZG9ubHkgbmFtZXNwYWNlPzogc3RyaW5nO1xuICByZWFkb25seSBlbnRpdHlOYW1lPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIG1hbmFnaW5nIHByb2plY3QgQ2FwU2VydmljZSBjb25maWd1cmF0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgQ2FwU2VydmljZVByb2plY3QgZXh0ZW5kcyBCYXNlUHJvamVjdCB7XG4gIHN0YXRpYyBjbGVhbkNvbW1hbmQgPSBgbnB4IHByb2plbiBlamVjdCAmJiBybSAtcmYgLnByb2plbnJjLnRzLmJhayBzY3JpcHRzIC5wcm9qZW4gJiYgbnBtIGluc3RhbGwgJHtjb25zdGFudHNbJ0BkeGZyb250aWVyL2Nkcy10cy1kaXNwYXRjaGVyJ10uTkFNRX1AJHtjb25zdGFudHNbJ0BkeGZyb250aWVyL2Nkcy10cy1kaXNwYXRjaGVyJ10uVkVSU0lPTn1gO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgcHJvamVjdC5cbiAgICogQHBhcmFtIG9wdGlvbnMgQWRkaXRpb25hbCBwcm9qZWN0IG9wdGlvbnMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBDYXBTZXJ2aWNlUHJvamVjdE9wdGlvbnMpIHtcbiAgICBjb25zdCB1cGRhdGVkT3B0aW9ucyA9IHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBjb21taXRsaW50RW5hYmxlZDogb3B0aW9ucy5jb21taXRsaW50RW5hYmxlZCA/PyB0cnVlLFxuICAgICAgZGV2Q29udGFpbmVyRW5hYmxlZDogb3B0aW9ucy5kZXZDb250YWluZXJFbmFibGVkID8/IHRydWUsXG4gICAgICBlc2xpbnRFbmFibGVkOiBvcHRpb25zLmVzbGludEVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIGdpdGh1YkVuYWJsZWQ6IG9wdGlvbnMuZ2l0aHViRW5hYmxlZCA/PyB0cnVlLFxuICAgICAgaHVza3lFbmFibGVkOiBvcHRpb25zLmh1c2t5RW5hYmxlZCA/PyB0cnVlLFxuICAgICAgamVzdEVuYWJsZWQ6IG9wdGlvbnMuamVzdEVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIHByZXR0aWVyRW5hYmxlZDogb3B0aW9ucy5wcmV0dGllckVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIHZzY29kZUVuYWJsZWQ6IG9wdGlvbnMudnNjb2RlRW5hYmxlZCA/PyB0cnVlLFxuICAgICAgc2FtcGxlQ29kZUVuYWJsZWQ6IG9wdGlvbnMuc2FtcGxlQ29kZUVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIHR5cGVzY3JpcHRFbmFibGVkOiB0cnVlLFxuICAgICAgbmFtZTogb3B0aW9ucy5uYW1lLCAvLyBwcm9qZW4gcHJlc2V0cyB0aGUgb3B0aW9uIHdpdGggJ3Byb2plY3QnIGlmIG5vIGN1c3RvbSBvcHRpb24gaXMgZ2l2ZW4uXG4gICAgICBuYW1lc3BhY2U6IG9wdGlvbnMubmFtZXNwYWNlID8/IGNvbnN0YW50cy5QUk9KRUNUX05BTUVTUEFDRSxcbiAgICAgIGRlc2NyaXB0aW9uOiBvcHRpb25zLmRlc2NyaXB0aW9uID8/IGNvbnN0YW50cy5DQVBfUFJPSkVDVF9ERVNDUklQVElPTixcbiAgICAgIGVudGl0eU5hbWU6IG9wdGlvbnMuZW50aXR5TmFtZSA/PyBjb25zdGFudHMuRU5USVRZX05BTUUsXG4gICAgfTtcbiAgICBzdXBlcih7XG4gICAgICAuLi5CYXNlT3B0aW9ucy5zaGFyZWRPcHRpb25zKHVwZGF0ZWRPcHRpb25zKSxcbiAgICAgIHJlYWRtZTogbmV3IFJlYWRtZUNvbmZpZ0NhcFNlcnZpY2UoKS5nZXRSZWFkbWUodXBkYXRlZE9wdGlvbnMpLCAvLyBuZWVkcyB0byBiZSB0cmVhdGVkIGFzIHNwZWNpYWwgY2FzZSBkdWUgdG8gUHJvamVuIHdvcmtmbG93LlxuICAgIH0pO1xuXG4gICAgdGhpcy5naXRDb25maWcgPSBuZXcgR2l0Q29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB0aGlzLm5wbUNvbmZpZyA9IG5ldyBOcG1Db25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIHRoaXMudHlwZXNjcmlwdENvbmZpZyA9IG5ldyBUeXBlU2NyaXB0Q29uZmlnQ2FwU2VydmljZSh0aGlzKTtcblxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5jb21taXRsaW50RW5hYmxlZCkge1xuICAgICAgdGhpcy5jb21taXRsaW50Q29uZmlnID0gbmV3IENvbW1pdExpbnRDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuZGV2Q29udGFpbmVyRW5hYmxlZCkge1xuICAgICAgdGhpcy5kZXZDb250YWluZXJDb25maWcgPSBuZXcgRGV2Q29udGFpbmVyQ29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLmVzbGludEVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZXNsaW50Q29uZmlnID0gbmV3IEVzTGludENvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5qZXN0RW5hYmxlZCkge1xuICAgICAgdGhpcy5qZXN0Q29uZmlnID0gbmV3IEplc3RDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuZ2l0aHViRW5hYmxlZCkge1xuICAgICAgdGhpcy5naXRodWJDb25maWcgPSBuZXcgR2l0SHViQ29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLnByZXR0aWVyRW5hYmxlZCkge1xuICAgICAgdGhpcy5wcmV0dGllckNvbmZpZyA9IG5ldyBQcmV0dGllckNvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy52c2NvZGVFbmFibGVkKSB7XG4gICAgICB0aGlzLnZzY29kZUNvbmZpZyA9IG5ldyBWc0NvZGVDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuaHVza3lFbmFibGVkKSB7XG4gICAgICB0aGlzLmh1c2t5Q29uZmlnID0gbmV3IEh1c2t5Q29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLnNhbXBsZUNvZGVFbmFibGVkKSB7XG4gICAgICB0aGlzLnNhbXBsZUNvZGVDb25maWcgPSBuZXcgU2FtcGxlQ29kZUNvbmZpZ0NhcFNlcnZpY2UodGhpcywgdXBkYXRlZE9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBpbml0aWFsaXplQmFzZUNvbmZpZ3Mob3B0aW9uczogQmFzZVByb2plY3RPcHRpb25zKTogdm9pZCB7XG4gICAgc3VwZXIuaW5pdGlhbGl6ZUJhc2VDb25maWdzKG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHBvc3RTeW50aGVzaXplKCk6IHZvaWQge1xuICAgIHN1cGVyLnBvc3RTeW50aGVzaXplKCk7XG5cbiAgICB1dGlsLnNldHVwRXhpdEhhbmRsZXIoQ2FwU2VydmljZVByb2plY3QuY2xlYW5Db21tYW5kKTtcbiAgfVxufVxuIl19
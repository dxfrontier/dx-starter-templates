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
CapServiceProject.cleanCommand = `npx projen eject && rm -rf .projenrc.ts.bak scripts .projen && npm install ${constants_1.constants['@dxfrontier/cds-ts-dispatcher'].NAME}@${constants_1.constants['@dxfrontier/cds-ts-dispatcher'].VERSION}`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYXAtc2VydmljZS9wcm9qZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQXVFO0FBQ3ZFLGlEQUE4QztBQUM5QyxvREFBaUU7QUFDakUsd0RBQXFFO0FBQ3JFLDRDQUF5RDtBQUN6RCxzQ0FBbUQ7QUFDbkQsNENBQXlEO0FBQ3pELDBDQUF1RDtBQUN2RCx3Q0FBcUQ7QUFDckQsc0NBQW1EO0FBQ25ELGdEQUE2RDtBQUM3RCxvREFBaUU7QUFDakUsb0RBQWlFO0FBQ2pFLDRDQUF5RDtBQUN6RCw0Q0FBeUQ7QUFDekQseUNBQXFDO0FBT3JDOztHQUVHO0FBQ0gsTUFBYSxpQkFBa0IsU0FBUSxrQkFBVztJQUdoRDs7O09BR0c7SUFDSCxZQUFZLE9BQWlDO1FBQzNDLE1BQU0sY0FBYyxHQUFHO1lBQ3JCLEdBQUcsT0FBTztZQUNWLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsSUFBSSxJQUFJO1lBQ3BELG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxtQkFBbUIsSUFBSSxJQUFJO1lBQ3hELGFBQWEsRUFBRSxPQUFPLENBQUMsYUFBYSxJQUFJLElBQUk7WUFDNUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSTtZQUM1QyxZQUFZLEVBQUUsT0FBTyxDQUFDLFlBQVksSUFBSSxJQUFJO1lBQzFDLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVyxJQUFJLElBQUk7WUFDeEMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxlQUFlLElBQUksSUFBSTtZQUNoRCxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJO1lBQzVDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsSUFBSSxJQUFJO1lBQ3BELGlCQUFpQixFQUFFLElBQUk7WUFDdkIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUseUVBQXlFO1lBQzdGLFNBQVMsRUFBRSxP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cm9qZWN0LCBCYXNlT3B0aW9ucyB9IGZyb20gJy4uL2Jhc2UnO1xuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSAnLi4vdXRpbC9jb25zdGFudHMnO1xuaW1wb3J0IHsgQ29tbWl0TGludENvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9jb21taXRsaW50JztcbmltcG9ydCB7IERldkNvbnRhaW5lckNvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9kZXZjb250YWluZXInO1xuaW1wb3J0IHsgRXNMaW50Q29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2VzbGludCc7XG5pbXBvcnQgeyBHaXRDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvZ2l0JztcbmltcG9ydCB7IEdpdEh1YkNvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9naXRodWInO1xuaW1wb3J0IHsgSHVza3lDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvaHVza3knO1xuaW1wb3J0IHsgSmVzdENvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9qZXN0JztcbmltcG9ydCB7IE5wbUNvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9ucG0nO1xuaW1wb3J0IHsgUHJldHRpZXJDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvcHJldHRpZXInO1xuaW1wb3J0IHsgU2FtcGxlQ29kZUNvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9zYW1wbGVjb2RlJztcbmltcG9ydCB7IFR5cGVTY3JpcHRDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyBWc0NvZGVDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvdnNjb2RlJztcbmltcG9ydCB7IFJlYWRtZUNvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9yZWFkbWUnO1xuaW1wb3J0IHsgdXRpbCB9IGZyb20gJy4uL3V0aWwvdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcFNlcnZpY2VQcm9qZWN0T3B0aW9ucyBleHRlbmRzIEJhc2VQcm9qZWN0T3B0aW9ucyB7XG4gIHJlYWRvbmx5IG5hbWVzcGFjZT86IHN0cmluZztcbiAgcmVhZG9ubHkgZW50aXR5TmFtZT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBtYW5hZ2luZyBwcm9qZWN0IENhcFNlcnZpY2UgY29uZmlndXJhdGlvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIENhcFNlcnZpY2VQcm9qZWN0IGV4dGVuZHMgQmFzZVByb2plY3Qge1xuICBzdGF0aWMgY2xlYW5Db21tYW5kID0gYG5weCBwcm9qZW4gZWplY3QgJiYgcm0gLXJmIC5wcm9qZW5yYy50cy5iYWsgc2NyaXB0cyAucHJvamVuICYmIG5wbSBpbnN0YWxsICR7Y29uc3RhbnRzWydAZHhmcm9udGllci9jZHMtdHMtZGlzcGF0Y2hlciddLk5BTUV9QCR7Y29uc3RhbnRzWydAZHhmcm9udGllci9jZHMtdHMtZGlzcGF0Y2hlciddLlZFUlNJT059YDtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIHByb2plY3QuXG4gICAqIEBwYXJhbSBvcHRpb25zIEFkZGl0aW9uYWwgcHJvamVjdCBvcHRpb25zLlxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9uczogQ2FwU2VydmljZVByb2plY3RPcHRpb25zKSB7XG4gICAgY29uc3QgdXBkYXRlZE9wdGlvbnMgPSB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgY29tbWl0bGludEVuYWJsZWQ6IG9wdGlvbnMuY29tbWl0bGludEVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIGRldkNvbnRhaW5lckVuYWJsZWQ6IG9wdGlvbnMuZGV2Q29udGFpbmVyRW5hYmxlZCA/PyB0cnVlLFxuICAgICAgZXNsaW50RW5hYmxlZDogb3B0aW9ucy5lc2xpbnRFbmFibGVkID8/IHRydWUsXG4gICAgICBnaXRodWJFbmFibGVkOiBvcHRpb25zLmdpdGh1YkVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIGh1c2t5RW5hYmxlZDogb3B0aW9ucy5odXNreUVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIGplc3RFbmFibGVkOiBvcHRpb25zLmplc3RFbmFibGVkID8/IHRydWUsXG4gICAgICBwcmV0dGllckVuYWJsZWQ6IG9wdGlvbnMucHJldHRpZXJFbmFibGVkID8/IHRydWUsXG4gICAgICB2c2NvZGVFbmFibGVkOiBvcHRpb25zLnZzY29kZUVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIHNhbXBsZUNvZGVFbmFibGVkOiBvcHRpb25zLnNhbXBsZUNvZGVFbmFibGVkID8/IHRydWUsXG4gICAgICB0eXBlc2NyaXB0RW5hYmxlZDogdHJ1ZSxcbiAgICAgIG5hbWU6IG9wdGlvbnMubmFtZSwgLy8gcHJvamVuIHByZXNldHMgdGhlIG9wdGlvbiB3aXRoICdwcm9qZWN0JyBpZiBubyBjdXN0b20gb3B0aW9uIGlzIGdpdmVuLlxuICAgICAgbmFtZXNwYWNlOiBvcHRpb25zLm5hbWVzcGFjZSA/PyBjb25zdGFudHMuUFJPSkVDVF9OQU1FU1BBQ0UsXG4gICAgICBkZXNjcmlwdGlvbjogb3B0aW9ucy5kZXNjcmlwdGlvbiA/PyBjb25zdGFudHMuQ0FQX1BST0pFQ1RfREVTQ1JJUFRJT04sXG4gICAgICBlbnRpdHlOYW1lOiBvcHRpb25zLmVudGl0eU5hbWUgPz8gY29uc3RhbnRzLkVOVElUWV9OQU1FLFxuICAgIH07XG4gICAgc3VwZXIoe1xuICAgICAgLi4uQmFzZU9wdGlvbnMuc2hhcmVkT3B0aW9ucyh1cGRhdGVkT3B0aW9ucyksXG4gICAgICByZWFkbWU6IG5ldyBSZWFkbWVDb25maWdDYXBTZXJ2aWNlKCkuZ2V0UmVhZG1lKHVwZGF0ZWRPcHRpb25zKSwgLy8gbmVlZHMgdG8gYmUgdHJlYXRlZCBhcyBzcGVjaWFsIGNhc2UgZHVlIHRvIFByb2plbiB3b3JrZmxvdy5cbiAgICB9KTtcblxuICAgIHRoaXMuZ2l0Q29uZmlnID0gbmV3IEdpdENvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgdGhpcy5ucG1Db25maWcgPSBuZXcgTnBtQ29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB0aGlzLnR5cGVzY3JpcHRDb25maWcgPSBuZXcgVHlwZVNjcmlwdENvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG5cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuY29tbWl0bGludEVuYWJsZWQpIHtcbiAgICAgIHRoaXMuY29tbWl0bGludENvbmZpZyA9IG5ldyBDb21taXRMaW50Q29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLmRldkNvbnRhaW5lckVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZGV2Q29udGFpbmVyQ29uZmlnID0gbmV3IERldkNvbnRhaW5lckNvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5lc2xpbnRFbmFibGVkKSB7XG4gICAgICB0aGlzLmVzbGludENvbmZpZyA9IG5ldyBFc0xpbnRDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuamVzdEVuYWJsZWQpIHtcbiAgICAgIHRoaXMuamVzdENvbmZpZyA9IG5ldyBKZXN0Q29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLmdpdGh1YkVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZ2l0aHViQ29uZmlnID0gbmV3IEdpdEh1YkNvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5wcmV0dGllckVuYWJsZWQpIHtcbiAgICAgIHRoaXMucHJldHRpZXJDb25maWcgPSBuZXcgUHJldHRpZXJDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMudnNjb2RlRW5hYmxlZCkge1xuICAgICAgdGhpcy52c2NvZGVDb25maWcgPSBuZXcgVnNDb2RlQ29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLmh1c2t5RW5hYmxlZCkge1xuICAgICAgdGhpcy5odXNreUNvbmZpZyA9IG5ldyBIdXNreUNvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5zYW1wbGVDb2RlRW5hYmxlZCkge1xuICAgICAgdGhpcy5zYW1wbGVDb2RlQ29uZmlnID0gbmV3IFNhbXBsZUNvZGVDb25maWdDYXBTZXJ2aWNlKHRoaXMsIHVwZGF0ZWRPcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgaW5pdGlhbGl6ZUJhc2VDb25maWdzKG9wdGlvbnM6IEJhc2VQcm9qZWN0T3B0aW9ucyk6IHZvaWQge1xuICAgIHN1cGVyLmluaXRpYWxpemVCYXNlQ29uZmlncyhvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBwb3N0U3ludGhlc2l6ZSgpOiB2b2lkIHtcbiAgICBzdXBlci5wb3N0U3ludGhlc2l6ZSgpO1xuXG4gICAgdXRpbC5zZXR1cEV4aXRIYW5kbGVyKENhcFNlcnZpY2VQcm9qZWN0LmNsZWFuQ29tbWFuZCk7XG4gIH1cbn1cbiJdfQ==
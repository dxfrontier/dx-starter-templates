"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsiiProject = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const commitlint_1 = require("../base/config/commitlint");
const devcontainer_1 = require("../base/config/devcontainer");
const eslint_1 = require("../base/config/eslint");
const github_1 = require("../base/config/github");
const git_1 = require("../base/config/git");
const jest_1 = require("../base/config/jest");
const options_1 = require("../base/config/options");
const prettier_1 = require("../base/config/prettier");
const vscode_1 = require("../base/config/vscode");
const npm_1 = require("./config/npm");
const typescript_1 = require("./config/typescript");
const utils_1 = require("../util/utils");
const husky_1 = require("./config/husky");
const issues_1 = require("../base/config/issues");
/**
 * Base class for managing project Jsii configuration.
 */
class JsiiProject extends projen_1.cdk.JsiiProject {
    /**
     * Initializes the project.
     * @param options Additional project options.
     */
    constructor(options) {
        super({
            ...options_1.BaseOptions.sharedOptions(options),
            // tsconfig.dev.json needs to be enabled for Jsii Projects
            projenrcTs: true,
            disableTsconfigDev: options.disableTsconfigDev ?? false,
            disableTsconfig: options.disableTsconfig ?? true,
            tsconfig: {
                compilerOptions: {
                    allowImportingTsExtensions: true,
                },
            },
            jestOptions: {
                extraCliOptions: ['--verbose'],
            },
        });
        this.typescript = true;
        this.kind = 'base';
        this.gitConfig = new git_1.GitConfigBase(this);
        this.typescriptConfig = new typescript_1.TypeScriptConfigJsii(this);
        this.npmConfig = new npm_1.NpmConfigJsii(this);
        this.issuesConfig = new issues_1.IssuesConfigBase(this);
        if (options.prettierEnabled) {
            this.prettierConfig = new prettier_1.PrettierConfigBase(this);
        }
        if (options.devContainerEnabled) {
            this.devContainerConfig = new devcontainer_1.DevContainerConfigBase(this);
        }
        if (options.eslintEnabled) {
            this.eslintConfig = new eslint_1.EsLintConfigBase(this);
        }
        if (options.jestEnabled) {
            this.jestConfig = new jest_1.JestConfigBase(this);
        }
        if (options.vscodeEnabled) {
            this.vscodeConfig = new vscode_1.VsCodeConfigBase(this);
        }
        if (options.githubEnabled) {
            this.githubConfig = new github_1.GitHubConfigBase(this);
        }
        if (options.commitlintEnabled) {
            this.commitlintConfig = new commitlint_1.CommitLintConfigBase(this);
        }
        if (options.huskyEnabled) {
            this.huskyConfig = new husky_1.HuskyConfigJsii(this);
        }
    }
    preSynthesize() {
        utils_1.util.registerConfig(this.components);
        super.preSynthesize();
    }
    postSynthesize() {
        super.postSynthesize();
    }
}
exports.JsiiProject = JsiiProject;
_a = JSII_RTTI_SYMBOL_1;
JsiiProject[_a] = { fqn: "@dxfrontier/projen-template-projects.JsiiProject", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qc2lpL3Byb2plY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBNkI7QUFDN0IsMERBQWlFO0FBQ2pFLDhEQUFxRTtBQUNyRSxrREFBeUQ7QUFDekQsa0RBQXlEO0FBRXpELDRDQUFtRDtBQUNuRCw4Q0FBcUQ7QUFDckQsb0RBQXFEO0FBQ3JELHNEQUE2RDtBQUM3RCxrREFBeUQ7QUFDekQsc0NBQTZDO0FBQzdDLG9EQUEyRDtBQUMzRCx5Q0FBcUM7QUFHckMsMENBQWlEO0FBQ2pELGtEQUF5RDtBQTREekQ7O0dBRUc7QUFDSCxNQUFhLFdBQVksU0FBUSxZQUFHLENBQUMsV0FBVztJQW9GOUM7OztPQUdHO0lBQ0gsWUFBWSxPQUEyQjtRQUNyQyxLQUFLLENBQUM7WUFDSixHQUFHLHFCQUFXLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztZQUNyQywwREFBMEQ7WUFDMUQsVUFBVSxFQUFFLElBQUk7WUFDaEIsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLGtCQUFrQixJQUFJLEtBQUs7WUFDdkQsZUFBZSxFQUFFLE9BQU8sQ0FBQyxlQUFlLElBQUksSUFBSTtZQUNoRCxRQUFRLEVBQUU7Z0JBQ1IsZUFBZSxFQUFFO29CQUNmLDBCQUEwQixFQUFFLElBQUk7aUJBQ2pDO2FBQ0Y7WUFDRCxXQUFXLEVBQUU7Z0JBQ1gsZUFBZSxFQUFFLENBQUMsV0FBVyxDQUFDO2FBQy9CO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFFbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLG1CQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksaUNBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLG1CQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHlCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9DLElBQUksT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSw2QkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxxQ0FBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3RCxDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHlCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUkscUJBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHlCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUkseUJBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksaUNBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx1QkFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLENBQUM7SUFDSCxDQUFDO0lBRWUsYUFBYTtRQUMzQixZQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVlLGNBQWM7UUFDNUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7O0FBbEpILGtDQW1KQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNkayB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBDb21taXRMaW50Q29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UvY29uZmlnL2NvbW1pdGxpbnQnO1xuaW1wb3J0IHsgRGV2Q29udGFpbmVyQ29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UvY29uZmlnL2RldmNvbnRhaW5lcic7XG5pbXBvcnQgeyBFc0xpbnRDb25maWdCYXNlIH0gZnJvbSAnLi4vYmFzZS9jb25maWcvZXNsaW50JztcbmltcG9ydCB7IEdpdEh1YkNvbmZpZ0Jhc2UgfSBmcm9tICcuLi9iYXNlL2NvbmZpZy9naXRodWInO1xuaW1wb3J0IHsgSHVza3lDb25maWdCYXNlIH0gZnJvbSAnLi4vYmFzZS9jb25maWcvaHVza3knO1xuaW1wb3J0IHsgR2l0Q29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UvY29uZmlnL2dpdCc7XG5pbXBvcnQgeyBKZXN0Q29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UvY29uZmlnL2plc3QnO1xuaW1wb3J0IHsgQmFzZU9wdGlvbnMgfSBmcm9tICcuLi9iYXNlL2NvbmZpZy9vcHRpb25zJztcbmltcG9ydCB7IFByZXR0aWVyQ29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UvY29uZmlnL3ByZXR0aWVyJztcbmltcG9ydCB7IFZzQ29kZUNvbmZpZ0Jhc2UgfSBmcm9tICcuLi9iYXNlL2NvbmZpZy92c2NvZGUnO1xuaW1wb3J0IHsgTnBtQ29uZmlnSnNpaSB9IGZyb20gJy4vY29uZmlnL25wbSc7XG5pbXBvcnQgeyBUeXBlU2NyaXB0Q29uZmlnSnNpaSB9IGZyb20gJy4vY29uZmlnL3R5cGVzY3JpcHQnO1xuaW1wb3J0IHsgdXRpbCB9IGZyb20gJy4uL3V0aWwvdXRpbHMnO1xuaW1wb3J0IHsgSVByb2plY3RLaW5kLCBQcm9qZWN0S2luZCB9IGZyb20gJy4uL3V0aWwvdHlwZXMvcHJvamVjdCc7XG5pbXBvcnQgeyBUeXBlU2NyaXB0Q29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UvY29uZmlnL3R5cGVzY3JpcHQnO1xuaW1wb3J0IHsgSHVza3lDb25maWdKc2lpIH0gZnJvbSAnLi9jb25maWcvaHVza3knO1xuaW1wb3J0IHsgSXNzdWVzQ29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UvY29uZmlnL2lzc3Vlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSnNpaVByb2plY3RPcHRpb25zIGV4dGVuZHMgY2RrLkpzaWlQcm9qZWN0T3B0aW9ucyB7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGVuYWJsZSB0aGUgY29tbWl0bGludCBjb25maWd1cmF0aW9uIGZvciB0aGUgcHJvamVjdC5cbiAgICogSWYgc2V0IHRvIGB0cnVlYCwgY29tbWl0bGludCBjb25maWd1cmF0aW9uIHdpbGwgYmUgZW5hYmxlZC5cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIHJlYWRvbmx5IGNvbW1pdGxpbnRFbmFibGVkPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hldGhlciB0byBlbmFibGUgdGhlIGRldiBjb250YWluZXIgY29uZmlndXJhdGlvbiBmb3IgdGhlIHByb2plY3QuXG4gICAqIElmIHNldCB0byBgdHJ1ZWAsIGRldiBjb250YWluZXIgY29uZmlndXJhdGlvbiB3aWxsIGJlIGVuYWJsZWQuXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICByZWFkb25seSBkZXZDb250YWluZXJFbmFibGVkPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hldGhlciB0byBlbmFibGUgdGhlIEVTTGludCBjb25maWd1cmF0aW9uIGZvciB0aGUgcHJvamVjdC5cbiAgICogSWYgc2V0IHRvIGB0cnVlYCwgRVNMaW50IGNvbmZpZ3VyYXRpb24gd2lsbCBiZSBlbmFibGVkLlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgcmVhZG9ubHkgZXNsaW50RW5hYmxlZD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZW5hYmxlIHRoZSBHaXRIdWIgY29uZmlndXJhdGlvbiBmb3IgdGhlIHByb2plY3QuXG4gICAqIElmIHNldCB0byBgdHJ1ZWAsIEdpdEh1Yi1yZWxhdGVkIHNldHRpbmdzIHdpbGwgYmUgY29uZmlndXJlZCAoZS5nLiwgaXNzdWUgdGVtcGxhdGVzLCBQUiB0ZW1wbGF0ZXMpLlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgcmVhZG9ubHkgZ2l0aHViRW5hYmxlZD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZW5hYmxlIHRoZSBIdXNreSBjb25maWd1cmF0aW9uIGZvciB0aGUgcHJvamVjdC5cbiAgICogSWYgc2V0IHRvIGB0cnVlYCwgSHVza3kgaG9va3Mgd2lsbCBiZSBlbmFibGVkIHRvIGVuZm9yY2UgY29kZSBxdWFsaXR5IGNoZWNrcy5cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIHJlYWRvbmx5IGh1c2t5RW5hYmxlZD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZW5hYmxlIHRoZSBKZXN0IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBwcm9qZWN0LlxuICAgKiBJZiBzZXQgdG8gYHRydWVgLCBKZXN0IHRlc3RpbmcgZnJhbWV3b3JrIHdpbGwgYmUgY29uZmlndXJlZCBmb3IgdGhlIHByb2plY3QuXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICByZWFkb25seSBqZXN0RW5hYmxlZD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZW5hYmxlIHRoZSBQcmV0dGllciBjb25maWd1cmF0aW9uIGZvciB0aGUgcHJvamVjdC5cbiAgICogSWYgc2V0IHRvIGB0cnVlYCwgUHJldHRpZXIgY29kZSBmb3JtYXR0aW5nIGNvbmZpZ3VyYXRpb24gd2lsbCBiZSBlbmFibGVkLlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgcmVhZG9ubHkgcHJldHRpZXJFbmFibGVkPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hldGhlciB0byBlbmFibGUgdGhlIFZTIENvZGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIHByb2plY3QuXG4gICAqIElmIHNldCB0byBgdHJ1ZWAsIFZTIENvZGUgc2V0dGluZ3Mgd2lsbCBiZSBhcHBsaWVkIGZvciB0aGUgcHJvamVjdC5cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIHJlYWRvbmx5IHZzY29kZUVuYWJsZWQ/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIG1hbmFnaW5nIHByb2plY3QgSnNpaSBjb25maWd1cmF0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgSnNpaVByb2plY3QgZXh0ZW5kcyBjZGsuSnNpaVByb2plY3QgaW1wbGVtZW50cyBJUHJvamVjdEtpbmQge1xuICAvKipcbiAgICogQ29uZmlndXJhdGlvbiBmb3IgY29tbWl0bGludCBzZXR0aW5ncyBpbiB0aGUgcHJvamVjdC5cbiAgICogVGhpcyBwcm9wZXJ0eSBpcyBpbml0aWFsaXplZCBpZiBgY29tbWl0bGludEVuYWJsZWRgIG9wdGlvbiBpcyBwcm92aWRlZCBkdXJpbmcgcHJvamVjdCBjcmVhdGlvbi5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBjb21taXRsaW50Q29uZmlnPzogQ29tbWl0TGludENvbmZpZ0Jhc2U7XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyYXRpb24gZm9yIGRldmVsb3BtZW50IGNvbnRhaW5lciBzZXR0aW5ncyBpbiB0aGUgcHJvamVjdC5cbiAgICogVGhpcyBwcm9wZXJ0eSBpcyBpbml0aWFsaXplZCBpZiBgZGV2Q29udGFpbmVyRW5hYmxlZGAgb3B0aW9uIGlzIHByb3ZpZGVkIGR1cmluZyBwcm9qZWN0IGNyZWF0aW9uLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGRldkNvbnRhaW5lckNvbmZpZz86IERldkNvbnRhaW5lckNvbmZpZ0Jhc2U7XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyYXRpb24gZm9yIEVTTGludCBzZXR0aW5ncyBpbiB0aGUgcHJvamVjdC5cbiAgICogVGhpcyBwcm9wZXJ0eSBpcyBpbml0aWFsaXplZCBpZiBgZXNsaW50RW5hYmxlZGAgb3B0aW9uIGlzIHByb3ZpZGVkIGR1cmluZyBwcm9qZWN0IGNyZWF0aW9uLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGVzbGludENvbmZpZz86IEVzTGludENvbmZpZ0Jhc2U7XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyYXRpb24gZm9yIEdpdCBzZXR0aW5ncyBpbiB0aGUgcHJvamVjdC5cbiAgICogVGhpcyBwcm9wZXJ0eSBpcyBhbHdheXMgaW5pdGlhbGl6ZWQgYXMgYGdpdENvbmZpZ2Agd2hlbiB0aGUgcHJvamVjdCBpcyBjcmVhdGVkLlxuICAgKi9cbiAgcHVibGljIGdpdENvbmZpZz86IEdpdENvbmZpZ0Jhc2U7XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyYXRpb24gZm9yIEdpdEh1YiBzZXR0aW5ncyBpbiB0aGUgcHJvamVjdC5cbiAgICogVGhpcyBwcm9wZXJ0eSBpcyBpbml0aWFsaXplZCBpZiBgZ2l0aHViRW5hYmxlZGAgb3B0aW9uIGlzIHByb3ZpZGVkIGR1cmluZyBwcm9qZWN0IGNyZWF0aW9uLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGdpdGh1YkNvbmZpZz86IEdpdEh1YkNvbmZpZ0Jhc2U7XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyYXRpb24gZm9yIEh1c2t5IHNldHRpbmdzIGluIHRoZSBwcm9qZWN0LlxuICAgKiBUaGlzIHByb3BlcnR5IGlzIGluaXRpYWxpemVkIGlmIGBodXNreUVuYWJsZWRgIG9wdGlvbiBpcyBwcm92aWRlZCBkdXJpbmcgcHJvamVjdCBjcmVhdGlvbi5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBodXNreUNvbmZpZz86IEh1c2t5Q29uZmlnQmFzZTtcblxuICAvKipcbiAgICogQ29uZmlndXJhdGlvbiBmb3IgSmVzdCBzZXR0aW5ncyBpbiB0aGUgcHJvamVjdC5cbiAgICogVGhpcyBwcm9wZXJ0eSBpcyBpbml0aWFsaXplZCBpZiBgamVzdEVuYWJsZWRgIG9wdGlvbiBpcyBwcm92aWRlZCBkdXJpbmcgcHJvamVjdCBjcmVhdGlvbi5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBqZXN0Q29uZmlnPzogSmVzdENvbmZpZ0Jhc2U7XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyYXRpb24gZm9yIE5QTSBzZXR0aW5ncyBpbiB0aGUgcHJvamVjdC5cbiAgICogVGhpcyBwcm9wZXJ0eSBpcyBhbHdheXMgaW5pdGlhbGl6ZWQgYXMgYG5wbUNvbmZpZ2Agd2hlbiB0aGUgcHJvamVjdCBpcyBjcmVhdGVkLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IG5wbUNvbmZpZz86IE5wbUNvbmZpZ0pzaWk7XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyYXRpb24gZm9yIFByZXR0aWVyIHNldHRpbmdzIGluIHRoZSBwcm9qZWN0LlxuICAgKiBUaGlzIHByb3BlcnR5IGlzIGluaXRpYWxpemVkIGlmIGBwcmV0dGllckVuYWJsZWRgIG9wdGlvbiBpcyBwcm92aWRlZCBkdXJpbmcgcHJvamVjdCBjcmVhdGlvbi5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBwcmV0dGllckNvbmZpZz86IFByZXR0aWVyQ29uZmlnQmFzZTtcblxuICAvKipcbiAgICogQ29uZmlndXJhdGlvbiBmb3IgVlMgQ29kZSBzZXR0aW5ncyBpbiB0aGUgcHJvamVjdC5cbiAgICogVGhpcyBwcm9wZXJ0eSBpcyBpbml0aWFsaXplZCBpZiBgdnNjb2RlRW5hYmxlZGAgb3B0aW9uIGlzIHByb3ZpZGVkIGR1cmluZyBwcm9qZWN0IGNyZWF0aW9uLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHZzY29kZUNvbmZpZz86IFZzQ29kZUNvbmZpZ0Jhc2U7XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyYXRpb24gZm9yIFR5cGVTY3JpcHQgc2V0dGluZ3MgaW4gdGhlIHByb2plY3QuXG4gICAqIFRoaXMgcHJvcGVydHkgaXMgYWx3YXlzIGluaXRpYWxpemVkIGFzIGB0eXBlc2NyaXB0Q29uZmlnYCB3aGVuIHRoZSBwcm9qZWN0IGlzIGNyZWF0ZWQuXG4gICAqL1xuICBwdWJsaWMgdHlwZXNjcmlwdENvbmZpZz86IFR5cGVTY3JpcHRDb25maWdCYXNlO1xuXG4gIC8qKlxuICAgKiBUaGlzIGZsYWcgYWxpZ25zIHdpdGggUHJvamVuIHN0cnVjdHVyZSB1c2luZyBmbGFncyBsaWtlIGBlc2xpbnRgLCBgZGV2Q29udGFpbmVyYCwgLi4uLlxuICAgKiBmb3IgZGVmaW5pbmcgaWYgY29uZmlndXJhdGlvbiBmdW5jdGlvbmFsaXR5IGlzIGVuYWJsZWQgb3Igbm90LiBXaWxsIGFsaWduIHdpdGggYHR5cGVzY3JpcHRFbmFibGVkYFxuICAgKiBJZiBzZXQgdG8gYHRydWVgLCBUeXBlU2NyaXB0LXNwZWNpZmljIHNldHRpbmdzIHdpbGwgYmUgY29uZmlndXJlZCBmb3IgdGhlIHByb2plY3QuXG4gICAqIElmIHNldCB0byBgZmFsc2VgIFR5cGVTY3JpcHQgd2lsbCBiZSBjb21wbGV0ZWx5IHJlbW92ZWQgZnJvbSB0aGUgcHJvamVjdCBhc1xuICAgKiBQcm9qZW4gcHJvamVjdHMgdXNlZCBpbiB0aGlzIGNvbnRleHQgYXJlIGFsd2F5cyByZWx5aW5nIG9uIFR5cGVTY3JpcHQuXG4gICAqL1xuICBwdWJsaWMgdHlwZXNjcmlwdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyYXRpb24gZm9yIEdpdGh1ZyBpc3N1ZXMgaW4gdGhlIHByb2plY3QuXG4gICAqIFRoaXMgcHJvcGVydHkgaXMgaW5pdGlhbGl6ZWQgaWYgYGlzc3Vlc0VuYWJsZWRgIG9wdGlvbiBpcyBwcm92aWRlZCBkdXJpbmcgcHJvamVjdCBjcmVhdGlvbi5cbiAgICovXG4gIHB1YmxpYyBpc3N1ZXNDb25maWc/OiBJc3N1ZXNDb25maWdCYXNlO1xuXG4gIHB1YmxpYyBraW5kOiBQcm9qZWN0S2luZDtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIHByb2plY3QuXG4gICAqIEBwYXJhbSBvcHRpb25zIEFkZGl0aW9uYWwgcHJvamVjdCBvcHRpb25zLlxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9uczogSnNpaVByb2plY3RPcHRpb25zKSB7XG4gICAgc3VwZXIoe1xuICAgICAgLi4uQmFzZU9wdGlvbnMuc2hhcmVkT3B0aW9ucyhvcHRpb25zKSxcbiAgICAgIC8vIHRzY29uZmlnLmRldi5qc29uIG5lZWRzIHRvIGJlIGVuYWJsZWQgZm9yIEpzaWkgUHJvamVjdHNcbiAgICAgIHByb2plbnJjVHM6IHRydWUsXG4gICAgICBkaXNhYmxlVHNjb25maWdEZXY6IG9wdGlvbnMuZGlzYWJsZVRzY29uZmlnRGV2ID8/IGZhbHNlLFxuICAgICAgZGlzYWJsZVRzY29uZmlnOiBvcHRpb25zLmRpc2FibGVUc2NvbmZpZyA/PyB0cnVlLFxuICAgICAgdHNjb25maWc6IHtcbiAgICAgICAgY29tcGlsZXJPcHRpb25zOiB7XG4gICAgICAgICAgYWxsb3dJbXBvcnRpbmdUc0V4dGVuc2lvbnM6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgamVzdE9wdGlvbnM6IHtcbiAgICAgICAgZXh0cmFDbGlPcHRpb25zOiBbJy0tdmVyYm9zZSddLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRoaXMudHlwZXNjcmlwdCA9IHRydWU7XG4gICAgdGhpcy5raW5kID0gJ2Jhc2UnO1xuXG4gICAgdGhpcy5naXRDb25maWcgPSBuZXcgR2l0Q29uZmlnQmFzZSh0aGlzKTtcbiAgICB0aGlzLnR5cGVzY3JpcHRDb25maWcgPSBuZXcgVHlwZVNjcmlwdENvbmZpZ0pzaWkodGhpcyk7XG4gICAgdGhpcy5ucG1Db25maWcgPSBuZXcgTnBtQ29uZmlnSnNpaSh0aGlzKTtcbiAgICB0aGlzLmlzc3Vlc0NvbmZpZyA9IG5ldyBJc3N1ZXNDb25maWdCYXNlKHRoaXMpO1xuXG4gICAgaWYgKG9wdGlvbnMucHJldHRpZXJFbmFibGVkKSB7XG4gICAgICB0aGlzLnByZXR0aWVyQ29uZmlnID0gbmV3IFByZXR0aWVyQ29uZmlnQmFzZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuZGV2Q29udGFpbmVyRW5hYmxlZCkge1xuICAgICAgdGhpcy5kZXZDb250YWluZXJDb25maWcgPSBuZXcgRGV2Q29udGFpbmVyQ29uZmlnQmFzZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuZXNsaW50RW5hYmxlZCkge1xuICAgICAgdGhpcy5lc2xpbnRDb25maWcgPSBuZXcgRXNMaW50Q29uZmlnQmFzZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuamVzdEVuYWJsZWQpIHtcbiAgICAgIHRoaXMuamVzdENvbmZpZyA9IG5ldyBKZXN0Q29uZmlnQmFzZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMudnNjb2RlRW5hYmxlZCkge1xuICAgICAgdGhpcy52c2NvZGVDb25maWcgPSBuZXcgVnNDb2RlQ29uZmlnQmFzZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuZ2l0aHViRW5hYmxlZCkge1xuICAgICAgdGhpcy5naXRodWJDb25maWcgPSBuZXcgR2l0SHViQ29uZmlnQmFzZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuY29tbWl0bGludEVuYWJsZWQpIHtcbiAgICAgIHRoaXMuY29tbWl0bGludENvbmZpZyA9IG5ldyBDb21taXRMaW50Q29uZmlnQmFzZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuaHVza3lFbmFibGVkKSB7XG4gICAgICB0aGlzLmh1c2t5Q29uZmlnID0gbmV3IEh1c2t5Q29uZmlnSnNpaSh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcHJlU3ludGhlc2l6ZSgpOiB2b2lkIHtcbiAgICB1dGlsLnJlZ2lzdGVyQ29uZmlnKHRoaXMuY29tcG9uZW50cyk7XG4gICAgc3VwZXIucHJlU3ludGhlc2l6ZSgpO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHBvc3RTeW50aGVzaXplKCk6IHZvaWQge1xuICAgIHN1cGVyLnBvc3RTeW50aGVzaXplKCk7XG4gIH1cbn1cbiJdfQ==
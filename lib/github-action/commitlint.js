"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitLintConfigGitHubAction = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const commitlint_1 = require("../base/commitlint");
/**
 * Implementing all relevant CommitLint configuration for the GitHubAction project.
 */
class CommitLintConfigGitHubAction extends commitlint_1.CommitLintConfigBase {
    get additionalSettings() {
        return {
            'lint-staged': {
                '**/*.{yml,yaml}': ['npm run prettier'],
            },
        };
    }
}
exports.CommitLintConfigGitHubAction = CommitLintConfigGitHubAction;
_a = JSII_RTTI_SYMBOL_1;
CommitLintConfigGitHubAction[_a] = { fqn: "@dxfrontier/projen-template-projects.CommitLintConfigGitHubAction", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWl0bGludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9naXRodWItYWN0aW9uL2NvbW1pdGxpbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtREFBMEQ7QUFHMUQ7O0dBRUc7QUFDSCxNQUFhLDRCQUE2QixTQUFRLGlDQUFvQjtJQUNwRSxJQUF1QixrQkFBa0I7UUFDdkMsT0FBTztZQUNMLGFBQWEsRUFBRTtnQkFDYixpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2FBQ3hDO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0FBUEgsb0VBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21taXRMaW50Q29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UvY29tbWl0bGludCc7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4uL3R5cGVzJztcblxuLyoqXG4gKiBJbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IENvbW1pdExpbnQgY29uZmlndXJhdGlvbiBmb3IgdGhlIEdpdEh1YkFjdGlvbiBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgQ29tbWl0TGludENvbmZpZ0dpdEh1YkFjdGlvbiBleHRlbmRzIENvbW1pdExpbnRDb25maWdCYXNlIHtcbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2V0dGluZ3MoKTogU2V0dGluZ3Mge1xuICAgIHJldHVybiB7XG4gICAgICAnbGludC1zdGFnZWQnOiB7XG4gICAgICAgICcqKi8qLnt5bWwseWFtbH0nOiBbJ25wbSBydW4gcHJldHRpZXInXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuIl19
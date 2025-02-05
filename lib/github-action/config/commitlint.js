"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitLintConfigGitHubAction = void 0;
const commitlint_1 = require("../../base/config/commitlint");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWl0bGludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9naXRodWItYWN0aW9uL2NvbmZpZy9jb21taXRsaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZEQUFvRTtBQUdwRTs7R0FFRztBQUNILE1BQWEsNEJBQTZCLFNBQVEsaUNBQW9CO0lBQ3BFLElBQXVCLGtCQUFrQjtRQUN2QyxPQUFPO1lBQ0wsYUFBYSxFQUFFO2dCQUNiLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLENBQUM7YUFDeEM7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBUkQsb0VBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21taXRMaW50Q29uZmlnQmFzZSB9IGZyb20gJy4uLy4uL2Jhc2UvY29uZmlnL2NvbW1pdGxpbnQnO1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJztcblxuLyoqXG4gKiBJbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IENvbW1pdExpbnQgY29uZmlndXJhdGlvbiBmb3IgdGhlIEdpdEh1YkFjdGlvbiBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgQ29tbWl0TGludENvbmZpZ0dpdEh1YkFjdGlvbiBleHRlbmRzIENvbW1pdExpbnRDb25maWdCYXNlIHtcbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2V0dGluZ3MoKTogU2V0dGluZ3Mge1xuICAgIHJldHVybiB7XG4gICAgICAnbGludC1zdGFnZWQnOiB7XG4gICAgICAgICcqKi8qLnt5bWwseWFtbH0nOiBbJ25wbSBydW4gcHJldHRpZXInXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuIl19
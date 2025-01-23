"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmConfigGitHubAction = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const npm_1 = require("../../base/config/npm");
const project_1 = require("../../base/project");
/**
 * Implementing all relevant NPM configuration for the GitHubAction project.
 */
class NpmConfigGitHubAction extends npm_1.NpmConfigBase {
    get additionalSettings() {
        return {
            files: ['action.yml', 'README.md'],
        };
    }
    get additionalIgnorePatterns() {
        return ['docs/'];
    }
    /**
     * Gets additional ignore patterns to be added to the project's ignore configuration.
     *
     * @returns A list of ignore patterns.
     */
    get additionalIgnorePrettierPatterns() {
        return ['/package-lock.json', '/package.json', '/API.md'];
    }
    registerConfig() {
        if (this.project instanceof project_1.BaseProject) {
            this.addSettings(this.additionalSettings);
            this.project.eslintConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
            this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePrettierPatterns);
            this.removeScriptsOnInit(this.removeScripts);
        }
    }
}
exports.NpmConfigGitHubAction = NpmConfigGitHubAction;
_a = JSII_RTTI_SYMBOL_1;
NpmConfigGitHubAction[_a] = { fqn: "@dxfrontier/projen-template-projects.NpmConfigGitHubAction", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2dpdGh1Yi1hY3Rpb24vY29uZmlnL25wbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLCtDQUFzRDtBQUN0RCxnREFBaUQ7QUFHakQ7O0dBRUc7QUFDSCxNQUFhLHFCQUFzQixTQUFRLG1CQUFhO0lBQ3RELElBQXVCLGtCQUFrQjtRQUN2QyxPQUFPO1lBQ0wsS0FBSyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQztTQUNuQyxDQUFDO0lBQ0osQ0FBQztJQUVELElBQXVCLHdCQUF3QjtRQUM3QyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFZLGdDQUFnQztRQUMxQyxPQUFPLENBQUMsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFZSxjQUFjO1FBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sWUFBWSxxQkFBVyxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztZQUN0RixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9DLENBQUM7SUFDSCxDQUFDOztBQTNCSCxzREE0QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOcG1Db25maWdCYXNlIH0gZnJvbSAnLi4vLi4vYmFzZS9jb25maWcvbnBtJztcbmltcG9ydCB7IEJhc2VQcm9qZWN0IH0gZnJvbSAnLi4vLi4vYmFzZS9wcm9qZWN0JztcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG4vKipcbiAqIEltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgTlBNIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBHaXRIdWJBY3Rpb24gcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIE5wbUNvbmZpZ0dpdEh1YkFjdGlvbiBleHRlbmRzIE5wbUNvbmZpZ0Jhc2Uge1xuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxTZXR0aW5ncygpOiBTZXR0aW5ncyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpbGVzOiBbJ2FjdGlvbi55bWwnLCAnUkVBRE1FLm1kJ10sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gWydkb2NzLyddO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYWRkaXRpb25hbCBpZ25vcmUgcGF0dGVybnMgdG8gYmUgYWRkZWQgdG8gdGhlIHByb2plY3QncyBpZ25vcmUgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMgQSBsaXN0IG9mIGlnbm9yZSBwYXR0ZXJucy5cbiAgICovXG4gIHByaXZhdGUgZ2V0IGFkZGl0aW9uYWxJZ25vcmVQcmV0dGllclBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gWycvcGFja2FnZS1sb2NrLmpzb24nLCAnL3BhY2thZ2UuanNvbicsICcvQVBJLm1kJ107XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcmVnaXN0ZXJDb25maWcoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucHJvamVjdCBpbnN0YW5jZW9mIEJhc2VQcm9qZWN0KSB7XG4gICAgICB0aGlzLmFkZFNldHRpbmdzKHRoaXMuYWRkaXRpb25hbFNldHRpbmdzKTtcbiAgICAgIHRoaXMucHJvamVjdC5lc2xpbnRDb25maWc/LmFkZElnbm9yZVBhdHRlcm5zKHRoaXMuYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKTtcbiAgICAgIHRoaXMucHJvamVjdC5wcmV0dGllckNvbmZpZz8uYWRkSWdub3JlUGF0dGVybnModGhpcy5hZGRpdGlvbmFsSWdub3JlUHJldHRpZXJQYXR0ZXJucyk7XG4gICAgICB0aGlzLnJlbW92ZVNjcmlwdHNPbkluaXQodGhpcy5yZW1vdmVTY3JpcHRzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
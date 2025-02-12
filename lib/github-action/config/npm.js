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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2dpdGh1Yi1hY3Rpb24vY29uZmlnL25wbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLCtDQUFzRDtBQUN0RCxnREFBaUQ7QUFHakQ7O0dBRUc7QUFDSCxNQUFhLHFCQUFzQixTQUFRLG1CQUFhO0lBQ3RELElBQXVCLGtCQUFrQjtRQUN2QyxPQUFPO1lBQ0wsS0FBSyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQztTQUNuQyxDQUFDO0lBQ0osQ0FBQztJQUVELElBQXVCLHdCQUF3QjtRQUM3QyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFZLGdDQUFnQztRQUMxQyxPQUFPLENBQUMsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFZSxjQUFjO1FBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sWUFBWSxxQkFBVyxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztZQUN0RixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9DLENBQUM7SUFDSCxDQUFDOztBQTNCSCxzREE0QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOcG1Db25maWdCYXNlIH0gZnJvbSAnLi4vLi4vYmFzZS9jb25maWcvbnBtJztcbmltcG9ydCB7IEJhc2VQcm9qZWN0IH0gZnJvbSAnLi4vLi4vYmFzZS9wcm9qZWN0JztcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcyc7XG5cbi8qKlxuICogSW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBOUE0gY29uZmlndXJhdGlvbiBmb3IgdGhlIEdpdEh1YkFjdGlvbiBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgTnBtQ29uZmlnR2l0SHViQWN0aW9uIGV4dGVuZHMgTnBtQ29uZmlnQmFzZSB7XG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbFNldHRpbmdzKCk6IFNldHRpbmdzIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmlsZXM6IFsnYWN0aW9uLnltbCcsICdSRUFETUUubWQnXSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsSWdub3JlUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJ2RvY3MvJ107XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhZGRpdGlvbmFsIGlnbm9yZSBwYXR0ZXJucyB0byBiZSBhZGRlZCB0byB0aGUgcHJvamVjdCdzIGlnbm9yZSBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGxpc3Qgb2YgaWdub3JlIHBhdHRlcm5zLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgYWRkaXRpb25hbElnbm9yZVByZXR0aWVyUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJy9wYWNrYWdlLWxvY2suanNvbicsICcvcGFja2FnZS5qc29uJywgJy9BUEkubWQnXTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSByZWdpc3RlckNvbmZpZygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcm9qZWN0IGluc3RhbmNlb2YgQmFzZVByb2plY3QpIHtcbiAgICAgIHRoaXMuYWRkU2V0dGluZ3ModGhpcy5hZGRpdGlvbmFsU2V0dGluZ3MpO1xuICAgICAgdGhpcy5wcm9qZWN0LmVzbGludENvbmZpZz8uYWRkSWdub3JlUGF0dGVybnModGhpcy5hZGRpdGlvbmFsSWdub3JlUGF0dGVybnMpO1xuICAgICAgdGhpcy5wcm9qZWN0LnByZXR0aWVyQ29uZmlnPy5hZGRJZ25vcmVQYXR0ZXJucyh0aGlzLmFkZGl0aW9uYWxJZ25vcmVQcmV0dGllclBhdHRlcm5zKTtcbiAgICAgIHRoaXMucmVtb3ZlU2NyaXB0c09uSW5pdCh0aGlzLnJlbW92ZVNjcmlwdHMpO1xuICAgIH1cbiAgfVxufVxuIl19
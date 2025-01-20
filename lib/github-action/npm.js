"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmConfigGitHubAction = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const npm_1 = require("../base/npm");
const project_1 = require("../base/project");
/**
 * Implementing all relevant NPM configuration for the GitHubAction project.
 */
class NpmConfigGitHubAction extends npm_1.NpmConfigBase {
    /**
     * Gets the additional settings to be added to the project's configuration.
     *
     * @returns A settings object to be merged into the project's settings.
     */
    get additionalSettings() {
        return {
            files: ['action.yml', 'README.md'],
        };
    }
    /**
     * Gets additional ignore patterns to be added to the project's ignore configuration.
     *
     * @returns A list of ignore patterns.
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dpdGh1Yi1hY3Rpb24vbnBtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscUNBQTRDO0FBQzVDLDZDQUE4QztBQUc5Qzs7R0FFRztBQUNILE1BQWEscUJBQXNCLFNBQVEsbUJBQWE7SUFDdEQ7Ozs7T0FJRztJQUNILElBQVksa0JBQWtCO1FBQzVCLE9BQU87WUFDTCxLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDO1NBQ25DLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQVksd0JBQXdCO1FBQ2xDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQVksZ0NBQWdDO1FBQzFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVlLGNBQWM7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxZQUFZLHFCQUFXLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1lBQ3RGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0MsQ0FBQztJQUNILENBQUM7O0FBckNILHNEQXNDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5wbUNvbmZpZ0Jhc2UgfSBmcm9tICcuLi9iYXNlL25wbSc7XG5pbXBvcnQgeyBCYXNlUHJvamVjdCB9IGZyb20gJy4uL2Jhc2UvcHJvamVjdCc7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4uL3R5cGVzJztcblxuLyoqXG4gKiBJbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IE5QTSBjb25maWd1cmF0aW9uIGZvciB0aGUgR2l0SHViQWN0aW9uIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBOcG1Db25maWdHaXRIdWJBY3Rpb24gZXh0ZW5kcyBOcG1Db25maWdCYXNlIHtcbiAgLyoqXG4gICAqIEdldHMgdGhlIGFkZGl0aW9uYWwgc2V0dGluZ3MgdG8gYmUgYWRkZWQgdG8gdGhlIHByb2plY3QncyBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIHNldHRpbmdzIG9iamVjdCB0byBiZSBtZXJnZWQgaW50byB0aGUgcHJvamVjdCdzIHNldHRpbmdzLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgYWRkaXRpb25hbFNldHRpbmdzKCk6IFNldHRpbmdzIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmlsZXM6IFsnYWN0aW9uLnltbCcsICdSRUFETUUubWQnXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYWRkaXRpb25hbCBpZ25vcmUgcGF0dGVybnMgdG8gYmUgYWRkZWQgdG8gdGhlIHByb2plY3QncyBpZ25vcmUgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMgQSBsaXN0IG9mIGlnbm9yZSBwYXR0ZXJucy5cbiAgICovXG4gIHByaXZhdGUgZ2V0IGFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFsnZG9jcy8nXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGFkZGl0aW9uYWwgaWdub3JlIHBhdHRlcm5zIHRvIGJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0J3MgaWdub3JlIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIEEgbGlzdCBvZiBpZ25vcmUgcGF0dGVybnMuXG4gICAqL1xuICBwcml2YXRlIGdldCBhZGRpdGlvbmFsSWdub3JlUHJldHRpZXJQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFsnL3BhY2thZ2UtbG9jay5qc29uJywgJy9wYWNrYWdlLmpzb24nLCAnL0FQSS5tZCddO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHJlZ2lzdGVyQ29uZmlnKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnByb2plY3QgaW5zdGFuY2VvZiBCYXNlUHJvamVjdCkge1xuICAgICAgdGhpcy5hZGRTZXR0aW5ncyh0aGlzLmFkZGl0aW9uYWxTZXR0aW5ncyk7XG4gICAgICB0aGlzLnByb2plY3QuZXNsaW50Q29uZmlnPy5hZGRJZ25vcmVQYXR0ZXJucyh0aGlzLmFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucyk7XG4gICAgICB0aGlzLnByb2plY3QucHJldHRpZXJDb25maWc/LmFkZElnbm9yZVBhdHRlcm5zKHRoaXMuYWRkaXRpb25hbElnbm9yZVByZXR0aWVyUGF0dGVybnMpO1xuICAgICAgdGhpcy5yZW1vdmVTY3JpcHRzT25Jbml0KHRoaXMucmVtb3ZlU2NyaXB0cyk7XG4gICAgfVxuICB9XG59XG4iXX0=
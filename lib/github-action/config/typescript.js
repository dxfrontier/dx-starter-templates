"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeScriptConfigGitHubAction = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const project_1 = require("../../base/project");
const typescript_1 = require("../../base/config/typescript");
/**
 * Implementing all relevant TypeScript configuration for the GitHubAction project.
 */
class TypeScriptConfigGitHubAction extends typescript_1.TypeScriptConfigBase {
    get additionalDevDependencies() {
        return [];
    }
    get additionalIgnorePatterns() {
        if (this.project instanceof project_1.BaseProject && !this.project.typescript) {
            return [];
        }
        return super.additionalIgnorePatterns;
    }
    /**
     * Gets the development dependencies to be removed from configuration.
     */
    get removeDevDependencies() {
        return ['typescript'];
    }
    /**
     * Removes the configuration module related config file.
     */
    removeConfigFile() {
        const filePath = Object.keys(this.configFile)[0];
        if (this.project instanceof project_1.BaseProject && !this.project.typescript) {
            this.project.tryRemoveFile(filePath);
        }
    }
    registerConfig() {
        super.registerConfig();
        this.removeConfigFile();
        if (this.project instanceof project_1.BaseProject) {
            this.project.npmConfig?.patchDevDependencyRemove(this.removeDevDependencies);
        }
    }
}
exports.TypeScriptConfigGitHubAction = TypeScriptConfigGitHubAction;
_a = JSII_RTTI_SYMBOL_1;
TypeScriptConfigGitHubAction[_a] = { fqn: "@dxfrontier/projen-template-projects.TypeScriptConfigGitHubAction", version: "0.5.4" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXNjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9naXRodWItYWN0aW9uL2NvbmZpZy90eXBlc2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZ0RBQWlEO0FBQ2pELDZEQUFvRTtBQUVwRTs7R0FFRztBQUNILE1BQWEsNEJBQTZCLFNBQVEsaUNBQW9CO0lBQ3BFLElBQXVCLHlCQUF5QjtRQUM5QyxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCxJQUF1Qix3QkFBd0I7UUFDN0MsSUFBSSxJQUFJLENBQUMsT0FBTyxZQUFZLHFCQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BFLE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQztRQUVELE9BQU8sS0FBSyxDQUFDLHdCQUF3QixDQUFDO0lBQ3hDLENBQUM7SUFFRDs7T0FFRztJQUNILElBQWMscUJBQXFCO1FBQ2pDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQ7O09BRUc7SUFDTyxnQkFBZ0I7UUFDeEIsTUFBTSxRQUFRLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxJQUFJLENBQUMsT0FBTyxZQUFZLHFCQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7SUFDSCxDQUFDO0lBRWUsY0FBYztRQUM1QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsT0FBTyxZQUFZLHFCQUFXLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUMvRSxDQUFDO0lBQ0gsQ0FBQzs7QUFwQ0gsb0VBcUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZVByb2plY3QgfSBmcm9tICcuLi8uLi9iYXNlL3Byb2plY3QnO1xuaW1wb3J0IHsgVHlwZVNjcmlwdENvbmZpZ0Jhc2UgfSBmcm9tICcuLi8uLi9iYXNlL2NvbmZpZy90eXBlc2NyaXB0JztcblxuLyoqXG4gKiBJbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IFR5cGVTY3JpcHQgY29uZmlndXJhdGlvbiBmb3IgdGhlIEdpdEh1YkFjdGlvbiBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgVHlwZVNjcmlwdENvbmZpZ0dpdEh1YkFjdGlvbiBleHRlbmRzIFR5cGVTY3JpcHRDb25maWdCYXNlIHtcbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsRGV2RGVwZW5kZW5jaWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgaWYgKHRoaXMucHJvamVjdCBpbnN0YW5jZW9mIEJhc2VQcm9qZWN0ICYmICF0aGlzLnByb2plY3QudHlwZXNjcmlwdCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlci5hZGRpdGlvbmFsSWdub3JlUGF0dGVybnM7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgZGV2ZWxvcG1lbnQgZGVwZW5kZW5jaWVzIHRvIGJlIHJlbW92ZWQgZnJvbSBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCByZW1vdmVEZXZEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJ3R5cGVzY3JpcHQnXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBjb25maWd1cmF0aW9uIG1vZHVsZSByZWxhdGVkIGNvbmZpZyBmaWxlLlxuICAgKi9cbiAgcHJvdGVjdGVkIHJlbW92ZUNvbmZpZ0ZpbGUoKTogdm9pZCB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZSlbMF07XG4gICAgaWYgKHRoaXMucHJvamVjdCBpbnN0YW5jZW9mIEJhc2VQcm9qZWN0ICYmICF0aGlzLnByb2plY3QudHlwZXNjcmlwdCkge1xuICAgICAgdGhpcy5wcm9qZWN0LnRyeVJlbW92ZUZpbGUoZmlsZVBhdGgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSByZWdpc3RlckNvbmZpZygpOiB2b2lkIHtcbiAgICBzdXBlci5yZWdpc3RlckNvbmZpZygpO1xuICAgIHRoaXMucmVtb3ZlQ29uZmlnRmlsZSgpO1xuICAgIGlmICh0aGlzLnByb2plY3QgaW5zdGFuY2VvZiBCYXNlUHJvamVjdCkge1xuICAgICAgdGhpcy5wcm9qZWN0Lm5wbUNvbmZpZz8ucGF0Y2hEZXZEZXBlbmRlbmN5UmVtb3ZlKHRoaXMucmVtb3ZlRGV2RGVwZW5kZW5jaWVzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
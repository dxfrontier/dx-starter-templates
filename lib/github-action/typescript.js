"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeScriptConfigGitHubAction = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const project_1 = require("../base/project");
const typescript_1 = require("../base/typescript");
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
TypeScriptConfigGitHubAction[_a] = { fqn: "@dxfrontier/projen-template-projects.TypeScriptConfigGitHubAction", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXNjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9naXRodWItYWN0aW9uL3R5cGVzY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2Q0FBOEM7QUFDOUMsbURBQTBEO0FBRTFEOztHQUVHO0FBQ0gsTUFBYSw0QkFBNkIsU0FBUSxpQ0FBb0I7SUFDcEUsSUFBdUIseUJBQXlCO1FBQzlDLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVELElBQXVCLHdCQUF3QjtRQUM3QyxJQUFJLElBQUksQ0FBQyxPQUFPLFlBQVkscUJBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEUsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDO1FBRUQsT0FBTyxLQUFLLENBQUMsd0JBQXdCLENBQUM7SUFDeEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBYyxxQkFBcUI7UUFDakMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7T0FFRztJQUNPLGdCQUFnQjtRQUN4QixNQUFNLFFBQVEsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLElBQUksQ0FBQyxPQUFPLFlBQVkscUJBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsQ0FBQztJQUNILENBQUM7SUFFZSxjQUFjO1FBQzVCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxPQUFPLFlBQVkscUJBQVcsRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLHdCQUF3QixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQy9FLENBQUM7SUFDSCxDQUFDOztBQXBDSCxvRUFxQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlUHJvamVjdCB9IGZyb20gJy4uL2Jhc2UvcHJvamVjdCc7XG5pbXBvcnQgeyBUeXBlU2NyaXB0Q29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UvdHlwZXNjcmlwdCc7XG5cbi8qKlxuICogSW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBUeXBlU2NyaXB0IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBHaXRIdWJBY3Rpb24gcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFR5cGVTY3JpcHRDb25maWdHaXRIdWJBY3Rpb24gZXh0ZW5kcyBUeXBlU2NyaXB0Q29uZmlnQmFzZSB7XG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbERldkRlcGVuZGVuY2llcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsSWdub3JlUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIGlmICh0aGlzLnByb2plY3QgaW5zdGFuY2VvZiBCYXNlUHJvamVjdCAmJiAhdGhpcy5wcm9qZWN0LnR5cGVzY3JpcHQpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXIuYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGRldmVsb3BtZW50IGRlcGVuZGVuY2llcyB0byBiZSByZW1vdmVkIGZyb20gY29uZmlndXJhdGlvbi5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgcmVtb3ZlRGV2RGVwZW5kZW5jaWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gWyd0eXBlc2NyaXB0J107XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgY29uZmlndXJhdGlvbiBtb2R1bGUgcmVsYXRlZCBjb25maWcgZmlsZS5cbiAgICovXG4gIHByb3RlY3RlZCByZW1vdmVDb25maWdGaWxlKCk6IHZvaWQge1xuICAgIGNvbnN0IGZpbGVQYXRoOiBzdHJpbmcgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ0ZpbGUpWzBdO1xuICAgIGlmICh0aGlzLnByb2plY3QgaW5zdGFuY2VvZiBCYXNlUHJvamVjdCAmJiAhdGhpcy5wcm9qZWN0LnR5cGVzY3JpcHQpIHtcbiAgICAgIHRoaXMucHJvamVjdC50cnlSZW1vdmVGaWxlKGZpbGVQYXRoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcmVnaXN0ZXJDb25maWcoKTogdm9pZCB7XG4gICAgc3VwZXIucmVnaXN0ZXJDb25maWcoKTtcbiAgICB0aGlzLnJlbW92ZUNvbmZpZ0ZpbGUoKTtcbiAgICBpZiAodGhpcy5wcm9qZWN0IGluc3RhbmNlb2YgQmFzZVByb2plY3QpIHtcbiAgICAgIHRoaXMucHJvamVjdC5ucG1Db25maWc/LnBhdGNoRGV2RGVwZW5kZW5jeVJlbW92ZSh0aGlzLnJlbW92ZURldkRlcGVuZGVuY2llcyk7XG4gICAgfVxuICB9XG59XG4iXX0=
"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeScriptConfigBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const utils_1 = require("../utils");
const config_1 = require("./config");
/**
 * Base class for implementing all relevant TypeScript configuration.
 *
 * This class acts as a base for handling TypeScript configuration within projects.
 */
class TypeScriptConfigBase extends config_1.Config {
    /**
     * Gets the additional development dependencies required for configuration.
     *
     * @returns A list of package names with version specifications.
     */
    get additionalDevDependencies() {
        return ['typescript@^5.7.3', '@types/node@^22.10.6', 'ts-node@^10.9.2'];
    }
    /**
     * Gets additional ignore patterns to be added to the project's ignore configuration.
     *
     * @returns A list of ignore patterns.
     */
    get additionalIgnorePatterns() {
        const filePath = Object.keys(this.configFile)[0];
        return [`/${filePath}`];
    }
    /**
     * Gets the configuration file content.
     *
     * @returns An object where the key is the filename and the value is an array of file lines.
     */
    get configFile() {
        return {
            'tsconfig.json': [],
        };
    }
    registerConfig() {
        if ((0, utils_1.isValidProject)(this.project)) {
            this.project.npmConfig?.addDevDependencies(this.additionalDevDependencies);
            this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
        }
    }
}
exports.TypeScriptConfigBase = TypeScriptConfigBase;
_a = JSII_RTTI_SYMBOL_1;
TypeScriptConfigBase[_a] = { fqn: "@dxfrontier/projen-template-projects.TypeScriptConfigBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXNjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL3R5cGVzY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxvQ0FBMEM7QUFDMUMscUNBQWtDO0FBRWxDOzs7O0dBSUc7QUFDSCxNQUFhLG9CQUFxQixTQUFRLGVBQU07SUFDOUM7Ozs7T0FJRztJQUNILElBQWMseUJBQXlCO1FBQ3JDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxzQkFBc0IsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyx3QkFBd0I7UUFDcEMsTUFBTSxRQUFRLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsT0FBTyxDQUFDLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsVUFBVTtRQUN0QixPQUFPO1lBQ0wsZUFBZSxFQUFFLEVBQUU7U0FDcEIsQ0FBQztJQUNKLENBQUM7SUFFZSxjQUFjO1FBQzVCLElBQUksSUFBQSxzQkFBYyxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUF3QixDQUFDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUM1RixJQUFJLENBQUMsT0FBd0IsQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDbEcsQ0FBQztJQUNILENBQUM7O0FBcENILG9EQXFDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2plY3RUeXBlcyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGlzVmFsaWRQcm9qZWN0IH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgVHlwZVNjcmlwdCBjb25maWd1cmF0aW9uLlxuICpcbiAqIFRoaXMgY2xhc3MgYWN0cyBhcyBhIGJhc2UgZm9yIGhhbmRsaW5nIFR5cGVTY3JpcHQgY29uZmlndXJhdGlvbiB3aXRoaW4gcHJvamVjdHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUeXBlU2NyaXB0Q29uZmlnQmFzZSBleHRlbmRzIENvbmZpZyB7XG4gIC8qKlxuICAgKiBHZXRzIHRoZSBhZGRpdGlvbmFsIGRldmVsb3BtZW50IGRlcGVuZGVuY2llcyByZXF1aXJlZCBmb3IgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMgQSBsaXN0IG9mIHBhY2thZ2UgbmFtZXMgd2l0aCB2ZXJzaW9uIHNwZWNpZmljYXRpb25zLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBhZGRpdGlvbmFsRGV2RGVwZW5kZW5jaWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gWyd0eXBlc2NyaXB0QF41LjcuMycsICdAdHlwZXMvbm9kZUBeMjIuMTAuNicsICd0cy1ub2RlQF4xMC45LjInXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGFkZGl0aW9uYWwgaWdub3JlIHBhdHRlcm5zIHRvIGJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0J3MgaWdub3JlIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIEEgbGlzdCBvZiBpZ25vcmUgcGF0dGVybnMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZSlbMF07XG4gICAgcmV0dXJuIFtgLyR7ZmlsZVBhdGh9YF07XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgY29uZmlndXJhdGlvbiBmaWxlIGNvbnRlbnQuXG4gICAqXG4gICAqIEByZXR1cm5zIEFuIG9iamVjdCB3aGVyZSB0aGUga2V5IGlzIHRoZSBmaWxlbmFtZSBhbmQgdGhlIHZhbHVlIGlzIGFuIGFycmF5IG9mIGZpbGUgbGluZXMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGNvbmZpZ0ZpbGUoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ3RzY29uZmlnLmpzb24nOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHJlZ2lzdGVyQ29uZmlnKCk6IHZvaWQge1xuICAgIGlmIChpc1ZhbGlkUHJvamVjdCh0aGlzLnByb2plY3QpKSB7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykubnBtQ29uZmlnPy5hZGREZXZEZXBlbmRlbmNpZXModGhpcy5hZGRpdGlvbmFsRGV2RGVwZW5kZW5jaWVzKTtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5wcmV0dGllckNvbmZpZz8uYWRkSWdub3JlUGF0dGVybnModGhpcy5hZGRpdGlvbmFsSWdub3JlUGF0dGVybnMpO1xuICAgIH1cbiAgfVxufVxuIl19
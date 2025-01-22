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
    get additionalDevDependencies() {
        return ['typescript@^5.7.3', '@types/node@^22.10.6', 'ts-node@^10.9.2'];
    }
    get additionalIgnorePatterns() {
        const filePath = Object.keys(this.configFile)[0];
        return [`/${filePath}`];
    }
    get configFile() {
        return {
            'tsconfig.json': {},
        };
    }
    /**
     * Retrieves the name to the TypeScript config file.
     *
     * @returns The name of the TypeScript config file.
     */
    get configFileName() {
        return Object.keys(this.configFile)[0];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXNjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL3R5cGVzY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxvQ0FBMEM7QUFDMUMscUNBQWtDO0FBRWxDOzs7O0dBSUc7QUFDSCxNQUFhLG9CQUFxQixTQUFRLGVBQU07SUFDOUMsSUFBdUIseUJBQXlCO1FBQzlDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxzQkFBc0IsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCxJQUF1Qix3QkFBd0I7UUFDN0MsTUFBTSxRQUFRLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsT0FBTyxDQUFDLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBdUIsVUFBVTtRQUMvQixPQUFPO1lBQ0wsZUFBZSxFQUFFLEVBQUU7U0FDcEIsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVlLGNBQWM7UUFDNUIsSUFBSSxJQUFBLHNCQUFjLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLE9BQXdCLENBQUMsU0FBUyxFQUFFLGtCQUFrQixDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQzVGLElBQUksQ0FBQyxPQUF3QixDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNsRyxDQUFDO0lBQ0gsQ0FBQzs7QUE5Qkgsb0RBK0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnRmlsZSwgUHJvamVjdFR5cGVzIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXNWYWxpZFByb2plY3QgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBUeXBlU2NyaXB0IGNvbmZpZ3VyYXRpb24uXG4gKlxuICogVGhpcyBjbGFzcyBhY3RzIGFzIGEgYmFzZSBmb3IgaGFuZGxpbmcgVHlwZVNjcmlwdCBjb25maWd1cmF0aW9uIHdpdGhpbiBwcm9qZWN0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIFR5cGVTY3JpcHRDb25maWdCYXNlIGV4dGVuZHMgQ29uZmlnIHtcbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsRGV2RGVwZW5kZW5jaWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gWyd0eXBlc2NyaXB0QF41LjcuMycsICdAdHlwZXMvbm9kZUBeMjIuMTAuNicsICd0cy1ub2RlQF4xMC45LjInXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlKVswXTtcbiAgICByZXR1cm4gW2AvJHtmaWxlUGF0aH1gXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgY29uZmlnRmlsZSgpOiBDb25maWdGaWxlIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ3RzY29uZmlnLmpzb24nOiB7fSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgbmFtZSB0byB0aGUgVHlwZVNjcmlwdCBjb25maWcgZmlsZS5cbiAgICpcbiAgICogQHJldHVybnMgVGhlIG5hbWUgb2YgdGhlIFR5cGVTY3JpcHQgY29uZmlnIGZpbGUuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGNvbmZpZ0ZpbGVOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZSlbMF07XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcmVnaXN0ZXJDb25maWcoKTogdm9pZCB7XG4gICAgaWYgKGlzVmFsaWRQcm9qZWN0KHRoaXMucHJvamVjdCkpIHtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5ucG1Db25maWc/LmFkZERldkRlcGVuZGVuY2llcyh0aGlzLmFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMpO1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLnByZXR0aWVyQ29uZmlnPy5hZGRJZ25vcmVQYXR0ZXJucyh0aGlzLmFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucyk7XG4gICAgfVxuICB9XG59XG4iXX0=
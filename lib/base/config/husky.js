"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HuskyConfigBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const config_1 = require("../config");
const utils_1 = require("../../utils");
/**
 * Base class for implementing all relevant Husky configuration.
 *
 * This class acts as a base for handling Husky configuration within projects.
 */
class HuskyConfigBase extends config_1.Config {
    get additionalDevDependencies() {
        return ['husky@^9.1.7'];
    }
    get additionalScripts() {
        return {
            prepare: 'husky || true',
        };
    }
    get additionalIgnorePatterns() {
        const patterns = [];
        for (const filePath in this.configFile) {
            patterns.push(`/${filePath}`);
        }
        return patterns;
    }
    get configFile() {
        return {
            '.husky/commit-msg': ['npx --no-install commitlint --edit "$1"'],
            '.husky/pre-commit': ['npx lint-staged'],
        };
    }
    registerConfig() {
        if ((0, utils_1.isValidProject)(this.project)) {
            this.project.npmConfig?.addDevDependencies(this.additionalDevDependencies);
            this.project.npmConfig?.addScripts(this.additionalScripts);
            this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
        }
    }
    applyConfig() {
        for (const filePath in this.configFile) {
            new projen_1.TextFile(this.project, filePath, {
                lines: this.configFile[filePath],
            });
        }
    }
}
exports.HuskyConfigBase = HuskyConfigBase;
_a = JSII_RTTI_SYMBOL_1;
HuskyConfigBase[_a] = { fqn: "@dxfrontier/projen-template-projects.HuskyConfigBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVza3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYmFzZS9jb25maWcvaHVza3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBa0M7QUFDbEMsc0NBQW1DO0FBQ25DLHVDQUE2QztBQUk3Qzs7OztHQUlHO0FBQ0gsTUFBYSxlQUFnQixTQUFRLGVBQU07SUFDekMsSUFBdUIseUJBQXlCO1FBQzlDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBdUIsaUJBQWlCO1FBQ3RDLE9BQU87WUFDTCxPQUFPLEVBQUUsZUFBZTtTQUN6QixDQUFDO0lBQ0osQ0FBQztJQUVELElBQXVCLHdCQUF3QjtRQUM3QyxNQUFNLFFBQVEsR0FBYSxFQUFFLENBQUM7UUFDOUIsS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDdkMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxJQUF1QixVQUFVO1FBQy9CLE9BQU87WUFDTCxtQkFBbUIsRUFBRSxDQUFDLHlDQUF5QyxDQUFDO1lBQ2hFLG1CQUFtQixFQUFFLENBQUMsaUJBQWlCLENBQUM7U0FDekMsQ0FBQztJQUNKLENBQUM7SUFFZSxjQUFjO1FBQzVCLElBQUksSUFBQSxzQkFBYyxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUF3QixDQUFDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUM1RixJQUFJLENBQUMsT0FBd0IsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxPQUF3QixDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNsRyxDQUFDO0lBQ0gsQ0FBQztJQUVlLFdBQVc7UUFDekIsS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDdkMsSUFBSSxpQkFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFO2dCQUNuQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQWE7YUFDN0MsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7O0FBeENILDBDQXlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHRGaWxlIH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBpc1ZhbGlkUHJvamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IFByb2plY3RUeXBlcyB9IGZyb20gJy4uLy4uL3R5cGVzL3Byb2plY3QnO1xuaW1wb3J0IHsgQ29uZmlnRmlsZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IEh1c2t5IGNvbmZpZ3VyYXRpb24uXG4gKlxuICogVGhpcyBjbGFzcyBhY3RzIGFzIGEgYmFzZSBmb3IgaGFuZGxpbmcgSHVza3kgY29uZmlndXJhdGlvbiB3aXRoaW4gcHJvamVjdHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBIdXNreUNvbmZpZ0Jhc2UgZXh0ZW5kcyBDb25maWcge1xuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJ2h1c2t5QF45LjEuNyddO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2NyaXB0cygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJlcGFyZTogJ2h1c2t5IHx8IHRydWUnLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgcGF0dGVybnM6IHN0cmluZ1tdID0gW107XG4gICAgZm9yIChjb25zdCBmaWxlUGF0aCBpbiB0aGlzLmNvbmZpZ0ZpbGUpIHtcbiAgICAgIHBhdHRlcm5zLnB1c2goYC8ke2ZpbGVQYXRofWApO1xuICAgIH1cbiAgICByZXR1cm4gcGF0dGVybnM7XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGNvbmZpZ0ZpbGUoKTogQ29uZmlnRmlsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuaHVza3kvY29tbWl0LW1zZyc6IFsnbnB4IC0tbm8taW5zdGFsbCBjb21taXRsaW50IC0tZWRpdCBcIiQxXCInXSxcbiAgICAgICcuaHVza3kvcHJlLWNvbW1pdCc6IFsnbnB4IGxpbnQtc3RhZ2VkJ10sXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSByZWdpc3RlckNvbmZpZygpOiB2b2lkIHtcbiAgICBpZiAoaXNWYWxpZFByb2plY3QodGhpcy5wcm9qZWN0KSkge1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLm5wbUNvbmZpZz8uYWRkRGV2RGVwZW5kZW5jaWVzKHRoaXMuYWRkaXRpb25hbERldkRlcGVuZGVuY2llcyk7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykubnBtQ29uZmlnPy5hZGRTY3JpcHRzKHRoaXMuYWRkaXRpb25hbFNjcmlwdHMpO1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLnByZXR0aWVyQ29uZmlnPy5hZGRJZ25vcmVQYXR0ZXJucyh0aGlzLmFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIGFwcGx5Q29uZmlnKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgZmlsZVBhdGggaW4gdGhpcy5jb25maWdGaWxlKSB7XG4gICAgICBuZXcgVGV4dEZpbGUodGhpcy5wcm9qZWN0LCBmaWxlUGF0aCwge1xuICAgICAgICBsaW5lczogdGhpcy5jb25maWdGaWxlW2ZpbGVQYXRoXSBhcyBzdHJpbmdbXSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19
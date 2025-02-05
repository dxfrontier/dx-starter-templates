"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HuskyConfigJsii = void 0;
const base_1 = require("../../base");
/**
 * Implementing all relevant Husky configuration for the Jsii project.
 */
class HuskyConfigJsii extends base_1.HuskyConfigBase {
    get configFile() {
        return {
            ...super.configFile,
            '.husky/pre-push': [
                'npx projen build',
                '# This will restore staged the modified files by running `npx projen`',
                'git checkout -- cliff.toml package.json package-lock.json',
            ],
        };
    }
}
exports.HuskyConfigJsii = HuskyConfigJsii;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVza3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvanNpaS9jb25maWcvaHVza3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQTZDO0FBRzdDOztHQUVHO0FBQ0gsTUFBYSxlQUFnQixTQUFRLHNCQUFlO0lBQ2xELElBQXVCLFVBQVU7UUFDL0IsT0FBTztZQUNMLEdBQUcsS0FBSyxDQUFDLFVBQVU7WUFDbkIsaUJBQWlCLEVBQUU7Z0JBQ2pCLGtCQUFrQjtnQkFDbEIsdUVBQXVFO2dCQUN2RSwyREFBMkQ7YUFDNUQ7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBWEQsMENBV0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdXNreUNvbmZpZ0Jhc2UgfSBmcm9tICcuLi8uLi9iYXNlJztcbmltcG9ydCB7IENvbmZpZ0ZpbGUgfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJztcblxuLyoqXG4gKiBJbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IEh1c2t5IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBKc2lpIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBIdXNreUNvbmZpZ0pzaWkgZXh0ZW5kcyBIdXNreUNvbmZpZ0Jhc2Uge1xuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGNvbmZpZ0ZpbGUoKTogQ29uZmlnRmlsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN1cGVyLmNvbmZpZ0ZpbGUsXG4gICAgICAnLmh1c2t5L3ByZS1wdXNoJzogW1xuICAgICAgICAnbnB4IHByb2plbiBidWlsZCcsXG4gICAgICAgICcjIFRoaXMgd2lsbCByZXN0b3JlIHN0YWdlZCB0aGUgbW9kaWZpZWQgZmlsZXMgYnkgcnVubmluZyBgbnB4IHByb2plbmAnLFxuICAgICAgICAnZ2l0IGNoZWNrb3V0IC0tIGNsaWZmLnRvbWwgcGFja2FnZS5qc29uIHBhY2thZ2UtbG9jay5qc29uJyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19
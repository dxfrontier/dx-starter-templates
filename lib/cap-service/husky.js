"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HuskyConfigCapService = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../base");
/**
 * Implementing all relevant Husky configuration for the CapService project.
 */
class HuskyConfigCapService extends base_1.HuskyConfigBase {
    get configFile() {
        return {
            ...super.configFile,
            '.husky/pre-push': ['npm run build'],
        };
    }
}
exports.HuskyConfigCapService = HuskyConfigCapService;
_a = JSII_RTTI_SYMBOL_1;
HuskyConfigCapService[_a] = { fqn: "@dxfrontier/projen-template-projects.HuskyConfigCapService", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVza3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2FwLXNlcnZpY2UvaHVza3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrQ0FBMEM7QUFFMUM7O0dBRUc7QUFDSCxNQUFhLHFCQUFzQixTQUFRLHNCQUFlO0lBQ3hELElBQXVCLFVBQVU7UUFDL0IsT0FBTztZQUNMLEdBQUcsS0FBSyxDQUFDLFVBQVU7WUFDbkIsaUJBQWlCLEVBQUUsQ0FBQyxlQUFlLENBQUM7U0FDckMsQ0FBQztJQUNKLENBQUM7O0FBTkgsc0RBT0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdXNreUNvbmZpZ0Jhc2UgfSBmcm9tICcuLi9iYXNlJztcblxuLyoqXG4gKiBJbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IEh1c2t5IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBDYXBTZXJ2aWNlIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBIdXNreUNvbmZpZ0NhcFNlcnZpY2UgZXh0ZW5kcyBIdXNreUNvbmZpZ0Jhc2Uge1xuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGNvbmZpZ0ZpbGUoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3VwZXIuY29uZmlnRmlsZSxcbiAgICAgICcuaHVza3kvcHJlLXB1c2gnOiBbJ25wbSBydW4gYnVpbGQnXSxcbiAgICB9O1xuICB9XG59XG4iXX0=
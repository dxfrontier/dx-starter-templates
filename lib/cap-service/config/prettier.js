"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrettierConfigCapService = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const prettier_1 = require("../../base/config/prettier");
/**
 * Implementing all relevant Prettier configuration for the CapService project.
 */
class PrettierConfigCapService extends prettier_1.PrettierConfigBase {
    get additionalScripts() {
        return {
            ...super.additionalScripts,
            'prettier:cds': 'format-cds',
        };
    }
}
exports.PrettierConfigCapService = PrettierConfigCapService;
_a = JSII_RTTI_SYMBOL_1;
PrettierConfigCapService[_a] = { fqn: "@dxfrontier/projen-template-projects.PrettierConfigCapService", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHRpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY2FwLXNlcnZpY2UvY29uZmlnL3ByZXR0aWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseURBQWdFO0FBRWhFOztHQUVHO0FBQ0gsTUFBYSx3QkFBeUIsU0FBUSw2QkFBa0I7SUFDOUQsSUFBdUIsaUJBQWlCO1FBQ3RDLE9BQU87WUFDTCxHQUFHLEtBQUssQ0FBQyxpQkFBaUI7WUFDMUIsY0FBYyxFQUFFLFlBQVk7U0FDN0IsQ0FBQztJQUNKLENBQUM7O0FBTkgsNERBT0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmV0dGllckNvbmZpZ0Jhc2UgfSBmcm9tICcuLi8uLi9iYXNlL2NvbmZpZy9wcmV0dGllcic7XG5cbi8qKlxuICogSW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBQcmV0dGllciBjb25maWd1cmF0aW9uIGZvciB0aGUgQ2FwU2VydmljZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgUHJldHRpZXJDb25maWdDYXBTZXJ2aWNlIGV4dGVuZHMgUHJldHRpZXJDb25maWdCYXNlIHtcbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2NyaXB0cygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3VwZXIuYWRkaXRpb25hbFNjcmlwdHMsXG4gICAgICAncHJldHRpZXI6Y2RzJzogJ2Zvcm1hdC1jZHMnLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
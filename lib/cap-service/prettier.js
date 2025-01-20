"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrettierConfigCapService = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const prettier_1 = require("../base/prettier");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHRpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2FwLXNlcnZpY2UvcHJldHRpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwrQ0FBc0Q7QUFFdEQ7O0dBRUc7QUFDSCxNQUFhLHdCQUF5QixTQUFRLDZCQUFrQjtJQUM5RCxJQUFjLGlCQUFpQjtRQUM3QixPQUFPO1lBQ0wsR0FBRyxLQUFLLENBQUMsaUJBQWlCO1lBQzFCLGNBQWMsRUFBRSxZQUFZO1NBQzdCLENBQUM7SUFDSixDQUFDOztBQU5ILDREQU9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJldHRpZXJDb25maWdCYXNlIH0gZnJvbSAnLi4vYmFzZS9wcmV0dGllcic7XG5cbi8qKlxuICogSW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBQcmV0dGllciBjb25maWd1cmF0aW9uIGZvciB0aGUgQ2FwU2VydmljZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgUHJldHRpZXJDb25maWdDYXBTZXJ2aWNlIGV4dGVuZHMgUHJldHRpZXJDb25maWdCYXNlIHtcbiAgcHJvdGVjdGVkIGdldCBhZGRpdGlvbmFsU2NyaXB0cygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3VwZXIuYWRkaXRpb25hbFNjcmlwdHMsXG4gICAgICAncHJldHRpZXI6Y2RzJzogJ2Zvcm1hdC1jZHMnLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
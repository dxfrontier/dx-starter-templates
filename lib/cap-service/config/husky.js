"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HuskyConfigCapService = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../../base");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVza3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY2FwLXNlcnZpY2UvY29uZmlnL2h1c2t5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscUNBQTZDO0FBRzdDOztHQUVHO0FBQ0gsTUFBYSxxQkFBc0IsU0FBUSxzQkFBZTtJQUN4RCxJQUF1QixVQUFVO1FBQy9CLE9BQU87WUFDTCxHQUFHLEtBQUssQ0FBQyxVQUFVO1lBQ25CLGlCQUFpQixFQUFFLENBQUMsZUFBZSxDQUFDO1NBQ3JDLENBQUM7SUFDSixDQUFDOztBQU5ILHNEQU9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHVza3lDb25maWdCYXNlIH0gZnJvbSAnLi4vLi4vYmFzZSc7XG5pbXBvcnQgeyBDb25maWdGaWxlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG4vKipcbiAqIEltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgSHVza3kgY29uZmlndXJhdGlvbiBmb3IgdGhlIENhcFNlcnZpY2UgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIEh1c2t5Q29uZmlnQ2FwU2VydmljZSBleHRlbmRzIEh1c2t5Q29uZmlnQmFzZSB7XG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgY29uZmlnRmlsZSgpOiBDb25maWdGaWxlIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3VwZXIuY29uZmlnRmlsZSxcbiAgICAgICcuaHVza3kvcHJlLXB1c2gnOiBbJ25wbSBydW4gYnVpbGQnXSxcbiAgICB9O1xuICB9XG59XG4iXX0=
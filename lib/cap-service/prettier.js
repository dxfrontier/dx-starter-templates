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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHRpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2FwLXNlcnZpY2UvcHJldHRpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwrQ0FBc0Q7QUFFdEQ7O0dBRUc7QUFDSCxNQUFhLHdCQUF5QixTQUFRLDZCQUFrQjtJQUM5RCxJQUF1QixpQkFBaUI7UUFDdEMsT0FBTztZQUNMLEdBQUcsS0FBSyxDQUFDLGlCQUFpQjtZQUMxQixjQUFjLEVBQUUsWUFBWTtTQUM3QixDQUFDO0lBQ0osQ0FBQzs7QUFOSCw0REFPQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByZXR0aWVyQ29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UvcHJldHRpZXInO1xuXG4vKipcbiAqIEltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgUHJldHRpZXIgY29uZmlndXJhdGlvbiBmb3IgdGhlIENhcFNlcnZpY2UgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFByZXR0aWVyQ29uZmlnQ2FwU2VydmljZSBleHRlbmRzIFByZXR0aWVyQ29uZmlnQmFzZSB7XG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbFNjcmlwdHMoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN1cGVyLmFkZGl0aW9uYWxTY3JpcHRzLFxuICAgICAgJ3ByZXR0aWVyOmNkcyc6ICdmb3JtYXQtY2RzJyxcbiAgICB9O1xuICB9XG59XG4iXX0=
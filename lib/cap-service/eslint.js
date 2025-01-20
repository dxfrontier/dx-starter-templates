"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EsLintConfigCapService = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../base");
/**
 * Implementing all relevant EsLint configuration for the CapService project.
 */
class EsLintConfigCapService extends base_1.EsLintConfigBase {
    get standardIgnorePatterns() {
        return ['test/', 'dist/', 'gen/', '@cds-models', 'default-env.js', '@dispatcher'];
    }
}
exports.EsLintConfigCapService = EsLintConfigCapService;
_a = JSII_RTTI_SYMBOL_1;
EsLintConfigCapService[_a] = { fqn: "@dxfrontier/projen-template-projects.EsLintConfigCapService", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNsaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NhcC1zZXJ2aWNlL2VzbGludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtDQUEyQztBQUUzQzs7R0FFRztBQUNILE1BQWEsc0JBQXVCLFNBQVEsdUJBQWdCO0lBQzFELElBQWMsc0JBQXNCO1FBQ2xDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDcEYsQ0FBQzs7QUFISCx3REFJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVzTGludENvbmZpZ0Jhc2UgfSBmcm9tICcuLi9iYXNlJztcblxuLyoqXG4gKiBJbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IEVzTGludCBjb25maWd1cmF0aW9uIGZvciB0aGUgQ2FwU2VydmljZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgRXNMaW50Q29uZmlnQ2FwU2VydmljZSBleHRlbmRzIEVzTGludENvbmZpZ0Jhc2Uge1xuICBwcm90ZWN0ZWQgZ2V0IHN0YW5kYXJkSWdub3JlUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJ3Rlc3QvJywgJ2Rpc3QvJywgJ2dlbi8nLCAnQGNkcy1tb2RlbHMnLCAnZGVmYXVsdC1lbnYuanMnLCAnQGRpc3BhdGNoZXInXTtcbiAgfVxufVxuIl19
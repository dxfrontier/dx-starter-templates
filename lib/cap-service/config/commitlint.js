"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitLintConfigCapService = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../../base");
/**
 * Implementing all relevant CommitLint configuration for the CapService project.
 */
class CommitLintConfigCapService extends base_1.CommitLintConfigBase {
    get additionalSettings() {
        return {
            'lint-staged': {
                '**/*.{ts,tsx}': ['npm run eslint', 'npm run prettier', 'npm run prettier:cds'],
            },
        };
    }
}
exports.CommitLintConfigCapService = CommitLintConfigCapService;
_a = JSII_RTTI_SYMBOL_1;
CommitLintConfigCapService[_a] = { fqn: "@dxfrontier/projen-template-projects.CommitLintConfigCapService", version: "0.5.4" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWl0bGludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXAtc2VydmljZS9jb25maWcvY29tbWl0bGludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUFrRDtBQUdsRDs7R0FFRztBQUNILE1BQWEsMEJBQTJCLFNBQVEsMkJBQW9CO0lBQ2xFLElBQXVCLGtCQUFrQjtRQUN2QyxPQUFPO1lBQ0wsYUFBYSxFQUFFO2dCQUNiLGVBQWUsRUFBRSxDQUFDLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLHNCQUFzQixDQUFDO2FBQ2hGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0FBUEgsZ0VBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21taXRMaW50Q29uZmlnQmFzZSB9IGZyb20gJy4uLy4uL2Jhc2UnO1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJztcblxuLyoqXG4gKiBJbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IENvbW1pdExpbnQgY29uZmlndXJhdGlvbiBmb3IgdGhlIENhcFNlcnZpY2UgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbW1pdExpbnRDb25maWdDYXBTZXJ2aWNlIGV4dGVuZHMgQ29tbWl0TGludENvbmZpZ0Jhc2Uge1xuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxTZXR0aW5ncygpOiBTZXR0aW5ncyB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdsaW50LXN0YWdlZCc6IHtcbiAgICAgICAgJyoqLyoue3RzLHRzeH0nOiBbJ25wbSBydW4gZXNsaW50JywgJ25wbSBydW4gcHJldHRpZXInLCAnbnBtIHJ1biBwcmV0dGllcjpjZHMnXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuIl19
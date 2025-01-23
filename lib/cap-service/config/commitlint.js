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
CommitLintConfigCapService[_a] = { fqn: "@dxfrontier/projen-template-projects.CommitLintConfigCapService", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWl0bGludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXAtc2VydmljZS9jb25maWcvY29tbWl0bGludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUFrRDtBQUdsRDs7R0FFRztBQUNILE1BQWEsMEJBQTJCLFNBQVEsMkJBQW9CO0lBQ2xFLElBQXVCLGtCQUFrQjtRQUN2QyxPQUFPO1lBQ0wsYUFBYSxFQUFFO2dCQUNiLGVBQWUsRUFBRSxDQUFDLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLHNCQUFzQixDQUFDO2FBQ2hGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0FBUEgsZ0VBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21taXRMaW50Q29uZmlnQmFzZSB9IGZyb20gJy4uLy4uL2Jhc2UnO1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbi8qKlxuICogSW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBDb21taXRMaW50IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBDYXBTZXJ2aWNlIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb21taXRMaW50Q29uZmlnQ2FwU2VydmljZSBleHRlbmRzIENvbW1pdExpbnRDb25maWdCYXNlIHtcbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2V0dGluZ3MoKTogU2V0dGluZ3Mge1xuICAgIHJldHVybiB7XG4gICAgICAnbGludC1zdGFnZWQnOiB7XG4gICAgICAgICcqKi8qLnt0cyx0c3h9JzogWyducG0gcnVuIGVzbGludCcsICducG0gcnVuIHByZXR0aWVyJywgJ25wbSBydW4gcHJldHRpZXI6Y2RzJ10sXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
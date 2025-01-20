"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitLintConfigCapService = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../base");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWl0bGludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYXAtc2VydmljZS9jb21taXRsaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQStDO0FBRy9DOztHQUVHO0FBQ0gsTUFBYSwwQkFBMkIsU0FBUSwyQkFBb0I7SUFDbEUsSUFBYyxrQkFBa0I7UUFDOUIsT0FBTztZQUNMLGFBQWEsRUFBRTtnQkFDYixlQUFlLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0IsQ0FBQzthQUNoRjtTQUNGLENBQUM7SUFDSixDQUFDOztBQVBILGdFQVFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWl0TGludENvbmZpZ0Jhc2UgfSBmcm9tICcuLi9iYXNlJztcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vKipcbiAqIEltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgQ29tbWl0TGludCBjb25maWd1cmF0aW9uIGZvciB0aGUgQ2FwU2VydmljZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgQ29tbWl0TGludENvbmZpZ0NhcFNlcnZpY2UgZXh0ZW5kcyBDb21taXRMaW50Q29uZmlnQmFzZSB7XG4gIHByb3RlY3RlZCBnZXQgYWRkaXRpb25hbFNldHRpbmdzKCk6IFNldHRpbmdzIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2xpbnQtc3RhZ2VkJzoge1xuICAgICAgICAnKiovKi57dHMsdHN4fSc6IFsnbnBtIHJ1biBlc2xpbnQnLCAnbnBtIHJ1biBwcmV0dGllcicsICducG0gcnVuIHByZXR0aWVyOmNkcyddLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG4iXX0=
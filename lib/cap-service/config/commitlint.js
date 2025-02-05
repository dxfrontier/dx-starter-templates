"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitLintConfigCapService = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWl0bGludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXAtc2VydmljZS9jb25maWcvY29tbWl0bGludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBa0Q7QUFHbEQ7O0dBRUc7QUFDSCxNQUFhLDBCQUEyQixTQUFRLDJCQUFvQjtJQUNsRSxJQUF1QixrQkFBa0I7UUFDdkMsT0FBTztZQUNMLGFBQWEsRUFBRTtnQkFDYixlQUFlLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0IsQ0FBQzthQUNoRjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFSRCxnRUFRQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1pdExpbnRDb25maWdCYXNlIH0gZnJvbSAnLi4vLi4vYmFzZSc7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnO1xuXG4vKipcbiAqIEltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgQ29tbWl0TGludCBjb25maWd1cmF0aW9uIGZvciB0aGUgQ2FwU2VydmljZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgQ29tbWl0TGludENvbmZpZ0NhcFNlcnZpY2UgZXh0ZW5kcyBDb21taXRMaW50Q29uZmlnQmFzZSB7XG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbFNldHRpbmdzKCk6IFNldHRpbmdzIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2xpbnQtc3RhZ2VkJzoge1xuICAgICAgICAnKiovKi57dHMsdHN4fSc6IFsnbnBtIHJ1biBlc2xpbnQnLCAnbnBtIHJ1biBwcmV0dGllcicsICducG0gcnVuIHByZXR0aWVyOmNkcyddLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG4iXX0=
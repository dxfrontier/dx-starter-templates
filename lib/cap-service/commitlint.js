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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWl0bGludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYXAtc2VydmljZS9jb21taXRsaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQStDO0FBRy9DOztHQUVHO0FBQ0gsTUFBYSwwQkFBMkIsU0FBUSwyQkFBb0I7SUFDbEUsSUFBdUIsa0JBQWtCO1FBQ3ZDLE9BQU87WUFDTCxhQUFhLEVBQUU7Z0JBQ2IsZUFBZSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsc0JBQXNCLENBQUM7YUFDaEY7U0FDRixDQUFDO0lBQ0osQ0FBQzs7QUFQSCxnRUFRQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1pdExpbnRDb25maWdCYXNlIH0gZnJvbSAnLi4vYmFzZSc7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4uL3R5cGVzJztcblxuLyoqXG4gKiBJbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IENvbW1pdExpbnQgY29uZmlndXJhdGlvbiBmb3IgdGhlIENhcFNlcnZpY2UgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbW1pdExpbnRDb25maWdDYXBTZXJ2aWNlIGV4dGVuZHMgQ29tbWl0TGludENvbmZpZ0Jhc2Uge1xuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxTZXR0aW5ncygpOiBTZXR0aW5ncyB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdsaW50LXN0YWdlZCc6IHtcbiAgICAgICAgJyoqLyoue3RzLHRzeH0nOiBbJ25wbSBydW4gZXNsaW50JywgJ25wbSBydW4gcHJldHRpZXInLCAnbnBtIHJ1biBwcmV0dGllcjpjZHMnXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuIl19
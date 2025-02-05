"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EsLintConfigCapService = void 0;
const base_1 = require("../../base");
/**
 * Implementing all relevant EsLint configuration for the CapService project.
 */
class EsLintConfigCapService extends base_1.EsLintConfigBase {
    get standardIgnorePatterns() {
        return ['test/', 'dist/', 'gen/', '@cds-models', 'default-env.js', '@dispatcher'];
    }
}
exports.EsLintConfigCapService = EsLintConfigCapService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNsaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NhcC1zZXJ2aWNlL2NvbmZpZy9lc2xpbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQThDO0FBRTlDOztHQUVHO0FBQ0gsTUFBYSxzQkFBdUIsU0FBUSx1QkFBZ0I7SUFDMUQsSUFBdUIsc0JBQXNCO1FBQzNDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDcEYsQ0FBQztDQUNGO0FBSkQsd0RBSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFc0xpbnRDb25maWdCYXNlIH0gZnJvbSAnLi4vLi4vYmFzZSc7XG5cbi8qKlxuICogSW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBFc0xpbnQgY29uZmlndXJhdGlvbiBmb3IgdGhlIENhcFNlcnZpY2UgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIEVzTGludENvbmZpZ0NhcFNlcnZpY2UgZXh0ZW5kcyBFc0xpbnRDb25maWdCYXNlIHtcbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBzdGFuZGFyZElnbm9yZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gWyd0ZXN0LycsICdkaXN0LycsICdnZW4vJywgJ0BjZHMtbW9kZWxzJywgJ2RlZmF1bHQtZW52LmpzJywgJ0BkaXNwYXRjaGVyJ107XG4gIH1cbn1cbiJdfQ==
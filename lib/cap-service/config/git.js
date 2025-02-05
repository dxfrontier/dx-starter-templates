"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitConfigCapService = void 0;
const base_1 = require("../../base");
/**
 * Implementing all relevant Git configuration for the CapService project.
 */
class GitConfigCapService extends base_1.GitConfigBase {
    get standardIgnorePatterns() {
        return ['gen', 'mta_archives', '*.mtar', '*.mta', 'resources', '@cds-models', '*.bak', 'default-*.json'];
    }
}
exports.GitConfigCapService = GitConfigCapService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NhcC1zZXJ2aWNlL2NvbmZpZy9naXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQTJDO0FBRTNDOztHQUVHO0FBQ0gsTUFBYSxtQkFBb0IsU0FBUSxvQkFBYTtJQUNwRCxJQUF1QixzQkFBc0I7UUFDM0MsT0FBTyxDQUFDLEtBQUssRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzNHLENBQUM7Q0FDRjtBQUpELGtEQUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2l0Q29uZmlnQmFzZSB9IGZyb20gJy4uLy4uL2Jhc2UnO1xuXG4vKipcbiAqIEltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgR2l0IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBDYXBTZXJ2aWNlIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBHaXRDb25maWdDYXBTZXJ2aWNlIGV4dGVuZHMgR2l0Q29uZmlnQmFzZSB7XG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgc3RhbmRhcmRJZ25vcmVQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFsnZ2VuJywgJ210YV9hcmNoaXZlcycsICcqLm10YXInLCAnKi5tdGEnLCAncmVzb3VyY2VzJywgJ0BjZHMtbW9kZWxzJywgJyouYmFrJywgJ2RlZmF1bHQtKi5qc29uJ107XG4gIH1cbn1cbiJdfQ==
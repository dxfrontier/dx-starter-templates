"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitLintConfigGitHubAction = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const commitlint_1 = require("../../base/config/commitlint");
/**
 * Implementing all relevant CommitLint configuration for the GitHubAction project.
 */
class CommitLintConfigGitHubAction extends commitlint_1.CommitLintConfigBase {
    get additionalSettings() {
        return {
            'lint-staged': {
                '**/*.{yml,yaml}': ['npm run prettier'],
            },
        };
    }
}
exports.CommitLintConfigGitHubAction = CommitLintConfigGitHubAction;
_a = JSII_RTTI_SYMBOL_1;
CommitLintConfigGitHubAction[_a] = { fqn: "@dxfrontier/projen-template-projects.CommitLintConfigGitHubAction", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWl0bGludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9naXRodWItYWN0aW9uL2NvbmZpZy9jb21taXRsaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNkRBQW9FO0FBR3BFOztHQUVHO0FBQ0gsTUFBYSw0QkFBNkIsU0FBUSxpQ0FBb0I7SUFDcEUsSUFBdUIsa0JBQWtCO1FBQ3ZDLE9BQU87WUFDTCxhQUFhLEVBQUU7Z0JBQ2IsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzthQUN4QztTQUNGLENBQUM7SUFDSixDQUFDOztBQVBILG9FQVFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWl0TGludENvbmZpZ0Jhc2UgfSBmcm9tICcuLi8uLi9iYXNlL2NvbmZpZy9jb21taXRsaW50JztcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG4vKipcbiAqIEltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgQ29tbWl0TGludCBjb25maWd1cmF0aW9uIGZvciB0aGUgR2l0SHViQWN0aW9uIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb21taXRMaW50Q29uZmlnR2l0SHViQWN0aW9uIGV4dGVuZHMgQ29tbWl0TGludENvbmZpZ0Jhc2Uge1xuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxTZXR0aW5ncygpOiBTZXR0aW5ncyB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdsaW50LXN0YWdlZCc6IHtcbiAgICAgICAgJyoqLyoue3ltbCx5YW1sfSc6IFsnbnBtIHJ1biBwcmV0dGllciddLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG4iXX0=
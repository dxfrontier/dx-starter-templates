"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitConfigBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const config_1 = require("../config");
/**
 * Base class for implementing all relevant Git configuration.
 *
 * This class acts as a base for handling Git configuration within projects.
 */
class GitConfigBase extends config_1.Config {
    constructor(project) {
        super(project);
        this.ignorePatterns = this.standardIgnorePatterns;
    }
    /**
     * Gets the standard ignore patterns required for configuration.
     *
     * @returns A list of ignore patterns.
     */
    get standardIgnorePatterns() {
        return [];
    }
    /**
     * Adds custom ignore patterns to the project's configuration.
     *
     * @param patterns - An array of file or directory patterns to be ignored.
     */
    addIgnorePatterns(patterns) {
        this.ignorePatterns = [...this.ignorePatterns, ...patterns];
    }
    applyConfig() {
        for (const pattern of this.ignorePatterns) {
            this.project.addGitIgnore(pattern);
        }
    }
}
exports.GitConfigBase = GitConfigBase;
_a = JSII_RTTI_SYMBOL_1;
GitConfigBase[_a] = { fqn: "@dxfrontier/projen-template-projects.GitConfigBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Jhc2UvY29uZmlnL2dpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNDQUFtQztBQUduQzs7OztHQUlHO0FBQ0gsTUFBYSxhQUFjLFNBQVEsZUFBTTtJQUd2QyxZQUFZLE9BQXFCO1FBQy9CLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVmLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ3BELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxzQkFBc0I7UUFDbEMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGlCQUFpQixDQUFDLFFBQWtCO1FBQ3pDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRWUsV0FBVztRQUN6QixLQUFLLE1BQU0sT0FBTyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxDQUFDO0lBQ0gsQ0FBQzs7QUEvQkgsc0NBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IFByb2plY3RUeXBlcyB9IGZyb20gJy4uLy4uL3R5cGVzL3Byb2plY3QnO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgR2l0IGNvbmZpZ3VyYXRpb24uXG4gKlxuICogVGhpcyBjbGFzcyBhY3RzIGFzIGEgYmFzZSBmb3IgaGFuZGxpbmcgR2l0IGNvbmZpZ3VyYXRpb24gd2l0aGluIHByb2plY3RzLlxuICovXG5leHBvcnQgY2xhc3MgR2l0Q29uZmlnQmFzZSBleHRlbmRzIENvbmZpZyB7XG4gIHByb3RlY3RlZCBpZ25vcmVQYXR0ZXJuczogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IocHJvamVjdDogUHJvamVjdFR5cGVzKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG5cbiAgICB0aGlzLmlnbm9yZVBhdHRlcm5zID0gdGhpcy5zdGFuZGFyZElnbm9yZVBhdHRlcm5zO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHN0YW5kYXJkIGlnbm9yZSBwYXR0ZXJucyByZXF1aXJlZCBmb3IgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMgQSBsaXN0IG9mIGlnbm9yZSBwYXR0ZXJucy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc3RhbmRhcmRJZ25vcmVQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgY3VzdG9tIGlnbm9yZSBwYXR0ZXJucyB0byB0aGUgcHJvamVjdCdzIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBwYXR0ZXJucyAtIEFuIGFycmF5IG9mIGZpbGUgb3IgZGlyZWN0b3J5IHBhdHRlcm5zIHRvIGJlIGlnbm9yZWQuXG4gICAqL1xuICBwdWJsaWMgYWRkSWdub3JlUGF0dGVybnMocGF0dGVybnM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgdGhpcy5pZ25vcmVQYXR0ZXJucyA9IFsuLi50aGlzLmlnbm9yZVBhdHRlcm5zLCAuLi5wYXR0ZXJuc107XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgYXBwbHlDb25maWcoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBwYXR0ZXJuIG9mIHRoaXMuaWdub3JlUGF0dGVybnMpIHtcbiAgICAgIHRoaXMucHJvamVjdC5hZGRHaXRJZ25vcmUocGF0dGVybik7XG4gICAgfVxuICB9XG59XG4iXX0=
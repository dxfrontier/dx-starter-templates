"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmConfigJsii = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const npm_1 = require("../../base/config/npm");
const project_1 = require(".././project");
/**
 * Implementing all relevant NPM configuration for the Jsii project.
 */
class NpmConfigJsii extends npm_1.NpmConfigBase {
    get additionalDevDependencies() {
        return ['jsii@^5.7.4', 'jsii-diff@^1.106.0', 'jsii-docgen@^10.6.3', 'jsii-pacmak@^1.106.0', 'jsii-rosetta@^5.7.2'];
    }
    get additionalPeerDependencies() {
        return ['constructs@^10.4.2', 'projen@^0.91.6'];
    }
    get additionalSettings() {
        return {
            files: ['lib', '.jsii', 'README.md'],
        };
    }
    get additionalIgnorePatterns() {
        return ['docs/', 'test/', 'lib/', '.jsii'];
    }
    /**
     * Gets additional ignore patterns to be added to the project's ignore configuration.
     *
     * @returns A list of ignore patterns.
     */
    get additionalIgnorePrettierPatterns() {
        return [
            '*.snap',
            '/.projen/**',
            '/.projen/deps.json',
            '/.projen/files.json',
            '/.projen/tasks.json',
            '/package-lock.json',
            '/package.json',
            '/API.md',
        ];
    }
    registerConfig() {
        this.addDevDependencies(this.additionalDevDependencies);
        this.addPeerDependencies(this.additionalPeerDependencies);
        this.addSettings(this.additionalSettings);
        if (this.project instanceof project_1.JsiiProject) {
            this.project.eslintConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
            this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePrettierPatterns);
        }
    }
    applyConfig() {
        if (this.project instanceof project_1.JsiiProject) {
            this.project.addDeps(...this.dependencies);
            this.project.addDevDeps(...this.devDependencies);
            this.project.addPeerDeps(...this.peerDependencies);
            this.project.addFields(this.settings);
        }
        this.patchScriptsAdd(this.scripts);
    }
}
exports.NpmConfigJsii = NpmConfigJsii;
_a = JSII_RTTI_SYMBOL_1;
NpmConfigJsii[_a] = { fqn: "@dxfrontier/projen-template-projects.NpmConfigJsii", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2pzaWkvY29uZmlnL25wbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLCtDQUFzRDtBQUV0RCwwQ0FBMkM7QUFFM0M7O0dBRUc7QUFDSCxNQUFhLGFBQWMsU0FBUSxtQkFBYTtJQUM5QyxJQUF1Qix5QkFBeUI7UUFDOUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3JILENBQUM7SUFFRCxJQUF1QiwwQkFBMEI7UUFDL0MsT0FBTyxDQUFDLG9CQUFvQixFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELElBQXVCLGtCQUFrQjtRQUN2QyxPQUFPO1lBQ0wsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUM7U0FDckMsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUF1Qix3QkFBd0I7UUFDN0MsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBWSxnQ0FBZ0M7UUFDMUMsT0FBTztZQUNMLFFBQVE7WUFDUixhQUFhO1lBQ2Isb0JBQW9CO1lBQ3BCLHFCQUFxQjtZQUNyQixxQkFBcUI7WUFDckIsb0JBQW9CO1lBQ3BCLGVBQWU7WUFDZixTQUFTO1NBQ1YsQ0FBQztJQUNKLENBQUM7SUFFZSxjQUFjO1FBQzVCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMxQyxJQUFJLElBQUksQ0FBQyxPQUFPLFlBQVkscUJBQVcsRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3hGLENBQUM7SUFDSCxDQUFDO0lBRWUsV0FBVztRQUN6QixJQUFJLElBQUksQ0FBQyxPQUFPLFlBQVkscUJBQVcsRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDOztBQXZESCxzQ0F3REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOcG1Db25maWdCYXNlIH0gZnJvbSAnLi4vLi4vYmFzZS9jb25maWcvbnBtJztcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgSnNpaVByb2plY3QgfSBmcm9tICcuLi8uL3Byb2plY3QnO1xuXG4vKipcbiAqIEltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgTlBNIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBKc2lpIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBOcG1Db25maWdKc2lpIGV4dGVuZHMgTnBtQ29uZmlnQmFzZSB7XG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbERldkRlcGVuZGVuY2llcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFsnanNpaUBeNS43LjQnLCAnanNpaS1kaWZmQF4xLjEwNi4wJywgJ2pzaWktZG9jZ2VuQF4xMC42LjMnLCAnanNpaS1wYWNtYWtAXjEuMTA2LjAnLCAnanNpaS1yb3NldHRhQF41LjcuMiddO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsUGVlckRlcGVuZGVuY2llcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFsnY29uc3RydWN0c0BeMTAuNC4yJywgJ3Byb2plbkBeMC45MS42J107XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxTZXR0aW5ncygpOiBTZXR0aW5ncyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpbGVzOiBbJ2xpYicsICcuanNpaScsICdSRUFETUUubWQnXSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsSWdub3JlUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJ2RvY3MvJywgJ3Rlc3QvJywgJ2xpYi8nLCAnLmpzaWknXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGFkZGl0aW9uYWwgaWdub3JlIHBhdHRlcm5zIHRvIGJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0J3MgaWdub3JlIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIEEgbGlzdCBvZiBpZ25vcmUgcGF0dGVybnMuXG4gICAqL1xuICBwcml2YXRlIGdldCBhZGRpdGlvbmFsSWdub3JlUHJldHRpZXJQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICcqLnNuYXAnLFxuICAgICAgJy8ucHJvamVuLyoqJyxcbiAgICAgICcvLnByb2plbi9kZXBzLmpzb24nLFxuICAgICAgJy8ucHJvamVuL2ZpbGVzLmpzb24nLFxuICAgICAgJy8ucHJvamVuL3Rhc2tzLmpzb24nLFxuICAgICAgJy9wYWNrYWdlLWxvY2suanNvbicsXG4gICAgICAnL3BhY2thZ2UuanNvbicsXG4gICAgICAnL0FQSS5tZCcsXG4gICAgXTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSByZWdpc3RlckNvbmZpZygpOiB2b2lkIHtcbiAgICB0aGlzLmFkZERldkRlcGVuZGVuY2llcyh0aGlzLmFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMpO1xuICAgIHRoaXMuYWRkUGVlckRlcGVuZGVuY2llcyh0aGlzLmFkZGl0aW9uYWxQZWVyRGVwZW5kZW5jaWVzKTtcbiAgICB0aGlzLmFkZFNldHRpbmdzKHRoaXMuYWRkaXRpb25hbFNldHRpbmdzKTtcbiAgICBpZiAodGhpcy5wcm9qZWN0IGluc3RhbmNlb2YgSnNpaVByb2plY3QpIHtcbiAgICAgIHRoaXMucHJvamVjdC5lc2xpbnRDb25maWc/LmFkZElnbm9yZVBhdHRlcm5zKHRoaXMuYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKTtcbiAgICAgIHRoaXMucHJvamVjdC5wcmV0dGllckNvbmZpZz8uYWRkSWdub3JlUGF0dGVybnModGhpcy5hZGRpdGlvbmFsSWdub3JlUHJldHRpZXJQYXR0ZXJucyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIGFwcGx5Q29uZmlnKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnByb2plY3QgaW5zdGFuY2VvZiBKc2lpUHJvamVjdCkge1xuICAgICAgdGhpcy5wcm9qZWN0LmFkZERlcHMoLi4udGhpcy5kZXBlbmRlbmNpZXMpO1xuICAgICAgdGhpcy5wcm9qZWN0LmFkZERldkRlcHMoLi4udGhpcy5kZXZEZXBlbmRlbmNpZXMpO1xuICAgICAgdGhpcy5wcm9qZWN0LmFkZFBlZXJEZXBzKC4uLnRoaXMucGVlckRlcGVuZGVuY2llcyk7XG4gICAgICB0aGlzLnByb2plY3QuYWRkRmllbGRzKHRoaXMuc2V0dGluZ3MpO1xuICAgIH1cbiAgICB0aGlzLnBhdGNoU2NyaXB0c0FkZCh0aGlzLnNjcmlwdHMpO1xuICB9XG59XG4iXX0=
"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmConfigJsii = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const npm_1 = require("../base/npm");
const project_1 = require("./project");
/**
 * Implementing all relevant NPM configuration for the Jsii project.
 */
class NpmConfigJsii extends npm_1.NpmConfigBase {
    /**
     * Gets the additional development dependencies required for configuration.
     *
     * @returns A list of package names with version specifications.
     */
    get additionalDevDependencies() {
        return ['jsii@^5.7.4', 'jsii-diff@^1.106.0', 'jsii-docgen@^10.6.3', 'jsii-pacmak@^1.106.0', 'jsii-rosetta@^5.7.2'];
    }
    /**
     * Gets the additional peer dependencies required for configuration.
     *
     * @returns A list of package names with version specifications.
     */
    get additionalPeerDependencies() {
        return ['constructs@^10.4.2', 'projen@^0.91.6'];
    }
    /**
     * Gets the additional settings to be added to the project's configuration.
     *
     * @returns A settings object to be merged into the project's settings.
     */
    get additionalSettings() {
        return {
            files: ['lib', '.jsii', 'README.md'],
        };
    }
    /**
     * Gets additional ignore patterns to be added to the project's ignore configuration.
     *
     * @returns A list of ignore patterns.
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2pzaWkvbnBtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscUNBQTRDO0FBRTVDLHVDQUF3QztBQUV4Qzs7R0FFRztBQUNILE1BQWEsYUFBYyxTQUFRLG1CQUFhO0lBQzlDOzs7O09BSUc7SUFDSCxJQUFZLHlCQUF5QjtRQUNuQyxPQUFPLENBQUMsYUFBYSxFQUFFLG9CQUFvQixFQUFFLHFCQUFxQixFQUFFLHNCQUFzQixFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFDckgsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFZLDBCQUEwQjtRQUNwQyxPQUFPLENBQUMsb0JBQW9CLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQVksa0JBQWtCO1FBQzVCLE9BQU87WUFDTCxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQztTQUNyQyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFZLHdCQUF3QjtRQUNsQyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFZLGdDQUFnQztRQUMxQyxPQUFPO1lBQ0wsUUFBUTtZQUNSLGFBQWE7WUFDYixvQkFBb0I7WUFDcEIscUJBQXFCO1lBQ3JCLHFCQUFxQjtZQUNyQixvQkFBb0I7WUFDcEIsZUFBZTtZQUNmLFNBQVM7U0FDVixDQUFDO0lBQ0osQ0FBQztJQUVlLGNBQWM7UUFDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzFDLElBQUksSUFBSSxDQUFDLE9BQU8sWUFBWSxxQkFBVyxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDeEYsQ0FBQztJQUNILENBQUM7SUFFZSxXQUFXO1FBQ3pCLElBQUksSUFBSSxDQUFDLE9BQU8sWUFBWSxxQkFBVyxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7O0FBM0VILHNDQTRFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5wbUNvbmZpZ0Jhc2UgfSBmcm9tICcuLi9iYXNlL25wbSc7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IEpzaWlQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0JztcblxuLyoqXG4gKiBJbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IE5QTSBjb25maWd1cmF0aW9uIGZvciB0aGUgSnNpaSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgTnBtQ29uZmlnSnNpaSBleHRlbmRzIE5wbUNvbmZpZ0Jhc2Uge1xuICAvKipcbiAgICogR2V0cyB0aGUgYWRkaXRpb25hbCBkZXZlbG9wbWVudCBkZXBlbmRlbmNpZXMgcmVxdWlyZWQgZm9yIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIEEgbGlzdCBvZiBwYWNrYWdlIG5hbWVzIHdpdGggdmVyc2lvbiBzcGVjaWZpY2F0aW9ucy5cbiAgICovXG4gIHByaXZhdGUgZ2V0IGFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJ2pzaWlAXjUuNy40JywgJ2pzaWktZGlmZkBeMS4xMDYuMCcsICdqc2lpLWRvY2dlbkBeMTAuNi4zJywgJ2pzaWktcGFjbWFrQF4xLjEwNi4wJywgJ2pzaWktcm9zZXR0YUBeNS43LjInXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBhZGRpdGlvbmFsIHBlZXIgZGVwZW5kZW5jaWVzIHJlcXVpcmVkIGZvciBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGxpc3Qgb2YgcGFja2FnZSBuYW1lcyB3aXRoIHZlcnNpb24gc3BlY2lmaWNhdGlvbnMuXG4gICAqL1xuICBwcml2YXRlIGdldCBhZGRpdGlvbmFsUGVlckRlcGVuZGVuY2llcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFsnY29uc3RydWN0c0BeMTAuNC4yJywgJ3Byb2plbkBeMC45MS42J107XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgYWRkaXRpb25hbCBzZXR0aW5ncyB0byBiZSBhZGRlZCB0byB0aGUgcHJvamVjdCdzIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIEEgc2V0dGluZ3Mgb2JqZWN0IHRvIGJlIG1lcmdlZCBpbnRvIHRoZSBwcm9qZWN0J3Mgc2V0dGluZ3MuXG4gICAqL1xuICBwcml2YXRlIGdldCBhZGRpdGlvbmFsU2V0dGluZ3MoKTogU2V0dGluZ3Mge1xuICAgIHJldHVybiB7XG4gICAgICBmaWxlczogWydsaWInLCAnLmpzaWknLCAnUkVBRE1FLm1kJ10sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGFkZGl0aW9uYWwgaWdub3JlIHBhdHRlcm5zIHRvIGJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0J3MgaWdub3JlIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIEEgbGlzdCBvZiBpZ25vcmUgcGF0dGVybnMuXG4gICAqL1xuICBwcml2YXRlIGdldCBhZGRpdGlvbmFsSWdub3JlUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJ2RvY3MvJywgJ3Rlc3QvJywgJ2xpYi8nLCAnLmpzaWknXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGFkZGl0aW9uYWwgaWdub3JlIHBhdHRlcm5zIHRvIGJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0J3MgaWdub3JlIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIEEgbGlzdCBvZiBpZ25vcmUgcGF0dGVybnMuXG4gICAqL1xuICBwcml2YXRlIGdldCBhZGRpdGlvbmFsSWdub3JlUHJldHRpZXJQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICcqLnNuYXAnLFxuICAgICAgJy8ucHJvamVuLyoqJyxcbiAgICAgICcvLnByb2plbi9kZXBzLmpzb24nLFxuICAgICAgJy8ucHJvamVuL2ZpbGVzLmpzb24nLFxuICAgICAgJy8ucHJvamVuL3Rhc2tzLmpzb24nLFxuICAgICAgJy9wYWNrYWdlLWxvY2suanNvbicsXG4gICAgICAnL3BhY2thZ2UuanNvbicsXG4gICAgICAnL0FQSS5tZCcsXG4gICAgXTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSByZWdpc3RlckNvbmZpZygpOiB2b2lkIHtcbiAgICB0aGlzLmFkZERldkRlcGVuZGVuY2llcyh0aGlzLmFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMpO1xuICAgIHRoaXMuYWRkUGVlckRlcGVuZGVuY2llcyh0aGlzLmFkZGl0aW9uYWxQZWVyRGVwZW5kZW5jaWVzKTtcbiAgICB0aGlzLmFkZFNldHRpbmdzKHRoaXMuYWRkaXRpb25hbFNldHRpbmdzKTtcbiAgICBpZiAodGhpcy5wcm9qZWN0IGluc3RhbmNlb2YgSnNpaVByb2plY3QpIHtcbiAgICAgIHRoaXMucHJvamVjdC5lc2xpbnRDb25maWc/LmFkZElnbm9yZVBhdHRlcm5zKHRoaXMuYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKTtcbiAgICAgIHRoaXMucHJvamVjdC5wcmV0dGllckNvbmZpZz8uYWRkSWdub3JlUGF0dGVybnModGhpcy5hZGRpdGlvbmFsSWdub3JlUHJldHRpZXJQYXR0ZXJucyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIGFwcGx5Q29uZmlnKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnByb2plY3QgaW5zdGFuY2VvZiBKc2lpUHJvamVjdCkge1xuICAgICAgdGhpcy5wcm9qZWN0LmFkZERlcHMoLi4udGhpcy5kZXBlbmRlbmNpZXMpO1xuICAgICAgdGhpcy5wcm9qZWN0LmFkZERldkRlcHMoLi4udGhpcy5kZXZEZXBlbmRlbmNpZXMpO1xuICAgICAgdGhpcy5wcm9qZWN0LmFkZFBlZXJEZXBzKC4uLnRoaXMucGVlckRlcGVuZGVuY2llcyk7XG4gICAgICB0aGlzLnByb2plY3QuYWRkRmllbGRzKHRoaXMuc2V0dGluZ3MpO1xuICAgIH1cbiAgICB0aGlzLnBhdGNoU2NyaXB0c0FkZCh0aGlzLnNjcmlwdHMpO1xuICB9XG59XG4iXX0=
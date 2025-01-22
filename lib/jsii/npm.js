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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2pzaWkvbnBtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscUNBQTRDO0FBRTVDLHVDQUF3QztBQUV4Qzs7R0FFRztBQUNILE1BQWEsYUFBYyxTQUFRLG1CQUFhO0lBQzlDLElBQXVCLHlCQUF5QjtRQUM5QyxPQUFPLENBQUMsYUFBYSxFQUFFLG9CQUFvQixFQUFFLHFCQUFxQixFQUFFLHNCQUFzQixFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFDckgsQ0FBQztJQUVELElBQXVCLDBCQUEwQjtRQUMvQyxPQUFPLENBQUMsb0JBQW9CLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsSUFBdUIsa0JBQWtCO1FBQ3ZDLE9BQU87WUFDTCxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQztTQUNyQyxDQUFDO0lBQ0osQ0FBQztJQUVELElBQXVCLHdCQUF3QjtRQUM3QyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFZLGdDQUFnQztRQUMxQyxPQUFPO1lBQ0wsUUFBUTtZQUNSLGFBQWE7WUFDYixvQkFBb0I7WUFDcEIscUJBQXFCO1lBQ3JCLHFCQUFxQjtZQUNyQixvQkFBb0I7WUFDcEIsZUFBZTtZQUNmLFNBQVM7U0FDVixDQUFDO0lBQ0osQ0FBQztJQUVlLGNBQWM7UUFDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzFDLElBQUksSUFBSSxDQUFDLE9BQU8sWUFBWSxxQkFBVyxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDeEYsQ0FBQztJQUNILENBQUM7SUFFZSxXQUFXO1FBQ3pCLElBQUksSUFBSSxDQUFDLE9BQU8sWUFBWSxxQkFBVyxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7O0FBdkRILHNDQXdEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5wbUNvbmZpZ0Jhc2UgfSBmcm9tICcuLi9iYXNlL25wbSc7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IEpzaWlQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0JztcblxuLyoqXG4gKiBJbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IE5QTSBjb25maWd1cmF0aW9uIGZvciB0aGUgSnNpaSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgTnBtQ29uZmlnSnNpaSBleHRlbmRzIE5wbUNvbmZpZ0Jhc2Uge1xuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJ2pzaWlAXjUuNy40JywgJ2pzaWktZGlmZkBeMS4xMDYuMCcsICdqc2lpLWRvY2dlbkBeMTAuNi4zJywgJ2pzaWktcGFjbWFrQF4xLjEwNi4wJywgJ2pzaWktcm9zZXR0YUBeNS43LjInXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbFBlZXJEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJ2NvbnN0cnVjdHNAXjEwLjQuMicsICdwcm9qZW5AXjAuOTEuNiddO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2V0dGluZ3MoKTogU2V0dGluZ3Mge1xuICAgIHJldHVybiB7XG4gICAgICBmaWxlczogWydsaWInLCAnLmpzaWknLCAnUkVBRE1FLm1kJ10sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gWydkb2NzLycsICd0ZXN0LycsICdsaWIvJywgJy5qc2lpJ107XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhZGRpdGlvbmFsIGlnbm9yZSBwYXR0ZXJucyB0byBiZSBhZGRlZCB0byB0aGUgcHJvamVjdCdzIGlnbm9yZSBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGxpc3Qgb2YgaWdub3JlIHBhdHRlcm5zLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgYWRkaXRpb25hbElnbm9yZVByZXR0aWVyUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXG4gICAgICAnKi5zbmFwJyxcbiAgICAgICcvLnByb2plbi8qKicsXG4gICAgICAnLy5wcm9qZW4vZGVwcy5qc29uJyxcbiAgICAgICcvLnByb2plbi9maWxlcy5qc29uJyxcbiAgICAgICcvLnByb2plbi90YXNrcy5qc29uJyxcbiAgICAgICcvcGFja2FnZS1sb2NrLmpzb24nLFxuICAgICAgJy9wYWNrYWdlLmpzb24nLFxuICAgICAgJy9BUEkubWQnLFxuICAgIF07XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcmVnaXN0ZXJDb25maWcoKTogdm9pZCB7XG4gICAgdGhpcy5hZGREZXZEZXBlbmRlbmNpZXModGhpcy5hZGRpdGlvbmFsRGV2RGVwZW5kZW5jaWVzKTtcbiAgICB0aGlzLmFkZFBlZXJEZXBlbmRlbmNpZXModGhpcy5hZGRpdGlvbmFsUGVlckRlcGVuZGVuY2llcyk7XG4gICAgdGhpcy5hZGRTZXR0aW5ncyh0aGlzLmFkZGl0aW9uYWxTZXR0aW5ncyk7XG4gICAgaWYgKHRoaXMucHJvamVjdCBpbnN0YW5jZW9mIEpzaWlQcm9qZWN0KSB7XG4gICAgICB0aGlzLnByb2plY3QuZXNsaW50Q29uZmlnPy5hZGRJZ25vcmVQYXR0ZXJucyh0aGlzLmFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucyk7XG4gICAgICB0aGlzLnByb2plY3QucHJldHRpZXJDb25maWc/LmFkZElnbm9yZVBhdHRlcm5zKHRoaXMuYWRkaXRpb25hbElnbm9yZVByZXR0aWVyUGF0dGVybnMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBhcHBseUNvbmZpZygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcm9qZWN0IGluc3RhbmNlb2YgSnNpaVByb2plY3QpIHtcbiAgICAgIHRoaXMucHJvamVjdC5hZGREZXBzKC4uLnRoaXMuZGVwZW5kZW5jaWVzKTtcbiAgICAgIHRoaXMucHJvamVjdC5hZGREZXZEZXBzKC4uLnRoaXMuZGV2RGVwZW5kZW5jaWVzKTtcbiAgICAgIHRoaXMucHJvamVjdC5hZGRQZWVyRGVwcyguLi50aGlzLnBlZXJEZXBlbmRlbmNpZXMpO1xuICAgICAgdGhpcy5wcm9qZWN0LmFkZEZpZWxkcyh0aGlzLnNldHRpbmdzKTtcbiAgICB9XG4gICAgdGhpcy5wYXRjaFNjcmlwdHNBZGQodGhpcy5zY3JpcHRzKTtcbiAgfVxufVxuIl19
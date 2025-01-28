"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmConfigCapService = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../../base");
const constants_1 = require("../../util/constants");
/**
 * Implementing all relevant NPM configuration for the CapService project.
 */
class NpmConfigCapService extends base_1.NpmConfigBase {
    get additionalDevDependencies() {
        return [`${constants_1.constants['npm-run-all'].NAME}@${constants_1.constants['npm-run-all'].VERSION}`];
    }
    get additionalSettings() {
        return {
            files: ['gen', 'README.md'],
        };
    }
    get additionalIgnorePatterns() {
        return ['docs/'];
    }
    /**
     * Gets additional ignore patterns to be added to the project's ignore configuration.
     *
     * @returns A list of ignore patterns.
     */
    get additionalIgnorePrettierPatterns() {
        return [
            '/package-lock.json',
            '/package.json',
            '/API.md',
            ...this.additionalAttributesPatterns.map((pattern) => {
                return `/${pattern}`;
            }),
        ];
    }
    get additionalAttributesPatterns() {
        return ['@cds-models', 'dist', 'gen'];
    }
    registerConfig() {
        if (this.project instanceof base_1.BaseProject) {
            this.addDevDependencies(this.additionalDevDependencies);
            this.addSettings(this.additionalSettings);
            this.removeScriptsOnInit(this.removeScripts);
            this.project.eslintConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
            this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePrettierPatterns);
            this.project.githubConfig?.addAttributePatterns(this.additionalAttributesPatterns);
        }
    }
}
exports.NpmConfigCapService = NpmConfigCapService;
_a = JSII_RTTI_SYMBOL_1;
NpmConfigCapService[_a] = { fqn: "@dxfrontier/projen-template-projects.NpmConfigCapService", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NhcC1zZXJ2aWNlL2NvbmZpZy9ucG0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQ0FBd0Q7QUFDeEQsb0RBQWlEO0FBR2pEOztHQUVHO0FBQ0gsTUFBYSxtQkFBb0IsU0FBUSxvQkFBYTtJQUNwRCxJQUF1Qix5QkFBeUI7UUFDOUMsT0FBTyxDQUFDLEdBQUcscUJBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLElBQUkscUJBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRCxJQUF1QixrQkFBa0I7UUFDdkMsT0FBTztZQUNMLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUM7U0FDNUIsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUF1Qix3QkFBd0I7UUFDN0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBWSxnQ0FBZ0M7UUFDMUMsT0FBTztZQUNMLG9CQUFvQjtZQUNwQixlQUFlO1lBQ2YsU0FBUztZQUNULEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQWUsRUFBVSxFQUFFO2dCQUNuRSxPQUFPLElBQUksT0FBTyxFQUFFLENBQUM7WUFDdkIsQ0FBQyxDQUFDO1NBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUF1Qiw0QkFBNEI7UUFDakQsT0FBTyxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVlLGNBQWM7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxZQUFZLGtCQUFXLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1lBQ3RGLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLG9CQUFvQixDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ3JGLENBQUM7SUFDSCxDQUFDOztBQTVDSCxrREE2Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlUHJvamVjdCwgTnBtQ29uZmlnQmFzZSB9IGZyb20gJy4uLy4uL2Jhc2UnO1xuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zdGFudHMnO1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJztcblxuLyoqXG4gKiBJbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IE5QTSBjb25maWd1cmF0aW9uIGZvciB0aGUgQ2FwU2VydmljZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgTnBtQ29uZmlnQ2FwU2VydmljZSBleHRlbmRzIE5wbUNvbmZpZ0Jhc2Uge1xuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbYCR7Y29uc3RhbnRzWyducG0tcnVuLWFsbCddLk5BTUV9QCR7Y29uc3RhbnRzWyducG0tcnVuLWFsbCddLlZFUlNJT059YF07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxTZXR0aW5ncygpOiBTZXR0aW5ncyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpbGVzOiBbJ2dlbicsICdSRUFETUUubWQnXSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsSWdub3JlUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJ2RvY3MvJ107XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhZGRpdGlvbmFsIGlnbm9yZSBwYXR0ZXJucyB0byBiZSBhZGRlZCB0byB0aGUgcHJvamVjdCdzIGlnbm9yZSBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGxpc3Qgb2YgaWdub3JlIHBhdHRlcm5zLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgYWRkaXRpb25hbElnbm9yZVByZXR0aWVyUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXG4gICAgICAnL3BhY2thZ2UtbG9jay5qc29uJyxcbiAgICAgICcvcGFja2FnZS5qc29uJyxcbiAgICAgICcvQVBJLm1kJyxcbiAgICAgIC4uLnRoaXMuYWRkaXRpb25hbEF0dHJpYnV0ZXNQYXR0ZXJucy5tYXAoKHBhdHRlcm46IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICAgIHJldHVybiBgLyR7cGF0dGVybn1gO1xuICAgICAgfSksXG4gICAgXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbEF0dHJpYnV0ZXNQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFsnQGNkcy1tb2RlbHMnLCAnZGlzdCcsICdnZW4nXTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSByZWdpc3RlckNvbmZpZygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcm9qZWN0IGluc3RhbmNlb2YgQmFzZVByb2plY3QpIHtcbiAgICAgIHRoaXMuYWRkRGV2RGVwZW5kZW5jaWVzKHRoaXMuYWRkaXRpb25hbERldkRlcGVuZGVuY2llcyk7XG4gICAgICB0aGlzLmFkZFNldHRpbmdzKHRoaXMuYWRkaXRpb25hbFNldHRpbmdzKTtcbiAgICAgIHRoaXMucmVtb3ZlU2NyaXB0c09uSW5pdCh0aGlzLnJlbW92ZVNjcmlwdHMpO1xuICAgICAgdGhpcy5wcm9qZWN0LmVzbGludENvbmZpZz8uYWRkSWdub3JlUGF0dGVybnModGhpcy5hZGRpdGlvbmFsSWdub3JlUGF0dGVybnMpO1xuICAgICAgdGhpcy5wcm9qZWN0LnByZXR0aWVyQ29uZmlnPy5hZGRJZ25vcmVQYXR0ZXJucyh0aGlzLmFkZGl0aW9uYWxJZ25vcmVQcmV0dGllclBhdHRlcm5zKTtcbiAgICAgIHRoaXMucHJvamVjdC5naXRodWJDb25maWc/LmFkZEF0dHJpYnV0ZVBhdHRlcm5zKHRoaXMuYWRkaXRpb25hbEF0dHJpYnV0ZXNQYXR0ZXJucyk7XG4gICAgfVxuICB9XG59XG4iXX0=
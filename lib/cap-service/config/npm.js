"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmConfigCapService = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../../base");
/**
 * Implementing all relevant NPM configuration for the CapService project.
 */
class NpmConfigCapService extends base_1.NpmConfigBase {
    get additionalDevDependencies() {
        return ['npm-run-all@^4.1.5'];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NhcC1zZXJ2aWNlL2NvbmZpZy9ucG0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQ0FBd0Q7QUFHeEQ7O0dBRUc7QUFDSCxNQUFhLG1CQUFvQixTQUFRLG9CQUFhO0lBQ3BELElBQXVCLHlCQUF5QjtRQUM5QyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBdUIsa0JBQWtCO1FBQ3ZDLE9BQU87WUFDTCxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDO1NBQzVCLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBdUIsd0JBQXdCO1FBQzdDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQVksZ0NBQWdDO1FBQzFDLE9BQU87WUFDTCxvQkFBb0I7WUFDcEIsZUFBZTtZQUNmLFNBQVM7WUFDVCxHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFlLEVBQVUsRUFBRTtnQkFDbkUsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQztTQUNILENBQUM7SUFDSixDQUFDO0lBRUQsSUFBdUIsNEJBQTRCO1FBQ2pELE9BQU8sQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFZSxjQUFjO1FBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sWUFBWSxrQkFBVyxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztZQUN0RixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUNyRixDQUFDO0lBQ0gsQ0FBQzs7QUE1Q0gsa0RBNkNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZVByb2plY3QsIE5wbUNvbmZpZ0Jhc2UgfSBmcm9tICcuLi8uLi9iYXNlJztcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcyc7XG5cbi8qKlxuICogSW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBOUE0gY29uZmlndXJhdGlvbiBmb3IgdGhlIENhcFNlcnZpY2UgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIE5wbUNvbmZpZ0NhcFNlcnZpY2UgZXh0ZW5kcyBOcG1Db25maWdCYXNlIHtcbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsRGV2RGVwZW5kZW5jaWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gWyducG0tcnVuLWFsbEBeNC4xLjUnXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbFNldHRpbmdzKCk6IFNldHRpbmdzIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmlsZXM6IFsnZ2VuJywgJ1JFQURNRS5tZCddLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFsnZG9jcy8nXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGFkZGl0aW9uYWwgaWdub3JlIHBhdHRlcm5zIHRvIGJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0J3MgaWdub3JlIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIEEgbGlzdCBvZiBpZ25vcmUgcGF0dGVybnMuXG4gICAqL1xuICBwcml2YXRlIGdldCBhZGRpdGlvbmFsSWdub3JlUHJldHRpZXJQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICcvcGFja2FnZS1sb2NrLmpzb24nLFxuICAgICAgJy9wYWNrYWdlLmpzb24nLFxuICAgICAgJy9BUEkubWQnLFxuICAgICAgLi4udGhpcy5hZGRpdGlvbmFsQXR0cmlidXRlc1BhdHRlcm5zLm1hcCgocGF0dGVybjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgICAgcmV0dXJuIGAvJHtwYXR0ZXJufWA7XG4gICAgICB9KSxcbiAgICBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsQXR0cmlidXRlc1BhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gWydAY2RzLW1vZGVscycsICdkaXN0JywgJ2dlbiddO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHJlZ2lzdGVyQ29uZmlnKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnByb2plY3QgaW5zdGFuY2VvZiBCYXNlUHJvamVjdCkge1xuICAgICAgdGhpcy5hZGREZXZEZXBlbmRlbmNpZXModGhpcy5hZGRpdGlvbmFsRGV2RGVwZW5kZW5jaWVzKTtcbiAgICAgIHRoaXMuYWRkU2V0dGluZ3ModGhpcy5hZGRpdGlvbmFsU2V0dGluZ3MpO1xuICAgICAgdGhpcy5yZW1vdmVTY3JpcHRzT25Jbml0KHRoaXMucmVtb3ZlU2NyaXB0cyk7XG4gICAgICB0aGlzLnByb2plY3QuZXNsaW50Q29uZmlnPy5hZGRJZ25vcmVQYXR0ZXJucyh0aGlzLmFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucyk7XG4gICAgICB0aGlzLnByb2plY3QucHJldHRpZXJDb25maWc/LmFkZElnbm9yZVBhdHRlcm5zKHRoaXMuYWRkaXRpb25hbElnbm9yZVByZXR0aWVyUGF0dGVybnMpO1xuICAgICAgdGhpcy5wcm9qZWN0LmdpdGh1YkNvbmZpZz8uYWRkQXR0cmlidXRlUGF0dGVybnModGhpcy5hZGRpdGlvbmFsQXR0cmlidXRlc1BhdHRlcm5zKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
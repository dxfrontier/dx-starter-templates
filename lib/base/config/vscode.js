"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VsCodeConfigBase = void 0;
const projen_1 = require("projen");
const config_1 = require("../config");
const utils_1 = require("../../util/utils");
/**
 * Base class for implementing all relevant VS Code configuration.
 *
 * This class acts as a base for handling VS Code configuration within projects.
 */
class VsCodeConfigBase extends config_1.Config {
    /**
     * Gets the config file to be added to the project's configuration.
     *
     * @returns A record of the having the path to the file as key and the content as value.
     */
    get configFile() {
        return {
            '.vscode/settings.json': {
                'editor.tabSize': 2,
                'editor.stickyTabStops': true,
                'typescript.inlayHints.parameterNames.enabled': 'all',
                'typescript.inlayHints.enumMemberValues.enabled': true,
                'typescript.inlayHints.variableTypes.enabled': true,
                'typescript.inlayHints.propertyDeclarationTypes.enabled': true,
                'javascript.inlayHints.parameterNames.suppressWhenArgumentMatchesName': false,
                'javascript.inlayHints.variableTypes.suppressWhenTypeMatchesName': false,
                'typescript.inlayHints.functionLikeReturnTypes.enabled': true,
                'typescript.inlayHints.parameterTypes.enabled': true,
                'editor.inlayHints.fontSize': 10,
                'editor.inlayHints.padding': true,
                'editor.formatOnSave': true,
                'editor.formatOnPaste': true,
            },
        };
    }
    get additionalIgnorePatterns() {
        const filePath = Object.keys(this.configFile)[0];
        return [`/${filePath}`];
    }
    registerConfig() {
        if (utils_1.util.isValidProject(this.project)) {
            this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
        }
    }
    applyConfig() {
        const filePath = Object.keys(this.configFile)[0];
        new projen_1.JsonFile(this.project, filePath, {
            obj: this.configFile[filePath],
        });
    }
}
exports.VsCodeConfigBase = VsCodeConfigBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnNjb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Jhc2UvY29uZmlnL3ZzY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBa0M7QUFDbEMsc0NBQW1DO0FBRW5DLDRDQUF3QztBQUV4Qzs7OztHQUlHO0FBQ0gsTUFBYSxnQkFBaUIsU0FBUSxlQUFNO0lBQzFDOzs7O09BSUc7SUFDSCxJQUFjLFVBQVU7UUFDdEIsT0FBTztZQUNMLHVCQUF1QixFQUFFO2dCQUN2QixnQkFBZ0IsRUFBRSxDQUFDO2dCQUNuQix1QkFBdUIsRUFBRSxJQUFJO2dCQUM3Qiw4Q0FBOEMsRUFBRSxLQUFLO2dCQUNyRCxnREFBZ0QsRUFBRSxJQUFJO2dCQUN0RCw2Q0FBNkMsRUFBRSxJQUFJO2dCQUNuRCx3REFBd0QsRUFBRSxJQUFJO2dCQUM5RCxzRUFBc0UsRUFBRSxLQUFLO2dCQUM3RSxpRUFBaUUsRUFBRSxLQUFLO2dCQUN4RSx1REFBdUQsRUFBRSxJQUFJO2dCQUM3RCw4Q0FBOEMsRUFBRSxJQUFJO2dCQUNwRCw0QkFBNEIsRUFBRSxFQUFFO2dCQUNoQywyQkFBMkIsRUFBRSxJQUFJO2dCQUNqQyxxQkFBcUIsRUFBRSxJQUFJO2dCQUMzQixzQkFBc0IsRUFBRSxJQUFJO2FBQzdCO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUF1Qix3QkFBd0I7UUFDN0MsTUFBTSxRQUFRLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsT0FBTyxDQUFDLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRWUsY0FBYztRQUM1QixJQUFJLFlBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQXdCLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2xHLENBQUM7SUFDSCxDQUFDO0lBRWUsV0FBVztRQUN6QixNQUFNLFFBQVEsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUU7WUFDbkMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQy9CLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQTVDRCw0Q0E0Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBKc29uRmlsZSB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgQ29uZmlnRmlsZSwgUHJvamVjdFR5cGVzIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcyc7XG5pbXBvcnQgeyB1dGlsIH0gZnJvbSAnLi4vLi4vdXRpbC91dGlscyc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBWUyBDb2RlIGNvbmZpZ3VyYXRpb24uXG4gKlxuICogVGhpcyBjbGFzcyBhY3RzIGFzIGEgYmFzZSBmb3IgaGFuZGxpbmcgVlMgQ29kZSBjb25maWd1cmF0aW9uIHdpdGhpbiBwcm9qZWN0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIFZzQ29kZUNvbmZpZ0Jhc2UgZXh0ZW5kcyBDb25maWcge1xuICAvKipcbiAgICogR2V0cyB0aGUgY29uZmlnIGZpbGUgdG8gYmUgYWRkZWQgdG8gdGhlIHByb2plY3QncyBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIHJlY29yZCBvZiB0aGUgaGF2aW5nIHRoZSBwYXRoIHRvIHRoZSBmaWxlIGFzIGtleSBhbmQgdGhlIGNvbnRlbnQgYXMgdmFsdWUuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGNvbmZpZ0ZpbGUoKTogQ29uZmlnRmlsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcudnNjb2RlL3NldHRpbmdzLmpzb24nOiB7XG4gICAgICAgICdlZGl0b3IudGFiU2l6ZSc6IDIsXG4gICAgICAgICdlZGl0b3Iuc3RpY2t5VGFiU3RvcHMnOiB0cnVlLFxuICAgICAgICAndHlwZXNjcmlwdC5pbmxheUhpbnRzLnBhcmFtZXRlck5hbWVzLmVuYWJsZWQnOiAnYWxsJyxcbiAgICAgICAgJ3R5cGVzY3JpcHQuaW5sYXlIaW50cy5lbnVtTWVtYmVyVmFsdWVzLmVuYWJsZWQnOiB0cnVlLFxuICAgICAgICAndHlwZXNjcmlwdC5pbmxheUhpbnRzLnZhcmlhYmxlVHlwZXMuZW5hYmxlZCc6IHRydWUsXG4gICAgICAgICd0eXBlc2NyaXB0LmlubGF5SGludHMucHJvcGVydHlEZWNsYXJhdGlvblR5cGVzLmVuYWJsZWQnOiB0cnVlLFxuICAgICAgICAnamF2YXNjcmlwdC5pbmxheUhpbnRzLnBhcmFtZXRlck5hbWVzLnN1cHByZXNzV2hlbkFyZ3VtZW50TWF0Y2hlc05hbWUnOiBmYWxzZSxcbiAgICAgICAgJ2phdmFzY3JpcHQuaW5sYXlIaW50cy52YXJpYWJsZVR5cGVzLnN1cHByZXNzV2hlblR5cGVNYXRjaGVzTmFtZSc6IGZhbHNlLFxuICAgICAgICAndHlwZXNjcmlwdC5pbmxheUhpbnRzLmZ1bmN0aW9uTGlrZVJldHVyblR5cGVzLmVuYWJsZWQnOiB0cnVlLFxuICAgICAgICAndHlwZXNjcmlwdC5pbmxheUhpbnRzLnBhcmFtZXRlclR5cGVzLmVuYWJsZWQnOiB0cnVlLFxuICAgICAgICAnZWRpdG9yLmlubGF5SGludHMuZm9udFNpemUnOiAxMCxcbiAgICAgICAgJ2VkaXRvci5pbmxheUhpbnRzLnBhZGRpbmcnOiB0cnVlLFxuICAgICAgICAnZWRpdG9yLmZvcm1hdE9uU2F2ZSc6IHRydWUsXG4gICAgICAgICdlZGl0b3IuZm9ybWF0T25QYXN0ZSc6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZSlbMF07XG4gICAgcmV0dXJuIFtgLyR7ZmlsZVBhdGh9YF07XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcmVnaXN0ZXJDb25maWcoKTogdm9pZCB7XG4gICAgaWYgKHV0aWwuaXNWYWxpZFByb2plY3QodGhpcy5wcm9qZWN0KSkge1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLnByZXR0aWVyQ29uZmlnPy5hZGRJZ25vcmVQYXR0ZXJucyh0aGlzLmFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIGFwcGx5Q29uZmlnKCk6IHZvaWQge1xuICAgIGNvbnN0IGZpbGVQYXRoOiBzdHJpbmcgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ0ZpbGUpWzBdO1xuICAgIG5ldyBKc29uRmlsZSh0aGlzLnByb2plY3QsIGZpbGVQYXRoLCB7XG4gICAgICBvYmo6IHRoaXMuY29uZmlnRmlsZVtmaWxlUGF0aF0sXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
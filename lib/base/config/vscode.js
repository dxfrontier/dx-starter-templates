"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VsCodeConfigBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const config_1 = require("../config");
const utils_1 = require("../../utils");
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
        if ((0, utils_1.isValidProject)(this.project)) {
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
_a = JSII_RTTI_SYMBOL_1;
VsCodeConfigBase[_a] = { fqn: "@dxfrontier/projen-template-projects.VsCodeConfigBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnNjb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Jhc2UvY29uZmlnL3ZzY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFrQztBQUNsQyxzQ0FBbUM7QUFFbkMsdUNBQTZDO0FBRTdDOzs7O0dBSUc7QUFDSCxNQUFhLGdCQUFpQixTQUFRLGVBQU07SUFDMUM7Ozs7T0FJRztJQUNILElBQWMsVUFBVTtRQUN0QixPQUFPO1lBQ0wsdUJBQXVCLEVBQUU7Z0JBQ3ZCLGdCQUFnQixFQUFFLENBQUM7Z0JBQ25CLHVCQUF1QixFQUFFLElBQUk7Z0JBQzdCLDhDQUE4QyxFQUFFLEtBQUs7Z0JBQ3JELGdEQUFnRCxFQUFFLElBQUk7Z0JBQ3RELDZDQUE2QyxFQUFFLElBQUk7Z0JBQ25ELHdEQUF3RCxFQUFFLElBQUk7Z0JBQzlELHNFQUFzRSxFQUFFLEtBQUs7Z0JBQzdFLGlFQUFpRSxFQUFFLEtBQUs7Z0JBQ3hFLHVEQUF1RCxFQUFFLElBQUk7Z0JBQzdELDhDQUE4QyxFQUFFLElBQUk7Z0JBQ3BELDRCQUE0QixFQUFFLEVBQUU7Z0JBQ2hDLDJCQUEyQixFQUFFLElBQUk7Z0JBQ2pDLHFCQUFxQixFQUFFLElBQUk7Z0JBQzNCLHNCQUFzQixFQUFFLElBQUk7YUFDN0I7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELElBQXVCLHdCQUF3QjtRQUM3QyxNQUFNLFFBQVEsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxPQUFPLENBQUMsSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFZSxjQUFjO1FBQzVCLElBQUksSUFBQSxzQkFBYyxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUF3QixDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNsRyxDQUFDO0lBQ0gsQ0FBQztJQUVlLFdBQVc7UUFDekIsTUFBTSxRQUFRLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxpQkFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFO1lBQ25DLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDOztBQTNDSCw0Q0E0Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBKc29uRmlsZSB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgQ29uZmlnRmlsZSwgUHJvamVjdFR5cGVzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXNWYWxpZFByb2plY3QgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBWUyBDb2RlIGNvbmZpZ3VyYXRpb24uXG4gKlxuICogVGhpcyBjbGFzcyBhY3RzIGFzIGEgYmFzZSBmb3IgaGFuZGxpbmcgVlMgQ29kZSBjb25maWd1cmF0aW9uIHdpdGhpbiBwcm9qZWN0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIFZzQ29kZUNvbmZpZ0Jhc2UgZXh0ZW5kcyBDb25maWcge1xuICAvKipcbiAgICogR2V0cyB0aGUgY29uZmlnIGZpbGUgdG8gYmUgYWRkZWQgdG8gdGhlIHByb2plY3QncyBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIHJlY29yZCBvZiB0aGUgaGF2aW5nIHRoZSBwYXRoIHRvIHRoZSBmaWxlIGFzIGtleSBhbmQgdGhlIGNvbnRlbnQgYXMgdmFsdWUuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGNvbmZpZ0ZpbGUoKTogQ29uZmlnRmlsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcudnNjb2RlL3NldHRpbmdzLmpzb24nOiB7XG4gICAgICAgICdlZGl0b3IudGFiU2l6ZSc6IDIsXG4gICAgICAgICdlZGl0b3Iuc3RpY2t5VGFiU3RvcHMnOiB0cnVlLFxuICAgICAgICAndHlwZXNjcmlwdC5pbmxheUhpbnRzLnBhcmFtZXRlck5hbWVzLmVuYWJsZWQnOiAnYWxsJyxcbiAgICAgICAgJ3R5cGVzY3JpcHQuaW5sYXlIaW50cy5lbnVtTWVtYmVyVmFsdWVzLmVuYWJsZWQnOiB0cnVlLFxuICAgICAgICAndHlwZXNjcmlwdC5pbmxheUhpbnRzLnZhcmlhYmxlVHlwZXMuZW5hYmxlZCc6IHRydWUsXG4gICAgICAgICd0eXBlc2NyaXB0LmlubGF5SGludHMucHJvcGVydHlEZWNsYXJhdGlvblR5cGVzLmVuYWJsZWQnOiB0cnVlLFxuICAgICAgICAnamF2YXNjcmlwdC5pbmxheUhpbnRzLnBhcmFtZXRlck5hbWVzLnN1cHByZXNzV2hlbkFyZ3VtZW50TWF0Y2hlc05hbWUnOiBmYWxzZSxcbiAgICAgICAgJ2phdmFzY3JpcHQuaW5sYXlIaW50cy52YXJpYWJsZVR5cGVzLnN1cHByZXNzV2hlblR5cGVNYXRjaGVzTmFtZSc6IGZhbHNlLFxuICAgICAgICAndHlwZXNjcmlwdC5pbmxheUhpbnRzLmZ1bmN0aW9uTGlrZVJldHVyblR5cGVzLmVuYWJsZWQnOiB0cnVlLFxuICAgICAgICAndHlwZXNjcmlwdC5pbmxheUhpbnRzLnBhcmFtZXRlclR5cGVzLmVuYWJsZWQnOiB0cnVlLFxuICAgICAgICAnZWRpdG9yLmlubGF5SGludHMuZm9udFNpemUnOiAxMCxcbiAgICAgICAgJ2VkaXRvci5pbmxheUhpbnRzLnBhZGRpbmcnOiB0cnVlLFxuICAgICAgICAnZWRpdG9yLmZvcm1hdE9uU2F2ZSc6IHRydWUsXG4gICAgICAgICdlZGl0b3IuZm9ybWF0T25QYXN0ZSc6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZSlbMF07XG4gICAgcmV0dXJuIFtgLyR7ZmlsZVBhdGh9YF07XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcmVnaXN0ZXJDb25maWcoKTogdm9pZCB7XG4gICAgaWYgKGlzVmFsaWRQcm9qZWN0KHRoaXMucHJvamVjdCkpIHtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5wcmV0dGllckNvbmZpZz8uYWRkSWdub3JlUGF0dGVybnModGhpcy5hZGRpdGlvbmFsSWdub3JlUGF0dGVybnMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBhcHBseUNvbmZpZygpOiB2b2lkIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlKVswXTtcbiAgICBuZXcgSnNvbkZpbGUodGhpcy5wcm9qZWN0LCBmaWxlUGF0aCwge1xuICAgICAgb2JqOiB0aGlzLmNvbmZpZ0ZpbGVbZmlsZVBhdGhdLFxuICAgIH0pO1xuICB9XG59XG4iXX0=
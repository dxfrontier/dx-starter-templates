"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VsCodeConfigBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnNjb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Jhc2UvY29uZmlnL3ZzY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFrQztBQUNsQyxzQ0FBbUM7QUFFbkMsNENBQWtEO0FBRWxEOzs7O0dBSUc7QUFDSCxNQUFhLGdCQUFpQixTQUFRLGVBQU07SUFDMUM7Ozs7T0FJRztJQUNILElBQWMsVUFBVTtRQUN0QixPQUFPO1lBQ0wsdUJBQXVCLEVBQUU7Z0JBQ3ZCLGdCQUFnQixFQUFFLENBQUM7Z0JBQ25CLHVCQUF1QixFQUFFLElBQUk7Z0JBQzdCLDhDQUE4QyxFQUFFLEtBQUs7Z0JBQ3JELGdEQUFnRCxFQUFFLElBQUk7Z0JBQ3RELDZDQUE2QyxFQUFFLElBQUk7Z0JBQ25ELHdEQUF3RCxFQUFFLElBQUk7Z0JBQzlELHNFQUFzRSxFQUFFLEtBQUs7Z0JBQzdFLGlFQUFpRSxFQUFFLEtBQUs7Z0JBQ3hFLHVEQUF1RCxFQUFFLElBQUk7Z0JBQzdELDhDQUE4QyxFQUFFLElBQUk7Z0JBQ3BELDRCQUE0QixFQUFFLEVBQUU7Z0JBQ2hDLDJCQUEyQixFQUFFLElBQUk7Z0JBQ2pDLHFCQUFxQixFQUFFLElBQUk7Z0JBQzNCLHNCQUFzQixFQUFFLElBQUk7YUFDN0I7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELElBQXVCLHdCQUF3QjtRQUM3QyxNQUFNLFFBQVEsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxPQUFPLENBQUMsSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFZSxjQUFjO1FBQzVCLElBQUksSUFBQSxzQkFBYyxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUF3QixDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNsRyxDQUFDO0lBQ0gsQ0FBQztJQUVlLFdBQVc7UUFDekIsTUFBTSxRQUFRLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxpQkFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFO1lBQ25DLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDOztBQTNDSCw0Q0E0Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBKc29uRmlsZSB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgQ29uZmlnRmlsZSwgUHJvamVjdFR5cGVzIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcyc7XG5pbXBvcnQgeyBpc1ZhbGlkUHJvamVjdCB9IGZyb20gJy4uLy4uL3V0aWwvdXRpbHMnO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgVlMgQ29kZSBjb25maWd1cmF0aW9uLlxuICpcbiAqIFRoaXMgY2xhc3MgYWN0cyBhcyBhIGJhc2UgZm9yIGhhbmRsaW5nIFZTIENvZGUgY29uZmlndXJhdGlvbiB3aXRoaW4gcHJvamVjdHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBWc0NvZGVDb25maWdCYXNlIGV4dGVuZHMgQ29uZmlnIHtcbiAgLyoqXG4gICAqIEdldHMgdGhlIGNvbmZpZyBmaWxlIHRvIGJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0J3MgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMgQSByZWNvcmQgb2YgdGhlIGhhdmluZyB0aGUgcGF0aCB0byB0aGUgZmlsZSBhcyBrZXkgYW5kIHRoZSBjb250ZW50IGFzIHZhbHVlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBjb25maWdGaWxlKCk6IENvbmZpZ0ZpbGUge1xuICAgIHJldHVybiB7XG4gICAgICAnLnZzY29kZS9zZXR0aW5ncy5qc29uJzoge1xuICAgICAgICAnZWRpdG9yLnRhYlNpemUnOiAyLFxuICAgICAgICAnZWRpdG9yLnN0aWNreVRhYlN0b3BzJzogdHJ1ZSxcbiAgICAgICAgJ3R5cGVzY3JpcHQuaW5sYXlIaW50cy5wYXJhbWV0ZXJOYW1lcy5lbmFibGVkJzogJ2FsbCcsXG4gICAgICAgICd0eXBlc2NyaXB0LmlubGF5SGludHMuZW51bU1lbWJlclZhbHVlcy5lbmFibGVkJzogdHJ1ZSxcbiAgICAgICAgJ3R5cGVzY3JpcHQuaW5sYXlIaW50cy52YXJpYWJsZVR5cGVzLmVuYWJsZWQnOiB0cnVlLFxuICAgICAgICAndHlwZXNjcmlwdC5pbmxheUhpbnRzLnByb3BlcnR5RGVjbGFyYXRpb25UeXBlcy5lbmFibGVkJzogdHJ1ZSxcbiAgICAgICAgJ2phdmFzY3JpcHQuaW5sYXlIaW50cy5wYXJhbWV0ZXJOYW1lcy5zdXBwcmVzc1doZW5Bcmd1bWVudE1hdGNoZXNOYW1lJzogZmFsc2UsXG4gICAgICAgICdqYXZhc2NyaXB0LmlubGF5SGludHMudmFyaWFibGVUeXBlcy5zdXBwcmVzc1doZW5UeXBlTWF0Y2hlc05hbWUnOiBmYWxzZSxcbiAgICAgICAgJ3R5cGVzY3JpcHQuaW5sYXlIaW50cy5mdW5jdGlvbkxpa2VSZXR1cm5UeXBlcy5lbmFibGVkJzogdHJ1ZSxcbiAgICAgICAgJ3R5cGVzY3JpcHQuaW5sYXlIaW50cy5wYXJhbWV0ZXJUeXBlcy5lbmFibGVkJzogdHJ1ZSxcbiAgICAgICAgJ2VkaXRvci5pbmxheUhpbnRzLmZvbnRTaXplJzogMTAsXG4gICAgICAgICdlZGl0b3IuaW5sYXlIaW50cy5wYWRkaW5nJzogdHJ1ZSxcbiAgICAgICAgJ2VkaXRvci5mb3JtYXRPblNhdmUnOiB0cnVlLFxuICAgICAgICAnZWRpdG9yLmZvcm1hdE9uUGFzdGUnOiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsSWdub3JlUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGZpbGVQYXRoOiBzdHJpbmcgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ0ZpbGUpWzBdO1xuICAgIHJldHVybiBbYC8ke2ZpbGVQYXRofWBdO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHJlZ2lzdGVyQ29uZmlnKCk6IHZvaWQge1xuICAgIGlmIChpc1ZhbGlkUHJvamVjdCh0aGlzLnByb2plY3QpKSB7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykucHJldHRpZXJDb25maWc/LmFkZElnbm9yZVBhdHRlcm5zKHRoaXMuYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgYXBwbHlDb25maWcoKTogdm9pZCB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZSlbMF07XG4gICAgbmV3IEpzb25GaWxlKHRoaXMucHJvamVjdCwgZmlsZVBhdGgsIHtcbiAgICAgIG9iajogdGhpcy5jb25maWdGaWxlW2ZpbGVQYXRoXSxcbiAgICB9KTtcbiAgfVxufVxuIl19
"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VsCodeConfigBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const config_1 = require("./config");
const utils_1 = require("../utils");
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
    /**
     * Gets additional ignore patterns to be added to the project's ignore configuration.
     *
     * @returns A list of ignore patterns.
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnNjb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2UvdnNjb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQWtDO0FBQ2xDLHFDQUFrQztBQUVsQyxvQ0FBMEM7QUFFMUM7Ozs7R0FJRztBQUNILE1BQWEsZ0JBQWlCLFNBQVEsZUFBTTtJQUMxQzs7OztPQUlHO0lBQ0gsSUFBYyxVQUFVO1FBQ3RCLE9BQU87WUFDTCx1QkFBdUIsRUFBRTtnQkFDdkIsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDbkIsdUJBQXVCLEVBQUUsSUFBSTtnQkFDN0IsOENBQThDLEVBQUUsS0FBSztnQkFDckQsZ0RBQWdELEVBQUUsSUFBSTtnQkFDdEQsNkNBQTZDLEVBQUUsSUFBSTtnQkFDbkQsd0RBQXdELEVBQUUsSUFBSTtnQkFDOUQsc0VBQXNFLEVBQUUsS0FBSztnQkFDN0UsaUVBQWlFLEVBQUUsS0FBSztnQkFDeEUsdURBQXVELEVBQUUsSUFBSTtnQkFDN0QsOENBQThDLEVBQUUsSUFBSTtnQkFDcEQsNEJBQTRCLEVBQUUsRUFBRTtnQkFDaEMsMkJBQTJCLEVBQUUsSUFBSTtnQkFDakMscUJBQXFCLEVBQUUsSUFBSTtnQkFDM0Isc0JBQXNCLEVBQUUsSUFBSTthQUM3QjtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsd0JBQXdCO1FBQ3BDLE1BQU0sUUFBUSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE9BQU8sQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVlLGNBQWM7UUFDNUIsSUFBSSxJQUFBLHNCQUFjLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLE9BQXdCLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2xHLENBQUM7SUFDSCxDQUFDO0lBRWUsV0FBVztRQUN6QixNQUFNLFFBQVEsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUU7WUFDbkMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQy9CLENBQUMsQ0FBQztJQUNMLENBQUM7O0FBaERILDRDQWlEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEpzb25GaWxlIH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IFByb2plY3RUeXBlcywgU2V0dGluZ3MgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBpc1ZhbGlkUHJvamVjdCB9IGZyb20gJy4uL3V0aWxzJztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IFZTIENvZGUgY29uZmlndXJhdGlvbi5cbiAqXG4gKiBUaGlzIGNsYXNzIGFjdHMgYXMgYSBiYXNlIGZvciBoYW5kbGluZyBWUyBDb2RlIGNvbmZpZ3VyYXRpb24gd2l0aGluIHByb2plY3RzLlxuICovXG5leHBvcnQgY2xhc3MgVnNDb2RlQ29uZmlnQmFzZSBleHRlbmRzIENvbmZpZyB7XG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjb25maWcgZmlsZSB0byBiZSBhZGRlZCB0byB0aGUgcHJvamVjdCdzIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIEEgcmVjb3JkIG9mIHRoZSBoYXZpbmcgdGhlIHBhdGggdG8gdGhlIGZpbGUgYXMga2V5IGFuZCB0aGUgY29udGVudCBhcyB2YWx1ZS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZSgpOiBTZXR0aW5ncyB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcudnNjb2RlL3NldHRpbmdzLmpzb24nOiB7XG4gICAgICAgICdlZGl0b3IudGFiU2l6ZSc6IDIsXG4gICAgICAgICdlZGl0b3Iuc3RpY2t5VGFiU3RvcHMnOiB0cnVlLFxuICAgICAgICAndHlwZXNjcmlwdC5pbmxheUhpbnRzLnBhcmFtZXRlck5hbWVzLmVuYWJsZWQnOiAnYWxsJyxcbiAgICAgICAgJ3R5cGVzY3JpcHQuaW5sYXlIaW50cy5lbnVtTWVtYmVyVmFsdWVzLmVuYWJsZWQnOiB0cnVlLFxuICAgICAgICAndHlwZXNjcmlwdC5pbmxheUhpbnRzLnZhcmlhYmxlVHlwZXMuZW5hYmxlZCc6IHRydWUsXG4gICAgICAgICd0eXBlc2NyaXB0LmlubGF5SGludHMucHJvcGVydHlEZWNsYXJhdGlvblR5cGVzLmVuYWJsZWQnOiB0cnVlLFxuICAgICAgICAnamF2YXNjcmlwdC5pbmxheUhpbnRzLnBhcmFtZXRlck5hbWVzLnN1cHByZXNzV2hlbkFyZ3VtZW50TWF0Y2hlc05hbWUnOiBmYWxzZSxcbiAgICAgICAgJ2phdmFzY3JpcHQuaW5sYXlIaW50cy52YXJpYWJsZVR5cGVzLnN1cHByZXNzV2hlblR5cGVNYXRjaGVzTmFtZSc6IGZhbHNlLFxuICAgICAgICAndHlwZXNjcmlwdC5pbmxheUhpbnRzLmZ1bmN0aW9uTGlrZVJldHVyblR5cGVzLmVuYWJsZWQnOiB0cnVlLFxuICAgICAgICAndHlwZXNjcmlwdC5pbmxheUhpbnRzLnBhcmFtZXRlclR5cGVzLmVuYWJsZWQnOiB0cnVlLFxuICAgICAgICAnZWRpdG9yLmlubGF5SGludHMuZm9udFNpemUnOiAxMCxcbiAgICAgICAgJ2VkaXRvci5pbmxheUhpbnRzLnBhZGRpbmcnOiB0cnVlLFxuICAgICAgICAnZWRpdG9yLmZvcm1hdE9uU2F2ZSc6IHRydWUsXG4gICAgICAgICdlZGl0b3IuZm9ybWF0T25QYXN0ZSc6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhZGRpdGlvbmFsIGlnbm9yZSBwYXR0ZXJucyB0byBiZSBhZGRlZCB0byB0aGUgcHJvamVjdCdzIGlnbm9yZSBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGxpc3Qgb2YgaWdub3JlIHBhdHRlcm5zLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBhZGRpdGlvbmFsSWdub3JlUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGZpbGVQYXRoOiBzdHJpbmcgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ0ZpbGUpWzBdO1xuICAgIHJldHVybiBbYC8ke2ZpbGVQYXRofWBdO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHJlZ2lzdGVyQ29uZmlnKCk6IHZvaWQge1xuICAgIGlmIChpc1ZhbGlkUHJvamVjdCh0aGlzLnByb2plY3QpKSB7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykucHJldHRpZXJDb25maWc/LmFkZElnbm9yZVBhdHRlcm5zKHRoaXMuYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgYXBwbHlDb25maWcoKTogdm9pZCB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZSlbMF07XG4gICAgbmV3IEpzb25GaWxlKHRoaXMucHJvamVjdCwgZmlsZVBhdGgsIHtcbiAgICAgIG9iajogdGhpcy5jb25maWdGaWxlW2ZpbGVQYXRoXSxcbiAgICB9KTtcbiAgfVxufVxuIl19
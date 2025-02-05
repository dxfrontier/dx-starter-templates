"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeScriptConfigJsii = void 0;
const typescript_1 = require("../../base/config/typescript");
/**
 * Implementing all relevant TypeScript configuration for the Jsii project.
 */
class TypeScriptConfigJsii extends typescript_1.TypeScriptConfigBase {
    get configFile() {
        return {
            'tsconfig.dev.json': {},
        };
    }
}
exports.TypeScriptConfigJsii = TypeScriptConfigJsii;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXNjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9qc2lpL2NvbmZpZy90eXBlc2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZEQUFvRTtBQUdwRTs7R0FFRztBQUNILE1BQWEsb0JBQXFCLFNBQVEsaUNBQW9CO0lBQzVELElBQXVCLFVBQVU7UUFDL0IsT0FBTztZQUNMLG1CQUFtQixFQUFFLEVBQUU7U0FDeEIsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQU5ELG9EQU1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZVNjcmlwdENvbmZpZ0Jhc2UgfSBmcm9tICcuLi8uLi9iYXNlL2NvbmZpZy90eXBlc2NyaXB0JztcbmltcG9ydCB7IENvbmZpZ0ZpbGUgfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJztcblxuLyoqXG4gKiBJbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IFR5cGVTY3JpcHQgY29uZmlndXJhdGlvbiBmb3IgdGhlIEpzaWkgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFR5cGVTY3JpcHRDb25maWdKc2lpIGV4dGVuZHMgVHlwZVNjcmlwdENvbmZpZ0Jhc2Uge1xuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGNvbmZpZ0ZpbGUoKTogQ29uZmlnRmlsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICd0c2NvbmZpZy5kZXYuanNvbic6IHt9LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
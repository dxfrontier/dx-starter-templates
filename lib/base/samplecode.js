"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleCodeConfigBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const config_1 = require("./config");
/**
 * Base class for implementing all relevant sample code configuration.
 *
 * This class acts as a base for handling sample code configuration within projects.
 */
class SampleCodeConfigBase extends config_1.Config {
    /**
     * Gets the sample file content.
     *
     * @returns An object where the key is the filename and the value is an array of file lines.
     */
    get sampleCodeFile() {
        return {};
    }
    /**
     * Creates the sample file(s) in the project directory.
     */
    createSampleCode() {
        for (const filePath in this.sampleCodeFile) {
            new projen_1.SampleFile(this.project, filePath, {
                contents: this.sampleCodeFile[filePath].join('\n'),
            });
        }
    }
    applyConfig() {
        this.createSampleCode();
    }
}
exports.SampleCodeConfigBase = SampleCodeConfigBase;
_a = JSII_RTTI_SYMBOL_1;
SampleCodeConfigBase[_a] = { fqn: "@dxfrontier/projen-template-projects.SampleCodeConfigBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlY29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL3NhbXBsZWNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBb0M7QUFDcEMscUNBQWtDO0FBRWxDOzs7O0dBSUc7QUFDSCxNQUFhLG9CQUFxQixTQUFRLGVBQU07SUFDOUM7Ozs7T0FJRztJQUNILElBQWMsY0FBYztRQUMxQixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7T0FFRztJQUNPLGdCQUFnQjtRQUN4QixLQUFLLE1BQU0sUUFBUSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMzQyxJQUFJLG1CQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUU7Z0JBQ3JDLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbkQsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFFZSxXQUFXO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7O0FBdkJILG9EQXdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNhbXBsZUZpbGUgfSBmcm9tICdwcm9qZW4nO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgc2FtcGxlIGNvZGUgY29uZmlndXJhdGlvbi5cbiAqXG4gKiBUaGlzIGNsYXNzIGFjdHMgYXMgYSBiYXNlIGZvciBoYW5kbGluZyBzYW1wbGUgY29kZSBjb25maWd1cmF0aW9uIHdpdGhpbiBwcm9qZWN0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIFNhbXBsZUNvZGVDb25maWdCYXNlIGV4dGVuZHMgQ29uZmlnIHtcbiAgLyoqXG4gICAqIEdldHMgdGhlIHNhbXBsZSBmaWxlIGNvbnRlbnQuXG4gICAqXG4gICAqIEByZXR1cm5zIEFuIG9iamVjdCB3aGVyZSB0aGUga2V5IGlzIHRoZSBmaWxlbmFtZSBhbmQgdGhlIHZhbHVlIGlzIGFuIGFycmF5IG9mIGZpbGUgbGluZXMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNhbXBsZUNvZGVGaWxlKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIHNhbXBsZSBmaWxlKHMpIGluIHRoZSBwcm9qZWN0IGRpcmVjdG9yeS5cbiAgICovXG4gIHByb3RlY3RlZCBjcmVhdGVTYW1wbGVDb2RlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgZmlsZVBhdGggaW4gdGhpcy5zYW1wbGVDb2RlRmlsZSkge1xuICAgICAgbmV3IFNhbXBsZUZpbGUodGhpcy5wcm9qZWN0LCBmaWxlUGF0aCwge1xuICAgICAgICBjb250ZW50czogdGhpcy5zYW1wbGVDb2RlRmlsZVtmaWxlUGF0aF0uam9pbignXFxuJyksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgYXBwbHlDb25maWcoKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVTYW1wbGVDb2RlKCk7XG4gIH1cbn1cbiJdfQ==
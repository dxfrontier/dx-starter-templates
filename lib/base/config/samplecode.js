"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleCodeConfigBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const config_1 = require("../config");
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
SampleCodeConfigBase[_a] = { fqn: "@dxfrontier/projen-template-projects.SampleCodeConfigBase", version: "0.5.4" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlY29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYXNlL2NvbmZpZy9zYW1wbGVjb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQW9DO0FBQ3BDLHNDQUFtQztBQUVuQzs7OztHQUlHO0FBQ0gsTUFBYSxvQkFBcUIsU0FBUSxlQUFNO0lBQzlDOzs7O09BSUc7SUFDSCxJQUFjLGNBQWM7UUFDMUIsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7O09BRUc7SUFDTyxnQkFBZ0I7UUFDeEIsS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDM0MsSUFBSSxtQkFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFO2dCQUNyQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ25ELENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRWUsV0FBVztRQUN6QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDOztBQXZCSCxvREF3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTYW1wbGVGaWxlIH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBzYW1wbGUgY29kZSBjb25maWd1cmF0aW9uLlxuICpcbiAqIFRoaXMgY2xhc3MgYWN0cyBhcyBhIGJhc2UgZm9yIGhhbmRsaW5nIHNhbXBsZSBjb2RlIGNvbmZpZ3VyYXRpb24gd2l0aGluIHByb2plY3RzLlxuICovXG5leHBvcnQgY2xhc3MgU2FtcGxlQ29kZUNvbmZpZ0Jhc2UgZXh0ZW5kcyBDb25maWcge1xuICAvKipcbiAgICogR2V0cyB0aGUgc2FtcGxlIGZpbGUgY29udGVudC5cbiAgICpcbiAgICogQHJldHVybnMgQW4gb2JqZWN0IHdoZXJlIHRoZSBrZXkgaXMgdGhlIGZpbGVuYW1lIGFuZCB0aGUgdmFsdWUgaXMgYW4gYXJyYXkgb2YgZmlsZSBsaW5lcy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2FtcGxlQ29kZUZpbGUoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgc2FtcGxlIGZpbGUocykgaW4gdGhlIHByb2plY3QgZGlyZWN0b3J5LlxuICAgKi9cbiAgcHJvdGVjdGVkIGNyZWF0ZVNhbXBsZUNvZGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBmaWxlUGF0aCBpbiB0aGlzLnNhbXBsZUNvZGVGaWxlKSB7XG4gICAgICBuZXcgU2FtcGxlRmlsZSh0aGlzLnByb2plY3QsIGZpbGVQYXRoLCB7XG4gICAgICAgIGNvbnRlbnRzOiB0aGlzLnNhbXBsZUNvZGVGaWxlW2ZpbGVQYXRoXS5qb2luKCdcXG4nKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBhcHBseUNvbmZpZygpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZVNhbXBsZUNvZGUoKTtcbiAgfVxufVxuIl19
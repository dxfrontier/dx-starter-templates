"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeScriptConfigBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const constants_1 = require("../../util/constants");
const utils_1 = require("../../util/utils");
const config_1 = require("../config");
/**
 * Base class for implementing all relevant TypeScript configuration.
 *
 * This class acts as a base for handling TypeScript configuration within projects.
 */
class TypeScriptConfigBase extends config_1.Config {
    get additionalDevDependencies() {
        return [
            `${constants_1.constants['typescript'].NAME}@${constants_1.constants['typescript'].VERSION}`,
            `${constants_1.constants['@types/node'].NAME}@${constants_1.constants['@types/node'].VERSION}`,
            `${constants_1.constants['ts-node'].NAME}@${constants_1.constants['ts-node'].VERSION}`,
        ];
    }
    get additionalIgnorePatterns() {
        const filePath = Object.keys(this.configFile)[0];
        return [`/${filePath}`];
    }
    get configFile() {
        return {
            'tsconfig.json': {},
        };
    }
    /**
     * Retrieves the name to the TypeScript config file.
     *
     * @returns The name of the TypeScript config file.
     */
    get configFileName() {
        return Object.keys(this.configFile)[0];
    }
    registerConfig() {
        if (utils_1.util.isValidProject(this.project)) {
            this.project.npmConfig?.addDevDependencies(this.additionalDevDependencies);
            this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
        }
    }
}
exports.TypeScriptConfigBase = TypeScriptConfigBase;
_a = JSII_RTTI_SYMBOL_1;
TypeScriptConfigBase[_a] = { fqn: "@dxfrontier/projen-template-projects.TypeScriptConfigBase", version: "0.5.4" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXNjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYXNlL2NvbmZpZy90eXBlc2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0RBQWlEO0FBRWpELDRDQUF3QztBQUN4QyxzQ0FBbUM7QUFFbkM7Ozs7R0FJRztBQUNILE1BQWEsb0JBQXFCLFNBQVEsZUFBTTtJQUM5QyxJQUF1Qix5QkFBeUI7UUFDOUMsT0FBTztZQUNMLEdBQUcscUJBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLElBQUkscUJBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDcEUsR0FBRyxxQkFBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksSUFBSSxxQkFBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUN0RSxHQUFHLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxJQUFJLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFO1NBQy9ELENBQUM7SUFDSixDQUFDO0lBRUQsSUFBdUIsd0JBQXdCO1FBQzdDLE1BQU0sUUFBUSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE9BQU8sQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQXVCLFVBQVU7UUFDL0IsT0FBTztZQUNMLGVBQWUsRUFBRSxFQUFFO1NBQ3BCLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQVcsY0FBYztRQUN2QixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFZSxjQUFjO1FBQzVCLElBQUksWUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsT0FBd0IsQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDNUYsSUFBSSxDQUFDLE9BQXdCLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2xHLENBQUM7SUFDSCxDQUFDOztBQWxDSCxvREFtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tICcuLi8uLi91dGlsL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBDb25maWdGaWxlLCBQcm9qZWN0VHlwZXMgfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJztcbmltcG9ydCB7IHV0aWwgfSBmcm9tICcuLi8uLi91dGlsL3V0aWxzJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBUeXBlU2NyaXB0IGNvbmZpZ3VyYXRpb24uXG4gKlxuICogVGhpcyBjbGFzcyBhY3RzIGFzIGEgYmFzZSBmb3IgaGFuZGxpbmcgVHlwZVNjcmlwdCBjb25maWd1cmF0aW9uIHdpdGhpbiBwcm9qZWN0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIFR5cGVTY3JpcHRDb25maWdCYXNlIGV4dGVuZHMgQ29uZmlnIHtcbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsRGV2RGVwZW5kZW5jaWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW1xuICAgICAgYCR7Y29uc3RhbnRzWyd0eXBlc2NyaXB0J10uTkFNRX1AJHtjb25zdGFudHNbJ3R5cGVzY3JpcHQnXS5WRVJTSU9OfWAsXG4gICAgICBgJHtjb25zdGFudHNbJ0B0eXBlcy9ub2RlJ10uTkFNRX1AJHtjb25zdGFudHNbJ0B0eXBlcy9ub2RlJ10uVkVSU0lPTn1gLFxuICAgICAgYCR7Y29uc3RhbnRzWyd0cy1ub2RlJ10uTkFNRX1AJHtjb25zdGFudHNbJ3RzLW5vZGUnXS5WRVJTSU9OfWAsXG4gICAgXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlKVswXTtcbiAgICByZXR1cm4gW2AvJHtmaWxlUGF0aH1gXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgY29uZmlnRmlsZSgpOiBDb25maWdGaWxlIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ3RzY29uZmlnLmpzb24nOiB7fSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgbmFtZSB0byB0aGUgVHlwZVNjcmlwdCBjb25maWcgZmlsZS5cbiAgICpcbiAgICogQHJldHVybnMgVGhlIG5hbWUgb2YgdGhlIFR5cGVTY3JpcHQgY29uZmlnIGZpbGUuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGNvbmZpZ0ZpbGVOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZSlbMF07XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcmVnaXN0ZXJDb25maWcoKTogdm9pZCB7XG4gICAgaWYgKHV0aWwuaXNWYWxpZFByb2plY3QodGhpcy5wcm9qZWN0KSkge1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLm5wbUNvbmZpZz8uYWRkRGV2RGVwZW5kZW5jaWVzKHRoaXMuYWRkaXRpb25hbERldkRlcGVuZGVuY2llcyk7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykucHJldHRpZXJDb25maWc/LmFkZElnbm9yZVBhdHRlcm5zKHRoaXMuYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
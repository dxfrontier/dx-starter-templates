"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrettierConfigCapService = void 0;
const prettier_1 = require("../../base/config/prettier");
/**
 * Implementing all relevant Prettier configuration for the CapService project.
 */
class PrettierConfigCapService extends prettier_1.PrettierConfigBase {
    get additionalScripts() {
        return {
            ...super.additionalScripts,
            'prettier:cds': 'format-cds',
        };
    }
}
exports.PrettierConfigCapService = PrettierConfigCapService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHRpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY2FwLXNlcnZpY2UvY29uZmlnL3ByZXR0aWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlEQUFnRTtBQUVoRTs7R0FFRztBQUNILE1BQWEsd0JBQXlCLFNBQVEsNkJBQWtCO0lBQzlELElBQXVCLGlCQUFpQjtRQUN0QyxPQUFPO1lBQ0wsR0FBRyxLQUFLLENBQUMsaUJBQWlCO1lBQzFCLGNBQWMsRUFBRSxZQUFZO1NBQzdCLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFQRCw0REFPQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByZXR0aWVyQ29uZmlnQmFzZSB9IGZyb20gJy4uLy4uL2Jhc2UvY29uZmlnL3ByZXR0aWVyJztcblxuLyoqXG4gKiBJbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IFByZXR0aWVyIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBDYXBTZXJ2aWNlIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBQcmV0dGllckNvbmZpZ0NhcFNlcnZpY2UgZXh0ZW5kcyBQcmV0dGllckNvbmZpZ0Jhc2Uge1xuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxTY3JpcHRzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdXBlci5hZGRpdGlvbmFsU2NyaXB0cyxcbiAgICAgICdwcmV0dGllcjpjZHMnOiAnZm9ybWF0LWNkcycsXG4gICAgfTtcbiAgfVxufVxuIl19
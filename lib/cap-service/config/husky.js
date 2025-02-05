"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HuskyConfigCapService = void 0;
const base_1 = require("../../base");
/**
 * Implementing all relevant Husky configuration for the CapService project.
 */
class HuskyConfigCapService extends base_1.HuskyConfigBase {
    get configFile() {
        return {
            ...super.configFile,
            '.husky/pre-push': ['npm run build'],
        };
    }
}
exports.HuskyConfigCapService = HuskyConfigCapService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVza3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY2FwLXNlcnZpY2UvY29uZmlnL2h1c2t5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUE2QztBQUc3Qzs7R0FFRztBQUNILE1BQWEscUJBQXNCLFNBQVEsc0JBQWU7SUFDeEQsSUFBdUIsVUFBVTtRQUMvQixPQUFPO1lBQ0wsR0FBRyxLQUFLLENBQUMsVUFBVTtZQUNuQixpQkFBaUIsRUFBRSxDQUFDLGVBQWUsQ0FBQztTQUNyQyxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBUEQsc0RBT0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdXNreUNvbmZpZ0Jhc2UgfSBmcm9tICcuLi8uLi9iYXNlJztcbmltcG9ydCB7IENvbmZpZ0ZpbGUgfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJztcblxuLyoqXG4gKiBJbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IEh1c2t5IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBDYXBTZXJ2aWNlIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBIdXNreUNvbmZpZ0NhcFNlcnZpY2UgZXh0ZW5kcyBIdXNreUNvbmZpZ0Jhc2Uge1xuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGNvbmZpZ0ZpbGUoKTogQ29uZmlnRmlsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN1cGVyLmNvbmZpZ0ZpbGUsXG4gICAgICAnLmh1c2t5L3ByZS1wdXNoJzogWyducG0gcnVuIGJ1aWxkJ10sXG4gICAgfTtcbiAgfVxufVxuIl19
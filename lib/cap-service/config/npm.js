"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmConfigCapService = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
// import { Task } from 'projen';
const base_1 = require("../../base");
const constants_1 = require("../../util/constants");
/**
 * Implementing all relevant NPM configuration for the CapService project.
 */
class NpmConfigCapService extends base_1.NpmConfigBase {
    get additionalDevDependencies() {
        return [
            `${constants_1.constants['npm-run-all'].NAME}@${constants_1.constants['npm-run-all'].VERSION}`,
            `${constants_1.constants['@cap-js/sqlite'].NAME}@${constants_1.constants['@cap-js/sqlite'].VERSION}`,
        ];
    }
    get additionalSettings() {
        return {
            files: ['gen', 'README.md'],
        };
    }
    get additionalIgnorePatterns() {
        return ['docs/'];
    }
    /**
     * Gets additional ignore patterns to be added to the project's ignore configuration.
     *
     * @returns A list of ignore patterns.
     */
    get additionalIgnorePrettierPatterns() {
        return [
            '/package-lock.json',
            '/package.json',
            '/API.md',
            ...this.additionalAttributesPatterns.map((pattern) => {
                return `/${pattern}`;
            }),
        ];
    }
    get additionalAttributesPatterns() {
        return ['@cds-models', 'dist', 'gen'];
    }
    registerConfig() {
        if (this.project instanceof base_1.BaseProject) {
            this.addDevDependencies(this.additionalDevDependencies);
            this.addSettings(this.additionalSettings);
            this.removeScriptsOnInit(this.removeScripts);
            this.project.eslintConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
            this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePrettierPatterns);
            this.project.githubConfig?.addAttributePatterns(this.additionalAttributesPatterns);
        }
    }
}
exports.NpmConfigCapService = NpmConfigCapService;
_a = JSII_RTTI_SYMBOL_1;
NpmConfigCapService[_a] = { fqn: "@dxfrontier/projen-template-projects.NpmConfigCapService", version: "0.5.4" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NhcC1zZXJ2aWNlL2NvbmZpZy9ucG0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpQ0FBaUM7QUFDakMscUNBQXdEO0FBQ3hELG9EQUFpRDtBQUdqRDs7R0FFRztBQUNILE1BQWEsbUJBQW9CLFNBQVEsb0JBQWE7SUFDcEQsSUFBdUIseUJBQXlCO1FBQzlDLE9BQU87WUFDTCxHQUFHLHFCQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxJQUFJLHFCQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ3RFLEdBQUcscUJBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksSUFBSSxxQkFBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxFQUFFO1NBQzdFLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBdUIsa0JBQWtCO1FBQ3ZDLE9BQU87WUFDTCxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDO1NBQzVCLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBdUIsd0JBQXdCO1FBQzdDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQVksZ0NBQWdDO1FBQzFDLE9BQU87WUFDTCxvQkFBb0I7WUFDcEIsZUFBZTtZQUNmLFNBQVM7WUFDVCxHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFlLEVBQVUsRUFBRTtnQkFDbkUsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQztTQUNILENBQUM7SUFDSixDQUFDO0lBRUQsSUFBdUIsNEJBQTRCO1FBQ2pELE9BQU8sQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFZSxjQUFjO1FBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sWUFBWSxrQkFBVyxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztZQUN0RixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUNyRixDQUFDO0lBQ0gsQ0FBQzs7QUEvQ0gsa0RBZ0RDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgVGFzayB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBCYXNlUHJvamVjdCwgTnBtQ29uZmlnQmFzZSB9IGZyb20gJy4uLy4uL2Jhc2UnO1xuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zdGFudHMnO1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJztcblxuLyoqXG4gKiBJbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IE5QTSBjb25maWd1cmF0aW9uIGZvciB0aGUgQ2FwU2VydmljZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgTnBtQ29uZmlnQ2FwU2VydmljZSBleHRlbmRzIE5wbUNvbmZpZ0Jhc2Uge1xuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXG4gICAgICBgJHtjb25zdGFudHNbJ25wbS1ydW4tYWxsJ10uTkFNRX1AJHtjb25zdGFudHNbJ25wbS1ydW4tYWxsJ10uVkVSU0lPTn1gLFxuICAgICAgYCR7Y29uc3RhbnRzWydAY2FwLWpzL3NxbGl0ZSddLk5BTUV9QCR7Y29uc3RhbnRzWydAY2FwLWpzL3NxbGl0ZSddLlZFUlNJT059YCxcbiAgICBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2V0dGluZ3MoKTogU2V0dGluZ3Mge1xuICAgIHJldHVybiB7XG4gICAgICBmaWxlczogWydnZW4nLCAnUkVBRE1FLm1kJ10sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gWydkb2NzLyddO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYWRkaXRpb25hbCBpZ25vcmUgcGF0dGVybnMgdG8gYmUgYWRkZWQgdG8gdGhlIHByb2plY3QncyBpZ25vcmUgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMgQSBsaXN0IG9mIGlnbm9yZSBwYXR0ZXJucy5cbiAgICovXG4gIHByaXZhdGUgZ2V0IGFkZGl0aW9uYWxJZ25vcmVQcmV0dGllclBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW1xuICAgICAgJy9wYWNrYWdlLWxvY2suanNvbicsXG4gICAgICAnL3BhY2thZ2UuanNvbicsXG4gICAgICAnL0FQSS5tZCcsXG4gICAgICAuLi50aGlzLmFkZGl0aW9uYWxBdHRyaWJ1dGVzUGF0dGVybnMubWFwKChwYXR0ZXJuOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgICByZXR1cm4gYC8ke3BhdHRlcm59YDtcbiAgICAgIH0pLFxuICAgIF07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxBdHRyaWJ1dGVzUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJ0BjZHMtbW9kZWxzJywgJ2Rpc3QnLCAnZ2VuJ107XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcmVnaXN0ZXJDb25maWcoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucHJvamVjdCBpbnN0YW5jZW9mIEJhc2VQcm9qZWN0KSB7XG4gICAgICB0aGlzLmFkZERldkRlcGVuZGVuY2llcyh0aGlzLmFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMpO1xuICAgICAgdGhpcy5hZGRTZXR0aW5ncyh0aGlzLmFkZGl0aW9uYWxTZXR0aW5ncyk7XG4gICAgICB0aGlzLnJlbW92ZVNjcmlwdHNPbkluaXQodGhpcy5yZW1vdmVTY3JpcHRzKTtcbiAgICAgIHRoaXMucHJvamVjdC5lc2xpbnRDb25maWc/LmFkZElnbm9yZVBhdHRlcm5zKHRoaXMuYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKTtcbiAgICAgIHRoaXMucHJvamVjdC5wcmV0dGllckNvbmZpZz8uYWRkSWdub3JlUGF0dGVybnModGhpcy5hZGRpdGlvbmFsSWdub3JlUHJldHRpZXJQYXR0ZXJucyk7XG4gICAgICB0aGlzLnByb2plY3QuZ2l0aHViQ29uZmlnPy5hZGRBdHRyaWJ1dGVQYXR0ZXJucyh0aGlzLmFkZGl0aW9uYWxBdHRyaWJ1dGVzUGF0dGVybnMpO1xuICAgIH1cbiAgfVxufVxuIl19
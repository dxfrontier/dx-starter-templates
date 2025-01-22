"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitLintConfigBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const config_1 = require("./config");
const utils_1 = require("../utils");
/**
 * Base class for implementing all relevant CommitLint configuration.
 *
 * This class acts as a base for handling CommitLint configuration within projects.
 */
class CommitLintConfigBase extends config_1.Config {
    get additionalDevDependencies() {
        return [
            '@commitlint/cli@^19.6.1',
            '@commitlint/config-conventional@^19.6.0',
            '@commitlint/prompt-cli@^19.7.0',
            '@commitlint/types@^19.5.0',
            'lint-staged@^15.3.0',
        ];
    }
    get additionalSettings() {
        return {
            'lint-staged': {
                '**/*.ts': ['npm run eslint', 'npm run prettier'],
            },
        };
    }
    get additionalScripts() {
        return {
            commit: 'commit',
        };
    }
    get additionalIgnorePatterns() {
        const filePath = Object.keys(this.configFile)[0];
        return [`/${filePath}`];
    }
    get configFile() {
        return {
            '.commitlintrc.ts': [
                "import type { UserConfig } from '@commitlint/types';",
                "import { RuleConfigSeverity } from '@commitlint/types';",
                '',
                'const Configuration: UserConfig = {',
                "  extends: ['@commitlint/config-conventional'],",
                '  rules: {',
                "    'type-enum': [",
                '      RuleConfigSeverity.Error,',
                "      'always',",
                "      ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test', 'delete'],",
                '    ],',
                "    'scope-empty': [RuleConfigSeverity.Error, 'never'],",
                "    'subject-empty': [RuleConfigSeverity.Error, 'never'],",
                '  },',
                "  helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',",
                '};',
                '',
                'export default Configuration;',
            ],
        };
    }
    registerConfig() {
        if ((0, utils_1.isValidProject)(this.project)) {
            this.project.npmConfig?.addDevDependencies(this.additionalDevDependencies);
            this.project.npmConfig?.addSettings(this.additionalSettings);
            this.project.npmConfig?.addScripts(this.additionalScripts);
            this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
        }
    }
    applyConfig() {
        const filePath = Object.keys(this.configFile)[0];
        new projen_1.TextFile(this.project, filePath, {
            lines: this.configFile[filePath],
        });
    }
}
exports.CommitLintConfigBase = CommitLintConfigBase;
_a = JSII_RTTI_SYMBOL_1;
CommitLintConfigBase[_a] = { fqn: "@dxfrontier/projen-template-projects.CommitLintConfigBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWl0bGludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL2NvbW1pdGxpbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBa0M7QUFDbEMscUNBQWtDO0FBRWxDLG9DQUEwQztBQUcxQzs7OztHQUlHO0FBQ0gsTUFBYSxvQkFBcUIsU0FBUSxlQUFNO0lBQzlDLElBQXVCLHlCQUF5QjtRQUM5QyxPQUFPO1lBQ0wseUJBQXlCO1lBQ3pCLHlDQUF5QztZQUN6QyxnQ0FBZ0M7WUFDaEMsMkJBQTJCO1lBQzNCLHFCQUFxQjtTQUN0QixDQUFDO0lBQ0osQ0FBQztJQUVELElBQXVCLGtCQUFrQjtRQUN2QyxPQUFPO1lBQ0wsYUFBYSxFQUFFO2dCQUNiLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLGtCQUFrQixDQUFDO2FBQ2xEO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUF1QixpQkFBaUI7UUFDdEMsT0FBTztZQUNMLE1BQU0sRUFBRSxRQUFRO1NBQ2pCLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBdUIsd0JBQXdCO1FBQzdDLE1BQU0sUUFBUSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE9BQU8sQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQXVCLFVBQVU7UUFDL0IsT0FBTztZQUNMLGtCQUFrQixFQUFFO2dCQUNsQixzREFBc0Q7Z0JBQ3RELHlEQUF5RDtnQkFDekQsRUFBRTtnQkFDRixxQ0FBcUM7Z0JBQ3JDLGlEQUFpRDtnQkFDakQsWUFBWTtnQkFDWixvQkFBb0I7Z0JBQ3BCLGlDQUFpQztnQkFDakMsaUJBQWlCO2dCQUNqQixpSEFBaUg7Z0JBQ2pILFFBQVE7Z0JBQ1IseURBQXlEO2dCQUN6RCwyREFBMkQ7Z0JBQzNELE1BQU07Z0JBQ04sd0ZBQXdGO2dCQUN4RixJQUFJO2dCQUNKLEVBQUU7Z0JBQ0YsK0JBQStCO2FBQ2hDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFZSxjQUFjO1FBQzVCLElBQUksSUFBQSxzQkFBYyxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUF3QixDQUFDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUM1RixJQUFJLENBQUMsT0FBd0IsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzlFLElBQUksQ0FBQyxPQUF3QixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLE9BQXdCLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2xHLENBQUM7SUFDSCxDQUFDO0lBRWUsV0FBVztRQUN6QixNQUFNLFFBQVEsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUU7WUFDbkMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ2pDLENBQUMsQ0FBQztJQUNMLENBQUM7O0FBckVILG9EQXNFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHRGaWxlIH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IFByb2plY3RUeXBlcyB9IGZyb20gJy4uL3R5cGVzL3Byb2plY3QnO1xuaW1wb3J0IHsgaXNWYWxpZFByb2plY3QgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IENvbW1pdExpbnQgY29uZmlndXJhdGlvbi5cbiAqXG4gKiBUaGlzIGNsYXNzIGFjdHMgYXMgYSBiYXNlIGZvciBoYW5kbGluZyBDb21taXRMaW50IGNvbmZpZ3VyYXRpb24gd2l0aGluIHByb2plY3RzLlxuICovXG5leHBvcnQgY2xhc3MgQ29tbWl0TGludENvbmZpZ0Jhc2UgZXh0ZW5kcyBDb25maWcge1xuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXG4gICAgICAnQGNvbW1pdGxpbnQvY2xpQF4xOS42LjEnLFxuICAgICAgJ0Bjb21taXRsaW50L2NvbmZpZy1jb252ZW50aW9uYWxAXjE5LjYuMCcsXG4gICAgICAnQGNvbW1pdGxpbnQvcHJvbXB0LWNsaUBeMTkuNy4wJyxcbiAgICAgICdAY29tbWl0bGludC90eXBlc0BeMTkuNS4wJyxcbiAgICAgICdsaW50LXN0YWdlZEBeMTUuMy4wJyxcbiAgICBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2V0dGluZ3MoKTogU2V0dGluZ3Mge1xuICAgIHJldHVybiB7XG4gICAgICAnbGludC1zdGFnZWQnOiB7XG4gICAgICAgICcqKi8qLnRzJzogWyducG0gcnVuIGVzbGludCcsICducG0gcnVuIHByZXR0aWVyJ10sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxTY3JpcHRzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIHJldHVybiB7XG4gICAgICBjb21taXQ6ICdjb21taXQnLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZSlbMF07XG4gICAgcmV0dXJuIFtgLyR7ZmlsZVBhdGh9YF07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGNvbmZpZ0ZpbGUoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5jb21taXRsaW50cmMudHMnOiBbXG4gICAgICAgIFwiaW1wb3J0IHR5cGUgeyBVc2VyQ29uZmlnIH0gZnJvbSAnQGNvbW1pdGxpbnQvdHlwZXMnO1wiLFxuICAgICAgICBcImltcG9ydCB7IFJ1bGVDb25maWdTZXZlcml0eSB9IGZyb20gJ0Bjb21taXRsaW50L3R5cGVzJztcIixcbiAgICAgICAgJycsXG4gICAgICAgICdjb25zdCBDb25maWd1cmF0aW9uOiBVc2VyQ29uZmlnID0geycsXG4gICAgICAgIFwiICBleHRlbmRzOiBbJ0Bjb21taXRsaW50L2NvbmZpZy1jb252ZW50aW9uYWwnXSxcIixcbiAgICAgICAgJyAgcnVsZXM6IHsnLFxuICAgICAgICBcIiAgICAndHlwZS1lbnVtJzogW1wiLFxuICAgICAgICAnICAgICAgUnVsZUNvbmZpZ1NldmVyaXR5LkVycm9yLCcsXG4gICAgICAgIFwiICAgICAgJ2Fsd2F5cycsXCIsXG4gICAgICAgIFwiICAgICAgWydidWlsZCcsICdjaG9yZScsICdjaScsICdkb2NzJywgJ2ZlYXQnLCAnZml4JywgJ3BlcmYnLCAncmVmYWN0b3InLCAncmV2ZXJ0JywgJ3N0eWxlJywgJ3Rlc3QnLCAnZGVsZXRlJ10sXCIsXG4gICAgICAgICcgICAgXSwnLFxuICAgICAgICBcIiAgICAnc2NvcGUtZW1wdHknOiBbUnVsZUNvbmZpZ1NldmVyaXR5LkVycm9yLCAnbmV2ZXInXSxcIixcbiAgICAgICAgXCIgICAgJ3N1YmplY3QtZW1wdHknOiBbUnVsZUNvbmZpZ1NldmVyaXR5LkVycm9yLCAnbmV2ZXInXSxcIixcbiAgICAgICAgJyAgfSwnLFxuICAgICAgICBcIiAgaGVscFVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jb252ZW50aW9uYWwtY2hhbmdlbG9nL2NvbW1pdGxpbnQvI3doYXQtaXMtY29tbWl0bGludCcsXCIsXG4gICAgICAgICd9OycsXG4gICAgICAgICcnLFxuICAgICAgICAnZXhwb3J0IGRlZmF1bHQgQ29uZmlndXJhdGlvbjsnLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHJlZ2lzdGVyQ29uZmlnKCk6IHZvaWQge1xuICAgIGlmIChpc1ZhbGlkUHJvamVjdCh0aGlzLnByb2plY3QpKSB7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykubnBtQ29uZmlnPy5hZGREZXZEZXBlbmRlbmNpZXModGhpcy5hZGRpdGlvbmFsRGV2RGVwZW5kZW5jaWVzKTtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5ucG1Db25maWc/LmFkZFNldHRpbmdzKHRoaXMuYWRkaXRpb25hbFNldHRpbmdzKTtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5ucG1Db25maWc/LmFkZFNjcmlwdHModGhpcy5hZGRpdGlvbmFsU2NyaXB0cyk7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykucHJldHRpZXJDb25maWc/LmFkZElnbm9yZVBhdHRlcm5zKHRoaXMuYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgYXBwbHlDb25maWcoKTogdm9pZCB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZSlbMF07XG4gICAgbmV3IFRleHRGaWxlKHRoaXMucHJvamVjdCwgZmlsZVBhdGgsIHtcbiAgICAgIGxpbmVzOiB0aGlzLmNvbmZpZ0ZpbGVbZmlsZVBhdGhdLFxuICAgIH0pO1xuICB9XG59XG4iXX0=
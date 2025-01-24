"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitLintConfigBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const config_1 = require("../config");
const utils_1 = require("../../util/utils");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWl0bGludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYXNlL2NvbmZpZy9jb21taXRsaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQWtDO0FBQ2xDLHNDQUFtQztBQUVuQyw0Q0FBa0Q7QUFHbEQ7Ozs7R0FJRztBQUNILE1BQWEsb0JBQXFCLFNBQVEsZUFBTTtJQUM5QyxJQUF1Qix5QkFBeUI7UUFDOUMsT0FBTztZQUNMLHlCQUF5QjtZQUN6Qix5Q0FBeUM7WUFDekMsZ0NBQWdDO1lBQ2hDLDJCQUEyQjtZQUMzQixxQkFBcUI7U0FDdEIsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUF1QixrQkFBa0I7UUFDdkMsT0FBTztZQUNMLGFBQWEsRUFBRTtnQkFDYixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBQzthQUNsRDtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBdUIsaUJBQWlCO1FBQ3RDLE9BQU87WUFDTCxNQUFNLEVBQUUsUUFBUTtTQUNqQixDQUFDO0lBQ0osQ0FBQztJQUVELElBQXVCLHdCQUF3QjtRQUM3QyxNQUFNLFFBQVEsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxPQUFPLENBQUMsSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUF1QixVQUFVO1FBQy9CLE9BQU87WUFDTCxrQkFBa0IsRUFBRTtnQkFDbEIsc0RBQXNEO2dCQUN0RCx5REFBeUQ7Z0JBQ3pELEVBQUU7Z0JBQ0YscUNBQXFDO2dCQUNyQyxpREFBaUQ7Z0JBQ2pELFlBQVk7Z0JBQ1osb0JBQW9CO2dCQUNwQixpQ0FBaUM7Z0JBQ2pDLGlCQUFpQjtnQkFDakIsaUhBQWlIO2dCQUNqSCxRQUFRO2dCQUNSLHlEQUF5RDtnQkFDekQsMkRBQTJEO2dCQUMzRCxNQUFNO2dCQUNOLHdGQUF3RjtnQkFDeEYsSUFBSTtnQkFDSixFQUFFO2dCQUNGLCtCQUErQjthQUNoQztTQUNGLENBQUM7SUFDSixDQUFDO0lBRWUsY0FBYztRQUM1QixJQUFJLElBQUEsc0JBQWMsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsT0FBd0IsQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDNUYsSUFBSSxDQUFDLE9BQXdCLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUM5RSxJQUFJLENBQUMsT0FBd0IsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxPQUF3QixDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNsRyxDQUFDO0lBQ0gsQ0FBQztJQUVlLFdBQVc7UUFDekIsTUFBTSxRQUFRLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxpQkFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFO1lBQ25DLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBYTtTQUM3QyxDQUFDLENBQUM7SUFDTCxDQUFDOztBQXJFSCxvREFzRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0RmlsZSB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgUHJvamVjdFR5cGVzIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcy9wcm9qZWN0JztcbmltcG9ydCB7IGlzVmFsaWRQcm9qZWN0IH0gZnJvbSAnLi4vLi4vdXRpbC91dGlscyc7XG5pbXBvcnQgeyBDb25maWdGaWxlLCBTZXR0aW5ncyB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMvdHlwZXMnO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgQ29tbWl0TGludCBjb25maWd1cmF0aW9uLlxuICpcbiAqIFRoaXMgY2xhc3MgYWN0cyBhcyBhIGJhc2UgZm9yIGhhbmRsaW5nIENvbW1pdExpbnQgY29uZmlndXJhdGlvbiB3aXRoaW4gcHJvamVjdHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb21taXRMaW50Q29uZmlnQmFzZSBleHRlbmRzIENvbmZpZyB7XG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbERldkRlcGVuZGVuY2llcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdAY29tbWl0bGludC9jbGlAXjE5LjYuMScsXG4gICAgICAnQGNvbW1pdGxpbnQvY29uZmlnLWNvbnZlbnRpb25hbEBeMTkuNi4wJyxcbiAgICAgICdAY29tbWl0bGludC9wcm9tcHQtY2xpQF4xOS43LjAnLFxuICAgICAgJ0Bjb21taXRsaW50L3R5cGVzQF4xOS41LjAnLFxuICAgICAgJ2xpbnQtc3RhZ2VkQF4xNS4zLjAnLFxuICAgIF07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxTZXR0aW5ncygpOiBTZXR0aW5ncyB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdsaW50LXN0YWdlZCc6IHtcbiAgICAgICAgJyoqLyoudHMnOiBbJ25wbSBydW4gZXNsaW50JywgJ25wbSBydW4gcHJldHRpZXInXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbFNjcmlwdHMoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbW1pdDogJ2NvbW1pdCcsXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlKVswXTtcbiAgICByZXR1cm4gW2AvJHtmaWxlUGF0aH1gXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgY29uZmlnRmlsZSgpOiBDb25maWdGaWxlIHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5jb21taXRsaW50cmMudHMnOiBbXG4gICAgICAgIFwiaW1wb3J0IHR5cGUgeyBVc2VyQ29uZmlnIH0gZnJvbSAnQGNvbW1pdGxpbnQvdHlwZXMnO1wiLFxuICAgICAgICBcImltcG9ydCB7IFJ1bGVDb25maWdTZXZlcml0eSB9IGZyb20gJ0Bjb21taXRsaW50L3R5cGVzJztcIixcbiAgICAgICAgJycsXG4gICAgICAgICdjb25zdCBDb25maWd1cmF0aW9uOiBVc2VyQ29uZmlnID0geycsXG4gICAgICAgIFwiICBleHRlbmRzOiBbJ0Bjb21taXRsaW50L2NvbmZpZy1jb252ZW50aW9uYWwnXSxcIixcbiAgICAgICAgJyAgcnVsZXM6IHsnLFxuICAgICAgICBcIiAgICAndHlwZS1lbnVtJzogW1wiLFxuICAgICAgICAnICAgICAgUnVsZUNvbmZpZ1NldmVyaXR5LkVycm9yLCcsXG4gICAgICAgIFwiICAgICAgJ2Fsd2F5cycsXCIsXG4gICAgICAgIFwiICAgICAgWydidWlsZCcsICdjaG9yZScsICdjaScsICdkb2NzJywgJ2ZlYXQnLCAnZml4JywgJ3BlcmYnLCAncmVmYWN0b3InLCAncmV2ZXJ0JywgJ3N0eWxlJywgJ3Rlc3QnLCAnZGVsZXRlJ10sXCIsXG4gICAgICAgICcgICAgXSwnLFxuICAgICAgICBcIiAgICAnc2NvcGUtZW1wdHknOiBbUnVsZUNvbmZpZ1NldmVyaXR5LkVycm9yLCAnbmV2ZXInXSxcIixcbiAgICAgICAgXCIgICAgJ3N1YmplY3QtZW1wdHknOiBbUnVsZUNvbmZpZ1NldmVyaXR5LkVycm9yLCAnbmV2ZXInXSxcIixcbiAgICAgICAgJyAgfSwnLFxuICAgICAgICBcIiAgaGVscFVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jb252ZW50aW9uYWwtY2hhbmdlbG9nL2NvbW1pdGxpbnQvI3doYXQtaXMtY29tbWl0bGludCcsXCIsXG4gICAgICAgICd9OycsXG4gICAgICAgICcnLFxuICAgICAgICAnZXhwb3J0IGRlZmF1bHQgQ29uZmlndXJhdGlvbjsnLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHJlZ2lzdGVyQ29uZmlnKCk6IHZvaWQge1xuICAgIGlmIChpc1ZhbGlkUHJvamVjdCh0aGlzLnByb2plY3QpKSB7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykubnBtQ29uZmlnPy5hZGREZXZEZXBlbmRlbmNpZXModGhpcy5hZGRpdGlvbmFsRGV2RGVwZW5kZW5jaWVzKTtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5ucG1Db25maWc/LmFkZFNldHRpbmdzKHRoaXMuYWRkaXRpb25hbFNldHRpbmdzKTtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5ucG1Db25maWc/LmFkZFNjcmlwdHModGhpcy5hZGRpdGlvbmFsU2NyaXB0cyk7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykucHJldHRpZXJDb25maWc/LmFkZElnbm9yZVBhdHRlcm5zKHRoaXMuYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgYXBwbHlDb25maWcoKTogdm9pZCB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZSlbMF07XG4gICAgbmV3IFRleHRGaWxlKHRoaXMucHJvamVjdCwgZmlsZVBhdGgsIHtcbiAgICAgIGxpbmVzOiB0aGlzLmNvbmZpZ0ZpbGVbZmlsZVBhdGhdIGFzIHN0cmluZ1tdLFxuICAgIH0pO1xuICB9XG59XG4iXX0=
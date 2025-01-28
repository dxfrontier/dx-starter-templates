"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitLintConfigBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const config_1 = require("../config");
const utils_1 = require("../../util/utils");
const constants_1 = require("../../util/constants");
/**
 * Base class for implementing all relevant CommitLint configuration.
 *
 * This class acts as a base for handling CommitLint configuration within projects.
 */
class CommitLintConfigBase extends config_1.Config {
    get additionalDevDependencies() {
        return [
            `${constants_1.constants['@commitlint/cli'].NAME}@${constants_1.constants['@commitlint/cli'].VERSION}`,
            `${constants_1.constants['@commitlint/config-conventional'].NAME}@${constants_1.constants['@commitlint/config-conventional'].VERSION}`,
            `${constants_1.constants['@commitlint/prompt-cli'].NAME}@${constants_1.constants['@commitlint/prompt-cli'].VERSION}`,
            `${constants_1.constants['@commitlint/types'].NAME}@${constants_1.constants['@commitlint/types'].VERSION}`,
            `${constants_1.constants['lint-staged'].NAME}@${constants_1.constants['lint-staged'].VERSION}`,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWl0bGludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYXNlL2NvbmZpZy9jb21taXRsaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQWtDO0FBQ2xDLHNDQUFtQztBQUVuQyw0Q0FBa0Q7QUFFbEQsb0RBQWlEO0FBRWpEOzs7O0dBSUc7QUFDSCxNQUFhLG9CQUFxQixTQUFRLGVBQU07SUFDOUMsSUFBdUIseUJBQXlCO1FBQzlDLE9BQU87WUFDTCxHQUFHLHFCQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLElBQUkscUJBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUM5RSxHQUFHLHFCQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxJQUFJLElBQUkscUJBQVMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUM5RyxHQUFHLHFCQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxJQUFJLElBQUkscUJBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUM1RixHQUFHLHFCQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLElBQUkscUJBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUNsRixHQUFHLHFCQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxJQUFJLHFCQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxFQUFFO1NBQ3ZFLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBdUIsa0JBQWtCO1FBQ3ZDLE9BQU87WUFDTCxhQUFhLEVBQUU7Z0JBQ2IsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUM7YUFDbEQ7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELElBQXVCLGlCQUFpQjtRQUN0QyxPQUFPO1lBQ0wsTUFBTSxFQUFFLFFBQVE7U0FDakIsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUF1Qix3QkFBd0I7UUFDN0MsTUFBTSxRQUFRLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsT0FBTyxDQUFDLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBdUIsVUFBVTtRQUMvQixPQUFPO1lBQ0wsa0JBQWtCLEVBQUU7Z0JBQ2xCLHNEQUFzRDtnQkFDdEQseURBQXlEO2dCQUN6RCxFQUFFO2dCQUNGLHFDQUFxQztnQkFDckMsaURBQWlEO2dCQUNqRCxZQUFZO2dCQUNaLG9CQUFvQjtnQkFDcEIsaUNBQWlDO2dCQUNqQyxpQkFBaUI7Z0JBQ2pCLGlIQUFpSDtnQkFDakgsUUFBUTtnQkFDUix5REFBeUQ7Z0JBQ3pELDJEQUEyRDtnQkFDM0QsTUFBTTtnQkFDTix3RkFBd0Y7Z0JBQ3hGLElBQUk7Z0JBQ0osRUFBRTtnQkFDRiwrQkFBK0I7YUFDaEM7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVlLGNBQWM7UUFDNUIsSUFBSSxJQUFBLHNCQUFjLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLE9BQXdCLENBQUMsU0FBUyxFQUFFLGtCQUFrQixDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQzVGLElBQUksQ0FBQyxPQUF3QixDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDOUUsSUFBSSxDQUFDLE9BQXdCLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsT0FBd0IsQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDbEcsQ0FBQztJQUNILENBQUM7SUFFZSxXQUFXO1FBQ3pCLE1BQU0sUUFBUSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksaUJBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRTtZQUNuQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQWE7U0FDN0MsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7QUFyRUgsb0RBc0VDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dEZpbGUgfSBmcm9tICdwcm9qZW4nO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IFByb2plY3RUeXBlcyB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMvcHJvamVjdCc7XG5pbXBvcnQgeyBpc1ZhbGlkUHJvamVjdCB9IGZyb20gJy4uLy4uL3V0aWwvdXRpbHMnO1xuaW1wb3J0IHsgQ29uZmlnRmlsZSwgU2V0dGluZ3MgfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzL3R5cGVzJztcbmltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gJy4uLy4uL3V0aWwvY29uc3RhbnRzJztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IENvbW1pdExpbnQgY29uZmlndXJhdGlvbi5cbiAqXG4gKiBUaGlzIGNsYXNzIGFjdHMgYXMgYSBiYXNlIGZvciBoYW5kbGluZyBDb21taXRMaW50IGNvbmZpZ3VyYXRpb24gd2l0aGluIHByb2plY3RzLlxuICovXG5leHBvcnQgY2xhc3MgQ29tbWl0TGludENvbmZpZ0Jhc2UgZXh0ZW5kcyBDb25maWcge1xuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXG4gICAgICBgJHtjb25zdGFudHNbJ0Bjb21taXRsaW50L2NsaSddLk5BTUV9QCR7Y29uc3RhbnRzWydAY29tbWl0bGludC9jbGknXS5WRVJTSU9OfWAsXG4gICAgICBgJHtjb25zdGFudHNbJ0Bjb21taXRsaW50L2NvbmZpZy1jb252ZW50aW9uYWwnXS5OQU1FfUAke2NvbnN0YW50c1snQGNvbW1pdGxpbnQvY29uZmlnLWNvbnZlbnRpb25hbCddLlZFUlNJT059YCxcbiAgICAgIGAke2NvbnN0YW50c1snQGNvbW1pdGxpbnQvcHJvbXB0LWNsaSddLk5BTUV9QCR7Y29uc3RhbnRzWydAY29tbWl0bGludC9wcm9tcHQtY2xpJ10uVkVSU0lPTn1gLFxuICAgICAgYCR7Y29uc3RhbnRzWydAY29tbWl0bGludC90eXBlcyddLk5BTUV9QCR7Y29uc3RhbnRzWydAY29tbWl0bGludC90eXBlcyddLlZFUlNJT059YCxcbiAgICAgIGAke2NvbnN0YW50c1snbGludC1zdGFnZWQnXS5OQU1FfUAke2NvbnN0YW50c1snbGludC1zdGFnZWQnXS5WRVJTSU9OfWAsXG4gICAgXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbFNldHRpbmdzKCk6IFNldHRpbmdzIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2xpbnQtc3RhZ2VkJzoge1xuICAgICAgICAnKiovKi50cyc6IFsnbnBtIHJ1biBlc2xpbnQnLCAnbnBtIHJ1biBwcmV0dGllciddLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2NyaXB0cygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29tbWl0OiAnY29tbWl0JyxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsSWdub3JlUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGZpbGVQYXRoOiBzdHJpbmcgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ0ZpbGUpWzBdO1xuICAgIHJldHVybiBbYC8ke2ZpbGVQYXRofWBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBjb25maWdGaWxlKCk6IENvbmZpZ0ZpbGUge1xuICAgIHJldHVybiB7XG4gICAgICAnLmNvbW1pdGxpbnRyYy50cyc6IFtcbiAgICAgICAgXCJpbXBvcnQgdHlwZSB7IFVzZXJDb25maWcgfSBmcm9tICdAY29tbWl0bGludC90eXBlcyc7XCIsXG4gICAgICAgIFwiaW1wb3J0IHsgUnVsZUNvbmZpZ1NldmVyaXR5IH0gZnJvbSAnQGNvbW1pdGxpbnQvdHlwZXMnO1wiLFxuICAgICAgICAnJyxcbiAgICAgICAgJ2NvbnN0IENvbmZpZ3VyYXRpb246IFVzZXJDb25maWcgPSB7JyxcbiAgICAgICAgXCIgIGV4dGVuZHM6IFsnQGNvbW1pdGxpbnQvY29uZmlnLWNvbnZlbnRpb25hbCddLFwiLFxuICAgICAgICAnICBydWxlczogeycsXG4gICAgICAgIFwiICAgICd0eXBlLWVudW0nOiBbXCIsXG4gICAgICAgICcgICAgICBSdWxlQ29uZmlnU2V2ZXJpdHkuRXJyb3IsJyxcbiAgICAgICAgXCIgICAgICAnYWx3YXlzJyxcIixcbiAgICAgICAgXCIgICAgICBbJ2J1aWxkJywgJ2Nob3JlJywgJ2NpJywgJ2RvY3MnLCAnZmVhdCcsICdmaXgnLCAncGVyZicsICdyZWZhY3RvcicsICdyZXZlcnQnLCAnc3R5bGUnLCAndGVzdCcsICdkZWxldGUnXSxcIixcbiAgICAgICAgJyAgICBdLCcsXG4gICAgICAgIFwiICAgICdzY29wZS1lbXB0eSc6IFtSdWxlQ29uZmlnU2V2ZXJpdHkuRXJyb3IsICduZXZlciddLFwiLFxuICAgICAgICBcIiAgICAnc3ViamVjdC1lbXB0eSc6IFtSdWxlQ29uZmlnU2V2ZXJpdHkuRXJyb3IsICduZXZlciddLFwiLFxuICAgICAgICAnICB9LCcsXG4gICAgICAgIFwiICBoZWxwVXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2NvbnZlbnRpb25hbC1jaGFuZ2Vsb2cvY29tbWl0bGludC8jd2hhdC1pcy1jb21taXRsaW50JyxcIixcbiAgICAgICAgJ307JyxcbiAgICAgICAgJycsXG4gICAgICAgICdleHBvcnQgZGVmYXVsdCBDb25maWd1cmF0aW9uOycsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcmVnaXN0ZXJDb25maWcoKTogdm9pZCB7XG4gICAgaWYgKGlzVmFsaWRQcm9qZWN0KHRoaXMucHJvamVjdCkpIHtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5ucG1Db25maWc/LmFkZERldkRlcGVuZGVuY2llcyh0aGlzLmFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMpO1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLm5wbUNvbmZpZz8uYWRkU2V0dGluZ3ModGhpcy5hZGRpdGlvbmFsU2V0dGluZ3MpO1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLm5wbUNvbmZpZz8uYWRkU2NyaXB0cyh0aGlzLmFkZGl0aW9uYWxTY3JpcHRzKTtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5wcmV0dGllckNvbmZpZz8uYWRkSWdub3JlUGF0dGVybnModGhpcy5hZGRpdGlvbmFsSWdub3JlUGF0dGVybnMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBhcHBseUNvbmZpZygpOiB2b2lkIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlKVswXTtcbiAgICBuZXcgVGV4dEZpbGUodGhpcy5wcm9qZWN0LCBmaWxlUGF0aCwge1xuICAgICAgbGluZXM6IHRoaXMuY29uZmlnRmlsZVtmaWxlUGF0aF0gYXMgc3RyaW5nW10sXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitLintConfigBase = void 0;
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
        if (utils_1.util.isValidProject(this.project)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWl0bGludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYXNlL2NvbmZpZy9jb21taXRsaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFrQztBQUNsQyxzQ0FBbUM7QUFFbkMsNENBQXdDO0FBRXhDLG9EQUFpRDtBQUVqRDs7OztHQUlHO0FBQ0gsTUFBYSxvQkFBcUIsU0FBUSxlQUFNO0lBQzlDLElBQXVCLHlCQUF5QjtRQUM5QyxPQUFPO1lBQ0wsR0FBRyxxQkFBUyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxJQUFJLHFCQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDOUUsR0FBRyxxQkFBUyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsSUFBSSxJQUFJLHFCQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDOUcsR0FBRyxxQkFBUyxDQUFDLHdCQUF3QixDQUFDLENBQUMsSUFBSSxJQUFJLHFCQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDNUYsR0FBRyxxQkFBUyxDQUFDLG1CQUFtQixDQUFDLENBQUMsSUFBSSxJQUFJLHFCQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDbEYsR0FBRyxxQkFBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksSUFBSSxxQkFBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sRUFBRTtTQUN2RSxDQUFDO0lBQ0osQ0FBQztJQUVELElBQXVCLGtCQUFrQjtRQUN2QyxPQUFPO1lBQ0wsYUFBYSxFQUFFO2dCQUNiLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLGtCQUFrQixDQUFDO2FBQ2xEO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUF1QixpQkFBaUI7UUFDdEMsT0FBTztZQUNMLE1BQU0sRUFBRSxRQUFRO1NBQ2pCLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBdUIsd0JBQXdCO1FBQzdDLE1BQU0sUUFBUSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE9BQU8sQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQXVCLFVBQVU7UUFDL0IsT0FBTztZQUNMLGtCQUFrQixFQUFFO2dCQUNsQixzREFBc0Q7Z0JBQ3RELHlEQUF5RDtnQkFDekQsRUFBRTtnQkFDRixxQ0FBcUM7Z0JBQ3JDLGlEQUFpRDtnQkFDakQsWUFBWTtnQkFDWixvQkFBb0I7Z0JBQ3BCLGlDQUFpQztnQkFDakMsaUJBQWlCO2dCQUNqQixpSEFBaUg7Z0JBQ2pILFFBQVE7Z0JBQ1IseURBQXlEO2dCQUN6RCwyREFBMkQ7Z0JBQzNELE1BQU07Z0JBQ04sd0ZBQXdGO2dCQUN4RixJQUFJO2dCQUNKLEVBQUU7Z0JBQ0YsK0JBQStCO2FBQ2hDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFZSxjQUFjO1FBQzVCLElBQUksWUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsT0FBd0IsQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDNUYsSUFBSSxDQUFDLE9BQXdCLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUM5RSxJQUFJLENBQUMsT0FBd0IsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxPQUF3QixDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNsRyxDQUFDO0lBQ0gsQ0FBQztJQUVlLFdBQVc7UUFDekIsTUFBTSxRQUFRLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxpQkFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFO1lBQ25DLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBYTtTQUM3QyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUF0RUQsb0RBc0VDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dEZpbGUgfSBmcm9tICdwcm9qZW4nO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IFByb2plY3RUeXBlcyB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMvcHJvamVjdCc7XG5pbXBvcnQgeyB1dGlsIH0gZnJvbSAnLi4vLi4vdXRpbC91dGlscyc7XG5pbXBvcnQgeyBDb25maWdGaWxlLCBTZXR0aW5ncyB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zdGFudHMnO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgQ29tbWl0TGludCBjb25maWd1cmF0aW9uLlxuICpcbiAqIFRoaXMgY2xhc3MgYWN0cyBhcyBhIGJhc2UgZm9yIGhhbmRsaW5nIENvbW1pdExpbnQgY29uZmlndXJhdGlvbiB3aXRoaW4gcHJvamVjdHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb21taXRMaW50Q29uZmlnQmFzZSBleHRlbmRzIENvbmZpZyB7XG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbERldkRlcGVuZGVuY2llcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGAke2NvbnN0YW50c1snQGNvbW1pdGxpbnQvY2xpJ10uTkFNRX1AJHtjb25zdGFudHNbJ0Bjb21taXRsaW50L2NsaSddLlZFUlNJT059YCxcbiAgICAgIGAke2NvbnN0YW50c1snQGNvbW1pdGxpbnQvY29uZmlnLWNvbnZlbnRpb25hbCddLk5BTUV9QCR7Y29uc3RhbnRzWydAY29tbWl0bGludC9jb25maWctY29udmVudGlvbmFsJ10uVkVSU0lPTn1gLFxuICAgICAgYCR7Y29uc3RhbnRzWydAY29tbWl0bGludC9wcm9tcHQtY2xpJ10uTkFNRX1AJHtjb25zdGFudHNbJ0Bjb21taXRsaW50L3Byb21wdC1jbGknXS5WRVJTSU9OfWAsXG4gICAgICBgJHtjb25zdGFudHNbJ0Bjb21taXRsaW50L3R5cGVzJ10uTkFNRX1AJHtjb25zdGFudHNbJ0Bjb21taXRsaW50L3R5cGVzJ10uVkVSU0lPTn1gLFxuICAgICAgYCR7Y29uc3RhbnRzWydsaW50LXN0YWdlZCddLk5BTUV9QCR7Y29uc3RhbnRzWydsaW50LXN0YWdlZCddLlZFUlNJT059YCxcbiAgICBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2V0dGluZ3MoKTogU2V0dGluZ3Mge1xuICAgIHJldHVybiB7XG4gICAgICAnbGludC1zdGFnZWQnOiB7XG4gICAgICAgICcqKi8qLnRzJzogWyducG0gcnVuIGVzbGludCcsICducG0gcnVuIHByZXR0aWVyJ10sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxTY3JpcHRzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIHJldHVybiB7XG4gICAgICBjb21taXQ6ICdjb21taXQnLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZSlbMF07XG4gICAgcmV0dXJuIFtgLyR7ZmlsZVBhdGh9YF07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGNvbmZpZ0ZpbGUoKTogQ29uZmlnRmlsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuY29tbWl0bGludHJjLnRzJzogW1xuICAgICAgICBcImltcG9ydCB0eXBlIHsgVXNlckNvbmZpZyB9IGZyb20gJ0Bjb21taXRsaW50L3R5cGVzJztcIixcbiAgICAgICAgXCJpbXBvcnQgeyBSdWxlQ29uZmlnU2V2ZXJpdHkgfSBmcm9tICdAY29tbWl0bGludC90eXBlcyc7XCIsXG4gICAgICAgICcnLFxuICAgICAgICAnY29uc3QgQ29uZmlndXJhdGlvbjogVXNlckNvbmZpZyA9IHsnLFxuICAgICAgICBcIiAgZXh0ZW5kczogWydAY29tbWl0bGludC9jb25maWctY29udmVudGlvbmFsJ10sXCIsXG4gICAgICAgICcgIHJ1bGVzOiB7JyxcbiAgICAgICAgXCIgICAgJ3R5cGUtZW51bSc6IFtcIixcbiAgICAgICAgJyAgICAgIFJ1bGVDb25maWdTZXZlcml0eS5FcnJvciwnLFxuICAgICAgICBcIiAgICAgICdhbHdheXMnLFwiLFxuICAgICAgICBcIiAgICAgIFsnYnVpbGQnLCAnY2hvcmUnLCAnY2knLCAnZG9jcycsICdmZWF0JywgJ2ZpeCcsICdwZXJmJywgJ3JlZmFjdG9yJywgJ3JldmVydCcsICdzdHlsZScsICd0ZXN0JywgJ2RlbGV0ZSddLFwiLFxuICAgICAgICAnICAgIF0sJyxcbiAgICAgICAgXCIgICAgJ3Njb3BlLWVtcHR5JzogW1J1bGVDb25maWdTZXZlcml0eS5FcnJvciwgJ25ldmVyJ10sXCIsXG4gICAgICAgIFwiICAgICdzdWJqZWN0LWVtcHR5JzogW1J1bGVDb25maWdTZXZlcml0eS5FcnJvciwgJ25ldmVyJ10sXCIsXG4gICAgICAgICcgIH0sJyxcbiAgICAgICAgXCIgIGhlbHBVcmw6ICdodHRwczovL2dpdGh1Yi5jb20vY29udmVudGlvbmFsLWNoYW5nZWxvZy9jb21taXRsaW50LyN3aGF0LWlzLWNvbW1pdGxpbnQnLFwiLFxuICAgICAgICAnfTsnLFxuICAgICAgICAnJyxcbiAgICAgICAgJ2V4cG9ydCBkZWZhdWx0IENvbmZpZ3VyYXRpb247JyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSByZWdpc3RlckNvbmZpZygpOiB2b2lkIHtcbiAgICBpZiAodXRpbC5pc1ZhbGlkUHJvamVjdCh0aGlzLnByb2plY3QpKSB7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykubnBtQ29uZmlnPy5hZGREZXZEZXBlbmRlbmNpZXModGhpcy5hZGRpdGlvbmFsRGV2RGVwZW5kZW5jaWVzKTtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5ucG1Db25maWc/LmFkZFNldHRpbmdzKHRoaXMuYWRkaXRpb25hbFNldHRpbmdzKTtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5ucG1Db25maWc/LmFkZFNjcmlwdHModGhpcy5hZGRpdGlvbmFsU2NyaXB0cyk7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykucHJldHRpZXJDb25maWc/LmFkZElnbm9yZVBhdHRlcm5zKHRoaXMuYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgYXBwbHlDb25maWcoKTogdm9pZCB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZSlbMF07XG4gICAgbmV3IFRleHRGaWxlKHRoaXMucHJvamVjdCwgZmlsZVBhdGgsIHtcbiAgICAgIGxpbmVzOiB0aGlzLmNvbmZpZ0ZpbGVbZmlsZVBhdGhdIGFzIHN0cmluZ1tdLFxuICAgIH0pO1xuICB9XG59XG4iXX0=
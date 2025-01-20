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
    /**
     * Gets the additional development dependencies required for configuration.
     *
     * @returns A list of package names with version specifications.
     */
    get additionalDevDependencies() {
        return [
            '@commitlint/cli@^19.6.1',
            '@commitlint/config-conventional@^19.6.0',
            '@commitlint/prompt-cli@^19.7.0',
            '@commitlint/types@^19.5.0',
            'lint-staged@^15.3.0',
        ];
    }
    /**
     * Gets the additional settings to be added to the project's configuration.
     *
     * @returns A settings object to be merged into the project's settings.
     */
    get additionalSettings() {
        return {
            'lint-staged': {
                '**/*.ts': ['npm run eslint', 'npm run prettier'],
            },
        };
    }
    /**
     * Gets the additional npm scripts to be added to the project's configuration.
     *
     * @returns A record of script names and their corresponding commands.
     */
    get additionalScripts() {
        return {
            commit: 'commit',
        };
    }
    /**
     * Gets additional ignore patterns to be added to the project's ignore configuration.
     *
     * @returns A list of ignore patterns.
     */
    get additionalIgnorePatterns() {
        const filePath = Object.keys(this.configFile)[0];
        return [`/${filePath}`];
    }
    /**
     * Gets the configuration file content.
     *
     * @returns An object where the key is the filename and the value is an array of file lines.
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWl0bGludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL2NvbW1pdGxpbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBa0M7QUFDbEMscUNBQWtDO0FBRWxDLG9DQUEwQztBQUUxQzs7OztHQUlHO0FBQ0gsTUFBYSxvQkFBcUIsU0FBUSxlQUFNO0lBQzlDOzs7O09BSUc7SUFDSCxJQUFjLHlCQUF5QjtRQUNyQyxPQUFPO1lBQ0wseUJBQXlCO1lBQ3pCLHlDQUF5QztZQUN6QyxnQ0FBZ0M7WUFDaEMsMkJBQTJCO1lBQzNCLHFCQUFxQjtTQUN0QixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLGtCQUFrQjtRQUM5QixPQUFPO1lBQ0wsYUFBYSxFQUFFO2dCQUNiLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLGtCQUFrQixDQUFDO2FBQ2xEO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxpQkFBaUI7UUFDN0IsT0FBTztZQUNMLE1BQU0sRUFBRSxRQUFRO1NBQ2pCLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsd0JBQXdCO1FBQ3BDLE1BQU0sUUFBUSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE9BQU8sQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLFVBQVU7UUFDdEIsT0FBTztZQUNMLGtCQUFrQixFQUFFO2dCQUNsQixzREFBc0Q7Z0JBQ3RELHlEQUF5RDtnQkFDekQsRUFBRTtnQkFDRixxQ0FBcUM7Z0JBQ3JDLGlEQUFpRDtnQkFDakQsWUFBWTtnQkFDWixvQkFBb0I7Z0JBQ3BCLGlDQUFpQztnQkFDakMsaUJBQWlCO2dCQUNqQixpSEFBaUg7Z0JBQ2pILFFBQVE7Z0JBQ1IseURBQXlEO2dCQUN6RCwyREFBMkQ7Z0JBQzNELE1BQU07Z0JBQ04sd0ZBQXdGO2dCQUN4RixJQUFJO2dCQUNKLEVBQUU7Z0JBQ0YsK0JBQStCO2FBQ2hDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFZSxjQUFjO1FBQzVCLElBQUksSUFBQSxzQkFBYyxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUF3QixDQUFDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUM1RixJQUFJLENBQUMsT0FBd0IsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzlFLElBQUksQ0FBQyxPQUF3QixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLE9BQXdCLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2xHLENBQUM7SUFDSCxDQUFDO0lBRWUsV0FBVztRQUN6QixNQUFNLFFBQVEsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUU7WUFDbkMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ2pDLENBQUMsQ0FBQztJQUNMLENBQUM7O0FBOUZILG9EQStGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHRGaWxlIH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IFByb2plY3RUeXBlcywgU2V0dGluZ3MgfSBmcm9tICcuLi90eXBlcy90eXBlcyc7XG5pbXBvcnQgeyBpc1ZhbGlkUHJvamVjdCB9IGZyb20gJy4uL3V0aWxzJztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IENvbW1pdExpbnQgY29uZmlndXJhdGlvbi5cbiAqXG4gKiBUaGlzIGNsYXNzIGFjdHMgYXMgYSBiYXNlIGZvciBoYW5kbGluZyBDb21taXRMaW50IGNvbmZpZ3VyYXRpb24gd2l0aGluIHByb2plY3RzLlxuICovXG5leHBvcnQgY2xhc3MgQ29tbWl0TGludENvbmZpZ0Jhc2UgZXh0ZW5kcyBDb25maWcge1xuICAvKipcbiAgICogR2V0cyB0aGUgYWRkaXRpb25hbCBkZXZlbG9wbWVudCBkZXBlbmRlbmNpZXMgcmVxdWlyZWQgZm9yIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIEEgbGlzdCBvZiBwYWNrYWdlIG5hbWVzIHdpdGggdmVyc2lvbiBzcGVjaWZpY2F0aW9ucy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgYWRkaXRpb25hbERldkRlcGVuZGVuY2llcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdAY29tbWl0bGludC9jbGlAXjE5LjYuMScsXG4gICAgICAnQGNvbW1pdGxpbnQvY29uZmlnLWNvbnZlbnRpb25hbEBeMTkuNi4wJyxcbiAgICAgICdAY29tbWl0bGludC9wcm9tcHQtY2xpQF4xOS43LjAnLFxuICAgICAgJ0Bjb21taXRsaW50L3R5cGVzQF4xOS41LjAnLFxuICAgICAgJ2xpbnQtc3RhZ2VkQF4xNS4zLjAnLFxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgYWRkaXRpb25hbCBzZXR0aW5ncyB0byBiZSBhZGRlZCB0byB0aGUgcHJvamVjdCdzIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIEEgc2V0dGluZ3Mgb2JqZWN0IHRvIGJlIG1lcmdlZCBpbnRvIHRoZSBwcm9qZWN0J3Mgc2V0dGluZ3MuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGFkZGl0aW9uYWxTZXR0aW5ncygpOiBTZXR0aW5ncyB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdsaW50LXN0YWdlZCc6IHtcbiAgICAgICAgJyoqLyoudHMnOiBbJ25wbSBydW4gZXNsaW50JywgJ25wbSBydW4gcHJldHRpZXInXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBhZGRpdGlvbmFsIG5wbSBzY3JpcHRzIHRvIGJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0J3MgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMgQSByZWNvcmQgb2Ygc2NyaXB0IG5hbWVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIGNvbW1hbmRzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBhZGRpdGlvbmFsU2NyaXB0cygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29tbWl0OiAnY29tbWl0JyxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYWRkaXRpb25hbCBpZ25vcmUgcGF0dGVybnMgdG8gYmUgYWRkZWQgdG8gdGhlIHByb2plY3QncyBpZ25vcmUgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMgQSBsaXN0IG9mIGlnbm9yZSBwYXR0ZXJucy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlKVswXTtcbiAgICByZXR1cm4gW2AvJHtmaWxlUGF0aH1gXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjb25maWd1cmF0aW9uIGZpbGUgY29udGVudC5cbiAgICpcbiAgICogQHJldHVybnMgQW4gb2JqZWN0IHdoZXJlIHRoZSBrZXkgaXMgdGhlIGZpbGVuYW1lIGFuZCB0aGUgdmFsdWUgaXMgYW4gYXJyYXkgb2YgZmlsZSBsaW5lcy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZSgpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnLmNvbW1pdGxpbnRyYy50cyc6IFtcbiAgICAgICAgXCJpbXBvcnQgdHlwZSB7IFVzZXJDb25maWcgfSBmcm9tICdAY29tbWl0bGludC90eXBlcyc7XCIsXG4gICAgICAgIFwiaW1wb3J0IHsgUnVsZUNvbmZpZ1NldmVyaXR5IH0gZnJvbSAnQGNvbW1pdGxpbnQvdHlwZXMnO1wiLFxuICAgICAgICAnJyxcbiAgICAgICAgJ2NvbnN0IENvbmZpZ3VyYXRpb246IFVzZXJDb25maWcgPSB7JyxcbiAgICAgICAgXCIgIGV4dGVuZHM6IFsnQGNvbW1pdGxpbnQvY29uZmlnLWNvbnZlbnRpb25hbCddLFwiLFxuICAgICAgICAnICBydWxlczogeycsXG4gICAgICAgIFwiICAgICd0eXBlLWVudW0nOiBbXCIsXG4gICAgICAgICcgICAgICBSdWxlQ29uZmlnU2V2ZXJpdHkuRXJyb3IsJyxcbiAgICAgICAgXCIgICAgICAnYWx3YXlzJyxcIixcbiAgICAgICAgXCIgICAgICBbJ2J1aWxkJywgJ2Nob3JlJywgJ2NpJywgJ2RvY3MnLCAnZmVhdCcsICdmaXgnLCAncGVyZicsICdyZWZhY3RvcicsICdyZXZlcnQnLCAnc3R5bGUnLCAndGVzdCcsICdkZWxldGUnXSxcIixcbiAgICAgICAgJyAgICBdLCcsXG4gICAgICAgIFwiICAgICdzY29wZS1lbXB0eSc6IFtSdWxlQ29uZmlnU2V2ZXJpdHkuRXJyb3IsICduZXZlciddLFwiLFxuICAgICAgICBcIiAgICAnc3ViamVjdC1lbXB0eSc6IFtSdWxlQ29uZmlnU2V2ZXJpdHkuRXJyb3IsICduZXZlciddLFwiLFxuICAgICAgICAnICB9LCcsXG4gICAgICAgIFwiICBoZWxwVXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2NvbnZlbnRpb25hbC1jaGFuZ2Vsb2cvY29tbWl0bGludC8jd2hhdC1pcy1jb21taXRsaW50JyxcIixcbiAgICAgICAgJ307JyxcbiAgICAgICAgJycsXG4gICAgICAgICdleHBvcnQgZGVmYXVsdCBDb25maWd1cmF0aW9uOycsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcmVnaXN0ZXJDb25maWcoKTogdm9pZCB7XG4gICAgaWYgKGlzVmFsaWRQcm9qZWN0KHRoaXMucHJvamVjdCkpIHtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5ucG1Db25maWc/LmFkZERldkRlcGVuZGVuY2llcyh0aGlzLmFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMpO1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLm5wbUNvbmZpZz8uYWRkU2V0dGluZ3ModGhpcy5hZGRpdGlvbmFsU2V0dGluZ3MpO1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLm5wbUNvbmZpZz8uYWRkU2NyaXB0cyh0aGlzLmFkZGl0aW9uYWxTY3JpcHRzKTtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5wcmV0dGllckNvbmZpZz8uYWRkSWdub3JlUGF0dGVybnModGhpcy5hZGRpdGlvbmFsSWdub3JlUGF0dGVybnMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBhcHBseUNvbmZpZygpOiB2b2lkIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlKVswXTtcbiAgICBuZXcgVGV4dEZpbGUodGhpcy5wcm9qZWN0LCBmaWxlUGF0aCwge1xuICAgICAgbGluZXM6IHRoaXMuY29uZmlnRmlsZVtmaWxlUGF0aF0sXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
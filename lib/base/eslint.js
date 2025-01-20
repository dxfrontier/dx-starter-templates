"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EsLintConfigBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const config_1 = require("./config");
const utils_1 = require("../utils");
/**
 * Base class for implementing all relevant EsLint configuration.
 *
 * This class acts as a base for handling EsLint configuration within projects.
 */
class EsLintConfigBase extends config_1.Config {
    constructor(project) {
        super(project);
        this.rules = this.standardRules;
        this.ignorePatterns = this.standardIgnorePatterns;
    }
    /**
     * Gets the standard linting rules for the project.
     *
     * @returns A record of rule names and their corresponding configurations.
     */
    get standardRules() {
        return {
            'no-console': 'off',
            'require-atomic-updates': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/ban-types': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/consistent-type-imports': 'off',
            '@typescript-eslint/no-empty-function': 'off',
            '@typescript-eslint/class-literal-property-style': 'off',
            '@typescript-eslint/no-empty-object-type': 'off',
        };
    }
    /**
     * Gets the standard ignore patterns for the project.
     *
     * @returns An array of file or directory patterns to be ignored by the linter.
     */
    get standardIgnorePatterns() {
        return [];
    }
    /**
     * Gets the additional development dependencies required for configuration.
     *
     * @returns A list of package names with version specifications.
     */
    get additionalDevDependencies() {
        return [
            '@typescript-eslint/eslint-plugin@^8.20.0',
            '@typescript-eslint/parser@^8.20.0',
            'eslint@^9.18.0',
            'eslint-config-prettier@^10.0.1',
            'eslint-import-resolver-typescript@^3.7.0',
            'eslint-plugin-import@^2.31.0',
            'eslint-plugin-prettier@^5.2.1',
            'typescript-eslint@^8.20.0',
        ];
    }
    /**
     * Gets the additional npm scripts to be added to the project's configuration.
     *
     * @returns A record of script names and their corresponding commands.
     */
    get additionalScripts() {
        return {
            eslint: 'eslint .',
        };
    }
    /**
     * Gets the configuration file content.
     *
     * @returns An object where the key is the filename and the value is an array of file lines.
     */
    get configFile() {
        return {
            'eslint.config.mjs': [
                "import eslint from '@eslint/js';",
                "import tseslint from 'typescript-eslint';",
                '',
                'export default tseslint.config(',
                '  eslint.configs.recommended,',
                '  ...tseslint.configs.recommended,',
                '  ...tseslint.configs.stylistic,',
                '  {',
                '    rules: {',
                ...Object.entries(this.rules).map(([rule, value]) => `      '${rule}': '${value}',`),
                '    },',
                '  },',
                '  {',
                `    ignores: [${this.ignorePatterns.map((path) => `'${path}'`).join(', ')}],`,
                '  },',
                ');',
            ],
        };
    }
    /**
     * Adds custom linting rules to the project's configuration.
     *
     * @param rules - A record of rule names and their corresponding configurations.
     */
    addRules(rules) {
        this.rules = { ...this.rules, ...rules };
    }
    /**
     * Adds custom ignore patterns to the project's configuration.
     *
     * @param patterns - An array of file or directory patterns to be ignored.
     */
    addIgnorePatterns(patterns) {
        this.ignorePatterns = [...this.ignorePatterns, ...patterns];
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
    registerConfig() {
        if ((0, utils_1.isValidProject)(this.project)) {
            this.project.npmConfig?.addDevDependencies(this.additionalDevDependencies);
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
exports.EsLintConfigBase = EsLintConfigBase;
_a = JSII_RTTI_SYMBOL_1;
EsLintConfigBase[_a] = { fqn: "@dxfrontier/projen-template-projects.EsLintConfigBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNsaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2UvZXNsaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQWtDO0FBQ2xDLHFDQUFrQztBQUVsQyxvQ0FBMEM7QUFFMUM7Ozs7R0FJRztBQUNILE1BQWEsZ0JBQWlCLFNBQVEsZUFBTTtJQUkxQyxZQUFZLE9BQXFCO1FBQy9CLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVmLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUNoQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUNwRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsYUFBYTtRQUN6QixPQUFPO1lBQ0wsWUFBWSxFQUFFLEtBQUs7WUFDbkIsd0JBQXdCLEVBQUUsS0FBSztZQUMvQiwwQ0FBMEMsRUFBRSxLQUFLO1lBQ2pELDhCQUE4QixFQUFFLEtBQUs7WUFDckMsa0RBQWtELEVBQUUsS0FBSztZQUN6RCw0Q0FBNEMsRUFBRSxLQUFLO1lBQ25ELHNDQUFzQyxFQUFFLEtBQUs7WUFDN0MsaURBQWlELEVBQUUsS0FBSztZQUN4RCx5Q0FBeUMsRUFBRSxLQUFLO1NBQ2pELENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsc0JBQXNCO1FBQ2xDLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLHlCQUF5QjtRQUNyQyxPQUFPO1lBQ0wsMENBQTBDO1lBQzFDLG1DQUFtQztZQUNuQyxnQkFBZ0I7WUFDaEIsZ0NBQWdDO1lBQ2hDLDBDQUEwQztZQUMxQyw4QkFBOEI7WUFDOUIsK0JBQStCO1lBQy9CLDJCQUEyQjtTQUM1QixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLGlCQUFpQjtRQUM3QixPQUFPO1lBQ0wsTUFBTSxFQUFFLFVBQVU7U0FDbkIsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxVQUFVO1FBQ3RCLE9BQU87WUFDTCxtQkFBbUIsRUFBRTtnQkFDbkIsa0NBQWtDO2dCQUNsQywyQ0FBMkM7Z0JBQzNDLEVBQUU7Z0JBQ0YsaUNBQWlDO2dCQUNqQywrQkFBK0I7Z0JBQy9CLG9DQUFvQztnQkFDcEMsa0NBQWtDO2dCQUNsQyxLQUFLO2dCQUNMLGNBQWM7Z0JBQ2QsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLENBQW1CLEVBQVUsRUFBRSxDQUFDLFVBQVUsSUFBSSxPQUFPLEtBQUssSUFBSSxDQUFDO2dCQUM5RyxRQUFRO2dCQUNSLE1BQU07Z0JBQ04sS0FBSztnQkFDTCxpQkFBaUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFZLEVBQVUsRUFBRSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7Z0JBQzlGLE1BQU07Z0JBQ04sSUFBSTthQUNMO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksUUFBUSxDQUFDLEtBQTZCO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGlCQUFpQixDQUFDLFFBQWtCO1FBQ3pDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsd0JBQXdCO1FBQ3BDLE1BQU0sUUFBUSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE9BQU8sQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVlLGNBQWM7UUFDNUIsSUFBSSxJQUFBLHNCQUFjLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLE9BQXdCLENBQUMsU0FBUyxFQUFFLGtCQUFrQixDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQzVGLElBQUksQ0FBQyxPQUF3QixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLE9BQXdCLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2xHLENBQUM7SUFDSCxDQUFDO0lBRWUsV0FBVztRQUN6QixNQUFNLFFBQVEsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUU7WUFDbkMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ2pDLENBQUMsQ0FBQztJQUNMLENBQUM7O0FBeklILDRDQTBJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHRGaWxlIH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IFByb2plY3RUeXBlcyB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcbmltcG9ydCB7IGlzVmFsaWRQcm9qZWN0IH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgRXNMaW50IGNvbmZpZ3VyYXRpb24uXG4gKlxuICogVGhpcyBjbGFzcyBhY3RzIGFzIGEgYmFzZSBmb3IgaGFuZGxpbmcgRXNMaW50IGNvbmZpZ3VyYXRpb24gd2l0aGluIHByb2plY3RzLlxuICovXG5leHBvcnQgY2xhc3MgRXNMaW50Q29uZmlnQmFzZSBleHRlbmRzIENvbmZpZyB7XG4gIHByb3RlY3RlZCBydWxlczogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgcHJvdGVjdGVkIGlnbm9yZVBhdHRlcm5zOiBzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBQcm9qZWN0VHlwZXMpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcblxuICAgIHRoaXMucnVsZXMgPSB0aGlzLnN0YW5kYXJkUnVsZXM7XG4gICAgdGhpcy5pZ25vcmVQYXR0ZXJucyA9IHRoaXMuc3RhbmRhcmRJZ25vcmVQYXR0ZXJucztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBzdGFuZGFyZCBsaW50aW5nIHJ1bGVzIGZvciB0aGUgcHJvamVjdC5cbiAgICpcbiAgICogQHJldHVybnMgQSByZWNvcmQgb2YgcnVsZSBuYW1lcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBjb25maWd1cmF0aW9ucy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc3RhbmRhcmRSdWxlcygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ25vLWNvbnNvbGUnOiAnb2ZmJyxcbiAgICAgICdyZXF1aXJlLWF0b21pYy11cGRhdGVzJzogJ29mZicsXG4gICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvbic6ICdvZmYnLFxuICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXMnOiAnb2ZmJyxcbiAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtZnVuY3Rpb24tcmV0dXJuLXR5cGUnOiAnb2ZmJyxcbiAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvY29uc2lzdGVudC10eXBlLWltcG9ydHMnOiAnb2ZmJyxcbiAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb24nOiAnb2ZmJyxcbiAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvY2xhc3MtbGl0ZXJhbC1wcm9wZXJ0eS1zdHlsZSc6ICdvZmYnLFxuICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1vYmplY3QtdHlwZSc6ICdvZmYnLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgc3RhbmRhcmQgaWdub3JlIHBhdHRlcm5zIGZvciB0aGUgcHJvamVjdC5cbiAgICpcbiAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgZmlsZSBvciBkaXJlY3RvcnkgcGF0dGVybnMgdG8gYmUgaWdub3JlZCBieSB0aGUgbGludGVyLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzdGFuZGFyZElnbm9yZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgYWRkaXRpb25hbCBkZXZlbG9wbWVudCBkZXBlbmRlbmNpZXMgcmVxdWlyZWQgZm9yIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIEEgbGlzdCBvZiBwYWNrYWdlIG5hbWVzIHdpdGggdmVyc2lvbiBzcGVjaWZpY2F0aW9ucy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgYWRkaXRpb25hbERldkRlcGVuZGVuY2llcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvZXNsaW50LXBsdWdpbkBeOC4yMC4wJyxcbiAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyQF44LjIwLjAnLFxuICAgICAgJ2VzbGludEBeOS4xOC4wJyxcbiAgICAgICdlc2xpbnQtY29uZmlnLXByZXR0aWVyQF4xMC4wLjEnLFxuICAgICAgJ2VzbGludC1pbXBvcnQtcmVzb2x2ZXItdHlwZXNjcmlwdEBeMy43LjAnLFxuICAgICAgJ2VzbGludC1wbHVnaW4taW1wb3J0QF4yLjMxLjAnLFxuICAgICAgJ2VzbGludC1wbHVnaW4tcHJldHRpZXJAXjUuMi4xJyxcbiAgICAgICd0eXBlc2NyaXB0LWVzbGludEBeOC4yMC4wJyxcbiAgICBdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGFkZGl0aW9uYWwgbnBtIHNjcmlwdHMgdG8gYmUgYWRkZWQgdG8gdGhlIHByb2plY3QncyBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIHJlY29yZCBvZiBzY3JpcHQgbmFtZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgY29tbWFuZHMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGFkZGl0aW9uYWxTY3JpcHRzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIHJldHVybiB7XG4gICAgICBlc2xpbnQ6ICdlc2xpbnQgLicsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjb25maWd1cmF0aW9uIGZpbGUgY29udGVudC5cbiAgICpcbiAgICogQHJldHVybnMgQW4gb2JqZWN0IHdoZXJlIHRoZSBrZXkgaXMgdGhlIGZpbGVuYW1lIGFuZCB0aGUgdmFsdWUgaXMgYW4gYXJyYXkgb2YgZmlsZSBsaW5lcy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZSgpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnZXNsaW50LmNvbmZpZy5tanMnOiBbXG4gICAgICAgIFwiaW1wb3J0IGVzbGludCBmcm9tICdAZXNsaW50L2pzJztcIixcbiAgICAgICAgXCJpbXBvcnQgdHNlc2xpbnQgZnJvbSAndHlwZXNjcmlwdC1lc2xpbnQnO1wiLFxuICAgICAgICAnJyxcbiAgICAgICAgJ2V4cG9ydCBkZWZhdWx0IHRzZXNsaW50LmNvbmZpZygnLFxuICAgICAgICAnICBlc2xpbnQuY29uZmlncy5yZWNvbW1lbmRlZCwnLFxuICAgICAgICAnICAuLi50c2VzbGludC5jb25maWdzLnJlY29tbWVuZGVkLCcsXG4gICAgICAgICcgIC4uLnRzZXNsaW50LmNvbmZpZ3Muc3R5bGlzdGljLCcsXG4gICAgICAgICcgIHsnLFxuICAgICAgICAnICAgIHJ1bGVzOiB7JyxcbiAgICAgICAgLi4uT2JqZWN0LmVudHJpZXModGhpcy5ydWxlcykubWFwKChbcnVsZSwgdmFsdWVdOiBbc3RyaW5nLCBzdHJpbmddKTogc3RyaW5nID0+IGAgICAgICAnJHtydWxlfSc6ICcke3ZhbHVlfScsYCksXG4gICAgICAgICcgICAgfSwnLFxuICAgICAgICAnICB9LCcsXG4gICAgICAgICcgIHsnLFxuICAgICAgICBgICAgIGlnbm9yZXM6IFske3RoaXMuaWdub3JlUGF0dGVybnMubWFwKChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4gYCcke3BhdGh9J2ApLmpvaW4oJywgJyl9XSxgLFxuICAgICAgICAnICB9LCcsXG4gICAgICAgICcpOycsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBjdXN0b20gbGludGluZyBydWxlcyB0byB0aGUgcHJvamVjdCdzIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBydWxlcyAtIEEgcmVjb3JkIG9mIHJ1bGUgbmFtZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgY29uZmlndXJhdGlvbnMuXG4gICAqL1xuICBwdWJsaWMgYWRkUnVsZXMocnVsZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pOiB2b2lkIHtcbiAgICB0aGlzLnJ1bGVzID0geyAuLi50aGlzLnJ1bGVzLCAuLi5ydWxlcyB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgY3VzdG9tIGlnbm9yZSBwYXR0ZXJucyB0byB0aGUgcHJvamVjdCdzIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBwYXR0ZXJucyAtIEFuIGFycmF5IG9mIGZpbGUgb3IgZGlyZWN0b3J5IHBhdHRlcm5zIHRvIGJlIGlnbm9yZWQuXG4gICAqL1xuICBwdWJsaWMgYWRkSWdub3JlUGF0dGVybnMocGF0dGVybnM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgdGhpcy5pZ25vcmVQYXR0ZXJucyA9IFsuLi50aGlzLmlnbm9yZVBhdHRlcm5zLCAuLi5wYXR0ZXJuc107XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhZGRpdGlvbmFsIGlnbm9yZSBwYXR0ZXJucyB0byBiZSBhZGRlZCB0byB0aGUgcHJvamVjdCdzIGlnbm9yZSBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGxpc3Qgb2YgaWdub3JlIHBhdHRlcm5zLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBhZGRpdGlvbmFsSWdub3JlUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGZpbGVQYXRoOiBzdHJpbmcgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ0ZpbGUpWzBdO1xuICAgIHJldHVybiBbYC8ke2ZpbGVQYXRofWBdO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHJlZ2lzdGVyQ29uZmlnKCk6IHZvaWQge1xuICAgIGlmIChpc1ZhbGlkUHJvamVjdCh0aGlzLnByb2plY3QpKSB7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykubnBtQ29uZmlnPy5hZGREZXZEZXBlbmRlbmNpZXModGhpcy5hZGRpdGlvbmFsRGV2RGVwZW5kZW5jaWVzKTtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5ucG1Db25maWc/LmFkZFNjcmlwdHModGhpcy5hZGRpdGlvbmFsU2NyaXB0cyk7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykucHJldHRpZXJDb25maWc/LmFkZElnbm9yZVBhdHRlcm5zKHRoaXMuYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgYXBwbHlDb25maWcoKTogdm9pZCB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZSlbMF07XG4gICAgbmV3IFRleHRGaWxlKHRoaXMucHJvamVjdCwgZmlsZVBhdGgsIHtcbiAgICAgIGxpbmVzOiB0aGlzLmNvbmZpZ0ZpbGVbZmlsZVBhdGhdLFxuICAgIH0pO1xuICB9XG59XG4iXX0=
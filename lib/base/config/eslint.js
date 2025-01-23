"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EsLintConfigBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const config_1 = require("../config");
const utils_1 = require("../../utils");
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
    get additionalScripts() {
        return {
            eslint: 'eslint .',
        };
    }
    get additionalIgnorePatterns() {
        const filePath = Object.keys(this.configFile)[0];
        return [`/${filePath}`];
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNsaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Jhc2UvY29uZmlnL2VzbGludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFrQztBQUNsQyxzQ0FBbUM7QUFFbkMsdUNBQTZDO0FBRzdDOzs7O0dBSUc7QUFDSCxNQUFhLGdCQUFpQixTQUFRLGVBQU07SUFJMUMsWUFBWSxPQUFxQjtRQUMvQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDcEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLGFBQWE7UUFDekIsT0FBTztZQUNMLFlBQVksRUFBRSxLQUFLO1lBQ25CLHdCQUF3QixFQUFFLEtBQUs7WUFDL0IsMENBQTBDLEVBQUUsS0FBSztZQUNqRCw4QkFBOEIsRUFBRSxLQUFLO1lBQ3JDLGtEQUFrRCxFQUFFLEtBQUs7WUFDekQsNENBQTRDLEVBQUUsS0FBSztZQUNuRCxzQ0FBc0MsRUFBRSxLQUFLO1lBQzdDLGlEQUFpRCxFQUFFLEtBQUs7WUFDeEQseUNBQXlDLEVBQUUsS0FBSztTQUNqRCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLHNCQUFzQjtRQUNsQyxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCxJQUF1Qix5QkFBeUI7UUFDOUMsT0FBTztZQUNMLDBDQUEwQztZQUMxQyxtQ0FBbUM7WUFDbkMsZ0JBQWdCO1lBQ2hCLGdDQUFnQztZQUNoQywwQ0FBMEM7WUFDMUMsOEJBQThCO1lBQzlCLCtCQUErQjtZQUMvQiwyQkFBMkI7U0FDNUIsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUF1QixpQkFBaUI7UUFDdEMsT0FBTztZQUNMLE1BQU0sRUFBRSxVQUFVO1NBQ25CLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBdUIsd0JBQXdCO1FBQzdDLE1BQU0sUUFBUSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE9BQU8sQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQXVCLFVBQVU7UUFDL0IsT0FBTztZQUNMLG1CQUFtQixFQUFFO2dCQUNuQixrQ0FBa0M7Z0JBQ2xDLDJDQUEyQztnQkFDM0MsRUFBRTtnQkFDRixpQ0FBaUM7Z0JBQ2pDLCtCQUErQjtnQkFDL0Isb0NBQW9DO2dCQUNwQyxrQ0FBa0M7Z0JBQ2xDLEtBQUs7Z0JBQ0wsY0FBYztnQkFDZCxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBbUIsRUFBVSxFQUFFLENBQUMsVUFBVSxJQUFJLE9BQU8sS0FBSyxJQUFJLENBQUM7Z0JBQzlHLFFBQVE7Z0JBQ1IsTUFBTTtnQkFDTixLQUFLO2dCQUNMLGlCQUFpQixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQVksRUFBVSxFQUFFLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtnQkFDOUYsTUFBTTtnQkFDTixJQUFJO2FBQ0w7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxRQUFRLENBQUMsS0FBNkI7UUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksaUJBQWlCLENBQUMsUUFBa0I7UUFDekMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFZSxjQUFjO1FBQzVCLElBQUksSUFBQSxzQkFBYyxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUF3QixDQUFDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUM1RixJQUFJLENBQUMsT0FBd0IsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxPQUF3QixDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNsRyxDQUFDO0lBQ0gsQ0FBQztJQUVlLFdBQVc7UUFDekIsTUFBTSxRQUFRLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxpQkFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFO1lBQ25DLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBYTtTQUM3QyxDQUFDLENBQUM7SUFDTCxDQUFDOztBQXJISCw0Q0FzSEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0RmlsZSB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgUHJvamVjdFR5cGVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvcHJvamVjdCc7XG5pbXBvcnQgeyBpc1ZhbGlkUHJvamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENvbmZpZ0ZpbGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBFc0xpbnQgY29uZmlndXJhdGlvbi5cbiAqXG4gKiBUaGlzIGNsYXNzIGFjdHMgYXMgYSBiYXNlIGZvciBoYW5kbGluZyBFc0xpbnQgY29uZmlndXJhdGlvbiB3aXRoaW4gcHJvamVjdHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBFc0xpbnRDb25maWdCYXNlIGV4dGVuZHMgQ29uZmlnIHtcbiAgcHJvdGVjdGVkIHJ1bGVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICBwcm90ZWN0ZWQgaWdub3JlUGF0dGVybnM6IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFByb2plY3RUeXBlcykge1xuICAgIHN1cGVyKHByb2plY3QpO1xuXG4gICAgdGhpcy5ydWxlcyA9IHRoaXMuc3RhbmRhcmRSdWxlcztcbiAgICB0aGlzLmlnbm9yZVBhdHRlcm5zID0gdGhpcy5zdGFuZGFyZElnbm9yZVBhdHRlcm5zO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHN0YW5kYXJkIGxpbnRpbmcgcnVsZXMgZm9yIHRoZSBwcm9qZWN0LlxuICAgKlxuICAgKiBAcmV0dXJucyBBIHJlY29yZCBvZiBydWxlIG5hbWVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIGNvbmZpZ3VyYXRpb25zLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzdGFuZGFyZFJ1bGVzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIHJldHVybiB7XG4gICAgICAnbm8tY29uc29sZSc6ICdvZmYnLFxuICAgICAgJ3JlcXVpcmUtYXRvbWljLXVwZGF0ZXMnOiAnb2ZmJyxcbiAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uJzogJ29mZicsXG4gICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlcyc6ICdvZmYnLFxuICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZSc6ICdvZmYnLFxuICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9jb25zaXN0ZW50LXR5cGUtaW1wb3J0cyc6ICdvZmYnLFxuICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvbic6ICdvZmYnLFxuICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9jbGFzcy1saXRlcmFsLXByb3BlcnR5LXN0eWxlJzogJ29mZicsXG4gICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LW9iamVjdC10eXBlJzogJ29mZicsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBzdGFuZGFyZCBpZ25vcmUgcGF0dGVybnMgZm9yIHRoZSBwcm9qZWN0LlxuICAgKlxuICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiBmaWxlIG9yIGRpcmVjdG9yeSBwYXR0ZXJucyB0byBiZSBpZ25vcmVkIGJ5IHRoZSBsaW50ZXIuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHN0YW5kYXJkSWdub3JlUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbERldkRlcGVuZGVuY2llcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvZXNsaW50LXBsdWdpbkBeOC4yMC4wJyxcbiAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyQF44LjIwLjAnLFxuICAgICAgJ2VzbGludEBeOS4xOC4wJyxcbiAgICAgICdlc2xpbnQtY29uZmlnLXByZXR0aWVyQF4xMC4wLjEnLFxuICAgICAgJ2VzbGludC1pbXBvcnQtcmVzb2x2ZXItdHlwZXNjcmlwdEBeMy43LjAnLFxuICAgICAgJ2VzbGludC1wbHVnaW4taW1wb3J0QF4yLjMxLjAnLFxuICAgICAgJ2VzbGludC1wbHVnaW4tcHJldHRpZXJAXjUuMi4xJyxcbiAgICAgICd0eXBlc2NyaXB0LWVzbGludEBeOC4yMC4wJyxcbiAgICBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2NyaXB0cygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICByZXR1cm4ge1xuICAgICAgZXNsaW50OiAnZXNsaW50IC4nLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZSlbMF07XG4gICAgcmV0dXJuIFtgLyR7ZmlsZVBhdGh9YF07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGNvbmZpZ0ZpbGUoKTogQ29uZmlnRmlsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdlc2xpbnQuY29uZmlnLm1qcyc6IFtcbiAgICAgICAgXCJpbXBvcnQgZXNsaW50IGZyb20gJ0Blc2xpbnQvanMnO1wiLFxuICAgICAgICBcImltcG9ydCB0c2VzbGludCBmcm9tICd0eXBlc2NyaXB0LWVzbGludCc7XCIsXG4gICAgICAgICcnLFxuICAgICAgICAnZXhwb3J0IGRlZmF1bHQgdHNlc2xpbnQuY29uZmlnKCcsXG4gICAgICAgICcgIGVzbGludC5jb25maWdzLnJlY29tbWVuZGVkLCcsXG4gICAgICAgICcgIC4uLnRzZXNsaW50LmNvbmZpZ3MucmVjb21tZW5kZWQsJyxcbiAgICAgICAgJyAgLi4udHNlc2xpbnQuY29uZmlncy5zdHlsaXN0aWMsJyxcbiAgICAgICAgJyAgeycsXG4gICAgICAgICcgICAgcnVsZXM6IHsnLFxuICAgICAgICAuLi5PYmplY3QuZW50cmllcyh0aGlzLnJ1bGVzKS5tYXAoKFtydWxlLCB2YWx1ZV06IFtzdHJpbmcsIHN0cmluZ10pOiBzdHJpbmcgPT4gYCAgICAgICcke3J1bGV9JzogJyR7dmFsdWV9JyxgKSxcbiAgICAgICAgJyAgICB9LCcsXG4gICAgICAgICcgIH0sJyxcbiAgICAgICAgJyAgeycsXG4gICAgICAgIGAgICAgaWdub3JlczogWyR7dGhpcy5pZ25vcmVQYXR0ZXJucy5tYXAoKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiBgJyR7cGF0aH0nYCkuam9pbignLCAnKX1dLGAsXG4gICAgICAgICcgIH0sJyxcbiAgICAgICAgJyk7JyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGN1c3RvbSBsaW50aW5nIHJ1bGVzIHRvIHRoZSBwcm9qZWN0J3MgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHJ1bGVzIC0gQSByZWNvcmQgb2YgcnVsZSBuYW1lcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBjb25maWd1cmF0aW9ucy5cbiAgICovXG4gIHB1YmxpYyBhZGRSdWxlcyhydWxlczogUmVjb3JkPHN0cmluZywgc3RyaW5nPik6IHZvaWQge1xuICAgIHRoaXMucnVsZXMgPSB7IC4uLnRoaXMucnVsZXMsIC4uLnJ1bGVzIH07XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBjdXN0b20gaWdub3JlIHBhdHRlcm5zIHRvIHRoZSBwcm9qZWN0J3MgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHBhdHRlcm5zIC0gQW4gYXJyYXkgb2YgZmlsZSBvciBkaXJlY3RvcnkgcGF0dGVybnMgdG8gYmUgaWdub3JlZC5cbiAgICovXG4gIHB1YmxpYyBhZGRJZ25vcmVQYXR0ZXJucyhwYXR0ZXJuczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICB0aGlzLmlnbm9yZVBhdHRlcm5zID0gWy4uLnRoaXMuaWdub3JlUGF0dGVybnMsIC4uLnBhdHRlcm5zXTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSByZWdpc3RlckNvbmZpZygpOiB2b2lkIHtcbiAgICBpZiAoaXNWYWxpZFByb2plY3QodGhpcy5wcm9qZWN0KSkge1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLm5wbUNvbmZpZz8uYWRkRGV2RGVwZW5kZW5jaWVzKHRoaXMuYWRkaXRpb25hbERldkRlcGVuZGVuY2llcyk7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykubnBtQ29uZmlnPy5hZGRTY3JpcHRzKHRoaXMuYWRkaXRpb25hbFNjcmlwdHMpO1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLnByZXR0aWVyQ29uZmlnPy5hZGRJZ25vcmVQYXR0ZXJucyh0aGlzLmFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIGFwcGx5Q29uZmlnKCk6IHZvaWQge1xuICAgIGNvbnN0IGZpbGVQYXRoOiBzdHJpbmcgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ0ZpbGUpWzBdO1xuICAgIG5ldyBUZXh0RmlsZSh0aGlzLnByb2plY3QsIGZpbGVQYXRoLCB7XG4gICAgICBsaW5lczogdGhpcy5jb25maWdGaWxlW2ZpbGVQYXRoXSBhcyBzdHJpbmdbXSxcbiAgICB9KTtcbiAgfVxufVxuIl19
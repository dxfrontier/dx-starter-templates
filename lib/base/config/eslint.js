"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EsLintConfigBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const config_1 = require("../config");
const utils_1 = require("../../util/utils");
const constants_1 = require("../../util/constants");
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
            `${constants_1.constants['eslint'].NAME}@${constants_1.constants['eslint'].VERSION}`,
            `${constants_1.constants['typescript-eslint'].NAME}@${constants_1.constants['typescript-eslint'].VERSION}`,
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
        if (utils_1.util.isValidProject(this.project)) {
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
EsLintConfigBase[_a] = { fqn: "@dxfrontier/projen-template-projects.EsLintConfigBase", version: "0.5.4" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNsaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Jhc2UvY29uZmlnL2VzbGludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFrQztBQUNsQyxzQ0FBbUM7QUFFbkMsNENBQXdDO0FBRXhDLG9EQUFpRDtBQUVqRDs7OztHQUlHO0FBQ0gsTUFBYSxnQkFBaUIsU0FBUSxlQUFNO0lBSTFDLFlBQVksT0FBcUI7UUFDL0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWYsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ3BELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxhQUFhO1FBQ3pCLE9BQU87WUFDTCxZQUFZLEVBQUUsS0FBSztZQUNuQix3QkFBd0IsRUFBRSxLQUFLO1lBQy9CLDBDQUEwQyxFQUFFLEtBQUs7WUFDakQsOEJBQThCLEVBQUUsS0FBSztZQUNyQyxrREFBa0QsRUFBRSxLQUFLO1lBQ3pELDRDQUE0QyxFQUFFLEtBQUs7WUFDbkQsc0NBQXNDLEVBQUUsS0FBSztZQUM3QyxpREFBaUQsRUFBRSxLQUFLO1lBQ3hELHlDQUF5QyxFQUFFLEtBQUs7U0FDakQsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxzQkFBc0I7UUFDbEMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsSUFBdUIseUJBQXlCO1FBQzlDLE9BQU87WUFDTCxHQUFHLHFCQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLHFCQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQzVELEdBQUcscUJBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksSUFBSSxxQkFBUyxDQUFDLG1CQUFtQixDQUFDLENBQUMsT0FBTyxFQUFFO1NBQ25GLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBdUIsaUJBQWlCO1FBQ3RDLE9BQU87WUFDTCxNQUFNLEVBQUUsVUFBVTtTQUNuQixDQUFDO0lBQ0osQ0FBQztJQUVELElBQXVCLHdCQUF3QjtRQUM3QyxNQUFNLFFBQVEsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxPQUFPLENBQUMsSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUF1QixVQUFVO1FBQy9CLE9BQU87WUFDTCxtQkFBbUIsRUFBRTtnQkFDbkIsa0NBQWtDO2dCQUNsQywyQ0FBMkM7Z0JBQzNDLEVBQUU7Z0JBQ0YsaUNBQWlDO2dCQUNqQywrQkFBK0I7Z0JBQy9CLG9DQUFvQztnQkFDcEMsa0NBQWtDO2dCQUNsQyxLQUFLO2dCQUNMLGNBQWM7Z0JBQ2QsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLENBQW1CLEVBQVUsRUFBRSxDQUFDLFVBQVUsSUFBSSxPQUFPLEtBQUssSUFBSSxDQUFDO2dCQUM5RyxRQUFRO2dCQUNSLE1BQU07Z0JBQ04sS0FBSztnQkFDTCxpQkFBaUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFZLEVBQVUsRUFBRSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7Z0JBQzlGLE1BQU07Z0JBQ04sSUFBSTthQUNMO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksUUFBUSxDQUFDLEtBQTZCO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGlCQUFpQixDQUFDLFFBQWtCO1FBQ3pDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRWUsY0FBYztRQUM1QixJQUFJLFlBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQXdCLENBQUMsU0FBUyxFQUFFLGtCQUFrQixDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQzVGLElBQUksQ0FBQyxPQUF3QixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLE9BQXdCLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2xHLENBQUM7SUFDSCxDQUFDO0lBRWUsV0FBVztRQUN6QixNQUFNLFFBQVEsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUU7WUFDbkMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFhO1NBQzdDLENBQUMsQ0FBQztJQUNMLENBQUM7O0FBL0dILDRDQWdIQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHRGaWxlIH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBQcm9qZWN0VHlwZXMgfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzL3Byb2plY3QnO1xuaW1wb3J0IHsgdXRpbCB9IGZyb20gJy4uLy4uL3V0aWwvdXRpbHMnO1xuaW1wb3J0IHsgQ29uZmlnRmlsZSB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnO1xuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zdGFudHMnO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgRXNMaW50IGNvbmZpZ3VyYXRpb24uXG4gKlxuICogVGhpcyBjbGFzcyBhY3RzIGFzIGEgYmFzZSBmb3IgaGFuZGxpbmcgRXNMaW50IGNvbmZpZ3VyYXRpb24gd2l0aGluIHByb2plY3RzLlxuICovXG5leHBvcnQgY2xhc3MgRXNMaW50Q29uZmlnQmFzZSBleHRlbmRzIENvbmZpZyB7XG4gIHByb3RlY3RlZCBydWxlczogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgcHJvdGVjdGVkIGlnbm9yZVBhdHRlcm5zOiBzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBQcm9qZWN0VHlwZXMpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcblxuICAgIHRoaXMucnVsZXMgPSB0aGlzLnN0YW5kYXJkUnVsZXM7XG4gICAgdGhpcy5pZ25vcmVQYXR0ZXJucyA9IHRoaXMuc3RhbmRhcmRJZ25vcmVQYXR0ZXJucztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBzdGFuZGFyZCBsaW50aW5nIHJ1bGVzIGZvciB0aGUgcHJvamVjdC5cbiAgICpcbiAgICogQHJldHVybnMgQSByZWNvcmQgb2YgcnVsZSBuYW1lcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBjb25maWd1cmF0aW9ucy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc3RhbmRhcmRSdWxlcygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ25vLWNvbnNvbGUnOiAnb2ZmJyxcbiAgICAgICdyZXF1aXJlLWF0b21pYy11cGRhdGVzJzogJ29mZicsXG4gICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvbic6ICdvZmYnLFxuICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXMnOiAnb2ZmJyxcbiAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtZnVuY3Rpb24tcmV0dXJuLXR5cGUnOiAnb2ZmJyxcbiAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvY29uc2lzdGVudC10eXBlLWltcG9ydHMnOiAnb2ZmJyxcbiAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb24nOiAnb2ZmJyxcbiAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvY2xhc3MtbGl0ZXJhbC1wcm9wZXJ0eS1zdHlsZSc6ICdvZmYnLFxuICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1vYmplY3QtdHlwZSc6ICdvZmYnLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgc3RhbmRhcmQgaWdub3JlIHBhdHRlcm5zIGZvciB0aGUgcHJvamVjdC5cbiAgICpcbiAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgZmlsZSBvciBkaXJlY3RvcnkgcGF0dGVybnMgdG8gYmUgaWdub3JlZCBieSB0aGUgbGludGVyLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzdGFuZGFyZElnbm9yZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXG4gICAgICBgJHtjb25zdGFudHNbJ2VzbGludCddLk5BTUV9QCR7Y29uc3RhbnRzWydlc2xpbnQnXS5WRVJTSU9OfWAsXG4gICAgICBgJHtjb25zdGFudHNbJ3R5cGVzY3JpcHQtZXNsaW50J10uTkFNRX1AJHtjb25zdGFudHNbJ3R5cGVzY3JpcHQtZXNsaW50J10uVkVSU0lPTn1gLFxuICAgIF07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxTY3JpcHRzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIHJldHVybiB7XG4gICAgICBlc2xpbnQ6ICdlc2xpbnQgLicsXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlKVswXTtcbiAgICByZXR1cm4gW2AvJHtmaWxlUGF0aH1gXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgY29uZmlnRmlsZSgpOiBDb25maWdGaWxlIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2VzbGludC5jb25maWcubWpzJzogW1xuICAgICAgICBcImltcG9ydCBlc2xpbnQgZnJvbSAnQGVzbGludC9qcyc7XCIsXG4gICAgICAgIFwiaW1wb3J0IHRzZXNsaW50IGZyb20gJ3R5cGVzY3JpcHQtZXNsaW50JztcIixcbiAgICAgICAgJycsXG4gICAgICAgICdleHBvcnQgZGVmYXVsdCB0c2VzbGludC5jb25maWcoJyxcbiAgICAgICAgJyAgZXNsaW50LmNvbmZpZ3MucmVjb21tZW5kZWQsJyxcbiAgICAgICAgJyAgLi4udHNlc2xpbnQuY29uZmlncy5yZWNvbW1lbmRlZCwnLFxuICAgICAgICAnICAuLi50c2VzbGludC5jb25maWdzLnN0eWxpc3RpYywnLFxuICAgICAgICAnICB7JyxcbiAgICAgICAgJyAgICBydWxlczogeycsXG4gICAgICAgIC4uLk9iamVjdC5lbnRyaWVzKHRoaXMucnVsZXMpLm1hcCgoW3J1bGUsIHZhbHVlXTogW3N0cmluZywgc3RyaW5nXSk6IHN0cmluZyA9PiBgICAgICAgJyR7cnVsZX0nOiAnJHt2YWx1ZX0nLGApLFxuICAgICAgICAnICAgIH0sJyxcbiAgICAgICAgJyAgfSwnLFxuICAgICAgICAnICB7JyxcbiAgICAgICAgYCAgICBpZ25vcmVzOiBbJHt0aGlzLmlnbm9yZVBhdHRlcm5zLm1hcCgocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IGAnJHtwYXRofSdgKS5qb2luKCcsICcpfV0sYCxcbiAgICAgICAgJyAgfSwnLFxuICAgICAgICAnKTsnLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgY3VzdG9tIGxpbnRpbmcgcnVsZXMgdG8gdGhlIHByb2plY3QncyBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gcnVsZXMgLSBBIHJlY29yZCBvZiBydWxlIG5hbWVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIGNvbmZpZ3VyYXRpb25zLlxuICAgKi9cbiAgcHVibGljIGFkZFJ1bGVzKHJ1bGVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KTogdm9pZCB7XG4gICAgdGhpcy5ydWxlcyA9IHsgLi4udGhpcy5ydWxlcywgLi4ucnVsZXMgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGN1c3RvbSBpZ25vcmUgcGF0dGVybnMgdG8gdGhlIHByb2plY3QncyBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gcGF0dGVybnMgLSBBbiBhcnJheSBvZiBmaWxlIG9yIGRpcmVjdG9yeSBwYXR0ZXJucyB0byBiZSBpZ25vcmVkLlxuICAgKi9cbiAgcHVibGljIGFkZElnbm9yZVBhdHRlcm5zKHBhdHRlcm5zOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIHRoaXMuaWdub3JlUGF0dGVybnMgPSBbLi4udGhpcy5pZ25vcmVQYXR0ZXJucywgLi4ucGF0dGVybnNdO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHJlZ2lzdGVyQ29uZmlnKCk6IHZvaWQge1xuICAgIGlmICh1dGlsLmlzVmFsaWRQcm9qZWN0KHRoaXMucHJvamVjdCkpIHtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5ucG1Db25maWc/LmFkZERldkRlcGVuZGVuY2llcyh0aGlzLmFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMpO1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLm5wbUNvbmZpZz8uYWRkU2NyaXB0cyh0aGlzLmFkZGl0aW9uYWxTY3JpcHRzKTtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5wcmV0dGllckNvbmZpZz8uYWRkSWdub3JlUGF0dGVybnModGhpcy5hZGRpdGlvbmFsSWdub3JlUGF0dGVybnMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBhcHBseUNvbmZpZygpOiB2b2lkIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlKVswXTtcbiAgICBuZXcgVGV4dEZpbGUodGhpcy5wcm9qZWN0LCBmaWxlUGF0aCwge1xuICAgICAgbGluZXM6IHRoaXMuY29uZmlnRmlsZVtmaWxlUGF0aF0gYXMgc3RyaW5nW10sXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
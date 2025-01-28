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
            `@typescript-eslint/eslint-plugin@^8.20.0`,
            '@typescript-eslint/parser@^8.20.0',
            `${constants_1.constants['eslint'].NAME}@${constants_1.constants['eslint'].VERSION}`,
            `${constants_1.constants['eslint-config-prettier'].NAME}@${constants_1.constants['eslint-config-prettier'].VERSION}`,
            `${constants_1.constants['eslint-import-resolver-typescript'].NAME}@${constants_1.constants['eslint-import-resolver-typescript'].VERSION}`,
            `${constants_1.constants['eslint-plugin-import'].NAME}@${constants_1.constants['eslint-plugin-import'].VERSION}`,
            `${constants_1.constants['eslint-plugin-prettier'].NAME}@${constants_1.constants['eslint-plugin-prettier'].VERSION}`,
            `typescript-eslint@^8.20.0`,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNsaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Jhc2UvY29uZmlnL2VzbGludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFrQztBQUNsQyxzQ0FBbUM7QUFFbkMsNENBQWtEO0FBRWxELG9EQUFpRDtBQUVqRDs7OztHQUlHO0FBQ0gsTUFBYSxnQkFBaUIsU0FBUSxlQUFNO0lBSTFDLFlBQVksT0FBcUI7UUFDL0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWYsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ3BELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxhQUFhO1FBQ3pCLE9BQU87WUFDTCxZQUFZLEVBQUUsS0FBSztZQUNuQix3QkFBd0IsRUFBRSxLQUFLO1lBQy9CLDBDQUEwQyxFQUFFLEtBQUs7WUFDakQsOEJBQThCLEVBQUUsS0FBSztZQUNyQyxrREFBa0QsRUFBRSxLQUFLO1lBQ3pELDRDQUE0QyxFQUFFLEtBQUs7WUFDbkQsc0NBQXNDLEVBQUUsS0FBSztZQUM3QyxpREFBaUQsRUFBRSxLQUFLO1lBQ3hELHlDQUF5QyxFQUFFLEtBQUs7U0FDakQsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxzQkFBc0I7UUFDbEMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsSUFBdUIseUJBQXlCO1FBQzlDLE9BQU87WUFDTCwwQ0FBMEM7WUFDMUMsbUNBQW1DO1lBQ25DLEdBQUcscUJBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUkscUJBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDNUQsR0FBRyxxQkFBUyxDQUFDLHdCQUF3QixDQUFDLENBQUMsSUFBSSxJQUFJLHFCQUFTLENBQUMsd0JBQXdCLENB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O0lBQ0wsQ0FBQzs7QUFySEgsNENBc0hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dEZpbGUgfSBmcm9tICdwcm9qZW4nO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IFByb2plY3RUeXBlcyB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMvcHJvamVjdCc7XG5pbXBvcnQgeyBpc1ZhbGlkUHJvamVjdCB9IGZyb20gJy4uLy4uL3V0aWwvdXRpbHMnO1xuaW1wb3J0IHsgQ29uZmlnRmlsZSB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnO1xuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zdGFudHMnO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgRXNMaW50IGNvbmZpZ3VyYXRpb24uXG4gKlxuICogVGhpcyBjbGFzcyBhY3RzIGFzIGEgYmFzZSBmb3IgaGFuZGxpbmcgRXNMaW50IGNvbmZpZ3VyYXRpb24gd2l0aGluIHByb2plY3RzLlxuICovXG5leHBvcnQgY2xhc3MgRXNMaW50Q29uZmlnQmFzZSBleHRlbmRzIENvbmZpZyB7XG4gIHByb3RlY3RlZCBydWxlczogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgcHJvdGVjdGVkIGlnbm9yZVBhdHRlcm5zOiBzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBQcm9qZWN0VHlwZXMpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcblxuICAgIHRoaXMucnVsZXMgPSB0aGlzLnN0YW5kYXJkUnVsZXM7XG4gICAgdGhpcy5pZ25vcmVQYXR0ZXJucyA9IHRoaXMuc3RhbmRhcmRJZ25vcmVQYXR0ZXJucztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBzdGFuZGFyZCBsaW50aW5nIHJ1bGVzIGZvciB0aGUgcHJvamVjdC5cbiAgICpcbiAgICogQHJldHVybnMgQSByZWNvcmQgb2YgcnVsZSBuYW1lcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBjb25maWd1cmF0aW9ucy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc3RhbmRhcmRSdWxlcygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ25vLWNvbnNvbGUnOiAnb2ZmJyxcbiAgICAgICdyZXF1aXJlLWF0b21pYy11cGRhdGVzJzogJ29mZicsXG4gICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvbic6ICdvZmYnLFxuICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXMnOiAnb2ZmJyxcbiAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtZnVuY3Rpb24tcmV0dXJuLXR5cGUnOiAnb2ZmJyxcbiAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvY29uc2lzdGVudC10eXBlLWltcG9ydHMnOiAnb2ZmJyxcbiAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb24nOiAnb2ZmJyxcbiAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvY2xhc3MtbGl0ZXJhbC1wcm9wZXJ0eS1zdHlsZSc6ICdvZmYnLFxuICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1vYmplY3QtdHlwZSc6ICdvZmYnLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgc3RhbmRhcmQgaWdub3JlIHBhdHRlcm5zIGZvciB0aGUgcHJvamVjdC5cbiAgICpcbiAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgZmlsZSBvciBkaXJlY3RvcnkgcGF0dGVybnMgdG8gYmUgaWdub3JlZCBieSB0aGUgbGludGVyLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzdGFuZGFyZElnbm9yZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXG4gICAgICBgQHR5cGVzY3JpcHQtZXNsaW50L2VzbGludC1wbHVnaW5AXjguMjAuMGAsXG4gICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L3BhcnNlckBeOC4yMC4wJyxcbiAgICAgIGAke2NvbnN0YW50c1snZXNsaW50J10uTkFNRX1AJHtjb25zdGFudHNbJ2VzbGludCddLlZFUlNJT059YCxcbiAgICAgIGAke2NvbnN0YW50c1snZXNsaW50LWNvbmZpZy1wcmV0dGllciddLk5BTUV9QCR7Y29uc3RhbnRzWydlc2xpbnQtY29uZmlnLXByZXR0aWVyJ10uVkVSU0lPTn1gLFxuICAgICAgYCR7Y29uc3RhbnRzWydlc2xpbnQtaW1wb3J0LXJlc29sdmVyLXR5cGVzY3JpcHQnXS5OQU1FfUAke2NvbnN0YW50c1snZXNsaW50LWltcG9ydC1yZXNvbHZlci10eXBlc2NyaXB0J10uVkVSU0lPTn1gLFxuICAgICAgYCR7Y29uc3RhbnRzWydlc2xpbnQtcGx1Z2luLWltcG9ydCddLk5BTUV9QCR7Y29uc3RhbnRzWydlc2xpbnQtcGx1Z2luLWltcG9ydCddLlZFUlNJT059YCxcbiAgICAgIGAke2NvbnN0YW50c1snZXNsaW50LXBsdWdpbi1wcmV0dGllciddLk5BTUV9QCR7Y29uc3RhbnRzWydlc2xpbnQtcGx1Z2luLXByZXR0aWVyJ10uVkVSU0lPTn1gLFxuICAgICAgYHR5cGVzY3JpcHQtZXNsaW50QF44LjIwLjBgLFxuICAgIF07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxTY3JpcHRzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIHJldHVybiB7XG4gICAgICBlc2xpbnQ6ICdlc2xpbnQgLicsXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlKVswXTtcbiAgICByZXR1cm4gW2AvJHtmaWxlUGF0aH1gXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgY29uZmlnRmlsZSgpOiBDb25maWdGaWxlIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2VzbGludC5jb25maWcubWpzJzogW1xuICAgICAgICBcImltcG9ydCBlc2xpbnQgZnJvbSAnQGVzbGludC9qcyc7XCIsXG4gICAgICAgIFwiaW1wb3J0IHRzZXNsaW50IGZyb20gJ3R5cGVzY3JpcHQtZXNsaW50JztcIixcbiAgICAgICAgJycsXG4gICAgICAgICdleHBvcnQgZGVmYXVsdCB0c2VzbGludC5jb25maWcoJyxcbiAgICAgICAgJyAgZXNsaW50LmNvbmZpZ3MucmVjb21tZW5kZWQsJyxcbiAgICAgICAgJyAgLi4udHNlc2xpbnQuY29uZmlncy5yZWNvbW1lbmRlZCwnLFxuICAgICAgICAnICAuLi50c2VzbGludC5jb25maWdzLnN0eWxpc3RpYywnLFxuICAgICAgICAnICB7JyxcbiAgICAgICAgJyAgICBydWxlczogeycsXG4gICAgICAgIC4uLk9iamVjdC5lbnRyaWVzKHRoaXMucnVsZXMpLm1hcCgoW3J1bGUsIHZhbHVlXTogW3N0cmluZywgc3RyaW5nXSk6IHN0cmluZyA9PiBgICAgICAgJyR7cnVsZX0nOiAnJHt2YWx1ZX0nLGApLFxuICAgICAgICAnICAgIH0sJyxcbiAgICAgICAgJyAgfSwnLFxuICAgICAgICAnICB7JyxcbiAgICAgICAgYCAgICBpZ25vcmVzOiBbJHt0aGlzLmlnbm9yZVBhdHRlcm5zLm1hcCgocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IGAnJHtwYXRofSdgKS5qb2luKCcsICcpfV0sYCxcbiAgICAgICAgJyAgfSwnLFxuICAgICAgICAnKTsnLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgY3VzdG9tIGxpbnRpbmcgcnVsZXMgdG8gdGhlIHByb2plY3QncyBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gcnVsZXMgLSBBIHJlY29yZCBvZiBydWxlIG5hbWVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIGNvbmZpZ3VyYXRpb25zLlxuICAgKi9cbiAgcHVibGljIGFkZFJ1bGVzKHJ1bGVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KTogdm9pZCB7XG4gICAgdGhpcy5ydWxlcyA9IHsgLi4udGhpcy5ydWxlcywgLi4ucnVsZXMgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGN1c3RvbSBpZ25vcmUgcGF0dGVybnMgdG8gdGhlIHByb2plY3QncyBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gcGF0dGVybnMgLSBBbiBhcnJheSBvZiBmaWxlIG9yIGRpcmVjdG9yeSBwYXR0ZXJucyB0byBiZSBpZ25vcmVkLlxuICAgKi9cbiAgcHVibGljIGFkZElnbm9yZVBhdHRlcm5zKHBhdHRlcm5zOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIHRoaXMuaWdub3JlUGF0dGVybnMgPSBbLi4udGhpcy5pZ25vcmVQYXR0ZXJucywgLi4ucGF0dGVybnNdO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHJlZ2lzdGVyQ29uZmlnKCk6IHZvaWQge1xuICAgIGlmIChpc1ZhbGlkUHJvamVjdCh0aGlzLnByb2plY3QpKSB7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykubnBtQ29uZmlnPy5hZGREZXZEZXBlbmRlbmNpZXModGhpcy5hZGRpdGlvbmFsRGV2RGVwZW5kZW5jaWVzKTtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5ucG1Db25maWc/LmFkZFNjcmlwdHModGhpcy5hZGRpdGlvbmFsU2NyaXB0cyk7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykucHJldHRpZXJDb25maWc/LmFkZElnbm9yZVBhdHRlcm5zKHRoaXMuYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgYXBwbHlDb25maWcoKTogdm9pZCB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZSlbMF07XG4gICAgbmV3IFRleHRGaWxlKHRoaXMucHJvamVjdCwgZmlsZVBhdGgsIHtcbiAgICAgIGxpbmVzOiB0aGlzLmNvbmZpZ0ZpbGVbZmlsZVBhdGhdIGFzIHN0cmluZ1tdLFxuICAgIH0pO1xuICB9XG59XG4iXX0=
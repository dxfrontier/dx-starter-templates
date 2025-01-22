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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNsaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2UvZXNsaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQWtDO0FBQ2xDLHFDQUFrQztBQUVsQyxvQ0FBMEM7QUFFMUM7Ozs7R0FJRztBQUNILE1BQWEsZ0JBQWlCLFNBQVEsZUFBTTtJQUkxQyxZQUFZLE9BQXFCO1FBQy9CLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVmLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUNoQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUNwRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsYUFBYTtRQUN6QixPQUFPO1lBQ0wsWUFBWSxFQUFFLEtBQUs7WUFDbkIsd0JBQXdCLEVBQUUsS0FBSztZQUMvQiwwQ0FBMEMsRUFBRSxLQUFLO1lBQ2pELDhCQUE4QixFQUFFLEtBQUs7WUFDckMsa0RBQWtELEVBQUUsS0FBSztZQUN6RCw0Q0FBNEMsRUFBRSxLQUFLO1lBQ25ELHNDQUFzQyxFQUFFLEtBQUs7WUFDN0MsaURBQWlELEVBQUUsS0FBSztZQUN4RCx5Q0FBeUMsRUFBRSxLQUFLO1NBQ2pELENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsc0JBQXNCO1FBQ2xDLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVELElBQXVCLHlCQUF5QjtRQUM5QyxPQUFPO1lBQ0wsMENBQTBDO1lBQzFDLG1DQUFtQztZQUNuQyxnQkFBZ0I7WUFDaEIsZ0NBQWdDO1lBQ2hDLDBDQUEwQztZQUMxQyw4QkFBOEI7WUFDOUIsK0JBQStCO1lBQy9CLDJCQUEyQjtTQUM1QixDQUFDO0lBQ0osQ0FBQztJQUVELElBQXVCLGlCQUFpQjtRQUN0QyxPQUFPO1lBQ0wsTUFBTSxFQUFFLFVBQVU7U0FDbkIsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUF1Qix3QkFBd0I7UUFDN0MsTUFBTSxRQUFRLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsT0FBTyxDQUFDLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBdUIsVUFBVTtRQUMvQixPQUFPO1lBQ0wsbUJBQW1CLEVBQUU7Z0JBQ25CLGtDQUFrQztnQkFDbEMsMkNBQTJDO2dCQUMzQyxFQUFFO2dCQUNGLGlDQUFpQztnQkFDakMsK0JBQStCO2dCQUMvQixvQ0FBb0M7Z0JBQ3BDLGtDQUFrQztnQkFDbEMsS0FBSztnQkFDTCxjQUFjO2dCQUNkLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFtQixFQUFVLEVBQUUsQ0FBQyxVQUFVLElBQUksT0FBTyxLQUFLLElBQUksQ0FBQztnQkFDOUcsUUFBUTtnQkFDUixNQUFNO2dCQUNOLEtBQUs7Z0JBQ0wsaUJBQWlCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBWSxFQUFVLEVBQUUsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO2dCQUM5RixNQUFNO2dCQUNOLElBQUk7YUFDTDtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFFBQVEsQ0FBQyxLQUE2QjtRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxpQkFBaUIsQ0FBQyxRQUFrQjtRQUN6QyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVlLGNBQWM7UUFDNUIsSUFBSSxJQUFBLHNCQUFjLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLE9BQXdCLENBQUMsU0FBUyxFQUFFLGtCQUFrQixDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQzVGLElBQUksQ0FBQyxPQUF3QixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLE9BQXdCLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2xHLENBQUM7SUFDSCxDQUFDO0lBRWUsV0FBVztRQUN6QixNQUFNLFFBQVEsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUU7WUFDbkMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ2pDLENBQUMsQ0FBQztJQUNMLENBQUM7O0FBckhILDRDQXNIQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHRGaWxlIH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IFByb2plY3RUeXBlcyB9IGZyb20gJy4uL3R5cGVzL3Byb2plY3QnO1xuaW1wb3J0IHsgaXNWYWxpZFByb2plY3QgfSBmcm9tICcuLi91dGlscyc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBFc0xpbnQgY29uZmlndXJhdGlvbi5cbiAqXG4gKiBUaGlzIGNsYXNzIGFjdHMgYXMgYSBiYXNlIGZvciBoYW5kbGluZyBFc0xpbnQgY29uZmlndXJhdGlvbiB3aXRoaW4gcHJvamVjdHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBFc0xpbnRDb25maWdCYXNlIGV4dGVuZHMgQ29uZmlnIHtcbiAgcHJvdGVjdGVkIHJ1bGVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICBwcm90ZWN0ZWQgaWdub3JlUGF0dGVybnM6IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFByb2plY3RUeXBlcykge1xuICAgIHN1cGVyKHByb2plY3QpO1xuXG4gICAgdGhpcy5ydWxlcyA9IHRoaXMuc3RhbmRhcmRSdWxlcztcbiAgICB0aGlzLmlnbm9yZVBhdHRlcm5zID0gdGhpcy5zdGFuZGFyZElnbm9yZVBhdHRlcm5zO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHN0YW5kYXJkIGxpbnRpbmcgcnVsZXMgZm9yIHRoZSBwcm9qZWN0LlxuICAgKlxuICAgKiBAcmV0dXJucyBBIHJlY29yZCBvZiBydWxlIG5hbWVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIGNvbmZpZ3VyYXRpb25zLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzdGFuZGFyZFJ1bGVzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIHJldHVybiB7XG4gICAgICAnbm8tY29uc29sZSc6ICdvZmYnLFxuICAgICAgJ3JlcXVpcmUtYXRvbWljLXVwZGF0ZXMnOiAnb2ZmJyxcbiAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uJzogJ29mZicsXG4gICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlcyc6ICdvZmYnLFxuICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZSc6ICdvZmYnLFxuICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9jb25zaXN0ZW50LXR5cGUtaW1wb3J0cyc6ICdvZmYnLFxuICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvbic6ICdvZmYnLFxuICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9jbGFzcy1saXRlcmFsLXByb3BlcnR5LXN0eWxlJzogJ29mZicsXG4gICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LW9iamVjdC10eXBlJzogJ29mZicsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBzdGFuZGFyZCBpZ25vcmUgcGF0dGVybnMgZm9yIHRoZSBwcm9qZWN0LlxuICAgKlxuICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiBmaWxlIG9yIGRpcmVjdG9yeSBwYXR0ZXJucyB0byBiZSBpZ25vcmVkIGJ5IHRoZSBsaW50ZXIuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHN0YW5kYXJkSWdub3JlUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbERldkRlcGVuZGVuY2llcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvZXNsaW50LXBsdWdpbkBeOC4yMC4wJyxcbiAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyQF44LjIwLjAnLFxuICAgICAgJ2VzbGludEBeOS4xOC4wJyxcbiAgICAgICdlc2xpbnQtY29uZmlnLXByZXR0aWVyQF4xMC4wLjEnLFxuICAgICAgJ2VzbGludC1pbXBvcnQtcmVzb2x2ZXItdHlwZXNjcmlwdEBeMy43LjAnLFxuICAgICAgJ2VzbGludC1wbHVnaW4taW1wb3J0QF4yLjMxLjAnLFxuICAgICAgJ2VzbGludC1wbHVnaW4tcHJldHRpZXJAXjUuMi4xJyxcbiAgICAgICd0eXBlc2NyaXB0LWVzbGludEBeOC4yMC4wJyxcbiAgICBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2NyaXB0cygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICByZXR1cm4ge1xuICAgICAgZXNsaW50OiAnZXNsaW50IC4nLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZSlbMF07XG4gICAgcmV0dXJuIFtgLyR7ZmlsZVBhdGh9YF07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGNvbmZpZ0ZpbGUoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2VzbGludC5jb25maWcubWpzJzogW1xuICAgICAgICBcImltcG9ydCBlc2xpbnQgZnJvbSAnQGVzbGludC9qcyc7XCIsXG4gICAgICAgIFwiaW1wb3J0IHRzZXNsaW50IGZyb20gJ3R5cGVzY3JpcHQtZXNsaW50JztcIixcbiAgICAgICAgJycsXG4gICAgICAgICdleHBvcnQgZGVmYXVsdCB0c2VzbGludC5jb25maWcoJyxcbiAgICAgICAgJyAgZXNsaW50LmNvbmZpZ3MucmVjb21tZW5kZWQsJyxcbiAgICAgICAgJyAgLi4udHNlc2xpbnQuY29uZmlncy5yZWNvbW1lbmRlZCwnLFxuICAgICAgICAnICAuLi50c2VzbGludC5jb25maWdzLnN0eWxpc3RpYywnLFxuICAgICAgICAnICB7JyxcbiAgICAgICAgJyAgICBydWxlczogeycsXG4gICAgICAgIC4uLk9iamVjdC5lbnRyaWVzKHRoaXMucnVsZXMpLm1hcCgoW3J1bGUsIHZhbHVlXTogW3N0cmluZywgc3RyaW5nXSk6IHN0cmluZyA9PiBgICAgICAgJyR7cnVsZX0nOiAnJHt2YWx1ZX0nLGApLFxuICAgICAgICAnICAgIH0sJyxcbiAgICAgICAgJyAgfSwnLFxuICAgICAgICAnICB7JyxcbiAgICAgICAgYCAgICBpZ25vcmVzOiBbJHt0aGlzLmlnbm9yZVBhdHRlcm5zLm1hcCgocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IGAnJHtwYXRofSdgKS5qb2luKCcsICcpfV0sYCxcbiAgICAgICAgJyAgfSwnLFxuICAgICAgICAnKTsnLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgY3VzdG9tIGxpbnRpbmcgcnVsZXMgdG8gdGhlIHByb2plY3QncyBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gcnVsZXMgLSBBIHJlY29yZCBvZiBydWxlIG5hbWVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIGNvbmZpZ3VyYXRpb25zLlxuICAgKi9cbiAgcHVibGljIGFkZFJ1bGVzKHJ1bGVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KTogdm9pZCB7XG4gICAgdGhpcy5ydWxlcyA9IHsgLi4udGhpcy5ydWxlcywgLi4ucnVsZXMgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGN1c3RvbSBpZ25vcmUgcGF0dGVybnMgdG8gdGhlIHByb2plY3QncyBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gcGF0dGVybnMgLSBBbiBhcnJheSBvZiBmaWxlIG9yIGRpcmVjdG9yeSBwYXR0ZXJucyB0byBiZSBpZ25vcmVkLlxuICAgKi9cbiAgcHVibGljIGFkZElnbm9yZVBhdHRlcm5zKHBhdHRlcm5zOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIHRoaXMuaWdub3JlUGF0dGVybnMgPSBbLi4udGhpcy5pZ25vcmVQYXR0ZXJucywgLi4ucGF0dGVybnNdO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHJlZ2lzdGVyQ29uZmlnKCk6IHZvaWQge1xuICAgIGlmIChpc1ZhbGlkUHJvamVjdCh0aGlzLnByb2plY3QpKSB7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykubnBtQ29uZmlnPy5hZGREZXZEZXBlbmRlbmNpZXModGhpcy5hZGRpdGlvbmFsRGV2RGVwZW5kZW5jaWVzKTtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5ucG1Db25maWc/LmFkZFNjcmlwdHModGhpcy5hZGRpdGlvbmFsU2NyaXB0cyk7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykucHJldHRpZXJDb25maWc/LmFkZElnbm9yZVBhdHRlcm5zKHRoaXMuYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgYXBwbHlDb25maWcoKTogdm9pZCB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZSlbMF07XG4gICAgbmV3IFRleHRGaWxlKHRoaXMucHJvamVjdCwgZmlsZVBhdGgsIHtcbiAgICAgIGxpbmVzOiB0aGlzLmNvbmZpZ0ZpbGVbZmlsZVBhdGhdLFxuICAgIH0pO1xuICB9XG59XG4iXX0=
"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrettierConfigBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const config_1 = require("../config");
const javascript_1 = require("projen/lib/javascript");
const utils_1 = require("../../util/utils");
/**
 * Base class for implementing all relevant Prettier configuration.
 *
 * This class acts as a base for handling Prettier configuration within projects.
 */
class PrettierConfigBase extends config_1.Config {
    constructor(project) {
        super(project);
        this.ignorePatterns = this.standardIgnorePatterns;
    }
    /**
     * Gets the standard ignore patterns required for configuration.
     *
     * @returns A list of ignore patterns.
     */
    get standardIgnorePatterns() {
        return ['/.prettierignore', '/.prettierrc.json'];
    }
    get additionalDevDependencies() {
        return ['prettier@^3.4.2'];
    }
    get additionalScripts() {
        return {
            prettier: 'prettier . --write',
        };
    }
    get configFile() {
        return {
            '.prettierrc.json': {
                overrides: [
                    {
                        files: '*.*',
                        options: {
                            semi: true,
                            trailingComma: javascript_1.TrailingComma.ALL,
                            singleQuote: true,
                            printWidth: 120,
                            tabWidth: 2,
                        },
                    },
                ],
            },
        };
    }
    get ignoreFile() {
        return {
            '.prettierignore': [...this.ignorePatterns],
        };
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
     * Creates the configuration file in the project directory.
     */
    createConfig() {
        const filePath = Object.keys(this.configFile)[0];
        new projen_1.JsonFile(this.project, filePath, {
            obj: this.configFile[filePath],
        });
    }
    /**
     * Creates the ignore file in the project directory.
     */
    createIgnore() {
        const filePath = Object.keys(this.ignoreFile)[0];
        new projen_1.TextFile(this.project, filePath, {
            lines: this.ignoreFile[filePath],
        });
    }
    registerConfig() {
        if ((0, utils_1.isValidProject)(this.project)) {
            this.project.npmConfig?.addDevDependencies(this.additionalDevDependencies);
            this.project.npmConfig?.addScripts(this.additionalScripts);
        }
    }
    applyConfig() {
        this.createConfig();
        this.createIgnore();
    }
}
exports.PrettierConfigBase = PrettierConfigBase;
_a = JSII_RTTI_SYMBOL_1;
PrettierConfigBase[_a] = { fqn: "@dxfrontier/projen-template-projects.PrettierConfigBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHRpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYmFzZS9jb25maWcvcHJldHRpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBNEM7QUFDNUMsc0NBQW1DO0FBQ25DLHNEQUFzRDtBQUV0RCw0Q0FBa0Q7QUFFbEQ7Ozs7R0FJRztBQUNILE1BQWEsa0JBQW1CLFNBQVEsZUFBTTtJQUc1QyxZQUFZLE9BQXFCO1FBQy9CLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVmLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ3BELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxzQkFBc0I7UUFDbEMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELElBQXVCLHlCQUF5QjtRQUM5QyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBdUIsaUJBQWlCO1FBQ3RDLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQW9CO1NBQy9CLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBdUIsVUFBVTtRQUMvQixPQUFPO1lBQ0wsa0JBQWtCLEVBQUU7Z0JBQ2xCLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxLQUFLLEVBQUUsS0FBSzt3QkFDWixPQUFPLEVBQUU7NEJBQ1AsSUFBSSxFQUFFLElBQUk7NEJBQ1YsYUFBYSxFQUFFLDBCQUFhLENBQUMsR0FBRzs0QkFDaEMsV0FBVyxFQUFFLElBQUk7NEJBQ2pCLFVBQVUsRUFBRSxHQUFHOzRCQUNmLFFBQVEsRUFBRSxDQUFDO3lCQUNaO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELElBQXVCLFVBQVU7UUFDL0IsT0FBTztZQUNMLGlCQUFpQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQzVDLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGlCQUFpQixDQUFDLFFBQWtCO1FBQ3pDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQ7O09BRUc7SUFDTyxZQUFZO1FBQ3BCLE1BQU0sUUFBUSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksaUJBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRTtZQUNuQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDL0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ08sWUFBWTtRQUNwQixNQUFNLFFBQVEsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUU7WUFDbkMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ2pDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFZSxjQUFjO1FBQzVCLElBQUksSUFBQSxzQkFBYyxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUF3QixDQUFDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUM1RixJQUFJLENBQUMsT0FBd0IsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9FLENBQUM7SUFDSCxDQUFDO0lBRWUsV0FBVztRQUN6QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7O0FBNUZILGdEQTZGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEpzb25GaWxlLCBUZXh0RmlsZSB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgVHJhaWxpbmdDb21tYSB9IGZyb20gJ3Byb2plbi9saWIvamF2YXNjcmlwdCc7XG5pbXBvcnQgeyBDb25maWdGaWxlLCBQcm9qZWN0VHlwZXMgfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJztcbmltcG9ydCB7IGlzVmFsaWRQcm9qZWN0IH0gZnJvbSAnLi4vLi4vdXRpbC91dGlscyc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBQcmV0dGllciBjb25maWd1cmF0aW9uLlxuICpcbiAqIFRoaXMgY2xhc3MgYWN0cyBhcyBhIGJhc2UgZm9yIGhhbmRsaW5nIFByZXR0aWVyIGNvbmZpZ3VyYXRpb24gd2l0aGluIHByb2plY3RzLlxuICovXG5leHBvcnQgY2xhc3MgUHJldHRpZXJDb25maWdCYXNlIGV4dGVuZHMgQ29uZmlnIHtcbiAgcHJvdGVjdGVkIGlnbm9yZVBhdHRlcm5zOiBzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBQcm9qZWN0VHlwZXMpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcblxuICAgIHRoaXMuaWdub3JlUGF0dGVybnMgPSB0aGlzLnN0YW5kYXJkSWdub3JlUGF0dGVybnM7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgc3RhbmRhcmQgaWdub3JlIHBhdHRlcm5zIHJlcXVpcmVkIGZvciBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGxpc3Qgb2YgaWdub3JlIHBhdHRlcm5zLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzdGFuZGFyZElnbm9yZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gWycvLnByZXR0aWVyaWdub3JlJywgJy8ucHJldHRpZXJyYy5qc29uJ107XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJ3ByZXR0aWVyQF4zLjQuMiddO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2NyaXB0cygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJldHRpZXI6ICdwcmV0dGllciAuIC0td3JpdGUnLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGNvbmZpZ0ZpbGUoKTogQ29uZmlnRmlsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcucHJldHRpZXJyYy5qc29uJzoge1xuICAgICAgICBvdmVycmlkZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWxlczogJyouKicsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgIHNlbWk6IHRydWUsXG4gICAgICAgICAgICAgIHRyYWlsaW5nQ29tbWE6IFRyYWlsaW5nQ29tbWEuQUxMLFxuICAgICAgICAgICAgICBzaW5nbGVRdW90ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgcHJpbnRXaWR0aDogMTIwLFxuICAgICAgICAgICAgICB0YWJXaWR0aDogMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgaWdub3JlRmlsZSgpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnLnByZXR0aWVyaWdub3JlJzogWy4uLnRoaXMuaWdub3JlUGF0dGVybnNdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBjdXN0b20gaWdub3JlIHBhdHRlcm5zIHRvIHRoZSBwcm9qZWN0J3MgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHBhdHRlcm5zIC0gQW4gYXJyYXkgb2YgZmlsZSBvciBkaXJlY3RvcnkgcGF0dGVybnMgdG8gYmUgaWdub3JlZC5cbiAgICovXG4gIHB1YmxpYyBhZGRJZ25vcmVQYXR0ZXJucyhwYXR0ZXJuczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICB0aGlzLmlnbm9yZVBhdHRlcm5zID0gWy4uLnRoaXMuaWdub3JlUGF0dGVybnMsIC4uLnBhdHRlcm5zXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBjb25maWd1cmF0aW9uIGZpbGUgaW4gdGhlIHByb2plY3QgZGlyZWN0b3J5LlxuICAgKi9cbiAgcHJvdGVjdGVkIGNyZWF0ZUNvbmZpZygpOiB2b2lkIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlKVswXTtcbiAgICBuZXcgSnNvbkZpbGUodGhpcy5wcm9qZWN0LCBmaWxlUGF0aCwge1xuICAgICAgb2JqOiB0aGlzLmNvbmZpZ0ZpbGVbZmlsZVBhdGhdLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIGlnbm9yZSBmaWxlIGluIHRoZSBwcm9qZWN0IGRpcmVjdG9yeS5cbiAgICovXG4gIHByb3RlY3RlZCBjcmVhdGVJZ25vcmUoKTogdm9pZCB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuaWdub3JlRmlsZSlbMF07XG4gICAgbmV3IFRleHRGaWxlKHRoaXMucHJvamVjdCwgZmlsZVBhdGgsIHtcbiAgICAgIGxpbmVzOiB0aGlzLmlnbm9yZUZpbGVbZmlsZVBhdGhdLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHJlZ2lzdGVyQ29uZmlnKCk6IHZvaWQge1xuICAgIGlmIChpc1ZhbGlkUHJvamVjdCh0aGlzLnByb2plY3QpKSB7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykubnBtQ29uZmlnPy5hZGREZXZEZXBlbmRlbmNpZXModGhpcy5hZGRpdGlvbmFsRGV2RGVwZW5kZW5jaWVzKTtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5ucG1Db25maWc/LmFkZFNjcmlwdHModGhpcy5hZGRpdGlvbmFsU2NyaXB0cyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIGFwcGx5Q29uZmlnKCk6IHZvaWQge1xuICAgIHRoaXMuY3JlYXRlQ29uZmlnKCk7XG4gICAgdGhpcy5jcmVhdGVJZ25vcmUoKTtcbiAgfVxufVxuIl19
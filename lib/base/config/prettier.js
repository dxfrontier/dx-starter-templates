"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrettierConfigBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const config_1 = require("../config");
const javascript_1 = require("projen/lib/javascript");
const utils_1 = require("../../utils");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHRpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYmFzZS9jb25maWcvcHJldHRpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBNEM7QUFDNUMsc0NBQW1DO0FBQ25DLHNEQUFzRDtBQUV0RCx1Q0FBNkM7QUFFN0M7Ozs7R0FJRztBQUNILE1BQWEsa0JBQW1CLFNBQVEsZUFBTTtJQUc1QyxZQUFZLE9BQXFCO1FBQy9CLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVmLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ3BELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxzQkFBc0I7UUFDbEMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELElBQXVCLHlCQUF5QjtRQUM5QyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBdUIsaUJBQWlCO1FBQ3RDLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQW9CO1NBQy9CLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBdUIsVUFBVTtRQUMvQixPQUFPO1lBQ0wsa0JBQWtCLEVBQUU7Z0JBQ2xCLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxLQUFLLEVBQUUsS0FBSzt3QkFDWixPQUFPLEVBQUU7NEJBQ1AsSUFBSSxFQUFFLElBQUk7NEJBQ1YsYUFBYSxFQUFFLDBCQUFhLENBQUMsR0FBRzs0QkFDaEMsV0FBVyxFQUFFLElBQUk7NEJBQ2pCLFVBQVUsRUFBRSxHQUFHOzRCQUNmLFFBQVEsRUFBRSxDQUFDO3lCQUNaO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELElBQXVCLFVBQVU7UUFDL0IsT0FBTztZQUNMLGlCQUFpQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQzVDLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGlCQUFpQixDQUFDLFFBQWtCO1FBQ3pDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQ7O09BRUc7SUFDTyxZQUFZO1FBQ3BCLE1BQU0sUUFBUSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksaUJBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRTtZQUNuQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDL0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ08sWUFBWTtRQUNwQixNQUFNLFFBQVEsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUU7WUFDbkMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ2pDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFZSxjQUFjO1FBQzVCLElBQUksSUFBQSxzQkFBYyxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUF3QixDQUFDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUM1RixJQUFJLENBQUMsT0FBd0IsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9FLENBQUM7SUFDSCxDQUFDO0lBRWUsV0FBVztRQUN6QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7O0FBNUZILGdEQTZGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEpzb25GaWxlLCBUZXh0RmlsZSB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgVHJhaWxpbmdDb21tYSB9IGZyb20gJ3Byb2plbi9saWIvamF2YXNjcmlwdCc7XG5pbXBvcnQgeyBDb25maWdGaWxlLCBQcm9qZWN0VHlwZXMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBpc1ZhbGlkUHJvamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IFByZXR0aWVyIGNvbmZpZ3VyYXRpb24uXG4gKlxuICogVGhpcyBjbGFzcyBhY3RzIGFzIGEgYmFzZSBmb3IgaGFuZGxpbmcgUHJldHRpZXIgY29uZmlndXJhdGlvbiB3aXRoaW4gcHJvamVjdHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBQcmV0dGllckNvbmZpZ0Jhc2UgZXh0ZW5kcyBDb25maWcge1xuICBwcm90ZWN0ZWQgaWdub3JlUGF0dGVybnM6IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFByb2plY3RUeXBlcykge1xuICAgIHN1cGVyKHByb2plY3QpO1xuXG4gICAgdGhpcy5pZ25vcmVQYXR0ZXJucyA9IHRoaXMuc3RhbmRhcmRJZ25vcmVQYXR0ZXJucztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBzdGFuZGFyZCBpZ25vcmUgcGF0dGVybnMgcmVxdWlyZWQgZm9yIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIEEgbGlzdCBvZiBpZ25vcmUgcGF0dGVybnMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHN0YW5kYXJkSWdub3JlUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJy8ucHJldHRpZXJpZ25vcmUnLCAnLy5wcmV0dGllcnJjLmpzb24nXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbERldkRlcGVuZGVuY2llcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFsncHJldHRpZXJAXjMuNC4yJ107XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxTY3JpcHRzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIHJldHVybiB7XG4gICAgICBwcmV0dGllcjogJ3ByZXR0aWVyIC4gLS13cml0ZScsXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgY29uZmlnRmlsZSgpOiBDb25maWdGaWxlIHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5wcmV0dGllcnJjLmpzb24nOiB7XG4gICAgICAgIG92ZXJyaWRlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpbGVzOiAnKi4qJyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgc2VtaTogdHJ1ZSxcbiAgICAgICAgICAgICAgdHJhaWxpbmdDb21tYTogVHJhaWxpbmdDb21tYS5BTEwsXG4gICAgICAgICAgICAgIHNpbmdsZVF1b3RlOiB0cnVlLFxuICAgICAgICAgICAgICBwcmludFdpZHRoOiAxMjAsXG4gICAgICAgICAgICAgIHRhYldpZHRoOiAyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBpZ25vcmVGaWxlKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcucHJldHRpZXJpZ25vcmUnOiBbLi4udGhpcy5pZ25vcmVQYXR0ZXJuc10sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGN1c3RvbSBpZ25vcmUgcGF0dGVybnMgdG8gdGhlIHByb2plY3QncyBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gcGF0dGVybnMgLSBBbiBhcnJheSBvZiBmaWxlIG9yIGRpcmVjdG9yeSBwYXR0ZXJucyB0byBiZSBpZ25vcmVkLlxuICAgKi9cbiAgcHVibGljIGFkZElnbm9yZVBhdHRlcm5zKHBhdHRlcm5zOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIHRoaXMuaWdub3JlUGF0dGVybnMgPSBbLi4udGhpcy5pZ25vcmVQYXR0ZXJucywgLi4ucGF0dGVybnNdO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIGNvbmZpZ3VyYXRpb24gZmlsZSBpbiB0aGUgcHJvamVjdCBkaXJlY3RvcnkuXG4gICAqL1xuICBwcm90ZWN0ZWQgY3JlYXRlQ29uZmlnKCk6IHZvaWQge1xuICAgIGNvbnN0IGZpbGVQYXRoOiBzdHJpbmcgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ0ZpbGUpWzBdO1xuICAgIG5ldyBKc29uRmlsZSh0aGlzLnByb2plY3QsIGZpbGVQYXRoLCB7XG4gICAgICBvYmo6IHRoaXMuY29uZmlnRmlsZVtmaWxlUGF0aF0sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgaWdub3JlIGZpbGUgaW4gdGhlIHByb2plY3QgZGlyZWN0b3J5LlxuICAgKi9cbiAgcHJvdGVjdGVkIGNyZWF0ZUlnbm9yZSgpOiB2b2lkIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5pZ25vcmVGaWxlKVswXTtcbiAgICBuZXcgVGV4dEZpbGUodGhpcy5wcm9qZWN0LCBmaWxlUGF0aCwge1xuICAgICAgbGluZXM6IHRoaXMuaWdub3JlRmlsZVtmaWxlUGF0aF0sXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcmVnaXN0ZXJDb25maWcoKTogdm9pZCB7XG4gICAgaWYgKGlzVmFsaWRQcm9qZWN0KHRoaXMucHJvamVjdCkpIHtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5ucG1Db25maWc/LmFkZERldkRlcGVuZGVuY2llcyh0aGlzLmFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMpO1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLm5wbUNvbmZpZz8uYWRkU2NyaXB0cyh0aGlzLmFkZGl0aW9uYWxTY3JpcHRzKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgYXBwbHlDb25maWcoKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVDb25maWcoKTtcbiAgICB0aGlzLmNyZWF0ZUlnbm9yZSgpO1xuICB9XG59XG4iXX0=
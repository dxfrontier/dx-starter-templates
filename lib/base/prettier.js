"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrettierConfigBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const config_1 = require("./config");
const javascript_1 = require("projen/lib/javascript");
const utils_1 = require("../utils");
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
    /**
     * Gets the additional development dependencies required for configuration.
     *
     * @returns A list of package names with version specifications.
     */
    get additionalDevDependencies() {
        return ['prettier@^3.4.2'];
    }
    /**
     * Gets the additional npm scripts to be added to the project's configuration.
     *
     * @returns A record of script names and their corresponding commands.
     */
    get additionalScripts() {
        return {
            prettier: 'prettier . --write',
        };
    }
    /**
     * Gets the config file to be added to the project's configuration.
     *
     * @returns A record of the having the path to the file as key and the content as value.
     */
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
    /**
     * Gets the ignore file to be added to the project's configuration.
     *
     * @returns A record of the having the path to the file as key and the content as value.
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHRpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYmFzZS9wcmV0dGllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUE0QztBQUM1QyxxQ0FBa0M7QUFDbEMsc0RBQXNEO0FBRXRELG9DQUEwQztBQUUxQzs7OztHQUlHO0FBQ0gsTUFBYSxrQkFBbUIsU0FBUSxlQUFNO0lBRzVDLFlBQVksT0FBcUI7UUFDL0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWYsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDcEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLHNCQUFzQjtRQUNsQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMseUJBQXlCO1FBQ3JDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxpQkFBaUI7UUFDN0IsT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7U0FDL0IsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxVQUFVO1FBQ3RCLE9BQU87WUFDTCxrQkFBa0IsRUFBRTtnQkFDbEIsU0FBUyxFQUFFO29CQUNUO3dCQUNFLEtBQUssRUFBRSxLQUFLO3dCQUNaLE9BQU8sRUFBRTs0QkFDUCxJQUFJLEVBQUUsSUFBSTs0QkFDVixhQUFhLEVBQUUsMEJBQWEsQ0FBQyxHQUFHOzRCQUNoQyxXQUFXLEVBQUUsSUFBSTs0QkFDakIsVUFBVSxFQUFFLEdBQUc7NEJBQ2YsUUFBUSxFQUFFLENBQUM7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsVUFBVTtRQUN0QixPQUFPO1lBQ0wsaUJBQWlCLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDNUMsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksaUJBQWlCLENBQUMsUUFBa0I7UUFDekMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRDs7T0FFRztJQUNPLFlBQVk7UUFDcEIsTUFBTSxRQUFRLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxpQkFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFO1lBQ25DLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDTyxZQUFZO1FBQ3BCLE1BQU0sUUFBUSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksaUJBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRTtZQUNuQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDakMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVlLGNBQWM7UUFDNUIsSUFBSSxJQUFBLHNCQUFjLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLE9BQXdCLENBQUMsU0FBUyxFQUFFLGtCQUFrQixDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQzVGLElBQUksQ0FBQyxPQUF3QixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0UsQ0FBQztJQUNILENBQUM7SUFFZSxXQUFXO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7QUFoSEgsZ0RBaUhDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSnNvbkZpbGUsIFRleHRGaWxlIH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IFRyYWlsaW5nQ29tbWEgfSBmcm9tICdwcm9qZW4vbGliL2phdmFzY3JpcHQnO1xuaW1wb3J0IHsgUHJvamVjdFR5cGVzLCBTZXR0aW5ncyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGlzVmFsaWRQcm9qZWN0IH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgUHJldHRpZXIgY29uZmlndXJhdGlvbi5cbiAqXG4gKiBUaGlzIGNsYXNzIGFjdHMgYXMgYSBiYXNlIGZvciBoYW5kbGluZyBQcmV0dGllciBjb25maWd1cmF0aW9uIHdpdGhpbiBwcm9qZWN0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIFByZXR0aWVyQ29uZmlnQmFzZSBleHRlbmRzIENvbmZpZyB7XG4gIHByb3RlY3RlZCBpZ25vcmVQYXR0ZXJuczogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IocHJvamVjdDogUHJvamVjdFR5cGVzKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG5cbiAgICB0aGlzLmlnbm9yZVBhdHRlcm5zID0gdGhpcy5zdGFuZGFyZElnbm9yZVBhdHRlcm5zO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHN0YW5kYXJkIGlnbm9yZSBwYXR0ZXJucyByZXF1aXJlZCBmb3IgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMgQSBsaXN0IG9mIGlnbm9yZSBwYXR0ZXJucy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc3RhbmRhcmRJZ25vcmVQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFsnLy5wcmV0dGllcmlnbm9yZScsICcvLnByZXR0aWVycmMuanNvbiddO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGFkZGl0aW9uYWwgZGV2ZWxvcG1lbnQgZGVwZW5kZW5jaWVzIHJlcXVpcmVkIGZvciBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGxpc3Qgb2YgcGFja2FnZSBuYW1lcyB3aXRoIHZlcnNpb24gc3BlY2lmaWNhdGlvbnMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJ3ByZXR0aWVyQF4zLjQuMiddO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGFkZGl0aW9uYWwgbnBtIHNjcmlwdHMgdG8gYmUgYWRkZWQgdG8gdGhlIHByb2plY3QncyBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIHJlY29yZCBvZiBzY3JpcHQgbmFtZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgY29tbWFuZHMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGFkZGl0aW9uYWxTY3JpcHRzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIHJldHVybiB7XG4gICAgICBwcmV0dGllcjogJ3ByZXR0aWVyIC4gLS13cml0ZScsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjb25maWcgZmlsZSB0byBiZSBhZGRlZCB0byB0aGUgcHJvamVjdCdzIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIEEgcmVjb3JkIG9mIHRoZSBoYXZpbmcgdGhlIHBhdGggdG8gdGhlIGZpbGUgYXMga2V5IGFuZCB0aGUgY29udGVudCBhcyB2YWx1ZS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZSgpOiBTZXR0aW5ncyB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcucHJldHRpZXJyYy5qc29uJzoge1xuICAgICAgICBvdmVycmlkZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWxlczogJyouKicsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgIHNlbWk6IHRydWUsXG4gICAgICAgICAgICAgIHRyYWlsaW5nQ29tbWE6IFRyYWlsaW5nQ29tbWEuQUxMLFxuICAgICAgICAgICAgICBzaW5nbGVRdW90ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgcHJpbnRXaWR0aDogMTIwLFxuICAgICAgICAgICAgICB0YWJXaWR0aDogMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBpZ25vcmUgZmlsZSB0byBiZSBhZGRlZCB0byB0aGUgcHJvamVjdCdzIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIEEgcmVjb3JkIG9mIHRoZSBoYXZpbmcgdGhlIHBhdGggdG8gdGhlIGZpbGUgYXMga2V5IGFuZCB0aGUgY29udGVudCBhcyB2YWx1ZS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgaWdub3JlRmlsZSgpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnLnByZXR0aWVyaWdub3JlJzogWy4uLnRoaXMuaWdub3JlUGF0dGVybnNdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBjdXN0b20gaWdub3JlIHBhdHRlcm5zIHRvIHRoZSBwcm9qZWN0J3MgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHBhdHRlcm5zIC0gQW4gYXJyYXkgb2YgZmlsZSBvciBkaXJlY3RvcnkgcGF0dGVybnMgdG8gYmUgaWdub3JlZC5cbiAgICovXG4gIHB1YmxpYyBhZGRJZ25vcmVQYXR0ZXJucyhwYXR0ZXJuczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICB0aGlzLmlnbm9yZVBhdHRlcm5zID0gWy4uLnRoaXMuaWdub3JlUGF0dGVybnMsIC4uLnBhdHRlcm5zXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBjb25maWd1cmF0aW9uIGZpbGUgaW4gdGhlIHByb2plY3QgZGlyZWN0b3J5LlxuICAgKi9cbiAgcHJvdGVjdGVkIGNyZWF0ZUNvbmZpZygpOiB2b2lkIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlKVswXTtcbiAgICBuZXcgSnNvbkZpbGUodGhpcy5wcm9qZWN0LCBmaWxlUGF0aCwge1xuICAgICAgb2JqOiB0aGlzLmNvbmZpZ0ZpbGVbZmlsZVBhdGhdLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIGlnbm9yZSBmaWxlIGluIHRoZSBwcm9qZWN0IGRpcmVjdG9yeS5cbiAgICovXG4gIHByb3RlY3RlZCBjcmVhdGVJZ25vcmUoKTogdm9pZCB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuaWdub3JlRmlsZSlbMF07XG4gICAgbmV3IFRleHRGaWxlKHRoaXMucHJvamVjdCwgZmlsZVBhdGgsIHtcbiAgICAgIGxpbmVzOiB0aGlzLmlnbm9yZUZpbGVbZmlsZVBhdGhdLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHJlZ2lzdGVyQ29uZmlnKCk6IHZvaWQge1xuICAgIGlmIChpc1ZhbGlkUHJvamVjdCh0aGlzLnByb2plY3QpKSB7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykubnBtQ29uZmlnPy5hZGREZXZEZXBlbmRlbmNpZXModGhpcy5hZGRpdGlvbmFsRGV2RGVwZW5kZW5jaWVzKTtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5ucG1Db25maWc/LmFkZFNjcmlwdHModGhpcy5hZGRpdGlvbmFsU2NyaXB0cyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIGFwcGx5Q29uZmlnKCk6IHZvaWQge1xuICAgIHRoaXMuY3JlYXRlQ29uZmlnKCk7XG4gICAgdGhpcy5jcmVhdGVJZ25vcmUoKTtcbiAgfVxufVxuIl19
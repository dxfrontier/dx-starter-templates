"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeScriptConfigGitHubAction = void 0;
const project_1 = require("../../base/project");
const typescript_1 = require("../../base/config/typescript");
/**
 * Implementing all relevant TypeScript configuration for the GitHubAction project.
 */
class TypeScriptConfigGitHubAction extends typescript_1.TypeScriptConfigBase {
    get additionalDevDependencies() {
        return [];
    }
    get additionalIgnorePatterns() {
        if (this.project instanceof project_1.BaseProject && !this.project.typescript) {
            return [];
        }
        return super.additionalIgnorePatterns;
    }
    /**
     * Gets the development dependencies to be removed from configuration.
     */
    get removeDevDependencies() {
        return ['typescript'];
    }
    /**
     * Removes the configuration module related config file.
     */
    removeConfigFile() {
        const filePath = Object.keys(this.configFile)[0];
        if (this.project instanceof project_1.BaseProject && !this.project.typescript) {
            this.project.tryRemoveFile(filePath);
        }
    }
    registerConfig() {
        super.registerConfig();
        this.removeConfigFile();
        if (this.project instanceof project_1.BaseProject) {
            this.project.npmConfig?.patchDevDependencyRemove(this.removeDevDependencies);
        }
    }
}
exports.TypeScriptConfigGitHubAction = TypeScriptConfigGitHubAction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXNjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9naXRodWItYWN0aW9uL2NvbmZpZy90eXBlc2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdEQUFpRDtBQUNqRCw2REFBb0U7QUFFcEU7O0dBRUc7QUFDSCxNQUFhLDRCQUE2QixTQUFRLGlDQUFvQjtJQUNwRSxJQUF1Qix5QkFBeUI7UUFDOUMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsSUFBdUIsd0JBQXdCO1FBQzdDLElBQUksSUFBSSxDQUFDLE9BQU8sWUFBWSxxQkFBVyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNwRSxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUM7UUFFRCxPQUFPLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFjLHFCQUFxQjtRQUNqQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVEOztPQUVHO0lBQ08sZ0JBQWdCO1FBQ3hCLE1BQU0sUUFBUSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksSUFBSSxDQUFDLE9BQU8sWUFBWSxxQkFBVyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNwRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QyxDQUFDO0lBQ0gsQ0FBQztJQUVlLGNBQWM7UUFDNUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLE9BQU8sWUFBWSxxQkFBVyxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsd0JBQXdCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDL0UsQ0FBQztJQUNILENBQUM7Q0FDRjtBQXJDRCxvRUFxQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlUHJvamVjdCB9IGZyb20gJy4uLy4uL2Jhc2UvcHJvamVjdCc7XG5pbXBvcnQgeyBUeXBlU2NyaXB0Q29uZmlnQmFzZSB9IGZyb20gJy4uLy4uL2Jhc2UvY29uZmlnL3R5cGVzY3JpcHQnO1xuXG4vKipcbiAqIEltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgVHlwZVNjcmlwdCBjb25maWd1cmF0aW9uIGZvciB0aGUgR2l0SHViQWN0aW9uIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBUeXBlU2NyaXB0Q29uZmlnR2l0SHViQWN0aW9uIGV4dGVuZHMgVHlwZVNjcmlwdENvbmZpZ0Jhc2Uge1xuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICBpZiAodGhpcy5wcm9qZWN0IGluc3RhbmNlb2YgQmFzZVByb2plY3QgJiYgIXRoaXMucHJvamVjdC50eXBlc2NyaXB0KSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLmFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBkZXZlbG9wbWVudCBkZXBlbmRlbmNpZXMgdG8gYmUgcmVtb3ZlZCBmcm9tIGNvbmZpZ3VyYXRpb24uXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHJlbW92ZURldkRlcGVuZGVuY2llcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFsndHlwZXNjcmlwdCddO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGNvbmZpZ3VyYXRpb24gbW9kdWxlIHJlbGF0ZWQgY29uZmlnIGZpbGUuXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVtb3ZlQ29uZmlnRmlsZSgpOiB2b2lkIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlKVswXTtcbiAgICBpZiAodGhpcy5wcm9qZWN0IGluc3RhbmNlb2YgQmFzZVByb2plY3QgJiYgIXRoaXMucHJvamVjdC50eXBlc2NyaXB0KSB7XG4gICAgICB0aGlzLnByb2plY3QudHJ5UmVtb3ZlRmlsZShmaWxlUGF0aCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHJlZ2lzdGVyQ29uZmlnKCk6IHZvaWQge1xuICAgIHN1cGVyLnJlZ2lzdGVyQ29uZmlnKCk7XG4gICAgdGhpcy5yZW1vdmVDb25maWdGaWxlKCk7XG4gICAgaWYgKHRoaXMucHJvamVjdCBpbnN0YW5jZW9mIEJhc2VQcm9qZWN0KSB7XG4gICAgICB0aGlzLnByb2plY3QubnBtQ29uZmlnPy5wYXRjaERldkRlcGVuZGVuY3lSZW1vdmUodGhpcy5yZW1vdmVEZXZEZXBlbmRlbmNpZXMpO1xuICAgIH1cbiAgfVxufVxuIl19
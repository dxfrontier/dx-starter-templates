"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HuskyConfigBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const config_1 = require("../config");
const utils_1 = require("../../util/utils");
const constants_1 = require("../../util/constants");
/**
 * Base class for implementing all relevant Husky configuration.
 *
 * This class acts as a base for handling Husky configuration within projects.
 */
class HuskyConfigBase extends config_1.Config {
    get additionalDevDependencies() {
        return [`${constants_1.constants.husky.NAME}@${constants_1.constants.husky.VERSION}`];
    }
    get additionalScripts() {
        return {
            prepare: 'husky || true',
        };
    }
    get additionalIgnorePatterns() {
        const patterns = [];
        for (const filePath in this.configFile) {
            patterns.push(`/${filePath}`);
        }
        return patterns;
    }
    get configFile() {
        return {
            '.husky/commit-msg': ['npx --no-install commitlint --edit "$1"'],
            '.husky/pre-commit': ['npx lint-staged'],
        };
    }
    registerConfig() {
        if (utils_1.util.isValidProject(this.project)) {
            this.project.npmConfig?.addDevDependencies(this.additionalDevDependencies);
            this.project.npmConfig?.addScripts(this.additionalScripts);
            this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
        }
    }
    applyConfig() {
        for (const filePath in this.configFile) {
            new projen_1.TextFile(this.project, filePath, {
                lines: this.configFile[filePath],
            });
        }
    }
}
exports.HuskyConfigBase = HuskyConfigBase;
_a = JSII_RTTI_SYMBOL_1;
HuskyConfigBase[_a] = { fqn: "@dxfrontier/projen-template-projects.HuskyConfigBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVza3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYmFzZS9jb25maWcvaHVza3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBa0M7QUFDbEMsc0NBQW1DO0FBQ25DLDRDQUF3QztBQUd4QyxvREFBaUQ7QUFFakQ7Ozs7R0FJRztBQUNILE1BQWEsZUFBZ0IsU0FBUSxlQUFNO0lBQ3pDLElBQXVCLHlCQUF5QjtRQUM5QyxPQUFPLENBQUMsR0FBRyxxQkFBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUkscUJBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsSUFBdUIsaUJBQWlCO1FBQ3RDLE9BQU87WUFDTCxPQUFPLEVBQUUsZUFBZTtTQUN6QixDQUFDO0lBQ0osQ0FBQztJQUVELElBQXVCLHdCQUF3QjtRQUM3QyxNQUFNLFFBQVEsR0FBYSxFQUFFLENBQUM7UUFDOUIsS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDdkMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxJQUF1QixVQUFVO1FBQy9CLE9BQU87WUFDTCxtQkFBbUIsRUFBRSxDQUFDLHlDQUF5QyxDQUFDO1lBQ2hFLG1CQUFtQixFQUFFLENBQUMsaUJBQWlCLENBQUM7U0FDekMsQ0FBQztJQUNKLENBQUM7SUFFZSxjQUFjO1FBQzVCLElBQUksWUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsT0FBd0IsQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDNUYsSUFBSSxDQUFDLE9BQXdCLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsT0FBd0IsQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDbEcsQ0FBQztJQUNILENBQUM7SUFFZSxXQUFXO1FBQ3pCLEtBQUssTUFBTSxRQUFRLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3ZDLElBQUksaUJBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRTtnQkFDbkMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFhO2FBQzdDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDOztBQXhDSCwwQ0F5Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0RmlsZSB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgdXRpbCB9IGZyb20gJy4uLy4uL3V0aWwvdXRpbHMnO1xuaW1wb3J0IHsgUHJvamVjdFR5cGVzIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcy9wcm9qZWN0JztcbmltcG9ydCB7IENvbmZpZ0ZpbGUgfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJztcbmltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gJy4uLy4uL3V0aWwvY29uc3RhbnRzJztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IEh1c2t5IGNvbmZpZ3VyYXRpb24uXG4gKlxuICogVGhpcyBjbGFzcyBhY3RzIGFzIGEgYmFzZSBmb3IgaGFuZGxpbmcgSHVza3kgY29uZmlndXJhdGlvbiB3aXRoaW4gcHJvamVjdHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBIdXNreUNvbmZpZ0Jhc2UgZXh0ZW5kcyBDb25maWcge1xuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbYCR7Y29uc3RhbnRzLmh1c2t5Lk5BTUV9QCR7Y29uc3RhbnRzLmh1c2t5LlZFUlNJT059YF07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxTY3JpcHRzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIHJldHVybiB7XG4gICAgICBwcmVwYXJlOiAnaHVza3kgfHwgdHJ1ZScsXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBwYXR0ZXJuczogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGZpbGVQYXRoIGluIHRoaXMuY29uZmlnRmlsZSkge1xuICAgICAgcGF0dGVybnMucHVzaChgLyR7ZmlsZVBhdGh9YCk7XG4gICAgfVxuICAgIHJldHVybiBwYXR0ZXJucztcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgY29uZmlnRmlsZSgpOiBDb25maWdGaWxlIHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5odXNreS9jb21taXQtbXNnJzogWyducHggLS1uby1pbnN0YWxsIGNvbW1pdGxpbnQgLS1lZGl0IFwiJDFcIiddLFxuICAgICAgJy5odXNreS9wcmUtY29tbWl0JzogWyducHggbGludC1zdGFnZWQnXSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHJlZ2lzdGVyQ29uZmlnKCk6IHZvaWQge1xuICAgIGlmICh1dGlsLmlzVmFsaWRQcm9qZWN0KHRoaXMucHJvamVjdCkpIHtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5ucG1Db25maWc/LmFkZERldkRlcGVuZGVuY2llcyh0aGlzLmFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMpO1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLm5wbUNvbmZpZz8uYWRkU2NyaXB0cyh0aGlzLmFkZGl0aW9uYWxTY3JpcHRzKTtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5wcmV0dGllckNvbmZpZz8uYWRkSWdub3JlUGF0dGVybnModGhpcy5hZGRpdGlvbmFsSWdub3JlUGF0dGVybnMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBhcHBseUNvbmZpZygpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGZpbGVQYXRoIGluIHRoaXMuY29uZmlnRmlsZSkge1xuICAgICAgbmV3IFRleHRGaWxlKHRoaXMucHJvamVjdCwgZmlsZVBhdGgsIHtcbiAgICAgICAgbGluZXM6IHRoaXMuY29uZmlnRmlsZVtmaWxlUGF0aF0gYXMgc3RyaW5nW10sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
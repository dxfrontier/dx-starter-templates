"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmConfigJsii = void 0;
const npm_1 = require("../../base/config/npm");
const constants_1 = require("../../util/constants");
const project_1 = require(".././project");
/**
 * Implementing all relevant NPM configuration for the Jsii project.
 */
class NpmConfigJsii extends npm_1.NpmConfigBase {
    get additionalDevDependencies() {
        return [
            `${constants_1.constants['jsii'].NAME}@${constants_1.constants['jsii'].VERSION}`,
            `${constants_1.constants['jsii-diff'].NAME}@${constants_1.constants['jsii-diff'].VERSION}`,
            `${constants_1.constants['jsii-docgen'].NAME}@${constants_1.constants['jsii-docgen'].VERSION}`,
            `${constants_1.constants['jsii-pacmak'].NAME}@${constants_1.constants['jsii-pacmak'].VERSION}`,
            `${constants_1.constants['jsii-rosetta'].NAME}@${constants_1.constants['jsii-rosetta'].VERSION}`,
        ];
    }
    get additionalPeerDependencies() {
        return [
            `${constants_1.constants.constructs.NAME}@${constants_1.constants.constructs.VERSION}`,
            `${constants_1.constants.projen.NAME}@${constants_1.constants.projen.VERSION}`,
        ];
    }
    get additionalSettings() {
        return {
            files: ['lib', '.jsii', 'README.md'],
        };
    }
    get additionalIgnorePatterns() {
        return ['docs/', 'test/', 'lib/', '.jsii'];
    }
    /**
     * Gets additional ignore patterns to be added to the project's ignore configuration.
     *
     * @returns A list of ignore patterns.
     */
    get additionalIgnorePrettierPatterns() {
        return [
            '*.snap',
            '/.projen/**',
            '/.projen/deps.json',
            '/.projen/files.json',
            '/.projen/tasks.json',
            '/package-lock.json',
            '/package.json',
            '/API.md',
        ];
    }
    registerConfig() {
        this.addDevDependencies(this.additionalDevDependencies);
        this.addPeerDependencies(this.additionalPeerDependencies);
        this.addSettings(this.additionalSettings);
        if (this.project instanceof project_1.JsiiProject) {
            this.project.eslintConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
            this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePrettierPatterns);
        }
    }
    applyConfig() {
        if (this.project instanceof project_1.JsiiProject) {
            this.project.addDeps(...this.dependencies);
            this.project.addDevDeps(...this.devDependencies);
            this.project.addPeerDeps(...this.peerDependencies);
            this.project.addFields(this.settings);
        }
        this.patchScriptsAdd(this.scripts);
    }
}
exports.NpmConfigJsii = NpmConfigJsii;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2pzaWkvY29uZmlnL25wbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBc0Q7QUFDdEQsb0RBQWlEO0FBRWpELDBDQUEyQztBQUUzQzs7R0FFRztBQUNILE1BQWEsYUFBYyxTQUFRLG1CQUFhO0lBQzlDLElBQXVCLHlCQUF5QjtRQUM5QyxPQUFPO1lBQ0wsR0FBRyxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUN4RCxHQUFHLHFCQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxJQUFJLHFCQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ2xFLEdBQUcscUJBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLElBQUkscUJBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDdEUsR0FBRyxxQkFBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksSUFBSSxxQkFBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUN0RSxHQUFHLHFCQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxJQUFJLHFCQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxFQUFFO1NBQ3pFLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBdUIsMEJBQTBCO1FBQy9DLE9BQU87WUFDTCxHQUFHLHFCQUFTLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDOUQsR0FBRyxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUkscUJBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1NBQ3ZELENBQUM7SUFDSixDQUFDO0lBRUQsSUFBdUIsa0JBQWtCO1FBQ3ZDLE9BQU87WUFDTCxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQztTQUNyQyxDQUFDO0lBQ0osQ0FBQztJQUVELElBQXVCLHdCQUF3QjtRQUM3QyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFZLGdDQUFnQztRQUMxQyxPQUFPO1lBQ0wsUUFBUTtZQUNSLGFBQWE7WUFDYixvQkFBb0I7WUFDcEIscUJBQXFCO1lBQ3JCLHFCQUFxQjtZQUNyQixvQkFBb0I7WUFDcEIsZUFBZTtZQUNmLFNBQVM7U0FDVixDQUFDO0lBQ0osQ0FBQztJQUVlLGNBQWM7UUFDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzFDLElBQUksSUFBSSxDQUFDLE9BQU8sWUFBWSxxQkFBVyxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDeEYsQ0FBQztJQUNILENBQUM7SUFFZSxXQUFXO1FBQ3pCLElBQUksSUFBSSxDQUFDLE9BQU8sWUFBWSxxQkFBVyxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Q0FDRjtBQWpFRCxzQ0FpRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOcG1Db25maWdCYXNlIH0gZnJvbSAnLi4vLi4vYmFzZS9jb25maWcvbnBtJztcbmltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gJy4uLy4uL3V0aWwvY29uc3RhbnRzJztcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcyc7XG5pbXBvcnQgeyBKc2lpUHJvamVjdCB9IGZyb20gJy4uLy4vcHJvamVjdCc7XG5cbi8qKlxuICogSW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBOUE0gY29uZmlndXJhdGlvbiBmb3IgdGhlIEpzaWkgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIE5wbUNvbmZpZ0pzaWkgZXh0ZW5kcyBOcG1Db25maWdCYXNlIHtcbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsRGV2RGVwZW5kZW5jaWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW1xuICAgICAgYCR7Y29uc3RhbnRzWydqc2lpJ10uTkFNRX1AJHtjb25zdGFudHNbJ2pzaWknXS5WRVJTSU9OfWAsXG4gICAgICBgJHtjb25zdGFudHNbJ2pzaWktZGlmZiddLk5BTUV9QCR7Y29uc3RhbnRzWydqc2lpLWRpZmYnXS5WRVJTSU9OfWAsXG4gICAgICBgJHtjb25zdGFudHNbJ2pzaWktZG9jZ2VuJ10uTkFNRX1AJHtjb25zdGFudHNbJ2pzaWktZG9jZ2VuJ10uVkVSU0lPTn1gLFxuICAgICAgYCR7Y29uc3RhbnRzWydqc2lpLXBhY21hayddLk5BTUV9QCR7Y29uc3RhbnRzWydqc2lpLXBhY21hayddLlZFUlNJT059YCxcbiAgICAgIGAke2NvbnN0YW50c1snanNpaS1yb3NldHRhJ10uTkFNRX1AJHtjb25zdGFudHNbJ2pzaWktcm9zZXR0YSddLlZFUlNJT059YCxcbiAgICBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsUGVlckRlcGVuZGVuY2llcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGAke2NvbnN0YW50cy5jb25zdHJ1Y3RzLk5BTUV9QCR7Y29uc3RhbnRzLmNvbnN0cnVjdHMuVkVSU0lPTn1gLFxuICAgICAgYCR7Y29uc3RhbnRzLnByb2plbi5OQU1FfUAke2NvbnN0YW50cy5wcm9qZW4uVkVSU0lPTn1gLFxuICAgIF07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxTZXR0aW5ncygpOiBTZXR0aW5ncyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpbGVzOiBbJ2xpYicsICcuanNpaScsICdSRUFETUUubWQnXSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsSWdub3JlUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJ2RvY3MvJywgJ3Rlc3QvJywgJ2xpYi8nLCAnLmpzaWknXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGFkZGl0aW9uYWwgaWdub3JlIHBhdHRlcm5zIHRvIGJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0J3MgaWdub3JlIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIEEgbGlzdCBvZiBpZ25vcmUgcGF0dGVybnMuXG4gICAqL1xuICBwcml2YXRlIGdldCBhZGRpdGlvbmFsSWdub3JlUHJldHRpZXJQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICcqLnNuYXAnLFxuICAgICAgJy8ucHJvamVuLyoqJyxcbiAgICAgICcvLnByb2plbi9kZXBzLmpzb24nLFxuICAgICAgJy8ucHJvamVuL2ZpbGVzLmpzb24nLFxuICAgICAgJy8ucHJvamVuL3Rhc2tzLmpzb24nLFxuICAgICAgJy9wYWNrYWdlLWxvY2suanNvbicsXG4gICAgICAnL3BhY2thZ2UuanNvbicsXG4gICAgICAnL0FQSS5tZCcsXG4gICAgXTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSByZWdpc3RlckNvbmZpZygpOiB2b2lkIHtcbiAgICB0aGlzLmFkZERldkRlcGVuZGVuY2llcyh0aGlzLmFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMpO1xuICAgIHRoaXMuYWRkUGVlckRlcGVuZGVuY2llcyh0aGlzLmFkZGl0aW9uYWxQZWVyRGVwZW5kZW5jaWVzKTtcbiAgICB0aGlzLmFkZFNldHRpbmdzKHRoaXMuYWRkaXRpb25hbFNldHRpbmdzKTtcbiAgICBpZiAodGhpcy5wcm9qZWN0IGluc3RhbmNlb2YgSnNpaVByb2plY3QpIHtcbiAgICAgIHRoaXMucHJvamVjdC5lc2xpbnRDb25maWc/LmFkZElnbm9yZVBhdHRlcm5zKHRoaXMuYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKTtcbiAgICAgIHRoaXMucHJvamVjdC5wcmV0dGllckNvbmZpZz8uYWRkSWdub3JlUGF0dGVybnModGhpcy5hZGRpdGlvbmFsSWdub3JlUHJldHRpZXJQYXR0ZXJucyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIGFwcGx5Q29uZmlnKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnByb2plY3QgaW5zdGFuY2VvZiBKc2lpUHJvamVjdCkge1xuICAgICAgdGhpcy5wcm9qZWN0LmFkZERlcHMoLi4udGhpcy5kZXBlbmRlbmNpZXMpO1xuICAgICAgdGhpcy5wcm9qZWN0LmFkZERldkRlcHMoLi4udGhpcy5kZXZEZXBlbmRlbmNpZXMpO1xuICAgICAgdGhpcy5wcm9qZWN0LmFkZFBlZXJEZXBzKC4uLnRoaXMucGVlckRlcGVuZGVuY2llcyk7XG4gICAgICB0aGlzLnByb2plY3QuYWRkRmllbGRzKHRoaXMuc2V0dGluZ3MpO1xuICAgIH1cbiAgICB0aGlzLnBhdGNoU2NyaXB0c0FkZCh0aGlzLnNjcmlwdHMpO1xuICB9XG59XG4iXX0=
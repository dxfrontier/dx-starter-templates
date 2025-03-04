"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmConfigJsii = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
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
_a = JSII_RTTI_SYMBOL_1;
NpmConfigJsii[_a] = { fqn: "@dxfrontier/projen-template-projects.NpmConfigJsii", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2pzaWkvY29uZmlnL25wbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLCtDQUFzRDtBQUN0RCxvREFBaUQ7QUFFakQsMENBQTJDO0FBRTNDOztHQUVHO0FBQ0gsTUFBYSxhQUFjLFNBQVEsbUJBQWE7SUFDOUMsSUFBdUIseUJBQXlCO1FBQzlDLE9BQU87WUFDTCxHQUFHLHFCQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLHFCQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ3hELEdBQUcscUJBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLElBQUkscUJBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDbEUsR0FBRyxxQkFBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksSUFBSSxxQkFBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUN0RSxHQUFHLHFCQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxJQUFJLHFCQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ3RFLEdBQUcscUJBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLElBQUkscUJBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLEVBQUU7U0FDekUsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUF1QiwwQkFBMEI7UUFDL0MsT0FBTztZQUNMLEdBQUcscUJBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtZQUM5RCxHQUFHLHFCQUFTLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7U0FDdkQsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUF1QixrQkFBa0I7UUFDdkMsT0FBTztZQUNMLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDO1NBQ3JDLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBdUIsd0JBQXdCO1FBQzdDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQVksZ0NBQWdDO1FBQzFDLE9BQU87WUFDTCxRQUFRO1lBQ1IsYUFBYTtZQUNiLG9CQUFvQjtZQUNwQixxQkFBcUI7WUFDckIscUJBQXFCO1lBQ3JCLG9CQUFvQjtZQUNwQixlQUFlO1lBQ2YsU0FBUztTQUNWLENBQUM7SUFDSixDQUFDO0lBRWUsY0FBYztRQUM1QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDMUMsSUFBSSxJQUFJLENBQUMsT0FBTyxZQUFZLHFCQUFXLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUN4RixDQUFDO0lBQ0gsQ0FBQztJQUVlLFdBQVc7UUFDekIsSUFBSSxJQUFJLENBQUMsT0FBTyxZQUFZLHFCQUFXLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7QUFoRUgsc0NBaUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTnBtQ29uZmlnQmFzZSB9IGZyb20gJy4uLy4uL2Jhc2UvY29uZmlnL25wbSc7XG5pbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tICcuLi8uLi91dGlsL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnO1xuaW1wb3J0IHsgSnNpaVByb2plY3QgfSBmcm9tICcuLi8uL3Byb2plY3QnO1xuXG4vKipcbiAqIEltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgTlBNIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBKc2lpIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBOcG1Db25maWdKc2lpIGV4dGVuZHMgTnBtQ29uZmlnQmFzZSB7XG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbERldkRlcGVuZGVuY2llcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGAke2NvbnN0YW50c1snanNpaSddLk5BTUV9QCR7Y29uc3RhbnRzWydqc2lpJ10uVkVSU0lPTn1gLFxuICAgICAgYCR7Y29uc3RhbnRzWydqc2lpLWRpZmYnXS5OQU1FfUAke2NvbnN0YW50c1snanNpaS1kaWZmJ10uVkVSU0lPTn1gLFxuICAgICAgYCR7Y29uc3RhbnRzWydqc2lpLWRvY2dlbiddLk5BTUV9QCR7Y29uc3RhbnRzWydqc2lpLWRvY2dlbiddLlZFUlNJT059YCxcbiAgICAgIGAke2NvbnN0YW50c1snanNpaS1wYWNtYWsnXS5OQU1FfUAke2NvbnN0YW50c1snanNpaS1wYWNtYWsnXS5WRVJTSU9OfWAsXG4gICAgICBgJHtjb25zdGFudHNbJ2pzaWktcm9zZXR0YSddLk5BTUV9QCR7Y29uc3RhbnRzWydqc2lpLXJvc2V0dGEnXS5WRVJTSU9OfWAsXG4gICAgXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbFBlZXJEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXG4gICAgICBgJHtjb25zdGFudHMuY29uc3RydWN0cy5OQU1FfUAke2NvbnN0YW50cy5jb25zdHJ1Y3RzLlZFUlNJT059YCxcbiAgICAgIGAke2NvbnN0YW50cy5wcm9qZW4uTkFNRX1AJHtjb25zdGFudHMucHJvamVuLlZFUlNJT059YCxcbiAgICBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2V0dGluZ3MoKTogU2V0dGluZ3Mge1xuICAgIHJldHVybiB7XG4gICAgICBmaWxlczogWydsaWInLCAnLmpzaWknLCAnUkVBRE1FLm1kJ10sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gWydkb2NzLycsICd0ZXN0LycsICdsaWIvJywgJy5qc2lpJ107XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhZGRpdGlvbmFsIGlnbm9yZSBwYXR0ZXJucyB0byBiZSBhZGRlZCB0byB0aGUgcHJvamVjdCdzIGlnbm9yZSBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGxpc3Qgb2YgaWdub3JlIHBhdHRlcm5zLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgYWRkaXRpb25hbElnbm9yZVByZXR0aWVyUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXG4gICAgICAnKi5zbmFwJyxcbiAgICAgICcvLnByb2plbi8qKicsXG4gICAgICAnLy5wcm9qZW4vZGVwcy5qc29uJyxcbiAgICAgICcvLnByb2plbi9maWxlcy5qc29uJyxcbiAgICAgICcvLnByb2plbi90YXNrcy5qc29uJyxcbiAgICAgICcvcGFja2FnZS1sb2NrLmpzb24nLFxuICAgICAgJy9wYWNrYWdlLmpzb24nLFxuICAgICAgJy9BUEkubWQnLFxuICAgIF07XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcmVnaXN0ZXJDb25maWcoKTogdm9pZCB7XG4gICAgdGhpcy5hZGREZXZEZXBlbmRlbmNpZXModGhpcy5hZGRpdGlvbmFsRGV2RGVwZW5kZW5jaWVzKTtcbiAgICB0aGlzLmFkZFBlZXJEZXBlbmRlbmNpZXModGhpcy5hZGRpdGlvbmFsUGVlckRlcGVuZGVuY2llcyk7XG4gICAgdGhpcy5hZGRTZXR0aW5ncyh0aGlzLmFkZGl0aW9uYWxTZXR0aW5ncyk7XG4gICAgaWYgKHRoaXMucHJvamVjdCBpbnN0YW5jZW9mIEpzaWlQcm9qZWN0KSB7XG4gICAgICB0aGlzLnByb2plY3QuZXNsaW50Q29uZmlnPy5hZGRJZ25vcmVQYXR0ZXJucyh0aGlzLmFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucyk7XG4gICAgICB0aGlzLnByb2plY3QucHJldHRpZXJDb25maWc/LmFkZElnbm9yZVBhdHRlcm5zKHRoaXMuYWRkaXRpb25hbElnbm9yZVByZXR0aWVyUGF0dGVybnMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBhcHBseUNvbmZpZygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcm9qZWN0IGluc3RhbmNlb2YgSnNpaVByb2plY3QpIHtcbiAgICAgIHRoaXMucHJvamVjdC5hZGREZXBzKC4uLnRoaXMuZGVwZW5kZW5jaWVzKTtcbiAgICAgIHRoaXMucHJvamVjdC5hZGREZXZEZXBzKC4uLnRoaXMuZGV2RGVwZW5kZW5jaWVzKTtcbiAgICAgIHRoaXMucHJvamVjdC5hZGRQZWVyRGVwcyguLi50aGlzLnBlZXJEZXBlbmRlbmNpZXMpO1xuICAgICAgdGhpcy5wcm9qZWN0LmFkZEZpZWxkcyh0aGlzLnNldHRpbmdzKTtcbiAgICB9XG4gICAgdGhpcy5wYXRjaFNjcmlwdHNBZGQodGhpcy5zY3JpcHRzKTtcbiAgfVxufVxuIl19
"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmConfigJsii = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const npm_1 = require("../../base/config/npm");
const project_1 = require(".././project");
/**
 * Implementing all relevant NPM configuration for the Jsii project.
 */
class NpmConfigJsii extends npm_1.NpmConfigBase {
    get additionalDevDependencies() {
        return ['jsii@^5.7.4', 'jsii-diff@^1.106.0', 'jsii-docgen@^10.6.3', 'jsii-pacmak@^1.106.0', 'jsii-rosetta@^5.7.2'];
    }
    get additionalPeerDependencies() {
        return ['constructs@^10.4.2', 'projen@^0.91.6'];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2pzaWkvY29uZmlnL25wbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLCtDQUFzRDtBQUV0RCwwQ0FBMkM7QUFFM0M7O0dBRUc7QUFDSCxNQUFhLGFBQWMsU0FBUSxtQkFBYTtJQUM5QyxJQUF1Qix5QkFBeUI7UUFDOUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3JILENBQUM7SUFFRCxJQUF1QiwwQkFBMEI7UUFDL0MsT0FBTyxDQUFDLG9CQUFvQixFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELElBQXVCLGtCQUFrQjtRQUN2QyxPQUFPO1lBQ0wsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUM7U0FDckMsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUF1Qix3QkFBd0I7UUFDN0MsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBWSxnQ0FBZ0M7UUFDMUMsT0FBTztZQUNMLFFBQVE7WUFDUixhQUFhO1lBQ2Isb0JBQW9CO1lBQ3BCLHFCQUFxQjtZQUNyQixxQkFBcUI7WUFDckIsb0JBQW9CO1lBQ3BCLGVBQWU7WUFDZixTQUFTO1NBQ1YsQ0FBQztJQUNKLENBQUM7SUFFZSxjQUFjO1FBQzVCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMxQyxJQUFJLElBQUksQ0FBQyxPQUFPLFlBQVkscUJBQVcsRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3hGLENBQUM7SUFDSCxDQUFDO0lBRWUsV0FBVztRQUN6QixJQUFJLElBQUksQ0FBQyxPQUFPLFlBQVkscUJBQVcsRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDOztBQXZESCxzQ0F3REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOcG1Db25maWdCYXNlIH0gZnJvbSAnLi4vLi4vYmFzZS9jb25maWcvbnBtJztcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcyc7XG5pbXBvcnQgeyBKc2lpUHJvamVjdCB9IGZyb20gJy4uLy4vcHJvamVjdCc7XG5cbi8qKlxuICogSW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBOUE0gY29uZmlndXJhdGlvbiBmb3IgdGhlIEpzaWkgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIE5wbUNvbmZpZ0pzaWkgZXh0ZW5kcyBOcG1Db25maWdCYXNlIHtcbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsRGV2RGVwZW5kZW5jaWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gWydqc2lpQF41LjcuNCcsICdqc2lpLWRpZmZAXjEuMTA2LjAnLCAnanNpaS1kb2NnZW5AXjEwLjYuMycsICdqc2lpLXBhY21ha0BeMS4xMDYuMCcsICdqc2lpLXJvc2V0dGFAXjUuNy4yJ107XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxQZWVyRGVwZW5kZW5jaWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gWydjb25zdHJ1Y3RzQF4xMC40LjInLCAncHJvamVuQF4wLjkxLjYnXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbFNldHRpbmdzKCk6IFNldHRpbmdzIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmlsZXM6IFsnbGliJywgJy5qc2lpJywgJ1JFQURNRS5tZCddLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFsnZG9jcy8nLCAndGVzdC8nLCAnbGliLycsICcuanNpaSddO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYWRkaXRpb25hbCBpZ25vcmUgcGF0dGVybnMgdG8gYmUgYWRkZWQgdG8gdGhlIHByb2plY3QncyBpZ25vcmUgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMgQSBsaXN0IG9mIGlnbm9yZSBwYXR0ZXJucy5cbiAgICovXG4gIHByaXZhdGUgZ2V0IGFkZGl0aW9uYWxJZ25vcmVQcmV0dGllclBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW1xuICAgICAgJyouc25hcCcsXG4gICAgICAnLy5wcm9qZW4vKionLFxuICAgICAgJy8ucHJvamVuL2RlcHMuanNvbicsXG4gICAgICAnLy5wcm9qZW4vZmlsZXMuanNvbicsXG4gICAgICAnLy5wcm9qZW4vdGFza3MuanNvbicsXG4gICAgICAnL3BhY2thZ2UtbG9jay5qc29uJyxcbiAgICAgICcvcGFja2FnZS5qc29uJyxcbiAgICAgICcvQVBJLm1kJyxcbiAgICBdO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHJlZ2lzdGVyQ29uZmlnKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkRGV2RGVwZW5kZW5jaWVzKHRoaXMuYWRkaXRpb25hbERldkRlcGVuZGVuY2llcyk7XG4gICAgdGhpcy5hZGRQZWVyRGVwZW5kZW5jaWVzKHRoaXMuYWRkaXRpb25hbFBlZXJEZXBlbmRlbmNpZXMpO1xuICAgIHRoaXMuYWRkU2V0dGluZ3ModGhpcy5hZGRpdGlvbmFsU2V0dGluZ3MpO1xuICAgIGlmICh0aGlzLnByb2plY3QgaW5zdGFuY2VvZiBKc2lpUHJvamVjdCkge1xuICAgICAgdGhpcy5wcm9qZWN0LmVzbGludENvbmZpZz8uYWRkSWdub3JlUGF0dGVybnModGhpcy5hZGRpdGlvbmFsSWdub3JlUGF0dGVybnMpO1xuICAgICAgdGhpcy5wcm9qZWN0LnByZXR0aWVyQ29uZmlnPy5hZGRJZ25vcmVQYXR0ZXJucyh0aGlzLmFkZGl0aW9uYWxJZ25vcmVQcmV0dGllclBhdHRlcm5zKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgYXBwbHlDb25maWcoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucHJvamVjdCBpbnN0YW5jZW9mIEpzaWlQcm9qZWN0KSB7XG4gICAgICB0aGlzLnByb2plY3QuYWRkRGVwcyguLi50aGlzLmRlcGVuZGVuY2llcyk7XG4gICAgICB0aGlzLnByb2plY3QuYWRkRGV2RGVwcyguLi50aGlzLmRldkRlcGVuZGVuY2llcyk7XG4gICAgICB0aGlzLnByb2plY3QuYWRkUGVlckRlcHMoLi4udGhpcy5wZWVyRGVwZW5kZW5jaWVzKTtcbiAgICAgIHRoaXMucHJvamVjdC5hZGRGaWVsZHModGhpcy5zZXR0aW5ncyk7XG4gICAgfVxuICAgIHRoaXMucGF0Y2hTY3JpcHRzQWRkKHRoaXMuc2NyaXB0cyk7XG4gIH1cbn1cbiJdfQ==
"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmConfigBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const config_1 = require("./config");
const typescript_1 = require("projen/lib/typescript");
const utils_1 = require("../utils");
/**
 * Base class for implementing all relevant NPM configuration.
 *
 * This class acts as a base for handling NPM configuration within projects.
 */
class NpmConfigBase extends config_1.Config {
    constructor(project) {
        super(project);
        this.dependencies = [];
        this.devDependencies = [];
        this.peerDependencies = [];
        this.dependencies = [...this.standardDependencies];
        this.devDependencies = [...this.standardDevDependencies];
        this.peerDependencies = [...this.standardPeerDependencies];
        this.settings = this.standardSettings;
        this.scripts = this.standardScripts;
    }
    /**
     * Gets the standard dependencies for the project.
     *
     * @returns A list of standard dependencies.
     */
    get standardDependencies() {
        return [];
    }
    /**
     * Gets the standard devDependencies for the project.
     *
     * @returns A list of standard devDependencies.
     */
    get standardDevDependencies() {
        return [];
    }
    /**
     * Gets the standard peerDependencies for the project.
     *
     * @returns A list of standard peerDependencies.
     */
    get standardPeerDependencies() {
        return [];
    }
    /**
     * Gets the standard settings for the project.
     *
     * @returns A settings object.
     */
    get standardSettings() {
        return {};
    }
    /**
     * Gets the standard npm scripts for the project.
     *
     * @returns A record of script names and their commands.
     */
    get standardScripts() {
        return {};
    }
    /**
     * Getter retrieving the npm scripts to be removed from NPM Package.
     * These scripts are added by Projen on project initialization
     * and are not needed for our projects.
     * Overwrite this method if you want to keep the projen standard scripts.
     * @return Projen standard script entries.
     * @protected
     */
    get removeScripts() {
        return [
            'clobber',
            'compile',
            'default',
            'eject',
            'package',
            'post-compile',
            'post-upgrade',
            'pre-compile',
            'release',
            'test',
            'test:watch',
            'unbump',
            'upgrade',
            'watch',
            'projen',
            'build',
        ];
    }
    /**
     * Adds custom devDependencies to the project.
     * @param dependencies List of dependencies to add.
     */
    addDependencies(dependencies) {
        dependencies.forEach((dep) => {
            if (!this.dependencies.includes(dep)) {
                this.dependencies.push(dep);
            }
        });
    }
    /**
     * Adds custom devDependencies to the project.
     * @param dependencies List of devDependencies to add.
     */
    addDevDependencies(dependencies) {
        dependencies.forEach((dep) => {
            if (!this.devDependencies.includes(dep)) {
                this.devDependencies.push(dep);
            }
        });
    }
    /**
     * Adds custom devDependencies to the project.
     * @param dependencies List of peerDependencies to add.
     */
    addPeerDependencies(dependencies) {
        dependencies.forEach((dep) => {
            if (!this.peerDependencies.includes(dep)) {
                this.peerDependencies.push(dep);
            }
        });
    }
    /**
     * Adds custom settings to the project.
     * @param settings Record of settings to add.
     */
    addSettings(settings) {
        this.settings = { ...this.settings, ...settings };
    }
    /**
     * Adds custom npm scripts to the project.
     *
     * @param scripts - A record of script names and their commands.
     */
    addScripts(scripts) {
        this.scripts = { ...this.scripts, ...scripts };
    }
    /**
     * Patches scripts in the `package.json` file.
     * Projen public API is not used as it would
     * create Projen related tasks like `npx projen task` and would not be convenient
     * for projects that need a non Projen related approach on scaffolding.
     *
     * @param scripts - A record of script names and their commands to patch.
     */
    patchScriptsAdd(scripts) {
        const packageJson = this.project.tryFindObjectFile('package.json');
        for (const script in scripts) {
            packageJson.patch(projen_1.JsonPatch.add(`/scripts/${script}`, scripts[script]));
        }
    }
    /**
     * Patches devDependencies in the `package.json` file.
     *
     * @param devDependencies - A list of development dependencies to patch.
     */
    patchDevDependencyRemove(devDependencies) {
        const packageJson = this.project.tryFindObjectFile('package.json');
        for (const dep of devDependencies) {
            packageJson.patch(projen_1.JsonPatch.remove(`/devDependencies/${dep}`));
        }
    }
    /**
     * Removes the NPM Package scripts associated with Projen NPM Package initialization.
     * Overwrite this method if you want to keep the projen standard scripts.
     * @protected
     */
    removeScriptsOnInit(scripts) {
        for (const script of scripts) {
            if (this.project instanceof typescript_1.TypeScriptProject) {
                this.project.removeScript(script);
            }
        }
    }
    applyConfig() {
        if ((0, utils_1.isValidProject)(this.project)) {
            this.project.addDeps(...this.dependencies);
            this.project.addDevDeps(...this.devDependencies);
            this.project.addPeerDeps(...this.peerDependencies);
            this.project.addFields(this.settings);
        }
        this.patchScriptsAdd(this.scripts);
    }
}
exports.NpmConfigBase = NpmConfigBase;
_a = JSII_RTTI_SYMBOL_1;
NpmConfigBase[_a] = { fqn: "@dxfrontier/projen-template-projects.NpmConfigBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2UvbnBtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQStDO0FBQy9DLHFDQUFrQztBQUVsQyxzREFBMEQ7QUFDMUQsb0NBQTBDO0FBRTFDOzs7O0dBSUc7QUFDSCxNQUFhLGFBQWMsU0FBUSxlQUFNO0lBT3ZDLFlBQVksT0FBcUI7UUFDL0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBUFAsaUJBQVksR0FBYSxFQUFFLENBQUM7UUFDNUIsb0JBQWUsR0FBYSxFQUFFLENBQUM7UUFDL0IscUJBQWdCLEdBQWEsRUFBRSxDQUFDO1FBT3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxvQkFBb0I7UUFDaEMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsdUJBQXVCO1FBQ25DLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLHdCQUF3QjtRQUNwQyxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxnQkFBZ0I7UUFDNUIsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsZUFBZTtRQUMz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Q0FBQztZQUM3QixJQUFJLElBQUksQ0FBQyxPQUFPLFlBQVksOEJBQWlCLEVBQUUsQ0FBQztnQkFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRWUsV0FBVztRQUN6QixJQUFJLElBQUEsc0JBQWMsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsT0FBd0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLE9BQXdCLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxPQUF3QixDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxPQUF3QixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUQsQ0FBQztRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7O0FBbE1ILHNDQW1NQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEpzb25QYXRjaCwgT2JqZWN0RmlsZSB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBQcm9qZWN0VHlwZXMsIFNldHRpbmdzIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgVHlwZVNjcmlwdFByb2plY3QgfSBmcm9tICdwcm9qZW4vbGliL3R5cGVzY3JpcHQnO1xuaW1wb3J0IHsgaXNWYWxpZFByb2plY3QgfSBmcm9tICcuLi91dGlscyc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBOUE0gY29uZmlndXJhdGlvbi5cbiAqXG4gKiBUaGlzIGNsYXNzIGFjdHMgYXMgYSBiYXNlIGZvciBoYW5kbGluZyBOUE0gY29uZmlndXJhdGlvbiB3aXRoaW4gcHJvamVjdHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBOcG1Db25maWdCYXNlIGV4dGVuZHMgQ29uZmlnIHtcbiAgcHJvdGVjdGVkIGRlcGVuZGVuY2llczogc3RyaW5nW10gPSBbXTtcbiAgcHJvdGVjdGVkIGRldkRlcGVuZGVuY2llczogc3RyaW5nW10gPSBbXTtcbiAgcHJvdGVjdGVkIHBlZXJEZXBlbmRlbmNpZXM6IHN0cmluZ1tdID0gW107XG4gIHByb3RlY3RlZCBzZXR0aW5nczogU2V0dGluZ3M7XG4gIHByb3RlY3RlZCBzY3JpcHRzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFByb2plY3RUeXBlcykge1xuICAgIHN1cGVyKHByb2plY3QpO1xuXG4gICAgdGhpcy5kZXBlbmRlbmNpZXMgPSBbLi4udGhpcy5zdGFuZGFyZERlcGVuZGVuY2llc107XG4gICAgdGhpcy5kZXZEZXBlbmRlbmNpZXMgPSBbLi4udGhpcy5zdGFuZGFyZERldkRlcGVuZGVuY2llc107XG4gICAgdGhpcy5wZWVyRGVwZW5kZW5jaWVzID0gWy4uLnRoaXMuc3RhbmRhcmRQZWVyRGVwZW5kZW5jaWVzXTtcbiAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5zdGFuZGFyZFNldHRpbmdzO1xuICAgIHRoaXMuc2NyaXB0cyA9IHRoaXMuc3RhbmRhcmRTY3JpcHRzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHN0YW5kYXJkIGRlcGVuZGVuY2llcyBmb3IgdGhlIHByb2plY3QuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgbGlzdCBvZiBzdGFuZGFyZCBkZXBlbmRlbmNpZXMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHN0YW5kYXJkRGVwZW5kZW5jaWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgc3RhbmRhcmQgZGV2RGVwZW5kZW5jaWVzIGZvciB0aGUgcHJvamVjdC5cbiAgICpcbiAgICogQHJldHVybnMgQSBsaXN0IG9mIHN0YW5kYXJkIGRldkRlcGVuZGVuY2llcy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc3RhbmRhcmREZXZEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBzdGFuZGFyZCBwZWVyRGVwZW5kZW5jaWVzIGZvciB0aGUgcHJvamVjdC5cbiAgICpcbiAgICogQHJldHVybnMgQSBsaXN0IG9mIHN0YW5kYXJkIHBlZXJEZXBlbmRlbmNpZXMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHN0YW5kYXJkUGVlckRlcGVuZGVuY2llcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHN0YW5kYXJkIHNldHRpbmdzIGZvciB0aGUgcHJvamVjdC5cbiAgICpcbiAgICogQHJldHVybnMgQSBzZXR0aW5ncyBvYmplY3QuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHN0YW5kYXJkU2V0dGluZ3MoKTogU2V0dGluZ3Mge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBzdGFuZGFyZCBucG0gc2NyaXB0cyBmb3IgdGhlIHByb2plY3QuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgcmVjb3JkIG9mIHNjcmlwdCBuYW1lcyBhbmQgdGhlaXIgY29tbWFuZHMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHN0YW5kYXJkU2NyaXB0cygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIHJldHJpZXZpbmcgdGhlIG5wbSBzY3JpcHRzIHRvIGJlIHJlbW92ZWQgZnJvbSBOUE0gUGFja2FnZS5cbiAgICogVGhlc2Ugc2NyaXB0cyBhcmUgYWRkZWQgYnkgUHJvamVuIG9uIHByb2plY3QgaW5pdGlhbGl6YXRpb25cbiAgICogYW5kIGFyZSBub3QgbmVlZGVkIGZvciBvdXIgcHJvamVjdHMuXG4gICAqIE92ZXJ3cml0ZSB0aGlzIG1ldGhvZCBpZiB5b3Ugd2FudCB0byBrZWVwIHRoZSBwcm9qZW4gc3RhbmRhcmQgc2NyaXB0cy5cbiAgICogQHJldHVybiBQcm9qZW4gc3RhbmRhcmQgc2NyaXB0IGVudHJpZXMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgcmVtb3ZlU2NyaXB0cygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdjbG9iYmVyJyxcbiAgICAgICdjb21waWxlJyxcbiAgICAgICdkZWZhdWx0JyxcbiAgICAgICdlamVjdCcsXG4gICAgICAncGFja2FnZScsXG4gICAgICAncG9zdC1jb21waWxlJyxcbiAgICAgICdwb3N0LXVwZ3JhZGUnLFxuICAgICAgJ3ByZS1jb21waWxlJyxcbiAgICAgICdyZWxlYXNlJyxcbiAgICAgICd0ZXN0JyxcbiAgICAgICd0ZXN0OndhdGNoJyxcbiAgICAgICd1bmJ1bXAnLFxuICAgICAgJ3VwZ3JhZGUnLFxuICAgICAgJ3dhdGNoJyxcbiAgICAgICdwcm9qZW4nLFxuICAgICAgJ2J1aWxkJyxcbiAgICBdO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgY3VzdG9tIGRldkRlcGVuZGVuY2llcyB0byB0aGUgcHJvamVjdC5cbiAgICogQHBhcmFtIGRlcGVuZGVuY2llcyBMaXN0IG9mIGRlcGVuZGVuY2llcyB0byBhZGQuXG4gICAqL1xuICBwdWJsaWMgYWRkRGVwZW5kZW5jaWVzKGRlcGVuZGVuY2llczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICBkZXBlbmRlbmNpZXMuZm9yRWFjaCgoZGVwKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZGVwZW5kZW5jaWVzLmluY2x1ZGVzKGRlcCkpIHtcbiAgICAgICAgdGhpcy5kZXBlbmRlbmNpZXMucHVzaChkZXApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgY3VzdG9tIGRldkRlcGVuZGVuY2llcyB0byB0aGUgcHJvamVjdC5cbiAgICogQHBhcmFtIGRlcGVuZGVuY2llcyBMaXN0IG9mIGRldkRlcGVuZGVuY2llcyB0byBhZGQuXG4gICAqL1xuICBwdWJsaWMgYWRkRGV2RGVwZW5kZW5jaWVzKGRlcGVuZGVuY2llczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICBkZXBlbmRlbmNpZXMuZm9yRWFjaCgoZGVwKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZGV2RGVwZW5kZW5jaWVzLmluY2x1ZGVzKGRlcCkpIHtcbiAgICAgICAgdGhpcy5kZXZEZXBlbmRlbmNpZXMucHVzaChkZXApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgY3VzdG9tIGRldkRlcGVuZGVuY2llcyB0byB0aGUgcHJvamVjdC5cbiAgICogQHBhcmFtIGRlcGVuZGVuY2llcyBMaXN0IG9mIHBlZXJEZXBlbmRlbmNpZXMgdG8gYWRkLlxuICAgKi9cbiAgcHVibGljIGFkZFBlZXJEZXBlbmRlbmNpZXMoZGVwZW5kZW5jaWVzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIGRlcGVuZGVuY2llcy5mb3JFYWNoKChkZXApID0+IHtcbiAgICAgIGlmICghdGhpcy5wZWVyRGVwZW5kZW5jaWVzLmluY2x1ZGVzKGRlcCkpIHtcbiAgICAgICAgdGhpcy5wZWVyRGVwZW5kZW5jaWVzLnB1c2goZGVwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGN1c3RvbSBzZXR0aW5ncyB0byB0aGUgcHJvamVjdC5cbiAgICogQHBhcmFtIHNldHRpbmdzIFJlY29yZCBvZiBzZXR0aW5ncyB0byBhZGQuXG4gICAqL1xuICBwdWJsaWMgYWRkU2V0dGluZ3Moc2V0dGluZ3M6IFNldHRpbmdzKTogdm9pZCB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHsgLi4udGhpcy5zZXR0aW5ncywgLi4uc2V0dGluZ3MgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGN1c3RvbSBucG0gc2NyaXB0cyB0byB0aGUgcHJvamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHNjcmlwdHMgLSBBIHJlY29yZCBvZiBzY3JpcHQgbmFtZXMgYW5kIHRoZWlyIGNvbW1hbmRzLlxuICAgKi9cbiAgcHVibGljIGFkZFNjcmlwdHMoc2NyaXB0czogUmVjb3JkPHN0cmluZywgc3RyaW5nPik6IHZvaWQge1xuICAgIHRoaXMuc2NyaXB0cyA9IHsgLi4udGhpcy5zY3JpcHRzLCAuLi5zY3JpcHRzIH07XG4gIH1cblxuICAvKipcbiAgICogUGF0Y2hlcyBzY3JpcHRzIGluIHRoZSBgcGFja2FnZS5qc29uYCBmaWxlLlxuICAgKiBQcm9qZW4gcHVibGljIEFQSSBpcyBub3QgdXNlZCBhcyBpdCB3b3VsZFxuICAgKiBjcmVhdGUgUHJvamVuIHJlbGF0ZWQgdGFza3MgbGlrZSBgbnB4IHByb2plbiB0YXNrYCBhbmQgd291bGQgbm90IGJlIGNvbnZlbmllbnRcbiAgICogZm9yIHByb2plY3RzIHRoYXQgbmVlZCBhIG5vbiBQcm9qZW4gcmVsYXRlZCBhcHByb2FjaCBvbiBzY2FmZm9sZGluZy5cbiAgICpcbiAgICogQHBhcmFtIHNjcmlwdHMgLSBBIHJlY29yZCBvZiBzY3JpcHQgbmFtZXMgYW5kIHRoZWlyIGNvbW1hbmRzIHRvIHBhdGNoLlxuICAgKi9cbiAgcHVibGljIHBhdGNoU2NyaXB0c0FkZChzY3JpcHRzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KTogdm9pZCB7XG4gICAgY29uc3QgcGFja2FnZUpzb246IE9iamVjdEZpbGUgfCB1bmRlZmluZWQgPSB0aGlzLnByb2plY3QudHJ5RmluZE9iamVjdEZpbGUoJ3BhY2thZ2UuanNvbicpO1xuXG4gICAgZm9yIChjb25zdCBzY3JpcHQgaW4gc2NyaXB0cykge1xuICAgICAgcGFja2FnZUpzb24hLnBhdGNoKEpzb25QYXRjaC5hZGQoYC9zY3JpcHRzLyR7c2NyaXB0fWAsIHNjcmlwdHNbc2NyaXB0XSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQYXRjaGVzIGRldkRlcGVuZGVuY2llcyBpbiB0aGUgYHBhY2thZ2UuanNvbmAgZmlsZS5cbiAgICpcbiAgICogQHBhcmFtIGRldkRlcGVuZGVuY2llcyAtIEEgbGlzdCBvZiBkZXZlbG9wbWVudCBkZXBlbmRlbmNpZXMgdG8gcGF0Y2guXG4gICAqL1xuICBwdWJsaWMgcGF0Y2hEZXZEZXBlbmRlbmN5UmVtb3ZlKGRldkRlcGVuZGVuY2llczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICBjb25zdCBwYWNrYWdlSnNvbjogT2JqZWN0RmlsZSB8IHVuZGVmaW5lZCA9IHRoaXMucHJvamVjdC50cnlGaW5kT2JqZWN0RmlsZSgncGFja2FnZS5qc29uJyk7XG5cbiAgICBmb3IgKGNvbnN0IGRlcCBvZiBkZXZEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHBhY2thZ2VKc29uIS5wYXRjaChKc29uUGF0Y2gucmVtb3ZlKGAvZGV2RGVwZW5kZW5jaWVzLyR7ZGVwfWApKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgTlBNIFBhY2thZ2Ugc2NyaXB0cyBhc3NvY2lhdGVkIHdpdGggUHJvamVuIE5QTSBQYWNrYWdlIGluaXRpYWxpemF0aW9uLlxuICAgKiBPdmVyd3JpdGUgdGhpcyBtZXRob2QgaWYgeW91IHdhbnQgdG8ga2VlcCB0aGUgcHJvamVuIHN0YW5kYXJkIHNjcmlwdHMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHB1YmxpYyByZW1vdmVTY3JpcHRzT25Jbml0KHNjcmlwdHM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBzY3JpcHQgb2Ygc2NyaXB0cykge1xuICAgICAgaWYgKHRoaXMucHJvamVjdCBpbnN0YW5jZW9mIFR5cGVTY3JpcHRQcm9qZWN0KSB7XG4gICAgICAgIHRoaXMucHJvamVjdC5yZW1vdmVTY3JpcHQoc2NyaXB0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgYXBwbHlDb25maWcoKTogdm9pZCB7XG4gICAgaWYgKGlzVmFsaWRQcm9qZWN0KHRoaXMucHJvamVjdCkpIHtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5hZGREZXBzKC4uLnRoaXMuZGVwZW5kZW5jaWVzKTtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5hZGREZXZEZXBzKC4uLnRoaXMuZGV2RGVwZW5kZW5jaWVzKTtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5hZGRQZWVyRGVwcyguLi50aGlzLnBlZXJEZXBlbmRlbmNpZXMpO1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLmFkZEZpZWxkcyh0aGlzLnNldHRpbmdzKTtcbiAgICB9XG4gICAgdGhpcy5wYXRjaFNjcmlwdHNBZGQodGhpcy5zY3JpcHRzKTtcbiAgfVxufVxuIl19
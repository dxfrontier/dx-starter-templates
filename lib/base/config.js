"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
/**
 * Base class for creating and managing project configurations.
 * This class allows configuring a project using different strategies.
 * It requires the project to be either a `BaseProject` or `JsiiProject`.
 */
class Config extends projen_1.Component {
    /**
     * Initializes the config for a specified project.
     * @param project The project to configure the configuration module for.
     */
    constructor(project) {
        super(project);
    }
    /**
     * Gets the additional development dependencies required for configuration.
     *
     * @returns A list of package names with version specifications.
     */
    get additionalDevDependencies() {
        return [];
    }
    /**
     * Gets the additional peer dependencies required for configuration.
     *
     * @returns A list of package names with version specifications.
     */
    get additionalPeerDependencies() {
        return [];
    }
    /**
     * Gets the additional dependencies required for configuration.
     *
     * @returns A list of package names with version specifications.
     */
    get additionalDependencies() {
        return [];
    }
    /**
     * Gets the additional settings to be added to the project's configuration.
     *
     * @returns A settings object to be merged into the project's settings.
     */
    get additionalSettings() {
        return {};
    }
    /**
     * Gets the additional npm scripts to be added to the project's configuration.
     *
     * @returns A record of script names and their corresponding commands.
     */
    get additionalScripts() {
        return {};
    }
    /**
     * Gets additional ignore patterns to be added to the project's ignore configuration.
     *
     * @returns A list of ignore patterns.
     */
    get additionalIgnorePatterns() {
        return [];
    }
    /**
     * Gets additional attributes patterns to be added to the project's attributes configuration.
     *
     * @returns A list of attibute patterns.
     */
    get additionalAttributesPatterns() {
        return [];
    }
    /**
     * Gets the configuration file content.
     *
     * @returns An object where the key is the filename and the value is an array of file lines.
     */
    get configFile() {
        return {};
    }
    /**
     * Gets the ignore file content.
     *
     * @returns An object where the key is the filename and the value is an array of file lines.
     */
    get ignoreFile() {
        return {};
    }
    /**
     * Registers config to other configuration modules.
     * Public API call addressing other modules should be performed here,
     * to guarantee proper configuration handling.
     *
     * This methods should be called only in the projects `preSynthesize` phase
     * and not on the configuration modules `preSynthesize` function otherwise
     * it is not guaranteed that all needed modules are setup properly.
     */
    registerConfig() {
        // do api calls to other configuration modules here.
    }
    /**
     * Applies the current configuration based on the strategy to the project.
     *
     * To ensure proper configuration handling `applyConfig` should be called in
     * `preSynthesize` phase of the configuration module and not from project itself.
     *
     * Subclasses should overwrite it to guarantee proper module configuration.
     */
    applyConfig() { }
    preSynthesize() {
        this.applyConfig();
        super.preSynthesize();
    }
    postSynthesize() {
        super.postSynthesize();
    }
}
exports.Config = Config;
_a = JSII_RTTI_SYMBOL_1;
Config[_a] = { fqn: "@dxfrontier/projen-template-projects.Config", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2UvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQTRDO0FBRzVDOzs7O0dBSUc7QUFDSCxNQUFhLE1BQU8sU0FBUSxrQkFBUztJQUNuQzs7O09BR0c7SUFDSCxZQUFZLE9BQWdCO1FBQzFCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMseUJBQXlCO1FBQ3JDLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLDBCQUEwQjtRQUN0QyxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxzQkFBc0I7UUFDbEMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsa0JBQWtCO1FBQzlCLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLGlCQUFpQjtRQUM3QixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyx3QkFBd0I7UUFDcEMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsNEJBQTRCO1FBQ3hDLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLFVBQVU7UUFDdEIsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsVUFBVTtRQUN0QixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLGNBQWM7UUFDbkIsb0RBQW9EO0lBQ3RELENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksV0FBVyxLQUFVLENBQUM7SUFFYixhQUFhO1FBQzNCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVlLGNBQWM7UUFDNUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7O0FBeEhILHdCQXlIQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgUHJvamVjdCB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBDb25maWdGaWxlLCBTZXR0aW5ncyB9IGZyb20gJy4uL3V0aWwvdHlwZXMvdHlwZXMnO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGNyZWF0aW5nIGFuZCBtYW5hZ2luZyBwcm9qZWN0IGNvbmZpZ3VyYXRpb25zLlxuICogVGhpcyBjbGFzcyBhbGxvd3MgY29uZmlndXJpbmcgYSBwcm9qZWN0IHVzaW5nIGRpZmZlcmVudCBzdHJhdGVnaWVzLlxuICogSXQgcmVxdWlyZXMgdGhlIHByb2plY3QgdG8gYmUgZWl0aGVyIGEgYEJhc2VQcm9qZWN0YCBvciBgSnNpaVByb2plY3RgLlxuICovXG5leHBvcnQgY2xhc3MgQ29uZmlnIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBjb25maWcgZm9yIGEgc3BlY2lmaWVkIHByb2plY3QuXG4gICAqIEBwYXJhbSBwcm9qZWN0IFRoZSBwcm9qZWN0IHRvIGNvbmZpZ3VyZSB0aGUgY29uZmlndXJhdGlvbiBtb2R1bGUgZm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvamVjdDogUHJvamVjdCkge1xuICAgIHN1cGVyKHByb2plY3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGFkZGl0aW9uYWwgZGV2ZWxvcG1lbnQgZGVwZW5kZW5jaWVzIHJlcXVpcmVkIGZvciBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGxpc3Qgb2YgcGFja2FnZSBuYW1lcyB3aXRoIHZlcnNpb24gc3BlY2lmaWNhdGlvbnMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBhZGRpdGlvbmFsIHBlZXIgZGVwZW5kZW5jaWVzIHJlcXVpcmVkIGZvciBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGxpc3Qgb2YgcGFja2FnZSBuYW1lcyB3aXRoIHZlcnNpb24gc3BlY2lmaWNhdGlvbnMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGFkZGl0aW9uYWxQZWVyRGVwZW5kZW5jaWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgYWRkaXRpb25hbCBkZXBlbmRlbmNpZXMgcmVxdWlyZWQgZm9yIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIEEgbGlzdCBvZiBwYWNrYWdlIG5hbWVzIHdpdGggdmVyc2lvbiBzcGVjaWZpY2F0aW9ucy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgYWRkaXRpb25hbERlcGVuZGVuY2llcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGFkZGl0aW9uYWwgc2V0dGluZ3MgdG8gYmUgYWRkZWQgdG8gdGhlIHByb2plY3QncyBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIHNldHRpbmdzIG9iamVjdCB0byBiZSBtZXJnZWQgaW50byB0aGUgcHJvamVjdCdzIHNldHRpbmdzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBhZGRpdGlvbmFsU2V0dGluZ3MoKTogU2V0dGluZ3Mge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBhZGRpdGlvbmFsIG5wbSBzY3JpcHRzIHRvIGJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0J3MgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMgQSByZWNvcmQgb2Ygc2NyaXB0IG5hbWVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIGNvbW1hbmRzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBhZGRpdGlvbmFsU2NyaXB0cygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhZGRpdGlvbmFsIGlnbm9yZSBwYXR0ZXJucyB0byBiZSBhZGRlZCB0byB0aGUgcHJvamVjdCdzIGlnbm9yZSBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGxpc3Qgb2YgaWdub3JlIHBhdHRlcm5zLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBhZGRpdGlvbmFsSWdub3JlUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGFkZGl0aW9uYWwgYXR0cmlidXRlcyBwYXR0ZXJucyB0byBiZSBhZGRlZCB0byB0aGUgcHJvamVjdCdzIGF0dHJpYnV0ZXMgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMgQSBsaXN0IG9mIGF0dGlidXRlIHBhdHRlcm5zLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBhZGRpdGlvbmFsQXR0cmlidXRlc1BhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgY29uZmlndXJhdGlvbiBmaWxlIGNvbnRlbnQuXG4gICAqXG4gICAqIEByZXR1cm5zIEFuIG9iamVjdCB3aGVyZSB0aGUga2V5IGlzIHRoZSBmaWxlbmFtZSBhbmQgdGhlIHZhbHVlIGlzIGFuIGFycmF5IG9mIGZpbGUgbGluZXMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGNvbmZpZ0ZpbGUoKTogQ29uZmlnRmlsZSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGlnbm9yZSBmaWxlIGNvbnRlbnQuXG4gICAqXG4gICAqIEByZXR1cm5zIEFuIG9iamVjdCB3aGVyZSB0aGUga2V5IGlzIHRoZSBmaWxlbmFtZSBhbmQgdGhlIHZhbHVlIGlzIGFuIGFycmF5IG9mIGZpbGUgbGluZXMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGlnbm9yZUZpbGUoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGNvbmZpZyB0byBvdGhlciBjb25maWd1cmF0aW9uIG1vZHVsZXMuXG4gICAqIFB1YmxpYyBBUEkgY2FsbCBhZGRyZXNzaW5nIG90aGVyIG1vZHVsZXMgc2hvdWxkIGJlIHBlcmZvcm1lZCBoZXJlLFxuICAgKiB0byBndWFyYW50ZWUgcHJvcGVyIGNvbmZpZ3VyYXRpb24gaGFuZGxpbmcuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kcyBzaG91bGQgYmUgY2FsbGVkIG9ubHkgaW4gdGhlIHByb2plY3RzIGBwcmVTeW50aGVzaXplYCBwaGFzZVxuICAgKiBhbmQgbm90IG9uIHRoZSBjb25maWd1cmF0aW9uIG1vZHVsZXMgYHByZVN5bnRoZXNpemVgIGZ1bmN0aW9uIG90aGVyd2lzZVxuICAgKiBpdCBpcyBub3QgZ3VhcmFudGVlZCB0aGF0IGFsbCBuZWVkZWQgbW9kdWxlcyBhcmUgc2V0dXAgcHJvcGVybHkuXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXJDb25maWcoKTogdm9pZCB7XG4gICAgLy8gZG8gYXBpIGNhbGxzIHRvIG90aGVyIGNvbmZpZ3VyYXRpb24gbW9kdWxlcyBoZXJlLlxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgdGhlIGN1cnJlbnQgY29uZmlndXJhdGlvbiBiYXNlZCBvbiB0aGUgc3RyYXRlZ3kgdG8gdGhlIHByb2plY3QuXG4gICAqXG4gICAqIFRvIGVuc3VyZSBwcm9wZXIgY29uZmlndXJhdGlvbiBoYW5kbGluZyBgYXBwbHlDb25maWdgIHNob3VsZCBiZSBjYWxsZWQgaW5cbiAgICogYHByZVN5bnRoZXNpemVgIHBoYXNlIG9mIHRoZSBjb25maWd1cmF0aW9uIG1vZHVsZSBhbmQgbm90IGZyb20gcHJvamVjdCBpdHNlbGYuXG4gICAqXG4gICAqIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJ3cml0ZSBpdCB0byBndWFyYW50ZWUgcHJvcGVyIG1vZHVsZSBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgcHVibGljIGFwcGx5Q29uZmlnKCk6IHZvaWQge31cblxuICBwdWJsaWMgb3ZlcnJpZGUgcHJlU3ludGhlc2l6ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmFwcGx5Q29uZmlnKCk7XG4gICAgc3VwZXIucHJlU3ludGhlc2l6ZSgpO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHBvc3RTeW50aGVzaXplKCk6IHZvaWQge1xuICAgIHN1cGVyLnBvc3RTeW50aGVzaXplKCk7XG4gIH1cbn1cbiJdfQ==
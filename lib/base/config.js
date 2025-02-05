"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2UvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUE0QztBQUc1Qzs7OztHQUlHO0FBQ0gsTUFBYSxNQUFPLFNBQVEsa0JBQVM7SUFDbkM7OztPQUdHO0lBQ0gsWUFBWSxPQUFnQjtRQUMxQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLHlCQUF5QjtRQUNyQyxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYywwQkFBMEI7UUFDdEMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsc0JBQXNCO1FBQ2xDLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLGtCQUFrQjtRQUM5QixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxpQkFBaUI7UUFDN0IsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsd0JBQXdCO1FBQ3BDLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLDRCQUE0QjtRQUN4QyxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxVQUFVO1FBQ3RCLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLFVBQVU7UUFDdEIsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSSxjQUFjO1FBQ25CLG9EQUFvRDtJQUN0RCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLFdBQVcsS0FBVSxDQUFDO0lBRWIsYUFBYTtRQUMzQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFZSxjQUFjO1FBQzVCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6QixDQUFDO0NBQ0Y7QUF6SEQsd0JBeUhDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBQcm9qZWN0IH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IENvbmZpZ0ZpbGUsIFNldHRpbmdzIH0gZnJvbSAnLi4vdXRpbC90eXBlcy90eXBlcyc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmFnaW5nIHByb2plY3QgY29uZmlndXJhdGlvbnMuXG4gKiBUaGlzIGNsYXNzIGFsbG93cyBjb25maWd1cmluZyBhIHByb2plY3QgdXNpbmcgZGlmZmVyZW50IHN0cmF0ZWdpZXMuXG4gKiBJdCByZXF1aXJlcyB0aGUgcHJvamVjdCB0byBiZSBlaXRoZXIgYSBgQmFzZVByb2plY3RgIG9yIGBKc2lpUHJvamVjdGAuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb25maWcgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGNvbmZpZyBmb3IgYSBzcGVjaWZpZWQgcHJvamVjdC5cbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3QgdG8gY29uZmlndXJlIHRoZSBjb25maWd1cmF0aW9uIG1vZHVsZSBmb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBQcm9qZWN0KSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgYWRkaXRpb25hbCBkZXZlbG9wbWVudCBkZXBlbmRlbmNpZXMgcmVxdWlyZWQgZm9yIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIEEgbGlzdCBvZiBwYWNrYWdlIG5hbWVzIHdpdGggdmVyc2lvbiBzcGVjaWZpY2F0aW9ucy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgYWRkaXRpb25hbERldkRlcGVuZGVuY2llcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGFkZGl0aW9uYWwgcGVlciBkZXBlbmRlbmNpZXMgcmVxdWlyZWQgZm9yIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIEEgbGlzdCBvZiBwYWNrYWdlIG5hbWVzIHdpdGggdmVyc2lvbiBzcGVjaWZpY2F0aW9ucy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgYWRkaXRpb25hbFBlZXJEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBhZGRpdGlvbmFsIGRlcGVuZGVuY2llcyByZXF1aXJlZCBmb3IgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMgQSBsaXN0IG9mIHBhY2thZ2UgbmFtZXMgd2l0aCB2ZXJzaW9uIHNwZWNpZmljYXRpb25zLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBhZGRpdGlvbmFsRGVwZW5kZW5jaWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgYWRkaXRpb25hbCBzZXR0aW5ncyB0byBiZSBhZGRlZCB0byB0aGUgcHJvamVjdCdzIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIEEgc2V0dGluZ3Mgb2JqZWN0IHRvIGJlIG1lcmdlZCBpbnRvIHRoZSBwcm9qZWN0J3Mgc2V0dGluZ3MuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGFkZGl0aW9uYWxTZXR0aW5ncygpOiBTZXR0aW5ncyB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGFkZGl0aW9uYWwgbnBtIHNjcmlwdHMgdG8gYmUgYWRkZWQgdG8gdGhlIHByb2plY3QncyBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIHJlY29yZCBvZiBzY3JpcHQgbmFtZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgY29tbWFuZHMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGFkZGl0aW9uYWxTY3JpcHRzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGFkZGl0aW9uYWwgaWdub3JlIHBhdHRlcm5zIHRvIGJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0J3MgaWdub3JlIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIEEgbGlzdCBvZiBpZ25vcmUgcGF0dGVybnMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYWRkaXRpb25hbCBhdHRyaWJ1dGVzIHBhdHRlcm5zIHRvIGJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0J3MgYXR0cmlidXRlcyBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGxpc3Qgb2YgYXR0aWJ1dGUgcGF0dGVybnMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGFkZGl0aW9uYWxBdHRyaWJ1dGVzUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjb25maWd1cmF0aW9uIGZpbGUgY29udGVudC5cbiAgICpcbiAgICogQHJldHVybnMgQW4gb2JqZWN0IHdoZXJlIHRoZSBrZXkgaXMgdGhlIGZpbGVuYW1lIGFuZCB0aGUgdmFsdWUgaXMgYW4gYXJyYXkgb2YgZmlsZSBsaW5lcy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZSgpOiBDb25maWdGaWxlIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgaWdub3JlIGZpbGUgY29udGVudC5cbiAgICpcbiAgICogQHJldHVybnMgQW4gb2JqZWN0IHdoZXJlIHRoZSBrZXkgaXMgdGhlIGZpbGVuYW1lIGFuZCB0aGUgdmFsdWUgaXMgYW4gYXJyYXkgb2YgZmlsZSBsaW5lcy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgaWdub3JlRmlsZSgpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgY29uZmlnIHRvIG90aGVyIGNvbmZpZ3VyYXRpb24gbW9kdWxlcy5cbiAgICogUHVibGljIEFQSSBjYWxsIGFkZHJlc3Npbmcgb3RoZXIgbW9kdWxlcyBzaG91bGQgYmUgcGVyZm9ybWVkIGhlcmUsXG4gICAqIHRvIGd1YXJhbnRlZSBwcm9wZXIgY29uZmlndXJhdGlvbiBoYW5kbGluZy5cbiAgICpcbiAgICogVGhpcyBtZXRob2RzIHNob3VsZCBiZSBjYWxsZWQgb25seSBpbiB0aGUgcHJvamVjdHMgYHByZVN5bnRoZXNpemVgIHBoYXNlXG4gICAqIGFuZCBub3Qgb24gdGhlIGNvbmZpZ3VyYXRpb24gbW9kdWxlcyBgcHJlU3ludGhlc2l6ZWAgZnVuY3Rpb24gb3RoZXJ3aXNlXG4gICAqIGl0IGlzIG5vdCBndWFyYW50ZWVkIHRoYXQgYWxsIG5lZWRlZCBtb2R1bGVzIGFyZSBzZXR1cCBwcm9wZXJseS5cbiAgICovXG4gIHB1YmxpYyByZWdpc3RlckNvbmZpZygpOiB2b2lkIHtcbiAgICAvLyBkbyBhcGkgY2FsbHMgdG8gb3RoZXIgY29uZmlndXJhdGlvbiBtb2R1bGVzIGhlcmUuXG4gIH1cblxuICAvKipcbiAgICogQXBwbGllcyB0aGUgY3VycmVudCBjb25maWd1cmF0aW9uIGJhc2VkIG9uIHRoZSBzdHJhdGVneSB0byB0aGUgcHJvamVjdC5cbiAgICpcbiAgICogVG8gZW5zdXJlIHByb3BlciBjb25maWd1cmF0aW9uIGhhbmRsaW5nIGBhcHBseUNvbmZpZ2Agc2hvdWxkIGJlIGNhbGxlZCBpblxuICAgKiBgcHJlU3ludGhlc2l6ZWAgcGhhc2Ugb2YgdGhlIGNvbmZpZ3VyYXRpb24gbW9kdWxlIGFuZCBub3QgZnJvbSBwcm9qZWN0IGl0c2VsZi5cbiAgICpcbiAgICogU3ViY2xhc3NlcyBzaG91bGQgb3ZlcndyaXRlIGl0IHRvIGd1YXJhbnRlZSBwcm9wZXIgbW9kdWxlIGNvbmZpZ3VyYXRpb24uXG4gICAqL1xuICBwdWJsaWMgYXBwbHlDb25maWcoKTogdm9pZCB7fVxuXG4gIHB1YmxpYyBvdmVycmlkZSBwcmVTeW50aGVzaXplKCk6IHZvaWQge1xuICAgIHRoaXMuYXBwbHlDb25maWcoKTtcbiAgICBzdXBlci5wcmVTeW50aGVzaXplKCk7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcG9zdFN5bnRoZXNpemUoKTogdm9pZCB7XG4gICAgc3VwZXIucG9zdFN5bnRoZXNpemUoKTtcbiAgfVxufVxuIl19
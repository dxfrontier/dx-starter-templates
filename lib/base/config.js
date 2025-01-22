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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2UvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQTRDO0FBRzVDOzs7O0dBSUc7QUFDSCxNQUFhLE1BQU8sU0FBUSxrQkFBUztJQUNuQzs7O09BR0c7SUFDSCxZQUFZLE9BQWdCO1FBQzFCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMseUJBQXlCO1FBQ3JDLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLDBCQUEwQjtRQUN0QyxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxzQkFBc0I7UUFDbEMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsa0JBQWtCO1FBQzlCLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLGlCQUFpQjtRQUM3QixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyx3QkFBd0I7UUFDcEMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsNEJBQTRCO1FBQ3hDLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLFVBQVU7UUFDdEIsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsVUFBVTtRQUN0QixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLGNBQWM7UUFDbkIsb0RBQW9EO0lBQ3RELENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksV0FBVyxLQUFVLENBQUM7SUFFYixhQUFhO1FBQzNCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVlLGNBQWM7UUFDNUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7O0FBeEhILHdCQXlIQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgUHJvamVjdCB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBDb25maWdGaWxlLCBTZXR0aW5ncyB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBjcmVhdGluZyBhbmQgbWFuYWdpbmcgcHJvamVjdCBjb25maWd1cmF0aW9ucy5cbiAqIFRoaXMgY2xhc3MgYWxsb3dzIGNvbmZpZ3VyaW5nIGEgcHJvamVjdCB1c2luZyBkaWZmZXJlbnQgc3RyYXRlZ2llcy5cbiAqIEl0IHJlcXVpcmVzIHRoZSBwcm9qZWN0IHRvIGJlIGVpdGhlciBhIGBCYXNlUHJvamVjdGAgb3IgYEpzaWlQcm9qZWN0YC5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbmZpZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgY29uZmlnIGZvciBhIHNwZWNpZmllZCBwcm9qZWN0LlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgdGhlIGNvbmZpZ3VyYXRpb24gbW9kdWxlIGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFByb2plY3QpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBhZGRpdGlvbmFsIGRldmVsb3BtZW50IGRlcGVuZGVuY2llcyByZXF1aXJlZCBmb3IgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMgQSBsaXN0IG9mIHBhY2thZ2UgbmFtZXMgd2l0aCB2ZXJzaW9uIHNwZWNpZmljYXRpb25zLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBhZGRpdGlvbmFsRGV2RGVwZW5kZW5jaWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgYWRkaXRpb25hbCBwZWVyIGRlcGVuZGVuY2llcyByZXF1aXJlZCBmb3IgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMgQSBsaXN0IG9mIHBhY2thZ2UgbmFtZXMgd2l0aCB2ZXJzaW9uIHNwZWNpZmljYXRpb25zLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBhZGRpdGlvbmFsUGVlckRlcGVuZGVuY2llcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGFkZGl0aW9uYWwgZGVwZW5kZW5jaWVzIHJlcXVpcmVkIGZvciBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGxpc3Qgb2YgcGFja2FnZSBuYW1lcyB3aXRoIHZlcnNpb24gc3BlY2lmaWNhdGlvbnMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGFkZGl0aW9uYWxEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBhZGRpdGlvbmFsIHNldHRpbmdzIHRvIGJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0J3MgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMgQSBzZXR0aW5ncyBvYmplY3QgdG8gYmUgbWVyZ2VkIGludG8gdGhlIHByb2plY3QncyBzZXR0aW5ncy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgYWRkaXRpb25hbFNldHRpbmdzKCk6IFNldHRpbmdzIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgYWRkaXRpb25hbCBucG0gc2NyaXB0cyB0byBiZSBhZGRlZCB0byB0aGUgcHJvamVjdCdzIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIEEgcmVjb3JkIG9mIHNjcmlwdCBuYW1lcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBjb21tYW5kcy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgYWRkaXRpb25hbFNjcmlwdHMoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYWRkaXRpb25hbCBpZ25vcmUgcGF0dGVybnMgdG8gYmUgYWRkZWQgdG8gdGhlIHByb2plY3QncyBpZ25vcmUgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMgQSBsaXN0IG9mIGlnbm9yZSBwYXR0ZXJucy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhZGRpdGlvbmFsIGF0dHJpYnV0ZXMgcGF0dGVybnMgdG8gYmUgYWRkZWQgdG8gdGhlIHByb2plY3QncyBhdHRyaWJ1dGVzIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIEEgbGlzdCBvZiBhdHRpYnV0ZSBwYXR0ZXJucy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgYWRkaXRpb25hbEF0dHJpYnV0ZXNQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGNvbmZpZ3VyYXRpb24gZmlsZSBjb250ZW50LlxuICAgKlxuICAgKiBAcmV0dXJucyBBbiBvYmplY3Qgd2hlcmUgdGhlIGtleSBpcyB0aGUgZmlsZW5hbWUgYW5kIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSBvZiBmaWxlIGxpbmVzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBjb25maWdGaWxlKCk6IENvbmZpZ0ZpbGUge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBpZ25vcmUgZmlsZSBjb250ZW50LlxuICAgKlxuICAgKiBAcmV0dXJucyBBbiBvYmplY3Qgd2hlcmUgdGhlIGtleSBpcyB0aGUgZmlsZW5hbWUgYW5kIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSBvZiBmaWxlIGxpbmVzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBpZ25vcmVGaWxlKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBjb25maWcgdG8gb3RoZXIgY29uZmlndXJhdGlvbiBtb2R1bGVzLlxuICAgKiBQdWJsaWMgQVBJIGNhbGwgYWRkcmVzc2luZyBvdGhlciBtb2R1bGVzIHNob3VsZCBiZSBwZXJmb3JtZWQgaGVyZSxcbiAgICogdG8gZ3VhcmFudGVlIHByb3BlciBjb25maWd1cmF0aW9uIGhhbmRsaW5nLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZHMgc2hvdWxkIGJlIGNhbGxlZCBvbmx5IGluIHRoZSBwcm9qZWN0cyBgcHJlU3ludGhlc2l6ZWAgcGhhc2VcbiAgICogYW5kIG5vdCBvbiB0aGUgY29uZmlndXJhdGlvbiBtb2R1bGVzIGBwcmVTeW50aGVzaXplYCBmdW5jdGlvbiBvdGhlcndpc2VcbiAgICogaXQgaXMgbm90IGd1YXJhbnRlZWQgdGhhdCBhbGwgbmVlZGVkIG1vZHVsZXMgYXJlIHNldHVwIHByb3Blcmx5LlxuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVyQ29uZmlnKCk6IHZvaWQge1xuICAgIC8vIGRvIGFwaSBjYWxscyB0byBvdGhlciBjb25maWd1cmF0aW9uIG1vZHVsZXMgaGVyZS5cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIHRoZSBjdXJyZW50IGNvbmZpZ3VyYXRpb24gYmFzZWQgb24gdGhlIHN0cmF0ZWd5IHRvIHRoZSBwcm9qZWN0LlxuICAgKlxuICAgKiBUbyBlbnN1cmUgcHJvcGVyIGNvbmZpZ3VyYXRpb24gaGFuZGxpbmcgYGFwcGx5Q29uZmlnYCBzaG91bGQgYmUgY2FsbGVkIGluXG4gICAqIGBwcmVTeW50aGVzaXplYCBwaGFzZSBvZiB0aGUgY29uZmlndXJhdGlvbiBtb2R1bGUgYW5kIG5vdCBmcm9tIHByb2plY3QgaXRzZWxmLlxuICAgKlxuICAgKiBTdWJjbGFzc2VzIHNob3VsZCBvdmVyd3JpdGUgaXQgdG8gZ3VhcmFudGVlIHByb3BlciBtb2R1bGUgY29uZmlndXJhdGlvbi5cbiAgICovXG4gIHB1YmxpYyBhcHBseUNvbmZpZygpOiB2b2lkIHt9XG5cbiAgcHVibGljIG92ZXJyaWRlIHByZVN5bnRoZXNpemUoKTogdm9pZCB7XG4gICAgdGhpcy5hcHBseUNvbmZpZygpO1xuICAgIHN1cGVyLnByZVN5bnRoZXNpemUoKTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBwb3N0U3ludGhlc2l6ZSgpOiB2b2lkIHtcbiAgICBzdXBlci5wb3N0U3ludGhlc2l6ZSgpO1xuICB9XG59XG4iXX0=
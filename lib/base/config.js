"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
// import { ProjectTypes } from '../types/types';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2UvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQTRDO0FBQzVDLGlEQUFpRDtBQUVqRDs7OztHQUlHO0FBQ0gsTUFBYSxNQUFPLFNBQVEsa0JBQVM7SUFDbkM7OztPQUdHO0lBQ0gsWUFBWSxPQUFnQjtRQUMxQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ksY0FBYztRQUNuQixvREFBb0Q7SUFDdEQsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxXQUFXLEtBQVUsQ0FBQztJQUViLGFBQWE7UUFDM0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRWUsY0FBYztRQUM1QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7QUF2Q0gsd0JBd0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBQcm9qZWN0IH0gZnJvbSAncHJvamVuJztcbi8vIGltcG9ydCB7IFByb2plY3RUeXBlcyB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBjcmVhdGluZyBhbmQgbWFuYWdpbmcgcHJvamVjdCBjb25maWd1cmF0aW9ucy5cbiAqIFRoaXMgY2xhc3MgYWxsb3dzIGNvbmZpZ3VyaW5nIGEgcHJvamVjdCB1c2luZyBkaWZmZXJlbnQgc3RyYXRlZ2llcy5cbiAqIEl0IHJlcXVpcmVzIHRoZSBwcm9qZWN0IHRvIGJlIGVpdGhlciBhIGBCYXNlUHJvamVjdGAgb3IgYEpzaWlQcm9qZWN0YC5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbmZpZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgY29uZmlnIGZvciBhIHNwZWNpZmllZCBwcm9qZWN0LlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgdGhlIGNvbmZpZ3VyYXRpb24gbW9kdWxlIGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFByb2plY3QpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgY29uZmlnIHRvIG90aGVyIGNvbmZpZ3VyYXRpb24gbW9kdWxlcy5cbiAgICogUHVibGljIEFQSSBjYWxsIGFkZHJlc3Npbmcgb3RoZXIgbW9kdWxlcyBzaG91bGQgYmUgcGVyZm9ybWVkIGhlcmUsXG4gICAqIHRvIGd1YXJhbnRlZSBwcm9wZXIgY29uZmlndXJhdGlvbiBoYW5kbGluZy5cbiAgICpcbiAgICogVGhpcyBtZXRob2RzIHNob3VsZCBiZSBjYWxsZWQgb25seSBpbiB0aGUgcHJvamVjdHMgYHByZVN5bnRoZXNpemVgIHBoYXNlXG4gICAqIGFuZCBub3Qgb24gdGhlIGNvbmZpZ3VyYXRpb24gbW9kdWxlcyBgcHJlU3ludGhlc2l6ZWAgZnVuY3Rpb24gb3RoZXJ3aXNlXG4gICAqIGl0IGlzIG5vdCBndWFyYW50ZWVkIHRoYXQgYWxsIG5lZWRlZCBtb2R1bGVzIGFyZSBzZXR1cCBwcm9wZXJseS5cbiAgICovXG4gIHB1YmxpYyByZWdpc3RlckNvbmZpZygpOiB2b2lkIHtcbiAgICAvLyBkbyBhcGkgY2FsbHMgdG8gb3RoZXIgY29uZmlndXJhdGlvbiBtb2R1bGVzIGhlcmUuXG4gIH1cblxuICAvKipcbiAgICogQXBwbGllcyB0aGUgY3VycmVudCBjb25maWd1cmF0aW9uIGJhc2VkIG9uIHRoZSBzdHJhdGVneSB0byB0aGUgcHJvamVjdC5cbiAgICpcbiAgICogVG8gZW5zdXJlIHByb3BlciBjb25maWd1cmF0aW9uIGhhbmRsaW5nIGBhcHBseUNvbmZpZ2Agc2hvdWxkIGJlIGNhbGxlZCBpblxuICAgKiBgcHJlU3ludGhlc2l6ZWAgcGhhc2Ugb2YgdGhlIGNvbmZpZ3VyYXRpb24gbW9kdWxlIGFuZCBub3QgZnJvbSBwcm9qZWN0IGl0c2VsZi5cbiAgICpcbiAgICogU3ViY2xhc3NlcyBzaG91bGQgb3ZlcndyaXRlIGl0IHRvIGd1YXJhbnRlZSBwcm9wZXIgbW9kdWxlIGNvbmZpZ3VyYXRpb24uXG4gICAqL1xuICBwdWJsaWMgYXBwbHlDb25maWcoKTogdm9pZCB7fVxuXG4gIHB1YmxpYyBvdmVycmlkZSBwcmVTeW50aGVzaXplKCk6IHZvaWQge1xuICAgIHRoaXMuYXBwbHlDb25maWcoKTtcbiAgICBzdXBlci5wcmVTeW50aGVzaXplKCk7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcG9zdFN5bnRoZXNpemUoKTogdm9pZCB7XG4gICAgc3VwZXIucG9zdFN5bnRoZXNpemUoKTtcbiAgfVxufVxuIl19
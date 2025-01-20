"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerConfig = registerConfig;
exports.isValidProject = isValidProject;
const config_1 = require("./base/config");
const projen_1 = require("projen");
/**
 * Registers configuration for components that are instances of the `Config` class.
 *
 * @param comps An array of components to process.
 *              If a component is an instance of `Config`, its `registerConfig` method will be invoked.
 */
function registerConfig(comps) {
    for (const comp of comps) {
        if (comp instanceof config_1.Config) {
            comp.registerConfig();
        }
    }
}
/**
 * Validates if a given project is of a valid kind.
 * No check for `ProjectTypes` is performed to avoid circular dependency.
 *
 * @param project The project object to validate. Must have a `kind` property.
 * @returns `true` if the project's `kind` is either `base` or `jsii`; otherwise, `false`.
 */
function isValidProject(project) {
    if (project instanceof projen_1.Project && project.kind) {
        return project.kind === 'base' || project.kind === 'jsii';
    }
    return false;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFZQSx3Q0FNQztBQVNELHdDQU1DO0FBaENELDBDQUF1QztBQUV2QyxtQ0FBaUM7QUFHakM7Ozs7O0dBS0c7QUFDSCxTQUFnQixjQUFjLENBQUMsS0FBa0I7SUFDL0MsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUN6QixJQUFJLElBQUksWUFBWSxlQUFNLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IsY0FBYyxDQUFDLE9BQStCO0lBQzVELElBQUksT0FBTyxZQUFZLGdCQUFPLElBQUssT0FBdUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoRSxPQUFRLE9BQXVCLENBQUMsSUFBSSxLQUFLLE1BQU0sSUFBSyxPQUF1QixDQUFDLElBQUksS0FBSyxNQUFNLENBQUM7SUFDOUYsQ0FBQztJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3Byb2plbi9saWIvY29tcG9uZW50JztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vYmFzZS9jb25maWcnO1xuaW1wb3J0IHsgSVByb2plY3RLaW5kIH0gZnJvbSAnLi90eXBlcy90eXBlcyc7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IEJhc2VQcm9qZWN0IH0gZnJvbSAnLi9iYXNlL3Byb2plY3QnO1xuXG4vKipcbiAqIFJlZ2lzdGVycyBjb25maWd1cmF0aW9uIGZvciBjb21wb25lbnRzIHRoYXQgYXJlIGluc3RhbmNlcyBvZiB0aGUgYENvbmZpZ2AgY2xhc3MuXG4gKlxuICogQHBhcmFtIGNvbXBzIEFuIGFycmF5IG9mIGNvbXBvbmVudHMgdG8gcHJvY2Vzcy5cbiAqICAgICAgICAgICAgICBJZiBhIGNvbXBvbmVudCBpcyBhbiBpbnN0YW5jZSBvZiBgQ29uZmlnYCwgaXRzIGByZWdpc3RlckNvbmZpZ2AgbWV0aG9kIHdpbGwgYmUgaW52b2tlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ29uZmlnKGNvbXBzOiBDb21wb25lbnRbXSk6IHZvaWQge1xuICBmb3IgKGNvbnN0IGNvbXAgb2YgY29tcHMpIHtcbiAgICBpZiAoY29tcCBpbnN0YW5jZW9mIENvbmZpZykge1xuICAgICAgY29tcC5yZWdpc3RlckNvbmZpZygpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFZhbGlkYXRlcyBpZiBhIGdpdmVuIHByb2plY3QgaXMgb2YgYSB2YWxpZCBraW5kLlxuICogTm8gY2hlY2sgZm9yIGBQcm9qZWN0VHlwZXNgIGlzIHBlcmZvcm1lZCB0byBhdm9pZCBjaXJjdWxhciBkZXBlbmRlbmN5LlxuICpcbiAqIEBwYXJhbSBwcm9qZWN0IFRoZSBwcm9qZWN0IG9iamVjdCB0byB2YWxpZGF0ZS4gTXVzdCBoYXZlIGEgYGtpbmRgIHByb3BlcnR5LlxuICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBwcm9qZWN0J3MgYGtpbmRgIGlzIGVpdGhlciBgYmFzZWAgb3IgYGpzaWlgOyBvdGhlcndpc2UsIGBmYWxzZWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkUHJvamVjdChwcm9qZWN0OiBJUHJvamVjdEtpbmQgfCBQcm9qZWN0KTogYm9vbGVhbiB7XG4gIGlmIChwcm9qZWN0IGluc3RhbmNlb2YgUHJvamVjdCAmJiAocHJvamVjdCBhcyBCYXNlUHJvamVjdCkua2luZCkge1xuICAgIHJldHVybiAocHJvamVjdCBhcyBCYXNlUHJvamVjdCkua2luZCA9PT0gJ2Jhc2UnIHx8IChwcm9qZWN0IGFzIEJhc2VQcm9qZWN0KS5raW5kID09PSAnanNpaSc7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG4iXX0=
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFZQSx3Q0FNQztBQVNELHdDQU1DO0FBaENELDBDQUF1QztBQUV2QyxtQ0FBaUM7QUFHakM7Ozs7O0dBS0c7QUFDSCxTQUFnQixjQUFjLENBQUMsS0FBa0I7SUFDL0MsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUN6QixJQUFJLElBQUksWUFBWSxlQUFNLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IsY0FBYyxDQUFDLE9BQStCO0lBQzVELElBQUksT0FBTyxZQUFZLGdCQUFPLElBQUssT0FBdUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoRSxPQUFRLE9BQXVCLENBQUMsSUFBSSxLQUFLLE1BQU0sSUFBSyxPQUF1QixDQUFDLElBQUksS0FBSyxNQUFNLENBQUM7SUFDOUYsQ0FBQztJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3Byb2plbi9saWIvY29tcG9uZW50JztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vYmFzZS9jb25maWcnO1xuaW1wb3J0IHsgSVByb2plY3RLaW5kIH0gZnJvbSAnLi90eXBlcy9wcm9qZWN0JztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICdwcm9qZW4nO1xuaW1wb3J0IHsgQmFzZVByb2plY3QgfSBmcm9tICcuL2Jhc2UvcHJvamVjdCc7XG5cbi8qKlxuICogUmVnaXN0ZXJzIGNvbmZpZ3VyYXRpb24gZm9yIGNvbXBvbmVudHMgdGhhdCBhcmUgaW5zdGFuY2VzIG9mIHRoZSBgQ29uZmlnYCBjbGFzcy5cbiAqXG4gKiBAcGFyYW0gY29tcHMgQW4gYXJyYXkgb2YgY29tcG9uZW50cyB0byBwcm9jZXNzLlxuICogICAgICAgICAgICAgIElmIGEgY29tcG9uZW50IGlzIGFuIGluc3RhbmNlIG9mIGBDb25maWdgLCBpdHMgYHJlZ2lzdGVyQ29uZmlnYCBtZXRob2Qgd2lsbCBiZSBpbnZva2VkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDb25maWcoY29tcHM6IENvbXBvbmVudFtdKTogdm9pZCB7XG4gIGZvciAoY29uc3QgY29tcCBvZiBjb21wcykge1xuICAgIGlmIChjb21wIGluc3RhbmNlb2YgQ29uZmlnKSB7XG4gICAgICBjb21wLnJlZ2lzdGVyQ29uZmlnKCk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVmFsaWRhdGVzIGlmIGEgZ2l2ZW4gcHJvamVjdCBpcyBvZiBhIHZhbGlkIGtpbmQuXG4gKiBObyBjaGVjayBmb3IgYFByb2plY3RUeXBlc2AgaXMgcGVyZm9ybWVkIHRvIGF2b2lkIGNpcmN1bGFyIGRlcGVuZGVuY3kuXG4gKlxuICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3Qgb2JqZWN0IHRvIHZhbGlkYXRlLiBNdXN0IGhhdmUgYSBga2luZGAgcHJvcGVydHkuXG4gKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHByb2plY3QncyBga2luZGAgaXMgZWl0aGVyIGBiYXNlYCBvciBganNpaWA7IG90aGVyd2lzZSwgYGZhbHNlYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRQcm9qZWN0KHByb2plY3Q6IElQcm9qZWN0S2luZCB8IFByb2plY3QpOiBib29sZWFuIHtcbiAgaWYgKHByb2plY3QgaW5zdGFuY2VvZiBQcm9qZWN0ICYmIChwcm9qZWN0IGFzIEJhc2VQcm9qZWN0KS5raW5kKSB7XG4gICAgcmV0dXJuIChwcm9qZWN0IGFzIEJhc2VQcm9qZWN0KS5raW5kID09PSAnYmFzZScgfHwgKHByb2plY3QgYXMgQmFzZVByb2plY3QpLmtpbmQgPT09ICdqc2lpJztcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbiJdfQ==
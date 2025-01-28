"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerConfig = registerConfig;
exports.isValidProject = isValidProject;
const config_1 = require("../base/config");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVlBLHdDQU1DO0FBU0Qsd0NBTUM7QUFoQ0QsMkNBQXdDO0FBRXhDLG1DQUFpQztBQUdqQzs7Ozs7R0FLRztBQUNILFNBQWdCLGNBQWMsQ0FBQyxLQUFrQjtJQUMvQyxLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ3pCLElBQUksSUFBSSxZQUFZLGVBQU0sRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxTQUFnQixjQUFjLENBQUMsT0FBK0I7SUFDNUQsSUFBSSxPQUFPLFlBQVksZ0JBQU8sSUFBSyxPQUF1QixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hFLE9BQVEsT0FBdUIsQ0FBQyxJQUFJLEtBQUssTUFBTSxJQUFLLE9BQXVCLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQztJQUM5RixDQUFDO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncHJvamVuL2xpYi9jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vYmFzZS9jb25maWcnO1xuaW1wb3J0IHsgSVByb2plY3RLaW5kIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IEJhc2VQcm9qZWN0IH0gZnJvbSAnLi4vYmFzZS9wcm9qZWN0JztcblxuLyoqXG4gKiBSZWdpc3RlcnMgY29uZmlndXJhdGlvbiBmb3IgY29tcG9uZW50cyB0aGF0IGFyZSBpbnN0YW5jZXMgb2YgdGhlIGBDb25maWdgIGNsYXNzLlxuICpcbiAqIEBwYXJhbSBjb21wcyBBbiBhcnJheSBvZiBjb21wb25lbnRzIHRvIHByb2Nlc3MuXG4gKiAgICAgICAgICAgICAgSWYgYSBjb21wb25lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgYENvbmZpZ2AsIGl0cyBgcmVnaXN0ZXJDb25maWdgIG1ldGhvZCB3aWxsIGJlIGludm9rZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckNvbmZpZyhjb21wczogQ29tcG9uZW50W10pOiB2b2lkIHtcbiAgZm9yIChjb25zdCBjb21wIG9mIGNvbXBzKSB7XG4gICAgaWYgKGNvbXAgaW5zdGFuY2VvZiBDb25maWcpIHtcbiAgICAgIGNvbXAucmVnaXN0ZXJDb25maWcoKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBWYWxpZGF0ZXMgaWYgYSBnaXZlbiBwcm9qZWN0IGlzIG9mIGEgdmFsaWQga2luZC5cbiAqIE5vIGNoZWNrIGZvciBgUHJvamVjdFR5cGVzYCBpcyBwZXJmb3JtZWQgdG8gYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jeS5cbiAqXG4gKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCBvYmplY3QgdG8gdmFsaWRhdGUuIE11c3QgaGF2ZSBhIGBraW5kYCBwcm9wZXJ0eS5cbiAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgcHJvamVjdCdzIGBraW5kYCBpcyBlaXRoZXIgYGJhc2VgIG9yIGBqc2lpYDsgb3RoZXJ3aXNlLCBgZmFsc2VgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZFByb2plY3QocHJvamVjdDogSVByb2plY3RLaW5kIHwgUHJvamVjdCk6IGJvb2xlYW4ge1xuICBpZiAocHJvamVjdCBpbnN0YW5jZW9mIFByb2plY3QgJiYgKHByb2plY3QgYXMgQmFzZVByb2plY3QpLmtpbmQpIHtcbiAgICByZXR1cm4gKHByb2plY3QgYXMgQmFzZVByb2plY3QpLmtpbmQgPT09ICdiYXNlJyB8fCAocHJvamVjdCBhcyBCYXNlUHJvamVjdCkua2luZCA9PT0gJ2pzaWknO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuIl19
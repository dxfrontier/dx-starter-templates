"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.util = void 0;
const config_1 = require("../base/config");
const projen_1 = require("projen");
const child_process_1 = require("child_process");
const constants_1 = require("./constants");
exports.util = {
    /**
     * Registers configuration for components that are instances of the `Config` class.
     *
     * @param comps An array of components to process.
     *              If a component is an instance of `Config`, its `registerConfig` method will be invoked.
     */
    registerConfig(comps) {
        for (const comp of comps) {
            if (comp instanceof config_1.Config) {
                comp.registerConfig();
            }
        }
    },
    /**
     * Validates if a given project is of a valid kind.
     * No check for `ProjectTypes` is performed to avoid circular dependency.
     *
     * @param project The project object to validate. Must have a `kind` property.
     * @returns `true` if the project's `kind` is either `base` or `jsii`; otherwise, `false`.
     */
    isValidProject(project) {
        if (project instanceof projen_1.Project && project.kind) {
            return project.kind === 'base' || project.kind === 'jsii';
        }
        return false;
    },
    setupExitHandler(hasRun) {
        if (hasRun) {
            return;
        }
        const runProjenEjectAndInstall = () => {
            const command = `npx projen eject && rm -rf .projenrc.ts.bak scripts .projen && npm install ${constants_1.constants['@dxfrontier/cds-ts-dispatcher'].NAME}@${constants_1.constants['@dxfrontier/cds-ts-dispatcher'].VERSION}`;
            hasRun = true;
            (0, child_process_1.exec)(command, (error, stdout) => {
                if (error) {
                    console.error('Error exiting projen ... But exit will continue.');
                }
                console.log(`${stdout}`);
            });
        };
        runProjenEjectAndInstall();
        console.log('Exiting projen and installing @dxfrontier/cds-ts-dispatcher ...');
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwyQ0FBd0M7QUFFeEMsbUNBQWlDO0FBRWpDLGlEQUFvRDtBQUNwRCwyQ0FBd0M7QUFFM0IsUUFBQSxJQUFJLEdBQUc7SUFDbEI7Ozs7O09BS0c7SUFDSCxjQUFjLENBQUMsS0FBa0I7UUFDL0IsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUN6QixJQUFJLElBQUksWUFBWSxlQUFNLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3hCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILGNBQWMsQ0FBQyxPQUErQjtRQUM1QyxJQUFJLE9BQU8sWUFBWSxnQkFBTyxJQUFLLE9BQXVCLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDaEUsT0FBUSxPQUF1QixDQUFDLElBQUksS0FBSyxNQUFNLElBQUssT0FBdUIsQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDO1FBQzlGLENBQUM7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxNQUFlO1FBQzlCLElBQUksTUFBTSxFQUFFLENBQUM7WUFDWCxPQUFPO1FBQ1QsQ0FBQztRQUVELE1BQU0sd0JBQXdCLEdBQUcsR0FBRyxFQUFFO1lBQ3BDLE1BQU0sT0FBTyxHQUFHLDhFQUE4RSxxQkFBUyxDQUFDLCtCQUErQixDQUFDLENBQUMsSUFBSSxJQUFJLHFCQUFTLENBQUMsK0JBQStCLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUV0TSxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBRWQsSUFBQSxvQkFBSSxFQUFDLE9BQU8sRUFBRSxDQUFDLEtBQTJCLEVBQUUsTUFBYyxFQUFRLEVBQUU7Z0JBQ2xFLElBQUksS0FBSyxFQUFFLENBQUM7b0JBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO2dCQUNwRSxDQUFDO2dCQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO1FBRUYsd0JBQXdCLEVBQUUsQ0FBQztRQUUzQixPQUFPLENBQUMsR0FBRyxDQUFDLGlFQUFpRSxDQUFDLENBQUM7SUFDakYsQ0FBQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdwcm9qZW4vbGliL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9iYXNlL2NvbmZpZyc7XG5pbXBvcnQgeyBJUHJvamVjdEtpbmQgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICdwcm9qZW4nO1xuaW1wb3J0IHsgQmFzZVByb2plY3QgfSBmcm9tICcuLi9iYXNlL3Byb2plY3QnO1xuaW1wb3J0IHsgZXhlYywgRXhlY0V4Y2VwdGlvbiB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgdXRpbCA9IHtcbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBjb25maWd1cmF0aW9uIGZvciBjb21wb25lbnRzIHRoYXQgYXJlIGluc3RhbmNlcyBvZiB0aGUgYENvbmZpZ2AgY2xhc3MuXG4gICAqXG4gICAqIEBwYXJhbSBjb21wcyBBbiBhcnJheSBvZiBjb21wb25lbnRzIHRvIHByb2Nlc3MuXG4gICAqICAgICAgICAgICAgICBJZiBhIGNvbXBvbmVudCBpcyBhbiBpbnN0YW5jZSBvZiBgQ29uZmlnYCwgaXRzIGByZWdpc3RlckNvbmZpZ2AgbWV0aG9kIHdpbGwgYmUgaW52b2tlZC5cbiAgICovXG4gIHJlZ2lzdGVyQ29uZmlnKGNvbXBzOiBDb21wb25lbnRbXSk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgY29tcCBvZiBjb21wcykge1xuICAgICAgaWYgKGNvbXAgaW5zdGFuY2VvZiBDb25maWcpIHtcbiAgICAgICAgY29tcC5yZWdpc3RlckNvbmZpZygpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogVmFsaWRhdGVzIGlmIGEgZ2l2ZW4gcHJvamVjdCBpcyBvZiBhIHZhbGlkIGtpbmQuXG4gICAqIE5vIGNoZWNrIGZvciBgUHJvamVjdFR5cGVzYCBpcyBwZXJmb3JtZWQgdG8gYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jeS5cbiAgICpcbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3Qgb2JqZWN0IHRvIHZhbGlkYXRlLiBNdXN0IGhhdmUgYSBga2luZGAgcHJvcGVydHkuXG4gICAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgcHJvamVjdCdzIGBraW5kYCBpcyBlaXRoZXIgYGJhc2VgIG9yIGBqc2lpYDsgb3RoZXJ3aXNlLCBgZmFsc2VgLlxuICAgKi9cbiAgaXNWYWxpZFByb2plY3QocHJvamVjdDogSVByb2plY3RLaW5kIHwgUHJvamVjdCk6IGJvb2xlYW4ge1xuICAgIGlmIChwcm9qZWN0IGluc3RhbmNlb2YgUHJvamVjdCAmJiAocHJvamVjdCBhcyBCYXNlUHJvamVjdCkua2luZCkge1xuICAgICAgcmV0dXJuIChwcm9qZWN0IGFzIEJhc2VQcm9qZWN0KS5raW5kID09PSAnYmFzZScgfHwgKHByb2plY3QgYXMgQmFzZVByb2plY3QpLmtpbmQgPT09ICdqc2lpJztcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgc2V0dXBFeGl0SGFuZGxlcihoYXNSdW46IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoaGFzUnVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcnVuUHJvamVuRWplY3RBbmRJbnN0YWxsID0gKCkgPT4ge1xuICAgICAgY29uc3QgY29tbWFuZCA9IGBucHggcHJvamVuIGVqZWN0ICYmIHJtIC1yZiAucHJvamVucmMudHMuYmFrIHNjcmlwdHMgLnByb2plbiAmJiBucG0gaW5zdGFsbCAke2NvbnN0YW50c1snQGR4ZnJvbnRpZXIvY2RzLXRzLWRpc3BhdGNoZXInXS5OQU1FfUAke2NvbnN0YW50c1snQGR4ZnJvbnRpZXIvY2RzLXRzLWRpc3BhdGNoZXInXS5WRVJTSU9OfWA7XG5cbiAgICAgIGhhc1J1biA9IHRydWU7XG5cbiAgICAgIGV4ZWMoY29tbWFuZCwgKGVycm9yOiBFeGVjRXhjZXB0aW9uIHwgbnVsbCwgc3Rkb3V0OiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZXhpdGluZyBwcm9qZW4gLi4uIEJ1dCBleGl0IHdpbGwgY29udGludWUuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhgJHtzdGRvdXR9YCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcnVuUHJvamVuRWplY3RBbmRJbnN0YWxsKCk7XG5cbiAgICBjb25zb2xlLmxvZygnRXhpdGluZyBwcm9qZW4gYW5kIGluc3RhbGxpbmcgQGR4ZnJvbnRpZXIvY2RzLXRzLWRpc3BhdGNoZXIgLi4uJyk7XG4gIH0sXG59O1xuIl19
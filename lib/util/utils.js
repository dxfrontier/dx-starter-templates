"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.util = void 0;
const config_1 = require("../base/config");
const projen_1 = require("projen");
const child_process_1 = require("child_process");
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
    /**
     * This method is used to setup the exit handler for the project.
     * It will eject the project and install the CDS dispatcher package.
     * @param command The command to execute
     * @param hasRun A flag to indicate if the command has already
     */
    setupExitHandler(command, hasRun = false) {
        if (hasRun) {
            return;
        }
        const handleExecCallback = (error, stdout) => {
            if (error) {
                console.error('Error exiting projen ... But exit will continue.');
            }
            console.log(stdout);
        };
        hasRun = true;
        (0, child_process_1.exec)(command, handleExecCallback);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwyQ0FBd0M7QUFFeEMsbUNBQWlDO0FBRWpDLGlEQUFvRDtBQUV2QyxRQUFBLElBQUksR0FBRztJQUNsQjs7Ozs7T0FLRztJQUNILGNBQWMsQ0FBQyxLQUFrQjtRQUMvQixLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ3pCLElBQUksSUFBSSxZQUFZLGVBQU0sRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDeEIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsY0FBYyxDQUFDLE9BQStCO1FBQzVDLElBQUksT0FBTyxZQUFZLGdCQUFPLElBQUssT0FBdUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoRSxPQUFRLE9BQXVCLENBQUMsSUFBSSxLQUFLLE1BQU0sSUFBSyxPQUF1QixDQUFDLElBQUksS0FBSyxNQUFNLENBQUM7UUFDOUYsQ0FBQztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsZ0JBQWdCLENBQUMsT0FBZSxFQUFFLE1BQU0sR0FBRyxLQUFLO1FBQzlDLElBQUksTUFBTSxFQUFFLENBQUM7WUFDWCxPQUFPO1FBQ1QsQ0FBQztRQUVELE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxLQUEyQixFQUFFLE1BQWMsRUFBUSxFQUFFO1lBQy9FLElBQUksS0FBSyxFQUFFLENBQUM7Z0JBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO1lBQ3BFLENBQUM7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQztRQUVGLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFZCxJQUFBLG9CQUFJLEVBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDcEMsQ0FBQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdwcm9qZW4vbGliL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9iYXNlL2NvbmZpZyc7XG5pbXBvcnQgeyBJUHJvamVjdEtpbmQgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICdwcm9qZW4nO1xuaW1wb3J0IHsgQmFzZVByb2plY3QgfSBmcm9tICcuLi9iYXNlL3Byb2plY3QnO1xuaW1wb3J0IHsgZXhlYywgRXhlY0V4Y2VwdGlvbiB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgdXRpbCA9IHtcbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBjb25maWd1cmF0aW9uIGZvciBjb21wb25lbnRzIHRoYXQgYXJlIGluc3RhbmNlcyBvZiB0aGUgYENvbmZpZ2AgY2xhc3MuXG4gICAqXG4gICAqIEBwYXJhbSBjb21wcyBBbiBhcnJheSBvZiBjb21wb25lbnRzIHRvIHByb2Nlc3MuXG4gICAqICAgICAgICAgICAgICBJZiBhIGNvbXBvbmVudCBpcyBhbiBpbnN0YW5jZSBvZiBgQ29uZmlnYCwgaXRzIGByZWdpc3RlckNvbmZpZ2AgbWV0aG9kIHdpbGwgYmUgaW52b2tlZC5cbiAgICovXG4gIHJlZ2lzdGVyQ29uZmlnKGNvbXBzOiBDb21wb25lbnRbXSk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgY29tcCBvZiBjb21wcykge1xuICAgICAgaWYgKGNvbXAgaW5zdGFuY2VvZiBDb25maWcpIHtcbiAgICAgICAgY29tcC5yZWdpc3RlckNvbmZpZygpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogVmFsaWRhdGVzIGlmIGEgZ2l2ZW4gcHJvamVjdCBpcyBvZiBhIHZhbGlkIGtpbmQuXG4gICAqIE5vIGNoZWNrIGZvciBgUHJvamVjdFR5cGVzYCBpcyBwZXJmb3JtZWQgdG8gYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jeS5cbiAgICpcbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3Qgb2JqZWN0IHRvIHZhbGlkYXRlLiBNdXN0IGhhdmUgYSBga2luZGAgcHJvcGVydHkuXG4gICAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgcHJvamVjdCdzIGBraW5kYCBpcyBlaXRoZXIgYGJhc2VgIG9yIGBqc2lpYDsgb3RoZXJ3aXNlLCBgZmFsc2VgLlxuICAgKi9cbiAgaXNWYWxpZFByb2plY3QocHJvamVjdDogSVByb2plY3RLaW5kIHwgUHJvamVjdCk6IGJvb2xlYW4ge1xuICAgIGlmIChwcm9qZWN0IGluc3RhbmNlb2YgUHJvamVjdCAmJiAocHJvamVjdCBhcyBCYXNlUHJvamVjdCkua2luZCkge1xuICAgICAgcmV0dXJuIChwcm9qZWN0IGFzIEJhc2VQcm9qZWN0KS5raW5kID09PSAnYmFzZScgfHwgKHByb2plY3QgYXMgQmFzZVByb2plY3QpLmtpbmQgPT09ICdqc2lpJztcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gc2V0dXAgdGhlIGV4aXQgaGFuZGxlciBmb3IgdGhlIHByb2plY3QuXG4gICAqIEl0IHdpbGwgZWplY3QgdGhlIHByb2plY3QgYW5kIGluc3RhbGwgdGhlIENEUyBkaXNwYXRjaGVyIHBhY2thZ2UuXG4gICAqIEBwYXJhbSBjb21tYW5kIFRoZSBjb21tYW5kIHRvIGV4ZWN1dGVcbiAgICogQHBhcmFtIGhhc1J1biBBIGZsYWcgdG8gaW5kaWNhdGUgaWYgdGhlIGNvbW1hbmQgaGFzIGFscmVhZHlcbiAgICovXG4gIHNldHVwRXhpdEhhbmRsZXIoY29tbWFuZDogc3RyaW5nLCBoYXNSdW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmIChoYXNSdW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVFeGVjQ2FsbGJhY2sgPSAoZXJyb3I6IEV4ZWNFeGNlcHRpb24gfCBudWxsLCBzdGRvdXQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGV4aXRpbmcgcHJvamVuIC4uLiBCdXQgZXhpdCB3aWxsIGNvbnRpbnVlLicpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coc3Rkb3V0KTtcbiAgICB9O1xuXG4gICAgaGFzUnVuID0gdHJ1ZTtcblxuICAgIGV4ZWMoY29tbWFuZCwgaGFuZGxlRXhlY0NhbGxiYWNrKTtcbiAgfSxcbn07XG4iXX0=
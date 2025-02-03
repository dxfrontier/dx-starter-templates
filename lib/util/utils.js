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
    setupExitHandler(hasRun = false) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwyQ0FBd0M7QUFFeEMsbUNBQWlDO0FBRWpDLGlEQUFvRDtBQUNwRCwyQ0FBd0M7QUFFM0IsUUFBQSxJQUFJLEdBQUc7SUFDbEI7Ozs7O09BS0c7SUFDSCxjQUFjLENBQUMsS0FBa0I7UUFDL0IsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUN6QixJQUFJLElBQUksWUFBWSxlQUFNLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3hCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILGNBQWMsQ0FBQyxPQUErQjtRQUM1QyxJQUFJLE9BQU8sWUFBWSxnQkFBTyxJQUFLLE9BQXVCLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDaEUsT0FBUSxPQUF1QixDQUFDLElBQUksS0FBSyxNQUFNLElBQUssT0FBdUIsQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDO1FBQzlGLENBQUM7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsS0FBSztRQUM3QixJQUFJLE1BQU0sRUFBRSxDQUFDO1lBQ1gsT0FBTztRQUNULENBQUM7UUFFRCxNQUFNLHdCQUF3QixHQUFHLEdBQUcsRUFBRTtZQUNwQyxNQUFNLE9BQU8sR0FBRyw4RUFBOEUscUJBQVMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLElBQUksSUFBSSxxQkFBUyxDQUFDLCtCQUErQixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFdE0sTUFBTSxHQUFHLElBQUksQ0FBQztZQUVkLElBQUEsb0JBQUksRUFBQyxPQUFPLEVBQUUsQ0FBQyxLQUEyQixFQUFFLE1BQWMsRUFBUSxFQUFFO2dCQUNsRSxJQUFJLEtBQUssRUFBRSxDQUFDO29CQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQztnQkFDcEUsQ0FBQztnQkFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztRQUVGLHdCQUF3QixFQUFFLENBQUM7UUFFM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpRUFBaUUsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncHJvamVuL2xpYi9jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vYmFzZS9jb25maWcnO1xuaW1wb3J0IHsgSVByb2plY3RLaW5kIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IEJhc2VQcm9qZWN0IH0gZnJvbSAnLi4vYmFzZS9wcm9qZWN0JztcbmltcG9ydCB7IGV4ZWMsIEV4ZWNFeGNlcHRpb24gfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IHV0aWwgPSB7XG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgY29uZmlndXJhdGlvbiBmb3IgY29tcG9uZW50cyB0aGF0IGFyZSBpbnN0YW5jZXMgb2YgdGhlIGBDb25maWdgIGNsYXNzLlxuICAgKlxuICAgKiBAcGFyYW0gY29tcHMgQW4gYXJyYXkgb2YgY29tcG9uZW50cyB0byBwcm9jZXNzLlxuICAgKiAgICAgICAgICAgICAgSWYgYSBjb21wb25lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgYENvbmZpZ2AsIGl0cyBgcmVnaXN0ZXJDb25maWdgIG1ldGhvZCB3aWxsIGJlIGludm9rZWQuXG4gICAqL1xuICByZWdpc3RlckNvbmZpZyhjb21wczogQ29tcG9uZW50W10pOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGNvbXAgb2YgY29tcHMpIHtcbiAgICAgIGlmIChjb21wIGluc3RhbmNlb2YgQ29uZmlnKSB7XG4gICAgICAgIGNvbXAucmVnaXN0ZXJDb25maWcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBpZiBhIGdpdmVuIHByb2plY3QgaXMgb2YgYSB2YWxpZCBraW5kLlxuICAgKiBObyBjaGVjayBmb3IgYFByb2plY3RUeXBlc2AgaXMgcGVyZm9ybWVkIHRvIGF2b2lkIGNpcmN1bGFyIGRlcGVuZGVuY3kuXG4gICAqXG4gICAqIEBwYXJhbSBwcm9qZWN0IFRoZSBwcm9qZWN0IG9iamVjdCB0byB2YWxpZGF0ZS4gTXVzdCBoYXZlIGEgYGtpbmRgIHByb3BlcnR5LlxuICAgKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHByb2plY3QncyBga2luZGAgaXMgZWl0aGVyIGBiYXNlYCBvciBganNpaWA7IG90aGVyd2lzZSwgYGZhbHNlYC5cbiAgICovXG4gIGlzVmFsaWRQcm9qZWN0KHByb2plY3Q6IElQcm9qZWN0S2luZCB8IFByb2plY3QpOiBib29sZWFuIHtcbiAgICBpZiAocHJvamVjdCBpbnN0YW5jZW9mIFByb2plY3QgJiYgKHByb2plY3QgYXMgQmFzZVByb2plY3QpLmtpbmQpIHtcbiAgICAgIHJldHVybiAocHJvamVjdCBhcyBCYXNlUHJvamVjdCkua2luZCA9PT0gJ2Jhc2UnIHx8IChwcm9qZWN0IGFzIEJhc2VQcm9qZWN0KS5raW5kID09PSAnanNpaSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIHNldHVwRXhpdEhhbmRsZXIoaGFzUnVuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAoaGFzUnVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcnVuUHJvamVuRWplY3RBbmRJbnN0YWxsID0gKCkgPT4ge1xuICAgICAgY29uc3QgY29tbWFuZCA9IGBucHggcHJvamVuIGVqZWN0ICYmIHJtIC1yZiAucHJvamVucmMudHMuYmFrIHNjcmlwdHMgLnByb2plbiAmJiBucG0gaW5zdGFsbCAke2NvbnN0YW50c1snQGR4ZnJvbnRpZXIvY2RzLXRzLWRpc3BhdGNoZXInXS5OQU1FfUAke2NvbnN0YW50c1snQGR4ZnJvbnRpZXIvY2RzLXRzLWRpc3BhdGNoZXInXS5WRVJTSU9OfWA7XG5cbiAgICAgIGhhc1J1biA9IHRydWU7XG5cbiAgICAgIGV4ZWMoY29tbWFuZCwgKGVycm9yOiBFeGVjRXhjZXB0aW9uIHwgbnVsbCwgc3Rkb3V0OiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZXhpdGluZyBwcm9qZW4gLi4uIEJ1dCBleGl0IHdpbGwgY29udGludWUuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhgJHtzdGRvdXR9YCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcnVuUHJvamVuRWplY3RBbmRJbnN0YWxsKCk7XG5cbiAgICBjb25zb2xlLmxvZygnRXhpdGluZyBwcm9qZW4gYW5kIGluc3RhbGxpbmcgQGR4ZnJvbnRpZXIvY2RzLXRzLWRpc3BhdGNoZXIgLi4uJyk7XG4gIH0sXG59O1xuIl19
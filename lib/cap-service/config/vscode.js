"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VsCodeConfigCapService = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const base_1 = require("../../base");
/**
 * Implementing all relevant VsCode configuration for the CapService project.
 */
class VsCodeConfigCapService extends base_1.VsCodeConfigBase {
    constructor(project) {
        super(project);
    }
    /**
     * Gets the launch config file to be added to the project's configuration.
     *
     * @returns A record of the having the path to the file as key and the content as value.
     */
    get configFileLaunch() {
        return {
            '.vscode/launch.json': {
                version: '0.2.0',
                configurations: [
                    {
                        address: '127.0.0.1',
                        localRoot: '${workspaceFolder}',
                        remoteRoot: '/home/vcap/app',
                        name: 'Attach to Remote',
                        port: 9229,
                        request: 'attach',
                        skipFiles: ['<node_internals>/**'],
                        type: 'node',
                    },
                ],
            },
        };
    }
    /**
     * Gets the tasks config file to be added to the project's configuration.
     *
     * @returns A record of the having the path to the file as key and the content as value.
     */
    get configFileTasks() {
        return {
            '.vscode/tasks.json': {
                version: '2.0.0',
                tasks: [
                    {
                        type: 'shell',
                        label: 'cds watch',
                        command: 'cds',
                        args: ['watch'],
                        group: {
                            kind: 'build',
                            isDefault: true,
                        },
                    },
                    {
                        type: 'shell',
                        label: 'cds serve',
                        command: 'cds',
                        args: ['serve', '--with-mocks', '--in-memory?'],
                    },
                ],
            },
        };
    }
    /**
     * Creates the launch configuration file in the project directory.
     */
    createConfigLaunch() {
        const filePath = Object.keys(this.configFileLaunch)[0];
        new projen_1.JsonFile(this.project, filePath, {
            obj: this.configFileLaunch[filePath],
        });
    }
    /**
     * Creates the tasks configuration file in the project directory.
     */
    createConfigTasks() {
        const filePath = Object.keys(this.configFileTasks)[0];
        new projen_1.JsonFile(this.project, filePath, {
            obj: this.configFileTasks[filePath],
        });
    }
    get additionalIgnorePatterns() {
        const filePath = Object.keys(this.configFile)[0];
        const filePathLaunch = Object.keys(this.configFileLaunch)[0];
        const filePathTasks = Object.keys(this.configFileTasks)[0];
        return [`/${filePath}`, `/${filePathLaunch}`, `/${filePathTasks}`];
    }
    applyConfig() {
        super.applyConfig();
        this.createConfigLaunch();
        this.createConfigTasks();
    }
}
exports.VsCodeConfigCapService = VsCodeConfigCapService;
_a = JSII_RTTI_SYMBOL_1;
VsCodeConfigCapService[_a] = { fqn: "@dxfrontier/projen-template-projects.VsCodeConfigCapService", version: "0.5.4" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnNjb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NhcC1zZXJ2aWNlL2NvbmZpZy92c2NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBa0M7QUFFbEMscUNBQThDO0FBRzlDOztHQUVHO0FBQ0gsTUFBYSxzQkFBdUIsU0FBUSx1QkFBZ0I7SUFDMUQsWUFBWSxPQUEwQjtRQUNwQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLGdCQUFnQjtRQUM1QixPQUFPO1lBQ0wscUJBQXFCLEVBQUU7Z0JBQ3JCLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixjQUFjLEVBQUU7b0JBQ2Q7d0JBQ0UsT0FBTyxFQUFFLFdBQVc7d0JBQ3BCLFNBQVMsRUFBRSxvQkFBb0I7d0JBQy9CLFVBQVUsRUFBRSxnQkFBZ0I7d0JBQzVCLElBQUksRUFBRSxrQkFBa0I7d0JBQ3hCLElBQUksRUFBRSxJQUFJO3dCQUNWLE9BQU8sRUFBRSxRQUFRO3dCQUNqQixTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzt3QkFDbEMsSUFBSSxFQUFFLE1BQU07cUJBQ2I7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsZUFBZTtRQUMzQixPQUFPO1lBQ0wsb0JBQW9CLEVBQUU7Z0JBQ3BCLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsSUFBSSxFQUFFLE9BQU87d0JBQ2IsS0FBSyxFQUFFLFdBQVc7d0JBQ2xCLE9BQU8sRUFBRSxLQUFLO3dCQUNkLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQzt3QkFDZixLQUFLLEVBQUU7NEJBQ0wsSUFBSSxFQUFFLE9BQU87NEJBQ2IsU0FBUyxFQUFFLElBQUk7eUJBQ2hCO3FCQUNGO29CQUNEO3dCQUNFLElBQUksRUFBRSxPQUFPO3dCQUNiLEtBQUssRUFBRSxXQUFXO3dCQUNsQixPQUFPLEVBQUUsS0FBSzt3QkFDZCxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQztxQkFDaEQ7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSSxrQkFBa0I7UUFDdkIsTUFBTSxRQUFRLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUU7WUFDbkMsR0FBRyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7U0FDckMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ksaUJBQWlCO1FBQ3RCLE1BQU0sUUFBUSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlELElBQUksaUJBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRTtZQUNuQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7U0FDcEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELElBQWMsd0JBQXdCO1FBQ3BDLE1BQU0sUUFBUSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sY0FBYyxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckUsTUFBTSxhQUFhLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsT0FBTyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxjQUFjLEVBQUUsRUFBRSxJQUFJLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVlLFdBQVc7UUFDekIsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7O0FBNUZILHdEQTZGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEpzb25GaWxlIH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IENhcFNlcnZpY2VQcm9qZWN0IH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgVnNDb2RlQ29uZmlnQmFzZSB9IGZyb20gJy4uLy4uL2Jhc2UnO1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJztcblxuLyoqXG4gKiBJbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IFZzQ29kZSBjb25maWd1cmF0aW9uIGZvciB0aGUgQ2FwU2VydmljZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgVnNDb2RlQ29uZmlnQ2FwU2VydmljZSBleHRlbmRzIFZzQ29kZUNvbmZpZ0Jhc2Uge1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBDYXBTZXJ2aWNlUHJvamVjdCkge1xuICAgIHN1cGVyKHByb2plY3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGxhdW5jaCBjb25maWcgZmlsZSB0byBiZSBhZGRlZCB0byB0aGUgcHJvamVjdCdzIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIEEgcmVjb3JkIG9mIHRoZSBoYXZpbmcgdGhlIHBhdGggdG8gdGhlIGZpbGUgYXMga2V5IGFuZCB0aGUgY29udGVudCBhcyB2YWx1ZS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZUxhdW5jaCgpOiBTZXR0aW5ncyB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcudnNjb2RlL2xhdW5jaC5qc29uJzoge1xuICAgICAgICB2ZXJzaW9uOiAnMC4yLjAnLFxuICAgICAgICBjb25maWd1cmF0aW9uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFkZHJlc3M6ICcxMjcuMC4wLjEnLFxuICAgICAgICAgICAgbG9jYWxSb290OiAnJHt3b3Jrc3BhY2VGb2xkZXJ9JyxcbiAgICAgICAgICAgIHJlbW90ZVJvb3Q6ICcvaG9tZS92Y2FwL2FwcCcsXG4gICAgICAgICAgICBuYW1lOiAnQXR0YWNoIHRvIFJlbW90ZScsXG4gICAgICAgICAgICBwb3J0OiA5MjI5LFxuICAgICAgICAgICAgcmVxdWVzdDogJ2F0dGFjaCcsXG4gICAgICAgICAgICBza2lwRmlsZXM6IFsnPG5vZGVfaW50ZXJuYWxzPi8qKiddLFxuICAgICAgICAgICAgdHlwZTogJ25vZGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgdGFza3MgY29uZmlnIGZpbGUgdG8gYmUgYWRkZWQgdG8gdGhlIHByb2plY3QncyBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIHJlY29yZCBvZiB0aGUgaGF2aW5nIHRoZSBwYXRoIHRvIHRoZSBmaWxlIGFzIGtleSBhbmQgdGhlIGNvbnRlbnQgYXMgdmFsdWUuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGNvbmZpZ0ZpbGVUYXNrcygpOiBTZXR0aW5ncyB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcudnNjb2RlL3Rhc2tzLmpzb24nOiB7XG4gICAgICAgIHZlcnNpb246ICcyLjAuMCcsXG4gICAgICAgIHRhc2tzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3NoZWxsJyxcbiAgICAgICAgICAgIGxhYmVsOiAnY2RzIHdhdGNoJyxcbiAgICAgICAgICAgIGNvbW1hbmQ6ICdjZHMnLFxuICAgICAgICAgICAgYXJnczogWyd3YXRjaCddLFxuICAgICAgICAgICAgZ3JvdXA6IHtcbiAgICAgICAgICAgICAga2luZDogJ2J1aWxkJyxcbiAgICAgICAgICAgICAgaXNEZWZhdWx0OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdzaGVsbCcsXG4gICAgICAgICAgICBsYWJlbDogJ2NkcyBzZXJ2ZScsXG4gICAgICAgICAgICBjb21tYW5kOiAnY2RzJyxcbiAgICAgICAgICAgIGFyZ3M6IFsnc2VydmUnLCAnLS13aXRoLW1vY2tzJywgJy0taW4tbWVtb3J5PyddLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgbGF1bmNoIGNvbmZpZ3VyYXRpb24gZmlsZSBpbiB0aGUgcHJvamVjdCBkaXJlY3RvcnkuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlQ29uZmlnTGF1bmNoKCk6IHZvaWQge1xuICAgIGNvbnN0IGZpbGVQYXRoOiBzdHJpbmcgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ0ZpbGVMYXVuY2gpWzBdO1xuICAgIG5ldyBKc29uRmlsZSh0aGlzLnByb2plY3QsIGZpbGVQYXRoLCB7XG4gICAgICBvYmo6IHRoaXMuY29uZmlnRmlsZUxhdW5jaFtmaWxlUGF0aF0sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgdGFza3MgY29uZmlndXJhdGlvbiBmaWxlIGluIHRoZSBwcm9qZWN0IGRpcmVjdG9yeS5cbiAgICovXG4gIHB1YmxpYyBjcmVhdGVDb25maWdUYXNrcygpOiB2b2lkIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlVGFza3MpWzBdO1xuICAgIG5ldyBKc29uRmlsZSh0aGlzLnByb2plY3QsIGZpbGVQYXRoLCB7XG4gICAgICBvYmo6IHRoaXMuY29uZmlnRmlsZVRhc2tzW2ZpbGVQYXRoXSxcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlKVswXTtcbiAgICBjb25zdCBmaWxlUGF0aExhdW5jaDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlTGF1bmNoKVswXTtcbiAgICBjb25zdCBmaWxlUGF0aFRhc2tzOiBzdHJpbmcgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ0ZpbGVUYXNrcylbMF07XG4gICAgcmV0dXJuIFtgLyR7ZmlsZVBhdGh9YCwgYC8ke2ZpbGVQYXRoTGF1bmNofWAsIGAvJHtmaWxlUGF0aFRhc2tzfWBdO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIGFwcGx5Q29uZmlnKCk6IHZvaWQge1xuICAgIHN1cGVyLmFwcGx5Q29uZmlnKCk7XG4gICAgdGhpcy5jcmVhdGVDb25maWdMYXVuY2goKTtcbiAgICB0aGlzLmNyZWF0ZUNvbmZpZ1Rhc2tzKCk7XG4gIH1cbn1cbiJdfQ==
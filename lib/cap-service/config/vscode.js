"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VsCodeConfigCapService = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnNjb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NhcC1zZXJ2aWNlL2NvbmZpZy92c2NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQWtDO0FBRWxDLHFDQUE4QztBQUc5Qzs7R0FFRztBQUNILE1BQWEsc0JBQXVCLFNBQVEsdUJBQWdCO0lBQzFELFlBQVksT0FBMEI7UUFDcEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxnQkFBZ0I7UUFDNUIsT0FBTztZQUNMLHFCQUFxQixFQUFFO2dCQUNyQixPQUFPLEVBQUUsT0FBTztnQkFDaEIsY0FBYyxFQUFFO29CQUNkO3dCQUNFLE9BQU8sRUFBRSxXQUFXO3dCQUNwQixTQUFTLEVBQUUsb0JBQW9CO3dCQUMvQixVQUFVLEVBQUUsZ0JBQWdCO3dCQUM1QixJQUFJLEVBQUUsa0JBQWtCO3dCQUN4QixJQUFJLEVBQUUsSUFBSTt3QkFDVixPQUFPLEVBQUUsUUFBUTt3QkFDakIsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7d0JBQ2xDLElBQUksRUFBRSxNQUFNO3FCQUNiO2lCQUNGO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLGVBQWU7UUFDM0IsT0FBTztZQUNMLG9CQUFvQixFQUFFO2dCQUNwQixPQUFPLEVBQUUsT0FBTztnQkFDaEIsS0FBSyxFQUFFO29CQUNMO3dCQUNFLElBQUksRUFBRSxPQUFPO3dCQUNiLEtBQUssRUFBRSxXQUFXO3dCQUNsQixPQUFPLEVBQUUsS0FBSzt3QkFDZCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUM7d0JBQ2YsS0FBSyxFQUFFOzRCQUNMLElBQUksRUFBRSxPQUFPOzRCQUNiLFNBQVMsRUFBRSxJQUFJO3lCQUNoQjtxQkFDRjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsT0FBTzt3QkFDYixLQUFLLEVBQUUsV0FBVzt3QkFDbEIsT0FBTyxFQUFFLEtBQUs7d0JBQ2QsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUM7cUJBQ2hEO2lCQUNGO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0ksa0JBQWtCO1FBQ3ZCLE1BQU0sUUFBUSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0QsSUFBSSxpQkFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFO1lBQ25DLEdBQUcsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO1NBQ3JDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNJLGlCQUFpQjtRQUN0QixNQUFNLFFBQVEsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUU7WUFDbkMsR0FBRyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDO1NBQ3BDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFjLHdCQUF3QjtRQUNwQyxNQUFNLFFBQVEsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxNQUFNLGNBQWMsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLE1BQU0sYUFBYSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25FLE9BQU8sQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksY0FBYyxFQUFFLEVBQUUsSUFBSSxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFZSxXQUFXO1FBQ3pCLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0NBQ0Y7QUE3RkQsd0RBNkZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSnNvbkZpbGUgfSBmcm9tICdwcm9qZW4nO1xuaW1wb3J0IHsgQ2FwU2VydmljZVByb2plY3QgfSBmcm9tICcuLic7XG5pbXBvcnQgeyBWc0NvZGVDb25maWdCYXNlIH0gZnJvbSAnLi4vLi4vYmFzZSc7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnO1xuXG4vKipcbiAqIEltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgVnNDb2RlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBDYXBTZXJ2aWNlIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBWc0NvZGVDb25maWdDYXBTZXJ2aWNlIGV4dGVuZHMgVnNDb2RlQ29uZmlnQmFzZSB7XG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IENhcFNlcnZpY2VQcm9qZWN0KSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgbGF1bmNoIGNvbmZpZyBmaWxlIHRvIGJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0J3MgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMgQSByZWNvcmQgb2YgdGhlIGhhdmluZyB0aGUgcGF0aCB0byB0aGUgZmlsZSBhcyBrZXkgYW5kIHRoZSBjb250ZW50IGFzIHZhbHVlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBjb25maWdGaWxlTGF1bmNoKCk6IFNldHRpbmdzIHtcbiAgICByZXR1cm4ge1xuICAgICAgJy52c2NvZGUvbGF1bmNoLmpzb24nOiB7XG4gICAgICAgIHZlcnNpb246ICcwLjIuMCcsXG4gICAgICAgIGNvbmZpZ3VyYXRpb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYWRkcmVzczogJzEyNy4wLjAuMScsXG4gICAgICAgICAgICBsb2NhbFJvb3Q6ICcke3dvcmtzcGFjZUZvbGRlcn0nLFxuICAgICAgICAgICAgcmVtb3RlUm9vdDogJy9ob21lL3ZjYXAvYXBwJyxcbiAgICAgICAgICAgIG5hbWU6ICdBdHRhY2ggdG8gUmVtb3RlJyxcbiAgICAgICAgICAgIHBvcnQ6IDkyMjksXG4gICAgICAgICAgICByZXF1ZXN0OiAnYXR0YWNoJyxcbiAgICAgICAgICAgIHNraXBGaWxlczogWyc8bm9kZV9pbnRlcm5hbHM+LyoqJ10sXG4gICAgICAgICAgICB0eXBlOiAnbm9kZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSB0YXNrcyBjb25maWcgZmlsZSB0byBiZSBhZGRlZCB0byB0aGUgcHJvamVjdCdzIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIEEgcmVjb3JkIG9mIHRoZSBoYXZpbmcgdGhlIHBhdGggdG8gdGhlIGZpbGUgYXMga2V5IGFuZCB0aGUgY29udGVudCBhcyB2YWx1ZS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZVRhc2tzKCk6IFNldHRpbmdzIHtcbiAgICByZXR1cm4ge1xuICAgICAgJy52c2NvZGUvdGFza3MuanNvbic6IHtcbiAgICAgICAgdmVyc2lvbjogJzIuMC4wJyxcbiAgICAgICAgdGFza3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnc2hlbGwnLFxuICAgICAgICAgICAgbGFiZWw6ICdjZHMgd2F0Y2gnLFxuICAgICAgICAgICAgY29tbWFuZDogJ2NkcycsXG4gICAgICAgICAgICBhcmdzOiBbJ3dhdGNoJ10sXG4gICAgICAgICAgICBncm91cDoge1xuICAgICAgICAgICAgICBraW5kOiAnYnVpbGQnLFxuICAgICAgICAgICAgICBpc0RlZmF1bHQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3NoZWxsJyxcbiAgICAgICAgICAgIGxhYmVsOiAnY2RzIHNlcnZlJyxcbiAgICAgICAgICAgIGNvbW1hbmQ6ICdjZHMnLFxuICAgICAgICAgICAgYXJnczogWydzZXJ2ZScsICctLXdpdGgtbW9ja3MnLCAnLS1pbi1tZW1vcnk/J10sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBsYXVuY2ggY29uZmlndXJhdGlvbiBmaWxlIGluIHRoZSBwcm9qZWN0IGRpcmVjdG9yeS5cbiAgICovXG4gIHB1YmxpYyBjcmVhdGVDb25maWdMYXVuY2goKTogdm9pZCB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZUxhdW5jaClbMF07XG4gICAgbmV3IEpzb25GaWxlKHRoaXMucHJvamVjdCwgZmlsZVBhdGgsIHtcbiAgICAgIG9iajogdGhpcy5jb25maWdGaWxlTGF1bmNoW2ZpbGVQYXRoXSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSB0YXNrcyBjb25maWd1cmF0aW9uIGZpbGUgaW4gdGhlIHByb2plY3QgZGlyZWN0b3J5LlxuICAgKi9cbiAgcHVibGljIGNyZWF0ZUNvbmZpZ1Rhc2tzKCk6IHZvaWQge1xuICAgIGNvbnN0IGZpbGVQYXRoOiBzdHJpbmcgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ0ZpbGVUYXNrcylbMF07XG4gICAgbmV3IEpzb25GaWxlKHRoaXMucHJvamVjdCwgZmlsZVBhdGgsIHtcbiAgICAgIG9iajogdGhpcy5jb25maWdGaWxlVGFza3NbZmlsZVBhdGhdLFxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBhZGRpdGlvbmFsSWdub3JlUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGZpbGVQYXRoOiBzdHJpbmcgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ0ZpbGUpWzBdO1xuICAgIGNvbnN0IGZpbGVQYXRoTGF1bmNoOiBzdHJpbmcgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ0ZpbGVMYXVuY2gpWzBdO1xuICAgIGNvbnN0IGZpbGVQYXRoVGFza3M6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZVRhc2tzKVswXTtcbiAgICByZXR1cm4gW2AvJHtmaWxlUGF0aH1gLCBgLyR7ZmlsZVBhdGhMYXVuY2h9YCwgYC8ke2ZpbGVQYXRoVGFza3N9YF07XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgYXBwbHlDb25maWcoKTogdm9pZCB7XG4gICAgc3VwZXIuYXBwbHlDb25maWcoKTtcbiAgICB0aGlzLmNyZWF0ZUNvbmZpZ0xhdW5jaCgpO1xuICAgIHRoaXMuY3JlYXRlQ29uZmlnVGFza3MoKTtcbiAgfVxufVxuIl19
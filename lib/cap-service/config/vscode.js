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
VsCodeConfigCapService[_a] = { fqn: "@dxfrontier/projen-template-projects.VsCodeConfigCapService", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnNjb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NhcC1zZXJ2aWNlL2NvbmZpZy92c2NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBa0M7QUFFbEMscUNBQThDO0FBRzlDOztHQUVHO0FBQ0gsTUFBYSxzQkFBdUIsU0FBUSx1QkFBZ0I7SUFDMUQsWUFBWSxPQUEwQjtRQUNwQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLGdCQUFnQjtRQUM1QixPQUFPO1lBQ0wscUJBQXFCLEVBQUU7Z0JBQ3JCLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixjQUFjLEVBQUU7b0JBQ2Q7d0JBQ0UsT0FBTyxFQUFFLFdBQVc7d0JBQ3BCLFNBQVMsRUFBRSxvQkFBb0I7d0JBQy9CLFVBQVUsRUFBRSxnQkFBZ0I7d0JBQzVCLElBQUksRUFBRSxrQkFBa0I7d0JBQ3hCLElBQUksRUFBRSxJQUFJO3dCQUNWLE9BQU8sRUFBRSxRQUFRO3dCQUNqQixTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzt3QkFDbEMsSUFBSSxFQUFFLE1BQU07cUJBQ2I7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsZUFBZTtRQUMzQixPQUFPO1lBQ0wsb0JBQW9CLEVBQUU7Z0JBQ3BCLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsSUFBSSxFQUFFLE9BQU87d0JBQ2IsS0FBSyxFQUFFLFdBQVc7d0JBQ2xCLE9BQU8sRUFBRSxLQUFLO3dCQUNkLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQzt3QkFDZixLQUFLLEVBQUU7NEJBQ0wsSUFBSSxFQUFFLE9BQU87NEJBQ2IsU0FBUyxFQUFFLElBQUk7eUJBQ2hCO3FCQUNGO29CQUNEO3dCQUNFLElBQUksRUFBRSxPQUFPO3dCQUNiLEtBQUssRUFBRSxXQUFXO3dCQUNsQixPQUFPLEVBQUUsS0FBSzt3QkFDZCxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQztxQkFDaEQ7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSSxrQkFBa0I7UUFDdkIsTUFBTSxRQUFRLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUU7WUFDbkMsR0FBRyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7U0FDckMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ksaUJBQWlCO1FBQ3RCLE1BQU0sUUFBUSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlELElBQUksaUJBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRTtZQUNuQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7U0FDcEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELElBQWMsd0JBQXdCO1FBQ3BDLE1BQU0sUUFBUSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sY0FBYyxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckUsTUFBTSxhQUFhLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsT0FBTyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxjQUFjLEVBQUUsRUFBRSxJQUFJLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVlLFdBQVc7UUFDekIsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7O0FBNUZILHdEQTZGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEpzb25GaWxlIH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IENhcFNlcnZpY2VQcm9qZWN0IH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgVnNDb2RlQ29uZmlnQmFzZSB9IGZyb20gJy4uLy4uL2Jhc2UnO1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbi8qKlxuICogSW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBWc0NvZGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIENhcFNlcnZpY2UgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFZzQ29kZUNvbmZpZ0NhcFNlcnZpY2UgZXh0ZW5kcyBWc0NvZGVDb25maWdCYXNlIHtcbiAgY29uc3RydWN0b3IocHJvamVjdDogQ2FwU2VydmljZVByb2plY3QpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBsYXVuY2ggY29uZmlnIGZpbGUgdG8gYmUgYWRkZWQgdG8gdGhlIHByb2plY3QncyBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIHJlY29yZCBvZiB0aGUgaGF2aW5nIHRoZSBwYXRoIHRvIHRoZSBmaWxlIGFzIGtleSBhbmQgdGhlIGNvbnRlbnQgYXMgdmFsdWUuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGNvbmZpZ0ZpbGVMYXVuY2goKTogU2V0dGluZ3Mge1xuICAgIHJldHVybiB7XG4gICAgICAnLnZzY29kZS9sYXVuY2guanNvbic6IHtcbiAgICAgICAgdmVyc2lvbjogJzAuMi4wJyxcbiAgICAgICAgY29uZmlndXJhdGlvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhZGRyZXNzOiAnMTI3LjAuMC4xJyxcbiAgICAgICAgICAgIGxvY2FsUm9vdDogJyR7d29ya3NwYWNlRm9sZGVyfScsXG4gICAgICAgICAgICByZW1vdGVSb290OiAnL2hvbWUvdmNhcC9hcHAnLFxuICAgICAgICAgICAgbmFtZTogJ0F0dGFjaCB0byBSZW1vdGUnLFxuICAgICAgICAgICAgcG9ydDogOTIyOSxcbiAgICAgICAgICAgIHJlcXVlc3Q6ICdhdHRhY2gnLFxuICAgICAgICAgICAgc2tpcEZpbGVzOiBbJzxub2RlX2ludGVybmFscz4vKionXSxcbiAgICAgICAgICAgIHR5cGU6ICdub2RlJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHRhc2tzIGNvbmZpZyBmaWxlIHRvIGJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0J3MgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMgQSByZWNvcmQgb2YgdGhlIGhhdmluZyB0aGUgcGF0aCB0byB0aGUgZmlsZSBhcyBrZXkgYW5kIHRoZSBjb250ZW50IGFzIHZhbHVlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBjb25maWdGaWxlVGFza3MoKTogU2V0dGluZ3Mge1xuICAgIHJldHVybiB7XG4gICAgICAnLnZzY29kZS90YXNrcy5qc29uJzoge1xuICAgICAgICB2ZXJzaW9uOiAnMi4wLjAnLFxuICAgICAgICB0YXNrczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdzaGVsbCcsXG4gICAgICAgICAgICBsYWJlbDogJ2NkcyB3YXRjaCcsXG4gICAgICAgICAgICBjb21tYW5kOiAnY2RzJyxcbiAgICAgICAgICAgIGFyZ3M6IFsnd2F0Y2gnXSxcbiAgICAgICAgICAgIGdyb3VwOiB7XG4gICAgICAgICAgICAgIGtpbmQ6ICdidWlsZCcsXG4gICAgICAgICAgICAgIGlzRGVmYXVsdDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnc2hlbGwnLFxuICAgICAgICAgICAgbGFiZWw6ICdjZHMgc2VydmUnLFxuICAgICAgICAgICAgY29tbWFuZDogJ2NkcycsXG4gICAgICAgICAgICBhcmdzOiBbJ3NlcnZlJywgJy0td2l0aC1tb2NrcycsICctLWluLW1lbW9yeT8nXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIGxhdW5jaCBjb25maWd1cmF0aW9uIGZpbGUgaW4gdGhlIHByb2plY3QgZGlyZWN0b3J5LlxuICAgKi9cbiAgcHVibGljIGNyZWF0ZUNvbmZpZ0xhdW5jaCgpOiB2b2lkIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlTGF1bmNoKVswXTtcbiAgICBuZXcgSnNvbkZpbGUodGhpcy5wcm9qZWN0LCBmaWxlUGF0aCwge1xuICAgICAgb2JqOiB0aGlzLmNvbmZpZ0ZpbGVMYXVuY2hbZmlsZVBhdGhdLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIHRhc2tzIGNvbmZpZ3VyYXRpb24gZmlsZSBpbiB0aGUgcHJvamVjdCBkaXJlY3RvcnkuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlQ29uZmlnVGFza3MoKTogdm9pZCB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZVRhc2tzKVswXTtcbiAgICBuZXcgSnNvbkZpbGUodGhpcy5wcm9qZWN0LCBmaWxlUGF0aCwge1xuICAgICAgb2JqOiB0aGlzLmNvbmZpZ0ZpbGVUYXNrc1tmaWxlUGF0aF0sXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZSlbMF07XG4gICAgY29uc3QgZmlsZVBhdGhMYXVuY2g6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZUxhdW5jaClbMF07XG4gICAgY29uc3QgZmlsZVBhdGhUYXNrczogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlVGFza3MpWzBdO1xuICAgIHJldHVybiBbYC8ke2ZpbGVQYXRofWAsIGAvJHtmaWxlUGF0aExhdW5jaH1gLCBgLyR7ZmlsZVBhdGhUYXNrc31gXTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBhcHBseUNvbmZpZygpOiB2b2lkIHtcbiAgICBzdXBlci5hcHBseUNvbmZpZygpO1xuICAgIHRoaXMuY3JlYXRlQ29uZmlnTGF1bmNoKCk7XG4gICAgdGhpcy5jcmVhdGVDb25maWdUYXNrcygpO1xuICB9XG59XG4iXX0=
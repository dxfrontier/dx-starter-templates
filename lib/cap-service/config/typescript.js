"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeScriptConfigCapService = void 0;
const projen_1 = require("projen");
const base_1 = require("../../base");
const typescript_1 = require("../../base/config/typescript");
/**
 * Implementing all relevant TypeScript configuration for the CapService project.
 */
class TypeScriptConfigCapService extends typescript_1.TypeScriptConfigBase {
    get configFile() {
        return {
            'tsconfig.json': {
                compilerOptions: {
                    esModuleInterop: true,
                    skipLibCheck: true,
                    allowJs: true,
                    resolveJsonModule: true,
                    isolatedModules: true,
                    strictNullChecks: true,
                    strictPropertyInitialization: false,
                    forceConsistentCasingInFileNames: true,
                    allowSyntheticDefaultImports: true,
                    strict: true,
                    experimentalDecorators: true,
                    emitDecoratorMetadata: true,
                    target: 'ES2021',
                    module: 'NodeNext',
                    moduleResolution: 'NodeNext',
                    outDir: './gen/srv',
                    rootDir: '.',
                    paths: {
                        '#cds-models/*': ['./@cds-models/*/index.ts'],
                    },
                },
                include: ['./srv', './@dispatcher'],
            },
        };
    }
    removeConfigFile() {
        const filePath = Object.keys(this.configFile)[0];
        if (this.project instanceof base_1.BaseProject) {
            // Standard TypeScript file is removed to be overwritten
            this.project.tryRemoveFile(filePath);
        }
    }
    /**
     * Creates the configuration file in the project directory.
     */
    createConfig() {
        const filePath = Object.keys(this.configFile)[0];
        new projen_1.JsonFile(this.project, filePath, {
            obj: this.configFile[filePath],
        });
    }
    registerConfig() {
        super.registerConfig();
        this.removeConfigFile();
    }
    applyConfig() {
        this.createConfig();
    }
}
exports.TypeScriptConfigCapService = TypeScriptConfigCapService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXNjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXAtc2VydmljZS9jb25maWcvdHlwZXNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBa0M7QUFDbEMscUNBQXlDO0FBQ3pDLDZEQUFvRTtBQUdwRTs7R0FFRztBQUNILE1BQWEsMEJBQTJCLFNBQVEsaUNBQW9CO0lBQ2xFLElBQXVCLFVBQVU7UUFDL0IsT0FBTztZQUNMLGVBQWUsRUFBRTtnQkFDZixlQUFlLEVBQUU7b0JBQ2YsZUFBZSxFQUFFLElBQUk7b0JBQ3JCLFlBQVksRUFBRSxJQUFJO29CQUNsQixPQUFPLEVBQUUsSUFBSTtvQkFDYixpQkFBaUIsRUFBRSxJQUFJO29CQUN2QixlQUFlLEVBQUUsSUFBSTtvQkFDckIsZ0JBQWdCLEVBQUUsSUFBSTtvQkFDdEIsNEJBQTRCLEVBQUUsS0FBSztvQkFDbkMsZ0NBQWdDLEVBQUUsSUFBSTtvQkFDdEMsNEJBQTRCLEVBQUUsSUFBSTtvQkFDbEMsTUFBTSxFQUFFLElBQUk7b0JBQ1osc0JBQXNCLEVBQUUsSUFBSTtvQkFDNUIscUJBQXFCLEVBQUUsSUFBSTtvQkFDM0IsTUFBTSxFQUFFLFFBQVE7b0JBQ2hCLE1BQU0sRUFBRSxVQUFVO29CQUNsQixnQkFBZ0IsRUFBRSxVQUFVO29CQUM1QixNQUFNLEVBQUUsV0FBVztvQkFDbkIsT0FBTyxFQUFFLEdBQUc7b0JBQ1osS0FBSyxFQUFFO3dCQUNMLGVBQWUsRUFBRSxDQUFDLDBCQUEwQixDQUFDO3FCQUM5QztpQkFDRjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDO2FBQ3BDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFUyxnQkFBZ0I7UUFDeEIsTUFBTSxRQUFRLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxJQUFJLENBQUMsT0FBTyxZQUFZLGtCQUFXLEVBQUUsQ0FBQztZQUN4Qyx3REFBd0Q7WUFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsQ0FBQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNPLFlBQVk7UUFDcEIsTUFBTSxRQUFRLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxpQkFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFO1lBQ25DLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRWUsY0FBYztRQUM1QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVlLFdBQVc7UUFDekIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Q0FDRjtBQXpERCxnRUF5REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBKc29uRmlsZSB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBCYXNlUHJvamVjdCB9IGZyb20gJy4uLy4uL2Jhc2UnO1xuaW1wb3J0IHsgVHlwZVNjcmlwdENvbmZpZ0Jhc2UgfSBmcm9tICcuLi8uLi9iYXNlL2NvbmZpZy90eXBlc2NyaXB0JztcbmltcG9ydCB7IENvbmZpZ0ZpbGUgfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJztcblxuLyoqXG4gKiBJbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IFR5cGVTY3JpcHQgY29uZmlndXJhdGlvbiBmb3IgdGhlIENhcFNlcnZpY2UgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFR5cGVTY3JpcHRDb25maWdDYXBTZXJ2aWNlIGV4dGVuZHMgVHlwZVNjcmlwdENvbmZpZ0Jhc2Uge1xuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGNvbmZpZ0ZpbGUoKTogQ29uZmlnRmlsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICd0c2NvbmZpZy5qc29uJzoge1xuICAgICAgICBjb21waWxlck9wdGlvbnM6IHtcbiAgICAgICAgICBlc01vZHVsZUludGVyb3A6IHRydWUsXG4gICAgICAgICAgc2tpcExpYkNoZWNrOiB0cnVlLFxuICAgICAgICAgIGFsbG93SnM6IHRydWUsXG4gICAgICAgICAgcmVzb2x2ZUpzb25Nb2R1bGU6IHRydWUsXG4gICAgICAgICAgaXNvbGF0ZWRNb2R1bGVzOiB0cnVlLFxuICAgICAgICAgIHN0cmljdE51bGxDaGVja3M6IHRydWUsXG4gICAgICAgICAgc3RyaWN0UHJvcGVydHlJbml0aWFsaXphdGlvbjogZmFsc2UsXG4gICAgICAgICAgZm9yY2VDb25zaXN0ZW50Q2FzaW5nSW5GaWxlTmFtZXM6IHRydWUsXG4gICAgICAgICAgYWxsb3dTeW50aGV0aWNEZWZhdWx0SW1wb3J0czogdHJ1ZSxcbiAgICAgICAgICBzdHJpY3Q6IHRydWUsXG4gICAgICAgICAgZXhwZXJpbWVudGFsRGVjb3JhdG9yczogdHJ1ZSxcbiAgICAgICAgICBlbWl0RGVjb3JhdG9yTWV0YWRhdGE6IHRydWUsXG4gICAgICAgICAgdGFyZ2V0OiAnRVMyMDIxJyxcbiAgICAgICAgICBtb2R1bGU6ICdOb2RlTmV4dCcsXG4gICAgICAgICAgbW9kdWxlUmVzb2x1dGlvbjogJ05vZGVOZXh0JyxcbiAgICAgICAgICBvdXREaXI6ICcuL2dlbi9zcnYnLFxuICAgICAgICAgIHJvb3REaXI6ICcuJyxcbiAgICAgICAgICBwYXRoczoge1xuICAgICAgICAgICAgJyNjZHMtbW9kZWxzLyonOiBbJy4vQGNkcy1tb2RlbHMvKi9pbmRleC50cyddLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGluY2x1ZGU6IFsnLi9zcnYnLCAnLi9AZGlzcGF0Y2hlciddLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbW92ZUNvbmZpZ0ZpbGUoKTogdm9pZCB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZSlbMF07XG4gICAgaWYgKHRoaXMucHJvamVjdCBpbnN0YW5jZW9mIEJhc2VQcm9qZWN0KSB7XG4gICAgICAvLyBTdGFuZGFyZCBUeXBlU2NyaXB0IGZpbGUgaXMgcmVtb3ZlZCB0byBiZSBvdmVyd3JpdHRlblxuICAgICAgdGhpcy5wcm9qZWN0LnRyeVJlbW92ZUZpbGUoZmlsZVBhdGgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBjb25maWd1cmF0aW9uIGZpbGUgaW4gdGhlIHByb2plY3QgZGlyZWN0b3J5LlxuICAgKi9cbiAgcHJvdGVjdGVkIGNyZWF0ZUNvbmZpZygpOiB2b2lkIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlKVswXTtcbiAgICBuZXcgSnNvbkZpbGUodGhpcy5wcm9qZWN0LCBmaWxlUGF0aCwge1xuICAgICAgb2JqOiB0aGlzLmNvbmZpZ0ZpbGVbZmlsZVBhdGhdLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHJlZ2lzdGVyQ29uZmlnKCk6IHZvaWQge1xuICAgIHN1cGVyLnJlZ2lzdGVyQ29uZmlnKCk7XG4gICAgdGhpcy5yZW1vdmVDb25maWdGaWxlKCk7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgYXBwbHlDb25maWcoKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVDb25maWcoKTtcbiAgfVxufVxuIl19
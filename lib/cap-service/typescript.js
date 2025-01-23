"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeScriptConfigCapService = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const base_1 = require("../base");
const typescript_1 = require("../base/typescript");
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
_a = JSII_RTTI_SYMBOL_1;
TypeScriptConfigCapService[_a] = { fqn: "@dxfrontier/projen-template-projects.TypeScriptConfigCapService", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXNjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYXAtc2VydmljZS90eXBlc2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQWtDO0FBQ2xDLGtDQUFzQztBQUN0QyxtREFBMEQ7QUFHMUQ7O0dBRUc7QUFDSCxNQUFhLDBCQUEyQixTQUFRLGlDQUFvQjtJQUNsRSxJQUF1QixVQUFVO1FBQy9CLE9BQU87WUFDTCxlQUFlLEVBQUU7Z0JBQ2YsZUFBZSxFQUFFO29CQUNmLGVBQWUsRUFBRSxJQUFJO29CQUNyQixZQUFZLEVBQUUsSUFBSTtvQkFDbEIsT0FBTyxFQUFFLElBQUk7b0JBQ2IsaUJBQWlCLEVBQUUsSUFBSTtvQkFDdkIsZUFBZSxFQUFFLElBQUk7b0JBQ3JCLGdCQUFnQixFQUFFLElBQUk7b0JBQ3RCLDRCQUE0QixFQUFFLEtBQUs7b0JBQ25DLGdDQUFnQyxFQUFFLElBQUk7b0JBQ3RDLDRCQUE0QixFQUFFLElBQUk7b0JBQ2xDLE1BQU0sRUFBRSxJQUFJO29CQUNaLHNCQUFzQixFQUFFLElBQUk7b0JBQzVCLHFCQUFxQixFQUFFLElBQUk7b0JBQzNCLE1BQU0sRUFBRSxRQUFRO29CQUNoQixNQUFNLEVBQUUsVUFBVTtvQkFDbEIsZ0JBQWdCLEVBQUUsVUFBVTtvQkFDNUIsTUFBTSxFQUFFLFdBQVc7b0JBQ25CLE9BQU8sRUFBRSxHQUFHO29CQUNaLEtBQUssRUFBRTt3QkFDTCxlQUFlLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztxQkFDOUM7aUJBQ0Y7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQzthQUNwQztTQUNGLENBQUM7SUFDSixDQUFDO0lBRVMsZ0JBQWdCO1FBQ3hCLE1BQU0sUUFBUSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksSUFBSSxDQUFDLE9BQU8sWUFBWSxrQkFBVyxFQUFFLENBQUM7WUFDeEMsd0RBQXdEO1lBQ3hELElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDTyxZQUFZO1FBQ3BCLE1BQU0sUUFBUSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksaUJBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRTtZQUNuQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDL0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVlLGNBQWM7UUFDNUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFZSxXQUFXO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOztBQXhESCxnRUF5REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBKc29uRmlsZSB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBCYXNlUHJvamVjdCB9IGZyb20gJy4uL2Jhc2UnO1xuaW1wb3J0IHsgVHlwZVNjcmlwdENvbmZpZ0Jhc2UgfSBmcm9tICcuLi9iYXNlL3R5cGVzY3JpcHQnO1xuaW1wb3J0IHsgQ29uZmlnRmlsZSB9IGZyb20gJy4uL3R5cGVzJztcblxuLyoqXG4gKiBJbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IFR5cGVTY3JpcHQgY29uZmlndXJhdGlvbiBmb3IgdGhlIENhcFNlcnZpY2UgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFR5cGVTY3JpcHRDb25maWdDYXBTZXJ2aWNlIGV4dGVuZHMgVHlwZVNjcmlwdENvbmZpZ0Jhc2Uge1xuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGNvbmZpZ0ZpbGUoKTogQ29uZmlnRmlsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICd0c2NvbmZpZy5qc29uJzoge1xuICAgICAgICBjb21waWxlck9wdGlvbnM6IHtcbiAgICAgICAgICBlc01vZHVsZUludGVyb3A6IHRydWUsXG4gICAgICAgICAgc2tpcExpYkNoZWNrOiB0cnVlLFxuICAgICAgICAgIGFsbG93SnM6IHRydWUsXG4gICAgICAgICAgcmVzb2x2ZUpzb25Nb2R1bGU6IHRydWUsXG4gICAgICAgICAgaXNvbGF0ZWRNb2R1bGVzOiB0cnVlLFxuICAgICAgICAgIHN0cmljdE51bGxDaGVja3M6IHRydWUsXG4gICAgICAgICAgc3RyaWN0UHJvcGVydHlJbml0aWFsaXphdGlvbjogZmFsc2UsXG4gICAgICAgICAgZm9yY2VDb25zaXN0ZW50Q2FzaW5nSW5GaWxlTmFtZXM6IHRydWUsXG4gICAgICAgICAgYWxsb3dTeW50aGV0aWNEZWZhdWx0SW1wb3J0czogdHJ1ZSxcbiAgICAgICAgICBzdHJpY3Q6IHRydWUsXG4gICAgICAgICAgZXhwZXJpbWVudGFsRGVjb3JhdG9yczogdHJ1ZSxcbiAgICAgICAgICBlbWl0RGVjb3JhdG9yTWV0YWRhdGE6IHRydWUsXG4gICAgICAgICAgdGFyZ2V0OiAnRVMyMDIxJyxcbiAgICAgICAgICBtb2R1bGU6ICdOb2RlTmV4dCcsXG4gICAgICAgICAgbW9kdWxlUmVzb2x1dGlvbjogJ05vZGVOZXh0JyxcbiAgICAgICAgICBvdXREaXI6ICcuL2dlbi9zcnYnLFxuICAgICAgICAgIHJvb3REaXI6ICcuJyxcbiAgICAgICAgICBwYXRoczoge1xuICAgICAgICAgICAgJyNjZHMtbW9kZWxzLyonOiBbJy4vQGNkcy1tb2RlbHMvKi9pbmRleC50cyddLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGluY2x1ZGU6IFsnLi9zcnYnLCAnLi9AZGlzcGF0Y2hlciddLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbW92ZUNvbmZpZ0ZpbGUoKTogdm9pZCB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZSlbMF07XG4gICAgaWYgKHRoaXMucHJvamVjdCBpbnN0YW5jZW9mIEJhc2VQcm9qZWN0KSB7XG4gICAgICAvLyBTdGFuZGFyZCBUeXBlU2NyaXB0IGZpbGUgaXMgcmVtb3ZlZCB0byBiZSBvdmVyd3JpdHRlblxuICAgICAgdGhpcy5wcm9qZWN0LnRyeVJlbW92ZUZpbGUoZmlsZVBhdGgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBjb25maWd1cmF0aW9uIGZpbGUgaW4gdGhlIHByb2plY3QgZGlyZWN0b3J5LlxuICAgKi9cbiAgcHJvdGVjdGVkIGNyZWF0ZUNvbmZpZygpOiB2b2lkIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlKVswXTtcbiAgICBuZXcgSnNvbkZpbGUodGhpcy5wcm9qZWN0LCBmaWxlUGF0aCwge1xuICAgICAgb2JqOiB0aGlzLmNvbmZpZ0ZpbGVbZmlsZVBhdGhdLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHJlZ2lzdGVyQ29uZmlnKCk6IHZvaWQge1xuICAgIHN1cGVyLnJlZ2lzdGVyQ29uZmlnKCk7XG4gICAgdGhpcy5yZW1vdmVDb25maWdGaWxlKCk7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgYXBwbHlDb25maWcoKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVDb25maWcoKTtcbiAgfVxufVxuIl19
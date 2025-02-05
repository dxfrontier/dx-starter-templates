"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeScriptConfigCapService = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
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
_a = JSII_RTTI_SYMBOL_1;
TypeScriptConfigCapService[_a] = { fqn: "@dxfrontier/projen-template-projects.TypeScriptConfigCapService", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXNjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXAtc2VydmljZS9jb25maWcvdHlwZXNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFrQztBQUNsQyxxQ0FBeUM7QUFDekMsNkRBQW9FO0FBR3BFOztHQUVHO0FBQ0gsTUFBYSwwQkFBMkIsU0FBUSxpQ0FBb0I7SUFDbEUsSUFBdUIsVUFBVTtRQUMvQixPQUFPO1lBQ0wsZUFBZSxFQUFFO2dCQUNmLGVBQWUsRUFBRTtvQkFDZixlQUFlLEVBQUUsSUFBSTtvQkFDckIsWUFBWSxFQUFFLElBQUk7b0JBQ2xCLE9BQU8sRUFBRSxJQUFJO29CQUNiLGlCQUFpQixFQUFFLElBQUk7b0JBQ3ZCLGVBQWUsRUFBRSxJQUFJO29CQUNyQixnQkFBZ0IsRUFBRSxJQUFJO29CQUN0Qiw0QkFBNEIsRUFBRSxLQUFLO29CQUNuQyxnQ0FBZ0MsRUFBRSxJQUFJO29CQUN0Qyw0QkFBNEIsRUFBRSxJQUFJO29CQUNsQyxNQUFNLEVBQUUsSUFBSTtvQkFDWixzQkFBc0IsRUFBRSxJQUFJO29CQUM1QixxQkFBcUIsRUFBRSxJQUFJO29CQUMzQixNQUFNLEVBQUUsUUFBUTtvQkFDaEIsTUFBTSxFQUFFLFVBQVU7b0JBQ2xCLGdCQUFnQixFQUFFLFVBQVU7b0JBQzVCLE1BQU0sRUFBRSxXQUFXO29CQUNuQixPQUFPLEVBQUUsR0FBRztvQkFDWixLQUFLLEVBQUU7d0JBQ0wsZUFBZSxFQUFFLENBQUMsMEJBQTBCLENBQUM7cUJBQzlDO2lCQUNGO2dCQUNELE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUM7YUFDcEM7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVTLGdCQUFnQjtRQUN4QixNQUFNLFFBQVEsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLElBQUksQ0FBQyxPQUFPLFlBQVksa0JBQVcsRUFBRSxDQUFDO1lBQ3hDLHdEQUF3RDtZQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QyxDQUFDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ08sWUFBWTtRQUNwQixNQUFNLFFBQVEsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUU7WUFDbkMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQy9CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFZSxjQUFjO1FBQzVCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRWUsV0FBVztRQUN6QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7QUF4REgsZ0VBeURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSnNvbkZpbGUgfSBmcm9tICdwcm9qZW4nO1xuaW1wb3J0IHsgQmFzZVByb2plY3QgfSBmcm9tICcuLi8uLi9iYXNlJztcbmltcG9ydCB7IFR5cGVTY3JpcHRDb25maWdCYXNlIH0gZnJvbSAnLi4vLi4vYmFzZS9jb25maWcvdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyBDb25maWdGaWxlIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcyc7XG5cbi8qKlxuICogSW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBUeXBlU2NyaXB0IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBDYXBTZXJ2aWNlIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBUeXBlU2NyaXB0Q29uZmlnQ2FwU2VydmljZSBleHRlbmRzIFR5cGVTY3JpcHRDb25maWdCYXNlIHtcbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBjb25maWdGaWxlKCk6IENvbmZpZ0ZpbGUge1xuICAgIHJldHVybiB7XG4gICAgICAndHNjb25maWcuanNvbic6IHtcbiAgICAgICAgY29tcGlsZXJPcHRpb25zOiB7XG4gICAgICAgICAgZXNNb2R1bGVJbnRlcm9wOiB0cnVlLFxuICAgICAgICAgIHNraXBMaWJDaGVjazogdHJ1ZSxcbiAgICAgICAgICBhbGxvd0pzOiB0cnVlLFxuICAgICAgICAgIHJlc29sdmVKc29uTW9kdWxlOiB0cnVlLFxuICAgICAgICAgIGlzb2xhdGVkTW9kdWxlczogdHJ1ZSxcbiAgICAgICAgICBzdHJpY3ROdWxsQ2hlY2tzOiB0cnVlLFxuICAgICAgICAgIHN0cmljdFByb3BlcnR5SW5pdGlhbGl6YXRpb246IGZhbHNlLFxuICAgICAgICAgIGZvcmNlQ29uc2lzdGVudENhc2luZ0luRmlsZU5hbWVzOiB0cnVlLFxuICAgICAgICAgIGFsbG93U3ludGhldGljRGVmYXVsdEltcG9ydHM6IHRydWUsXG4gICAgICAgICAgc3RyaWN0OiB0cnVlLFxuICAgICAgICAgIGV4cGVyaW1lbnRhbERlY29yYXRvcnM6IHRydWUsXG4gICAgICAgICAgZW1pdERlY29yYXRvck1ldGFkYXRhOiB0cnVlLFxuICAgICAgICAgIHRhcmdldDogJ0VTMjAyMScsXG4gICAgICAgICAgbW9kdWxlOiAnTm9kZU5leHQnLFxuICAgICAgICAgIG1vZHVsZVJlc29sdXRpb246ICdOb2RlTmV4dCcsXG4gICAgICAgICAgb3V0RGlyOiAnLi9nZW4vc3J2JyxcbiAgICAgICAgICByb290RGlyOiAnLicsXG4gICAgICAgICAgcGF0aHM6IHtcbiAgICAgICAgICAgICcjY2RzLW1vZGVscy8qJzogWycuL0BjZHMtbW9kZWxzLyovaW5kZXgudHMnXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBpbmNsdWRlOiBbJy4vc3J2JywgJy4vQGRpc3BhdGNoZXInXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW1vdmVDb25maWdGaWxlKCk6IHZvaWQge1xuICAgIGNvbnN0IGZpbGVQYXRoOiBzdHJpbmcgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ0ZpbGUpWzBdO1xuICAgIGlmICh0aGlzLnByb2plY3QgaW5zdGFuY2VvZiBCYXNlUHJvamVjdCkge1xuICAgICAgLy8gU3RhbmRhcmQgVHlwZVNjcmlwdCBmaWxlIGlzIHJlbW92ZWQgdG8gYmUgb3ZlcndyaXR0ZW5cbiAgICAgIHRoaXMucHJvamVjdC50cnlSZW1vdmVGaWxlKGZpbGVQYXRoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgY29uZmlndXJhdGlvbiBmaWxlIGluIHRoZSBwcm9qZWN0IGRpcmVjdG9yeS5cbiAgICovXG4gIHByb3RlY3RlZCBjcmVhdGVDb25maWcoKTogdm9pZCB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZSlbMF07XG4gICAgbmV3IEpzb25GaWxlKHRoaXMucHJvamVjdCwgZmlsZVBhdGgsIHtcbiAgICAgIG9iajogdGhpcy5jb25maWdGaWxlW2ZpbGVQYXRoXSxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSByZWdpc3RlckNvbmZpZygpOiB2b2lkIHtcbiAgICBzdXBlci5yZWdpc3RlckNvbmZpZygpO1xuICAgIHRoaXMucmVtb3ZlQ29uZmlnRmlsZSgpO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIGFwcGx5Q29uZmlnKCk6IHZvaWQge1xuICAgIHRoaXMuY3JlYXRlQ29uZmlnKCk7XG4gIH1cbn1cbiJdfQ==
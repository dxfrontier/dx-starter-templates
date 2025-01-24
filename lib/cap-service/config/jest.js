"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JestConfigCapService = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const jest_1 = require("../../base/config/jest");
const utils_1 = require("../../util/utils");
/**
 * Implementing all relevant Jest configuration for the CapService project.
 */
class JestConfigCapService extends jest_1.JestConfigBase {
    get additionalDevDependencies() {
        return ['@types/jest@^29.5.14', 'jest@^29.7.0', 'jest-junit@^16.0.0', 'ts-jest@^29.2.5'];
    }
    get additionalScripts() {
        return {
            test: 'jest --passWithNoTests --updateSnapshot',
            'test:watch': 'jest --watch',
        };
    }
    get additionalSettings() {
        return {
            jest: {
                coverageProvider: 'v8',
                testMatch: [
                    '<rootDir>/@(src|test)/**/*(*.)@(spec|test).ts?(x)',
                    '<rootDir>/@(src|test)/**/__tests__/**/*.ts?(x)',
                    '<rootDir>/@(projenrc)/**/*(*.)@(spec|test).ts?(x)',
                    '<rootDir>/@(projenrc)/**/__tests__/**/*.ts?(x)',
                ],
                clearMocks: true,
                collectCoverage: true,
                coverageReporters: ['json', 'lcov', 'clover', 'cobertura', 'text'],
                coverageDirectory: 'coverage',
                coveragePathIgnorePatterns: ['/node_modules/'],
                testPathIgnorePatterns: ['/node_modules/'],
                watchPathIgnorePatterns: ['/node_modules/'],
                reporters: [
                    'default',
                    [
                        'jest-junit',
                        {
                            outputDirectory: 'test-reports',
                        },
                    ],
                ],
                transform: {
                    '^.+\\.[t]sx?$': [
                        'ts-jest',
                        {
                            tsconfig: this.project.typescriptConfig?.configFileName,
                        },
                    ],
                },
            },
        };
    }
    get additionalIgnorePatterns() {
        return ['/coverage/', '/test-reports/', '/junit.xml'];
    }
    registerConfig() {
        if ((0, utils_1.isValidProject)(this.project)) {
            this.project.npmConfig?.addDevDependencies(this.additionalDevDependencies);
            this.project.npmConfig?.addScripts(this.additionalScripts);
            this.project.npmConfig?.addSettings(this.additionalSettings);
            this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
            this.project.gitConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
        }
    }
}
exports.JestConfigCapService = JestConfigCapService;
_a = JSII_RTTI_SYMBOL_1;
JestConfigCapService[_a] = { fqn: "@dxfrontier/projen-template-projects.JestConfigCapService", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXAtc2VydmljZS9jb25maWcvamVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlEQUF3RDtBQUd4RCw0Q0FBa0Q7QUFFbEQ7O0dBRUc7QUFDSCxNQUFhLG9CQUFxQixTQUFRLHFCQUFjO0lBQ3RELElBQXVCLHlCQUF5QjtRQUM5QyxPQUFPLENBQUMsc0JBQXNCLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVELElBQXVCLGlCQUFpQjtRQUN0QyxPQUFPO1lBQ0wsSUFBSSxFQUFFLHlDQUF5QztZQUMvQyxZQUFZLEVBQUUsY0FBYztTQUM3QixDQUFDO0lBQ0osQ0FBQztJQUVELElBQXVCLGtCQUFrQjtRQUN2QyxPQUFPO1lBQ0wsSUFBSSxFQUFFO2dCQUNKLGdCQUFnQixFQUFFLElBQUk7Z0JBQ3RCLFNBQVMsRUFBRTtvQkFDVCxtREFBbUQ7b0JBQ25ELGdEQUFnRDtvQkFDaEQsbURBQW1EO29CQUNuRCxnREFBZ0Q7aUJBQ2pEO2dCQUNELFVBQVUsRUFBRSxJQUFJO2dCQUNoQixlQUFlLEVBQUUsSUFBSTtnQkFDckIsaUJBQWlCLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDO2dCQUNsRSxpQkFBaUIsRUFBRSxVQUFVO2dCQUM3QiwwQkFBMEIsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUM5QyxzQkFBc0IsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUMxQyx1QkFBdUIsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUMzQyxTQUFTLEVBQUU7b0JBQ1QsU0FBUztvQkFDVDt3QkFDRSxZQUFZO3dCQUNaOzRCQUNFLGVBQWUsRUFBRSxjQUFjO3lCQUNoQztxQkFDRjtpQkFDRjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsZUFBZSxFQUFFO3dCQUNmLFNBQVM7d0JBQ1Q7NEJBQ0UsUUFBUSxFQUFHLElBQUksQ0FBQyxPQUF3QixDQUFDLGdCQUFnQixFQUFFLGNBQWM7eUJBQzFFO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELElBQXVCLHdCQUF3QjtRQUM3QyxPQUFPLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFZSxjQUFjO1FBQzVCLElBQUksSUFBQSxzQkFBYyxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUF3QixDQUFDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUM1RixJQUFJLENBQUMsT0FBd0IsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxPQUF3QixDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDOUUsSUFBSSxDQUFDLE9BQXdCLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQy9GLElBQUksQ0FBQyxPQUF3QixDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUM3RixDQUFDO0lBQ0gsQ0FBQzs7QUE5REgsb0RBK0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSmVzdENvbmZpZ0Jhc2UgfSBmcm9tICcuLi8uLi9iYXNlL2NvbmZpZy9qZXN0JztcbmltcG9ydCB7IFByb2plY3RUeXBlcyB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMvcHJvamVjdCc7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgaXNWYWxpZFByb2plY3QgfSBmcm9tICcuLi8uLi91dGlsL3V0aWxzJztcblxuLyoqXG4gKiBJbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IEplc3QgY29uZmlndXJhdGlvbiBmb3IgdGhlIENhcFNlcnZpY2UgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIEplc3RDb25maWdDYXBTZXJ2aWNlIGV4dGVuZHMgSmVzdENvbmZpZ0Jhc2Uge1xuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJ0B0eXBlcy9qZXN0QF4yOS41LjE0JywgJ2plc3RAXjI5LjcuMCcsICdqZXN0LWp1bml0QF4xNi4wLjAnLCAndHMtamVzdEBeMjkuMi41J107XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxTY3JpcHRzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXN0OiAnamVzdCAtLXBhc3NXaXRoTm9UZXN0cyAtLXVwZGF0ZVNuYXBzaG90JyxcbiAgICAgICd0ZXN0OndhdGNoJzogJ2plc3QgLS13YXRjaCcsXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbFNldHRpbmdzKCk6IFNldHRpbmdzIHtcbiAgICByZXR1cm4ge1xuICAgICAgamVzdDoge1xuICAgICAgICBjb3ZlcmFnZVByb3ZpZGVyOiAndjgnLFxuICAgICAgICB0ZXN0TWF0Y2g6IFtcbiAgICAgICAgICAnPHJvb3REaXI+L0Aoc3JjfHRlc3QpLyoqLyooKi4pQChzcGVjfHRlc3QpLnRzPyh4KScsXG4gICAgICAgICAgJzxyb290RGlyPi9AKHNyY3x0ZXN0KS8qKi9fX3Rlc3RzX18vKiovKi50cz8oeCknLFxuICAgICAgICAgICc8cm9vdERpcj4vQChwcm9qZW5yYykvKiovKigqLilAKHNwZWN8dGVzdCkudHM/KHgpJyxcbiAgICAgICAgICAnPHJvb3REaXI+L0AocHJvamVucmMpLyoqL19fdGVzdHNfXy8qKi8qLnRzPyh4KScsXG4gICAgICAgIF0sXG4gICAgICAgIGNsZWFyTW9ja3M6IHRydWUsXG4gICAgICAgIGNvbGxlY3RDb3ZlcmFnZTogdHJ1ZSxcbiAgICAgICAgY292ZXJhZ2VSZXBvcnRlcnM6IFsnanNvbicsICdsY292JywgJ2Nsb3ZlcicsICdjb2JlcnR1cmEnLCAndGV4dCddLFxuICAgICAgICBjb3ZlcmFnZURpcmVjdG9yeTogJ2NvdmVyYWdlJyxcbiAgICAgICAgY292ZXJhZ2VQYXRoSWdub3JlUGF0dGVybnM6IFsnL25vZGVfbW9kdWxlcy8nXSxcbiAgICAgICAgdGVzdFBhdGhJZ25vcmVQYXR0ZXJuczogWycvbm9kZV9tb2R1bGVzLyddLFxuICAgICAgICB3YXRjaFBhdGhJZ25vcmVQYXR0ZXJuczogWycvbm9kZV9tb2R1bGVzLyddLFxuICAgICAgICByZXBvcnRlcnM6IFtcbiAgICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgJ2plc3QtanVuaXQnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvdXRwdXREaXJlY3Rvcnk6ICd0ZXN0LXJlcG9ydHMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICBdLFxuICAgICAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgICAnXi4rXFxcXC5bdF1zeD8kJzogW1xuICAgICAgICAgICAgJ3RzLWplc3QnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0c2NvbmZpZzogKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLnR5cGVzY3JpcHRDb25maWc/LmNvbmZpZ0ZpbGVOYW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsSWdub3JlUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJy9jb3ZlcmFnZS8nLCAnL3Rlc3QtcmVwb3J0cy8nLCAnL2p1bml0LnhtbCddO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHJlZ2lzdGVyQ29uZmlnKCk6IHZvaWQge1xuICAgIGlmIChpc1ZhbGlkUHJvamVjdCh0aGlzLnByb2plY3QpKSB7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykubnBtQ29uZmlnPy5hZGREZXZEZXBlbmRlbmNpZXModGhpcy5hZGRpdGlvbmFsRGV2RGVwZW5kZW5jaWVzKTtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5ucG1Db25maWc/LmFkZFNjcmlwdHModGhpcy5hZGRpdGlvbmFsU2NyaXB0cyk7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykubnBtQ29uZmlnPy5hZGRTZXR0aW5ncyh0aGlzLmFkZGl0aW9uYWxTZXR0aW5ncyk7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykucHJldHRpZXJDb25maWc/LmFkZElnbm9yZVBhdHRlcm5zKHRoaXMuYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKTtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5naXRDb25maWc/LmFkZElnbm9yZVBhdHRlcm5zKHRoaXMuYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
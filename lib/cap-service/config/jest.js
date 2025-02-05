"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JestConfigCapService = void 0;
const jest_1 = require("../../base/config/jest");
const constants_1 = require("../../util/constants");
const utils_1 = require("../../util/utils");
/**
 * Implementing all relevant Jest configuration for the CapService project.
 */
class JestConfigCapService extends jest_1.JestConfigBase {
    get additionalDevDependencies() {
        return [
            `${constants_1.constants['@types/jest'].NAME}@${constants_1.constants['@types/jest'].VERSION}`,
            `${constants_1.constants['jest'].NAME}@${constants_1.constants['jest'].VERSION}`,
            `${constants_1.constants['jest-junit'].NAME}@${constants_1.constants['jest-junit'].VERSION}`,
            `${constants_1.constants['ts-jest'].NAME}@${constants_1.constants['ts-jest'].VERSION}`,
        ];
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
        if (utils_1.util.isValidProject(this.project)) {
            this.project.npmConfig?.addDevDependencies(this.additionalDevDependencies);
            this.project.npmConfig?.addScripts(this.additionalScripts);
            this.project.npmConfig?.addSettings(this.additionalSettings);
            this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
            this.project.gitConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
        }
    }
}
exports.JestConfigCapService = JestConfigCapService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXAtc2VydmljZS9jb25maWcvamVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpREFBd0Q7QUFDeEQsb0RBQWlEO0FBR2pELDRDQUF3QztBQUV4Qzs7R0FFRztBQUNILE1BQWEsb0JBQXFCLFNBQVEscUJBQWM7SUFDdEQsSUFBdUIseUJBQXlCO1FBQzlDLE9BQU87WUFDTCxHQUFHLHFCQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxJQUFJLHFCQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ3RFLEdBQUcscUJBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUkscUJBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDeEQsR0FBRyxxQkFBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksSUFBSSxxQkFBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUNwRSxHQUFHLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxJQUFJLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFO1NBQy9ELENBQUM7SUFDSixDQUFDO0lBRUQsSUFBdUIsaUJBQWlCO1FBQ3RDLE9BQU87WUFDTCxJQUFJLEVBQUUseUNBQXlDO1lBQy9DLFlBQVksRUFBRSxjQUFjO1NBQzdCLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBdUIsa0JBQWtCO1FBQ3ZDLE9BQU87WUFDTCxJQUFJLEVBQUU7Z0JBQ0osZ0JBQWdCLEVBQUUsSUFBSTtnQkFDdEIsU0FBUyxFQUFFO29CQUNULG1EQUFtRDtvQkFDbkQsZ0RBQWdEO29CQUNoRCxtREFBbUQ7b0JBQ25ELGdEQUFnRDtpQkFDakQ7Z0JBQ0QsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLGVBQWUsRUFBRSxJQUFJO2dCQUNyQixpQkFBaUIsRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUM7Z0JBQ2xFLGlCQUFpQixFQUFFLFVBQVU7Z0JBQzdCLDBCQUEwQixFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzlDLHNCQUFzQixFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzFDLHVCQUF1QixFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzNDLFNBQVMsRUFBRTtvQkFDVCxTQUFTO29CQUNUO3dCQUNFLFlBQVk7d0JBQ1o7NEJBQ0UsZUFBZSxFQUFFLGNBQWM7eUJBQ2hDO3FCQUNGO2lCQUNGO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxlQUFlLEVBQUU7d0JBQ2YsU0FBUzt3QkFDVDs0QkFDRSxRQUFRLEVBQUcsSUFBSSxDQUFDLE9BQXdCLENBQUMsZ0JBQWdCLEVBQUUsY0FBYzt5QkFDMUU7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBdUIsd0JBQXdCO1FBQzdDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVlLGNBQWM7UUFDNUIsSUFBSSxZQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxPQUF3QixDQUFDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUM1RixJQUFJLENBQUMsT0FBd0IsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxPQUF3QixDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDOUUsSUFBSSxDQUFDLE9BQXdCLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQy9GLElBQUksQ0FBQyxPQUF3QixDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUM3RixDQUFDO0lBQ0gsQ0FBQztDQUNGO0FBcEVELG9EQW9FQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEplc3RDb25maWdCYXNlIH0gZnJvbSAnLi4vLi4vYmFzZS9jb25maWcvamVzdCc7XG5pbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tICcuLi8uLi91dGlsL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBQcm9qZWN0VHlwZXMgfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzL3Byb2plY3QnO1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzL3R5cGVzJztcbmltcG9ydCB7IHV0aWwgfSBmcm9tICcuLi8uLi91dGlsL3V0aWxzJztcblxuLyoqXG4gKiBJbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IEplc3QgY29uZmlndXJhdGlvbiBmb3IgdGhlIENhcFNlcnZpY2UgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIEplc3RDb25maWdDYXBTZXJ2aWNlIGV4dGVuZHMgSmVzdENvbmZpZ0Jhc2Uge1xuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXG4gICAgICBgJHtjb25zdGFudHNbJ0B0eXBlcy9qZXN0J10uTkFNRX1AJHtjb25zdGFudHNbJ0B0eXBlcy9qZXN0J10uVkVSU0lPTn1gLFxuICAgICAgYCR7Y29uc3RhbnRzWydqZXN0J10uTkFNRX1AJHtjb25zdGFudHNbJ2plc3QnXS5WRVJTSU9OfWAsXG4gICAgICBgJHtjb25zdGFudHNbJ2plc3QtanVuaXQnXS5OQU1FfUAke2NvbnN0YW50c1snamVzdC1qdW5pdCddLlZFUlNJT059YCxcbiAgICAgIGAke2NvbnN0YW50c1sndHMtamVzdCddLk5BTUV9QCR7Y29uc3RhbnRzWyd0cy1qZXN0J10uVkVSU0lPTn1gLFxuICAgIF07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxTY3JpcHRzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXN0OiAnamVzdCAtLXBhc3NXaXRoTm9UZXN0cyAtLXVwZGF0ZVNuYXBzaG90JyxcbiAgICAgICd0ZXN0OndhdGNoJzogJ2plc3QgLS13YXRjaCcsXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbFNldHRpbmdzKCk6IFNldHRpbmdzIHtcbiAgICByZXR1cm4ge1xuICAgICAgamVzdDoge1xuICAgICAgICBjb3ZlcmFnZVByb3ZpZGVyOiAndjgnLFxuICAgICAgICB0ZXN0TWF0Y2g6IFtcbiAgICAgICAgICAnPHJvb3REaXI+L0Aoc3JjfHRlc3QpLyoqLyooKi4pQChzcGVjfHRlc3QpLnRzPyh4KScsXG4gICAgICAgICAgJzxyb290RGlyPi9AKHNyY3x0ZXN0KS8qKi9fX3Rlc3RzX18vKiovKi50cz8oeCknLFxuICAgICAgICAgICc8cm9vdERpcj4vQChwcm9qZW5yYykvKiovKigqLilAKHNwZWN8dGVzdCkudHM/KHgpJyxcbiAgICAgICAgICAnPHJvb3REaXI+L0AocHJvamVucmMpLyoqL19fdGVzdHNfXy8qKi8qLnRzPyh4KScsXG4gICAgICAgIF0sXG4gICAgICAgIGNsZWFyTW9ja3M6IHRydWUsXG4gICAgICAgIGNvbGxlY3RDb3ZlcmFnZTogdHJ1ZSxcbiAgICAgICAgY292ZXJhZ2VSZXBvcnRlcnM6IFsnanNvbicsICdsY292JywgJ2Nsb3ZlcicsICdjb2JlcnR1cmEnLCAndGV4dCddLFxuICAgICAgICBjb3ZlcmFnZURpcmVjdG9yeTogJ2NvdmVyYWdlJyxcbiAgICAgICAgY292ZXJhZ2VQYXRoSWdub3JlUGF0dGVybnM6IFsnL25vZGVfbW9kdWxlcy8nXSxcbiAgICAgICAgdGVzdFBhdGhJZ25vcmVQYXR0ZXJuczogWycvbm9kZV9tb2R1bGVzLyddLFxuICAgICAgICB3YXRjaFBhdGhJZ25vcmVQYXR0ZXJuczogWycvbm9kZV9tb2R1bGVzLyddLFxuICAgICAgICByZXBvcnRlcnM6IFtcbiAgICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgJ2plc3QtanVuaXQnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvdXRwdXREaXJlY3Rvcnk6ICd0ZXN0LXJlcG9ydHMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICBdLFxuICAgICAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgICAnXi4rXFxcXC5bdF1zeD8kJzogW1xuICAgICAgICAgICAgJ3RzLWplc3QnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0c2NvbmZpZzogKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLnR5cGVzY3JpcHRDb25maWc/LmNvbmZpZ0ZpbGVOYW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsSWdub3JlUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJy9jb3ZlcmFnZS8nLCAnL3Rlc3QtcmVwb3J0cy8nLCAnL2p1bml0LnhtbCddO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHJlZ2lzdGVyQ29uZmlnKCk6IHZvaWQge1xuICAgIGlmICh1dGlsLmlzVmFsaWRQcm9qZWN0KHRoaXMucHJvamVjdCkpIHtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5ucG1Db25maWc/LmFkZERldkRlcGVuZGVuY2llcyh0aGlzLmFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMpO1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLm5wbUNvbmZpZz8uYWRkU2NyaXB0cyh0aGlzLmFkZGl0aW9uYWxTY3JpcHRzKTtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5ucG1Db25maWc/LmFkZFNldHRpbmdzKHRoaXMuYWRkaXRpb25hbFNldHRpbmdzKTtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5wcmV0dGllckNvbmZpZz8uYWRkSWdub3JlUGF0dGVybnModGhpcy5hZGRpdGlvbmFsSWdub3JlUGF0dGVybnMpO1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLmdpdENvbmZpZz8uYWRkSWdub3JlUGF0dGVybnModGhpcy5hZGRpdGlvbmFsSWdub3JlUGF0dGVybnMpO1xuICAgIH1cbiAgfVxufVxuIl19
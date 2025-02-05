"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JestConfigCapService = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
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
_a = JSII_RTTI_SYMBOL_1;
JestConfigCapService[_a] = { fqn: "@dxfrontier/projen-template-projects.JestConfigCapService", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXAtc2VydmljZS9jb25maWcvamVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlEQUF3RDtBQUN4RCxvREFBaUQ7QUFHakQsNENBQXdDO0FBRXhDOztHQUVHO0FBQ0gsTUFBYSxvQkFBcUIsU0FBUSxxQkFBYztJQUN0RCxJQUF1Qix5QkFBeUI7UUFDOUMsT0FBTztZQUNMLEdBQUcscUJBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLElBQUkscUJBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDdEUsR0FBRyxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUN4RCxHQUFHLHFCQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxJQUFJLHFCQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ3BFLEdBQUcscUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLElBQUkscUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUU7U0FDL0QsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUF1QixpQkFBaUI7UUFDdEMsT0FBTztZQUNMLElBQUksRUFBRSx5Q0FBeUM7WUFDL0MsWUFBWSxFQUFFLGNBQWM7U0FDN0IsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUF1QixrQkFBa0I7UUFDdkMsT0FBTztZQUNMLElBQUksRUFBRTtnQkFDSixnQkFBZ0IsRUFBRSxJQUFJO2dCQUN0QixTQUFTLEVBQUU7b0JBQ1QsbURBQW1EO29CQUNuRCxnREFBZ0Q7b0JBQ2hELG1EQUFtRDtvQkFDbkQsZ0RBQWdEO2lCQUNqRDtnQkFDRCxVQUFVLEVBQUUsSUFBSTtnQkFDaEIsZUFBZSxFQUFFLElBQUk7Z0JBQ3JCLGlCQUFpQixFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQztnQkFDbEUsaUJBQWlCLEVBQUUsVUFBVTtnQkFDN0IsMEJBQTBCLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDOUMsc0JBQXNCLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDMUMsdUJBQXVCLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDM0MsU0FBUyxFQUFFO29CQUNULFNBQVM7b0JBQ1Q7d0JBQ0UsWUFBWTt3QkFDWjs0QkFDRSxlQUFlLEVBQUUsY0FBYzt5QkFDaEM7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULGVBQWUsRUFBRTt3QkFDZixTQUFTO3dCQUNUOzRCQUNFLFFBQVEsRUFBRyxJQUFJLENBQUMsT0FBd0IsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjO3lCQUMxRTtxQkFDRjtpQkFDRjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUF1Qix3QkFBd0I7UUFDN0MsT0FBTyxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRWUsY0FBYztRQUM1QixJQUFJLFlBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQXdCLENBQUMsU0FBUyxFQUFFLGtCQUFrQixDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQzVGLElBQUksQ0FBQyxPQUF3QixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLE9BQXdCLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUM5RSxJQUFJLENBQUMsT0FBd0IsQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDL0YsSUFBSSxDQUFDLE9BQXdCLENBQUMsU0FBUyxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzdGLENBQUM7SUFDSCxDQUFDOztBQW5FSCxvREFvRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBKZXN0Q29uZmlnQmFzZSB9IGZyb20gJy4uLy4uL2Jhc2UvY29uZmlnL2plc3QnO1xuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zdGFudHMnO1xuaW1wb3J0IHsgUHJvamVjdFR5cGVzIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcy9wcm9qZWN0JztcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcy90eXBlcyc7XG5pbXBvcnQgeyB1dGlsIH0gZnJvbSAnLi4vLi4vdXRpbC91dGlscyc7XG5cbi8qKlxuICogSW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBKZXN0IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBDYXBTZXJ2aWNlIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBKZXN0Q29uZmlnQ2FwU2VydmljZSBleHRlbmRzIEplc3RDb25maWdCYXNlIHtcbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsRGV2RGVwZW5kZW5jaWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW1xuICAgICAgYCR7Y29uc3RhbnRzWydAdHlwZXMvamVzdCddLk5BTUV9QCR7Y29uc3RhbnRzWydAdHlwZXMvamVzdCddLlZFUlNJT059YCxcbiAgICAgIGAke2NvbnN0YW50c1snamVzdCddLk5BTUV9QCR7Y29uc3RhbnRzWydqZXN0J10uVkVSU0lPTn1gLFxuICAgICAgYCR7Y29uc3RhbnRzWydqZXN0LWp1bml0J10uTkFNRX1AJHtjb25zdGFudHNbJ2plc3QtanVuaXQnXS5WRVJTSU9OfWAsXG4gICAgICBgJHtjb25zdGFudHNbJ3RzLWplc3QnXS5OQU1FfUAke2NvbnN0YW50c1sndHMtamVzdCddLlZFUlNJT059YCxcbiAgICBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2NyaXB0cygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdGVzdDogJ2plc3QgLS1wYXNzV2l0aE5vVGVzdHMgLS11cGRhdGVTbmFwc2hvdCcsXG4gICAgICAndGVzdDp3YXRjaCc6ICdqZXN0IC0td2F0Y2gnLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxTZXR0aW5ncygpOiBTZXR0aW5ncyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGplc3Q6IHtcbiAgICAgICAgY292ZXJhZ2VQcm92aWRlcjogJ3Y4JyxcbiAgICAgICAgdGVzdE1hdGNoOiBbXG4gICAgICAgICAgJzxyb290RGlyPi9AKHNyY3x0ZXN0KS8qKi8qKCouKUAoc3BlY3x0ZXN0KS50cz8oeCknLFxuICAgICAgICAgICc8cm9vdERpcj4vQChzcmN8dGVzdCkvKiovX190ZXN0c19fLyoqLyoudHM/KHgpJyxcbiAgICAgICAgICAnPHJvb3REaXI+L0AocHJvamVucmMpLyoqLyooKi4pQChzcGVjfHRlc3QpLnRzPyh4KScsXG4gICAgICAgICAgJzxyb290RGlyPi9AKHByb2plbnJjKS8qKi9fX3Rlc3RzX18vKiovKi50cz8oeCknLFxuICAgICAgICBdLFxuICAgICAgICBjbGVhck1vY2tzOiB0cnVlLFxuICAgICAgICBjb2xsZWN0Q292ZXJhZ2U6IHRydWUsXG4gICAgICAgIGNvdmVyYWdlUmVwb3J0ZXJzOiBbJ2pzb24nLCAnbGNvdicsICdjbG92ZXInLCAnY29iZXJ0dXJhJywgJ3RleHQnXSxcbiAgICAgICAgY292ZXJhZ2VEaXJlY3Rvcnk6ICdjb3ZlcmFnZScsXG4gICAgICAgIGNvdmVyYWdlUGF0aElnbm9yZVBhdHRlcm5zOiBbJy9ub2RlX21vZHVsZXMvJ10sXG4gICAgICAgIHRlc3RQYXRoSWdub3JlUGF0dGVybnM6IFsnL25vZGVfbW9kdWxlcy8nXSxcbiAgICAgICAgd2F0Y2hQYXRoSWdub3JlUGF0dGVybnM6IFsnL25vZGVfbW9kdWxlcy8nXSxcbiAgICAgICAgcmVwb3J0ZXJzOiBbXG4gICAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgICdqZXN0LWp1bml0JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb3V0cHV0RGlyZWN0b3J5OiAndGVzdC1yZXBvcnRzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgXSxcbiAgICAgICAgdHJhbnNmb3JtOiB7XG4gICAgICAgICAgJ14uK1xcXFwuW3Rdc3g/JCc6IFtcbiAgICAgICAgICAgICd0cy1qZXN0JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHNjb25maWc6ICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS50eXBlc2NyaXB0Q29uZmlnPy5jb25maWdGaWxlTmFtZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gWycvY292ZXJhZ2UvJywgJy90ZXN0LXJlcG9ydHMvJywgJy9qdW5pdC54bWwnXTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSByZWdpc3RlckNvbmZpZygpOiB2b2lkIHtcbiAgICBpZiAodXRpbC5pc1ZhbGlkUHJvamVjdCh0aGlzLnByb2plY3QpKSB7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykubnBtQ29uZmlnPy5hZGREZXZEZXBlbmRlbmNpZXModGhpcy5hZGRpdGlvbmFsRGV2RGVwZW5kZW5jaWVzKTtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5ucG1Db25maWc/LmFkZFNjcmlwdHModGhpcy5hZGRpdGlvbmFsU2NyaXB0cyk7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykubnBtQ29uZmlnPy5hZGRTZXR0aW5ncyh0aGlzLmFkZGl0aW9uYWxTZXR0aW5ncyk7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykucHJldHRpZXJDb25maWc/LmFkZElnbm9yZVBhdHRlcm5zKHRoaXMuYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKTtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5naXRDb25maWc/LmFkZElnbm9yZVBhdHRlcm5zKHRoaXMuYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
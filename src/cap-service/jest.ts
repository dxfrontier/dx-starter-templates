import { JestConfigBase } from '../base/jest';
import { ProjectTypes, Settings } from '../types/types';
import { isValidProject } from '../utils';

/**
 * Implementing all relevant Jest configuration for the CapService project.
 */
export class JestConfigCapService extends JestConfigBase {
  /**
   * Gets the additional development dependencies required for configuration.
   *
   * @returns A list of package names with version specifications.
   */
  protected get additionalDevDependencies(): string[] {
    return ['@types/jest@^29.5.14', 'jest@^29.7.0', 'jest-junit@^16.0.0', 'ts-jest@^29.2.5'];
  }

  /**
   * Gets the additional npm scripts to be added to the project's configuration.
   *
   * @returns A record of script names and their corresponding commands.
   */
  protected get additionalScripts(): Record<string, string> {
    return {
      test: 'jest --passWithNoTests --updateSnapshot',
      'test:watch': 'jest --watch',
    };
  }

  /**
   * Gets the additional settings to be added to the project's configuration.
   *
   * @returns A settings object to be merged into the project's settings.
   */
  protected get additionalSettings(): Settings {
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
              tsconfig: (this.project as ProjectTypes).typescriptConfig?.configFileName,
            },
          ],
        },
      },
    };
  }

  /**
   * Gets additional ignore patterns to be added to the project's ignore configuration.
   *
   * @returns A list of ignore patterns.
   */
  protected get additionalIgnorePatterns(): string[] {
    return ['/coverage/', '/test-reports/', '/junit.xml'];
  }

  public override registerConfig(): void {
    if (isValidProject(this.project)) {
      (this.project as ProjectTypes).npmConfig?.addDevDependencies(this.additionalDevDependencies);
      (this.project as ProjectTypes).npmConfig?.addScripts(this.additionalScripts);
      (this.project as ProjectTypes).npmConfig?.addSettings(this.additionalSettings);
      (this.project as ProjectTypes).prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
      (this.project as ProjectTypes).gitConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
    }
  }
}

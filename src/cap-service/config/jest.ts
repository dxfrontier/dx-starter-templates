import { JestConfigBase } from '../../base/config/jest';
import { constants } from '../../util/constants';
import { ProjectTypes } from '../../util/types/project';
import { Settings } from '../../util/types/types';
import { util } from '../../util/utils';

/**
 * Implementing all relevant Jest configuration for the CapService project.
 */
export class JestConfigCapService extends JestConfigBase {
  protected override get additionalDevDependencies(): string[] {
    return [
      `${constants['@types/jest'].NAME}@${constants['@types/jest'].VERSION}`,
      `${constants['jest'].NAME}@${constants['jest'].VERSION}`,
      `${constants['jest-junit'].NAME}@${constants['jest-junit'].VERSION}`,
      `${constants['ts-jest'].NAME}@${constants['ts-jest'].VERSION}`,
    ];
  }

  protected override get additionalScripts(): Record<string, string> {
    return {
      test: 'jest --passWithNoTests --updateSnapshot',
      'test:watch': 'jest --watch',
    };
  }

  protected override get additionalSettings(): Settings {
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

  protected override get additionalIgnorePatterns(): string[] {
    return ['/coverage/', '/test-reports/', '/junit.xml'];
  }

  public override registerConfig(): void {
    if (util.isValidProject(this.project)) {
      (this.project as ProjectTypes).npmConfig?.addDevDependencies(this.additionalDevDependencies);
      (this.project as ProjectTypes).npmConfig?.addScripts(this.additionalScripts);
      (this.project as ProjectTypes).npmConfig?.addSettings(this.additionalSettings);
      (this.project as ProjectTypes).prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
      (this.project as ProjectTypes).gitConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
    }
  }
}

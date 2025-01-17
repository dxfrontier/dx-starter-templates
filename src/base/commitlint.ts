import { TextFile } from 'projen';
import { Config } from './config';
import { Settings } from '../types/types';
import { isValidProject } from '../utils';

/**
 * Base class for implementing all relevant CommitLint configuration.
 *
 * This class acts as a base for handling CommitLint configuration within projects.
 */
export class CommitLintConfigBase extends Config {
  /**
   * Gets the additional development dependencies required for configuration.
   *
   * @returns A list of package names with version specifications.
   */
  protected get additionalDevDependencies(): string[] {
    return [
      '@commitlint/cli@^19.6.1',
      '@commitlint/config-conventional@^19.6.0',
      '@commitlint/prompt-cli@^19.7.0',
      '@commitlint/types@^19.5.0',
      'lint-staged@^15.3.0',
    ];
  }

  /**
   * Gets the additional settings to be added to the project's configuration.
   *
   * @returns A settings object to be merged into the project's settings.
   */
  protected get additionalSettings(): Settings {
    return {
      'lint-staged': {
        '**/*.ts': ['npm run eslint', 'npm run prettier'],
      },
    };
  }

  /**
   * Gets the additional npm scripts to be added to the project's configuration.
   *
   * @returns A record of script names and their corresponding commands.
   */
  protected get additionalScripts(): Record<string, string> {
    return {
      commit: 'commit',
    };
  }

  /**
   * Gets additional ignore patterns to be added to the project's ignore configuration.
   *
   * @returns A list of ignore patterns.
   */
  protected get additionalIgnorePatterns(): string[] {
    const filePath: string = Object.keys(this.configFile)[0];
    return [`/${filePath}`];
  }

  /**
   * Gets the configuration file content.
   *
   * @returns An object where the key is the filename and the value is an array of file lines.
   */
  protected get configFile(): Record<string, string[]> {
    return {
      '.commitlintrc.ts': [
        "import type { UserConfig } from '@commitlint/types';",
        "import { RuleConfigSeverity } from '@commitlint/types';",
        '',
        'const Configuration: UserConfig = {',
        "  extends: ['@commitlint/config-conventional'],",
        '  rules: {',
        "    'type-enum': [",
        '      RuleConfigSeverity.Error,',
        "      'always',",
        "      ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test', 'delete'],",
        '    ],',
        "    'scope-empty': [RuleConfigSeverity.Error, 'never'],",
        "    'subject-empty': [RuleConfigSeverity.Error, 'never'],",
        '  },',
        "  helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',",
        '};',
        '',
        'export default Configuration;',
      ],
    };
  }

  public override registerConfig(): void {
    if (isValidProject(this.project)) {
      this.project.npmConfig?.addDevDependencies(this.additionalDevDependencies);
      this.project.npmConfig?.addSettings(this.additionalSettings);
      this.project.npmConfig?.addScripts(this.additionalScripts);
      this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
    }
  }

  public override applyConfig(): void {
    const filePath: string = Object.keys(this.configFile)[0];
    new TextFile(this.project, filePath, {
      lines: this.configFile[filePath],
    });
  }
}

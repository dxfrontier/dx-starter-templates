import { TextFile } from 'projen';
import { Config } from '../config';
import { ProjectTypes } from '../../util/types/project';
import { util } from '../../util/utils';
import { ConfigFile, Settings } from '../../util/types/types';
import { constants } from '../../util/constants';

/**
 * Base class for implementing all relevant CommitLint configuration.
 *
 * This class acts as a base for handling CommitLint configuration within projects.
 */
export class CommitLintConfigBase extends Config {
  protected override get additionalDevDependencies(): string[] {
    return [
      `${constants['@commitlint/cli'].NAME}@${constants['@commitlint/cli'].VERSION}`,
      `${constants['@commitlint/config-conventional'].NAME}@${constants['@commitlint/config-conventional'].VERSION}`,
      `${constants['@commitlint/prompt-cli'].NAME}@${constants['@commitlint/prompt-cli'].VERSION}`,
      `${constants['@commitlint/types'].NAME}@${constants['@commitlint/types'].VERSION}`,
      `${constants['lint-staged'].NAME}@${constants['lint-staged'].VERSION}`,
    ];
  }

  protected override get additionalSettings(): Settings {
    return {
      'lint-staged': {
        '**/*.ts': ['npm run eslint', 'npm run prettier'],
      },
    };
  }

  protected override get additionalScripts(): Record<string, string> {
    return {
      commit: 'commit',
    };
  }

  protected override get additionalIgnorePatterns(): string[] {
    const filePath: string = Object.keys(this.configFile)[0];
    return [`/${filePath}`];
  }

  protected override get configFile(): ConfigFile {
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
    if (util.isValidProject(this.project)) {
      (this.project as ProjectTypes).npmConfig?.addDevDependencies(this.additionalDevDependencies);
      (this.project as ProjectTypes).npmConfig?.addSettings(this.additionalSettings);
      (this.project as ProjectTypes).npmConfig?.addScripts(this.additionalScripts);
      (this.project as ProjectTypes).prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
    }
  }

  public override applyConfig(): void {
    const filePath: string = Object.keys(this.configFile)[0];
    new TextFile(this.project, filePath, {
      lines: this.configFile[filePath] as string[],
    });
  }
}

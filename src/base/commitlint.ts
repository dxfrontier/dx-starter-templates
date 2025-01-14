import { TextFile } from 'projen';
import { Settings } from '.';
import { JsiiProject } from '../jsii';
import { Config, ConfigStrategy } from './config';
import { BaseProject } from './project';

/**
 * Base class for implementing all relevant CommitLint configuration.
 *
 * This class acts as a base for handling CommitLint configuration within projects
 * that extend either `BaseProject` or `JsiiProject`. It determines the configuration
 * strategy to use based on whether Projen is being used.
 *
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 * @extends Config
 */
export class CommitLintBaseConfig<T extends BaseProject | JsiiProject> extends Config<T> {
  constructor(project: T) {
    super(project);

    const strategy = new NonApiCommitLintBaseConfigStrategy();
    this.setStrategy(strategy);
  }

  protected get additionalDevDependencies(): string[] {
    return [
      '@commitlint/cli@^19.6.1',
      '@commitlint/config-conventional@^19.6.0',
      '@commitlint/prompt-cli@^19.7.0',
      '@commitlint/types@^19.5.0',
      'lint-staged@^15.3.0',
    ];
  }

  protected get additionalSettings(): Settings {
    return {
      'lint-staged': {
        '**/*.ts': ['npm run eslint', 'npm run prettier'],
      },
    };
  }

  protected get additionalScripts(): Record<string, string> {
    return {
      commit: 'commit',
    };
  }

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

  public createConfig(): void {
    const filePath: string = Object.keys(this.configFile)[0];
    new TextFile(this.project, filePath, {
      lines: this.configFile[filePath],
    });
  }

  public override registerConfig(): void {
    this.project.npmConfig?.addDevDependencies(this.additionalDevDependencies);
    this.project.npmConfig?.addSettings(this.additionalSettings);
    this.project.npmConfig?.addScripts(this.additionalScripts);
  }
}

/**
 * Configuration strategy for Projen-tracked CommitLint base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class NonApiCommitLintBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  applyConfig(config: Config<T>): void {
    if (config instanceof CommitLintBaseConfig) {
      config.createConfig();
    }
  }
}

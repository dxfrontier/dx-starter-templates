import { PrettierOverride, PrettierSettings, TrailingComma } from 'projen/lib/javascript';
import { Builder } from './builder';
import { Scripts } from '../types';
import { TypeScriptProjectBase } from './project';

/**
 * Base class for Prettier builder implementing all relevant configuration.
 * @abstract
 */
export abstract class PrettierBase extends Builder {
  /**
   * Initializes the base Prettier builder.
   * @param project The project to configure Prettier for.
   */
  constructor(project: TypeScriptProjectBase) {
    super(project);
  }

  /**
   * File path to the Prettier ignore configuration.
   * @return File path to ignore file.
   * @protected
   */
  protected get ignoreFilePath(): string {
    return '.prettierignore';
  }

  /**
   * File path to the Prettier settings configuration.
   * @return File path to setting file.
   * @protected
   */
  protected get settingsFilePath(): string {
    return '.prettierrc.json';
  }

  /**
   * File paths to the Prettier ignore entries.
   * @return File paths for ignore file entries.
   * @protected
   */
  protected get ignoreFilePaths(): string[] {
    return [
      '*.snap',
      '/.commitlintrc.ts',
      '/.devcontainer.json',
      '/.gitattributes',
      '/.github/ISSUE_TEMPLATE/bug.yml',
      '/.github/ISSUE_TEMPLATE/feature.yml',
      '/.github/ISSUE_TEMPLATE/housekeeping.yml',
      '/.github/ISSUE_TEMPLATE/question.yml',
      '/.github/pull_request_template.md',
      '/.github/workflows/release.yml',
      '/.gitignore',
      '/.husky/commit-msg',
      '/.husky/pre-commit',
      '/.prettierignore',
      '/.prettierrc.json',
      '/.projen/**',
      '/.projen/deps.json',
      '/.projen/files.json',
      '/.projen/tasks.json',
      '/.vscode/settings.json',
      '/eslint.config.mjs',
      '/cliff.toml',
      '/package-lock.json',
      '/package.json',
      '/tsconfig.dev.json',
    ];
  }

  /**
   * Settings for the Prettier configuration.
   * @return Entries for the settings file.
   * @protected
   */
  protected get settings(): PrettierOverride {
    return {
      files: '*.*',
      options: {
        semi: true,
        trailingComma: TrailingComma.ALL,
        singleQuote: true,
        printWidth: 120,
        tabWidth: 2,
      } as PrettierSettings,
    };
  }

  /**
   * NPM scripts used by Prettier.
   * @return Npm script entries.
   * @protected
   */
  protected get scripts(): Scripts {
    return {
      prettier: 'prettier . --write',
    };
  }

  protected addSettings(): void {
    this.project.prettier?.addOverride(this.settings);
  }

  protected addScripts(): void {
    for (const [name, command] of Object.entries(this.scripts)) {
      this.project.addTask(name, { exec: command, receiveArgs: true });
    }
  }

  /**
   * Executes post-synthesis tasks, focusing on updating the `.prettierignore` file with paths from `.gitattributes`.
   *
   * Tried scenarios:
   *   - Accessing attributes directly from `.gitattributes` file (but `.gitattributes` is private and inaccessible).
   *     This would be the most efficient and elegant solution as it allows us to add the entries using API.
   *   - Retrieving all files from the project (misses some files like `tsconfig.json`).
   *   - Letting each component add its paths individually (leaves out many standard files).
   *   - Manually adding paths (prone to errors).
   *   - Modifying `.prettierignore` after post-synthesis (but `.prettierignore` is readonly) and leads to test issues
   *     as these changes are not reflected in `syntesize()`.
   *
   * We will update it manually and cover it by tests cases checking if changes on the files are reflected here.
   */
  public preSynthesize(): void {
    this.addPrettierIgnoreEntries();
  }

  /**
   * Adds entries to the `.prettierignore` file.
   * @private
   */
  protected addPrettierIgnoreEntries(): void {
    for (const entry of this.ignoreFilePaths) {
      this.project.prettier?.addIgnorePattern(entry);
    }
  }
}

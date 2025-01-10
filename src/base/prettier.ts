import { JsonFile } from 'projen';
import { ConfigContent, ProjectOptions } from '../types';
import { Config } from './config';
import { TypeScriptProjectBase } from './project';
import { TrailingComma } from 'projen/lib/javascript';

/**
 * Base class for Prettier implementing all relevant configuration.
 * @abstract
 */
export abstract class PrettierConfigBase extends Config {
  /**
   * @override 
   */
  constructor(project: TypeScriptProjectBase) {
    super(project);

    this.addConfigToRegistry('prettier');
  }

  /**
     * @override
     */
  public static get projectOptions(): ProjectOptions {
    return {
      prettier: false,
    };
  }

  /**
   * @override
   */
  protected get config(): ConfigContent {
    return {
      file: {
        path: '.prettierrc.json',
        content: {
          files: '*.*',
          options: {
            semi: true,
            trailingComma: TrailingComma.ALL,
            singleQuote: true,
            printWidth: 120,
            tabWidth: 2,
          }
        },
      },
      // '.prettierignore': [
      //   '*.snap',
      //   // '/.commitlintrc.ts',
      //   // '/.devcontainer.json',
      //   // '/.gitattributes',
      //   // '/.github/ISSUE_TEMPLATE/bug.yml',
      //   // '/.github/ISSUE_TEMPLATE/feature.yml',
      //   // '/.github/ISSUE_TEMPLATE/housekeeping.yml',
      //   // '/.github/ISSUE_TEMPLATE/question.yml',
      //   // '/.github/pull_request_template.md',
      //   // '/.github/workflows/release.yml',
      //   // '/.gitignore',
      //   // '/.husky/commit-msg',
      //   // '/.husky/pre-commit',
      //   '/.prettierignore',
      //   '/.prettierrc.json',
      //   // '/.projen/**',
      //   // '/.projen/deps.json',
      //   // '/.projen/files.json',
      //   // '/.projen/tasks.json',
      //   // '/.vscode/settings.json',
      //   // '/eslint.config.mjs',
      //   // '/cliff.toml',
      //   // '/package-lock.json',
      //   // '/package.json',
      //   // '/tsconfig.dev.json',
      // ]
    };
  }

  /**
   * Creates the config file for Prettier config.
   * @protected
   */
  protected createConfigFile(): void {
    const path: string = this.config.file!.path;
    new JsonFile(this.project, path, {
      omitEmpty: true,
      allowComments: true,
      obj: this.config.file!.content,
    });
  }

  // /**
  //  * Creates the ignore file for Prettier config.
  //  * @protected
  //  */
  // protected createIgnoreFile(): void {
  //   // const path: string = Object.keys(this.config.ignore!)[1];
  //   // new JsonFile(this.project, path, {
  //   //   omitEmpty: true,
  //   //   allowComments: true,
  //   //   obj: this.config.configFiles![path],
  //   // });
  // }
}
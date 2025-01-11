import { JsonFile, TextFile } from 'projen';
import { ConfigContent, ConfigFile, ProjectOptions } from '../types';
import { Config } from './config';
import { TypeScriptProjectBase } from './project';
import { TrailingComma } from 'projen/lib/javascript';
import { NpmConfigBase } from './npm';

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
   * Creates the config file for Prettier config.
   * @protected
   */
  protected createConfigFiles(): void {
    const configFile: ConfigFile = this.config.configFiles! as ConfigFile;
    const path: string = configFile.path;
    new JsonFile(this.project, path, {
      omitEmpty: true,
      allowComments: true,
      obj: configFile.content,
    });
  }

  /**
   * Creates the ignore file for Prettier config.
   * No IgnoreFile is used as this has additional information overhead.
   * @protected
   */
  protected createIgnoreFile(): void {
    const ignoreFile: ConfigFile = this.config.ignoreFile!;
    const path: string = ignoreFile.path;
    new TextFile(this.project, path, {
      marker: true,
      lines: ignoreFile.content as string[],
    });
  }

  /**
   * Adds ignore entries in the `.prettierignore` file.
   * Subclasses should overwrite this as there are two possible ways:
   * 1) Use Projen standard API for Projen tracked projects.
   * 2) Add entries to manually created `prettierignore` for non-Projen projects.
   * @param entries Ignore entries to be added.
   * @public
   * @abstract
   */
  public abstract addIgnoreEntries(entries: string[]): void;

  /**
   * @override
   */
  public setup(): void {
    // Dependency Injected Modules in shared config registry
    Config.getConfigFromRegistry<NpmConfigBase>('npm')?.addDevDependencies(this.config.devDependencies!);
    Config.getConfigFromRegistry<NpmConfigBase>('npm')?.addScripts(this.config.scripts!);
  }

  /**
   * @override
   */
  protected get _config(): ConfigContent {
    return {
      devDependencies: [
        'prettier@^3.4.2',
      ],
      scripts: {
        'prettier': 'prettier . --write',
      },
      configFiles: {
        path: '.prettierrc.json',
        content: {
          overrides: [
            {
              files: '*.*',
              options: {
                semi: true,
                trailingComma: TrailingComma.ALL,
                singleQuote: true,
                printWidth: 120,
                tabWidth: 2,
              },
            },
          ],
        },
      },
      ignoreFile: {
        path: '.prettierignore',
        content: [
          '/.prettierignore',
          '/.prettierrc.json',
        ],
      },
    };
  }
}
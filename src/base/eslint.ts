import { ConfigContent, ProjectOptions } from '../types';
import { Config } from './config';
import { TypeScriptProjectBase } from './project';
import { PrettierConfigBase } from './prettier';

/**
 * Base class for EsLint implementing all relevant configuration.
 * @abstract
 */
export abstract class EsLintConfigBase extends Config {
  /**
   * @override 
   */
  constructor(project: TypeScriptProjectBase) {
    super(project);

    this.addConfigToRegistry('eslint');
  }

  /**
     * @override
     */
  public static get projectOptions(): ProjectOptions {
    return {
      eslint: false,
    };
  }

  /**
   * @override
   */
  public setup(): void {
    // Dependency Injected Modules in shared config registry
    Config.getConfigFromRegistry<PrettierConfigBase>('prettier')?.addIgnoreEntries(this.config.update as string[]);
  }

  /**
   * @override
   */
  protected get _config(): ConfigContent {
    return {
      devDependencies: [
        '@typescript-eslint/eslint-plugin@^8',
        '@typescript-eslint/parser@^8',
        'eslint@^9.17.0',
        'eslint-config-prettier@^9.1.0',
        'eslint-import-resolver-typescript@^3.6.3',
        'eslint-plugin-import@^2.31.0',
        'eslint-plugin-prettier@^5.2.1',
      ],
      scripts: {
        'eslint': 'eslint .',
      },
      update: [
        '/eslint.config.mjs',
      ],
    };
  }
}
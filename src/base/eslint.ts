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
        'eslint@^9.17.0',
        'typescript-eslint@^8.18.1',
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
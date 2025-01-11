import { TextFile } from 'projen';
import { ConfigContent, ConfigFile } from '../types';
import { Config } from './config';
import { TypeScriptProjectBase } from './project';
import { PrettierConfigBase } from './prettier';
import { NpmConfigJsii } from '../jsii';

/**
 * Base class for Husky implementing all relevant configuration.
 * @abstract
 */
export abstract class HuskyConfigBase extends Config {
  /**
   * @override 
   */
  constructor(project: TypeScriptProjectBase) {
    super(project);

    this.addConfigToRegistry('husky');
  }

  /**
   * Creates the config file for Husky config.
   * @protected
   */
  protected createConfigFiles(): void {
    for (const file of this.config.configFiles! as ConfigFile[]) {
      new TextFile(this.project, file.path, {
        lines: file.content as string[],
      });
    }
  }

  /**
   * @override
   */
  public setup(): void {
    // Dependency Injected Modules in shared config registry
    Config.getConfigFromRegistry<NpmConfigJsii>('npm')?.addDevDependencies(this.config.devDependencies!);
    Config.getConfigFromRegistry<NpmConfigJsii>('npm')?.addScripts(this.config.scripts!);
    Config.getConfigFromRegistry<PrettierConfigBase>('prettier')?.addIgnoreEntries(this.config.update as string[]);
  }

  /**
   * @override
   */
  protected get _config(): ConfigContent {
    return {
      devDependencies: [
        'husky@^9.1.7',
      ],
      scripts: {
        'prepare': 'husky || true',
      },
      configFiles: [{
        path: '.husky/commit-msg',
        content: ['npx --no-install commitlint --edit "$1"'],
      }, {
        path: '.husky/pre-commit',
        content: ['npx lint-staged'],
      }],
      update: [
        '/.husky/commit-msg',
        '/.husky/pre-commit'
      ],
    };
  }
}
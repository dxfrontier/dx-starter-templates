import { Config, NpmConfigBase } from '../base';
import { ConfigContent } from '../types';
import { PrettierConfigJsii } from './';

/**
 * NPM implementing all relevant configuration for the Jsii project.
 */
export class NpmConfigJsii extends NpmConfigBase {
  /**
   * @override
   */
  public setup(): void {
    this.addDevDependencies(this.config.devDependencies!);
    this.addPeerDependencies(this.config.peerDependencies!);
    this.addSettings(this.config.settings!);

    // Dependency Injected Modules in shared config registry
    Config.getConfigFromRegistry<PrettierConfigJsii>('prettier')?.addIgnoreEntries(this.config.update as string[]);
  }

  /**
   * @override
   */
  protected get _config(): ConfigContent {
    return {
      devDependencies: [
        'jsii@^5.7.4',
        'jsii-diff@^1.106.0',
        'jsii-docgen@^10.6.3',
        'jsii-pacmak@^1.106.0',
        'jsii-rosetta@^5.7.2',
      ],
      peerDependencies: [
        'constructs@^10.4.2',
        'projen@^0.91.6',
      ],
      settings: {
        files: ['lib', '.jsii', 'README.md']
      },
      update: [
        '*.snap',
        '/.projen/**',
        '/.projen/deps.json',
        '/.projen/files.json',
        '/.projen/tasks.json',
        '/package-lock.json',
        '/package.json',
        '/API.md',
      ],
    };
  }
}
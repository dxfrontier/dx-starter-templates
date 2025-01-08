import { javascript } from 'projen';
import { NpmConfigBase } from '../base';
import { ProjectStartupOptions } from '../types';

/**
 * NPM implementing all relevant configuration for the Jsii project.
 */
export class NpmConfigJsii extends NpmConfigBase {
  /**
   * @override
   */
  public static get projectOptions(): ProjectStartupOptions {
    return {
      licensed: false,
      packageManager: javascript.NodePackageManager.NPM,
      npmignoreEnabled: false,
    };
  }

  /**
   * @override
   */
  protected get configFilePath(): string[] {
    return [];
  }

  /**
   * @override
   */
  protected get config(): string[] {
    return [];
  }

  /**
   * @override
   */
  protected createConfig(): void {}
  
  /**
   * @override
   */
  public setup(): void {
    super.setup();
    this.addDevDependencies([
      '@types/node@^22.10.5',
      'jsii@^5.7.4',
      'jsii-diff@^1.106.0',
      'jsii-docgen@^10.6.1',
      'jsii-pacmak@^1.106.0',
      'jsii-rosetta@^5.7.2',
      'ts-node@^10.9.2',
    ]);

    this.addPeerDependencies([
      'constructs@^10.4.2',
      'projen@^0.91.5',
    ]);
  };
}
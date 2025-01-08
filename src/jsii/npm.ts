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
   * Use Projen standard TypeScript configuration.
   */
  protected get configFilePath(): string[] {
    return [];
  }

  /**
   * @override
   * Use Projen standard TypeScript configuration.
   */
  protected get config(): string[] {
    return [];
  }

  /**
   * @override
   * Use Projen standard TypeScript configuration.
   */
  protected createConfig(): void {}

  /**
   * Development dependencies for the configuration module.
   * @protected
   */
  protected get devDependencies(): string[] {
    return [
      'jsii@^5.7.4',
      'jsii-diff@^1.106.0',
      'jsii-docgen@^10.6.1',
      'jsii-pacmak@^1.106.0',
      'jsii-rosetta@^5.7.2',
    ];
  }

  /**
   * Peer dependencies for the configuration module.
   * @protected
   */
  protected get peerDependencies(): string[] {
    return [
      'constructs@^10.4.2',
      'projen@^0.91.5',
    ];
  }
  
  /**
   * @override
   */
  public setup(): void {
    super.setup();
    
    this.addDevDependencies(this.devDependencies);
    this.addPeerDependencies(this.peerDependencies);
  };
}
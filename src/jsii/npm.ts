import { javascript } from 'projen';
import { NpmConfigBase } from '../base';
import { ConfigContent, ProjectOptions } from '../types';

/**
 * NPM implementing all relevant configuration for the Jsii project.
 */
export class NpmConfigJsii extends NpmConfigBase {
  /**
   * @override
   */
  public static get projectOptions(): ProjectOptions {
    return {
      licensed: false,
      packageManager: javascript.NodePackageManager.NPM,
      npmignoreEnabled: false,
    };
  }

  /**
   * @override
   */
  protected get config(): ConfigContent {
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
      }
    };
  }
  
  /**
   * @override
   */
  public setup(): void {
    this.addDevDependencies(this.config.devDependencies!);
    this.addPeerDependencies(this.config.peerDependencies!);
    this.addSettings(this.config.settings!);
  }
}
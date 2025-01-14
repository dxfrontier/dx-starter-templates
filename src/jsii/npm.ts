import { JsiiProject } from '.';
// import { Config, NonProjenNpmBaseConfigStrategy, NpmBaseConfig, ProjenStandardNpmBaseConfigStrategy, NonApiNpmBaseConfigStrategy } from '../base';
import { NpmBaseConfig, Settings } from '../base';


/**
 * Implementing all relevant NPM configuration for the Jsii project.
 * @extends NpmBaseConfig
 */
export class NpmConfigJsii extends NpmBaseConfig<JsiiProject> {
  constructor(project: JsiiProject) {
    super(project);
  }

  private get additionalDevDependencies(): string[] {
    return [
      'jsii@^5.7.4',
      'jsii-diff@^1.106.0',
      'jsii-docgen@^10.6.3',
      'jsii-pacmak@^1.106.0',
      'jsii-rosetta@^5.7.2',
    ];
  }

  private get additionalPeerDependencies(): string[] {
    return [
      'constructs@^10.4.2',
      'projen@^0.91.6',
    ];
  }

  private get additionalSettings(): Settings {
    return {
      'files': ['lib', '.jsii', 'README.md'],
      'test': {
        'outdir': 'dist',
        'targets': {},
        'tsc': {
          'outDir': 'lib',
          'rootDir': 'src'
        }
      },
    }
  }

  public override registerConfig(): void {
    this.addDevDependencies(this.additionalDevDependencies);
    this.addPeerDependencies(this.additionalPeerDependencies);
    this.addSettings(this.additionalSettings);
  }
}

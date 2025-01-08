// import { TypescriptConfig } from 'projen/lib/javascript';
import { JsonFile } from 'projen';
import { Config } from './config';
import { NpmConfigBase } from './npm';
import { TypeScriptProjectBase } from './project';
// import { ProjenStandardScript } from '../types';

/**
 * Base class for TypeScript implementing all relevant configuration.
 * @abstract
 * @extends Config
 */
export abstract class TypeScriptConfigBase extends Config {
  protected npmConfig: NpmConfigBase | undefined = this.configRegistry.get('npm') as NpmConfigBase;

  /**
   * @override 
   */
  constructor(project: TypeScriptProjectBase) {
    super(project);

    this.addConfigToRegistry('typescript');
  }

  /**
   * @override
   */
  protected get deleteConfigFilePaths(): string[] {
    return ['tsconfig.json', 'tsconfig.dev.json'];
  }

  /**
   * @override
   */
  protected get configFilePath(): string {
    return 'tsconfig.json';
  }

  /**
   * @override
   */
  protected createConfig(): void {
    new JsonFile(this.project, this.configFilePath, {
      obj: this.config,
      marker: false,
    });
  }

  /**
   * Development dependencies for the configuration module.
   * @protected
   */
  protected get devDependencies(): string[] {
    return ['typescript@^5.7.2'];
  }

  /**
   * @override
   * We do not call `createConfig` here because we use Projen standard TypeScript configuration.
   */
  public setup(): void {
    // this.createConfig();
    
    this.npmConfig?.addDevDependencies(this.devDependencies);
  }
}
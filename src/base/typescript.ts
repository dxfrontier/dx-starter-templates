import { ConfigContent, ProjectOptions } from '../types';
import { Config } from './config';
import { NpmConfigBase } from './npm';
import { TypeScriptProjectBase } from './project';

/**
 * Base class for TypeScript implementing all relevant configuration.
 * @abstract
 * @extends Config
 */
export abstract class TypeScriptConfigBase extends Config {
  protected npmConfig: NpmConfigBase | undefined = Config.configRegistry.get('npm') as NpmConfigBase;

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
  public static get projectOptions(): ProjectOptions {
    return {
      tsconfig: {
        compilerOptions: {
          allowImportingTsExtensions: true,
        },
      },
    };
  }
  
  /**
   * @override
   */
  protected get config(): ConfigContent {
    return {
      devDependencies: [
        'typescript@^5.7.3',
        '@types/node@^22.10.5',
        'ts-node@^10.9.2',
      ]
    };
  }

  /**
   * @override
   */
  public setup(): void {
    this.addConfig();
  }
}
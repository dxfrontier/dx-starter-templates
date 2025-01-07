// import { TypescriptConfig } from 'projen/lib/javascript';
import { SampleFile } from 'projen';
import { Config } from './config';
// import { ProjenStandardScript } from '../types';

/**
 * Base class for TypeScript implementing all relevant configuration.
 * @abstract
 * @extends Config
 */
export abstract class TypeScriptConfigBase extends Config {
  /**
   * @override
   */
  protected get deleteConfigFilePaths(): string[] {
    return ['tsconfig.json', 'tsconfig.dev.json'];
  }

  /**
   * File path to TypeScript config file.
   * @return File path to config file.
   * @protected
   */
  protected get configFilePath(): string {
    return 'tsconfig.json';
  }

  /**
   * TypeScript config.
   * @return TypeScript config options as array lines or record entries.
   * @protected
   * @abstract
   */
  protected abstract get tsConfig(): string[] | Record<string, unknown>;

  /**
   * Creates the Config file for the TypeScript configuration.
   * @protected
   */
  protected createConfig(): void {
    new SampleFile(this.project, this.configFilePath, {
      contents: (this.tsConfig as string[]).join('\n'),
    });
  }

  /**
   * @override
   */
  public setup(): void {
    super.setup();
    this.createConfig();
  }
}
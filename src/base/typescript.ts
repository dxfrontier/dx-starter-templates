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
    return [];
  }

  /**
   * File path to TypeScript config file.
   * @return File path to config file.
   * @protected
   * @abstract
   */
  protected abstract get configFilePath(): string;

  /**
   * TypeScript config.
   * @return TypeScript config options.
   * @protected
   * @abstract
   */
  protected abstract get tsConfig(): string[];

  /**
   * Creates the Config file for the TypeScript configuration.
   * @protected
   */
  protected createConfig(): void {
    new SampleFile(this.project, this.configFilePath, {
      contents: this.tsConfig.join('\n'),
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
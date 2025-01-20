import { ProjectTypes, Settings } from '../types';
import { isValidProject } from '../utils';
import { Config } from './config';

/**
 * Base class for implementing all relevant TypeScript configuration.
 *
 * This class acts as a base for handling TypeScript configuration within projects.
 */
export class TypeScriptConfigBase extends Config {
  /**
   * Gets the additional development dependencies required for configuration.
   *
   * @returns A list of package names with version specifications.
   */
  protected get additionalDevDependencies(): string[] {
    return ['typescript@^5.7.3', '@types/node@^22.10.6', 'ts-node@^10.9.2'];
  }

  /**
   * Gets additional ignore patterns to be added to the project's ignore configuration.
   *
   * @returns A list of ignore patterns.
   */
  protected get additionalIgnorePatterns(): string[] {
    const filePath: string = Object.keys(this.configFile)[0];
    return [`/${filePath}`];
  }

  /**
   * Gets the configuration file content.
   *
   * @returns An object where the key is the filename and the value is an array of file lines.
   */
  protected get configFile(): Record<string, Settings> {
    return {
      'tsconfig.json': {},
    };
  }

  /**
   * Retrieves the name to the TypeScript config file.
   *
   * @returns The name of the TypeScript config file.
   */
  public get configFileName(): string {
    return Object.keys(this.configFile)[0];
  }

  public override registerConfig(): void {
    if (isValidProject(this.project)) {
      (this.project as ProjectTypes).npmConfig?.addDevDependencies(this.additionalDevDependencies);
      (this.project as ProjectTypes).prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
    }
  }
}

import { Config } from './config';
// import { ProjenStandardScript } from '../types';

/**
 * Base class for NPM implementing all relevant configuration.
 * @abstract
 */
export abstract class NpmConfigBase extends Config {
  protected get deleteConfigFilePaths(): string[] {
    return [];
  }

  /**
   * Installs development dependencies for the config in the project.
   * @public
   */
  public addDevDependencies(dependencies: string[]): void {
    this.project.addDevDeps(...dependencies);
  }

  /**
   * Installs peer dependencies for the config in the project.
   * @public
   */
  public addPeerDependencies(dependencies: string[]): void {
    this.project.addPeerDeps(...dependencies);
  }

  /**
   * Installs dependencies for the config in the project.
   * @public
   */
  public addDependencies(dependencies: string[]): void {
    this.project.addDeps(...dependencies);
  }
}
import { TypeScriptProjectBase } from './project';
import fs from 'fs';

/**
 * Base class for creating project configurations.
 * @abstract
 */
export abstract class Config {
  protected project: TypeScriptProjectBase;

  /**
   * Initializes the config for a specified project.
   * @param project The project to configure the manager for.
   */
  constructor(project: TypeScriptProjectBase) {
    this.project = project;
  }

  /**
   * File paths to be removed for the specific configuration.
   * @return File paths to projen config files to be deleted.
   * @protected
   * @abstract
   */
  protected abstract get deleteConfigFilePaths(): string[];
  
  /**
   * Deletes config files from projen project structure.
   * We do this as we setup a complete fresh project without using projen standard files
   * as this would restrict us in setting up a fresh config and it would keep the projen markers.
   * @protected
   */
  protected deleteConfigFiles(): void {
    for (const path of this.deleteConfigFilePaths) {
      try {
        this.project.tryRemoveFile(path);
        // we delete the file from the file system as well
        // as the tryRemoveFile method does not delete the file necessarily
        // but only removes it from the projen internal file list
        fs.unlinkSync(path);
      } catch (err: unknown) {
        console.error(`Error deleting file: ${path}`);
        console.error(err);
      }
    }
  };

  /**
   * Set up the configuration for the project.
   * This method is called from outside in project instantiation.
   * @public
   */
  public setup(): void {
    this.deleteConfigFiles();
  };
}

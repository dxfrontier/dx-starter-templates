import { FileBase } from 'projen';
import { TypeScriptProjectBase } from './project';
import fs from 'fs';

/**
 * Base class for creating project configurations.
 * @abstract
 */
export abstract class Config {
  protected project: TypeScriptProjectBase;

  /**
   * Internal property to store the content of deleted files.
   * The key is the file path, and the value is the file content.
   */
  protected readonly deletedFileContents: Map<string, string | null> = new Map();

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
   * Deleted file contents.
   * @returns File paths and their content or null for projen files.
   * @protected
   */
  protected get deletedConfigFileContents(): Map<string, string | null> {
    return this.deletedFileContents;
  }

  /**
   * Deletes configuration files from the Projen project structure.
   * 
   * This method is responsible for removing the specified configuration files,
   * which are defined by `deleteConfigFilePaths`. It handles both Projen-managed
   * files and non-Projen files in the project.
   * 
   * - If the file is managed by Projen, the method tries to find it using
   *   `tryFindFile` and, if found, removes it from the project and stores its
   *   content for potential backup or inspection.
   * - For non-Projen files, the method directly checks if the file exists
   *   on the file system, reads its content, stores it in the `deletedFileContents`
   *   map, and then deletes it from the file system.
   * 
   * The file contents are stored as a key-value pair in the `deletedFileContents`
   * map, where the key is the file path and the value is the content of the file
   * (for Projen-managed files, the content is also stored).
   * 
   * This process helps ensure that we can set up a fresh configuration by removing
   * old Projen configuration files, which may have restrictions due to Projen markers
   * or previous setups, allowing for a clean project state.
   * 
   * @protected
   * @see `deleteConfigFilePaths` for the list of files to be deleted.
   * @see `deletedFileContents` for storing the contents of the deleted files.
   * 
   * @throws {Error} Will log any errors encountered during the file deletion process.
   */
  protected deleteConfigFiles(): void {
    for (const path of this.deleteConfigFilePaths) {
      const fb: FileBase | undefined = this.project.tryFindFile(path);
      if (fb) {
        const content = fs.readFileSync(path, 'utf-8');
        this.deletedFileContents.set(path, content);
        this.project.tryRemoveFile(path);
        return;
      }

      try {
        // In case it was not a projen controlled file
        // then the file is deleted directly.
        if (fs.existsSync(path)) {
          fs.unlinkSync(path);
        }
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

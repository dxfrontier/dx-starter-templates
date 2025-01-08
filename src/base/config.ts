import { FileBase } from 'projen';
import { TypeScriptProjectBase } from './project';
import type { ConfigRegistry, ProjectStartupOptions } from '../types';
import fs from 'fs';

/**
 * Base class for creating project configurations.
 * @abstract
 */
export abstract class Config {
  protected project: TypeScriptProjectBase;

  /**
   * Register each configuration module in the internal registry.
   * This enables dependency injection without explicitly passing relevant
   * config modules to each consuming config module.
   * 
   * The key is the name of the configuration module, and the value is the configuration module itself.
   */
  private static registry: ConfigRegistry = new Map();
  
  /**
   * Initializes the config for a specified project.
   * @param project The project to configure the manager for.
   */
  constructor(project: TypeScriptProjectBase) {
    this.project = project;
  }

  /**
   * Project options for the configuration module.
   * These options are used in the project instantiation.
   * @returns 
   */
  public static get projectOptions(): ProjectStartupOptions {
    return {};
  }

  /**
   * Central config registry.
   * @return Central config registry.
   * @public
   * @static
   */
  public static get configRegistry(): ConfigRegistry {
    return Config.registry;
  }

  /**
   * Adds configuration module to config registry.
   * @param name The name of the configuration module.
   * @protected
   * 
   */
  protected addConfigToRegistry(name: string): void {
    Config.registry.set(name, this);
  }

  /**
   * File paths to be removed for the specific configuration.
   * @return File paths to Projen config files to be deleted.
   * @protected
   * @abstract
   */
  protected abstract get deleteConfigFilePaths(): string[];
  
  /**
   * Deletes configuration files from the Projen project structure.
   * 
   * This method is responsible for removing the specified configuration files,
   * which are defined by `deleteConfigFilePaths`. It handles both Projen-managed
   * files and non-Projen files in the project.
   * 
   * - If the file is managed by Projen, the method tries to find it using
   *   `tryFindFile` and, if found, removes it from the project.
   * - For non-Projen files, the method directly checks if the file exists
   *   on the file system, and then deletes it from the file system.
   * 
   * @protected
   * @see `deleteConfigFilePaths` for the list of files to be deleted.
   * 
   * @throws {Error} Will log any errors encountered during the file deletion process.
   */
  protected deleteConfigFiles(): void {
    for (const path of this.deleteConfigFilePaths) {
      const fb: FileBase | undefined = this.project.tryFindFile(path);
      if (fb) {
        this.project.tryRemoveFile(path);
        return;
      }

      try {
        // In case it was not a Projen controlled file
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
   * File path(s) to configuration module config file(s).
   * @return File path(s) to config file(s).
   * @protected
   * @abstract
   */
  protected abstract get configFilePath(): string | string[];

  /**
   * Config for configuration module.
   * @return TypeScript config file contents/settings as array lines or record entries.
   * @protected
   * @abstract
   */
  protected abstract get config(): string[] | Record<string, unknown>;

  /**
   * Creates the config file(s)/settings for the TypeScript configuration.
   * Should use `config` to create the configuration file(s)/settings.
   * @protected
   * @abstract
   * @see `config` for the TypeScript configuration settings.
   */
  protected abstract createConfig(): void;

  /**
   * Set up the configuration for the project.
   * This method is called from outside in project instantiation
   * to guarantee that all configuration modules are set up before
   * `setup()` is called as we could have dependencies between them.
   * @public
   * @abstract
   */
  public abstract setup(): void;
}

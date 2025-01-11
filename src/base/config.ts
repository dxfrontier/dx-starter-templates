import { TypeScriptProjectBase } from './project';
import type { ConfigContent, ConfigKey, ConfigRegistry, ProjectOptions } from '../types';

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
   * The base instantiation runs config and ignore file creation.
   * Subclasses should overwrite the base `createConfigFile` and `createIgnoreFile`
   * to define their specific configuration using the `config` property.
   * 
   * @see `createConfigFile`
   * @see `createIgnoreFile`
   * @see `config`
   * @param project The project to configure the manager for.
   */
  constructor(project: TypeScriptProjectBase) {
    this.project = project;

    this.createConfigFile();
    this.createIgnoreFile();
  }

  /**
   * Project options for the configuration module.
   * These options are used in the project instantiation.
   * Subclasses should overwrite this to define their specific configuration.
   * @returns 
   */
  public static get projectOptions(): ProjectOptions {
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
  protected addConfigToRegistry(name: ConfigKey): void {
    Config.registry.set(name, this);
  }

  /**
   * Retrieves a configuration module from the registry by name.
   * The return type is inferred based on the key provided.
   * @param name The name of the configuration module.
   * @returns The configuration module, or undefined if not found.
   * @protected
   */
  protected getConfigFromRegistry<T extends Config>(name: string): T | null {
    return Config.registry.get(name) as T | null;
  }

  /**
   * Creates the config file for configuration module using `config` property.
   * Subclasses should overwrite this to define their specific configuration.
   * @protected
   * @see `config`
   */
  protected createConfigFile(): void { }

  /**
   * Creates the ignore file for configuration module using `config` property.
   * Subclasses should overwrite this to define their specific configuration.
   * @see `config`
   */
  protected createIgnoreFile(): void { }

  /**
   * Set up the configuration for the project.
   * This method is called from outside in project instantiation
   * to guarantee that all configuration modules are set up before
   * `setup()` is called as we could have dependencies between them.
   * Subclasses should overwrite this to define their specific configuration.
   * @public
   */
  public setup(): void { }

  /**
   * Provides the configuration content.
   * Subclasses should overwrite this to define their specific configuration.
   * @return A unified configuration object containing all configuration.
   * @protected
   * @abstract
   * @description move the config function to the bottom of the class, as it can get quite big.
   */
  protected abstract get config(): ConfigContent;
}

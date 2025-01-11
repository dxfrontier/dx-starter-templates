import { TypeScriptProjectBase } from './project';
import type { ConfigContent, ConfigKey, ConfigRegistry, ProjectOptions } from '../types';

/**
 * Base class for creating and managing project configurations in a modular way.
 * Follows a 3-step lifecycle for configuration setup and file generation:
 * 
 * 1. **Instantiation**: Each subclass config module is registered in the shared registry and internal config `_config` is made public `config`.
 * 2. **Setup**: The `setup()` method allows configuration changes, leveraging public APIs from other modules.
 * 3. **Pre-Synthesize**: Creates the config and ignore files before Projen synthesis.
 * @abstract
 * @see `setup()`
 * @see `preSynthesize`
 * @see `_config`
 */
export abstract class Config {
  protected project: TypeScriptProjectBase;

  /**
   * Altered configuration for config file creation.
   * Combines initial internal module config `_config`
   * and altered config from public API.
   */
  protected config: ConfigContent = {};
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
   * The internal configuration of a config module is made public to be altered.
   * Each subclass should register itself in the shared config registry.
   * @param project The project to configure the manager for.
   */
  constructor(project: TypeScriptProjectBase) {
    this.project = project;
    this.config = this._config;
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
   * @public
   * @static
   */
  public static getConfigFromRegistry<T extends Config>(name: string): T | null {
    return Config.registry.get(name) as T | null;
  }

  /**
   * Creates the config file(s) for configuration module using `config` property.
   * Subclasses should overwrite this to define their specific configuration.
   * @protected
   * @see `config`
   */
  protected createConfigFiles(): void { }

  /**
   * Creates the ignore file for configuration module using `config` property.
   * Subclasses should overwrite this to define their specific configuration.
   * @see `config`
   */
  protected createIgnoreFile(): void { }

  /**
   * Set up the configuration for the project.
   * This method is called from outside in project instantiation
   * to guarantee that all configuration modules are instantiated 
   * and registered in the registry before `setup()` is called.
   * This allows usage of public API of each module from other modules.
   * Subclasses should overwrite this to define their specific configuration.
   * @public
   */
  public setup(): void { }

  /**
   * Hook to be called before synthesis.
   * The base instantiation runs config and ignore file creation before synthesis is done by Projen.
   * Subclasses should overwrite the base `createConfigFiles` and `createIgnoreFile`
   * to define their specific configuration using the `config` property.
   * 
   * @see `createConfigFiles`
   * @see `createIgnoreFile`
   * @see `config`
   * @public
   */
  public preSynthesize(): void {
    this.createConfigFiles();
    this.createIgnoreFile();
  }

  /**
   * Hook to be called after synthesis.
   * @public
   */
  public postSynthesize(): void { }

  /**
   * Provides the internal module configuration content.
   * Subclasses should overwrite this to define their specific initial configuration.
   * Altering the overall configuration (e.g. with configuration from other modules injected by public API) will be stored in `config`.
   * @return A unified configuration object containing all configuration.
   * @protected
   * @abstract
   * @description move the config function to the bottom of the class, as it can get quite bi
   */
  protected get _config(): ConfigContent {
    return {};
  }
}

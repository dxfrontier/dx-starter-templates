import { TypeScriptProjectBase } from './project';
import type { ConfigContent, ConfigRegistry, ProjectOptions } from '../types';

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
  protected addConfigToRegistry(name: string): void {
    Config.registry.set(name, this);
  }

  /**
   * Provides the configuration content.
   * Subclasses should overwrite this to define their specific configuration.
   * @return A unified configuration object containing all configuration.
   * @protected
   */
  protected get config(): ConfigContent {
    return {};
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
   * @protected
   * @see `config`
   */
  protected createIgnoreFile(): void { }

  /**
   * Set up the configuration for the project.
   * This method is called from outside in project instantiation
   * to guarantee that all configuration modules are set up before
   * `setup()` is called as we could have dependencies between them.
   * 
   * The basic setup runs config and ignore file creation.
   * Subclasses should overwrite the base `createConfigFile` and `createIgnoreFile`
   * to define their specific configuration using the `config` property.
   * @public
   * @see `createConfigFile`
   * @see `createIgnoreFile`
   * @see `config`
   */
  public setup(): void {
    this.createConfigFile();
    this.createIgnoreFile();
  }
}

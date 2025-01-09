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
   * Subclasses should override this to define their specific configuration.
   *
   * @return A unified configuration object containing all settings.
   * @protected
   * @abstract
   */
  protected abstract get config(): ConfigContent;

  // /**
  //  * Adds config file(s)/settings for the configuration module.
  //  * Should use `config` to create the configuration file(s)/settings.
  //  * @protected
  //  * @abstract
  //  * @see `config` for the configuration module settings.
  //  */
  // protected abstract addConfig(): void;

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

import { Component } from 'projen';
import { BaseProject } from './project';
import { JsiiProject } from '../jsii';

/**
 * Marker interface for all configurations.
 * This interface serves as a base for defining configuration objects
 * that can be applied to projects. It doesn't impose any structure
 * but signals that a class is related to a project configuration.
 */
export interface BaseConfig {}

/**
 * Interface defining the strategy for applying configurations to projects.
 * Implementing classes must provide the logic for how the configuration
 * is applied to the project.
 */
export interface ConfigStrategy {
  applyConfig(config: BaseConfig): void;
}

/**
 * Base class for creating and managing project configurations.
 * This class allows configuring a project using different strategies.
 * It requires the project to be either a `BaseProject` or `JsiiProject`.
 */
export class Config<T extends BaseProject | JsiiProject> extends Component implements BaseConfig {
  public project: T;

  /**
   * The strategy for applying the configuration to the project.
   * This is set privately to allow customization in subclasses.
   * @private
   * @see `setStrategy` for setting the strategy.
   */
  private strategy?: ConfigStrategy;

  /**
   * Initializes the config for a specified project.
   * @param project The project to configure the configuration module for.
   */
  constructor(project: T) {
    super(project);
    this.project = project;
  }

  /**
   * Sets the configuration strategy to be used for the project.
   * The strategy defines how the project configuration will be applied.
   * This setter allows subclasses to define their own strategies without
   * needing to define them in every instance.
   * @param strategy The strategy to apply to the project.
   *
   * @example
   * const config = new Config(myProject);
   * config.setStrategy(new MyCustomConfigStrategy());
   */
  protected setStrategy(strategy: ConfigStrategy): void {
    this.strategy = strategy;
  }

  /**
   * Registers config to other configuration modules.
   * Public API call addressing other modules should be performed here,
   * to guarantee proper configuration handling.
   *
   * This methods should be called only in the projects `preSynthesize` phase
   * and not on the configuration modules `preSynthesize` function otherwise
   * it is not guaranteed that all needed modules are setup properly.
   */
  public registerConfig(): void {
    // do api calls to other configuration modules here.
  }

  /**
   * Applies the current configuration based on the strategy to the project.
   * This method uses the strategy set using `setStrategy`.
   *
   * It is important that the strategy is set using `setStrategy` in each subclass
   * that defines a custom configuration strategy.
   *
   * To ensure proper configuration handling, the strategy should be set in the constructor
   * of each subclass, and `applyConfig` should be called in `preSynthesize` phase of
   * the configuration module and not from project itself.
   *
   */
  public applyConfig(): void {
    if (!this.strategy) {
      console.debug(`Strategy not set for ${this.constructor.name}`);
    }

    this.strategy?.applyConfig(this);
  }

  public override preSynthesize(): void {
    this.applyConfig();
    super.preSynthesize();
  }

  public override postSynthesize(): void {
    super.postSynthesize();
  }
}

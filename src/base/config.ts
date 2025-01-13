import { Component } from 'projen';
import { BaseProject } from './project';
import { JsiiProject } from '../jsii';

export interface ConfigStrategy<T extends BaseProject | JsiiProject> {
  applyConfig(project: T): void;
}

/**
 * Base class for creating and managing project configurations.
 */
export class Config<T extends BaseProject | JsiiProject> extends Component {
  public project: T;

  /**
   * Strategy is set privately so that subclasses can customize it through the setter method.
   * The strategy defines how the configuration is applied to the project.
   * @private
   * @see `setStrategy` for setting the strategy.
   */
  private strategy?: ConfigStrategy<T>;

  /**
   * Initializes the config for a specified project.
   * @param project The project to configure the configuration module for.
   */
  constructor(project: T) {
    super(project);
    this.project = project;
  }

  public override preSynthesize(): void {
    super.preSynthesize();
  }

  public override postSynthesize(): void {
    super.postSynthesize();
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
  protected setStrategy(strategy: ConfigStrategy<T>) {
    this.strategy = strategy;
  }

  /**
  * Applies the current configuration strategy to the project.
  * This method is responsible for applying the strategy set using `setStrategy`. 
  * 
  * It is important that the strategy is set using `setStrategy` in each subclass 
  * that defines a custom configuration strategy. However, the `applyConfig` method 
  * should only be invoked in the last child class in the hierarchy. If `applyConfig` 
  * is called in any preceding class in the chain, the configuration from that class 
  * will be applied twice, leading to redundant or conflicting configurations.
  * 
  * To ensure proper configuration handling, the strategy should be set in the constructor 
  * of each subclass, and `applyConfig` should be called only once, in the final subclass.
  * 
  * @throws Will throw an error if the strategy has not been set using `setStrategy`.
  * 
  * @example
  * ```
  * typescript
  * // Base class sets a default strategy
  * class BaseConfig extends Config<BaseProject> {
  *   constructor(project: BaseProject) {
  *     super(project);
  *     this.setStrategy(new BaseConfigStrategy());
  *   }
  * }
  * 
  * // Subclass extends the base class with its own strategy
  * class SubConfig extends BaseConfig {
  *   constructor(project: BaseProject) {
  *     super(project);
  *     this.setStrategy(new SubConfigStrategy());
  *   }
  * 
  *   public override applyConfig() {
  *     super.applyConfig(); // Called only here in the last child class
  *   }
  * }
  * 
  * const project = new BaseProject(...);
  * const config = new SubConfig(project);
  * config.applyConfig(); // Applies only the SubConfigStrategy, avoiding duplication.
  * ```
  */
  protected applyConfig() {
    if (!this.strategy) {
      throw new Error("Strategy not set");
    }
    this.strategy.applyConfig(this.project);
  }
}
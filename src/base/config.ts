import { Component } from 'projen';
import { BaseProject } from './project';

export interface ConfigStrategy {
  applyConfig(project: any): void;
}

/**
 * Base class for creating and managing project configurations.
 */
export class Config extends Component implements ConfigStrategy {
  public project: BaseProject;

  /**
   * Initializes the config for a specified project.
   * @param project The project to configure the configuration module for.
   */
  constructor(project: BaseProject) {
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
   * Apply all relevant config for the configuration module.
   * SubClasses should overwrite this to apply module specific configuration.
   */
  public applyConfig(): void { };
}

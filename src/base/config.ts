import { Component } from 'projen';
import { BaseProject } from './project';

/**
 * Base class for creating and managing project configurations.
 */
export class Config extends Component {
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
}

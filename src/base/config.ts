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
}
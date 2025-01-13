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
  protected strategy: ConfigStrategy<T>;

  /**
   * Initializes the config for a specified project.
   * @param project The project to configure the configuration module for.
   */
  constructor(project: T) {
    super(project);
    this.project = project;

    this.strategy = new BaseConfigStrategy();
  }

  public override preSynthesize(): void {
    super.preSynthesize();
  }

  public override postSynthesize(): void {
    super.postSynthesize();
  }
}

export class BaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy<T> {
  applyConfig(_project: T): void {
    console.log('base strategy')
  }
}
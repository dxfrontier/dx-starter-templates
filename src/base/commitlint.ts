import { JsiiProject } from '../jsii';
import { Config, ConfigStrategy } from './config';
import { BaseProject } from './project';

/**
 * Base class for implementing all relevant CommitLint configuration.
 * 
 * This class acts as a base for handling CommitLint configuration within projects
 * that extend either `BaseProject` or `JsiiProject`. It determines the configuration
 * strategy to use based on whether Projen is being used.
 * 
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 * @extends Config
 */
export class CommitLintBaseConfig<T extends BaseProject | JsiiProject> extends Config<T> {
  constructor(project: T, useProjen: boolean) {
    super(project);

    const strategy = useProjen
      ? new ProjenTrackedCommitLintBaseConfigStrategy()
      : new NonProjenCommitLintBaseConfigStrategy();

    this.setStrategy(strategy);
  }

  public override preSynthesize(): void {
    super.preSynthesize();
  }

  public override postSynthesize(): void {
    super.postSynthesize();
  }
}

/**
 * Configuration strategy for Projen-tracked CommitLint base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class ProjenTrackedCommitLintBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  writeConfig(_config: Config<T>): void {}
}

/**
  * Applies the Projen-based CommitLint configuration to the project.
  * @param project - The project instance.
  * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
  */
export class NonProjenCommitLintBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  writeConfig(_config: Config<T>): void {}
}

import { JsiiProject } from '../jsii';
import { Config, ConfigStrategy } from './config';
import { BaseProject } from './project';

/**
 * Base class for implementing all relevant NPM configuration.
 * @extends Config
 */
export class NpmBaseConfig<T extends BaseProject | JsiiProject> extends Config<T> {
  protected strategy: ConfigStrategy<T>;

  constructor(project: T, useProjen: boolean) {
    super(project);

    this.strategy = useProjen
      ? new ProjenTrackedNpmBaseConfigStrategy<T>()
      : new NonProjenNpmBaseConfigStrategy<T>();
  }

  public override preSynthesize(): void {
    super.preSynthesize();
    this.strategy.applyConfig(this.project);
  }

  public override postSynthesize(): void {
    super.postSynthesize();
  }
}

export class ProjenTrackedNpmBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy<T> {
  applyConfig(_project: T): void {
    console.log('npm - JsonFile')
  }
}

export class NonProjenNpmBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy<T> {
  applyConfig(_project: T): void {
    console.log('npm - SampleFile')
  }
}

import { Config } from './config';
import { BaseProject } from './project';

/**
 * Base class for implementing all relevant Jest configuration.
 * @extends Config
 */
export class JestBaseConfig extends Config {
  constructor(project: BaseProject) {
    super(project);
  }

  public override preSynthesize(): void {
    super.preSynthesize();
  }

  public override postSynthesize(): void {
    super.postSynthesize();
  }
}

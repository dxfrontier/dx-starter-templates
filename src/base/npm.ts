import { Config } from './config';
import { BaseProject } from './project';

/**
 * Base class for NPM implementing all relevant configuration.
 * @extends Config
 */
export class NpmBaseConfig extends Config {
  constructor(project: BaseProject) {
    super(project);
  }

  public override preSynthesize(): void {
    super.preSynthesize();
    console.log('NpmBaseConfig preSynthesize')
  }

  public override postSynthesize(): void {
    super.postSynthesize();
    console.log('NpmBaseConfig postSynthesize')
  }
}

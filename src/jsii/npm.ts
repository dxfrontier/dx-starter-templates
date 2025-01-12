import { NpmBaseConfig } from '../base';

/**
 * NPM implementing all relevant configuration for the Jsii project.
 * @extends NpmBaseConfig
 */
export class NpmConfigJsii extends NpmBaseConfig {
  public override preSynthesize(): void {
    super.preSynthesize();
    console.log('NpmConfigJsii preSynthesize')
  }

  public override postSynthesize(): void {
    super.postSynthesize();
    console.log('NpmConfigJsii postSynthesize')
  }
}
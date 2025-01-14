import { JsiiProject } from '.';
// import { Config, NonProjenNpmBaseConfigStrategy, NpmBaseConfig, ProjenStandardNpmBaseConfigStrategy, ProjenTrackedNpmBaseConfigStrategy } from '../base';
import { NpmBaseConfig } from '../base';


/**
 * Implementing all relevant NPM configuration for the Jsii project.
 * @extends NpmBaseConfig
 */
export class NpmConfigJsii extends NpmBaseConfig<JsiiProject> {
  constructor(project: JsiiProject, useProjen: boolean, useProjenApi: boolean) {
    super(project, useProjen, useProjenApi);

    // const strategy = useProjen && useProjenApi
    //   ? new ProjenStandardConfigStrategy()
    //   : useProjen && !useProjenApi
    //     ? new ProjenTrackedConfigStrategy()
    //     : new NonProjenConfigStrategy();
    // this.setStrategy(strategy);
  }
}

// class ProjenStandardConfigStrategy extends ProjenStandardNpmBaseConfigStrategy<JsiiProject> {
//   writeConfig(config: Config<JsiiProject>): void {
//     super.writeConfig(config);
//     console.log('npm Jsii- Projen API')
//   }
// }

// class ProjenTrackedConfigStrategy extends ProjenTrackedNpmBaseConfigStrategy<JsiiProject> {
//   writeConfig(config: Config<JsiiProject>): void {
//     super.writeConfig(config);
//     console.log('npm Jsii - JsonFile')
//   }
// }

// class NonProjenConfigStrategy extends NonProjenNpmBaseConfigStrategy<JsiiProject> {
//   writeConfig(config: Config<JsiiProject>): void {
//     super.writeConfig(config);
//     console.log('npm Jsii - SampleFile')
//   }
// }
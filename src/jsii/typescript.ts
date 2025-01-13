import { JsiiProject } from '.';
import { /*ConfigStrategy, */TypeScriptBaseConfig } from '../base';

/**
 * Implementing all relevant TypeScript configuration for the Jsii project.
 * @extends TypeScriptBaseConfig
 */
export class TypeScriptConfigJsii extends TypeScriptBaseConfig<JsiiProject> {
  constructor(project: JsiiProject, _useProjen: boolean) {
    super(project);

    // this.strategy = useProjen
    //   ? new ProjenTrackedConfigStrategy()
    //   : new NonProjenConfigStrategy();

    // this.strategy.applyConfig(project);
  }
}

// class ProjenTrackedConfigStrategy implements ConfigStrategy<JsiiProject> {
//   applyConfig(_project: JsiiProject): void {
//     console.log('typescript - JsonFile')
//   }
// }

// class NonProjenConfigStrategy implements ConfigStrategy<JsiiProject> {
//   applyConfig(_project: JsiiProject): void {
//     console.log('typescript - SampleFile')
//   }
// }
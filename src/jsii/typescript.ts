import { JsiiProject } from '.';
import { TypeScriptBaseConfig, NonProjenTypeScriptBaseConfigStrategy, ProjenTrackedTypeScriptBaseConfigStrategy } from '../base';

/**
 * Implementing all relevant TypeScript configuration for the Jsii project.
 * @extends TypeScriptBaseConfig
 */
export class TypeScriptConfigJsii extends TypeScriptBaseConfig<JsiiProject> {
	constructor(project: JsiiProject, useProjen: boolean) {
		super(project, useProjen);

		const strategy = useProjen
			? new ProjenTrackedConfigStrategy()
			: new NonProjenConfigStrategy();
      this.setStrategy(strategy);
      this.applyConfig();
	}
}

class ProjenTrackedConfigStrategy extends ProjenTrackedTypeScriptBaseConfigStrategy<JsiiProject> {
  applyConfig(project: JsiiProject): void {
    super.applyConfig(project);
    console.log('typescript - JsonFile - Jsii')
  }
}

class NonProjenConfigStrategy extends NonProjenTypeScriptBaseConfigStrategy<JsiiProject> {
  applyConfig(project: JsiiProject): void {
    super.applyConfig(project);
    console.log('typescript - SampleFile - Jsii')
  }
}
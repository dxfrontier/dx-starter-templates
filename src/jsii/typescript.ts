import { JsiiProject } from '.';
import { TypeScriptBaseConfig,  NonApiTypeScriptBaseConfigStrategy, Config, ProjenStandardTypeScriptBaseConfigStrategy } from '../base';

/**
 * Implementing all relevant TypeScript configuration for the Jsii project.
 * @extends TypeScriptBaseConfig
 */
export class TypeScriptConfigJsii extends TypeScriptBaseConfig<JsiiProject> {
	constructor(project: JsiiProject, useProjenApi: boolean) {
		super(project, useProjenApi);

		const strategy = useProjenApi
			? new ProjenStandardConfigStrategy()
			: new NonApiConfigStrategy();
      this.setStrategy(strategy);
      
	}
}

class ProjenStandardConfigStrategy extends ProjenStandardTypeScriptBaseConfigStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

class NonApiConfigStrategy extends NonApiTypeScriptBaseConfigStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}
import { JsiiProject } from '.';
import { TypeScriptBaseConfig, NonProjenTypeScriptBaseConfigStrategy, ProjenTrackedTypeScriptBaseConfigStrategy, Config } from '../base';

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
      
	}
}

class ProjenTrackedConfigStrategy extends ProjenTrackedTypeScriptBaseConfigStrategy<JsiiProject> {
  writeConfig(config: Config<JsiiProject>): void {
    super.writeConfig(config);
  }
}

class NonProjenConfigStrategy extends NonProjenTypeScriptBaseConfigStrategy<JsiiProject> {
  writeConfig(config: Config<JsiiProject>): void {
    super.writeConfig(config);
  }
}
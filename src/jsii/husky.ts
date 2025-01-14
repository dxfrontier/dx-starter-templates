import { JsiiProject } from '.';
import { Config, HuskyBaseConfig, NonProjenHuskyBaseConfigStrategy, ProjenTrackedHuskyBaseConfigStrategy } from '../base';

/**
 * Implementing all relevant Husky configuration for the Jsii project.
 * @extends HuskyBaseConfig
 */
export class HuskyConfigJsii extends HuskyBaseConfig<JsiiProject> {
	constructor(project: JsiiProject, useProjen: boolean) {
		super(project, useProjen);

		const strategy = useProjen
			? new ProjenTrackedConfigStrategy()
			: new NonProjenConfigStrategy();
      this.setStrategy(strategy);
      
	}
}

class ProjenTrackedConfigStrategy extends ProjenTrackedHuskyBaseConfigStrategy<JsiiProject> {
  writeConfig(config: Config<JsiiProject>): void {
    super.writeConfig(config);
  }
}

class NonProjenConfigStrategy extends NonProjenHuskyBaseConfigStrategy<JsiiProject> {
  writeConfig(config: Config<JsiiProject>): void {
    super.writeConfig(config);
  }
}
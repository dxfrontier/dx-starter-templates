import { JsiiProject } from '.';
import { HuskyBaseConfig, NonProjenHuskyBaseConfigStrategy, ProjenTrackedHuskyBaseConfigStrategy } from '../base';

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
      this.applyConfig();
	}
}

class ProjenTrackedConfigStrategy extends ProjenTrackedHuskyBaseConfigStrategy<JsiiProject> {
  applyConfig(project: JsiiProject): void {
    super.applyConfig(project);
    console.log('husky - JsonFile - Jsii')
  }
}

class NonProjenConfigStrategy extends NonProjenHuskyBaseConfigStrategy<JsiiProject> {
  applyConfig(project: JsiiProject): void {
    super.applyConfig(project);
    console.log('husky - SampleFile - Jsii')
  }
}
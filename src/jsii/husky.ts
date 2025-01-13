import { JsiiProject } from '.';
import { /*ConfigStrategy, */HuskyBaseConfig } from '../base';

/**
 * Implementing all relevant Husky configuration for the Jsii project.
 * @extends HuskyBaseConfig
 */
export class HuskyConfigJsii extends HuskyBaseConfig<JsiiProject> {
	constructor(project: JsiiProject, _useProjen: boolean) {
		super(project);

		// this.strategy = useProjen
		// 	? new ProjenTrackedConfigStrategy()
		// 	: new NonProjenConfigStrategy();

		// this.strategy.applyConfig(project);
	}
}

// class ProjenTrackedConfigStrategy implements ConfigStrategy<JsiiProject> {
// 	applyConfig(_project: JsiiProject): void {
// 		console.log('husky - JsonFile')
// 	}
// }

// class NonProjenConfigStrategy implements ConfigStrategy<JsiiProject> {
// 	applyConfig(_project: JsiiProject): void {
// 		console.log('husky - SampleFile')
// 	}
// }
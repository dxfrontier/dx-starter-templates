import { JsiiProject } from '.';
import { ConfigStrategy, PrettierBaseConfig } from '../base';

/**
 * Implementing all relevant Prettier configuration for the Jsii project.
 * @extends PrettierBaseConfig
 */
export class PrettierConfigJsii extends PrettierBaseConfig<JsiiProject> {
	protected strategy: ConfigStrategy<JsiiProject>;

	constructor(project: JsiiProject, useProjen: boolean, useProjenApi: boolean) {
		super(project);

		this.strategy = useProjen && useProjenApi
			? new ProjenStandardConfigStrategy()
			: useProjen && !useProjenApi
				? new ProjenTrackedConfigStrategy()
				: new NonProjenConfigStrategy();

		this.strategy.applyConfig(project);
	}
}

class ProjenStandardConfigStrategy implements ConfigStrategy<JsiiProject> {
	applyConfig(_project: JsiiProject): void {
		console.log('prettier - use projen prettier')
	}
}

class ProjenTrackedConfigStrategy implements ConfigStrategy<JsiiProject> {
	applyConfig(_project: JsiiProject): void {
		console.log('prettier - JsonFile')
	}
}

class NonProjenConfigStrategy implements ConfigStrategy<JsiiProject> {
	applyConfig(_project: JsiiProject): void {
		console.log('prettier - SampleFile')
	}
}
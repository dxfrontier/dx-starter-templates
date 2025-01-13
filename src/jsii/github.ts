import { JsiiProject } from '.';
import { ConfigStrategy, GitHubBaseConfig } from '../base';

/**
 * Implementing all relevant GitHub configuration for the Jsii project.
 * @extends GitHubBaseConfig
 */
export class GitHubConfigJsii extends GitHubBaseConfig<JsiiProject> {
  constructor(project: JsiiProject, useProjen: boolean) {
    super(project);

    this.strategy = useProjen
      ? new ProjenTrackedConfigStrategy()
      : new NonProjenConfigStrategy();

    this.strategy.applyConfig(project);
  }
}

class ProjenTrackedConfigStrategy implements ConfigStrategy<JsiiProject> {
  applyConfig(_project: JsiiProject): void {
    console.log('github - JsonFile')
  }
}

class NonProjenConfigStrategy implements ConfigStrategy<JsiiProject> {
  applyConfig(_project: JsiiProject): void {
    console.log('github - SampleFile')
  }
}
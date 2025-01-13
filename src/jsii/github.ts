import { JsiiProject } from '.';
import { NonProjenGitHubBaseConfigStrategy, GitHubBaseConfig, ProjenStandardGitHubBaseConfigStrategy, ProjenTrackedGitHubBaseConfigStrategy } from '../base';

/**
 * Implementing all relevant GitHub configuration for the Jsii project.
 * @extends GitHubBaseConfig
 */
export class GitHubConfigJsii extends GitHubBaseConfig<JsiiProject> {
  constructor(project: JsiiProject, useProjen: boolean, useProjenApi: boolean) {
    super(project, useProjen, useProjenApi);

    const strategy = useProjen && useProjenApi
      ? new ProjenStandardConfigStrategy()
      : useProjen && !useProjenApi
        ? new ProjenTrackedConfigStrategy()
        : new NonProjenConfigStrategy();
    this.setStrategy(strategy);
    this.applyConfig();
  }
}

class ProjenStandardConfigStrategy extends ProjenStandardGitHubBaseConfigStrategy<JsiiProject> {
  applyConfig(project: JsiiProject): void {
    super.applyConfig(project);
    console.log('github - use projen github - Jsii')
  }
}

class ProjenTrackedConfigStrategy extends ProjenTrackedGitHubBaseConfigStrategy<JsiiProject> {
  applyConfig(project: JsiiProject): void {
    super.applyConfig(project);
    console.log('github - JsonFile - Jsii')
  }
}

class NonProjenConfigStrategy extends NonProjenGitHubBaseConfigStrategy<JsiiProject> {
  applyConfig(project: JsiiProject): void {
    super.applyConfig(project);
    console.log('github - SampleFile - Jsii')
  }
}
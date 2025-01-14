import { JsiiProject } from '.';
import { NonProjenGitHubBaseConfigStrategy, GitHubBaseConfig, ProjenStandardGitHubBaseConfigStrategy, ProjenTrackedGitHubBaseConfigStrategy, Config } from '../base';

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
    
  }
}

class ProjenStandardConfigStrategy extends ProjenStandardGitHubBaseConfigStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

class ProjenTrackedConfigStrategy extends ProjenTrackedGitHubBaseConfigStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

class NonProjenConfigStrategy extends NonProjenGitHubBaseConfigStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}
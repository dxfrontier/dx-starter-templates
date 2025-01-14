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
  writeConfig(config: Config<JsiiProject>): void {
    super.writeConfig(config);
  }
}

class ProjenTrackedConfigStrategy extends ProjenTrackedGitHubBaseConfigStrategy<JsiiProject> {
  writeConfig(config: Config<JsiiProject>): void {
    super.writeConfig(config);
  }
}

class NonProjenConfigStrategy extends NonProjenGitHubBaseConfigStrategy<JsiiProject> {
  writeConfig(config: Config<JsiiProject>): void {
    super.writeConfig(config);
  }
}
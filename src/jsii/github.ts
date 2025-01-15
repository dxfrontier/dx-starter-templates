import { JsiiProject } from '.';
import {
  GitHubConfigBase,
  ProjenStandardGitHubConfigBaseStrategy,
  NonApiGitHubConfigBaseStrategy,
  Config,
  ConfigStrategy,
} from '../base';

/**
 * Implementing all relevant GitHub configuration for the Jsii project.
 */
export class GitHubConfigJsii extends GitHubConfigBase<JsiiProject> {
  constructor(project: JsiiProject, useProjenApi: boolean) {
    super(project, useProjenApi);

    const strategy: ConfigStrategy = useProjenApi ? new ProjenStandardConfigStrategy() : new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }
}

class ProjenStandardConfigStrategy extends ProjenStandardGitHubConfigBaseStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

class NonApiConfigStrategy extends NonApiGitHubConfigBaseStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

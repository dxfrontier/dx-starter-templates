import { JsiiProject } from '.';
import {
  GitHubBaseConfig,
  ProjenStandardGitHubBaseConfigStrategy,
  NonApiGitHubBaseConfigStrategy,
  Config,
  ConfigStrategy,
} from '../base';

/**
 * Implementing all relevant GitHub configuration for the Jsii project.
 * @extends GitHubBaseConfig
 */
export class GitHubConfigJsii extends GitHubBaseConfig<JsiiProject> {
  constructor(project: JsiiProject, useProjenApi: boolean) {
    super(project, useProjenApi);

    const strategy: ConfigStrategy = useProjenApi ? new ProjenStandardConfigStrategy() : new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }
}

class ProjenStandardConfigStrategy extends ProjenStandardGitHubBaseConfigStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

class NonApiConfigStrategy extends NonApiGitHubBaseConfigStrategy<JsiiProject> {
  applyConfig(config: Config<JsiiProject>): void {
    super.applyConfig(config);
  }
}

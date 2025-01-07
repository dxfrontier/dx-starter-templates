import { GitHubBase, TypeScriptProjectBase } from '../base';

/**
 * GitHub builder implementing all relevant configuration for the Jsii project.
 */
export class GitHubJsii extends GitHubBase {
  /**
   * Initializes the GitHub builder.
   * It calls the `initialize()` method immediately after invoking `super(project)`
   * to ensure that all necessary configuration steps are applied.
   * @param project The project to configure GitHub for.
   */
  constructor(project: TypeScriptProjectBase) {
    super(project);
    this.initialize();
  }
}

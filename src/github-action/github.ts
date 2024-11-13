import { GitHubBase, TypeScriptProjectBase } from '../base';

/**
 * GitHub component implementing all relevant configuration for the project.
 */
export class GitHub extends GitHubBase {
  /**
   * Initializes the GitHub component.
   * It calls the `initialize()` method immediately after invoking `super(project)`
   * to ensure that all necessary configuration steps are applied.
   * @param project The project to configure GitHub for.
   */
  constructor(project: TypeScriptProjectBase) {
    super(project);
    this.initialize();
  }
}

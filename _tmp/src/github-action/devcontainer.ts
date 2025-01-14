import { DevContainerBase, TypeScriptProjectBase } from '../base';

/**
 * DevContainer builder implementing all relevant configuration for the project.
 */
export class DevContainer extends DevContainerBase {
  /**
   * Initializes the DevContainer builder.
   * It calls the `initialize()` method immediately after invoking `super(project)`
   * to ensure that all necessary configuration steps are applied.
   * @param project The project to configure CommitLint for.
   */
  constructor(project: TypeScriptProjectBase) {
    super(project);
    this.initialize();
  }
}

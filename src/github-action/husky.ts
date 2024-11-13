import { HuskyBase, TypeScriptProjectBase } from '../base';

/**
 * Husky component implementing all relevant configuration for the project.
 */
export class Husky extends HuskyBase {
  /**
   * Initializes the Husky component.
   * It calls the `initialize()` method immediately after invoking `super(project)`
   * to ensure that all necessary configuration steps are applied.
   * @param project The project to configure Husky for.
   */
  constructor(project: TypeScriptProjectBase) {
    super(project);
    this.initialize();
  }
}

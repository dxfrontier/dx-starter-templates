import { NpmPackageBase, TypeScriptProjectBase } from '../base';

/**
 * NPM Package builder implementing all relevant configuration for the Jsii project.
 */
export class NpmPackageJsii extends NpmPackageBase {
  /**
   * Initializes the NPM Package builder.
   * It calls the `initialize()` method immediately after invoking `super(project)`
   * to ensure that all necessary configuration steps are applied.
   * @param project The project to configure NPM Package for.
   */
  constructor(project: TypeScriptProjectBase) {
    super(project);
    this.initialize();
  }

  /**
   * @override
   */
  protected get npmFilePaths(): string[] {
    return ['lib', 'README.md', '.jsii'];
  }

  /**
   * @override
   */
  protected addDevDependencies(): void {}
}

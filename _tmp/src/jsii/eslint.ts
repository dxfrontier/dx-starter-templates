import { EslintBase, TypeScriptProjectBase } from '../base';

/**
 * Eslint builder implementing all relevant configuration for the Jsii project.
 */
export class EslintJsii extends EslintBase {
  /**
   * Initializes the Eslint builder.
   * It calls the `initialize()` method immediately after invoking `super(project)`
   * to ensure that all necessary configuration steps are applied.
   * @param project The project to configure Eslint for.
   */
  constructor(project: TypeScriptProjectBase) {
    super(project);
    this.initialize();
  }

  /**
   * @override
   */
  protected get ignoreFilePaths(): string[] {
    const baseEntries: string[] = super.ignoreFilePaths;
    return [...baseEntries, 'lib/', '.jsii'];
  }

  /**
   * @override
   */
  protected get rules(): Record<string, string> {
    const baseRules: Record<string, string> = super.rules;
    return {
      ...baseRules,
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/class-literal-property-style': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
    };
  }
}

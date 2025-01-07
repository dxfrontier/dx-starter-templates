import { Builder } from './builder';
import { TypeScriptProjectBase } from './project';

/**
 * Base class for VsCode builder implementing all relevant configuration.
 * @abstract
 */
export abstract class VsCodeBase extends Builder {
  /**
   * Initializes the base VsCode builder.
   * @param project The project to configure VsCode builder for.
   */
  constructor(project: TypeScriptProjectBase) {
    super(project);
  }

  /**
   * File path to the VsCode settings configuration.
   * @return File path to settings file.
   * @protected
   */
  protected get settingsFilePath(): string {
    return '.vscode/settings.json';
  }

  /**
   * Settings to be installed in VsCode.
   * @return Entries for the settings file.
   * @protected
   */
  protected get settings(): Record<string, unknown> {
    return {
      'editor.tabSize': 2,
      'editor.stickyTabStops': true,
      'typescript.inlayHints.parameterNames.enabled': 'all',
      'typescript.inlayHints.enumMemberValues.enabled': true,
      'typescript.inlayHints.variableTypes.enabled': true,
      'typescript.inlayHints.propertyDeclarationTypes.enabled': true,
      'javascript.inlayHints.parameterNames.suppressWhenArgumentMatchesName': false,
      'javascript.inlayHints.variableTypes.suppressWhenTypeMatchesName': false,
      'typescript.inlayHints.functionLikeReturnTypes.enabled': true,
      'typescript.inlayHints.parameterTypes.enabled': true,
      'editor.inlayHints.fontSize': 10,
      'editor.inlayHints.padding': true,
      'editor.formatOnSave': true,
      'editor.formatOnPaste': true,
    };
  }

  /**
   * @override
   */
  protected addSettings(): void {
    this.project.vscode?.settings.addSettings(this.settings);
  }
}

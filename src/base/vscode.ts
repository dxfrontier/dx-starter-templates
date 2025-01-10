import { ConfigContent } from '../types';
import { Config } from './config';
import { TypeScriptProjectBase } from './project';

/**
 * Base class for VsCode implementing all relevant configuration.
 * @abstract
 */
export abstract class VsCodeConfigBase extends Config {
  // protected npmConfig: NpmConfigBase | undefined = Config.configRegistry.get('npm') as NpmConfigBase;

  /**
   * @override 
   */
  constructor(project: TypeScriptProjectBase) {
    super(project);

    this.addConfigToRegistry('vscode');
  }

  /**
     * @override
     */
  protected get config(): ConfigContent {
    return {
      settings: {
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
      }
    };
  }

  /**
   * @override
   */
  protected addConfig(): void {
    this.project.vscode?.settings.addSettings(this.config.settings!);
  
  }

  /**
   * @override
   */
  public setup(): void {
    this.addConfig();
  }
}
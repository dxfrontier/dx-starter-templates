import { JsonFile } from 'projen';
import { ConfigContent, ProjectOptions } from '../types';
import { Config } from './config';
import { TypeScriptProjectBase } from './project';

/**
 * Base class for VsCode implementing all relevant configuration.
 * @abstract
 */
export abstract class VsCodeConfigBase extends Config {
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
  public static get projectOptions(): ProjectOptions {
    return {
      vscode: false,
    };
  }

  /**
   * @override
   */
  protected get config(): ConfigContent {
    return {
      configFiles: {
        '.vscode/settings.json': {
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
        },
      },
    };
  }

  /**
   * Creates the config file for VsCode config.
   * @private
   */
  private createConfigFile(): void {
    const path: string = Object.keys(this.config.configFiles!)[0];
    new JsonFile(this.project, path, {
      omitEmpty: true,
      allowComments: true,
      obj: this.config.configFiles![path],
    });
  }

  /**
   * @override
   */
  protected addConfig(): void {
    this.createConfigFile();
  }

  /**
   * @override
   */
  public setup(): void {
    this.addConfig();
  }
}
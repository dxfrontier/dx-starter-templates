import { JsonFile } from 'projen';
import { ConfigContent, ConfigFile, ProjectOptions } from '../types';
import { Config } from './config';
import { TypeScriptProjectBase } from './project';
import { PrettierConfigBase } from './prettier';

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
   * Creates the config file for VsCode config.
   * @protected
   */
  protected createConfigFiles(): void {
    const configFile: ConfigFile = this.config.configFiles! as ConfigFile;
    const path: string = configFile!.path;
    new JsonFile(this.project, path, {
      omitEmpty: true,
      allowComments: true,
      obj: configFile!.content,
    });
  }

  /**
   * @override
   */
  public setup(): void {
    // Dependency Injected Modules in shared config registry
    Config.getConfigFromRegistry<PrettierConfigBase>('prettier')?.addIgnoreEntries(this.config.update as string[]);
  }

  /**
   * @override
   */
  protected get _config(): ConfigContent {
    return {
      configFiles: {
        path: '.vscode/settings.json',
        content: {
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
      update: [
        '/.vscode/settings.json',
      ],
    };
  }
}
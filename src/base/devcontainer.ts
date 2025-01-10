import { JsonFile } from 'projen';
import { ConfigContent, ProjectOptions } from '../types';
import { Config } from './config';
import { NpmConfigBase } from './npm';
import { TypeScriptProjectBase } from './project';

/**
 * Base class for DevContainer implementing all relevant configuration.
 * @abstract
 */
export abstract class DevContainerConfigBase extends Config {
  protected npmConfig: NpmConfigBase | undefined = Config.configRegistry.get('npm') as NpmConfigBase;

  /**
   * @override 
   */
  constructor(project: TypeScriptProjectBase) {
    super(project);

    this.addConfigToRegistry('devcontainer');
  }

  /**
   * @override
   */
  public static get projectOptions(): ProjectOptions {
    return {
      devContainer: false,
    };
  }

  /**
     * @override
     */
  protected get config(): ConfigContent {
    return {
      scripts: {
        'install-dependencies': 'npm install',
      },
      configFiles: {
        '.devcontainer.json': {
          "image": "mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye",
          "postCreateCommand": "npm run install-dependencies",
          "features": {
            "ghcr.io/devcontainers-contrib/features/curl-apt-get": "latest",
            "ghcr.io/devcontainers/features/github-cli": "latest",
          },
          "customizations": {
            "vscode": {
              "extensions": [
                "Orta.vscode-jest",
                "firsttris.vscode-jest-runner",
                "humao.rest-client",
                "aaron-bond.better-comments",
                "alefragnani.Bookmarks",
                "alefragnani.project-manager",
                "christian-kohler.npm-intellisense",
                "mskelton.npm-outdated",
                "PKief.material-icon-theme",
                "zhuangtongfa.material-theme",
                "GitHub.github-vscode-theme",
                "ms-vscode-remote.remote-containers",
                "mikestead.dotenv",
                "usernamehw.errorlens",
                "dbaeumer.vscode-eslint",
                "oderwat.indent-rainbow",
                "esbenp.prettier-vscode",
                "YoavBls.pretty-ts-errors",
                "streetsidesoftware.code-spell-checker",
                "wayou.vscode-todo-highlight",
                "mike-co.import-sorter",
                "VisualStudioExptTeam.vscodeintellicode",
                "redhat.vscode-yaml",
                "DotJoshJohnson.xml",
                "waderyan.gitblame",
                "donjayamanne.githistory",
                "GitHub.vscode-pull-request-github",
                "yzhang.markdown-all-in-one",
                "DavidAnson.vscode-markdownlint",
                "bierner.jsdoc-markdown-highlighting",
                "VisualStudioExptTeam.vscodeintellicode",
                "christian-kohler.path-intellisense",
                "AykutSarac.jsoncrack-vscode",
                "tamasfe.even-better-toml",
                'github.copilot',
              ]
            },
          },
        },
      },
    };
  }

  /**
   * Creates the config file for DevContainer config.
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
    this.npmConfig?.addScripts(this.config.scripts!);
  }

  /**
   * @override
   */
  public setup(): void {
    this.addConfig();
  }
}
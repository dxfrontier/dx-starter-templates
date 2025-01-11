import { JsonFile } from 'projen';
import { ConfigContent, ProjectOptions } from '../types';
import { Config } from './config';
import { NpmConfigBase } from './npm';
import { TypeScriptProjectBase } from './project';
import { PrettierConfigBase } from './prettier';

/**
 * Base class for DevContainer implementing all relevant configuration.
 * @abstract
 */
export abstract class DevContainerConfigBase extends Config {
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
   * Creates the config file for DevContainer config.
   * @protected
   */
  protected createConfigFile(): void {
    const path: string = this.config.file!.path;
    new JsonFile(this.project, path, {
      omitEmpty: true,
      allowComments: true,
      obj: this.config.file!.content,
    });
  }

  /**
   * @override
   */
  public setup(): void {
    // Dependency Injected Modules in shared config registry
    this.getConfigFromRegistry<NpmConfigBase>('npm')?.addScripts(this.config.scripts!);
    this.getConfigFromRegistry<PrettierConfigBase>('prettier')?.addIgnoreEntries(this.config.entries as string[]);
  }

  /**
   * @override
   */
  protected get config(): ConfigContent {
    return {
      scripts: {
        'install-dependencies': 'npm install',
      },
      file: {
        path: '.devcontainer.json',
        content: {
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
      entries: [
        '/.devcontainer.json',
      ],
    };
  }
}
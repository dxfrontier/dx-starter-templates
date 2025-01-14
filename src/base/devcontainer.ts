import { JsonFile } from 'projen';
import { JsiiProject } from '../jsii';
import { Config, ConfigStrategy } from './config';
import { Settings } from './npm';
import { BaseProject } from './project';

/**
 * Base class for implementing all relevant DevContainer configuration.
 * 
 * This class acts as a base for handling DevContainer configuration within projects
 * that extend either `BaseProject` or `JsiiProject`. It determines the configuration
 * strategy to use based on whether Projen is being used.
 * 
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 * @extends Config
 */
export class DevContainerBaseConfig<T extends BaseProject | JsiiProject> extends Config<T> {
  constructor(project: T, useProjenApi: boolean) {
    super(project);

    const strategy = useProjenApi
      ? new ProjenStandardDevContainerBaseConfigStrategy()
      : new NonApiDevContainerBaseConfigStrategy();

    this.setStrategy(strategy);
  }

  protected get additionalScripts(): Record<string, string> {
    return {
      'install-dependencies': 'npm install',
    }
  }

  protected get configFile(): Settings {
    return {
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
    };
  }

  public createConfig(): void {
    const filePath: string = Object.keys(this.configFile)[0];
    new JsonFile(this.project, filePath, {
      obj: this.configFile[filePath],
    });
  }
}

/**
 * Configuration strategy for Projen standard API DevContainer base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class ProjenStandardDevContainerBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  applyConfig(_config: Config<T>): void { }
}

/**
 * Configuration strategy for Projen-tracked DevContainer base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class NonApiDevContainerBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  applyConfig(config: Config<T>): void {
    if (config instanceof DevContainerBaseConfig) {
      config.createConfig();
    }
  }
}

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
export class DevContainerConfigBase<T extends BaseProject | JsiiProject> extends Config<T> {
  constructor(project: T, useProjenApi: boolean) {
    super(project);

    const strategy: ConfigStrategy = useProjenApi
      ? new ProjenStandardDevContainerConfigBaseStrategy()
      : new NonApiDevContainerConfigBaseStrategy();
    this.setStrategy(strategy);
  }

  /**
   * Gets the additional npm scripts to be added to the project's configuration.
   *
   * @returns A record of script names and their corresponding commands.
   */
  protected get additionalScripts(): Record<string, string> {
    return {
      'install-dependencies': 'npm install',
    };
  }

  /**
   * Gets the config file to be added to the project's configuration.
   *
   * @returns A record of the having the path to the file as key and the content as value.
   */
  protected get configFile(): Settings {
    return {
      '.devcontainer.json': {
        image: 'mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye',
        postCreateCommand: ['npm run install-dependencies'],
        features: {
          'ghcr.io/devcontainers-contrib/features/curl-apt-get': 'latest',
          'ghcr.io/devcontainers/features/github-cli': 'latest',
        },
        customizations: {
          vscode: {
            extensions: [
              'Orta.vscode-jest',
              'firsttris.vscode-jest-runner',
              'humao.rest-client',
              'aaron-bond.better-comments',
              'alefragnani.Bookmarks',
              'alefragnani.project-manager',
              'christian-kohler.npm-intellisense',
              'mskelton.npm-outdated',
              'PKief.material-icon-theme',
              'zhuangtongfa.material-theme',
              'GitHub.github-vscode-theme',
              'ms-vscode-remote.remote-containers',
              'mikestead.dotenv',
              'usernamehw.errorlens',
              'dbaeumer.vscode-eslint',
              'oderwat.indent-rainbow',
              'esbenp.prettier-vscode',
              'YoavBls.pretty-ts-errors',
              'streetsidesoftware.code-spell-checker',
              'wayou.vscode-todo-highlight',
              'mike-co.import-sorter',
              'VisualStudioExptTeam.vscodeintellicode',
              'redhat.vscode-yaml',
              'DotJoshJohnson.xml',
              'waderyan.gitblame',
              'donjayamanne.githistory',
              'GitHub.vscode-pull-request-github',
              'yzhang.markdown-all-in-one',
              'DavidAnson.vscode-markdownlint',
              'bierner.jsdoc-markdown-highlighting',
              'VisualStudioExptTeam.vscodeintellicode',
              'christian-kohler.path-intellisense',
              'AykutSarac.jsoncrack-vscode',
              'tamasfe.even-better-toml',
              'github.copilot',
            ],
          },
        },
      },
    };
  }

  /**
   * Creates the configuration file in the project directory.
   */
  public createConfig(): void {
    const filePath: string = Object.keys(this.configFile)[0];
    new JsonFile(this.project, filePath, {
      obj: this.configFile[filePath],
    });
  }

  /**
   * Gets additional ignore patterns to be added to the project's ignore configuration.
   *
   * @returns A list of ignore patterns.
   */
  protected get additionalIgnorePatterns(): string[] {
    const filePath: string = Object.keys(this.configFile)[0];
    return [`/${filePath}`];
  }

  public override registerConfig(): void {
    this.project.npmConfig?.addScripts(this.additionalScripts);
    this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
  }
}

/**
 * Configuration strategy for Projen standard API DevContainer base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class ProjenStandardDevContainerConfigBaseStrategy<T extends BaseProject | JsiiProject>
  implements ConfigStrategy
{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  applyConfig(_config: Config<T>): void {}
}

/**
 * Configuration strategy for Projen-tracked DevContainer base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class NonApiDevContainerConfigBaseStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  applyConfig(config: Config<T>): void {
    if (config instanceof DevContainerConfigBase) {
      config.createConfig();
    }
  }
}

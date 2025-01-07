import { JsonFile, JsonFileOptions } from 'projen';
import { Builder } from './builder';
import { Scripts } from '../types';
import { TypeScriptProjectBase } from './project';

/**
 * Base class for DevContainer builder implementing all relevant configuration.
 * @abstract
 */
export abstract class DevContainerBase extends Builder {
  /**
   * Initializes the base DevContainer builder.
   * @param project The project to configure DevContainer for.
   */
  constructor(project: TypeScriptProjectBase) {
    super(project);
  }

  /**
   * File path to the CommitLint configuration.
   * @return File path to config file.
   * @protected
   */
  protected get filePath(): string {
    return '.devcontainer.json';
  }

  /**
   * Docker image used for the DevContainer.
   * @return Docker image to be used for container.
   * @protected
   */
  protected get dockerImage(): string {
    return 'mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye';
  }

  /**
   * Features to be installed in the DevContainer.
   * @return Additional features used in container.
   * @protected
   */
  protected get features(): Record<string, string> {
    return {
      'ghcr.io/devcontainers-contrib/features/curl-apt-get': 'latest',
      'ghcr.io/devcontainers/features/github-cli': 'latest',
    };
  }

  /**
   * VsCode extensions to be installed in the DevContainer.
   * @return Extensions used in container.
   * @protected
   */
  protected get extensions(): string[] {
    return [
      // Jest
      'Orta.vscode-jest',
      'firsttris.vscode-jest-runner',

      // Rest
      'humao.rest-client',

      // VsCode
      'aaron-bond.better-comments',
      'alefragnani.Bookmarks',
      'alefragnani.project-manager',

      // NPM
      'christian-kohler.npm-intellisense',
      'mskelton.npm-outdated',

      // Theme
      'PKief.material-icon-theme',
      'zhuangtongfa.material-theme',
      'GitHub.github-vscode-theme',

      // Docker
      'ms-vscode-remote.remote-containers',

      // .env
      'mikestead.dotenv',

      // TypeScript
      'usernamehw.errorlens',
      'dbaeumer.vscode-eslint',
      'oderwat.indent-rainbow',
      'esbenp.prettier-vscode',
      'YoavBls.pretty-ts-errors',
      'streetsidesoftware.code-spell-checker',
      'wayou.vscode-todo-highlight',
      'mike-co.import-sorter',
      'VisualStudioExptTeam.vscodeintellicode',

      // XML & YAML'
      'redhat.vscode-yaml',
      'DotJoshJohnson.xml',

      // Git
      'waderyan.gitblame',
      'donjayamanne.githistory',
      'GitHub.vscode-pull-request-github',

      // README
      'yzhang.markdown-all-in-one',
      'DavidAnson.vscode-markdownlint',
      'bierner.jsdoc-markdown-highlighting',

      // Others
      'VisualStudioExptTeam.vscodeintellicode',
      'christian-kohler.path-intellisense',
      'AykutSarac.jsoncrack-vscode',
      'tamasfe.even-better-toml',
      'github.copilot',
    ];
  }

  /**
   * Template file for DevContainer creation.
   * The first script in `scripts` is used as the postCreateCommand to install dependencies upon creation.
   * @return Template for the config file.
   * @protected
   */
  protected get template(): JsonFileOptions {
    return {
      omitEmpty: true,
      allowComments: true,
      obj: {
        image: this.dockerImage,
        postCreateCommand: `npx projen ${Object.keys(this.scripts)[0]}`,
        features: this.features,
        customizations: {
          vscode: {
            extensions: this.extensions,
          },
        },
      },
    };
  }

  /**
   * NPM scripts used within the DevContainer environment.
   * @return Npm script entries.
   * @protected
   */
  protected get scripts(): Scripts {
    return {
      'install-dependencies': 'npm install',
    };
  }

  protected addTemplates(): void {
    new JsonFile(this.project, this.filePath, this.template);
  }

  protected addScripts(): void {
    for (const [name, command] of Object.entries(this.scripts)) {
      this.project.addTask(name, { exec: command });
    }
  }
}

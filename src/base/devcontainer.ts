import { JsonFile } from 'projen';
import { Config } from './config';
import { ProjectTypes, Settings } from '../types';

/**
 * Base class for implementing all relevant DevContainer configuration.
 *
 * This class acts as a base for handling DevContainer configuration within projects.
 */
export class DevContainerConfigBase extends Config {
  constructor(project: ProjectTypes) {
    super(project);
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

  public override applyConfig(): void {
    const filePath: string = Object.keys(this.configFile)[0];
    new JsonFile(this.project, filePath, {
      obj: this.configFile[filePath],
    });
  }
}

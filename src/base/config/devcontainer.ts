import { JsonFile } from 'projen';
import { Config } from '../config';
import { ProjectTypes } from '../../util/types/project';
import { util } from '../../util/utils';
import { ConfigFile } from '../../util/types/types';

/**
 * Base class for implementing all relevant DevContainer configuration.
 *
 * This class acts as a base for handling DevContainer configuration within projects.
 */
export class DevContainerConfigBase extends Config {
  protected override get configFile(): ConfigFile {
    return {
      '.devcontainer.json': {
        image: 'mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye',
        postCreateCommand: 'npm install',
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

  protected override get additionalIgnorePatterns(): string[] {
    const filePath: string = Object.keys(this.configFile)[0];
    return [`/${filePath}`];
  }

  public override registerConfig(): void {
    if (util.isValidProject(this.project)) {
      (this.project as ProjectTypes).prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
    }
  }

  public override applyConfig(): void {
    const filePath: string = Object.keys(this.configFile)[0];
    new JsonFile(this.project, filePath, {
      obj: this.configFile[filePath],
    });
  }
}

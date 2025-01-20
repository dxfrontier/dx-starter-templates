import { DevContainerConfigBase } from '../base';
import { Settings } from '../types';

/**
 * Implementing all relevant DevContainer configuration for the CapService project.
 */
export class DevContainerConfigCapService extends DevContainerConfigBase {
  protected override get additionalScripts(): Record<string, string> {
    return {};
  }

  protected override get configFile(): Settings {
    return {
      '.devcontainer.json': {
        image: 'mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye',
        postCreateCommand: [
          'sudo apt-get update',
          'sudo apt-get install -y xdg-utils',
          'npm install -g @sap/cds-dk typescript ts-node @ui5/cli git-cliff',
          'npm install',
          'wget -q -O - https://packages.cloudfoundry.org/debian/cli.cloudfoundry.org.key | sudo apt-key add -',
          'echo "deb https://packages.cloudfoundry.org/debian stable main" | sudo tee /etc/apt/sources.list.d/cloudfoundry-cli.list',
          'sudo apt-get update',
          'sudo apt-get install cf8-cli',
        ],
        features: {
          'ghcr.io/devcontainers-contrib/features/curl-apt-get': 'latest',
          'ghcr.io/devcontainers/features/github-cli': 'latest',
        },
        customizations: {
          vscode: {
            extensions: [
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

              // SAP CAP
              'SAPSE.vscode-cds',
              'SAPOSS.app-studio-toolkit',
              'SAPOSS.app-studio-remote-access',
              'SAPOS.yeoman-ui',

              // Docker
              'ms-vscode-remote.remote-containers',

              // .env
              'mikestead.dotenv',

              // UI5
              'SAPSE.sap-ux-fiori-tools-extension-pack',

              // SQLite
              'qwtel.sqlite-viewer',

              // CSV
              'janisdd.vscode-edit-csv',
              'mechatroner.rainbow-csv',

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
              'SAPOSS.xml-toolkit',

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
            ],
          },
        },
      },
    };
  }
}

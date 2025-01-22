/**
 * Test files test the whole results of the Projen project creation
 * configuration orchestration. E.g. the npm test module does test the result of the whole `package.json` file
 * and that the devcontainer config module scripts are created. The devcontainer test module itself will not test
 * if the related devcontainer npm scripts are created.
 *
 * The `setup.ts` file includes all relevant bootstrap steps for the test files.
 * It is important that each test file imports and uses the `snapshot` otherwise the bootstrap will not run for this test file.
 **/

import * as devcontainer from '../../shared/devcontainer';
import { snapshot } from './setup';

/**
 * We use not a describe block here because the jest test runner `Test Results` pane will show the test names.
 * The `Testing` pane shows a hierarchy but for this hierarchy we already have the test file names available.
 */
test('Container image is set properly', (): void => {
  devcontainer.testImage(snapshot);
});

test('Container features are set properly', (): void => {
  devcontainer.testFeatures(snapshot);
});

test('Container VsCode extensions are set properly', (): void => {
  const expectedExtensions: string[] = [
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
    'SAPSE.vscode-cds',
    'SAPOSS.app-studio-toolkit',
    'SAPOSS.app-studio-remote-access',
    'SAPOS.yeoman-ui',
    'SAPSE.sap-ux-fiori-tools-extension-pack',
    'SAPOSS.xml-toolkit',
    'qwtel.sqlite-viewer',
    'janisdd.vscode-edit-csv',
    'mechatroner.rainbow-csv',
  ];
  devcontainer.testExtensions(snapshot, expectedExtensions);
});

test('Container postCreateCommand is set properly', (): void => {
  const expectedCommand: string = `
          sudo apt-get update && \
          sudo apt-get install -y xdg-utils && \
          npm install -g @sap/cds-dk typescript ts-node @ui5/cli git-cliff && \
          npm install && \
          wget -q -O - https://packages.cloudfoundry.org/debian/cli.cloudfoundry.org.key | sudo apt-key add - && \
          echo "deb https://packages.cloudfoundry.org/debian stable main" | sudo tee /etc/apt/sources.list.d/cloudfoundry-cli.list && \
          sudo apt-get update && \
          sudo apt-get install cf8-cli
        `;
  devcontainer.testCommand(snapshot, expectedCommand);
});

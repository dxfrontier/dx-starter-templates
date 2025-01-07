import { SynthOutput } from 'projen/lib/util/synth';
import * as common from './common';
import { TaskSteps } from '../../src/types';

/**
 * Validates that container image is set properly.
 * @param snapshot Synthesized project output.
 */
export function testImage(snapshot: SynthOutput): void {
  expect(snapshot['.devcontainer.json'].image).toBe('mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye');
}

/**
 * Validates that container features are set properly.
 * @param snapshot Synthesized project output.
 */
export function testFeatures(snapshot: SynthOutput): void {
  const expectedFeatures = {
    'ghcr.io/devcontainers-contrib/features/curl-apt-get': 'latest',
    'ghcr.io/devcontainers/features/github-cli': 'latest',
  };
  expect(snapshot['.devcontainer.json'].features).toStrictEqual(expectedFeatures);
}

/**
 * Validates that container VsCode extensions are set properly.
 * @param snapshot Synthesized project output.
 */
export function testExtensions(snapshot: SynthOutput): void {
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
  ];
  expect(snapshot['.devcontainer.json'].customizations.vscode.extensions).toStrictEqual(expectedExtensions);
}

/**
 * Validates that container postCreateCommand is set properly.
 * @param snapshot Synthesized project output.
 */
export function testCommand(snapshot: SynthOutput): void {
  const expectedTasks: TaskSteps = {
    'install-dependencies': ['npm install'],
  };
  expect(snapshot['.devcontainer.json'].postCreateCommand).toBe(
    snapshot['package.json']!.scripts['install-dependencies'],
  );
  common.testScripts(snapshot, expectedTasks);
}

/**
 * Validates that project related files are added to .gitattributes and defined as linguist-generated.
 * @param snapshot Synthesized project output.
 */
export function testGitAttributes(snapshot: SynthOutput): void {
  const patterns: RegExp[] = [/\/\.devcontainer\.json linguist-generated( $|\s|$)/m];

  common.testGitAttributes(snapshot, patterns);
}

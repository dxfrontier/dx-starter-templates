import { SynthOutput } from 'projen/lib/util/synth';

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
  const standardFeatures = {
    'ghcr.io/devcontainers-contrib/features/curl-apt-get': 'latest',
    'ghcr.io/devcontainers/features/github-cli': 'latest',
  };
  expect(snapshot['.devcontainer.json'].features).toStrictEqual(standardFeatures);
}

/**
 * Validates that container VsCode extensions are set properly.
 * @param snapshot Synthesized project output.
 */
export function testExtensions(snapshot: SynthOutput, expectedExtensions: string[] = []): void {
  const standardExtensions: string[] = [
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
  ].sort();
  const extensions: string[] = expectedExtensions.length ? expectedExtensions : standardExtensions;
  expect(snapshot['.devcontainer.json'].customizations.vscode.extensions.sort()).toStrictEqual(extensions.sort());
}

/**
 * Validates that container postCreateCommand is set properly.
 * @param snapshot Synthesized project output.
 */
export function testCommand(snapshot: SynthOutput, expectedCommand: string[] = []): void {
  const standardCommand: string[] = ['npm run install-dependencies'];
  const command: string[] = Object.keys(expectedCommand).length ? expectedCommand : standardCommand;
  expect(snapshot['.devcontainer.json'].postCreateCommand).toStrictEqual(command);
}

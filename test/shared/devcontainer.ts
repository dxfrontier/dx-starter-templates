import { SynthOutput } from 'projen/lib/util/synth';

/**
 * Validates that container image is set properly.
 * @param snapshot Synthesized project output.
 */
export function testImage(snapshot: SynthOutput): void {
  expect(snapshot['.devcontainer/devcontainer.json'].image).toBe(
    'mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye',
  );
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
  expect(snapshot['.devcontainer/devcontainer.json'].features).toStrictEqual(standardFeatures);
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
  expect(snapshot['.devcontainer/devcontainer.json'].customizations.vscode.extensions.sort()).toStrictEqual(
    extensions.sort(),
  );
}

/**
 * Validates that container postCreateCommand is set properly.
 * @param snapshot Synthesized project output.
 */
export function testCommand(snapshot: SynthOutput, expectedCommand: string = ''): void {
  const standardCommand: string = 'bash scripts/install-dependencies.sh';
  const command: string = expectedCommand ? expectedCommand : standardCommand;
  expect(snapshot['.devcontainer/devcontainer.json'].postCreateCommand).toStrictEqual(command);
}

/**
 * Validates that container postCreateCommand is set properly.
 * @param snapshot Synthesized project output.
 */
export function testInstallDependencies(snapshot: SynthOutput, expectedCommand: string = ''): void {
  const standardCommand: string = `#!/bin/bash
set -e # Exit on error
set -x # Print commands for debugging

# Install global npm packages
npm install -g mbt @sap/cds @sap/cds-dk ts-node

# Install project dependencies
npm install

# Generate CDS typings
npx @cap-js/cds-typer "*" --outputDirectory @cds-models

# Add Cloud Foundry CLI repository
wget -q -O - https://packages.cloudfoundry.org/debian/cli.cloudfoundry.org.key | sudo apt-key add -
echo "deb https://packages.cloudfoundry.org/debian stable main" | sudo tee /etc/apt/sources.list.d/cloudfoundry-cli.list

# Update package lists and install required packages
sudo apt-get update
sudo apt-get install -y xdg-utils jq cf8-cli

# Install Cloud Foundry MultiApps Plugin
cf install-plugin -f https://github.com/cloudfoundry-incubator/multiapps-cli-plugin/releases/latest/download/multiapps-plugin.linux64`;
  const command: string = expectedCommand ? expectedCommand : standardCommand;
  expect(snapshot['.devcontainer/scripts/install-dependencies.sh']).toStrictEqual(command);
}

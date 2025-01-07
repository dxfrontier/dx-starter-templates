import { cdk, javascript } from 'projen';
import { TypeScriptProjectBase } from './src/base';
import {
  CommitLintJsii,
  DevContainerJsii,
  GitHubJsii,
  HuskyJsii,
  mimicRegistryHooks,
  NpmPackageJsii,
  PrettierJsii,
  EslintJsii,
  VsCodeJsii,
} from './src/jsii';

// export project for testing
export const project = new cdk.JsiiProject({
  name: '@dxfrontier/projen-template-projects',
  repositoryUrl: 'https://github.com/dxfrontier/projen-template-projects.git',
  author: 'Mathias von Kaiz',
  authorAddress: 'mathias.von-kaiz@abs-gmbh.de',
  copyrightOwner: 'ABS GmbH',
  licensed: false,

  packageManager: javascript.NodePackageManager.NPM,
  npmignoreEnabled: false,

  projenrcTs: true,
  typescriptVersion: '^5.7.2',
  // disableTsconfig: false,
  // disableTsconfigDev: true,

  prettier: true,
  eslint: false,

  githubOptions: { mergify: false, pullRequestLint: false }, // mergify and workflow pull-request-lint.yml
  buildWorkflow: false, // workflow build.yml
  release: false, // workflow release.yml
  pullRequestTemplate: false, // pull_request_template.yml
  depsUpgrade: false, // workflow upgrade-main.yml

  // repo specific
  defaultReleaseBranch: 'main',
  jsiiVersion: '^5.7.1',
  devDeps: [
    '@types/node@^22.10.2',
    'constructs@^10.4.2',
    'jsii-diff@^1.106.0',
    'jsii-docgen@^10.6.1',
    'jsii-pacmak@^1.106.0',
    'ts-node@^10.9.2',
    // 'jsii@^5.7.3',
    // 'jsii-rosetta@^5.7.1',
    // 'projen@^0.91.3',
  ],
  peerDeps: ['projen', 'constructs'],
  // bundledDeps: ['construct'],

  tsconfig: {
    compilerOptions: {
      allowImportingTsExtensions: true,
    },
  },
});

mimicRegistryHooks(project);

new NpmPackageJsii(project as unknown as TypeScriptProjectBase);
new DevContainerJsii(project as unknown as TypeScriptProjectBase);
new VsCodeJsii(project as unknown as TypeScriptProjectBase);
new GitHubJsii(project as unknown as TypeScriptProjectBase);
new PrettierJsii(project as unknown as TypeScriptProjectBase);
new EslintJsii(project as unknown as TypeScriptProjectBase);
new HuskyJsii(project as unknown as TypeScriptProjectBase);
new CommitLintJsii(project as unknown as TypeScriptProjectBase);

project.synth();

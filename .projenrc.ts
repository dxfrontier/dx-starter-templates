import { cdk, javascript } from 'projen';
import { NpmConfigJsii, TypeScriptConfigJsii } from './src/jsii';
// import { exec } from 'child_process';
// import { TypeScriptProjectBase } from './src/base';

// import { ProjectBase } from './src/base';
// import {
//   CommitLintJsii,
//   DevContainerJsii,
//   GitHubJsii,
//   HuskyJsii,
//   mimicRegistryHooks,
//   NpmPackageJsii,
//   PrettierJsii,
//   EslintJsii,
//   VsCodeJsii,
// } from './src/jsii';

// export project for testing
export const project = new cdk.JsiiProject({
  name: '@dxfrontier/projen-template-projects',
  repositoryUrl: 'https://github.com/dxfrontier/projen-template-projects.git',
  author: 'Mathias von Kaiz',
  authorAddress: 'mathias.von-kaiz@abs-gmbh.de',
  copyrightOwner: 'ABS GmbH',
  licensed: false,
  defaultReleaseBranch: 'dev',
  
  packageManager: javascript.NodePackageManager.NPM,
  npmignoreEnabled: false,

  projenrcTs: true,
  disableTsconfigDev: false,
  // disableTsconfig: false, // cannot be set as Jsii forces its own Typescript file
  
  // tsconfig: {
  //   compilerOptions: {
  //     allowImportingTsExtensions: true,
  //   },
  // },
  
  prettier: false,
  eslint: false,

  githubOptions: { mergify: false, pullRequestLint: false }, // mergify and workflow pull-request-lint.yml
  buildWorkflow: false, // workflow build.yml
  release: false, // workflow release.yml
  pullRequestTemplate: false, // pull_request_template.yml
  depsUpgrade: false, // workflow upgrade-main.yml

  // bundledDeps: ['construct'],
});

// mimicRegistryHooks(project);+
const tsConfig = new TypeScriptConfigJsii(project);
const npmConfig = new NpmConfigJsii(project);

tsConfig.setup();
npmConfig.setup();

// project.tryRemoveFile('package.json');
// exec('npm run eject')

// new NpmPackageJsii(project as unknown as TypeScriptProjectBase);
// new DevContainerJsii(project as unknown as TypeScriptProjectBase);
// new VsCodeJsii(project as unknown as TypeScriptProjectBase);
// new GitHubJsii(project as unknown as TypeScriptProjectBase);
// new PrettierJsii(project as unknown as TypeScriptProjectBase);
// new EslintJsii(project as unknown as TypeScriptProjectBase);
// new HuskyJsii(project as unknown as TypeScriptProjectBase);
// new CommitLintJsii(project as unknown as TypeScriptProjectBase);

project.synth();

import { cdk } from 'projen';
import { DevContainerConfigJsii, NpmConfigJsii, PrettierConfigJsii, TypeScriptConfigJsii, VsCodeConfigJsii } from './src/jsii';

// export project for testing
export const project = new cdk.JsiiProject({
  // These options are mandatory and cannot be spreaded
  name: '@dxfrontier/projen-template-projects',
  repositoryUrl: 'https://github.com/dxfrontier/projen-template-projects.git',
  author: 'Mathias von Kaiz',
  authorAddress: 'mathias.von-kaiz@abs-gmbh.de',
  copyrightOwner: 'ABS GmbH',
  defaultReleaseBranch: 'main',

  // additional options
  ...NpmConfigJsii.projectOptions,
  ...TypeScriptConfigJsii.projectOptions,
  ...DevContainerConfigJsii.projectOptions,
  ...VsCodeConfigJsii.projectOptions,
  ...PrettierConfigJsii.projectOptions,

  eslint: false,

  githubOptions: { mergify: false, pullRequestLint: false }, // mergify and workflow pull-request-lint.yml
  buildWorkflow: false, // workflow build.yml
  release: false, // workflow release.yml
  pullRequestTemplate: false, // pull_request_template.yml
  depsUpgrade: false, // workflow upgrade-main.yml
});

// First initialize all configurations to enable config dependencies between the configuration modules
const npmConfig = new NpmConfigJsii(project);
const tsConfig = new TypeScriptConfigJsii(project);
const devContainerConfig = new DevContainerConfigJsii(project);
const vsCodeConfig = new VsCodeConfigJsii(project);
// const githubConfig = new GitHubConfigJsii(project);
const prettierConfig = new PrettierConfigJsii(project);

// Then setup all configurations
npmConfig.setup();
tsConfig.setup();
devContainerConfig.setup();
vsCodeConfig.setup();
// githubConfig.setup();
prettierConfig.setup();


// new GitHubJsii(project as unknown as TypeScriptProjectBase);
// new EslintJsii(project as unknown as TypeScriptProjectBase);
// new HuskyJsii(project as unknown as TypeScriptProjectBase);
// new CommitLintJsii(project as unknown as TypeScriptProjectBase);

project.synth();

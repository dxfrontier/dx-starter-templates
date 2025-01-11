import { cdk } from 'projen';
import { DevContainerConfigJsii, EsLintConfigJsii, NpmConfigJsii, PrettierConfigJsii, TypeScriptConfigJsii, VsCodeConfigJsii } from './src/jsii';
import { Config } from './src/base';

// export project for testing
export const project = new cdk.JsiiProject({
  // These options are mandatory in a JsiiProject and cannot be spreaded
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
  ...EsLintConfigJsii.projectOptions,

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
const esLintConfig = new EsLintConfigJsii(project);

// Then setup all configurations
npmConfig.setup();
tsConfig.setup();
devContainerConfig.setup();
vsCodeConfig.setup();
// githubConfig.setup();
prettierConfig.setup();
esLintConfig.setup();

// new GitHubJsii(project as unknown as TypeScriptProjectBase);
// new HuskyJsii(project as unknown as TypeScriptProjectBase);
// new CommitLintJsii(project as unknown as TypeScriptProjectBase);

/**
 * Project hook
 * @override
 */
project.preSynthesize = (): void => {
  for (const [_, config] of Config.configRegistry) {
    config?.preSynthesize();
  }
}

/**
 * Project hook
 * @override
 */
project.postSynthesize = (): void => {
  for (const [_, config] of Config.configRegistry) {
    config?.postSynthesize();
  }
}

project.synth();

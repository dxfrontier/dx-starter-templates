// import { JsiiProject } from './src/jsii/project';
import { GitHubActionProject } from './src/github-action/project';
// import { TerraformModuleProject } from './src/terraform-module';

// export const project = new JsiiProject({
//   name: '@dxfrontier/projen-template-projects',
//   repositoryUrl: 'https://github.com/dxfrontier/projen-template-projects.git',
//   author: 'DXFrontier Dev Team',
//   authorAddress: 'mathias.von-kaiz@abs-gmbh.de',
//   copyrightOwner: 'ABS GmbH',
//   defaultReleaseBranch: 'dev',

//   projenEnabled: true,
//   commitLintEnabled: true,
//   devContainerEnabled: true,
//   eslintEnabled: true,
//   githubEnabled: true,
//   huskyEnabled: true,
//   jestEnabled: true,
//   npmEnabled: true,
//   prettierEnabled: true,
//   typescriptEnabled: true,
//   vscodeEnabled: true,
//   sampleCodeEnabled: true,
  
//   // use projen standard jest and npm
//   // the others like vscode, devContainer, ... 
//   // we use own configuration which are set to false as defaults
//   // in the JsiiProject itself
//   jest: true,
//   npm: true,
//   github: true,
// });

// export const project = new TerraformModuleProject({
//   name: '@dxfrontier/projen-template-projects',
//   // repositoryUrl: 'https://github.com/dxfrontier/projen-template-projects.git',
//   // author: 'DXFrontier Dev Team',
//   // authorAddress: 'mathias.von-kaiz@abs-gmbh.de',
//   copyrightOwner: 'ABS GmbH',
//   defaultReleaseBranch: 'dev',

//   projenEnabled: true,
//   commitLintEnabled: true,
//   devContainerEnabled: true,
//   eslintEnabled: true,
//   githubEnabled: true,
//   huskyEnabled: true,
//   jestEnabled: true,
//   npmEnabled: true,
//   prettierEnabled: true,
//   typescriptEnabled: true,
//   vscodeEnabled: true,
//   sampleCodeEnabled: true,
  
//   // use projen standard jest and npm
//   // the others like vscode, devContainer, ... 
//   // we use own configuration which are set to false as defaults
//   // in the JsiiProject itself
//   jest: true,
//   npm: true,
//   github: true,
// });

export const project = new GitHubActionProject({
  name: '@dxfrontier/projen-template-projects',
  // repositoryUrl: 'https://github.com/dxfrontier/projen-template-projects.git',
  // author: 'DXFrontier Dev Team',
  // authorAddress: 'mathias.von-kaiz@abs-gmbh.de',
  copyrightOwner: 'ABS GmbH',
  defaultReleaseBranch: 'dev',

  projenEnabled: true,
  commitLintEnabled: true,
  devContainerEnabled: true,
  eslintEnabled: true,
  githubEnabled: true,
  huskyEnabled: true,
  jestEnabled: true,
  npmEnabled: true,
  prettierEnabled: true,
  typescriptEnabled: true,
  vscodeEnabled: true,
  sampleCodeEnabled: true,
  
  // use projen standard jest and npm
  // the others like vscode, devContainer, ... 
  // we use own configuration which are set to false as defaults
  // in the JsiiProject itself
  jest: true,
  npm: true,
  github: true,
});

project.synth();

import { JsiiProject } from './src/jsii/project';

export const project = new JsiiProject({
  name: '@dxfrontier/projen-template-projects',
  repositoryUrl: 'https://github.com/dxfrontier/projen-template-projects.git',
  author: 'DXFrontier Dev Team',
  authorAddress: 'mathias.von-kaiz@abs-gmbh.de',
  copyrightOwner: 'ABS GmbH',
  defaultReleaseBranch: 'dev',

  projenEnabled: true,
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
  
  // use projen standard jest
  // the others like vscode, devContainer, ... 
  // we use own configuration which are set to false as defaults
  // in the JsiiProject itself
  jest: true,
});

project.synth();

import { cdk } from 'projen';
import { DevContainerConfigJsii, NpmConfigJsii, TypeScriptConfigJsii } from './src/jsii';

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
  
  prettier: false,
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

// Then setup all configurations
npmConfig.setup();
tsConfig.setup();
devContainerConfig.setup();




// new DevContainerJsii(project as unknown as TypeScriptProjectBase);
// new VsCodeJsii(project as unknown as TypeScriptProjectBase);
// new GitHubJsii(project as unknown as TypeScriptProjectBase);
// new PrettierJsii(project as unknown as TypeScriptProjectBase);
// new EslintJsii(project as unknown as TypeScriptProjectBase);
// new HuskyJsii(project as unknown as TypeScriptProjectBase);
// new CommitLintJsii(project as unknown as TypeScriptProjectBase);

// const sample = new SampleFile(project, 'tmp.txt', {
//   contents: `
//     a
//     c
//   `,
// });

// new TextFile(project, 'a.txt', {
//   lines: ['a', 'b']
// })

// project.preSynthesize = function () {
//   console.log('preSynthesize');
//   // project.addFields({
//   //   tmp: 'tmp'
//   // });
// }.bind(project)

// // const tmp = project.files.find(file => file.toString().includes('tmp.txt'));
// console.log((sample as any).options.contents)
// // console.log(file)
// // const options = { contents: '\n    a\n    c\n  ' };

// // Step 1: Parse the contents into an array of lines, trimming whitespace
// const lines = (sample as any).options.contents
//   .trim() // Remove any surrounding whitespace
//   .split('\n') // Split the string into lines
//   .map((line: any) => line.trim()); // Remove any leading/trailing spaces from each line

// // Step 2: Insert 'b' between 'a' and 'c' (or at the appropriate place)
// if (!lines.includes('b')) {
//   lines.push('b'); // Add 'b' to the array if it's not already there
// }

// // Step 3: Sort the lines alphabetically to ensure order
// lines.sort((a: any, b: any) => a.localeCompare(b));

// // Step 4: Join the lines back into a string
// const updatedContents = lines.join('\n');

// // Step 5: Assign the updated string back to sample.options.contents
// (sample as any).options.contents = updatedContents;



project.synth();

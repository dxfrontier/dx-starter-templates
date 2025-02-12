import { SynthOutput, synthSnapshot } from 'projen/lib/util/synth';
import { GitHubActionProject, GitHubActionProjectOptions } from '../../../src/github-action/index.ts';

let props: GitHubActionProjectOptions;
export let snapshot: SynthOutput;
export let project: GitHubActionProject;

beforeEach((): void => {
  props = {
    name: 'my-github-action',
    defaultReleaseBranch: 'dev', // this is needed due to https://github.com/projen/projen/pull/524
    commitlintEnabled: true,
    devContainerEnabled: true,
    githubEnabled: true,
    huskyEnabled: true,
    prettierEnabled: true,
    vscodeEnabled: true,
    sampleCodeEnabled: true,
  };

  project = new GitHubActionProject(props);
  snapshot = synthSnapshot(project);
});

afterEach((): void => {
  jest.resetAllMocks();
  jest.resetModules();
});

import { SynthOutput, synthSnapshot } from 'projen/lib/util/synth';
import { CapServiceProject, CapServiceProjectOptions } from '../../../src/cap-service/index.ts';

export let props: CapServiceProjectOptions;
export let snapshot: SynthOutput;
export let project: CapServiceProject;

beforeEach((): void => {
  props = {
    name: 'my-cap-service',
    defaultReleaseBranch: 'dev', // this is needed due to https://github.com/projen/projen/pull/524
    commitlintEnabled: true,
    devContainerEnabled: true,
    githubEnabled: true,
    huskyEnabled: true,
    prettierEnabled: true,
    vscodeEnabled: true,
    eslintEnabled: true,
    jestEnabled: true,
    sampleCodeEnabled: true,
  };

  project = new CapServiceProject(props);
  snapshot = synthSnapshot(project);
});

afterEach((): void => {
  jest.resetAllMocks();
  jest.resetModules();
});

import { JsiiProject } from 'projen/lib/cdk/index';
import { SynthOutput, synthSnapshot } from 'projen/lib/util/synth';


export let project: JsiiProject;
export let snapshot: SynthOutput;

beforeEach(async (): Promise<void> => {
  const jsiiProject: any = jest.requireActual('projen/lib/cdk/index').JsiiProject;

  jest.spyOn(jsiiProject.prototype, 'synth').mockImplementation();

  const projenrc = await import('../../../.projenrc.ts');
  project = projenrc.project;

  jsiiProject.prototype.synth.mockRestore();
  snapshot = synthSnapshot(project);
});

afterEach((): void => {
  jest.resetAllMocks();
  jest.resetModules();
});
// import './npm.test.ts';
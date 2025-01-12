// import { CommitLint } from './commitlint';
// import { DevContainer } from './devcontainer';
// import { GitHub } from './github';
// import { Husky } from './husky';
// import { NpmPackage } from './npm';
// import { Prettier } from './prettier';
// import { SampleCode } from './samplecode';
// import { VsCode } from './vscode';
import { TypeScriptProjectBase, TypeScriptProjectBaseOptions } from '../base/project';

/**
 * Defines a GitHub Action project.
 */
export class GitHubActionProject extends TypeScriptProjectBase {
  /**
   * Initializes the GitHub Action project.
   * @param options Additional project options.
   */
  constructor(options: TypeScriptProjectBaseOptions) {
    super({
      ...options,
      disableTsconfig: true,
      eslint: false,
      jest: false,
    });

    // new NpmPackage(this);
    // new DevContainer(this);
    // new VsCode(this);
    // new GitHub(this);
    // new Prettier(this);
    // new Husky(this);
    // new CommitLint(this);
    // new SampleCode(this);
  }
}
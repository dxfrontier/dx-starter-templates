import { javascript, JsonPatch, ObjectFile } from 'projen';
import { Config } from './config';
import { TypeScriptProjectBase } from './project';
import { ProjectOptions } from '../types';

/**
 * Base class for NPM implementing all relevant configuration.
 * @abstract
 */
export abstract class NpmConfigBase extends Config {
  /**
   * @override 
   */
  constructor(project: TypeScriptProjectBase) {
    super(project);

    this.addConfigToRegistry('npm');
  }

  /**
   * @override
   */
  public static get projectOptions(): ProjectOptions {
    return {
      licensed: false,
      packageManager: javascript.NodePackageManager.NPM,
      npmignoreEnabled: false,
    };
  }

  /**
   * Adds development dependencies in the `package.json` file.
   * @param devDependencies Development dependencies to be installed.
   * @public
   */
  public addDevDependencies(devDependencies: string[]): void {
    this.project.addDevDeps(...devDependencies);
  }

  /**
   * Adds peer dependencies in the `package.json` file.
   * @param peerDependencies Peer dependencies to be installed.
   * @public
   */
  public addPeerDependencies(peerDependencies: string[]): void {
    this.project.addPeerDeps(...peerDependencies);
  }

  /**
   * Adds dependencies in the `package.json` file.
   * @param dependencies Dependencies to be installed.
   * @public
   */
  public addDependencies(dependencies: string[]): void {
    this.project.addDeps(...dependencies);
  }

  /**
   * Adds entries in the `package.json` file.
   * @public
   */
  public addSettings(settings: Record<string, string>): void {
    this.project.addFields(settings);
  }

  /**
   * Adds scripts in the `package.json` file.
   * @public
   * Projen public API is not used as it would 
   * create Projen related tasks like `npx projen task` and would not be convenient
   * for projects that need a non Projen related approach on scaffolding.
   */
  public addScripts(scripts: Record<string, string>): void {
    const packageJson: ObjectFile | undefined = this.project.tryFindObjectFile('package.json');

    for (const script in scripts) {
      packageJson!.patch(JsonPatch.add(`/scripts/${script}`, scripts[script]));
    }
  }
}

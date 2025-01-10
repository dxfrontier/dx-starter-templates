import { JsonPatch } from 'projen';
import { Config } from './config';
import { TypeScriptProjectBase } from './project';

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
   */
  public addScripts(scripts: Record<string, string>): void {
    // for (const [name, command] of Object.entries(scripts)) {
    //   this.project.addTask(name, { exec: command as string, receiveArgs: true });
    // }
    const packageJson = this.project.tryFindObjectFile('package.json');
    packageJson!.patch(JsonPatch.add('/scripts', scripts));
  }

  /**
   * @override
   */
  public setup(): void {
    this.addConfig();
  }
}
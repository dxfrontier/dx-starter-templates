import { JsonPatch, ObjectFile } from 'projen';
import { Config } from './config';
import { ProjectTypes, Settings } from '../types';
import { TypeScriptProject } from 'projen/lib/typescript';
import { isValidProjectTypes } from '../utils';

/**
 * Base class for implementing all relevant NPM configuration.
 *
 * This class acts as a base for handling NPM configuration within projects.
 */
export class NpmConfigBase extends Config {
  protected dependencies: string[] = [];
  protected devDependencies: string[] = [];
  protected peerDependencies: string[] = [];
  protected settings: Settings;
  protected scripts: Record<string, string>;

  constructor(project: ProjectTypes) {
    super(project);

    this.dependencies = [...this.standardDependencies];
    this.devDependencies = [...this.standardDevDependencies];
    this.peerDependencies = [...this.standardPeerDependencies];
    this.settings = this.standardSettings;
    this.scripts = this.standardScripts;
  }

  /**
   * Gets the standard dependencies for the project.
   *
   * @returns A list of standard dependencies.
   */
  protected get standardDependencies(): string[] {
    return [];
  }

  /**
   * Gets the standard devDependencies for the project.
   *
   * @returns A list of standard devDependencies.
   */
  protected get standardDevDependencies(): string[] {
    return [];
  }

  /**
   * Gets the standard peerDependencies for the project.
   *
   * @returns A list of standard peerDependencies.
   */
  protected get standardPeerDependencies(): string[] {
    return [];
  }

  /**
   * Gets the standard settings for the project.
   *
   * @returns A settings object.
   */
  protected get standardSettings(): Settings {
    return {};
  }

  /**
   * Gets the standard npm scripts for the project.
   *
   * @returns A record of script names and their commands.
   */
  protected get standardScripts(): Record<string, string> {
    return {};
  }

  /**
   * Getter retrieving the npm scripts to be removed from NPM Package.
   * These scripts are added by Projen on project initialization
   * and are not needed for our projects.
   * Overwrite this method if you want to keep the projen standard scripts.
   * @return Projen standard script entries.
   * @protected
   */
  protected get removeScripts(): string[] {
    return [
      'clobber',
      'compile',
      'default',
      'eject',
      'package',
      'post-compile',
      'post-upgrade',
      'pre-compile',
      'release',
      'test',
      'test:watch',
      'unbump',
      'upgrade',
      'watch',
      'projen',
      'build',
    ];
  }

  /**
   * Adds custom devDependencies to the project.
   * @param dependencies List of dependencies to add.
   */
  public addDependencies(dependencies: string[]): void {
    dependencies.forEach((dep) => {
      if (!this.dependencies.includes(dep)) {
        this.dependencies.push(dep);
      }
    });
  }

  /**
   * Adds custom devDependencies to the project.
   * @param dependencies List of devDependencies to add.
   */
  public addDevDependencies(dependencies: string[]): void {
    dependencies.forEach((dep) => {
      if (!this.devDependencies.includes(dep)) {
        this.devDependencies.push(dep);
      }
    });
  }

  /**
   * Adds custom devDependencies to the project.
   * @param dependencies List of peerDependencies to add.
   */
  public addPeerDependencies(dependencies: string[]): void {
    dependencies.forEach((dep) => {
      if (!this.peerDependencies.includes(dep)) {
        this.peerDependencies.push(dep);
      }
    });
  }

  /**
   * Adds custom settings to the project.
   * @param settings Record of settings to add.
   */
  public addSettings(settings: Settings): void {
    this.settings = { ...this.settings, ...settings };
  }

  /**
   * Adds custom npm scripts to the project.
   *
   * @param scripts - A record of script names and their commands.
   */
  public addScripts(scripts: Record<string, string>): void {
    this.scripts = { ...this.scripts, ...scripts };
  }

  /**
   * Patches scripts in the `package.json` file.
   * Projen public API is not used as it would
   * create Projen related tasks like `npx projen task` and would not be convenient
   * for projects that need a non Projen related approach on scaffolding.
   *
   * @param scripts - A record of script names and their commands to patch.
   */
  public patchScriptsAdd(scripts: Record<string, string>): void {
    const packageJson: ObjectFile | undefined = this.project.tryFindObjectFile('package.json');

    for (const script in scripts) {
      packageJson!.patch(JsonPatch.add(`/scripts/${script}`, scripts[script]));
    }
  }

  /**
   * Patches devDependencies in the `package.json` file.
   *
   * @param devDependencies - A list of development dependencies to patch.
   */
  public patchDevDependencyRemove(devDependencies: string[]): void {
    const packageJson: ObjectFile | undefined = this.project.tryFindObjectFile('package.json');

    for (const dep of devDependencies) {
      packageJson!.patch(JsonPatch.remove(`/devDependencies/${dep}`));
    }
  }

  /**
   * Removes the NPM Package scripts associated with Projen NPM Package initialization.
   * Overwrite this method if you want to keep the projen standard scripts.
   * @protected
   */
  public removeScriptsOnInit(scripts: string[]): void {
    for (const script of scripts) {
      if (this.project instanceof TypeScriptProject) {
        this.project.removeScript(script);
      }
    }
  }

  public override applyConfig(): void {
    if (isValidProjectTypes(this.project)) {
      this.project.addDeps(...this.dependencies);
      this.project.addDevDeps(...this.devDependencies);
      this.project.addPeerDeps(...this.peerDependencies);
      this.project.addFields(this.settings);
    }
    this.patchScriptsAdd(this.scripts);
  }
}

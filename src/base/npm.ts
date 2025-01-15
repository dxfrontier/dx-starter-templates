import { JsonPatch, ObjectFile } from 'projen';
import { JsiiProject } from '../jsii';
import { Config, ConfigStrategy } from './config';
import { BaseProject } from './project';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Settings = Record<string, any>; // to be compliant with projen api

/**
 * Base class for implementing all relevant NPM configuration.
 *
 * This class acts as a base for handling NPM configuration within projects
 * that extend either `BaseProject` or `JsiiProject`. It determines the configuration
 * strategy to use based on whether Projen is being used.
 *
 * @template T Type of project, which extends `BaseProject` or `JsiiProject`.
 * @extends Config
 */
export class NpmConfigBase<T extends BaseProject | JsiiProject> extends Config<T> {
  protected dependencies: Set<string>;
  protected devDependencies: Set<string>;
  protected peerDependencies: Set<string>;
  protected settings: Settings;
  protected scripts: Record<string, string>;

  constructor(project: T) {
    super(project);

    const strategy: ConfigStrategy = new ProjenStandardNpmConfigBaseStrategy();
    this.setStrategy(strategy);

    this.dependencies = new Set(this.standardDependencies);
    this.devDependencies = new Set(this.standardDevDependencies);
    this.peerDependencies = new Set(this.standardPeerDependencies);
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
   * Adds custom devDependencies to the project.
   * @param dependencies List of dependencies to add.
   */
  public addDependencies(dependencies: string[]): void {
    dependencies.forEach((dep) => this.dependencies.add(dep));
  }

  /**
   * Adds custom devDependencies to the project.
   * @param dependencies List of devDependencies to add.
   */
  public addDevDependencies(dependencies: string[]): void {
    dependencies.forEach((dep) => this.devDependencies.add(dep));
  }

  /**
   * Adds custom devDependencies to the project.
   * @param dependencies List of peerDependencies to add.
   */
  public addPeerDependencies(dependencies: string[]): void {
    dependencies.forEach((dep) => this.peerDependencies.add(dep));
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
   * Returns all dependencies, including standard and custom ones.
   *
   * @returns An array of dependencies.
   */
  public getDependencies(): string[] {
    return Array.from(this.dependencies);
  }

  /**
   * Returns all devDependencies, including standard and custom ones.
   *
   * @returns An array of devDependencies.
   */
  public getDevDependencies(): string[] {
    return Array.from(this.devDependencies);
  }

  /**
   * Returns all peerDependencies, including standard and custom ones.
   *
   * @returns An array of peerDependencies.
   */
  public getPeerDependencies(): string[] {
    return Array.from(this.peerDependencies);
  }

  /**
   * Returns all settings, including standard and custom ones.
   *
   * @returns A settings object.
   */
  public getSettings(): Settings {
    return this.settings;
  }

  /**
   * Returns all npm scripts, including standard and custom ones.
   *
   * @returns A record of script names and their commands.
   */
  public getScripts(): Record<string, string> {
    return this.scripts;
  }

  /**
   * Patches scripts in the `package.json` file.
   * Projen public API is not used as it would
   * create Projen related tasks like `npx projen task` and would not be convenient
   * for projects that need a non Projen related approach on scaffolding.
   *
   * @param scripts - A record of script names and their commands to patch.
   */
  public patchScripts(scripts: Record<string, string>): void {
    const packageJson: ObjectFile | undefined = this.project.tryFindObjectFile('package.json');

    for (const script in scripts) {
      packageJson!.patch(JsonPatch.add(`/scripts/${script}`, scripts[script]));
    }
  }
}

/**
 * Configuration strategy for Projen standard API NPM base configuration.
 *
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class ProjenStandardNpmConfigBaseStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  applyConfig(config: Config<T>): void {
    if (config instanceof NpmConfigBase) {
      config.project.addDeps(...config.getDependencies());
      config.project.addDevDeps(...config.getDevDependencies());
      config.project.addPeerDeps(...config.getPeerDependencies());
      config.project.addFields(config.getSettings());
      config.patchScripts(config.getScripts());
    }
  }
}

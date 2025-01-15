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
export class NpmBaseConfig<T extends BaseProject | JsiiProject> extends Config<T> {
  protected dependencies: Set<string>;
  protected devDependencies: Set<string>;
  protected peerDependencies: Set<string>;
  protected settings: Settings;
  protected scripts: Record<string, string>;

  constructor(project: T) {
    super(project);

    const strategy: ConfigStrategy = new ProjenStandardNpmBaseConfigStrategy();
    this.setStrategy(strategy);

    this.dependencies = new Set(this.standardDependencies);
    this.devDependencies = new Set(this.standardDevDependencies);
    this.peerDependencies = new Set(this.standardPeerDependencies);
    this.settings = this.standardSettings;
    this.scripts = this.standardScripts;
  }

  protected get standardDependencies(): string[] {
    return [];
  }

  protected get standardDevDependencies(): string[] {
    return [];
  }

  protected get standardPeerDependencies(): string[] {
    return [];
  }

  protected get standardSettings(): Settings {
    return {};
  }

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

  public addScripts(scripts: Record<string, string>): void {
    this.scripts = { ...this.scripts, ...scripts };
  }

  /**
   * Returns all dependencies, including standard and custom ones.
   */
  public getDependencies(): string[] {
    return Array.from(this.dependencies);
  }

  /**
   * Returns all devDependencies, including standard and custom ones.
   */
  public getDevDependencies(): string[] {
    return Array.from(this.devDependencies);
  }

  /**
   * Returns all peerDependencies, including standard and custom ones.
   */
  public getPeerDependencies(): string[] {
    return Array.from(this.peerDependencies);
  }

  /**
   * Returns all settings, including standard and custom ones.
   */
  public getSettings(): Settings {
    return this.settings;
  }

  public getScripts(): Record<string, string> {
    return this.scripts;
  }

  /**
   * Patches scripts in the `package.json` file.
   * @public
   * Projen public API is not used as it would
   * create Projen related tasks like `npx projen task` and would not be convenient
   * for projects that need a non Projen related approach on scaffolding.
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
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class ProjenStandardNpmBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  // registerConfig(_config: Config<T>): void {}
  applyConfig(config: Config<T>): void {
    if (config instanceof NpmBaseConfig) {
      config.project.addDeps(...config.getDependencies());
      config.project.addDevDeps(...config.getDevDependencies());
      config.project.addPeerDeps(...config.getPeerDependencies());
      config.project.addFields(config.getSettings());
      config.patchScripts(config.getScripts());
    }
  }
}

import { JsiiProject } from '../jsii';
import { Config, ConfigStrategy } from './config';
import { BaseProject } from './project';

export type Settings = { [key: string]: any }  // to be compliant with projen api

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
  protected settings: Settings; // to be compliant with projen api

  constructor(project: T, useProjen: boolean, useProjenApi: boolean) {
    super(project);

    const strategy = useProjen && useProjenApi
      ? new ProjenStandardNpmBaseConfigStrategy()
      : useProjen && !useProjenApi
        ? new ProjenTrackedNpmBaseConfigStrategy()
        : new NonProjenNpmBaseConfigStrategy();

    this.setStrategy(strategy);
    this.dependencies = new Set(this.standardDependencies);
    this.devDependencies = new Set(this.standardDevDependencies);
    this.peerDependencies = new Set(this.standardPeerDependencies);
    this.settings = this.standardSettings;
  }

  //////////////////////////////////////////////////
  // Config
  //////////////////////////////////////////////////
  
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

  //////////////////////////////////////////////////
  // Public API
  //////////////////////////////////////////////////

  /**
   * Adds custom devDependencies to the project.
   * @param dependencies List of dependencies to add.
   */
  public addDependencies(dependencies: string[]): void {
    dependencies.forEach(dep => this.dependencies.add(dep));
  }

  /**
   * Adds custom devDependencies to the project.
   * @param dependencies List of devDependencies to add.
   */
  public addDevDependencies(dependencies: string[]): void {
    dependencies.forEach(dep => this.devDependencies.add(dep));
  }

  /**
   * Adds custom devDependencies to the project.
   * @param dependencies List of peerDependencies to add.
   */
  public addPeerDependencies(dependencies: string[]): void {
    dependencies.forEach(dep => this.peerDependencies.add(dep));
  }

  /**
   * Adds custom settings to the project.
   * @param settings Record of settings to add.
   */
  public addSettings(settings: Settings): void {
    this.settings = { ...this.settings, settings };
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

  //////////////////////////////////////////////////
  // Overrides
  //////////////////////////////////////////////////

  public override preSynthesize(): void {
    console.log('npm preSynth')
    // call api calls here
    super.preSynthesize();
  }
}

/**
 * Configuration strategy for Projen standard API NPM base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class ProjenStandardNpmBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  applyConfig(_config: Config<T>): void {
    console.log('npm Base - apply - Projen API')
  }
  writeConfig(config: Config<T>): void {
    console.log('npm Base - write - Projen API')
    if (config instanceof NpmBaseConfig) {
      config.project.addDeps(...config.getDependencies());
      config.project.addDevDeps(...config.getDevDependencies());
      config.project.addPeerDeps(...config.getPeerDependencies());
      config.project.addFields(config.getSettings());
    }
  }
}

/**
 * Configuration strategy for Projen-tracked NPM base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class ProjenTrackedNpmBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  applyConfig(_config: Config<T>): void {
    console.log('npm Base - apply - Projen tracked')
  }
  writeConfig(config: Config<T>): void {
    console.log('npm Base - write - Projen tracked')
    if (config instanceof NpmBaseConfig) {
      config.project.addDeps(...config.getDependencies());
      config.project.addDevDeps(...config.getDevDependencies());
      config.project.addPeerDeps(...config.getPeerDependencies());
      config.project.addFields(config.getSettings());
    }
  }
}

/**
 * Applies the Projen-based NPM configuration to the project.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class NonProjenNpmBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  applyConfig(_config: Config<T>): void {
    console.log('npm Base - apply - non Projen')
  }
  writeConfig(_config: Config<T>): void {
    console.log('npm Base - write - non Projen')
  }
}

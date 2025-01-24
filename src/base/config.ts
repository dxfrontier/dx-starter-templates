import { Component, Project } from 'projen';
import { ConfigFile, Settings } from '../util/types/types';

/**
 * Base class for creating and managing project configurations.
 * This class allows configuring a project using different strategies.
 * It requires the project to be either a `BaseProject` or `JsiiProject`.
 */
export class Config extends Component {
  /**
   * Initializes the config for a specified project.
   * @param project The project to configure the configuration module for.
   */
  constructor(project: Project) {
    super(project);
  }

  /**
   * Gets the additional development dependencies required for configuration.
   *
   * @returns A list of package names with version specifications.
   */
  protected get additionalDevDependencies(): string[] {
    return [];
  }

  /**
   * Gets the additional peer dependencies required for configuration.
   *
   * @returns A list of package names with version specifications.
   */
  protected get additionalPeerDependencies(): string[] {
    return [];
  }

  /**
   * Gets the additional dependencies required for configuration.
   *
   * @returns A list of package names with version specifications.
   */
  protected get additionalDependencies(): string[] {
    return [];
  }

  /**
   * Gets the additional settings to be added to the project's configuration.
   *
   * @returns A settings object to be merged into the project's settings.
   */
  protected get additionalSettings(): Settings {
    return {};
  }

  /**
   * Gets the additional npm scripts to be added to the project's configuration.
   *
   * @returns A record of script names and their corresponding commands.
   */
  protected get additionalScripts(): Record<string, string> {
    return {};
  }

  /**
   * Gets additional ignore patterns to be added to the project's ignore configuration.
   *
   * @returns A list of ignore patterns.
   */
  protected get additionalIgnorePatterns(): string[] {
    return [];
  }

  /**
   * Gets additional attributes patterns to be added to the project's attributes configuration.
   *
   * @returns A list of attibute patterns.
   */
  protected get additionalAttributesPatterns(): string[] {
    return [];
  }

  /**
   * Gets the configuration file content.
   *
   * @returns An object where the key is the filename and the value is an array of file lines.
   */
  protected get configFile(): ConfigFile {
    return {};
  }

  /**
   * Gets the ignore file content.
   *
   * @returns An object where the key is the filename and the value is an array of file lines.
   */
  protected get ignoreFile(): Record<string, string[]> {
    return {};
  }

  /**
   * Registers config to other configuration modules.
   * Public API call addressing other modules should be performed here,
   * to guarantee proper configuration handling.
   *
   * This methods should be called only in the projects `preSynthesize` phase
   * and not on the configuration modules `preSynthesize` function otherwise
   * it is not guaranteed that all needed modules are setup properly.
   */
  public registerConfig(): void {
    // do api calls to other configuration modules here.
  }

  /**
   * Applies the current configuration based on the strategy to the project.
   *
   * To ensure proper configuration handling `applyConfig` should be called in
   * `preSynthesize` phase of the configuration module and not from project itself.
   *
   * Subclasses should overwrite it to guarantee proper module configuration.
   */
  public applyConfig(): void {}

  public override preSynthesize(): void {
    this.applyConfig();
    super.preSynthesize();
  }

  public override postSynthesize(): void {
    super.postSynthesize();
  }
}

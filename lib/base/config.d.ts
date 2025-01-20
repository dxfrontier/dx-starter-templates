import { Component, Project } from 'projen';
/**
 * Base class for creating and managing project configurations.
 * This class allows configuring a project using different strategies.
 * It requires the project to be either a `BaseProject` or `JsiiProject`.
 */
export declare class Config extends Component {
    /**
     * Initializes the config for a specified project.
     * @param project The project to configure the configuration module for.
     */
    constructor(project: Project);
    /**
     * Registers config to other configuration modules.
     * Public API call addressing other modules should be performed here,
     * to guarantee proper configuration handling.
     *
     * This methods should be called only in the projects `preSynthesize` phase
     * and not on the configuration modules `preSynthesize` function otherwise
     * it is not guaranteed that all needed modules are setup properly.
     */
    registerConfig(): void;
    /**
     * Applies the current configuration based on the strategy to the project.
     *
     * To ensure proper configuration handling `applyConfig` should be called in
     * `preSynthesize` phase of the configuration module and not from project itself.
     *
     * Subclasses should overwrite it to guarantee proper module configuration.
     */
    applyConfig(): void;
    preSynthesize(): void;
    postSynthesize(): void;
}

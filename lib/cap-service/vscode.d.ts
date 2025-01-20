import { CapServiceProject } from '.';
import { VsCodeConfigBase } from '../base';
import { Settings } from '../types';
/**
 * Implementing all relevant VsCode configuration for the CapService project.
 */
export declare class VsCodeConfigCapService extends VsCodeConfigBase {
    constructor(project: CapServiceProject);
    /**
     * Gets the launch config file to be added to the project's configuration.
     *
     * @returns A record of the having the path to the file as key and the content as value.
     */
    protected get configFileLaunch(): Settings;
    /**
     * Gets the tasks config file to be added to the project's configuration.
     *
     * @returns A record of the having the path to the file as key and the content as value.
     */
    protected get configFileTasks(): Settings;
    /**
     * Creates the launch configuration file in the project directory.
     */
    createConfigLaunch(): void;
    /**
     * Creates the tasks configuration file in the project directory.
     */
    createConfigTasks(): void;
    protected get additionalIgnorePatterns(): string[];
    applyConfig(): void;
}

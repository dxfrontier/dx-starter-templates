import { CapServiceProject, CapServiceProjectOptions } from './project';
import { SampleCodeConfigBase } from '../base';
/**
 * Implementing all relevant SampleCode configuration for the CapService project.
 */
export declare class SampleCodeConfigCapService extends SampleCodeConfigBase {
    private options;
    constructor(project: CapServiceProject, options: CapServiceProjectOptions);
    /**
     * Capire root directory templates for the SampleCode configuration.
     * @return Contents for sample root directory files.
     * @protected
     */
    protected get sampleCodeFileRootTemplates(): Record<string, string[]>;
    /**
     * Capire db directory templates for the SampleCode configuration.
     * @return Contents for sample db directory files.
     * @protected
     */
    protected get sampleCodeFileDbTemplates(): Record<string, string[]>;
    /**
     * Capire data directory templates for the SampleCode configuration.
     * @return Contents for sample data directory files.
     * @protected
     */
    protected get sampleCodeFileDataTemplates(): Record<string, string[]>;
    /**
     * Creates the template files for the root directory.
     */
    createRootTemplates(): void;
    /**
     * Creates the template files for the db directory.
     */
    createDbTemplates(): void;
    /**
     * Creates the template files for the data directory.
     */
    createDataTemplates(): void;
    applyConfig(): void;
}

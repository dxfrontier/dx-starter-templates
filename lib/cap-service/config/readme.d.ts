import { CapServiceProjectOptions } from '../project';
interface ReadmeConfig {
    getReadme(options: CapServiceProjectOptions): {
        filename: string;
        contents: string;
    };
}
/**
 * Implementing all relevant Readme configuration for the CapService project.
 * We do not extend Base config classes as this is a special case.
 */
export declare class ReadmeConfigCapService implements ReadmeConfig {
    getReadme(options: CapServiceProjectOptions): {
        filename: string;
        contents: string;
    };
}
export {};

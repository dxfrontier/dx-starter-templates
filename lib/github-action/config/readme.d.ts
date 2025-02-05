import { BaseProjectOptions } from '../../base';
import { ReadmeConfig } from '../../util/types';
/**
 * Implementing all relevant Readme configuration for the CapService project.
 * We do not extend Base config classes as this is a special case.
 */
export declare class ReadmeConfigGithub implements ReadmeConfig {
    getReadme(options: BaseProjectOptions): {
        filename: string;
        contents: string;
    };
}

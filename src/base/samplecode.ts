import { SampleFile } from 'projen';
import { JsiiProject } from '../jsii';
import { Config, ConfigStrategy } from './config';
import { BaseProject } from './project';

/**
 * Base class for implementing all relevant SampleCode configuration.
 *
 * This class acts as a base for handling SampleCode configuration within projects
 * that extend either `BaseProject` or `JsiiProject`. It determines the configuration
 * strategy to use based on whether Projen is being used.
 *
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 * @extends Config
 */
export class SampleCodeConfigBase<T extends BaseProject | JsiiProject> extends Config<T> {
  constructor(project: T) {
    super(project);

    const strategy: ConfigStrategy = new SampleCodeConfigBaseStrategy();
    this.setStrategy(strategy);
  }

  /**
   * Gets the sample file content.
   *
   * @returns An object where the key is the filename and the value is an array of file lines.
   */
  protected get sampleCodeFile(): Record<string, string[]> {
    return {};
  }

  /**
   * Creates the sample file(s) in the project directory.
   */
  public createSampleCode(): void {
    for (const filePath in this.sampleCodeFile) {
      new SampleFile(this.project, filePath, {
        contents: this.sampleCodeFile[filePath].join('\n'),
      });
    }
  }
}

/**
 * Configuration strategy for SampleCode base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class SampleCodeConfigBaseStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  applyConfig(config: Config<T>): void {
    if (config instanceof SampleCodeConfigBase) {
      config.createSampleCode();
    }
  }
}

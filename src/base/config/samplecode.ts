import { SampleFile } from 'projen';
import { Config } from '../config';

/**
 * Base class for implementing all relevant sample code configuration.
 *
 * This class acts as a base for handling sample code configuration within projects.
 */
export class SampleCodeConfigBase extends Config {
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
  protected createSampleCode(): void {
    for (const filePath in this.sampleCodeFile) {
      new SampleFile(this.project, filePath, {
        contents: this.sampleCodeFile[filePath].join('\n'),
      });
    }
  }

  public override applyConfig(): void {
    this.createSampleCode();
  }
}

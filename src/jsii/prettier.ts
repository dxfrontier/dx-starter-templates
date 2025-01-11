import { PrettierConfigBase } from '../base';

/**
 * DevContainer implementing all relevant configuration for the Jsii project.
 * @extends TypeScriptConfigBase
 */
export class PrettierConfigJsii extends PrettierConfigBase {
  /**
   * @override
   */
  public addIgnoreEntries(entries: string[]): void {
    this.config.ignoreFile!.content.push(...entries);
  }
}
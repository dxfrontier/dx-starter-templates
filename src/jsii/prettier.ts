import { FileBase, TextFile } from 'projen';
import { PrettierConfigBase } from '../base';

/**
 * DevContainer implementing all relevant configuration for the Jsii project.
 * @extends TypeScriptConfigBase
 */
export class PrettierConfigJsii extends PrettierConfigBase {
  /**
   * @param entries Ignore entries to be added.
   * The Projen API is used for `Jsii` projects (Projen tracked projects)
   * and therefore `this.project.lines` can be used to alter the file.
   * No update on file level is needed here.
   * @override
   */
  public addIgnoreEntries(entries: string[]): void {
    const ignoreFile: TextFile | undefined = this.project.files.find((file: FileBase): any => file.toString().includes(this.config.ignore!.path)) as TextFile;
    for (const entry of entries) {
      ignoreFile.addLine(entry);
    }
  }
}
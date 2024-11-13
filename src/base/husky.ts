import { TextFile } from 'projen';
import { Component } from './component';
import { Scripts } from '../types';
import { TypeScriptProjectBase } from './project';

/**
 * Base class for Husky component implementing all relevant configuration.
 * @abstract
 */
export abstract class HuskyBase extends Component {
  /**
   * Initializes the Husky component.
   * @param project The project to configure Husky for.
   */
  constructor(project: TypeScriptProjectBase) {
    super(project);
  }

  /**
   * File path to the Husky commit-msg hook.
   * @protected
   */
  protected get commitMsgFilePath(): string {
    return '.husky/commit-msg';
  }

  /**
   * File path to the Husky pre-commit hook.
   * @protected
   */
  protected get preCommitFilePath(): string {
    return '.husky/pre-commit';
  }

  /**
   * Commit-msg hook template for the Husky configuration.
   * @protected
   */
  protected get commitMsgTemplate(): string[] {
    return [
      '# Generated by projen.To modify, edit.projenrc.ts and run "npx projen".',
      '',
      'npx --no-install commitlint --edit "$1"',
    ];
  }

  /**
   * Pre-commit hook template for the Husky configuration.
   * @protected
   */
  protected get preCommitTemplate(): string[] {
    return ['# Generated by projen.To modify, edit.projenrc.ts and run "npx projen".', '', 'npx lint-staged'];
  }

  /**
   * NPM scripts for the CommitLint component.
   * @protected
   */
  protected get scripts(): Scripts {
    return {
      prepare: 'husky || true',
    };
  }

  /**
   * NPM packages to be installed as devDependencies for the CommitLint component.
   * @protected
   */
  protected get devDependencies(): string[] {
    return ['husky'];
  }

  /**
   * Creates the template file for the Husky commit-msg hook.
   * @private
   */
  private createCommitMsgHook(): void {
    new TextFile(this.project, this.commitMsgFilePath, {
      lines: this.commitMsgTemplate,
    });
  }

  /**
   * Creates the template file for the Husky pre-commit hook.
   * @private
   */
  private createPreCommitHook(): void {
    new TextFile(this.project, this.preCommitFilePath, {
      lines: this.preCommitTemplate,
    });
  }

  protected addTemplates(): void {
    this.createCommitMsgHook();
    this.createPreCommitHook();
  }

  protected addScripts(): void {
    for (const [name, command] of Object.entries(this.scripts)) {
      this.project.addTask(name, { exec: command });
    }
  }

  protected addDevDependencies(): void {
    this.project.addDevDeps(...this.devDependencies);
  }

  protected addGitAttributes(): void {
    this.project.gitattributes.addAttributes(`/${this.commitMsgFilePath}`, 'linguist-generated');
    this.project.gitattributes.addAttributes(`/${this.preCommitFilePath}`, 'linguist-generated');
  }
}

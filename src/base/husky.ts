import { TextFile } from 'projen';
import { Config } from './config';
import { ProjectTypes } from '../types';

/**
 * Base class for implementing all relevant Husky configuration.
 *
 * This class acts as a base for handling Husky configuration within projects.
 */
export class HuskyConfigBase extends Config {
  constructor(project: ProjectTypes) {
    super(project);
  }

  /**
   * Gets the additional development dependencies required for configuration.
   *
   * @returns A list of package names with version specifications.
   */
  protected get additionalDevDependencies(): string[] {
    return ['husky@^9.1.7'];
  }

  /**
   * Gets the additional npm scripts to be added to the project's configuration.
   *
   * @returns A record of script names and their corresponding commands.
   */
  protected get additionalScripts(): Record<string, string> {
    return {
      prepare: 'husky || true',
    };
  }

  /**
   * Gets the configuration file content.
   *
   * @returns An object where the key is the filename and the value is an array of file lines.
   */
  protected get configFile(): Record<string, string[]> {
    return {
      '.husky/commit-msg': ['npx --no-install commitlint --edit "$1"'],
      '.husky/pre-commit': ['npx lint-staged'],
    };
  }

  /**
   * Gets additional ignore patterns to be added to the project's ignore configuration.
   *
   * @returns A list of ignore patterns.
   */
  protected get additionalIgnorePatterns(): string[] {
    const patterns: string[] = [];
    for (const filePath in this.configFile) {
      patterns.push(`/${filePath}`);
    }
    return patterns;
  }

  public override registerConfig(): void {
    this.project.npmConfig?.addDevDependencies(this.additionalDevDependencies);
    this.project.npmConfig?.addScripts(this.additionalScripts);
    this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
  }

  public override applyConfig(): void {
    for (const filePath in this.configFile) {
      new TextFile(this.project, filePath, {
        lines: this.configFile[filePath],
      });
    }
  }
}

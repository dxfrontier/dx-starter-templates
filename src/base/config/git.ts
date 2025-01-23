import { Config } from '../config';
import { ProjectTypes } from '../../types/project';

/**
 * Base class for implementing all relevant Git configuration.
 *
 * This class acts as a base for handling Git configuration within projects.
 */
export class GitConfigBase extends Config {
  protected ignorePatterns: string[];

  constructor(project: ProjectTypes) {
    super(project);

    this.ignorePatterns = this.standardIgnorePatterns;
  }

  /**
   * Gets the standard ignore patterns required for configuration.
   *
   * @returns A list of ignore patterns.
   */
  protected get standardIgnorePatterns(): string[] {
    return [];
  }

  /**
   * Adds custom ignore patterns to the project's configuration.
   *
   * @param patterns - An array of file or directory patterns to be ignored.
   */
  public addIgnorePatterns(patterns: string[]): void {
    this.ignorePatterns = [...this.ignorePatterns, ...patterns];
  }

  public override applyConfig(): void {
    for (const pattern of this.ignorePatterns) {
      this.project.addGitIgnore(pattern);
    }
  }
}

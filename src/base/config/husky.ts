import { TextFile } from 'projen';
import { Config } from '../config';
import { isValidProject } from '../../util/utils';
import { ProjectTypes } from '../../util/types/project';
import { ConfigFile } from '../../util/types';

/**
 * Base class for implementing all relevant Husky configuration.
 *
 * This class acts as a base for handling Husky configuration within projects.
 */
export class HuskyConfigBase extends Config {
  protected override get additionalDevDependencies(): string[] {
    return ['husky@^9.1.7'];
  }

  protected override get additionalScripts(): Record<string, string> {
    return {
      prepare: 'husky || true',
    };
  }

  protected override get additionalIgnorePatterns(): string[] {
    const patterns: string[] = [];
    for (const filePath in this.configFile) {
      patterns.push(`/${filePath}`);
    }
    return patterns;
  }

  protected override get configFile(): ConfigFile {
    return {
      '.husky/commit-msg': ['npx --no-install commitlint --edit "$1"'],
      '.husky/pre-commit': ['npx lint-staged'],
    };
  }

  public override registerConfig(): void {
    if (isValidProject(this.project)) {
      (this.project as ProjectTypes).npmConfig?.addDevDependencies(this.additionalDevDependencies);
      (this.project as ProjectTypes).npmConfig?.addScripts(this.additionalScripts);
      (this.project as ProjectTypes).prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
    }
  }

  public override applyConfig(): void {
    for (const filePath in this.configFile) {
      new TextFile(this.project, filePath, {
        lines: this.configFile[filePath] as string[],
      });
    }
  }
}

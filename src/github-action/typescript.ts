import { GitHubActionProject } from '.';
import { TypeScriptConfigBase } from '../base';

/**
 * Implementing all relevant TypeScript configuration for the GitHubAction project.
 */
export class TypeScriptConfigGitHubAction extends TypeScriptConfigBase<GitHubActionProject> {
  // protected settings: Settings;

  constructor(project: GitHubActionProject) {
    super(project);
  }

  protected override get additionalDevDependencies(): string[] {
    return [];
  }

  protected override get additionalIgnorePatterns(): string[] {
    if (!this.project.typescript) {
      return [];
    }

    return super.additionalIgnorePatterns;
  }

  /**
   * Gets the development dependencies to be removed from configuration.
   */
  protected get removeDevDependencies(): string[] {
    return ['typescript'];
  }

  /**
   * Removes the configuration module related config file.
   */
  protected removeConfigFile(): void {
    const filePath: string = Object.keys(this.configFile)[0];
    if (!this.project.typescript) {
      this.project.tryRemoveFile(filePath);
    }
  }

  public override registerConfig(): void {
    super.registerConfig();
    this.removeConfigFile();
    this.project.npmConfig?.patchDevDependencyRemove(this.removeDevDependencies);
  }
}

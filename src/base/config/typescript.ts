import { constants } from '../../util/constants';
import { ConfigFile, ProjectTypes } from '../../util/types';
import { isValidProject } from '../../util/utils';
import { Config } from '../config';

/**
 * Base class for implementing all relevant TypeScript configuration.
 *
 * This class acts as a base for handling TypeScript configuration within projects.
 */
export class TypeScriptConfigBase extends Config {
  protected override get additionalDevDependencies(): string[] {
    return [
      `${constants['typescript'].NAME}@${constants['typescript'].VERSION}`,
      `${constants['@types/node'].NAME}@${constants['@types/node'].VERSION}`,
      `${constants['ts-node'].NAME}@${constants['ts-node'].VERSION}`,
    ];
  }

  protected override get additionalIgnorePatterns(): string[] {
    const filePath: string = Object.keys(this.configFile)[0];
    return [`/${filePath}`];
  }

  protected override get configFile(): ConfigFile {
    return {
      'tsconfig.json': {},
    };
  }

  /**
   * Retrieves the name to the TypeScript config file.
   *
   * @returns The name of the TypeScript config file.
   */
  public get configFileName(): string {
    return Object.keys(this.configFile)[0];
  }

  public override registerConfig(): void {
    if (isValidProject(this.project)) {
      (this.project as ProjectTypes).npmConfig?.addDevDependencies(this.additionalDevDependencies);
      (this.project as ProjectTypes).prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
    }
  }
}

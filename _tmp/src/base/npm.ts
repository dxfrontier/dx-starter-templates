import { Builder } from './builder';
import { ProjenStandardScript } from '../types';
import { TypeScriptProjectBase } from './project';

/**
 * Base class for NPM Package builder implementing all relevant configuration.
 * @abstract
 */
export abstract class NpmPackageBase extends Builder {
  /**
   * Initializes the base NPM Package builder.
   * @param project The project to configure NPM for.
   */
  constructor(project: TypeScriptProjectBase) {
    super(project);
  }

  /**
   * File paths for the .gitattributes file entries.
   * These entries are not added automatically by projen
   * and we have not extra builder for these. So we handle them here.
   * @return File paths for .gitattributes entries.
   * @protected
   */
  protected get gitAttributesFilePaths(): string[] {
    return [];
  }

  /**
   * NPM file paths to be packaged for the NPM Package.
   * @return File paths for package.json file entry.
   * @protected
   * @abstract
   */
  protected abstract get npmFilePaths(): string[];

  /**
   * @override
   */
  protected get devDependencies(): string[] {
    return [];
  }

  /**
   * Getter retrieving the npm scripts to be removed from NPM Package.
   * These scripts are added by Projen on project initialization
   * and are not needed for our projects.
   * Overwrite this method if you want to keep the projen standard scripts.
   * @return Projen standard script entries.
   * @protected
   */
  protected get projenScripts(): ProjenStandardScript[] {
    return [
      'bump',
      'clobber',
      'compile',
      'default',
      'eject',
      'eslint',
      'package',
      'post-compile',
      'post-upgrade',
      'pre-compile',
      'release',
      'test',
      'test:watch',
      'unbump',
      'upgrade',
      'watch',
      'projen',
    ];
  }

  /**
   * Configures settings specific to the builder within the project.
   * @protected
   */
  protected addSettings(): void {
    this.project.addFields({
      files: this.npmFilePaths,
    });
  }

  /**
   * Removes the NPM Package scripts associated with Projen NPM Package initialization.
   * Overwrite this method if you want to keep the projen standard scripts.
   * @protected
   */
  protected removeScripts(): void {
    for (const script of this.projenScripts) {
      this.project.removeScript(script);
    }
  }

  protected addGitAttributes(): void {
    // as the following files are not added automatically (compared to calling `projen` directly, there it works)
    // we add these files manually
    for (const value of this.gitAttributesFilePaths) {
      this.project.gitattributes.addAttributes(`/${value}`, 'linguist-generated');
    }
  }

  /**
   * @override
   */
  protected addDevDependencies(): void {
    this.project.addDevDeps(...this.devDependencies);
  }
}

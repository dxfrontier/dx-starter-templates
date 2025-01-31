import { Component } from 'projen/lib/component';
import { Config } from '../base/config';
import { IProjectKind } from './types';
import { Project } from 'projen';
import { BaseProject } from '../base/project';
import { exec, ExecException } from 'child_process';
import { constants } from './constants';

export const util = {
  /**
   * Registers configuration for components that are instances of the `Config` class.
   *
   * @param comps An array of components to process.
   *              If a component is an instance of `Config`, its `registerConfig` method will be invoked.
   */
  registerConfig(comps: Component[]): void {
    for (const comp of comps) {
      if (comp instanceof Config) {
        comp.registerConfig();
      }
    }
  },

  /**
   * Validates if a given project is of a valid kind.
   * No check for `ProjectTypes` is performed to avoid circular dependency.
   *
   * @param project The project object to validate. Must have a `kind` property.
   * @returns `true` if the project's `kind` is either `base` or `jsii`; otherwise, `false`.
   */
  isValidProject(project: IProjectKind | Project): boolean {
    if (project instanceof Project && (project as BaseProject).kind) {
      return (project as BaseProject).kind === 'base' || (project as BaseProject).kind === 'jsii';
    }

    return false;
  },

  /**
   * Sets up an exit handler to run the `projen eject` command and install the `@dxfrontier/cds-ts-dispatcher` package.
   * @param hasRun A flag to indicate if the exit handler has already run.
   *              If `true`, the handler will not run again.
   *             If `false`, the handler will run and set the flag to `true`.
   */
  setupExitHandler(hasRun: boolean): void {
    if (hasRun) {
      return;
    }

    hasRun = true;

    const runProjenEjectAndInstall = () => {
      const command = `npx projen eject && rm -rf .projenrc.ts.bak scripts .projen && npm install ${constants['@dxfrontier/cds-ts-dispatcher'].NAME}@${constants['@dxfrontier/cds-ts-dispatcher'].VERSION} && npx @cap-js/cds-typer "*" --outputDirectory @cds-models`;

      exec(command, (error: ExecException | null, stdout: string): void => {
        if (error) {
          console.error('Error exiting projen ... But exit will continue.');
        }

        console.log(`${stdout}`);
      });
    };

    runProjenEjectAndInstall();

    console.log('Exiting projen and installing @dxfrontier/cds-ts-dispatcher ...');
  },

  /**
   * Generates CDS models using the `@cap-js/cds-typer` package.
   */
  generateCdsModels() {
    const command = `npx @cap-js/cds-typer "*" --outputDirectory @cds-models`;

    exec(command, (error: ExecException | null, stdout: string): void => {
      if (error) {
        console.error('Error exiting projen ... But exit will continue.');
      } else {
        console.log('CDS models generated successfully.');
      }

      console.log(`${stdout}`);
    });
  },
};

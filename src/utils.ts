import { Component } from 'projen/lib/component';
import { Config } from './base/config';
import { IProjectKind } from './types/types';

/**
 * Registers configuration for components that are instances of the `Config` class.
 *
 * @param comps An array of components to process.
 *              If a component is an instance of `Config`, its `registerConfig` method will be invoked.
 */
export function registerConfig(comps: Component[]): void {
  for (const comp of comps) {
    if (comp instanceof Config) {
      comp.registerConfig();
    }
  }
}

/**
 * Validates if a given project is of a valid kind.
 *
 * @param project The project object to validate. Must have a `kind` property.
 * @returns `true` if the project's `kind` is either `base` or `jsii`; otherwise, `false`.
 */
export function isValidProject(project: IProjectKind): boolean {
  return project.kind === 'base' || project.kind === 'jsii';
}

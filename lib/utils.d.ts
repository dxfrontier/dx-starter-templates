import { Component } from 'projen/lib/component';
import { IProjectKind } from './types/project';
import { Project } from 'projen';
/**
 * Registers configuration for components that are instances of the `Config` class.
 *
 * @param comps An array of components to process.
 *              If a component is an instance of `Config`, its `registerConfig` method will be invoked.
 */
export declare function registerConfig(comps: Component[]): void;
/**
 * Validates if a given project is of a valid kind.
 * No check for `ProjectTypes` is performed to avoid circular dependency.
 *
 * @param project The project object to validate. Must have a `kind` property.
 * @returns `true` if the project's `kind` is either `base` or `jsii`; otherwise, `false`.
 */
export declare function isValidProject(project: IProjectKind | Project): boolean;

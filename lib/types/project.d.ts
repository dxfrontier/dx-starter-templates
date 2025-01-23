import { JsiiProject } from '../jsii/project';
import { BaseProject } from '../base/project';
/**
 * Defines all possible project types.
 * Extend it for special cases like JsiiProject
 * that cannot inherit from BaseProject.
 *
 * We can't use Generics as jsii does not allow it
 * on compile time.
 */
export type ProjectTypes = BaseProject | JsiiProject;
/**
 * Convenience type for guaranteeing type safety and avoiding too many circular dependencies.
 */
export interface IProjectKind {
    /**
     * Convenience type for guaranteeing type safety and avoiding too many circular dependencies.
     */
    kind: ProjectKind;
}
/**
 * All possible project kinds.
 * @see `ProjectKind`
 */
export type ProjectKind = 'base' | 'jsii';

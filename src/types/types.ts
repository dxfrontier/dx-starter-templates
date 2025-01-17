import { JsiiProject } from '..';
import { BaseProject } from '..';

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
 * Settings type to be compliant with Projen API.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Settings = Record<string, any>;

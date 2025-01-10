import { Config } from "../base";

/**
 * Configuration module registry for Dependency Injection.
 */
export type ConfigRegistry = Map<string, Config | null>;

/**
 * Project instance options used on startup.
 */
export type ProjectOptions = Record<string, string | boolean | string[] | Record<string, unknown>>;

/**
 * Structure of a projen task containing multiple steps.
 * This is derived from them Scripts type but contains an array keeping the task steps.
 */
export type TaskSteps = Record<string, string[]>;

/**
 * All record related settings.
 */
export type Settings = { [name: string]: any };

/**
 * Represents the configuration structure for various project setup components.
 *
 * This type is used to define different aspects of a project's configuration, 
 * such as dependencies, scripts, settings, configuration files, and updates to existing files.
 *
 * @property devDependencies (optional) - A list of development dependencies to be added to `package.json`.
 * @property peerDependencies (optional) - A list of peer dependencies to be added to `package.json`.
 * @property dependencies (optional) - A list of runtime dependencies to be added to `package.json`.
 * @property scripts (optional) - A record of scripts to be added or updated in the `package.json` `scripts` section.
 * @property settings (optional) - Arbitrary settings or configurations to be added or updated in the `package.json` file.
 * @property configFiles (optional) - A record where the key represents the filename and the value represents 
 * the content of a new configuration file to be created (e.g., `.prettierrc` or `.eslintrc`).
 * @property entries (optional) - A string representing content to append or modify existing configuration files 
 * (e.g., `.gitignore`, `.prettierignore`, or `.gitattributes`).
 *
 * @example
 *
 * ### Adding dependencies to `package.json`
 * ```typescript
 * const config: ConfigContent = {
 *   devDependencies: ['typescript@^5.7.2', 'jest@^29.6.4'],
 *   dependencies: ['axios@^1.5.0'],
 *   peerDependencies: ['react@^18.0.0']
 * };
 * ```
 *
 * ### Adding scripts to `package.json`
 * ```typescript
 * const config: ConfigContent = {
 *   scripts: {
 *     build: 'tsc',
 *     test: 'jest'
 *   }
 * };
 * ```
 *
 * ### Adding settings to `package.json`
 * ```typescript
 * const config: ConfigContent = {
 *   settings: {
 *     private: true,
 *     version: '1.0.0',
 *     engines: {
 *       node: '>=14.0.0'
 *     }
 *   }
 * };
 * ```
 *
 * ### Creating new configuration files
 * ```typescript
 * const config: ConfigContent = {
 *   configFiles: {
 *     '.eslintrc': JSON.stringify({
 *       env: { node: true },
 *       extends: 'eslint:recommended'
 *     }),
 *     '.prettierignore': `
 *     dist/
 *     node_modules/
 *     `
 *   }
 * };
 * ```
 *
 * ### Updating or appending to existing configuration files
 * ```typescript
 * const config: ConfigContent = {
 *   fileUpdates: `
 *   # Add specific patterns to ignore
 *   node_modules/
 *   dist/
 *   `
 * };
 * ```
*/
export type ConfigContent = {
  devDependencies?: string[];
  peerDependencies?: string[];
  dependencies?: string[];
  scripts?: Record<string, string>;
  settings?: Settings;
  configFiles?: Record<string, string | Settings>;
  fileUpdates?: string;
}
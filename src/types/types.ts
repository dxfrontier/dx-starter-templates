import { Config } from "../base";

/**
 * Configuration module registry for Dependency Injection.
 */
export type ConfigRegistry = Map<string, Config | null>;

/**
 * Project instance options used on startup.
 */
export type ProjectStartupOptions = Record<string, string | boolean | string[] | Record<string, unknown>>;

/**
 * Structure of a projen task containing multiple steps.
 * This is derived from them Scripts type but contains an array keeping the task steps.
 */
export type TaskSteps = Record<string, string[]>;

/**
 * Entries in the `package.json` file.
 */
export type NpmPackageJsonSettings = { [name: string]: any };
import { Config } from "../base";

/**
 * Configuration module registry for Dependency Injection.
 */
export type ConfigRegistry = Map<string, Config | null>;

/**
 * Project instance options used on startup.
 */
export type ProjectStartupOptions = Record<string, string | boolean | string[] | Record<string, unknown>>;
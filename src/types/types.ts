import { Config } from "../base";

/**
 * Configuration module registry for Dependency Injection.
 */
export type ConfigRegistry = Map<string, Config | null>;
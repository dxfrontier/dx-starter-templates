/**
 * Settings type to be compliant with Projen API.
 */
export type Settings = Record<string, any>;
export type ConfigFile = Record<string, string[] | Settings>;

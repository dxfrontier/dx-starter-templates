/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { BaseProjectOptions } from '../../base';

/**
 * Settings type to be compliant with Projen API.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Settings = Record<string, any>;

export type ConfigFile = Record<string, string[] | Settings>;

export type ReadmeConfig = {
  getReadme: (options: BaseProjectOptions) => { filename: string; contents: string };
};

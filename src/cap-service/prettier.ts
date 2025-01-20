import { PrettierConfigBase } from '../base/prettier';

/**
 * Implementing all relevant Prettier configuration for the CapService project.
 */
export class PrettierConfigCapService extends PrettierConfigBase {
  protected override get additionalScripts(): Record<string, string> {
    return {
      ...super.additionalScripts,
      'prettier:cds': 'format-cds',
    };
  }
}

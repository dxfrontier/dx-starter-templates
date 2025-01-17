import { CapServiceProject } from '.';
import { PrettierConfigBase } from '../base';

/**
 * Implementing all relevant Prettier configuration for the CapService project.
 */
export class PrettierConfigCapService extends PrettierConfigBase {
  constructor(project: CapServiceProject) {
    super(project);
  }

  protected get additionalScripts(): Record<string, string> {
    return {
      ...super.additionalScripts,
      'prettier:cds': 'format-cds',
    };
  }
}

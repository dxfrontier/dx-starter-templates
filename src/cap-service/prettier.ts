import { CapServiceProject } from '.';
import {
  Config,
  PrettierConfigBase,
  ProjenStandardPrettierConfigBaseStrategy,
  NonApiPrettierConfigBaseStrategy,
  ConfigStrategy,
} from '../base';

/**
 * Implementing all relevant Prettier configuration for the CapService project.
 */
export class PrettierConfigCapService extends PrettierConfigBase<CapServiceProject> {
  constructor(project: CapServiceProject, useProjenApi: boolean) {
    super(project, useProjenApi);

    const strategy: ConfigStrategy = useProjenApi ? new ProjenStandardConfigStrategy() : new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }

  protected get additionalScripts(): Record<string, string> {
    return {
      ...super.additionalScripts,
      'prettier:cds': 'format-cds',
    };
  }
}

class ProjenStandardConfigStrategy extends ProjenStandardPrettierConfigBaseStrategy<CapServiceProject> {
  applyConfig(config: Config<CapServiceProject>): void {
    super.applyConfig(config);
  }
}

class NonApiConfigStrategy extends NonApiPrettierConfigBaseStrategy<CapServiceProject> {
  applyConfig(config: Config<CapServiceProject>): void {
    super.applyConfig(config);
  }
}

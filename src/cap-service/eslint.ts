import { CapServiceProject } from '.';
import {
  EsLintConfigBase,
  ProjenStandardEsLintConfigBaseStrategy,
  NonApiEsLintConfigBaseStrategy,
  Config,
  ConfigStrategy,
} from '../base';

/**
 * Implementing all relevant EsLint configuration for the CapService project.
 */
export class EsLintConfigCapService extends EsLintConfigBase<CapServiceProject> {
  constructor(project: CapServiceProject, useProjenApi: boolean) {
    super(project, useProjenApi);

    const strategy: ConfigStrategy = useProjenApi ? new ProjenStandardConfigStrategy() : new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }

  protected get standardIgnorePatterns(): string[] {
    return ['test/', 'dist/', 'gen/', '@cds-models', 'default-env.js', '@dispatcher'];
  }
}

class ProjenStandardConfigStrategy extends ProjenStandardEsLintConfigBaseStrategy<CapServiceProject> {
  applyConfig(config: Config<CapServiceProject>): void {
    super.applyConfig(config);
  }
}

class NonApiConfigStrategy extends NonApiEsLintConfigBaseStrategy<CapServiceProject> {
  applyConfig(config: Config<CapServiceProject>): void {
    super.applyConfig(config);
  }
}

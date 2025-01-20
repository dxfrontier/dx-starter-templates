import { BaseProjectOptions, BaseProject, BaseOptions, TypeScriptConfigBase, JestConfigBase } from '../base';
import { CommitLintConfigCapService } from './commitlint';
import { DevContainerConfigCapService } from './devcontainer';
import { EsLintConfigCapService } from './eslint';
import { GitConfigCapService } from './git';
import { GitHubConfigCapService } from './github';
import { HuskyConfigCapService } from './husky';
import { NpmConfigCapService } from './npm';
import { PrettierConfigCapService } from './prettier';
import { SampleCodeConfigCapService } from './samplecode';
import { VsCodeConfigCapService } from './vscode';

export interface CapServiceProjectOptions extends BaseProjectOptions {
  readonly namespace?: string;
  readonly entityName?: string;
}

/**
 * Base class for managing project CapService configuration.
 */
export class CapServiceProject extends BaseProject {
  /**
   * Initializes the project.
   * @param options Additional project options.
   */
  constructor(options: CapServiceProjectOptions) {
    const updatedOptions = {
      ...options,
      commitlintEnabled: options.commitlintEnabled ?? true,
      devContainerEnabled: options.devContainerEnabled ?? true,
      eslintEnabled: options.eslintEnabled ?? true,
      githubEnabled: options.githubEnabled ?? true,
      huskyEnabled: options.huskyEnabled ?? true,
      jestEnabled: options.jestEnabled ?? true,
      prettierEnabled: options.prettierEnabled ?? true,
      vscodeEnabled: options.vscodeEnabled ?? true,
      sampleCodeEnabled: options.sampleCodeEnabled ?? true,
      typescriptEnabled: true,
      name: options.name,
      namespace: options.namespace ?? 'de.customer.org.project',
      description: options.description ?? 'SAP CAP Project',
      entityName: options.entityName ?? 'Entity1',
    };
    super({
      ...BaseOptions.sharedOptions(updatedOptions),
      tsconfig: {
        compilerOptions: {
          allowImportingTsExtensions: true,
        },
      },
    });

    this.gitConfig = new GitConfigCapService(this);
    this.npmConfig = new NpmConfigCapService(this);

    if (updatedOptions.commitlintEnabled) {
      this.commitlintConfig = new CommitLintConfigCapService(this);
    }
    if (updatedOptions.devContainerEnabled) {
      this.devContainerConfig = new DevContainerConfigCapService(this);
    }
    if (updatedOptions.eslintEnabled) {
      this.eslintConfig = new EsLintConfigCapService(this);
    }
    if (updatedOptions.githubEnabled) {
      this.githubConfig = new GitHubConfigCapService(this);
    }
    if (updatedOptions.prettierEnabled) {
      this.prettierConfig = new PrettierConfigCapService(this);
    }
    if (updatedOptions.vscodeEnabled) {
      this.vscodeConfig = new VsCodeConfigCapService(this);
    }
    if (updatedOptions.huskyEnabled) {
      this.huskyConfig = new HuskyConfigCapService(this);
    }
    if (updatedOptions.sampleCodeEnabled) {
      this.sampleCodeConfig = new SampleCodeConfigCapService(this, updatedOptions);
    }
  }

  protected override initializeBaseConfigs(options: BaseProjectOptions): void {
    super.initializeBaseConfigs(options);

    this.typescriptConfig = new TypeScriptConfigBase(this);

    if (options.jestEnabled) {
      this.jestConfig = new JestConfigBase(this);
    }
  }
}

import { BaseOptions, BaseProject, BaseProjectOptions, JestConfigBase, TypeScriptConfigBase } from '../base';
import {
  CommitLintConfigCapService,
  NpmConfigCapService,
  PrettierConfigCapService,
  SampleCodeConfigCapService,
  GitConfigCapService,
  DevContainerConfigCapService,
  GitHubConfigCapService,
  HuskyConfigCapService,
  VsCodeConfigCapService,
  EsLintConfigCapService,
} from '.';

export interface CapServiceProjectOptions extends BaseProjectOptions {
  readonly commitlintEnabled?: boolean;
  readonly devContainerEnabled?: boolean;
  readonly eslintEnabled?: boolean;
  readonly githubEnabled?: boolean;
  readonly huskyEnabled?: boolean;
  readonly jestEnabled?: boolean;
  readonly prettierEnabled?: boolean;
  readonly vscodeEnabled?: boolean;
  readonly sampleCodeEnabled?: boolean;
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
      typescriptEnabled: true,
      namespace: options.namespace ?? 'de.customer.org.project',
      description: options.description ?? 'SAP CAP Project',
      name: options.name,
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
      this.devContainerConfig = new DevContainerConfigCapService(this, options.devContainer!);
    }
    if (updatedOptions.eslintEnabled) {
      this.eslintConfig = new EsLintConfigCapService(this, updatedOptions.eslint!);
    }
    if (updatedOptions.githubEnabled) {
      this.githubConfig = new GitHubConfigCapService(this, updatedOptions.github!);
    }
    if (updatedOptions.prettierEnabled) {
      this.prettierConfig = new PrettierConfigCapService(this, updatedOptions.prettier!);
    }
    if (updatedOptions.vscodeEnabled) {
      this.vscodeConfig = new VsCodeConfigCapService(this, updatedOptions.vscode!);
    }
    if (updatedOptions.huskyEnabled) {
      this.huskyConfig = new HuskyConfigCapService(this);
    }
    if (updatedOptions.sampleCodeEnabled) {
      this.sampleCodeConfig = new SampleCodeConfigCapService(this, updatedOptions);
    }
  }

  protected override initializeBaseConfigs(options: CapServiceProjectOptions): void {
    this.typescript = true;

    this.typescriptConfig = new TypeScriptConfigBase(this);

    if (options.jestEnabled) {
      this.jestConfig = new JestConfigBase(this, options.jest!);
    }
  }
}

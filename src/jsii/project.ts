import { cdk } from 'projen';
import { BaseOptions, Config } from '../base';
import { CommitLintConfigJsii, DevContainerConfigJsii, EsLintConfigJsii, GitConfigJsii, GitHubConfigJsii, HuskyConfigJsii, JestConfigJsii, NpmConfigJsii, PrettierConfigJsii, TypeScriptConfigJsii, VsCodeConfigJsii } from '.';

export interface JsiiProjectOptions extends cdk.JsiiProjectOptions {
  readonly commitLintEnabled?: boolean;
  readonly devContainerEnabled?: boolean;
  readonly eslintEnabled?: boolean;
  readonly githubEnabled?: boolean;
  readonly huskyEnabled?: boolean;
  readonly jestEnabled?: boolean;
  readonly prettierEnabled?: boolean;
  readonly typescriptEnabled?: boolean;
  readonly vscodeEnabled?: boolean;
  readonly sampleCodeEnabled?: boolean;
  readonly typescript?: boolean;
}

/**
 * Base class for managing project Jsii configuration.
 */
export class JsiiProject extends cdk.JsiiProject {
  public readonly gitConfig?: GitConfigJsii;
  public readonly commitLintConfig?: CommitLintConfigJsii;
  public readonly devContainerConfig?: DevContainerConfigJsii;
  public readonly eslintConfig?: EsLintConfigJsii;
  public readonly githubConfig?: GitHubConfigJsii;
  public readonly huskyConfig?: HuskyConfigJsii;
  public readonly jestConfig?: JestConfigJsii;
  public readonly npmConfig?: NpmConfigJsii;
  public readonly prettierConfig?: PrettierConfigJsii;
  public readonly typescriptConfig?: TypeScriptConfigJsii;
  public readonly vscodeConfig?: VsCodeConfigJsii;
  // protected readonly sampleCodeConfig?: SampleCodeConfigJsii;
  public readonly typescript?: boolean;

  /**
   * Initializes the project.
   * @param options Additional project options.
   */
  constructor(options: JsiiProjectOptions) {
    super({
      ...BaseOptions.sharedOptions(options),
      // tsConfig.dev.json needs to be enabled for Jsii Projects
      disableTsconfigDev: options.disableTsconfigDev ?? false,
      disableTsconfig: options.disableTsconfig ?? true,
    });
    
    // special case to align with Projen standard API handling
    this.typescript = options.typescriptEnabled && options.typescript
      ? options.typescript
      : false;

    new GitConfigJsii(this);
    this.npmConfig = new NpmConfigJsii(this);

    if (options.devContainerEnabled) {
      this.devContainerConfig = new DevContainerConfigJsii(this, options.devContainer!);
    }
    if (options.eslintEnabled) {
      this.eslintConfig = new EsLintConfigJsii(this, options.eslint!);
    }
    if (options.jestEnabled) {
      this.jestConfig = new JestConfigJsii(this, options.jest!);
    }
    if (options.prettierEnabled) {
      this.prettierConfig = new PrettierConfigJsii(this, options.prettier!);
    }
    if (options.vscodeEnabled) {
      this.vscodeConfig = new VsCodeConfigJsii(this, options.vscode!);
    }
    if (options.githubEnabled) {
      this.githubConfig = new GitHubConfigJsii(this, options.github!);
    }
    if (options.commitLintEnabled) {
      this.commitLintConfig = new CommitLintConfigJsii(this);
    }
    if (options.huskyEnabled) {
      this.huskyConfig = new HuskyConfigJsii(this);
    }
    if (options.typescriptEnabled) {
      this.typescriptConfig = new TypeScriptConfigJsii(this, this.typescript!);
    }
    // if (options.sampleCodeEnabled) {
    //   this.typescriptConfig = new SampleCodeConfigJsii(this);
    // }
  }

  public override preSynthesize(): void {
    console.log('JsiiProject preSynth')
    for (const comp of this.components) {
      if (comp instanceof Config) {
        comp.registerConfig();
      }
    }
    super.preSynthesize();
  }

  public override postSynthesize(): void {
    super.postSynthesize();
  }
}

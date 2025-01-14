import { cdk } from 'projen';
import { BaseOptions, Config } from '../base';
import { DevContainerConfigJsii, EsLintConfigJsii, GitConfigJsii, GitHubConfigJsii, HuskyConfigJsii, JestConfigJsii, JsiiConfigJsii, NpmConfigJsii, PrettierConfigJsii, TypeScriptConfigJsii, VsCodeConfigJsii } from '.';
import { CommitLintConfigJsii } from './commitlint';

export interface JsiiProjectOptions extends cdk.JsiiProjectOptions {
  readonly projenEnabled?: boolean;
  readonly commitLintEnabled?: boolean;
  readonly devContainerEnabled?: boolean;
  readonly eslintEnabled?: boolean;
  readonly githubEnabled?: boolean;
  readonly huskyEnabled?: boolean;
  readonly jestEnabled?: boolean;
  readonly npmEnabled?: boolean;
  readonly prettierEnabled?: boolean;
  readonly typescriptEnabled?: boolean;
  readonly vscodeEnabled?: boolean;
  readonly sampleCodeEnabled?: boolean;
  readonly npm?: boolean;
}

/**
 * Base class for managing project Jsii configuration.
 */
export class JsiiProject extends cdk.JsiiProject {
  protected readonly npm?: boolean;
  public readonly jsiiConfig?: JsiiConfigJsii;
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
    this.npm = options.npmEnabled && options.projenEnabled && options.npm
      ? options.npm
      : false;

    new JsiiConfigJsii(this);
    new GitConfigJsii(this);

    if (options.devContainerEnabled) {
      this.devContainerConfig = new DevContainerConfigJsii(this, options.projenEnabled!, options.devContainer!);
    }
    if (options.eslintEnabled) {
      this.eslintConfig = new EsLintConfigJsii(this, options.projenEnabled!, options.eslint!);
    }
    if (options.jestEnabled) {
      this.jestConfig = new JestConfigJsii(this, options.projenEnabled!, options.jest!);
    }
    if (options.npmEnabled) {
      this.npmConfig = new NpmConfigJsii(this, options.projenEnabled!, options.npm!);
    }
    if (options.prettierEnabled) {
      this.prettierConfig = new PrettierConfigJsii(this, options.projenEnabled!, options.prettier!);
    }
    if (options.vscodeEnabled) {
      this.vscodeConfig = new VsCodeConfigJsii(this, options.projenEnabled!, options.vscode!);
    }
    if (options.githubEnabled) {
      this.githubConfig = new GitHubConfigJsii(this, options.projenEnabled!, options.github!);
    }
    if (options.commitLintEnabled) {
      this.commitLintConfig = new CommitLintConfigJsii(this, options.projenEnabled!);
    }
    if (options.huskyEnabled) {
      this.huskyConfig = new HuskyConfigJsii(this, options.projenEnabled!);
    }
    if (options.typescriptEnabled) {
      this.typescriptConfig = new TypeScriptConfigJsii(this, options.projenEnabled!);
    }
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

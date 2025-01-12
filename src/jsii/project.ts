import { cdk, javascript } from 'projen';

export interface JsiiProjectOptions extends cdk.JsiiProjectOptions { }

/**
 * Base class for managing project configuration.
 */
export class JsiiProject extends cdk.JsiiProject {
  /**
   * Initializes the project.
   * @param options Additional project options.
   */
  constructor(options: JsiiProjectOptions) {
    super({
      ...options,
        defaultReleaseBranch: options.defaultReleaseBranch ?? 'main',
        
        licensed: options.licensed ?? false,
        packageManager: options.packageManager ?? javascript.NodePackageManager.NPM,
        npmignoreEnabled: options.npmignoreEnabled ?? false,
  
        projenrcTs: options.projenrcTs ?? true,
        typescriptVersion: options.typescriptVersion ?? '^5.7.2',
        disableTsconfigDev: options.disableTsconfigDev ?? false,
        // disableTsconfig: false, // cannot be set as Jsii forces its own Typescript file
        tsconfig: {
          compilerOptions: {
            allowImportingTsExtensions: true,
          },
        },
        
        prettier: options.prettier ?? false,
        eslint: options.eslint ?? false,
        devContainer: options.devContainer ?? false,
        vscode: options.vscode ?? false,
        jest: options.jest ?? true,
  
        githubOptions: options.githubOptions ?? { mergify: false, pullRequestLint: false }, // mergify and workflow pull-request-lint.yml
        buildWorkflow: options.buildWorkflow ?? false, // workflow build.yml
        release: options.release ?? false, // workflow release.yml
        pullRequestTemplate: options.pullRequestTemplate ?? false, // pull_request_template.yml
        depsUpgrade: options.depsUpgrade ?? false, // workflow upgrade-main.yml
  
        sampleCode: options.sampleCode ?? false,
    });
  }

  public override preSynthesize(): void {
    super.preSynthesize();
    console.log('JsiiProject preSynthesize')
  }

  public override postSynthesize(): void {
    super.postSynthesize();
    console.log('JsiiProject postSynthesize')
  }
}

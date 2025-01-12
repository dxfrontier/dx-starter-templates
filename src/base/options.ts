import { javascript } from 'projen';
import { TypeScriptProjectOptions } from 'projen/lib/typescript';
import { JsiiProjectOptions } from 'projen/lib/cdk';

/**
 * Utility for shared options.
 */
export class ProjectBaseOptions {
  /**
   * Merges shared defaults with provided options.
   * @param options Specific project options to merge.
   * @returns Merged options.
   * @public
   * @static
   */
  public static sharedOptions<T extends TypeScriptProjectOptions | JsiiProjectOptions>(
    options: T
  ): T {
    return {
      ...options,
      licensed: options.licensed ?? false,
      packageManager: options.packageManager ?? javascript.NodePackageManager.NPM,
      npmignoreEnabled: options.npmignoreEnabled ?? false,
      projenrcTs: options.projenrcTs ?? true,
      prettier: options.prettier ?? false,
      eslint: options.eslint ?? false,
      devContainer: options.devContainer ?? false,
      vscode: options.vscode ?? false,
      jest: options.jest ?? true,
      githubOptions: options.githubOptions ?? { mergify: false, pullRequestLint: false },
      buildWorkflow: options.buildWorkflow ?? false,
      release: options.release ?? false,
      pullRequestTemplate: options.pullRequestTemplate ?? false,
      depsUpgrade: options.depsUpgrade ?? false,
      sampleCode: options.sampleCode ?? false,
    };
  }
}

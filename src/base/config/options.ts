import { BaseProjectOptions } from '../project';
// import { JsiiProjectOptions } from '../jsii';
import { NodePackageManager } from 'projen/lib/javascript';

/**
 * Utility for shared options.
 */
export class BaseOptions {
  /**
   * Merges shared defaults with provided options.
   * @param options Specific project options to merge.
   * @returns Merged options.
   */
  public static sharedOptions<T extends BaseProjectOptions>(options: T): T {
    return {
      ...options,
      defaultReleaseBranch: options.defaultReleaseBranch ?? 'dev',
      licensed: options.licensed ?? false,
      packageManager: options.packageManager ?? NodePackageManager.NPM,
      npmignoreEnabled: options.npmignoreEnabled ?? false,
      projenrcTs: !options.typescriptEnabled
        ? false
        : options.typescriptEnabled && options.projenrcTs
          ? options.projenrcTs
          : true,
      disableTsconfigDev: options.typescriptEnabled && options.disableTsconfigDev ? options.disableTsconfigDev : true,
      disableTsconfig: options.typescriptEnabled && options.disableTsconfig ? options.disableTsconfig : false,
      prettier: options.prettierEnabled && options.prettier ? options.prettier : false,
      eslint: options.eslintEnabled && options.eslint ? options.eslint : false,
      devContainer: options.devContainerEnabled && options.devContainer ? options.devContainer : false,
      vscode: options.vscodeEnabled && options.vscode ? options.vscode : false,
      jest: options.jestEnabled && options.jest ? options.jest : false,
      github: options.githubEnabled && options.github ? options.github : false,
      githubOptions:
        options.githubEnabled && options.githubOptions
          ? options.githubOptions
          : { mergify: false, pullRequestLint: false },
      buildWorkflow: options.githubEnabled && options.buildWorkflow ? options.buildWorkflow : false,
      release: options.githubEnabled && options.release ? options.release : false,
      pullRequestTemplate: options.githubEnabled && options.pullRequestTemplate ? options.pullRequestTemplate : false,
      depsUpgrade: options.githubEnabled && options.depsUpgrade ? options.depsUpgrade : false,
      sampleCode: options.sampleCodeEnabled && options.sampleCode ? options.sampleCode : false,
      minNodeVersion: '20.0',
    };
  }
}

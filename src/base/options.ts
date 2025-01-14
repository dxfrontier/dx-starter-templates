import { BaseProjectOptions } from './project';
import { JsiiProjectOptions } from '../jsii';
import { NodePackageManager } from 'projen/lib/javascript';


/**
 * Utility for shared options.
 */
export class BaseOptions {
  /**
   * Merges shared defaults with provided options.
   * @param options Specific project options to merge.
   * @returns Merged options.
   * @public
   * @static
   */
  public static sharedOptions<T extends BaseProjectOptions | JsiiProjectOptions>(
    options: T
  ): T {
    return {
      ...options,
      defaultReleaseBranch: options.defaultReleaseBranch ?? 'dev',
      licensed: options.licensed ?? false,
      packageManager: options.packageManager ?? NodePackageManager.NPM,
      npmignoreEnabled: options.npmignoreEnabled ?? false,
      projenrcTs: options.typescriptEnabled && options.projenrcTs ? options.projenrcTs : false,
      disableTsconfigDev: options.typescriptEnabled && options.disableTsconfigDev ? options.disableTsconfigDev : true,
      disableTsconfig: options.typescriptEnabled && options.disableTsconfig ? options.disableTsconfig : true,
      prettier: options.prettierEnabled && options.prettier ? options.prettier : false,
      eslint: options.eslintEnabled && options.eslint ? options.eslint : false,
      devContainer: options.devContainerEnabled && options.devContainer ? options.devContainer : false,
      vscode: options.vscodeEnabled && options.vscode ? options.vscode : false,
      jest: options.jestEnabled && options.jest ? options.jest : false,
      github: options.githubEnabled && options.github ? options.github : false,
      githubOptions: options.githubEnabled && options.githubOptions ? options.githubOptions : { mergify: false, pullRequestLint: false } ,
      buildWorkflow: options.githubEnabled && options.buildWorkflow ? options.buildWorkflow : false,
      release: options.githubEnabled && options.release ? options.release : false,
      pullRequestTemplate: options.githubEnabled && options.pullRequestTemplate ? options.pullRequestTemplate : false,
      depsUpgrade: options.githubEnabled && options.depsUpgrade ? options.depsUpgrade : false,
      sampleCode: options.sampleCodeEnabled && options.sampleCode ? options.sampleCode : false,
    };
  }
}

/**
 * ### Three levels for config (e.g. eslint):
 * 1) Projen standard config
 *     -> like eslint - we say no, because too old version that projen uses
 *     -> we take our own eslint config created
 * 2) Projen tracked
 *     -> projen tracks all yes/no
 *       yes
 *         -> beside the above not used (e.g. eslint, prettier, ...) some public API is used (e.g. addDeps)
 *         -> for the not used ones (e.g. eslint, prettier, ...) JsonFiles, TextFiles, IgnoreFiles are created
 *         -> these are all Projen tracked
 *       no
 *         -> SampleFiles are used for all config
 *         -> Deny standard config or delete files (like package.json) and create new
 *         -> these are all non Projen tracked
 * 3) Project activated
 *      -> does the project want to have (e.g. jest)
 * 
 * ### Config Hierarchy
 * Config
 *   BaseConfig  --> decides between Projen tracked or SampleFiles
 *     ProjectTypeConfig
 */
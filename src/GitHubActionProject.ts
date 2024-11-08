import { javascript } from 'projen';
import { TypeScriptProject, TypeScriptProjectOptions } from 'projen/lib/typescript';
import {
  NpmPackageComponent,
  DevContainerComponent,
  VsCodeComponent,
  GitHubComponent,
  PrettierComponent,
  HuskyComponent,
  CommitLintComponent,
  SampleComponent,
} from './components';
import { IProjectComponent } from './types';

// Have to disable the prettier rule here for the { }
// otherwise we have a conflict between prettier and linter.
// eslint-disable-next-line prettier/prettier
export interface GitHubActionProjectOptions extends TypeScriptProjectOptions { }

/**
 * Represents a Projen TypeScript project configured for GitHub Actions,
 * providing various project templates and settings.
 */
export class GitHubActionProject extends TypeScriptProject {
  constructor(options: GitHubActionProjectOptions) {
    super({
      ...options,

      packageManager: javascript.NodePackageManager.NPM,
      minNodeVersion: '20',
      projenrcTs: true,

      prettier: true,
      githubOptions: {
        mergify: false,
        pullRequestLint: false, // workflow pull-request-lint.yml
      },
      buildWorkflow: false, // workflow build.yml
      release: false, // workflow release.yml
      pullRequestTemplate: false, // pull_request_template.yml
      depsUpgrade: false, // workflow upgrade-main.yml
      sampleCode: false,

      devDeps: ['projen', 'construct'],
    });

    // Initialize project configuration
    const components: IProjectComponent[] = [
      new NpmPackageComponent(this),
      new DevContainerComponent(this),
      new VsCodeComponent(this),
      new GitHubComponent(this),
      new PrettierComponent(this),
      new HuskyComponent(this),
      new CommitLintComponent(this),
      new SampleComponent(this),
    ];
    components.forEach((component: IProjectComponent): void => {
      component.setup();
    });
  }
}

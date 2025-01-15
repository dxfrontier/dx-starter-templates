import { JsiiProject } from '../jsii';
import { Config, ConfigStrategy } from './config';
import { BaseProject } from './project';

/**
 * Base class for implementing all relevant TypeScript configuration.
 *
 * This class acts as a base for handling TypeScript configuration within projects
 * that extend either `BaseProject` or `JsiiProject`. It determines the configuration
 * strategy to use based on whether Projen is being used.
 *
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 * @extends Config
 */
export class TypeScriptBaseConfig<T extends BaseProject | JsiiProject> extends Config<T> {
  constructor(project: T) {
    super(project);

    const strategy: ConfigStrategy = new NonApiTypeScriptBaseConfigStrategy();
    this.setStrategy(strategy);
  }

  protected get additionalDevDependencies(): string[] {
    return ['typescript@^5.7.3', '@types/node@^22.10.6', 'ts-node@^10.9.2'];
  }

  protected get additionalIgnorePatterns(): string[] {
    return ['/tsconfig.json'];
  }

  public override registerConfig(): void {
    this.project.npmConfig?.addDevDependencies(this.additionalDevDependencies);
    this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
  }
}
/**
 * Configuration strategy for Projen-tracked TypeScript base configuration.
 * @param project - The project instance.
 * @template T - The type of project, which extends `BaseProject` or `JsiiProject`.
 */
export class NonApiTypeScriptBaseConfigStrategy<T extends BaseProject | JsiiProject> implements ConfigStrategy {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  applyConfig(_config: Config<T>): void {}
}

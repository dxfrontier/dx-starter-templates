import { JsiiProject } from '.';
import { Config } from '../base';

/**
 * Implementing all relevant Jsii configuration for the Jsii project.
 * @extends JsiiBaseConfig
 */
export class JsiiConfigJsii extends Config<JsiiProject> {
  constructor(project: JsiiProject) {
    super(project);

    const strategy = new ConfigStrategy();
    this.setStrategy(strategy);
  }

  override registerConfig(): void {
    console.log('jsii Jsii - register - Projen API')
    this.project.npmConfig?.addDevDependencies([
      'jsii@^5.7.4',
      'jsii-diff@^1.106.0',
      'jsii-docgen@^10.6.3',
      'jsii-pacmak@^1.106.0',
      'jsii-rosetta@^5.7.2',
    ]);
  }
}

class ConfigStrategy implements ConfigStrategy {
  applyConfig(_config: Config<JsiiProject>): void { }
}
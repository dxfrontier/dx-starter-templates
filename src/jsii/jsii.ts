import { JsiiProject } from ".";
import { Config } from "../base";


/**
 * Implementing all relevant Jsii configuration for the Jsii project.
 * @extends Config
 */
export class JsiiConfigJsii extends Config<JsiiProject> {
  public override preSynthesize(): void {
    super.preSynthesize();
    
    this.project.addDevDeps(
      ...[
        '@types/jest@^29.5.14',
        '@types/node@^22.10.5',
        'constructs@10.4.2',
        'jest@^29.7.0',
        'jest-junit@^16',
        'jsii@^5.7.4',
        'jsii-diff@^1.106.0',
        'jsii-docgen@^10.6.3',
        'jsii-pacmak@^1.106.0',
        'jsii-rosetta@^5.7.2',
        'projen@0.91.6',
        'ts-jest@^29.2.5',
        'ts-node@^10.9.2',
        'typescript@^5.7.3'
      ],
    );
  }

  public override postSynthesize(): void {
    super.postSynthesize();
  }
}
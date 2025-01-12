import { JsiiProject } from '.';
import { ConfigStrategy, JestBaseConfig } from '../base';

/**
 * Implementing all relevant Jest configuration for the Jsii project.
 * @extends JestBaseConfig
 */
export class JestConfigJsii extends JestBaseConfig {
  private strategy: ConfigStrategy;

  constructor(project: JsiiProject, useProjen: boolean, useProjenApi: boolean) {
    super(project);
    // Select strategy based on the condition
    this.strategy = useProjen && useProjenApi
      ? new ProjenJestConfigStrategy()
      : useProjen && !useProjenApi
      ? new JsonFileJestConfigStrategy()
      : new SampleFileJestConfigStrategy();

    // Apply the selected strategy
    this.strategy.applyConfig(project);
  }
  
}

export class ProjenJestConfigStrategy implements ConfigStrategy {
  applyConfig(_project: JsiiProject): void {
    console.log('jest - use projen jest')
    // project.addTask('test', {
    //   description: 'Run tests',
    //   exec: 'jest --coverage',
    // });
    // project.addDevDeps('jest', '@types/jest', 'ts-jest');
    // project.addGitIgnore('/coverage/');
    // project.addFields({
    //   jest: {
    //     preset: 'ts-jest',
    //     testEnvironment: 'node',
    //   },
    // });
  }
}

export class JsonFileJestConfigStrategy implements ConfigStrategy {
  applyConfig(_project: JsiiProject): void {
    console.log('jest - JsonFile')
    // new SampleFile(project, 'jest.config.json', {
    //   contents: JSON.stringify(
    //     {
    //       preset: 'ts-jest',
    //       testEnvironment: 'node',
    //     },
    //     null,
    //     2
    //   ),
    // });
  }
}

export class SampleFileJestConfigStrategy implements ConfigStrategy {
  applyConfig(_project: JsiiProject): void {
    console.log('jest - SampleFile')
    // new SampleFile(project, 'jest.config.json', {
    //   contents: JSON.stringify(
    //     {
    //       preset: 'ts-jest',
    //       testEnvironment: 'node',
    //     },
    //     null,
    //     2
    //   ),
    // });
  }
}
import { JsonFile } from 'projen';
import { CapServiceProject } from '.';
import {
  VsCodeConfigBase,
  ProjenStandardVsCodeConfigBaseStrategy,
  NonApiVsCodeConfigBaseStrategy,
  Config,
  ConfigStrategy,
  Settings,
} from '../base';

/**
 * Implementing all relevant VsCode configuration for the CapService project.
 */
export class VsCodeConfigCapService extends VsCodeConfigBase<CapServiceProject> {
  constructor(project: CapServiceProject, useProjenApi: boolean) {
    super(project, useProjenApi);

    const strategy: ConfigStrategy = useProjenApi ? new ProjenStandardConfigStrategy() : new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }

  /**
   * Gets the launch config file to be added to the project's configuration.
   *
   * @returns A record of the having the path to the file as key and the content as value.
   */
  protected get configFileLaunch(): Settings {
    return {
      '.vscode/launch.json': {
        version: '0.2.0',
        configurations: [
          {
            address: '127.0.0.1',
            localRoot: '${workspaceFolder}',
            remoteRoot: '/home/vcap/app',
            name: 'Attach to Remote',
            port: 9229,
            request: 'attach',
            skipFiles: ['<node_internals>/**'],
            type: 'node',
          },
        ],
      },
    };
  }

  /**
   * Gets the tasks config file to be added to the project's configuration.
   *
   * @returns A record of the having the path to the file as key and the content as value.
   */
  protected get configFileTasks(): Settings {
    return {
      '.vscode/tasks.json': {
        version: '2.0.0',
        tasks: [
          {
            type: 'shell',
            label: 'cds watch',
            command: 'cds',
            args: ['watch'],
            group: {
              kind: 'build',
              isDefault: true,
            },
          },
          {
            type: 'shell',
            label: 'cds serve',
            command: 'cds',
            args: ['serve', '--with-mocks', '--in-memory?'],
          },
        ],
      },
    };
  }

  /**
   * Creates the launch configuration file in the project directory.
   */
  public createConfigLaunch(): void {
    const filePath: string = Object.keys(this.configFileLaunch)[0];
    new JsonFile(this.project, filePath, {
      obj: this.configFileLaunch[filePath],
    });
  }

  /**
   * Creates the tasks configuration file in the project directory.
   */
  public createConfigTasks(): void {
    const filePath: string = Object.keys(this.configFileTasks)[0];
    new JsonFile(this.project, filePath, {
      obj: this.configFileTasks[filePath],
    });
  }

  protected get additionalIgnorePatterns(): string[] {
    const filePath: string = Object.keys(this.configFile)[0];
    const filePathLaunch: string = Object.keys(this.configFileLaunch)[0];
    const filePathTasks: string = Object.keys(this.configFileTasks)[0];
    return [`/${filePath}`, `/${filePathLaunch}`, `/${filePathTasks}`];
  }
}

class ProjenStandardConfigStrategy extends ProjenStandardVsCodeConfigBaseStrategy<CapServiceProject> {
  applyConfig(config: Config<CapServiceProject>): void {
    super.applyConfig(config);
  }
}

class NonApiConfigStrategy extends NonApiVsCodeConfigBaseStrategy<CapServiceProject> {
  applyConfig(config: Config<CapServiceProject>): void {
    super.applyConfig(config);
    if (config instanceof VsCodeConfigCapService) {
      config.createConfigLaunch();
      config.createConfigTasks();
    }
  }
}

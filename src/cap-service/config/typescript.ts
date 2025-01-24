import { JsonFile } from 'projen';
import { BaseProject } from '../../base';
import { TypeScriptConfigBase } from '../../base/config/typescript';
import { ConfigFile } from '../../util/types';

/**
 * Implementing all relevant TypeScript configuration for the CapService project.
 */
export class TypeScriptConfigCapService extends TypeScriptConfigBase {
  protected override get configFile(): ConfigFile {
    return {
      'tsconfig.json': {
        compilerOptions: {
          esModuleInterop: true,
          skipLibCheck: true,
          allowJs: true,
          resolveJsonModule: true,
          isolatedModules: true,
          strictNullChecks: true,
          strictPropertyInitialization: false,
          forceConsistentCasingInFileNames: true,
          allowSyntheticDefaultImports: true,
          strict: true,
          experimentalDecorators: true,
          emitDecoratorMetadata: true,
          target: 'ES2021',
          module: 'NodeNext',
          moduleResolution: 'NodeNext',
          outDir: './gen/srv',
          rootDir: '.',
          paths: {
            '#cds-models/*': ['./@cds-models/*/index.ts'],
          },
        },
        include: ['./srv', './@dispatcher'],
      },
    };
  }

  protected removeConfigFile(): void {
    const filePath: string = Object.keys(this.configFile)[0];
    if (this.project instanceof BaseProject) {
      // Standard TypeScript file is removed to be overwritten
      this.project.tryRemoveFile(filePath);
    }
  }

  /**
   * Creates the configuration file in the project directory.
   */
  protected createConfig(): void {
    const filePath: string = Object.keys(this.configFile)[0];
    new JsonFile(this.project, filePath, {
      obj: this.configFile[filePath],
    });
  }

  public override registerConfig(): void {
    super.registerConfig();
    this.removeConfigFile();
  }

  public override applyConfig(): void {
    this.createConfig();
  }
}


import { TextFile } from 'projen';
import { Config, EsLintConfigBase } from '../base';
import { ConfigContent, ConfigFile } from '../types';
import { NpmConfigJsii, PrettierConfigJsii } from '.';

/**
 * EsLint implementing all relevant configuration for the Jsii project.
 * @extends TypeScriptConfigBase
 */
export class EsLintConfigJsii extends EsLintConfigBase {
  /**
     * Creates the config file for EsLint config.
     * @protected
     */
  protected createConfigFiles(): void {
    const configFile: ConfigFile = this.config.configFiles! as ConfigFile;
    const path: string = configFile.path;
    new TextFile(this.project, path, {
      lines: configFile.content as string[],
    });
  }

  /**
     * @override
     */
  protected get _config(): ConfigContent {
    return {
      devDependencies: super._config.devDependencies,
      scripts: super._config.scripts,
      update: super._config.update,
      configFiles: {
        path: 'eslint.config.mjs',
        content: [
          "import eslint from '@eslint/js';",
          "import tseslint from 'typescript-eslint';",
          '',
          'export default tseslint.config(',
          '  eslint.configs.recommended,',
          '  ...tseslint.configs.recommended,',
          '  ...tseslint.configs.stylistic,',
          '  {',
          '    rules: {',
          "      'no-console': 'off',",
          "      'require-atomic-updates': 'off',",
          "      '@typescript-eslint/no-non-null-assertion': 'off',",
          "      '@typescript-eslint/ban-types': 'off',",
          "      '@typescript-eslint/explicit-function-return-type': 'off',",
          "      '@typescript-eslint/consistent-type-imports': 'off',",
          "      '@typescript-eslint/no-empty-function': 'off',",
          "      '@typescript-eslint/class-literal-property-style': 'off',",
          "      '@typescript-eslint/no-empty-object-type': 'off',",
          '    },',
          '  },',
          '  {',
          "    ignores: ['docs/', 'test/', 'lib/', '.jsii'],",
          '  },',
          ');',
        ],
      }
    };
  }

  /**
     * @override
     */
  public setup(): void {
    // Dependency Injected Modules in shared config registry
    Config.getConfigFromRegistry<NpmConfigJsii>('npm')?.addDevDependencies(this.config.devDependencies!);
    Config.getConfigFromRegistry<NpmConfigJsii>('npm')?.addScripts(this.config.scripts!);
    Config.getConfigFromRegistry<PrettierConfigJsii>('prettier')?.addIgnoreEntries(this.config.update as string[]);
  }
}
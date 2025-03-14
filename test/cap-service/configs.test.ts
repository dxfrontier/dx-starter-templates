import * as commitlint from '../shared/commitlint';
import * as devcontainer from '../shared/devcontainer';
import * as eslint from '../shared/eslint';
import * as git from '../shared/git';
import * as github from '../shared/github';
import * as husky from '../shared/husky';
import * as js from '../shared/jest';
import * as npm from '../shared/npm';
import * as prettier from '../shared/prettier';
import * as typescript from '../shared/typescript';
import * as vscode from '../shared/vscode';

import { constants } from '../../src/util/constants';

import { snapshot } from './util/setup';

describe('cap-service', (): void => {
  /**
   * Start Commit lint
   */
  describe('commit lint', (): void => {
    test('Commitlintrc template matches expected template', (): void => {
      commitlint.testRcTemplate(snapshot);
    });
  });
  /**
   * End Commit lint
   */

  /**
   * Start Devcontainer
   */
  describe('.devcontainer', (): void => {
    test('Container image is set properly', (): void => {
      devcontainer.testImage(snapshot);
    });

    test('Container features are set properly', (): void => {
      devcontainer.testFeatures(snapshot);
    });

    test('Container VsCode extensions are set properly', (): void => {
      const expectedExtensions: string[] = [
        'Orta.vscode-jest',
        'firsttris.vscode-jest-runner',
        'humao.rest-client',
        'aaron-bond.better-comments',
        'alefragnani.Bookmarks',
        'alefragnani.project-manager',
        'christian-kohler.npm-intellisense',
        'mskelton.npm-outdated',
        'PKief.material-icon-theme',
        'zhuangtongfa.material-theme',
        'GitHub.github-vscode-theme',
        'ms-vscode-remote.remote-containers',
        'mikestead.dotenv',
        'usernamehw.errorlens',
        'dbaeumer.vscode-eslint',
        'oderwat.indent-rainbow',
        'esbenp.prettier-vscode',
        'YoavBls.pretty-ts-errors',
        'streetsidesoftware.code-spell-checker',
        'wayou.vscode-todo-highlight',
        'mike-co.import-sorter',
        'VisualStudioExptTeam.vscodeintellicode',
        'redhat.vscode-yaml',
        'DotJoshJohnson.xml',
        'waderyan.gitblame',
        'donjayamanne.githistory',
        'GitHub.vscode-pull-request-github',
        'yzhang.markdown-all-in-one',
        'DavidAnson.vscode-markdownlint',
        'bierner.jsdoc-markdown-highlighting',
        'VisualStudioExptTeam.vscodeintellicode',
        'christian-kohler.path-intellisense',
        'AykutSarac.jsoncrack-vscode',
        'tamasfe.even-better-toml',
        'github.copilot',
        'SAPSE.vscode-cds',
        'SAPOSS.app-studio-toolkit',
        'SAPOSS.app-studio-remote-access',
        'SAPOS.yeoman-ui',
        'SAPSE.sap-ux-fiori-tools-extension-pack',
        'SAPOSS.xml-toolkit',
        'qwtel.sqlite-viewer',
        'janisdd.vscode-edit-csv',
        'mechatroner.rainbow-csv',
      ];
      devcontainer.testExtensions(snapshot, expectedExtensions);
    });

    test('Container postCreateCommand is set properly', (): void => {
      const expectedCommand: string = 'bash scripts/install-dependencies.sh';
      devcontainer.testCommand(snapshot, expectedCommand);
    });

    test('Container postCreateCommand install-dependencies.sh are set properly', (): void => {
      const expectedCommand: string = `#!/bin/bash
set -e # Exit on error
set -x # Print commands for debugging

# Install global npm packages
npm install -g mbt @sap/cds @sap/cds-dk ts-node

# Install project dependencies
npm install

# Generate CDS typings
npx @cap-js/cds-typer "*" --outputDirectory @cds-models

# Add Cloud Foundry CLI repository
wget -q -O - https://packages.cloudfoundry.org/debian/cli.cloudfoundry.org.key | sudo apt-key add -
echo "deb https://packages.cloudfoundry.org/debian stable main" | sudo tee /etc/apt/sources.list.d/cloudfoundry-cli.list

# Update package lists and install required packages
sudo apt-get update
sudo apt-get install -y xdg-utils jq cf8-cli

# Install Cloud Foundry MultiApps Plugin
cf install-plugin -f https://github.com/cloudfoundry-incubator/multiapps-cli-plugin/releases/latest/download/multiapps-plugin.linux64`;
      devcontainer.testInstallDependencies(snapshot, expectedCommand);
    });
  });
  /**
   * End Devcontainer
   */

  /**c
   * Start Eslint
   */
  describe('eslint', (): void => {
    test('Config file matches expected template', (): void => {
      const additionalRules: Record<string, string> = {
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/class-literal-property-style': 'off',
        '@typescript-eslint/no-empty-object-type': 'off',
      };
      const additionalIgnores: string[] = [
        'test/',
        'dist/',
        'gen/',
        '@cds-models',
        'default-env.js',
        '@dispatcher',
        'docs/',
      ];
      eslint.testConfigFile(snapshot, additionalRules, additionalIgnores);
    });
  });
  /**
   * End Eslint
   * */

  /**
   * Start Git
   */
  describe('git', (): void => {
    test('Ignore patterns matches expected content', (): void => {
      const expectedEntries: string[] = [
        '',
        '*.bak',
        '*.mta',
        '*.mtar',
        '!/.commitlintrc.ts',
        '!/.devcontainer/devcontainer.json',
        '!/.devcontainer/scripts/install-dependencies.sh',
        '!/.gitattributes',
        '!/.github/pull_request_template.md',
        '!/.github/workflows/deployment.yml',
        '!/.github/workflows/enforce-labels.yml',
        '!/.github/workflows/release.yml',
        '!/.husky/commit-msg',
        '!/.husky/pre-commit',
        '!/.husky/pre-push',
        '!/.prettierignore',
        '!/.prettierrc.json',
        '!/.projen/deps.json',
        '!/.projen/files.json',
        '!/.projen/tasks.json',
        '!/.projenrc.ts',
        '!/.vscode/launch.json',
        '!/.vscode/settings.json',
        '!/.vscode/tasks.json',
        '!/cliff.toml',
        '!/eslint.config.mjs',
        '!/package.json',
        '!/src/',
        '!/test/',
        '!/tsconfig.json',
        '# ~~ Generated by projen. To modify, edit .projenrc.ts and run "npx projen".',
        '*.lcov',
        '*.log',
        '*.pid',
        '*.pid.lock',
        '*.seed',
        '*.tgz',
        '*.tsbuildinfo',
        '.cache',
        '.eslintcache',
        '.nyc_output',
        '.yarn-integrity',
        '/coverage/',
        '/dist/',
        '/lib',
        '/test-reports/',
        '/junit.xml',
        '@cds-models',
        'build/Release',
        'coverage',
        'default-*.json',
        'gen',
        'jspm_packages/',
        'lerna-debug.log*',
        'lib-cov',
        'logs',
        'mta_archives',
        'node_modules/',
        'npm-debug.log*',
        'pids',
        'resources',
        'report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json',
        'yarn-debug.log*',
        'yarn-error.log*',
      ];
      git.testIgnore(snapshot, expectedEntries);
    });
  });
  /**
   * End Git
   */

  /**
   * Start Github
   */
  describe('github', (): void => {
    /**
     * Start Github attributes
     */
    describe('Attributes', (): void => {
      test('Github related files are added to .gitattributes and defined as linguist-generated', (): void => {
        const expectedTemplateLines: string[] = [
          '# ~~ Generated by projen. To modify, edit .projenrc.ts and run "npx projen".',
          '',
          '* text=auto eol=lf',
          '/.commitlintrc.ts linguist-generated',
          '/.devcontainer/devcontainer.json linguist-generated',
          '/.devcontainer/scripts/install-dependencies.sh linguist-generated',
          '/.gitattributes linguist-generated',
          '/.github/pull_request_template.md linguist-generated',
          '/.github/workflows/deployment.yml linguist-generated',
          '/.github/workflows/enforce-labels.yml linguist-generated',
          '/.github/workflows/release.yml linguist-generated',
          '/.gitignore linguist-generated',
          '/.husky/commit-msg linguist-generated',
          '/.husky/pre-commit linguist-generated',
          '/.husky/pre-push linguist-generated',
          '/.prettierignore linguist-generated',
          '/.prettierrc.json linguist-generated',
          '/.projen/** linguist-generated',
          '/.projen/deps.json linguist-generated',
          '/.projen/files.json linguist-generated',
          '/.projen/tasks.json linguist-generated',
          '/.vscode/launch.json linguist-generated',
          '/.vscode/settings.json linguist-generated',
          '/.vscode/tasks.json linguist-generated',
          '/@cds-models linguist-generated',
          '/CHANGELOG.md linguist-generated',
          '/cliff.toml linguist-generated',
          '/dist linguist-generated',
          '/eslint.config.mjs linguist-generated',
          '/gen linguist-generated',
          '/package-lock.json linguist-generated',
          '/package.json linguist-generated',
          '/tsconfig.json linguist-generated',
        ];
        github.testGitAttributes(snapshot, expectedTemplateLines);
      });
    });
    /**
     * End Github attributes
     */

    /**
     * Start Github templates
     */
    describe('Templates', (): void => {
      test('PR template matches expected template', (): void => {
        const expectedTemplateLines: string[] = [
          '## Reviewers Checklist',
          '',
          'for complete review list refer to ABS Loop - Review Aspects',
          '',
          '### Organizational Section',
          '',
          '- [ ] PR is assigned to the according story/feature/bug',
          '- [ ] Story/feature/bug is descriptive',
          '- [ ] Story/feature/bug is assigned to according labels',
          '- [ ] Story/feature/bug is assigned to a developer',
          '',
          '### Structure',
          '',
          '- [ ] Readability: Code is easy to understand, with meaningful names for variables, functions, and classes',
          '- [ ] Comments: Meaningful and helpful comments. Code is documented without being over-commented',
          '- [ ] DRY, KISS and YAGNI: Code implements only necessary features; no over-engineering',
          '- [ ] No sensitive data (e.g., passwords, API keys) in the code',
          '- [ ] No major updates for used packages',
          '',
          '### Coding',
          '',
          '- [ ] Model/Binding property changes or renaming does not break the code',
          '- [ ] Model/Binding properties have consistent names (capitalization, lowercase, ..)',
          '- [ ] Type aliases are defined for associations and compositions',
          '- [ ] No hungarian notation (e.g. aList, oModel, ..)',
          '',
          '### Most important (as long as we do not have Test Driven Development in place)',
          '',
          '- [ ] Code is locally tested by developer',
          '',
          '### Second most important',
          '',
          '- [ ] API first: application can be used headless (with the API only)',
        ];
        github.testPrTemplate(snapshot, expectedTemplateLines);
      });
    });
    /**
     * End Github templates
     */

    /**
     * Start Github workflows
     */
    describe('Workflows', (): void => {
      test('Projen standard workflows are removed', (): void => {
        github.testProjenWorkflows(snapshot, 3);
      });

      test('Release workflow template matches expected template', (): void => {
        const expectedTemplateLines: string[] = [
          'name: Release',
          'on:',
          '  pull_request:',
          '    branches:',
          '      - dev',
          '    types:',
          '      - closed',
          'jobs:',
          '  release:',
          '    runs-on: ubuntu-latest',
          '    permissions:',
          '      contents: write',
          '      pull-requests: write',
          '    steps:',
          '      - name: Create release',
          '        uses: dxfrontier/gh-action-release@main',
          '        with:',
          '          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}',
          '          BRANCH: dev',
        ];

        github.testReleaseWorkflow(snapshot, expectedTemplateLines);
      });

      test('Deployment workflow template matches expected template', (): void => {
        github.testDeploymentWorkflow(snapshot);
      });

      test('Cliff toml template matches expected template', (): void => {
        github.testCliffToml(snapshot);
      });

      test('Enforce labels toml template matches expected template', (): void => {
        github.testCliffToml(snapshot);
      });
    });
    /**
     * End Github workflows
     */
  });
  /**
   * End Github
   */

  /**
   * Start husky
   */
  describe('husky', (): void => {
    test('Commit-msg hook matches expected template', (): void => {
      husky.testCommitMsgHook(snapshot);
    });

    test('Pre-commit hook matches expected template', (): void => {
      husky.testPreCommitHook(snapshot);
    });

    test('Pre-push hook matches expected template', (): void => {
      husky.testPrePushHook(snapshot);
    });
  });
  /**
   * End husky
   */

  /**
   * Start jest
   */
  describe('jest', (): void => {
    test('Jest settings are set properly', (): void => {
      const expectedSettings: Record<string, unknown> = {
        // "jest": {
        coverageProvider: 'v8',
        testMatch: [
          '<rootDir>/@(src|test)/**/*(*.)@(spec|test).ts?(x)',
          '<rootDir>/@(src|test)/**/__tests__/**/*.ts?(x)',
          '<rootDir>/@(projenrc)/**/*(*.)@(spec|test).ts?(x)',
          '<rootDir>/@(projenrc)/**/__tests__/**/*.ts?(x)',
        ],
        clearMocks: true,
        collectCoverage: true,
        coverageReporters: ['json', 'lcov', 'clover', 'cobertura', 'text'],
        coverageDirectory: 'coverage',
        coveragePathIgnorePatterns: ['/node_modules/'],
        testPathIgnorePatterns: ['/node_modules/'],
        watchPathIgnorePatterns: ['/node_modules/'],
        reporters: [
          'default',
          [
            'jest-junit',
            {
              outputDirectory: 'test-reports',
            },
          ],
        ],
        transform: {
          '^.+\\.[t]sx?$': [
            'ts-jest',
            {
              tsconfig: 'tsconfig.json',
            },
          ],
        },
        // }
      };
      js.testSettings(snapshot, expectedSettings);
    });
  });
  /**
   * End jest
   */

  /**
   * Start npm
   */
  describe('npm', (): void => {
    test('General info in package.json is set properly', (): void => {
      const expectedInfo: Record<string, unknown> = {
        name: 'my-cap-service',
        version: '0.0.0',
        license: 'UNLICENSED',
        main: 'lib/index.js',
        types: 'lib/index.d.ts',
      };
      npm.testPackageJsonGeneral(snapshot, expectedInfo);
    });

    test('Files property in package.json is set properly', (): void => {
      const additionalPatterns: string[] = ['gen'];
      npm.testPackageJsonFiles(snapshot, additionalPatterns);
    });

    test('DevDependencies are added properly', (): void => {
      const expectedDevDependencies: Record<string, string> = {
        [constants['@cap-js/cds-typer'].NAME]: constants['@cap-js/cds-typer'].VERSION,
        [constants['@cap-js/cds-types'].NAME]: constants['@cap-js/cds-types'].VERSION,
        [constants['@cap-js/sqlite'].NAME]: constants['@cap-js/sqlite'].VERSION,
        [constants['@commitlint/cli'].NAME]: constants['@commitlint/cli'].VERSION,
        [constants['@commitlint/config-conventional'].NAME]: constants['@commitlint/config-conventional'].VERSION,
        [constants['@commitlint/prompt-cli'].NAME]: constants['@commitlint/prompt-cli'].VERSION,
        [constants['@commitlint/types'].NAME]: constants['@commitlint/types'].VERSION,
        [constants['@sap/cds-dk'].NAME]: constants['@sap/cds-dk'].VERSION,
        [constants['@sap/cds-lsp'].NAME]: constants['@sap/cds-lsp'].VERSION,
        [constants['@types/jest'].NAME]: constants['@types/jest'].VERSION,
        [constants['@types/node'].NAME]: constants['@types/node'].VERSION,
        [constants['constructs'].NAME]: '^10.0.0', // ! This is injected by the jsii config module
        [constants['eslint'].NAME]: constants['eslint'].VERSION,
        [constants['husky'].NAME]: constants['husky'].VERSION,
        [constants['jest'].NAME]: constants['jest'].VERSION,
        [constants['jest-junit'].NAME]: constants['jest-junit'].VERSION,
        [constants['lint-staged'].NAME]: constants['lint-staged'].VERSION,
        [constants['npm-run-all'].NAME]: constants['npm-run-all'].VERSION,
        [constants['prettier'].NAME]: constants['prettier'].VERSION,
        [constants['projen'].NAME]: '*', // ! This is injected by the jsii config module
        [constants['ts-jest'].NAME]: constants['ts-jest'].VERSION,
        [constants[`ts-node`].NAME]: constants[`ts-node`].VERSION,
        [constants['typescript'].NAME]: constants['typescript'].VERSION,
        [constants['typescript-eslint'].NAME]: constants['typescript-eslint'].VERSION,
      };
      npm.testDevDependencies(snapshot, expectedDevDependencies);
    });

    test('Dependencies are added properly', (): void => {
      const expectedDependencies: Record<string, string> = {
        [constants['@dxfrontier/cds-ts-repository'].NAME]: constants['@dxfrontier/cds-ts-repository'].VERSION,
        [constants['@sap/cds'].NAME]: constants['@sap/cds'].VERSION,
        [constants['@sap/xssec'].NAME]: constants['@sap/xssec'].VERSION,
      };
      npm.testDependencies(snapshot, expectedDependencies);
    });

    test('Scripts are added properly', (): void => {
      const expectedTasks: Record<string, unknown> = {
        start: 'cds-serve --production',
        'start:local': 'cds-ts serve',
        watch: 'cds-ts watch',
        eslint: 'eslint .',
        prettier: 'prettier . --write',
        'prettier:cds': 'format-cds',
        commit: 'commit',
        prepare: 'husky || true',
        'build:cds': 'cds-ts build --production',
        'build:cds:message': 'echo "Build CDS ..."',
        'build:ts': 'tsc',
        'build:ts:message': 'echo "Transpile TS => JS ..."',
        'build:srv:clean:ts': 'find gen/srv/srv -type f -name "*.ts" -delete',
        'build:srv:clean:ts:message': 'echo "Clean TS files from srv folder ..."',
        build:
          'run-s build:cds:message build:cds build:ts:message build:ts build:srv:clean:ts:message build:srv:clean:ts',
        test: 'jest --passWithNoTests --updateSnapshot',
        'test:watch': 'jest --watch',
      };
      npm.testScripts(snapshot, expectedTasks);
    });

    test('Other configuration modules specific settings in package.json are set properly', (): void => {
      const expectedSettings: Record<string, unknown> = {
        'lint-staged': {
          '**/*.{ts,tsx}': ['npm run eslint', 'npm run prettier', 'npm run prettier:cds'],
        },
        imports: {
          '#cds-models/*': './@cds-models/*/index.js',
          '#dispatcher': './@dispatcher/index.js',
        },
      };
      npm.testPackageJsonSettings(snapshot, expectedSettings);
    });

    test('Projen standard npm scripts are removed from package.json', (): void => {
      const keys: string[] = Object.keys(snapshot['package.json']!.scripts);
      const scriptsToRemove: string[] = [
        'bump',
        'clobber',
        'compile',
        'default',
        'eject',
        'package',
        'post-compile',
        'post-upgrade',
        'pre-compile',
        'release',
        'unbump',
        'upgrade',
        'projen',
      ];
      const keyFound: boolean = keys.some((key: string): boolean => scriptsToRemove.includes(key));
      expect(keyFound).toBe(false);
    });
  });
  /**
   * End npm
   */

  /**
   * Start prettier
   */
  describe('prettier', (): void => {
    test('Prettier settings are set properly', (): void => {
      const expectedSettings = {
        '//': '~~ Generated by projen. To modify, edit .projenrc.ts and run "npx projen".',
        overrides: [
          {
            files: '*.*',
            options: {
              semi: true,
              trailingComma: 'all',
              singleQuote: true,
              printWidth: 120,
              tabWidth: 2,
            },
          },
        ],
      };
      prettier.testSettings(snapshot, expectedSettings);
    });

    test('Ignore patterns matches expected content', (): void => {
      const expectedEntries: string[] = [
        '/.commitlintrc.ts',
        '/.devcontainer/devcontainer.json',
        '/.gitattributes',
        '/.github/pull_request_template.md',
        '/.github/workflows/deployment.yml',
        '/.github/workflows/release.yml',
        '/.gitignore',
        '/.husky/commit-msg',
        '/.husky/pre-commit',
        '/.husky/pre-push',
        '/.prettierignore',
        '/.prettierrc.json',
        '/.vscode/settings.json',
        '/.vscode/launch.json',
        '/.vscode/tasks.json',
        '/@cds-models',
        '/API.md',
        '/CHANGELOG.md',
        '/coverage/',
        '/cliff.toml',
        '/dist',
        '/eslint.config.mjs',
        '/gen',
        '/junit.xml',
        '/package-lock.json',
        '/package.json',
        '/tsconfig.json',
        '/test-reports/',
      ];
      prettier.testIgnore(snapshot, expectedEntries);
    });
  });
  /**
   * End prettier
   */

  /**
   * Start typescript
   */
  describe('typescript', (): void => {
    test('TypeScript settings are set properly', (): void => {
      const expectedSettings: Record<string, unknown> = {
        '//': '~~ Generated by projen. To modify, edit .projenrc.ts and run "npx projen".',
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
      };
      typescript.testSettings(snapshot, expectedSettings, 'tsconfig.json');
    });
  });
  /**
   * End typescript
   */

  /**
   * Start vscode
   */
  describe('vscode', (): void => {
    test('VsCode settings are set properly', (): void => {
      const expectedSettings: Record<string, string | boolean | number> = {
        '//': '~~ Generated by projen. To modify, edit .projenrc.ts and run "npx projen".',
        'editor.tabSize': 2,
        'editor.stickyTabStops': true,
        'typescript.inlayHints.parameterNames.enabled': 'all',
        'typescript.inlayHints.enumMemberValues.enabled': true,
        'typescript.inlayHints.variableTypes.enabled': true,
        'typescript.inlayHints.propertyDeclarationTypes.enabled': true,
        'javascript.inlayHints.parameterNames.suppressWhenArgumentMatchesName': false,
        'javascript.inlayHints.variableTypes.suppressWhenTypeMatchesName': false,
        'typescript.inlayHints.functionLikeReturnTypes.enabled': true,
        'typescript.inlayHints.parameterTypes.enabled': true,
        'editor.inlayHints.fontSize': 10,
        'editor.inlayHints.padding': true,
        'editor.formatOnSave': true,
        'editor.formatOnPaste': true,
      };
      vscode.testSettings(snapshot, expectedSettings);
    });
  });
  /**
   * End vscode
   */
});

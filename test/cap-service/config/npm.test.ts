/**
 * Test files test the whole results of the Projen project creation
 * configuration orchestration. E.g. the npm test module does test the result of the whole `package.json` file
 * and that the devcontainer config module scripts are created. The devcontainer test module itself will not test
 * if the related devcontainer npm scripts are created.
 *
 * The `setup.ts` file includes all relevant bootstrap steps for the test files.
 * It is important that each test file imports and uses the `snapshot` otherwise the bootstrap will not run for this test file.
 **/

import { constants } from '../../../src/util/constants';
import * as npm from '../../shared/npm';
import { snapshot } from './setup';

/**
 * We use not a describe block here because the jest test runner `Test Results` pane will show the test names.
 * The `Testing` pane shows a hierarchy but for this hierarchy we already have the test file names available.
 */
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
    build: 'run-s build:cds:message build:cds build:ts:message build:ts build:srv:clean:ts:message build:srv:clean:ts',
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

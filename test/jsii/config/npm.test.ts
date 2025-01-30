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
    name: '@dxfrontier/projen-template-projects',
    version: '0.0.0',
    repository: {
      type: 'git',
      url: 'https://github.com/dxfrontier/projen-template-projects.git',
    },
    author: {
      name: 'DXFrontier Dev Team',
      email: 'mathias.von-kaiz@abs-gmbh.de',
      organization: false,
    },
    license: 'UNLICENSED',
    main: 'lib/index.js',
    types: 'lib/index.d.ts',
  };
  npm.testPackageJsonGeneral(snapshot, expectedInfo);
});

test('Files property in package.json is set properly', (): void => {
  const additionalPatterns: string[] = ['lib', '.jsii'];
  npm.testPackageJsonFiles(snapshot, additionalPatterns);
});

test('DevDependencies are added properly', (): void => {
  const expectedDevDependencies: Record<string, string> = {
    [constants['@commitlint/cli'].NAME]: constants['@commitlint/cli'].VERSION,
    [constants['@commitlint/config-conventional'].NAME]: constants['@commitlint/config-conventional'].VERSION,
    [constants['@commitlint/prompt-cli'].NAME]: constants['@commitlint/prompt-cli'].VERSION,
    [constants['@commitlint/types'].NAME]: constants['@commitlint/types'].VERSION,
    [constants['@types/jest'].NAME]: '*',
    [constants['@types/node'].NAME]: constants['@types/node'].VERSION,
    [constants['constructs'].NAME]: '10.4.2', // ! This is injected by the jsii config module
    [constants['eslint'].NAME]: constants['eslint'].VERSION,
    [constants['husky'].NAME]: constants['husky'].VERSION,
    [constants['jest'].NAME]: '*', // ! This is injected by the jsii config module
    [constants['jest-junit'].NAME]: '^16', // ! This is injected by the jsii config module
    [constants['jsii'].NAME]: constants['jsii'].VERSION,
    [constants['jsii-diff'].NAME]: constants['jsii-diff'].VERSION,
    [constants['jsii-docgen'].NAME]: constants['jsii-docgen'].VERSION,
    [constants['jsii-pacmak'].NAME]: constants['jsii-pacmak'].VERSION,
    [constants['jsii-rosetta'].NAME]: constants['jsii-rosetta'].VERSION,
    [constants['lint-staged'].NAME]: constants['lint-staged'].VERSION,
    [constants['prettier'].NAME]: constants['prettier'].VERSION,
    [constants['projen'].NAME]: '0.91.6', // ! This is injected by the jsii config module
    [constants['ts-jest'].NAME]: '*', // ! This is injected by the jsii config module
    [constants[`ts-node`].NAME]: constants[`ts-node`].VERSION,
    [constants['typescript'].NAME]: constants['typescript'].VERSION,
    [constants['typescript-eslint'].NAME]: constants['typescript-eslint'].VERSION,
  };
  npm.testDevDependencies(snapshot, expectedDevDependencies);
});

test('PeerDependencies are added properly', (): void => {
  const expectedPeerDependencies: Record<string, string> = {
    [constants['constructs'].NAME]: constants['constructs'].VERSION,
    [constants['projen'].NAME]: constants['projen'].VERSION,
  };
  npm.testPeerDependencies(snapshot, expectedPeerDependencies);
});

test('Scripts are added properly', (): void => {
  const expectedTasks: Record<string, unknown> = {
    build: 'npx projen build',
    clobber: 'npx projen clobber',
    commit: 'commit',
    compat: 'npx projen compat',
    compile: 'npx projen compile',
    default: 'npx projen default',
    docgen: 'npx projen docgen',
    eject: 'npx projen eject',
    eslint: 'eslint .',
    package: 'npx projen package',
    'package-all': 'npx projen package-all',
    'package:js': 'npx projen package:js',
    'post-compile': 'npx projen post-compile',
    'pre-compile': 'npx projen pre-compile',
    prepare: 'husky || true',
    prettier: 'prettier . --write',
    test: 'npx projen test',
    'test:watch': 'npx projen test:watch',
    watch: 'npx projen watch',
    projen: 'npx projen',
  };
  npm.testScripts(snapshot, expectedTasks);
});

test('Other configuration modules specific settings in package.json are set properly', (): void => {
  const expectedSettings: Record<string, unknown> = {
    'lint-staged': {
      '**/*.ts': ['npm run eslint', 'npm run prettier'],
    },
    jsii: {
      outdir: 'dist',
      targets: {},
      tsc: {
        outDir: 'lib',
        rootDir: 'src',
      },
    },
  };
  npm.testPackageJsonSettings(snapshot, expectedSettings);
});

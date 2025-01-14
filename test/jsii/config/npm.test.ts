/**
 * Test files test the whole results of the Projen project creation
 * configuration orchestration. E.g. the npm test module does test the result of the whole `package.json` file
 * and that the devcontainer config module scripts are created. The devcontainer test module itself will not test
 * if the related devcontainer npm scripts are created.
 * 
 * The `setup.ts` file includes all relevant bootstrap steps for the test files.
 * It is important that each test file imports and uses the `snapshot` otherwise the bootstrap will not run for this test file.
 **/

import * as npm from '../../shared/npm';
import { snapshot } from './setup';

/**
 * We use not a describe block here because the jest test runner `Test Results` pane will show the test names.
 * The `Testing` pane shows a hierarchy but for this hierarchy we already have the test file names available. 
 */
test('General info in package.json is set properly', (): void => {
  const expectedInfo: Record<string, unknown> = {
    "name": "@dxfrontier/projen-template-projects",
    "version": "0.0.0",
    "repository": {
      "type": "git",
      "url": "https://github.com/dxfrontier/projen-template-projects.git"
    },
    "author": {
      "name": "Mathias von Kaiz",
      "email": "mathias.von-kaiz@abs-gmbh.de",
      "organization": false
    },
    "license": "UNLICENSED",
    "main": "lib/index.js",
    "types": "lib/index.d.ts",
  };
  npm.testPackageJsonGeneral(snapshot, expectedInfo);
});

test('Files property in package.json is set properly', (): void => {
  const additionalPatterns: string[] = ['lib', '.jsii'];
  npm.testPackageJsonFiles(snapshot, additionalPatterns);
});

test('DevDependencies are added properly', (): void => {
  const expectedDevDependencies: Record<string, string> = {
    "@commitlint/cli": "^19.6.1",
    "@commitlint/config-conventional": "^19.6.0",
    "@commitlint/prompt-cli": "^19.7.0",
    "@commitlint/types": "^19.5.0",
    "@types/jest": "*",
    "@types/node": "^22.10.6",
    "@typescript-eslint/eslint-plugin": "^8",
    "@typescript-eslint/parser": "^8",
    "constructs": "10.4.2",
    "eslint": "^9.17.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-import-resolver-typescript": "^3.6.3",
    "eslint-plugin-import": "^2.31.0",
    "eslint-plugin-prettier": "^5.2.1",
    "husky": "^9.1.7",
    "jest": "*",
    "jest-junit": "^16",
    "jsii": "^5.7.4",
    "jsii-diff": "^1.106.0",
    "jsii-docgen": "^10.6.3",
    "jsii-pacmak": "^1.106.0",
    "jsii-rosetta": "^5.7.2",
    "lint-staged": "^15.3.0",
    "prettier": "^3.4.2",
    "projen": "0.91.6",
    "ts-jest": "*",
    "ts-node": "^10.9.2",
    "typescript": "^5.7.3",
  };
  npm.testDevDependencies(snapshot, expectedDevDependencies);
});

test('PeerDependencies are added properly', (): void => {
  const expectedPeerDependencies: Record<string, string> = {
    'constructs': '^10.4.2',
    'projen': '^0.91.6',
  };
  npm.testPeerDependencies(snapshot, expectedPeerDependencies);
});

test('Scripts are added properly', (): void => {
  const expectedTasks: Record<string, unknown> = {
    "build": "npx projen build",
    "clobber": "npx projen clobber",
    "commit": "commit",
    "compat": "npx projen compat",
    "compile": "npx projen compile",
    "default": "npx projen default",
    "docgen": "npx projen docgen",
    "eject": "npx projen eject",
    "eslint": "eslint .",
    "install-dependencies": "npm install",
    "package": "npx projen package",
    "package-all": "npx projen package-all",
    "package:js": "npx projen package:js",
    "post-compile": "npx projen post-compile",
    "pre-compile": "npx projen pre-compile",
    "prepare": "husky || true",
    "prettier": "prettier . --write",
    "test": "npx projen test",
    "test:watch": "npx projen test:watch",
    "watch": "npx projen watch",
    "projen": "npx projen"
  };
  npm.testScripts(snapshot, expectedTasks);
});

test('Other configuration modules specific settings in package.json are set properly', (): void => {
  const expectedSettings: Record<string, unknown> = {
    "lint-staged": {
      "**/*.ts": [
        "npm run eslint",
        "npm run prettier"
      ]
    },
    "jsii": {
      "outdir": "dist",
      "targets": {},
      "tsc": {
        "outDir": "lib",
        "rootDir": "src"
      }
    },
  };
  npm.testPackageJsonSettings(snapshot, expectedSettings);
});
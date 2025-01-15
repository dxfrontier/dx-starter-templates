import { SynthOutput } from 'projen/lib/util/synth';

/**
 * Validates that general information in package.json is set properly.
 * @param snapshot Synthesized project output.
 * @param expectedInfo Record of expected information to test for.
 */
export function testPackageJsonGeneral(snapshot: SynthOutput, expectedInfo: Record<string, unknown>): void {
  const packageJson: any = snapshot['package.json'];
  const relevantInformation: Record<string, unknown> = {
    name: packageJson!.name,
    version: packageJson!.version,
    repository: packageJson!.repository,
    author: packageJson!.author,
    license: packageJson!.license,
    main: packageJson!.main,
    types: packageJson!.types,
  };
  expect(relevantInformation).toStrictEqual(expectedInfo);
}

/**
 * Validates that files property in package.json is set properly.
 * @param snapshot Synthesized project output.
 * @param additionalPatterns List of additional file patterns to be added to standard patterns.
 */
export function testPackageJsonFiles(snapshot: SynthOutput, additionalPatterns: string[] = []): void {
  const standardPatterns: string[] = ['README.md'];
  const patterns: string[] = [...standardPatterns, ...additionalPatterns];
  expect(snapshot['package.json']!.files.sort()).toEqual(patterns.sort());
}

/**
 * Validates that npm dev dependencies are added properly.
 * @param snapshot Synthesized project output.
 * @param expectedDevDependencies Records of expected devDependencies to test for.
 */
export function testDevDependencies(snapshot: SynthOutput, expectedDevDependencies: Record<string, string>): void {
  const standardDevDependencies: Record<string, string> = {};
  const devDependencies: Record<string, string> = expectedDevDependencies
    ? expectedDevDependencies
    : standardDevDependencies;

  expect(snapshot['package.json']!.devDependencies).toStrictEqual(devDependencies);
}

/**
 * Validates that npm peer dependencies are added properly.
 * @param snapshot Synthesized project output.
 * @param expectedDevDependencies Records of expected peerDependencies to test for.
 */
export function testPeerDependencies(snapshot: SynthOutput, expectedPeerDependencies: Record<string, string>): void {
  const standardPeerDependencies: Record<string, string> = {};
  const peerDependencies: Record<string, string> = expectedPeerDependencies
    ? expectedPeerDependencies
    : standardPeerDependencies;

  expect(snapshot['package.json']!.peerDependencies).toStrictEqual(peerDependencies);
}

/**
 * Validates that npm scripts are added properly.
 * @param snapshot Synthesized project output.
 * @param expectedTasks Task names and their corresponding expected steps to compare with the snapshot.
 */
export function testScripts(snapshot: SynthOutput, expectedTasks: Record<string, unknown>): void {
  expect(snapshot['package.json']!.scripts).toStrictEqual(expectedTasks);
}

/**
 * Validates that Other configuration modules specific settings in package.json are set properly.
 * @param snapshot Synthesized project output.
 * @param expectedSettings Record of expected settings to test for.
 */
export function testPackageJsonSettings(snapshot: SynthOutput, expectedSettings: Record<string, unknown>): void {
  const packageJson: any = snapshot['package.json'];
  const relevantSettings: Record<string, unknown> = {
    'lint-staged': {
      ...packageJson!['lint-staged'],
    },
    jsii: {
      ...packageJson!['jsii'],
    },
  };
  expect(relevantSettings).toStrictEqual(expectedSettings);
}

import { SynthOutput } from 'projen/lib/util/synth';
import { ConfigRegistry } from '../../src/types';

/**
 * Validates that project related files are added to .gitattributes and defined as linguist-generated.
 * @param snapshot Synthesized project output.
 * @param patterns - Regular expressions to match against the .gitattributes file content.
 */
export function testGitAttributes(snapshot: SynthOutput, patterns: RegExp[]): void {
  for (const pattern of patterns) {
    expect(snapshot['.gitattributes']).toMatch(pattern);
  }
}

/**
 * Validates that npm scripts are added correctly to `package.json` scripts area.
 * @param snapshot Synthesized project output.
 * @param expectedTasks Task names and their corresponding expected steps to compare with the snapshot.
 */
export function testScripts(snapshot: SynthOutput, expectedTasks: Record<string, unknown>[]): void {
  expectedTasks.forEach((task) => {
    const [key, value] = Object.entries(task)[0];
    expect(snapshot['package.json']!.scripts[key]).toBe(value);
  });
}

/**
 * Validates that npm dev dependencies are added properly..
 * @param snapshot Synthesized project output.
 * @param expectedDevDependencies Dependency names to compare with the snapshot.
 */
export function testDevDependencies(snapshot: SynthOutput, expectedDevDependencies: string[]): void {
  expectedDevDependencies.forEach((dep: string): void => {
    const lastAtIndex: number = dep.lastIndexOf('@');
    const depName: string = lastAtIndex !== -1 ? dep.slice(0, lastAtIndex) : dep;
    const depVersion: string | null = lastAtIndex !== -1 ? dep.slice(lastAtIndex + 1) : null;

    expect(snapshot['package.json']!.devDependencies).toHaveProperty(depName);
    if (depVersion) {
      expect(snapshot['package.json']!.devDependencies[depName]).toBe(depVersion);
    }
  });
}

/**
 * Validates that npm peer dependencies are added properly..
 * @param snapshot Synthesized project output.
 * @param expectedPeerDependencies Dependency names to compare with the snapshot.
 */
export function testPeerDependencies(snapshot: SynthOutput, expectedPeerDependencies: string[]): void {
  expectedPeerDependencies.forEach((dep: string): void => {
    const lastAtIndex: number = dep.lastIndexOf('@');
    const depName: string = lastAtIndex !== -1 ? dep.slice(0, lastAtIndex) : dep;
    const depVersion: string | null = lastAtIndex !== -1 ? dep.slice(lastAtIndex + 1) : null;

    expect(snapshot['package.json']!.peerDependencies).toHaveProperty(depName);
    if (depVersion) {
      expect(snapshot['package.json']!.peerDependencies[depName]).toBe(depVersion);
    }
  });
}

/**
 * Validates that a config is registered in project registry.
 * @param configName Name of the config to check for in the registry.
 * @param registry Configs registry to search through for the specified config.
 */
export function testConfigInRegistry(configName: string, registry: ConfigRegistry): void {
  const hasConfig: boolean = registry.has(configName);
  expect(hasConfig).toBe(true);
}

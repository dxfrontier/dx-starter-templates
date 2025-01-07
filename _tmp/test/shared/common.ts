import { SynthOutput } from 'projen/lib/util/synth';
import { Builder } from '../../src/base';
import { TaskSteps } from '../../src/types';

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
 * Validates that npm scripts are added correctly by comparing the snapshot of tasks.json with expected tasks and steps.
 * @param snapshot Synthesized project output.
 * @param expectedTasks Task names and their corresponding expected steps to compare with the snapshot.
 */
export function testScripts(snapshot: SynthOutput, expectedTasks: TaskSteps): void {
  const tasks: Record<string, any> = snapshot['.projen/tasks.json'].tasks;
  for (const [name, steps] of Object.entries(expectedTasks)) {
    expect(tasks).toHaveProperty(name);
    steps.forEach((step: string, index: number): void => {
      expect(tasks[name].steps[index].exec).toBe(step);
    });
  }
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
 * Validates that a builder is registered in project registry.
 * @param builderName Name of the builder to check for in the registry.
 * @param registry Builders registry to search through for the specified builder.
 */
export function testBuilderInRegistry(builderName: string, registry: Builder[]): void {
  const hasBuilder: boolean = registry.some((builder: any): boolean => builder.constructor.name === builderName);
  expect(hasBuilder).toBe(true);
}

import { SynthOutput } from 'projen/lib/util/synth';
import * as common from './common';

/**
 * Validates that npm dev dependencies are added properly.
 * @param snapshot Synthesized project output.
 * @param expectedDevDependencies List of expected devDependencies to test for.
 */
export function testDevDependencies(snapshot: SynthOutput, expectedDevDependencies: string[] = []): void {
  const standardDevDependencies: string[] = [];
  const devDependencies: string[] = expectedDevDependencies.length ? expectedDevDependencies : standardDevDependencies;
  common.testDevDependencies(snapshot, devDependencies);
}

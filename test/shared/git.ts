import { SynthOutput } from 'projen/lib/util/synth';

/**
 * Validates that ignore patterns matches expected content.
 * @param snapshot Synthesized project output.
 * @param expectedEntries List of entries to test for.
 */
export function testIgnore(snapshot: SynthOutput, expectedEntries: string[] = []): void {
  const standardEntries: string[] = [];
  const entries: string[] = expectedEntries ? expectedEntries : standardEntries;
  const content: string[] = snapshot['.gitignore'].split('\n');
  expect(content.sort()).toEqual(entries.sort());
}

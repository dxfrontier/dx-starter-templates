import { SynthOutput } from 'projen/lib/util/synth';

/**
 * Validates that TypeScript settings are added properly.
 * @param snapshot Synthesized project output.
 * @param expectedSettings Records of expected settings to test for.
 */
export function testSettings(snapshot: SynthOutput, expectedSettings: Record<string, unknown>, file: string): void {
  const standardSettings: Record<string, unknown> = {};
  const settings: Record<string, unknown> = expectedSettings ? expectedSettings : standardSettings;

  expect(snapshot[file]).toStrictEqual(settings);
}

import { SynthOutput } from 'projen/lib/util/synth';

/**
 * Validates that Jest settings are added properly.
 * @param snapshot Synthesized project output.
 * @param expectedSettings Records of expected settings to test for.
 */
export function testSettings(snapshot: SynthOutput, expectedSettings: Record<string, unknown>): void {
  const standardSettings: Record<string, unknown> = {};
  const settings: Record<string, unknown> = expectedSettings ? expectedSettings : standardSettings;

  expect(snapshot['package.json'].jest).toStrictEqual(settings);
}

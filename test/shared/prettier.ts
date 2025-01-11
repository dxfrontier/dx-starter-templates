import { SynthOutput } from 'projen/lib/util/synth';

/**
 * Validates that prettier settings are set properly.
 * @param snapshot Synthesized project output.
 */
export function testSettings(snapshot: SynthOutput): void {
  const standardSettings = {
    overrides: [
      {
        files: '*.*',
        options: {
          semi: true,
          trailingComma: 'all',
          singleQuote: true,
          printWidth: 120,
          tabWidth: 2,
        },
      },
    ],
  };
  expect(snapshot['.prettierrc.json']).toStrictEqual(standardSettings);
}

/**
 * Validates that ignore patterns matches expected content.
 * @param snapshot Synthesized project output.
 * @param expectedEntries List of entries to test for.
 */
export function testIgnore(snapshot: SynthOutput, expectedEntries: string[] = []): void {
  const standardEntries: string[] = [];
  const entries: string[] = expectedEntries ? expectedEntries : standardEntries;
  const content: string[] = snapshot['.prettierignore'].split('\n');
  expect(content.sort()).toEqual(entries.sort());
}

import { SynthOutput } from 'projen/lib/util/synth';

/**
 * Validates that projen standard sample files are removed from file system.
 * @param snapshot Synthesized project output.
 */
export function testProjenSampleFiles(snapshot: SynthOutput): void {
  expect(snapshot['src/index.ts']).toBeUndefined();
  expect(snapshot['test/hello.test.ts']).toBeUndefined();
}

/**
 * Validates that sample code matches expected file templates.
 * @param snapshot Synthesized project output.
 * @param filePath Path to the snapshot file path property to test the content for.
 * @param expectedTemplateLines Template content lines that are expected.
 */
export function testSampleFilesTemplates(
  snapshot: SynthOutput,
  filePath: string,
  expectedTemplateLines: string[],
): void {
  expect(snapshot[filePath]).toStrictEqual(expectedTemplateLines.join('\n'));
}

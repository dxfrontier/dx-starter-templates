import { SynthOutput } from 'projen/lib/util/synth';

/**
 * Validates that commit-msg hook matches expected template.
 * @param snapshot Synthesized project output.
 */
export function testCommitMsgHook(snapshot: SynthOutput): void {
  const expectedTemplateLines: string = ['npx --no-install commitlint --edit "$1"'].join('\n');
  expect(snapshot['.husky/commit-msg']).toStrictEqual(expectedTemplateLines);
}

/**
 * Validates that pre-commit hook matches expected template.
 * @param snapshot Synthesized project output.
 */
export function testPreCommitHook(snapshot: SynthOutput): void {
  const expectedTemplateLines: string = ['npx lint-staged'].join('\n');
  expect(snapshot['.husky/pre-commit']).toStrictEqual(expectedTemplateLines);
}

/**
 * Validates that pre-push hook matches expected template.
 * @param snapshot Synthesized project output.
 * @param expectedTemplateLines Template content lines that are expected.
 */
export function testPrePushHook(snapshot: SynthOutput, expectedTemplateLines: string[] = []): void {
  const standardTemplateLines: string[] = ['npm run build'];
  const templateLines: string[] = expectedTemplateLines.length > 0 ? expectedTemplateLines : standardTemplateLines;
  expect(snapshot['.husky/pre-push']).toStrictEqual(templateLines.join('\n'));
}

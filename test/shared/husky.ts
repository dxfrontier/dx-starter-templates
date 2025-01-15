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
 */
export function testPrePushHook(snapshot: SynthOutput): void {
  const expectedTemplateLines: string = ['npm run build'].join('\n');
  expect(snapshot['.husky/pre-push']).toStrictEqual(expectedTemplateLines);
}

import { SynthOutput } from 'projen/lib/util/synth';

/**
 * Validates that commitlintrc template matches expected template.
 * @param snapshot Synthesized project output.
 */
export function testRcTemplate(snapshot: SynthOutput): void {
  const expectedTemplateLines: string = [
    "import type { UserConfig } from '@commitlint/types';",
    "import { RuleConfigSeverity } from '@commitlint/types';",
    '',
    'const Configuration: UserConfig = {',
    "  extends: ['@commitlint/config-conventional'],",
    '  rules: {',
    "    'type-enum': [",
    '      RuleConfigSeverity.Error,',
    "      'always',",
    "      ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test', 'delete'],",
    '    ],',
    "    'scope-empty': [RuleConfigSeverity.Error, 'never'],",
    "    'subject-empty': [RuleConfigSeverity.Error, 'never'],",
    '  },',
    "  helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',",
    '};',
    '',
    'export default Configuration;',
  ].join('\n');
  expect(snapshot['.commitlintrc.ts']).toBe(expectedTemplateLines);
}

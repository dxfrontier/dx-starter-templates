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
 */
export function testSampleFilesTemplates(snapshot: SynthOutput): void {
  const expectedTemplateLines: string = [
    "name: 'My Custom Composite Action'",
    "description: 'A sample GitHub composite action created with Projen.'",
    "author: 'Your Name or Org'",
    'branding:',
    "  icon: 'zap'",
    "  color: 'blue'",
    '',
    'inputs:',
    '  example-input:',
    "    description: 'An example input parameter for the action.'",
    '    required: false',
    "    default: 'default value'",
    '',
    'outputs:',
    '  example-output:',
    "    description: 'An example output from the action.'",
    '',
    'runs:',
    "  using: 'composite'",
    '  steps:',
    "    - name: 'Step 1'",
    "      run: echo 'Running Step 1 with input: ${{ inputs.example-input }}'",
    '',
    "    - name: 'Step 2'",
    "      run: echo 'Running Step 2'",
    '',
    'env:',
    "  EXAMPLE_ENV_VAR: 'example-value'",
  ].join('\n');
  expect(snapshot['action.yml']).toStrictEqual(expectedTemplateLines);
}

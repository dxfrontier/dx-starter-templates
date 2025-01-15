/**
 * Test files test the whole results of the Projen project creation
 * configuration orchestration. E.g. the npm test module does test the result of the whole `package.json` file
 * and that the devcontainer config module scripts are created. The devcontainer test module itself will not test
 * if the related devcontainer npm scripts are created.
 *
 * The `setup.ts` file includes all relevant bootstrap steps for the test files.
 * It is important that each test file imports and uses the `snapshot` otherwise the bootstrap will not run for this test file.
 **/

import * as samplecode from '../../shared/samplecode';
import { snapshot } from './setup';

/**
 * We use not a describe block here because the jest test runner `Test Results` pane will show the test names.
 * The `Testing` pane shows a hierarchy but for this hierarchy we already have the test file names available.
 */
test('Projen standard sample files are removed from file system', (): void => {
  samplecode.testProjenSampleFiles(snapshot);
});

test('Sample action file matches expected file templates', (): void => {
  const expectedTemplateLines: string[] = [
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
  ];
  samplecode.testSampleFilesTemplates(snapshot, 'action.yml', expectedTemplateLines);
});

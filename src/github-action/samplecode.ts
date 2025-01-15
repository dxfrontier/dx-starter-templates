import { GitHubActionProject } from '.';
import { SampleCodeConfigBase, Config, ConfigStrategy, SampleCodeConfigBaseStrategy } from '../base';

/**
 * Implementing all relevant SampleCode configuration for the GitHubAction project.
 */
export class SampleCodeConfigGitHubAction extends SampleCodeConfigBase<GitHubActionProject> {
  constructor(project: GitHubActionProject) {
    super(project);

    const strategy: ConfigStrategy = new NonApiConfigStrategy();
    this.setStrategy(strategy);
  }

  protected override get sampleCodeFile(): Record<string, string[]> {
    return {
      'action.yml': [
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
      ],
    };
  }
}

class NonApiConfigStrategy extends SampleCodeConfigBaseStrategy<GitHubActionProject> {
  applyConfig(config: Config<GitHubActionProject>): void {
    super.applyConfig(config);
  }
}

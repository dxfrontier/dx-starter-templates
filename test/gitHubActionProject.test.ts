import { SynthOutput, synthSnapshot } from 'projen/lib/util/synth';
import { GitHubActionProject, GitHubActionProjectOptions } from '../src';

describe('GitHubActionProject', (): void => {
  let props: GitHubActionProjectOptions;
  let snapshot: SynthOutput;

  beforeEach((): void => {
    props = {
      name: 'my-github-action',
      defaultReleaseBranch: 'main',
    };

    snapshot = [];
  });

  test('Project name is set properly', (): void => {
    // GIVEN
    const project = new GitHubActionProject(props);

    // WHEN
    snapshot = synthSnapshot(project);

    // THEN
    expect(snapshot['package.json']!.name).toBe(
      'my-github-action',
    );
  });

  describe('GitHub Template', (): void => {
    test('PR template matches expected template', (): void => {
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
      const expectedTemplateLines: string = [
        '## Reviewers Checklist',
        '',
        'for complete review list refer to ABS Loop - Review Aspects',
        '',
        '### Organizational Section',
        '',
        '- [ ] PR is assigned to the according feature/bug',
        '- [ ] Feature/bug is descriptive',
        '- [ ] Feature/bug is assigned to a developer',
        '',
        '### Structure',
        '',
        '- [ ] Readability: Code is easy to understand, with meaningful names for variables, functions, and classes',
        '- [ ] Comments: Meaningful and helpful comments. Code is documented without being over-commented',
        '- [ ] DRY, KISS and YAGNI: Code implements only necessary features; no over-engineering',
        '- [ ] No sensitive data (e.g., passwords, API keys) in the code',
        '- [ ] No major updates for used packages',
        '',
        '### Testing',
        '',
        '- [ ] Code is locally tested by developer (if applicable)',
        '- [ ] Automated tests pass successfully',
        '<!-- Generated by projen. To modify, edit .projenrc.ts and run \"npx projen\".-->',
      ].join('\n');
      expect(snapshot['.github/pull_request_template.md']).toBe(expectedTemplateLines);
    });

    test('Bug issue template matches expected template', (): void => {
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
      const expectedTemplateLines: string = [
        'name: 🐞 Bug',
        'description: File a bug/issue',
        'title: \'[BUG] < title >\'',
        'labels: [\'type: bug\']',
        'body:',
        '  - type: textarea',
        '    attributes:',
        '  label: Current behavior',
        '      description: A description of what you\'re experiencing.',
        '    validations:',
        '  required: true',
        '',
        '  - type: textarea',
        '    attributes:',
        '  label: Expected behavior',
        '      description: A description of what you expected to happen.',
        '    validations:',
        '  required: true',
        '# Generated by projen. To modify, edit .projenrc.ts and run \"npx projen\".',
      ].join('\n');
      expect(snapshot['.github/ISSUE_TEMPLATE/bug.yml']).toBe(expectedTemplateLines);
    });
  });
});
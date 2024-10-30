import { SynthOutput, synthSnapshot } from 'projen/lib/util/synth';
import { GitHubActionProject, GitHubActionProjectOptions } from '../src';
import { type ProjenStandardScript } from '../src/types/common';

describe('GitHubActionProject', (): void => {
  let props: GitHubActionProjectOptions;
  let snapshot: SynthOutput;

  beforeEach((): void => {
    props = {
      name: 'my-github-action',
      defaultReleaseBranch: 'main', // this is needed due to https://github.com/projen/projen/pull/524
      description: 'my-description',
      repository: 'my-repository',
    };

    snapshot = [];
  });

  describe('package.json', (): void => {
    test('Dynamic options are set properly', (): void => {
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
      expect(snapshot['package.json']!.name).toBe(
        'my-github-action',
      );
      expect(snapshot['package.json']!.description).toBe(
        'my-description',
      );
      expect(snapshot['package.json']!.repository).toStrictEqual({
        type: 'git',
        url: 'my-repository',
      });
    });

    test('Projen standard npm scripts are removed', (): void => {
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
      const keys: string[] = Object.keys(snapshot['package.json']!.scripts);
      const scriptsToRemove: ProjenStandardScript[] = [
        'bump',
        'clobber',
        'compile',
        'default',
        'eject',
        'eslint',
        'package',
        'post-compile',
        'post-upgrade',
        'pre-compile',
        'release',
        'test',
        'test:watch',
        'unbump',
        'upgrade',
        'watch',
        'projen',
      ];
      const keyFound: boolean = keys.some((key: string): boolean => scriptsToRemove.includes(key as ProjenStandardScript));
      expect(keyFound).toBe(false);
    });
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
        'title: "[BUG] < title >"',
        'labels: ["type: bug"]',
        'body:',
        '  - type: textarea',
        '    attributes:',
        '      label: Current behavior',
        '      description: A description of what you\'re experiencing.',
        '    validations:',
        '      required: true',
        '',
        '  - type: textarea',
        '    attributes:',
        '      label: Expected behavior',
        '      description: A description of what you expected to happen.',
        '    validations:',
        '      required: true',
        '# Generated by projen. To modify, edit .projenrc.ts and run \"npx projen\".',
      ].join('\n');
      expect(snapshot['.github/ISSUE_TEMPLATE/bug.yml']).toBe(expectedTemplateLines);
    });

    test('Feature issue template matches expected template', (): void => {
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
      const expectedTemplateLines: string = [
        'name: 💡 Feature',
        'description: Story related feature',
        'title: "[FEATURE] <title>"',
        'labels: ["type: feature"]',
        'body:',
        '  - type: textarea',
        '    attributes:',
        '      label: Description',
        '      description: A description of the feature.',
        '    validations:',
        '      required: true',
        '',
        '  - type: textarea',
        '    attributes:',
        '      label: Task List',
        '      description: Describe the steps to fulfill the feature.',
        '      value: |',
        '        - [ ] My First Task',
        '    validations:',
        '      required: true',
        '# Generated by projen. To modify, edit .projenrc.ts and run \"npx projen\".',
      ].join('\n');
      expect(snapshot['.github/ISSUE_TEMPLATE/feature.yml']).toBe(expectedTemplateLines);
    });

    test('Question issue template matches expected template', (): void => {
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
      const expectedTemplateLines: string = [
        'name: ❓ Question',
        'description: Ask a question',
        'title: "[QUESTION] <title>"',
        'labels: ["type: question"]',
        'body:',
        '  - type: textarea',
        '    attributes:',
        '      label: Question',
        '      description: What would you like to know? If you encounter unusual behavior or identified a missing feature, consider opening a bug report instead.',
        '    validations:',
        '      required: true',
        '# Generated by projen. To modify, edit .projenrc.ts and run \"npx projen\".',
      ].join('\n');
      expect(snapshot['.github/ISSUE_TEMPLATE/question.yml']).toBe(expectedTemplateLines);
    });
  });

  describe('DevContainers', (): void => {
    test('Container image is set properly', (): void => {
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
      expect(snapshot['.devcontainer.json'].image).toBe('mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye');
    });

    test('Container features are set properly', (): void => {
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
      const expectedFeatures = {
        'ghcr.io/devcontainers-contrib/features/curl-apt-get': 'latest',
        'ghcr.io/devcontainers/features/github-cli': 'latest',
        'ghcr.io/devcontainers-contrib/features/projen': 'latest',
      };
      expect(snapshot['.devcontainer.json'].features).toStrictEqual(expectedFeatures);
    });

    test('Container VS Code extensions are set properly', (): void => {
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
      const expectedExtensions: string[] = [
        'Orta.vscode-jest',
        'firsttris.vscode-jest-runner',
        'humao.rest-client',
        'aaron-bond.better-comments',
        'alefragnani.Bookmarks',
        'alefragnani.project-manager',
        'christian-kohler.npm-intellisense',
        'mskelton.npm-outdated',
        'PKief.material-icon-theme',
        'zhuangtongfa.material-theme',
        'GitHub.github-vscode-theme',
        'ms-vscode-remote.remote-containers',
        'mikestead.dotenv',
        'usernamehw.errorlens',
        'dbaeumer.vscode-eslint',
        'oderwat.indent-rainbow',
        'esbenp.prettier-vscode',
        'YoavBls.pretty-ts-errors',
        'streetsidesoftware.code-spell-checker',
        'wayou.vscode-todo-highlight',
        'mike-co.import-sorter',
        'VisualStudioExptTeam.vscodeintellicode',
        'redhat.vscode-yaml',
        'DotJoshJohnson.xml',
        'waderyan.gitblame',
        'donjayamanne.githistory',
        'GitHub.vscode-pull-request-github',
        'yzhang.markdown-all-in-one',
        'DavidAnson.vscode-markdownlint',
        'bierner.jsdoc-markdown-highlighting',
        'VisualStudioExptTeam.vscodeintellicode',
        'christian-kohler.path-intellisense',
        'AykutSarac.jsoncrack-vscode',
        'tamasfe.even-better-toml',
      ];
      expect(snapshot['.devcontainer.json'].customizations.vscode.extensions).toStrictEqual(expectedExtensions);
    });

    test('Container postCreateCommand is set properly', (): void => {
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
      const expectedTask = {
        name: 'install-dependencies',
        steps: [
          { exec: 'npm install' },
        ],
      };
      expect(snapshot['.devcontainer.json'].postCreateCommand).toBe('npx projen install-dependencies');
      expect(snapshot['.projen/tasks.json'].tasks).toHaveProperty('install-dependencies');
      expect(snapshot['.projen/tasks.json'].tasks['install-dependencies']).toMatchObject(expectedTask);
    });
  });

  describe('Visual Studio Code', (): void => {
    test('VSCode settings are set properly', (): void => {
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
      const expectedSettings = {
        '//': '~~ Generated by projen. To modify, edit .projenrc.js and run \"npx projen\".',
        'editor.tabSize': 2,
        'editor.stickyTabStops': true,
        'typescript.inlayHints.parameterNames.enabled': 'all',
        'typescript.inlayHints.enumMemberValues.enabled': true,
        'typescript.inlayHints.variableTypes.enabled': true,
        'typescript.inlayHints.propertyDeclarationTypes.enabled': true,
        'javascript.inlayHints.parameterNames.suppressWhenArgumentMatchesName': false,
        'javascript.inlayHints.variableTypes.suppressWhenTypeMatchesName': false,
        'typescript.inlayHints.functionLikeReturnTypes.enabled': true,
        'typescript.inlayHints.parameterTypes.enabled': true,
        'editor.inlayHints.fontSize': 10,
        'editor.inlayHints.padding': true,
        'editor.formatOnSave': true,
        'editor.formatOnPaste': true,
      };
      expect(snapshot['.vscode/settings.json']).toStrictEqual(expectedSettings);
    });
  });

  describe('Prettier', (): void => {
    test('Prettier settings are set properly', (): void => {
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
      const expectedSettings = {
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
      expect(snapshot['.prettierrc.json']).toStrictEqual(expectedSettings);
    });
  });

  test('Prettier npm scripts are added properly', (): void => {
    // GIVEN
    const project = new GitHubActionProject(props);

    // WHEN
    snapshot = synthSnapshot(project);

    // THEN
    expect(snapshot['package.json']!.scripts).toHaveProperty('format:message');
    expect(snapshot['package.json']!.scripts).toHaveProperty('format:fix');
  });
});
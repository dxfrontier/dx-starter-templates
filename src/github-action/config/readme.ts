// import { GitHubActionProjectOptions } from '../project';cd
import { BaseProjectOptions } from '../../base';
import { ReadmeConfig } from '../../util/types';

/**
 * Implementing all relevant Readme configuration for the CapService project.
 * We do not extend Base config classes as this is a special case.
 */
export class ReadmeConfigGitHubAction implements ReadmeConfig {
  public getReadme(options: BaseProjectOptions): { filename: string; contents: string } {
    // Start README.md
    return {
      filename: 'README.md',
      contents: [
        `# ${options.name}`,
        '',
        `${options.description}`,
        '',
        '# Table of Contents',
        '',
        `- [${options.name}](#${options.name})`,
        '- [Table of Contents](#table-of-contents)',
        '  - [`Setup`](#setup)',
        '  - [Project tools and utilities](#project-tools-and-utilities)',
        '    - [Prettier](#prettier)',
        '    - [Lint-staged](#lint-staged)',
        '    - [Commit-Lint](#commit-lint)',
        '    - [Husky](#husky)',
        '  - [Authors](#authors)',
        '',
        '## `Setup`',
        '',
        '1. Create the following three labels in your repository by navigating to `Pull Requests` > `Labels` > `New Label`:',
        '',
        '   - **patch**',
        '   - **minor**',
        '   - **major**',
        '',
        '> [!TIP]',
        '> For more info about `SemVer (MAJOR.MINOR.PATCH)`, visit [SemVer.org](https://semver.org/)',
        '',
        '## Project tools and utilities',
        '',
        'The following tools/utilities are predefined when you create the project using `projen` and do not require any configuration.',
        '',
        '### Prettier',
        '',
        'A code formatter that enforces consistent style across your project automatically.',
        '',
        '> [!NOTE]',
        '> Prettier is triggered when a new commit is committed.',
        '',
        '> [!TIP]',
        '> You can also run it manually by executing:',
        '> ```bash',
        '> npm run prettier:fix',
        '> ```',
        '',
        '### Lint-staged',
        '',
        'Runs linters (e.g., Prettier, ESLint) only on staged Git files before committing.',
        '',
        '### Commit-Lint',
        '',
        'Ensures commit messages follow a specified format (e.g., Conventional Commits).',
        '',
        '### Husky',
        '',
        'Git hooks manager to automate pre-commit and pre-push tasks (e.g., running tests or linters).',
        '',
        '## Authors',
        '',
        '- [@Author1](#link1)',
        '- [@Author2](#link2)',
        '',
        '<p align="right">(<a href="#table-of-contents">back to top</a>)</p>',
      ].join('\n'),
      // End README.md
    };
  }
}

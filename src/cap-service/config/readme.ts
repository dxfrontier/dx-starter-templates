import { BaseProjectOptions } from '../../base';
import { ReadmeConfig } from '../../util/types';

/**
 * Implementing all relevant Readme configuration for the CapService project.
 * We do not extend Base config classes as this is a special case.
 */
export class ReadmeConfigCapService implements ReadmeConfig {
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
        '  - [Prerequisites](#prerequisites)',
        '  - [`Installation`](#installation)',
        '  - [`Usage`](#usage)',
        '    - [Start locally](#start-locally)',
        '    - [Debug locally](#debug-locally)',
        '    - [Deploy (`DEV`, `QA`, `PROD`)](#deploy-dev-qa-prod)',
        '      - [Deployment steps](#deployment-steps)',
        '      - [`Branch-Specific` deployment rules](#branch-specific-deployment-rules)',
        '  - [Project tools and utilities](#project-tools-and-utilities)',
        '    - [Prettier](#prettier)',
        '    - [ESLint](#eslint)',
        '    - [Lint-staged](#lint-staged)',
        '    - [Commit-Lint](#commit-lint)',
        '    - [Husky](#husky)',
        '  - [Authors](#authors)',
        '',
        '## Prerequisites',
        '',
        'Install [**@sap/cds-dk**](https://cap.cloud.sap/docs/get-started/), [typescript](https://www.typescriptlang.org/), [ts-node](https://www.npmjs.com/package/ts-node) globally:',
        '',
        '```bash',
        'npm install -g @sap/cds-dk typescript ts-node',
        '```',
        '',
        '## `Installation`',
        '',
        '1. After generating the project using `projen`, install the required dependencies by running:',
        '',
        '```bash',
        'npm install',
        '```',
        '',
        '2. Create the following three labels in your repository by navigating to `Pull Requests` > `Labels` > `New Label`:',
        '',
        '   - **patch**',
        '   - **minor**',
        '   - **major**',
        '',
        '> [!TIP]',
        '> For more info about `SemVer (MAJOR.MINOR.PATCH)`, visit [SemVer.org](https://semver.org/)',
        '',
        '3. The following secrets must be created in your GitHub repository to enable the automatic deployment process:',
        '',
        '| Parameter       | Description                                                                   |',
        '| --------------- | ----------------------------------------------------------------------------- |',
        '| `CF_IAS_ORIGIN` | The origin used for IAS authentication when logging into Cloud Foundry. |',
        '| `CF_API_DEV` | The API endpoint for the development Cloud Foundry environment. |',
        '| `CF_ORG_DEV` | The organization for the development environment in Cloud Foundry. |',
        '| `CF_SPACE_DEV` | The space within the development organization in Cloud Foundry. |',
        '| `CF_USERNAME_DEV` | The username for logging into the development environment in Cloud Foundry. |',
        '| `CF_PASSWORD_DEV` | The password for logging into the development environment in Cloud Foundry. |',
        '| `CF_API_PROD` | The API endpoint for the production Cloud Foundry environment. |',
        '| `CF_ORG_PROD` | The organization for the production environment in Cloud Foundry. |',
        '| `CF_SPACE_PROD` | The space within the production organization in Cloud Foundry. |',
        '| `CF_USERNAME_PROD` | The username for logging into the production environment in Cloud Foundry. |',
        '| `CF_PASSWORD_PROD` | The password for logging into the production environment in Cloud Foundry. |',
        '',
        '## `Usage`',
        '',
        '### Start locally',
        '',
        'Start the CAP server in watch mode (hot-reload):',
        '',
        '```bash',
        'npm run watch',
        '```',
        '',
        '> [!TIP]',
        '> Access the service at http://localhost:4004',
        '',
        '### Debug locally',
        '',
        '1. Add breakpoints in your `.ts` files.',
        '2. Start the CAP server in debug mode:',
        '',
        '```bash',
        'npm run watch',
        '```',
        '',
        '3. Refresh the service.',
        '4. The debugger should stop at the breakpoint line.',
        '',
        '### Deploy (`DEV`, `QA`, `PROD`)',
        '',
        'The deployment process is automatically triggered when a `PULL REQUEST` is merged into the `main` branch.',
        '',
        '#### Deployment steps',
        '',
        '- `Version Bump`: The `package.json` version is incremented based on the selected label (`patch`, `minor`, or `major`).',
        '- `GitHub Tags`: A new tag is created to mark the release.',
        '- `GitHub Release`: A release is published in the repository, summarizing the changes.',
        '- `Changelog Update`: The `CHANGELOG.md` file is updated with the latest commit messages.',
        '',
        '> [!CAUTION]',
        '> Secrets from installation process are required for automatic deployment. See **[installation](#installation)**.',
        '',
        '> [!CAUTION]',
        '> Every `PULL REQUEST` merged into `main` must have one of the following labels:',
        '> - `patch` **(0.0.x)**',
        '> - `minor` **(0.x.0)**',
        '> - `major` **(x.0.0)**',
        '',
        '#### `Branch-Specific` deployment rules',
        '',
        '- `Development (DEV)`: Changes merged into the `dev` branch trigger deployment to the development environment.',
        '- `Quality Assurance (QA)`: Merging changes into `qa` triggers deployment to the QA environment.',
        '- `Production (PROD)`: Merging changes into `prod` deploys to production.',
        '',
        '> [!TIP]',
        '> To deploy all environments (`DEV`, `QA`, `PROD`), maintain `dev`, `qa`, and `prod` branches and merge changes accordingly.',
        '',
        '## Project tools and utilities',
        '',
        '### Prettier',
        '',
        'A code formatter enforcing consistent style.',
        '',
        '> [!NOTE]',
        '> Prettier runs automatically on commit.',
        '',
        '> [!TIP]',
        '> Manually run Prettier:',
        '> ```bash',
        '> npm run prettier:fix',
        '> ```',
        '',
        '### ESLint',
        '',
        'A linter enforcing TypeScript coding standards.',
        '',
        '> [!NOTE]',
        '> ESLint runs automatically on commit.',
        '',
        '> [!TIP]',
        '> Manually run ESLint:',
        '> ```bash',
        '> npm run eslint:fix',
        '> ```',
        '',
        '### Lint-staged',
        '',
        'Runs linters only on staged files before committing.',
        '',
        '### Commit-Lint',
        '',
        'Ensures commit messages follow a conventional format.',
        '',
        '### Husky',
        '',
        'Manages Git hooks for automated tasks (e.g., running tests, linters).',
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

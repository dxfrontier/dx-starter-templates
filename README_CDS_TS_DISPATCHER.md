# %PROJECT_NAME%

%PROJECT_DESCRIPTION%

# Table of Contents

- [%PROJECT_NAME%](#project_name)
- [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [`Installation`](#installation)
  - [`Usage`](#usage)
    - [Start locally](#start-locally)
    - [Debug locally](#debug-locally)
    - [Deploy (`DEV`, `QA`, `PROD`)](#deploy-dev-qa-prod)
      - [Deployment steps](#deployment-steps)
      - [`Branch-Specific` deployment rules](#branch-specific-deployment-rules)
  - [Project tools and utilities](#project-tools-and-utilities)
    - [Prettier](#prettier)
    - [ESLint](#eslint)
    - [Lint-staged](#lint-staged)
    - [Commit-Lint](#commit-lint)
    - [Husky](#husky)
  - [Authors](#authors)

## Prerequisites

Install [**@sap/cds-dk**](https://cap.cloud.sap/docs/get-started/), [typescript](https://www.typescriptlang.org/), [ts-node](https://www.npmjs.com/package/ts-node) globally:

```bash
npm install -g @sap/cds-dk typescript ts-node
```

## `Installation`

1. After generating the project using `projen`, install the required dependencies by running:

```bash
npm install
```

2. Create the following three labels in your repository by navigating to `Pull Requests` > `Labels` > `New Label`:

   - **patch**
   - **minor**
   - **major**

> [!TIP]
> For more info about `SemVer (MAJOR.MINOR.PATCH)` you can find at [SemVer.org](https://semver.org/)

3. The following secrets must be created in your GitHub repository to enable the automatic deployment process:

| Parameter       | Description                                                                   |
| --------------- | ----------------------------------------------------------------------------- |
| `CF_IAS_ORIGIN` | The origin to be used for IAS authentication when logging into Cloud Foundry. |

| `CF_API_DEV` | The API endpoint for the development Cloud Foundry environment. |
| `CF_ORG_DEV` | The organization for the development environment in Cloud Foundry. |
| `CF_SPACE_DEV` | The space within the development organization in Cloud Foundry. |
| `CF_USERNAME_DEV` | The username for logging into the development environment in Cloud Foundry. |
| `CF_PASSWORD_DEV` | The password for logging into the development environment in Cloud Foundry. |

| `CF_API_PROD` | The API endpoint for the production Cloud Foundry environment. |
| `CF_ORG_PROD` | The organization for the production environment in Cloud Foundry. |
| `CF_SPACE_PROD` | The space within the production organization in Cloud Foundry. |
| `CF_USERNAME_PROD` | The username for logging into the production environment in Cloud Foundry. |
| `CF_PASSWORD_PROD` | The password for logging into the production environment in Cloud Foundry. |

| `CF_API_QA` | `(Optional)` The API endpoint for the QA Cloud Foundry environment, if applicable. |
| `CF_ORG_QA` | `(Optional)` The organization for the QA environment in Cloud Foundry, if applicable. |
| `CF_SPACE_QA` | `(Optional)` The space within the QA organization in Cloud Foundry, if applicable. |
| `CF_USERNAME_QA` | `(Optional)` The username for logging into the QA environment in Cloud Foundry, if applicable. |
| `CF_PASSWORD_QA` | `(Optional)` The password for logging into the QA environment in Cloud Foundry, if applicable. |

## `Usage`

### Start locally

Start the CAP server in watch mode (hot-reload):

```bash
npm run watch
```

> [!TIP]
> Access the service at http://localhost:4004

### Debug locally

1. Add breakpoints in your `.ts` files.

2. Start the CAP server in debug mode:

```bash
npm run watch
```

3. Refresh the service
4. The breakpoint should stop at the breakpoint line.

### Deploy (`DEV`, `QA`, `PROD`)

The deployment process is automatically triggered when a `PULL REQUEST` is merged into the `main` branch.

#### Deployment steps

During the deployment process / steps, the following actions are performed:

- `Version Bump`: The `package.json` version is incremented based on the selected label (`patch`, `minor`, or `major`).
- `GitHub Tags`: A new tag is created to mark the release.
- `GitHub Release`: A release is published in the repository, summarizing the changes.
- `Changelog Update`: The `CHANGELOG.md` file is updated with the latest commit messages.

> [!CAUTION]
> Secrets from installation process is a must for automatic process.
>
> You can check the installation step **[installation](#installation)**

> [!CAUTION]
> Every `PULL REQUEST` merged into the `main` branch must have `one` of the following labels assigned:
>
> - `patch` **(0.0.x)**
> - `minor` **(0.x.0)**
> - `major` **(x.0.0)**

> [!NOTE]
> These labels determine the semantic versioning of the deployment.

#### `Branch-Specific` deployment rules

To deploy to specific environments, ensure the appropriate branch structure and merge strategy are followed:

- `Development (DEV)`: To deploy to the `development` environment, create and maintain a branch named `dev`. Ensure changes are merged from `dev` into the `main` branch.

- `Quality Assurance (QA)`: To deploy to the `quality` environment, ensure changes are merged from the `qa` branch into the `main` branch.

- `Production (PROD)`: To deploy to `production`, merge changes from the `prod` branch into the `main` branch.

> [!TIP]
> If you want to deploy to all environments (`DEV`, `QA`, and `PROD`), you need to create two more branches: `prod` and `qa`.
> Merge the latest state of your desired changes into these branches, then trigger the deployment [manually](https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-workflow-runs/manually-running-a-workflow) from `GitHub Actions`.
> Choose the correct branch (e.g., `dev`, `qa`, or `prod`), and this will deploy from the selected branch to the corresponding system.

## Project tools and utilities

The following tools / utils are predefined when you create the project using the `projen` and they do not require any configuration

### Prettier

A code formatter that enforces consistent style across your project automatically.

> [!NOTE]
> Prettier is triggered when a new commit is committed.

> [!TIP]
> You can also run it manually by running:
>
> ```bash
> npm run prettier:fix
> ```

### ESLint

A linter to detect and fix TypeScript code issues and enforce coding standards.

> [!NOTE]
> Lint is triggered when a new commit is committed.

> [!TIP]
> You can also run it manually by running:
>
> ```bash
> npm run eslint:fix
> ```

### Lint-staged

Runs linters (e.g., Prettier, ESLint) only on staged Git files before committing.

### Commit-Lint

Ensures commit messages follow a specified format (e.g., Conventional Commits).

### Husky

Git hooks manager to automate pre-commit and pre-push tasks (e.g., running tests or linters).

## Authors

- [@Author1](#link1)
- [@Author2](#link2)

<p align="right">(<a href="#table-of-contents">back to top</a>)</p>

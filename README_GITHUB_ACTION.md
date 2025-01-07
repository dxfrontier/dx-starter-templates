# %PROJECT_NAME%

%PROJECT_DESCRIPTION%

# Table of Contents

- [%PROJECT_NAME%](#project_name)
- [Table of Contents](#table-of-contents)
  - [`Setup`](#setup)
  - [Project tools and utilities](#project-tools-and-utilities)
    - [Prettier](#prettier)
    - [Lint-staged](#lint-staged)
    - [Commit-Lint](#commit-lint)
    - [Husky](#husky)
  - [Authors](#authors)

## `Setup`

1. Create the following three labels in your repository by navigating to `Pull Requests` > `Labels` > `New Label`:

   - **patch**
   - **minor**
   - **major**

> [!TIP]
> For more info about `SemVer (MAJOR.MINOR.PATCH)` you can find at [SemVer.org](https://semver.org/)

## Project tools and utilities

The following tools / utilities are predefined when you create the project using the `projen` and they do not require any configuration

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

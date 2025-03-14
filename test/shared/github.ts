import { SynthOutput } from 'projen/lib/util/synth';

/**
 * Validates that pull request template matches expected template.
 * @param snapshot Synthesized project output.
 */
export function testPrTemplate(snapshot: SynthOutput, expectedTemplateLines: string[] = []): void {
  const standardTemplateLines: string[] = [
    '## Reviewers Checklist',
    '',
    'for complete review list refer to ABS Loop - Review Aspects',
    '',
    '### Organizational Section',
    '',
    '- [ ] PR is assigned to the according feature/bug',
    '- [ ] Feature/bug is descriptive',
    '- [ ] Feature/bug is assigned to according labels',
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
  ];

  const lines: string[] = expectedTemplateLines.length ? expectedTemplateLines : standardTemplateLines;
  expect(snapshot['.github/pull_request_template.md']).toBe(lines.join('\n'));
}

/**
 * Validates that projen standard workflows are removed.
 * @param snapshot Synthesized project output.
 */
export function testProjenWorkflows(snapshot: SynthOutput, expectedCount: number): void {
  const standardCount: number = 1;
  const count: number = expectedCount === undefined ? standardCount : expectedCount;
  const keys: string[] = Object.keys(snapshot).filter((key: string): boolean => key.includes('.github/workflows'));
  expect(keys.length).toEqual(count);
}

/**
 * Validates that release workflow template matches expected template.
 * @param snapshot Synthesized project output.
 */
export function testReleaseWorkflow(snapshot: SynthOutput, expectedTemplateLines: string[] = []): void {
  const standardTemplateLines: string[] = [
    'name: Release',
    'on:',
    '  pull_request:',
    '    branches:',
    '      - main',
    '    types:',
    '      - closed',
    'jobs:',
    '  release:',
    '    runs-on: ubuntu-latest',
    '    permissions:',
    '      contents: write',
    '      pull-requests: write',
    '    steps:',
    '      - name: Create release',
    '        uses: dxfrontier/gh-action-release@main',
    '        with:',
    '          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}',
    '          BRANCH: main',
  ];

  const lines: string[] = expectedTemplateLines.length ? expectedTemplateLines : standardTemplateLines;
  expect(snapshot['.github/workflows/release.yml']).toBe(lines.join('\n'));
}

/**
 * Validates that deployment workflow template matches expected template.
 * @param snapshot Synthesized project output.
 */
export function testDeploymentWorkflow(snapshot: SynthOutput, expectedTemplateLines: string[] = []): void {
  const standardTemplateLines: string[] = [
    'name: Deployment',
    'on:',
    '  pull_request:',
    '    branches:',
    '      - dev',
    '      - main',
    '    types:',
    '      - closed',
    'jobs:',
    '  release:',
    '    runs-on: ubuntu-latest',
    '    permissions:',
    '      contents: write',
    '      pull-requests: write',
    '    steps:',
    '      - name: Deploy to Cloud Foundry',
    '        uses: dxfrontier/gh-action-deploy-cf@main',
    '        with:',
    '          CF_IAS_ORIGIN: ${{ secrets.IAS_ORIGIN }}',
    '          CF_API_DEV: ${{ secrets.CF_API_DEV }}',
    '          CF_ORG_DEV: ${{ secrets.CF_ORG_DEV }}',
    '          CF_SPACE_DEV: ${{ secrets.CF_SPACE_DEV }}',
    '          CF_USERNAME_DEV: ${{ secrets.CF_USERNAME_DEV }}',
    '          CF_PASSWORD_DEV: ${{ secrets.CF_PASSWORD_DEV }}',
    '          CF_API_PROD: ${{ secrets.CF_API_PROD }}',
    '          CF_ORG_PROD: ${{ secrets.CF_ORG_PROD }}',
    '          CF_SPACE_PROD: ${{ secrets.CF_SPACE_PROD }}',
    '          CF_USERNAME_PROD: ${{ secrets.CF_USERNAME_PROD }}',
    '          CF_PASSWORD_PROD: ${{ secrets.CF_PASSWORD_PROD }}',
  ];

  const lines: string[] = expectedTemplateLines.length ? expectedTemplateLines : standardTemplateLines;
  expect(snapshot['.github/workflows/deployment.yml']).toBe(lines.join('\n'));
}

/**
 * Validates that deployment workflow template matches expected template.
 * @param snapshot Synthesized project output.
 */
export function testEnforceLabelsWorkflow(snapshot: SynthOutput, expectedTemplateLines: string[] = []): void {
  const standardTemplateLines: string[] = [
    'name: Enforce labels',
    '',
    'on:',
    '  pull_request:',
    '    types: [opened, labeled]',
    '',
    'permissions:',
    '  contents: write',
    '  pull-requests: read',
    '',
    'jobs:',
    '  enforce-label-version-release:',
    "    name: 'Enforce Labels: version: patch, version: minor, version: major, no_release'",
    '    runs-on: ubuntu-latest',
    '    steps:',
    '      - name: Check out code',
    '        uses: actions/checkout@v4',
    '      - name: Enforce version release labels',
    '        uses: yogevbd/enforce-label-action@2.2.2',
    '        with:',
    "          REQUIRED_LABELS_ANY: 'version: patch,version: minor,version: major,no_release'",
    "          REQUIRED_LABELS_ANY_DESCRIPTION: \"Select at least one label ['version: patch', 'version: minor', 'version: major', 'no_release']\"",
  ];

  const lines: string[] = expectedTemplateLines.length ? expectedTemplateLines : standardTemplateLines;
  expect(snapshot['.github/workflows/enforce-labels.yml']).toBe(lines.join('\n'));
}

/**
 * Validates that cliff toml template matches expected template.
 * @param snapshot Synthesized project output.
 */
export function testCliffToml(snapshot: SynthOutput): void {
  const expectedTemplateLines: string = [
    '# git-cliff ~ default configuration file',
    '# https://git-cliff.org/docs/configuration',
    '#',
    '# Lines starting with "#" are comments.',
    '# Configuration options are organized into tables and keys.',
    '# See documentation for more information on available options.',
    '',
    '[changelog]',
    '# changelog header',
    'header = """',
    '# Changelog\\n',
    'All notable changes to this project will be documented in this file.\\n',
    '"""',
    '# template for the changelog body',
    '# https://keats.github.io/tera/docs/#introduction',
    'body = """',
    '{% if version %}\\',
    '    ## [{{ version | trim_start_matches(pat="v") }}] - {{ timestamp | date(format="%Y-%m-%d") }}',
    '{% else %}\\',
    '    ## [unreleased]',
    '{% endif %}\\',
    '{% for group, commits in commits | group_by(attribute="group") %}',
    '    ### {{ group | striptags | trim | upper_first }}',
    '    {% for commit in commits %}',
    '        - {% if commit.scope %}*({{ commit.scope }})* {% endif %}\\',
    '            {% if commit.breaking %}[**breaking**] {% endif %}\\',
    '            {{ commit.message | upper_first }}\\',
    '    {% endfor %}',
    '{% endfor %}\\n',
    '"""',
    '# template for the changelog footer',
    'footer = """',
    '<!-- generated by git-cliff -->',
    '"""',
    '# remove the leading and trailing s',
    'trim = true',
    '# postprocessors',
    'postprocessors = [',
    '  # { pattern = "<REPO>", replace = "https://github.com/orhun/git-cliff" }, # replace repository URL',
    ']',
    '',
    '[git]',
    '# parse the commits based on https://www.conventionalcommits.org',
    'conventional_commits = true',
    '# filter out the commits that are not conventional',
    'filter_unconventional = true',
    '# process each line of a commit as an individual commit',
    'split_commits = false',
    '# regex for preprocessing the commit messages',
    'commit_preprocessors = [',
    '  # Replace issue numbers',
    '  #{ pattern = "\\((\\w+\\s)?#([0-9]+)\\)", replace = "([#${2}](<REPO>/issues/${2}))"},',
    '  # Check spelling of the commit with https://github.com/crate-ci/typos',
    '  # If the spelling is incorrect, it will be automatically fixed.',
    '  #{ pattern = ".*", replace_command = "typos --write-changes -" },',
    ']',
    '# regex for parsing and grouping commits',
    'commit_parsers = [',
    '  { message = "^feat", group = "<!-- 0 -->🚀 Features" },',
    '  { message = "^fix", group = "<!-- 1 -->🐛 Bug Fixes" },',
    '  { message = "^doc", group = "<!-- 3 -->📚 Documentation" },',
    '  { message = "^perf", group = "<!-- 4 -->⚡ Performance" },',
    '  { message = "^refactor", group = "<!-- 2 -->🚜 Refactor" },',
    '  { message = "^style", group = "<!-- 5 -->🎨 Styling" },',
    '  { message = "^test", group = "<!-- 6 -->🧪 Testing" },',
    '  { message = "^chore\\\\(release\\\\): prepare for", skip = true },',
    '  { message = "^chore\\\\(deps.*\\\\)", skip = true },',
    '  { message = "^chore\\\\(pr\\\\)", skip = true },',
    '  { message = "^chore\\\\(pull\\\\)", skip = true },',
    '  { message = "^chore|^ci", group = "<!-- 7 -->⚙️ Miscellaneous Tasks" },',
    '  { body = ".*security", group = "<!-- 8 -->🛡️ Security" },',
    '  { message = "^revert", group = "<!-- 9 -->◀️ Revert" },',
    ']',
    '# protect breaking changes from being skipped due to matching a skipping commit_parser',
    'protect_breaking_commits = false',
    '# filter out the commits that are not matched by commit parsers',
    'filter_commits = false',
    '# regex for matching git tags',
    '# tag_pattern = "v[0-9].*"',
    '# regex for skipping tags',
    '# skip_tags = ""',
    '# regex for ignoring tags',
    '# ignore_tags = ""',
    '# sort the tags topologically',
    'topo_order = false',
    '# sort the commits inside sections by oldest/newest order',
    'sort_commits = "oldest"',
    '# limit the number of commits included in the changelog.',
    '# limit_commits = 42',
  ].join('\n');
  expect(snapshot['cliff.toml']).toBe(expectedTemplateLines);
}

/**
 * Validates that project related files are added to .gitattributes and defined as linguist-generated.
 * @param snapshot Synthesized project output.
 */
export function testGitAttributes(snapshot: SynthOutput, expectedTemplateLines: string[] = []): void {
  const standardTemplateLines: string[] = [
    '# ~~ Generated by projen. To modify, edit .projenrc.ts and run "npx projen".',
    '',
    '* text=auto eol=lf',
    '*.snap linguist-generated',
    '/.commitlintrc.ts linguist-generated',
    '/.devcontainer/devcontainer.json linguist-generated',
    '/.devcontainer/scripts/install-dependencies.sh linguist-generated',
    '/.gitattributes linguist-generated',
    '/.github/pull_request_template.md linguist-generated',
    '/.github/workflows/enforce-labels.yml linguist-generated',
    '/.github/workflows/release.yml linguist-generated',
    '/.gitignore linguist-generated',
    '/.husky/commit-msg linguist-generated',
    '/.husky/pre-commit linguist-generated',
    '/.husky/pre-push linguist-generated',
    '/.prettierignore linguist-generated',
    '/.prettierrc.json linguist-generated',
    '/.projen/** linguist-generated',
    '/.projen/deps.json linguist-generated',
    '/.projen/files.json linguist-generated',
    '/.projen/tasks.json linguist-generated',
    '/.vscode/settings.json linguist-generated',
    '/API.md linguist-generated',
    '/CHANGELOG.md linguist-generated',
    '/cliff.toml linguist-generated',
    '/eslint.config.mjs linguist-generated',
    '/package-lock.json linguist-generated',
    '/package.json linguist-generated',
    '/tsconfig.dev.json linguist-generated',
  ];

  const lines: string[] = expectedTemplateLines.length ? expectedTemplateLines : standardTemplateLines;
  expect(snapshot['.gitattributes']).toBe(lines.join('\n'));
}

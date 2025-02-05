"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadmeConfigGithub = void 0;
/**
 * Implementing all relevant Readme configuration for the CapService project.
 * We do not extend Base config classes as this is a special case.
 */
class ReadmeConfigGithub {
    getReadme(options) {
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
exports.ReadmeConfigGithub = ReadmeConfigGithub;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZG1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2dpdGh1Yi1hY3Rpb24vY29uZmlnL3JlYWRtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQTs7O0dBR0c7QUFDSCxNQUFhLGtCQUFrQjtJQUN0QixTQUFTLENBQUMsT0FBMkI7UUFDMUMsa0JBQWtCO1FBQ2xCLE9BQU87WUFDTCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUU7Z0JBQ1IsS0FBSyxPQUFPLENBQUMsSUFBSSxFQUFFO2dCQUNuQixFQUFFO2dCQUNGLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRTtnQkFDeEIsRUFBRTtnQkFDRixxQkFBcUI7Z0JBQ3JCLEVBQUU7Z0JBQ0YsTUFBTSxPQUFPLENBQUMsSUFBSSxNQUFNLE9BQU8sQ0FBQyxJQUFJLEdBQUc7Z0JBQ3ZDLDJDQUEyQztnQkFDM0MsdUJBQXVCO2dCQUN2QixpRUFBaUU7Z0JBQ2pFLDZCQUE2QjtnQkFDN0IsbUNBQW1DO2dCQUNuQyxtQ0FBbUM7Z0JBQ25DLHVCQUF1QjtnQkFDdkIseUJBQXlCO2dCQUN6QixFQUFFO2dCQUNGLFlBQVk7Z0JBQ1osRUFBRTtnQkFDRixvSEFBb0g7Z0JBQ3BILEVBQUU7Z0JBQ0YsZ0JBQWdCO2dCQUNoQixnQkFBZ0I7Z0JBQ2hCLGdCQUFnQjtnQkFDaEIsRUFBRTtnQkFDRixVQUFVO2dCQUNWLDZGQUE2RjtnQkFDN0YsRUFBRTtnQkFDRixnQ0FBZ0M7Z0JBQ2hDLEVBQUU7Z0JBQ0YsK0hBQStIO2dCQUMvSCxFQUFFO2dCQUNGLGNBQWM7Z0JBQ2QsRUFBRTtnQkFDRixvRkFBb0Y7Z0JBQ3BGLEVBQUU7Z0JBQ0YsV0FBVztnQkFDWCx5REFBeUQ7Z0JBQ3pELEVBQUU7Z0JBQ0YsVUFBVTtnQkFDViw4Q0FBOEM7Z0JBQzlDLFdBQVc7Z0JBQ1gsd0JBQXdCO2dCQUN4QixPQUFPO2dCQUNQLEVBQUU7Z0JBQ0YsaUJBQWlCO2dCQUNqQixFQUFFO2dCQUNGLG1GQUFtRjtnQkFDbkYsRUFBRTtnQkFDRixpQkFBaUI7Z0JBQ2pCLEVBQUU7Z0JBQ0YsaUZBQWlGO2dCQUNqRixFQUFFO2dCQUNGLFdBQVc7Z0JBQ1gsRUFBRTtnQkFDRiwrRkFBK0Y7Z0JBQy9GLEVBQUU7Z0JBQ0YsWUFBWTtnQkFDWixFQUFFO2dCQUNGLHNCQUFzQjtnQkFDdEIsc0JBQXNCO2dCQUN0QixFQUFFO2dCQUNGLHFFQUFxRTthQUN0RSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDWixnQkFBZ0I7U0FDakIsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQXhFRCxnREF3RUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBHaXRIdWJBY3Rpb25Qcm9qZWN0T3B0aW9ucyB9IGZyb20gJy4uL3Byb2plY3QnO2NkXG5pbXBvcnQgeyBCYXNlUHJvamVjdE9wdGlvbnMgfSBmcm9tICcuLi8uLi9iYXNlJztcbmltcG9ydCB7IFJlYWRtZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnO1xuXG4vKipcbiAqIEltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgUmVhZG1lIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBDYXBTZXJ2aWNlIHByb2plY3QuXG4gKiBXZSBkbyBub3QgZXh0ZW5kIEJhc2UgY29uZmlnIGNsYXNzZXMgYXMgdGhpcyBpcyBhIHNwZWNpYWwgY2FzZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFJlYWRtZUNvbmZpZ0dpdGh1YiBpbXBsZW1lbnRzIFJlYWRtZUNvbmZpZyB7XG4gIHB1YmxpYyBnZXRSZWFkbWUob3B0aW9uczogQmFzZVByb2plY3RPcHRpb25zKTogeyBmaWxlbmFtZTogc3RyaW5nOyBjb250ZW50czogc3RyaW5nIH0ge1xuICAgIC8vIFN0YXJ0IFJFQURNRS5tZFxuICAgIHJldHVybiB7XG4gICAgICBmaWxlbmFtZTogJ1JFQURNRS5tZCcsXG4gICAgICBjb250ZW50czogW1xuICAgICAgICBgIyAke29wdGlvbnMubmFtZX1gLFxuICAgICAgICAnJyxcbiAgICAgICAgYCR7b3B0aW9ucy5kZXNjcmlwdGlvbn1gLFxuICAgICAgICAnJyxcbiAgICAgICAgJyMgVGFibGUgb2YgQ29udGVudHMnLFxuICAgICAgICAnJyxcbiAgICAgICAgYC0gWyR7b3B0aW9ucy5uYW1lfV0oIyR7b3B0aW9ucy5uYW1lfSlgLFxuICAgICAgICAnLSBbVGFibGUgb2YgQ29udGVudHNdKCN0YWJsZS1vZi1jb250ZW50cyknLFxuICAgICAgICAnICAtIFtgU2V0dXBgXSgjc2V0dXApJyxcbiAgICAgICAgJyAgLSBbUHJvamVjdCB0b29scyBhbmQgdXRpbGl0aWVzXSgjcHJvamVjdC10b29scy1hbmQtdXRpbGl0aWVzKScsXG4gICAgICAgICcgICAgLSBbUHJldHRpZXJdKCNwcmV0dGllciknLFxuICAgICAgICAnICAgIC0gW0xpbnQtc3RhZ2VkXSgjbGludC1zdGFnZWQpJyxcbiAgICAgICAgJyAgICAtIFtDb21taXQtTGludF0oI2NvbW1pdC1saW50KScsXG4gICAgICAgICcgICAgLSBbSHVza3ldKCNodXNreSknLFxuICAgICAgICAnICAtIFtBdXRob3JzXSgjYXV0aG9ycyknLFxuICAgICAgICAnJyxcbiAgICAgICAgJyMjIGBTZXR1cGAnLFxuICAgICAgICAnJyxcbiAgICAgICAgJzEuIENyZWF0ZSB0aGUgZm9sbG93aW5nIHRocmVlIGxhYmVscyBpbiB5b3VyIHJlcG9zaXRvcnkgYnkgbmF2aWdhdGluZyB0byBgUHVsbCBSZXF1ZXN0c2AgPiBgTGFiZWxzYCA+IGBOZXcgTGFiZWxgOicsXG4gICAgICAgICcnLFxuICAgICAgICAnICAgLSAqKnBhdGNoKionLFxuICAgICAgICAnICAgLSAqKm1pbm9yKionLFxuICAgICAgICAnICAgLSAqKm1ham9yKionLFxuICAgICAgICAnJyxcbiAgICAgICAgJz4gWyFUSVBdJyxcbiAgICAgICAgJz4gRm9yIG1vcmUgaW5mbyBhYm91dCBgU2VtVmVyIChNQUpPUi5NSU5PUi5QQVRDSClgLCB2aXNpdCBbU2VtVmVyLm9yZ10oaHR0cHM6Ly9zZW12ZXIub3JnLyknLFxuICAgICAgICAnJyxcbiAgICAgICAgJyMjIFByb2plY3QgdG9vbHMgYW5kIHV0aWxpdGllcycsXG4gICAgICAgICcnLFxuICAgICAgICAnVGhlIGZvbGxvd2luZyB0b29scy91dGlsaXRpZXMgYXJlIHByZWRlZmluZWQgd2hlbiB5b3UgY3JlYXRlIHRoZSBwcm9qZWN0IHVzaW5nIGBwcm9qZW5gIGFuZCBkbyBub3QgcmVxdWlyZSBhbnkgY29uZmlndXJhdGlvbi4nLFxuICAgICAgICAnJyxcbiAgICAgICAgJyMjIyBQcmV0dGllcicsXG4gICAgICAgICcnLFxuICAgICAgICAnQSBjb2RlIGZvcm1hdHRlciB0aGF0IGVuZm9yY2VzIGNvbnNpc3RlbnQgc3R5bGUgYWNyb3NzIHlvdXIgcHJvamVjdCBhdXRvbWF0aWNhbGx5LicsXG4gICAgICAgICcnLFxuICAgICAgICAnPiBbIU5PVEVdJyxcbiAgICAgICAgJz4gUHJldHRpZXIgaXMgdHJpZ2dlcmVkIHdoZW4gYSBuZXcgY29tbWl0IGlzIGNvbW1pdHRlZC4nLFxuICAgICAgICAnJyxcbiAgICAgICAgJz4gWyFUSVBdJyxcbiAgICAgICAgJz4gWW91IGNhbiBhbHNvIHJ1biBpdCBtYW51YWxseSBieSBleGVjdXRpbmc6JyxcbiAgICAgICAgJz4gYGBgYmFzaCcsXG4gICAgICAgICc+IG5wbSBydW4gcHJldHRpZXI6Zml4JyxcbiAgICAgICAgJz4gYGBgJyxcbiAgICAgICAgJycsXG4gICAgICAgICcjIyMgTGludC1zdGFnZWQnLFxuICAgICAgICAnJyxcbiAgICAgICAgJ1J1bnMgbGludGVycyAoZS5nLiwgUHJldHRpZXIsIEVTTGludCkgb25seSBvbiBzdGFnZWQgR2l0IGZpbGVzIGJlZm9yZSBjb21taXR0aW5nLicsXG4gICAgICAgICcnLFxuICAgICAgICAnIyMjIENvbW1pdC1MaW50JyxcbiAgICAgICAgJycsXG4gICAgICAgICdFbnN1cmVzIGNvbW1pdCBtZXNzYWdlcyBmb2xsb3cgYSBzcGVjaWZpZWQgZm9ybWF0IChlLmcuLCBDb252ZW50aW9uYWwgQ29tbWl0cykuJyxcbiAgICAgICAgJycsXG4gICAgICAgICcjIyMgSHVza3knLFxuICAgICAgICAnJyxcbiAgICAgICAgJ0dpdCBob29rcyBtYW5hZ2VyIHRvIGF1dG9tYXRlIHByZS1jb21taXQgYW5kIHByZS1wdXNoIHRhc2tzIChlLmcuLCBydW5uaW5nIHRlc3RzIG9yIGxpbnRlcnMpLicsXG4gICAgICAgICcnLFxuICAgICAgICAnIyMgQXV0aG9ycycsXG4gICAgICAgICcnLFxuICAgICAgICAnLSBbQEF1dGhvcjFdKCNsaW5rMSknLFxuICAgICAgICAnLSBbQEF1dGhvcjJdKCNsaW5rMiknLFxuICAgICAgICAnJyxcbiAgICAgICAgJzxwIGFsaWduPVwicmlnaHRcIj4oPGEgaHJlZj1cIiN0YWJsZS1vZi1jb250ZW50c1wiPmJhY2sgdG8gdG9wPC9hPik8L3A+JyxcbiAgICAgIF0uam9pbignXFxuJyksXG4gICAgICAvLyBFbmQgUkVBRE1FLm1kXG4gICAgfTtcbiAgfVxufVxuIl19
"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuesConfigBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const config_1 = require("../config");
const utils_1 = require("../../util/utils");
/**
 * Base class for implementing all relevant GitHub configuration.
 *
 * This class acts as a base for handling GitHub configuration within projects.
 */
class IssuesConfigBase extends config_1.Config {
    constructor(project) {
        super(project);
    }
    /**
     * Retrieves the configuration for the bug issue template file.
     *
     * @returns A record where the key is the file path and the value is an array of strings
     *          representing the content of the issue template.
     */
    get configFileBugIssue() {
        return {
            '.github/ISSUE_TEMPLATE/bug.yml': [
                'name: 🐞 Bug',
                'description: File a bug/issue',
                'title: "[BUG]"',
                'labels: ["type: bug"]',
                'body:',
                '  - type: textarea',
                '    attributes:',
                '      label: Current behavior',
                "      description: A description of what you're experiencing.",
                '    validations:',
                '      required: true',
                '',
                '  - type: textarea',
                '    attributes:',
                '      label: Expected behavior',
                '      description: A description of what you expected to happen.',
                '    validations:',
                '      required: true',
            ],
        };
    }
    /**
     * Retrieves the configuration for the feature request template file.
     *
     * @returns A record where the key is the file path and the value is an array of strings
     *          representing the content of the issue template.
     */
    get configFileFeatureIssue() {
        return {
            '.github/ISSUE_TEMPLATE/feature.yml': [
                'name: 💡 Feature',
                'description: Request for a new feature',
                'title: "[FEATURE]"',
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
            ],
        };
    }
    /**
     * Retrieves the configuration for the housekeeping issue template file.
     *
     * @returns A record where the key is the file path and the value is an array of strings
     *          representing the content of the issue template.
     */
    get configFileHousekeepingIssue() {
        return {
            '.github/ISSUE_TEMPLATE/housekeeping.yml': [
                'name: 💡 Housekeeping',
                'description: Maintenance or refactoring task',
                'title: "[HOUSEKEEPING]"',
                'labels: ["type: housekeeping"]',
                'body:',
                '  - type: textarea',
                '    attributes:',
                '      label: Description',
                '      description: A description of the housekeeping task.',
                '    validations:',
                '      required: true',
                '',
                '  - type: textarea',
                '    attributes:',
                '      label: Task List',
                '      description: Describe the steps to fulfill the housekeeping task.',
                '      value: |',
                '        - [ ] My First Task',
                '    validations:',
                '      required: true',
            ],
        };
    }
    /**
     * Retrieves the configuration for the question issue template file.
     *
     * @returns A record where the key is the file path and the value is an array of strings
     *          representing the content of the issue template.
     */
    get configFileQuestionIssue() {
        return {
            '.github/ISSUE_TEMPLATE/question.yml': [
                'name: ❓ Question',
                'description: Ask a question',
                'title: "[QUESTION]"',
                'labels: ["type: question"]',
                'body:',
                '  - type: textarea',
                '    attributes:',
                '      label: Question',
                '      description: What would you like to know? If you encounter unusual behavior or identified a missing feature, consider opening a bug report instead.',
                '    validations:',
                '      required: true',
            ],
        };
    }
    get configFileStoryIssue() {
        return {
            '.github/ISSUE_TEMPLATE/story.yml': [
                'name: 💡 Story',
                'description: As a [role], I [want to], [so that]',
                'title: "[STORY]"',
                'labels: ["type: story"]',
                'body:',
                '  - type: textarea',
                '    attributes:',
                '      label: Description',
                "      description: Provide a brief overview of the story, focusing who want's to do what and why.",
                '    validations:',
                '      required: true',
            ],
        };
    }
    /**
     * Creates a template file based on the provided configuration.
     *
     * @param config - The configuration object containing the file path and content.
     */
    createTemplateFile(config) {
        const filePath = Object.keys(config)[0];
        new projen_1.TextFile(this.project, filePath, {
            lines: config[filePath],
        });
    }
    /**
     * Gets a list of all relevant config files.
     * @returns List of configs
     */
    get configs() {
        return [
            this.configFileBugIssue,
            this.configFileFeatureIssue,
            this.configFileHousekeepingIssue,
            this.configFileQuestionIssue,
            this.configFileStoryIssue,
        ];
    }
    /**
     * Retrieves the file paths for all dynamic configuration files.
     *
     * @returns A list of file path patterns, including dynamic configurations.
     */
    get filePatterns() {
        const dynamicFilePaths = this.configs
            .map((config) => `/${Object.keys(config)[0]}`)
            .filter((filePath) => filePath);
        return [...dynamicFilePaths];
    }
    get additionalIgnorePatterns() {
        const patterns = [...this.filePatterns];
        return patterns;
    }
    registerConfig() {
        if (utils_1.util.isValidProject(this.project)) {
            this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
        }
    }
    applyConfig() {
        this.createTemplateFile(this.configFileBugIssue);
        this.createTemplateFile(this.configFileFeatureIssue);
        this.createTemplateFile(this.configFileHousekeepingIssue);
        this.createTemplateFile(this.configFileQuestionIssue);
        this.createTemplateFile(this.configFileStoryIssue);
    }
}
exports.IssuesConfigBase = IssuesConfigBase;
_a = JSII_RTTI_SYMBOL_1;
IssuesConfigBase[_a] = { fqn: "@dxfrontier/dx-starter-templates.IssuesConfigBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNzdWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Jhc2UvY29uZmlnL2lzc3Vlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFrQztBQUNsQyxzQ0FBbUM7QUFFbkMsNENBQXdDO0FBRXhDOzs7O0dBSUc7QUFDSCxNQUFhLGdCQUFpQixTQUFRLGVBQU07SUFDMUMsWUFBWSxPQUFxQjtRQUMvQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsSUFBYyxrQkFBa0I7UUFDOUIsT0FBTztZQUNMLGdDQUFnQyxFQUFFO2dCQUNoQyxjQUFjO2dCQUNkLCtCQUErQjtnQkFDL0IsZ0JBQWdCO2dCQUNoQix1QkFBdUI7Z0JBQ3ZCLE9BQU87Z0JBQ1Asb0JBQW9CO2dCQUNwQixpQkFBaUI7Z0JBQ2pCLCtCQUErQjtnQkFDL0IsK0RBQStEO2dCQUMvRCxrQkFBa0I7Z0JBQ2xCLHNCQUFzQjtnQkFDdEIsRUFBRTtnQkFDRixvQkFBb0I7Z0JBQ3BCLGlCQUFpQjtnQkFDakIsZ0NBQWdDO2dCQUNoQyxrRUFBa0U7Z0JBQ2xFLGtCQUFrQjtnQkFDbEIsc0JBQXNCO2FBQ3ZCO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILElBQWMsc0JBQXNCO1FBQ2xDLE9BQU87WUFDTCxvQ0FBb0MsRUFBRTtnQkFDcEMsa0JBQWtCO2dCQUNsQix3Q0FBd0M7Z0JBQ3hDLG9CQUFvQjtnQkFDcEIsMkJBQTJCO2dCQUMzQixPQUFPO2dCQUNQLG9CQUFvQjtnQkFDcEIsaUJBQWlCO2dCQUNqQiwwQkFBMEI7Z0JBQzFCLGtEQUFrRDtnQkFDbEQsa0JBQWtCO2dCQUNsQixzQkFBc0I7Z0JBQ3RCLEVBQUU7Z0JBQ0Ysb0JBQW9CO2dCQUNwQixpQkFBaUI7Z0JBQ2pCLHdCQUF3QjtnQkFDeEIsK0RBQStEO2dCQUMvRCxnQkFBZ0I7Z0JBQ2hCLDZCQUE2QjtnQkFD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QUNILENBQUM7SUFFZSxXQUFXO1FBQ3pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7QUF6TUgsNENBME1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dEZpbGUgfSBmcm9tICdwcm9qZW4nO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IFByb2plY3RUeXBlcyB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMvcHJvamVjdCc7XG5pbXBvcnQgeyB1dGlsIH0gZnJvbSAnLi4vLi4vdXRpbC91dGlscyc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBHaXRIdWIgY29uZmlndXJhdGlvbi5cbiAqXG4gKiBUaGlzIGNsYXNzIGFjdHMgYXMgYSBiYXNlIGZvciBoYW5kbGluZyBHaXRIdWIgY29uZmlndXJhdGlvbiB3aXRoaW4gcHJvamVjdHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBJc3N1ZXNDb25maWdCYXNlIGV4dGVuZHMgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IocHJvamVjdDogUHJvamVjdFR5cGVzKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUgYnVnIGlzc3VlIHRlbXBsYXRlIGZpbGUuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgcmVjb3JkIHdoZXJlIHRoZSBrZXkgaXMgdGhlIGZpbGUgcGF0aCBhbmQgdGhlIHZhbHVlIGlzIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAgICogICAgICAgICAgcmVwcmVzZW50aW5nIHRoZSBjb250ZW50IG9mIHRoZSBpc3N1ZSB0ZW1wbGF0ZS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZUJ1Z0lzc3VlKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuZ2l0aHViL0lTU1VFX1RFTVBMQVRFL2J1Zy55bWwnOiBbXG4gICAgICAgICduYW1lOiDwn5CeIEJ1ZycsXG4gICAgICAgICdkZXNjcmlwdGlvbjogRmlsZSBhIGJ1Zy9pc3N1ZScsXG4gICAgICAgICd0aXRsZTogXCJbQlVHXVwiJyxcbiAgICAgICAgJ2xhYmVsczogW1widHlwZTogYnVnXCJdJyxcbiAgICAgICAgJ2JvZHk6JyxcbiAgICAgICAgJyAgLSB0eXBlOiB0ZXh0YXJlYScsXG4gICAgICAgICcgICAgYXR0cmlidXRlczonLFxuICAgICAgICAnICAgICAgbGFiZWw6IEN1cnJlbnQgYmVoYXZpb3InLFxuICAgICAgICBcIiAgICAgIGRlc2NyaXB0aW9uOiBBIGRlc2NyaXB0aW9uIG9mIHdoYXQgeW91J3JlIGV4cGVyaWVuY2luZy5cIixcbiAgICAgICAgJyAgICB2YWxpZGF0aW9uczonLFxuICAgICAgICAnICAgICAgcmVxdWlyZWQ6IHRydWUnLFxuICAgICAgICAnJyxcbiAgICAgICAgJyAgLSB0eXBlOiB0ZXh0YXJlYScsXG4gICAgICAgICcgICAgYXR0cmlidXRlczonLFxuICAgICAgICAnICAgICAgbGFiZWw6IEV4cGVjdGVkIGJlaGF2aW9yJyxcbiAgICAgICAgJyAgICAgIGRlc2NyaXB0aW9uOiBBIGRlc2NyaXB0aW9uIG9mIHdoYXQgeW91IGV4cGVjdGVkIHRvIGhhcHBlbi4nLFxuICAgICAgICAnICAgIHZhbGlkYXRpb25zOicsXG4gICAgICAgICcgICAgICByZXF1aXJlZDogdHJ1ZScsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUgZmVhdHVyZSByZXF1ZXN0IHRlbXBsYXRlIGZpbGUuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgcmVjb3JkIHdoZXJlIHRoZSBrZXkgaXMgdGhlIGZpbGUgcGF0aCBhbmQgdGhlIHZhbHVlIGlzIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAgICogICAgICAgICAgcmVwcmVzZW50aW5nIHRoZSBjb250ZW50IG9mIHRoZSBpc3N1ZSB0ZW1wbGF0ZS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZUZlYXR1cmVJc3N1ZSgpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnLmdpdGh1Yi9JU1NVRV9URU1QTEFURS9mZWF0dXJlLnltbCc6IFtcbiAgICAgICAgJ25hbWU6IPCfkqEgRmVhdHVyZScsXG4gICAgICAgICdkZXNjcmlwdGlvbjogUmVxdWVzdCBmb3IgYSBuZXcgZmVhdHVyZScsXG4gICAgICAgICd0aXRsZTogXCJbRkVBVFVSRV1cIicsXG4gICAgICAgICdsYWJlbHM6IFtcInR5cGU6IGZlYXR1cmVcIl0nLFxuICAgICAgICAnYm9keTonLFxuICAgICAgICAnICAtIHR5cGU6IHRleHRhcmVhJyxcbiAgICAgICAgJyAgICBhdHRyaWJ1dGVzOicsXG4gICAgICAgICcgICAgICBsYWJlbDogRGVzY3JpcHRpb24nLFxuICAgICAgICAnICAgICAgZGVzY3JpcHRpb246IEEgZGVzY3JpcHRpb24gb2YgdGhlIGZlYXR1cmUuJyxcbiAgICAgICAgJyAgICB2YWxpZGF0aW9uczonLFxuICAgICAgICAnICAgICAgcmVxdWlyZWQ6IHRydWUnLFxuICAgICAgICAnJyxcbiAgICAgICAgJyAgLSB0eXBlOiB0ZXh0YXJlYScsXG4gICAgICAgICcgICAgYXR0cmlidXRlczonLFxuICAgICAgICAnICAgICAgbGFiZWw6IFRhc2sgTGlzdCcsXG4gICAgICAgICcgICAgICBkZXNjcmlwdGlvbjogRGVzY3JpYmUgdGhlIHN0ZXBzIHRvIGZ1bGZpbGwgdGhlIGZlYXR1cmUuJyxcbiAgICAgICAgJyAgICAgIHZhbHVlOiB8JyxcbiAgICAgICAgJyAgICAgICAgLSBbIF0gTXkgRmlyc3QgVGFzaycsXG4gICAgICAgICcgICAgdmFsaWRhdGlvbnM6JyxcbiAgICAgICAgJyAgICAgIHJlcXVpcmVkOiB0cnVlJyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBob3VzZWtlZXBpbmcgaXNzdWUgdGVtcGxhdGUgZmlsZS5cbiAgICpcbiAgICogQHJldHVybnMgQSByZWNvcmQgd2hlcmUgdGhlIGtleSBpcyB0aGUgZmlsZSBwYXRoIGFuZCB0aGUgdmFsdWUgaXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgKiAgICAgICAgICByZXByZXNlbnRpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIGlzc3VlIHRlbXBsYXRlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBjb25maWdGaWxlSG91c2VrZWVwaW5nSXNzdWUoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5naXRodWIvSVNTVUVfVEVNUExBVEUvaG91c2VrZWVwaW5nLnltbCc6IFtcbiAgICAgICAgJ25hbWU6IPCfkqEgSG91c2VrZWVwaW5nJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uOiBNYWludGVuYW5jZSBvciByZWZhY3RvcmluZyB0YXNrJyxcbiAgICAgICAgJ3RpdGxlOiBcIltIT1VTRUtFRVBJTkddXCInLFxuICAgICAgICAnbGFiZWxzOiBbXCJ0eXBlOiBob3VzZWtlZXBpbmdcIl0nLFxuICAgICAgICAnYm9keTonLFxuICAgICAgICAnICAtIHR5cGU6IHRleHRhcmVhJyxcbiAgICAgICAgJyAgICBhdHRyaWJ1dGVzOicsXG4gICAgICAgICcgICAgICBsYWJlbDogRGVzY3JpcHRpb24nLFxuICAgICAgICAnICAgICAgZGVzY3JpcHRpb246IEEgZGVzY3JpcHRpb24gb2YgdGhlIGhvdXNla2VlcGluZyB0YXNrLicsXG4gICAgICAgICcgICAgdmFsaWRhdGlvbnM6JyxcbiAgICAgICAgJyAgICAgIHJlcXVpcmVkOiB0cnVlJyxcbiAgICAgICAgJycsXG4gICAgICAgICcgIC0gdHlwZTogdGV4dGFyZWEnLFxuICAgICAgICAnICAgIGF0dHJpYnV0ZXM6JyxcbiAgICAgICAgJyAgICAgIGxhYmVsOiBUYXNrIExpc3QnLFxuICAgICAgICAnICAgICAgZGVzY3JpcHRpb246IERlc2NyaWJlIHRoZSBzdGVwcyB0byBmdWxmaWxsIHRoZSBob3VzZWtlZXBpbmcgdGFzay4nLFxuICAgICAgICAnICAgICAgdmFsdWU6IHwnLFxuICAgICAgICAnICAgICAgICAtIFsgXSBNeSBGaXJzdCBUYXNrJyxcbiAgICAgICAgJyAgICB2YWxpZGF0aW9uczonLFxuICAgICAgICAnICAgICAgcmVxdWlyZWQ6IHRydWUnLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIHF1ZXN0aW9uIGlzc3VlIHRlbXBsYXRlIGZpbGUuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgcmVjb3JkIHdoZXJlIHRoZSBrZXkgaXMgdGhlIGZpbGUgcGF0aCBhbmQgdGhlIHZhbHVlIGlzIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAgICogICAgICAgICAgcmVwcmVzZW50aW5nIHRoZSBjb250ZW50IG9mIHRoZSBpc3N1ZSB0ZW1wbGF0ZS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZVF1ZXN0aW9uSXNzdWUoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5naXRodWIvSVNTVUVfVEVNUExBVEUvcXVlc3Rpb24ueW1sJzogW1xuICAgICAgICAnbmFtZTog4p2TIFF1ZXN0aW9uJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uOiBBc2sgYSBxdWVzdGlvbicsXG4gICAgICAgICd0aXRsZTogXCJbUVVFU1RJT05dXCInLFxuICAgICAgICAnbGFiZWxzOiBbXCJ0eXBlOiBxdWVzdGlvblwiXScsXG4gICAgICAgICdib2R5OicsXG4gICAgICAgICcgIC0gdHlwZTogdGV4dGFyZWEnLFxuICAgICAgICAnICAgIGF0dHJpYnV0ZXM6JyxcbiAgICAgICAgJyAgICAgIGxhYmVsOiBRdWVzdGlvbicsXG4gICAgICAgICcgICAgICBkZXNjcmlwdGlvbjogV2hhdCB3b3VsZCB5b3UgbGlrZSB0byBrbm93PyBJZiB5b3UgZW5jb3VudGVyIHVudXN1YWwgYmVoYXZpb3Igb3IgaWRlbnRpZmllZCBhIG1pc3NpbmcgZmVhdHVyZSwgY29uc2lkZXIgb3BlbmluZyBhIGJ1ZyByZXBvcnQgaW5zdGVhZC4nLFxuICAgICAgICAnICAgIHZhbGlkYXRpb25zOicsXG4gICAgICAgICcgICAgICByZXF1aXJlZDogdHJ1ZScsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGNvbmZpZ0ZpbGVTdG9yeUlzc3VlKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuZ2l0aHViL0lTU1VFX1RFTVBMQVRFL3N0b3J5LnltbCc6IFtcbiAgICAgICAgJ25hbWU6IPCfkqEgU3RvcnknLFxuICAgICAgICAnZGVzY3JpcHRpb246IEFzIGEgW3JvbGVdLCBJIFt3YW50IHRvXSwgW3NvIHRoYXRdJyxcbiAgICAgICAgJ3RpdGxlOiBcIltTVE9SWV1cIicsXG4gICAgICAgICdsYWJlbHM6IFtcInR5cGU6IHN0b3J5XCJdJyxcbiAgICAgICAgJ2JvZHk6JyxcbiAgICAgICAgJyAgLSB0eXBlOiB0ZXh0YXJlYScsXG4gICAgICAgICcgICAgYXR0cmlidXRlczonLFxuICAgICAgICAnICAgICAgbGFiZWw6IERlc2NyaXB0aW9uJyxcbiAgICAgICAgXCIgICAgICBkZXNjcmlwdGlvbjogUHJvdmlkZSBhIGJyaWVmIG92ZXJ2aWV3IG9mIHRoZSBzdG9yeSwgZm9jdXNpbmcgd2hvIHdhbnQncyB0byBkbyB3aGF0IGFuZCB3aHkuXCIsXG4gICAgICAgICcgICAgdmFsaWRhdGlvbnM6JyxcbiAgICAgICAgJyAgICAgIHJlcXVpcmVkOiB0cnVlJyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgdGVtcGxhdGUgZmlsZSBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIGNvbmZpZyAtIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdCBjb250YWluaW5nIHRoZSBmaWxlIHBhdGggYW5kIGNvbnRlbnQuXG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZVRlbXBsYXRlRmlsZShjb25maWc6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPik6IHZvaWQge1xuICAgIGNvbnN0IGZpbGVQYXRoOiBzdHJpbmcgPSBPYmplY3Qua2V5cyhjb25maWcpWzBdO1xuICAgIG5ldyBUZXh0RmlsZSh0aGlzLnByb2plY3QsIGZpbGVQYXRoLCB7XG4gICAgICBsaW5lczogY29uZmlnW2ZpbGVQYXRoXSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgbGlzdCBvZiBhbGwgcmVsZXZhbnQgY29uZmlnIGZpbGVzLlxuICAgKiBAcmV0dXJucyBMaXN0IG9mIGNvbmZpZ3NcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlncygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT5bXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHRoaXMuY29uZmlnRmlsZUJ1Z0lzc3VlLFxuICAgICAgdGhpcy5jb25maWdGaWxlRmVhdHVyZUlzc3VlLFxuICAgICAgdGhpcy5jb25maWdGaWxlSG91c2VrZWVwaW5nSXNzdWUsXG4gICAgICB0aGlzLmNvbmZpZ0ZpbGVRdWVzdGlvbklzc3VlLFxuICAgICAgdGhpcy5jb25maWdGaWxlU3RvcnlJc3N1ZSxcbiAgICBdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgZmlsZSBwYXRocyBmb3IgYWxsIGR5bmFtaWMgY29uZmlndXJhdGlvbiBmaWxlcy5cbiAgICpcbiAgICogQHJldHVybnMgQSBsaXN0IG9mIGZpbGUgcGF0aCBwYXR0ZXJucywgaW5jbHVkaW5nIGR5bmFtaWMgY29uZmlndXJhdGlvbnMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGZpbGVQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZHluYW1pY0ZpbGVQYXRoczogc3RyaW5nW10gPSB0aGlzLmNvbmZpZ3NcbiAgICAgIC5tYXAoKGNvbmZpZzogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+KTogc3RyaW5nID0+IGAvJHtPYmplY3Qua2V5cyhjb25maWcpWzBdfWApXG4gICAgICAuZmlsdGVyKChmaWxlUGF0aDogc3RyaW5nKTogc3RyaW5nID0+IGZpbGVQYXRoKTtcblxuICAgIHJldHVybiBbLi4uZHluYW1pY0ZpbGVQYXRoc107XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgcGF0dGVybnM6IHN0cmluZ1tdID0gWy4uLnRoaXMuZmlsZVBhdHRlcm5zXTtcblxuICAgIHJldHVybiBwYXR0ZXJucztcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSByZWdpc3RlckNvbmZpZygpOiB2b2lkIHtcbiAgICBpZiAodXRpbC5pc1ZhbGlkUHJvamVjdCh0aGlzLnByb2plY3QpKSB7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykucHJldHRpZXJDb25maWc/LmFkZElnbm9yZVBhdHRlcm5zKHRoaXMuYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgYXBwbHlDb25maWcoKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVUZW1wbGF0ZUZpbGUodGhpcy5jb25maWdGaWxlQnVnSXNzdWUpO1xuICAgIHRoaXMuY3JlYXRlVGVtcGxhdGVGaWxlKHRoaXMuY29uZmlnRmlsZUZlYXR1cmVJc3N1ZSk7XG4gICAgdGhpcy5jcmVhdGVUZW1wbGF0ZUZpbGUodGhpcy5jb25maWdGaWxlSG91c2VrZWVwaW5nSXNzdWUpO1xuICAgIHRoaXMuY3JlYXRlVGVtcGxhdGVGaWxlKHRoaXMuY29uZmlnRmlsZVF1ZXN0aW9uSXNzdWUpO1xuICAgIHRoaXMuY3JlYXRlVGVtcGxhdGVGaWxlKHRoaXMuY29uZmlnRmlsZVN0b3J5SXNzdWUpO1xuICB9XG59XG4iXX0=
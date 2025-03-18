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
                'title: "[BUG] <title>"',
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
                'title: "[HOUSEKEEPING] <title>"',
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
                'title: "[QUESTION] <title>"',
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
                'title: "[STORY] <title>"',
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
IssuesConfigBase[_a] = { fqn: "@dxfrontier/projen-template-projects.IssuesConfigBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNzdWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Jhc2UvY29uZmlnL2lzc3Vlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFrQztBQUNsQyxzQ0FBbUM7QUFFbkMsNENBQXdDO0FBRXhDOzs7O0dBSUc7QUFDSCxNQUFhLGdCQUFpQixTQUFRLGVBQU07SUFDMUMsWUFBWSxPQUFxQjtRQUMvQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsSUFBYyxrQkFBa0I7UUFDOUIsT0FBTztZQUNMLGdDQUFnQyxFQUFFO2dCQUNoQyxjQUFjO2dCQUNkLCtCQUErQjtnQkFDL0Isd0JBQXdCO2dCQUN4Qix1QkFBdUI7Z0JBQ3ZCLE9BQU87Z0JBQ1Asb0JBQW9CO2dCQUNwQixpQkFBaUI7Z0JBQ2pCLCtCQUErQjtnQkFDL0IsK0RBQStEO2dCQUMvRCxrQkFBa0I7Z0JBQ2xCLHNCQUFzQjtnQkFDdEIsRUFBRTtnQkFDRixvQkFBb0I7Z0JBQ3BCLGlCQUFpQjtnQkFDakIsZ0NBQWdDO2dCQUNoQyxrRUFBa0U7Z0JBQ2xFLGtCQUFrQjtnQkFDbEIsc0JBQXNCO2FBQ3ZCO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILElBQWMsc0JBQXNCO1FBQ2xDLE9BQU87WUFDTCxvQ0FBb0MsRUFBRTtnQkFDcEMsa0JBQWtCO2dCQUNsQix3Q0FBd0M7Z0JBQ3hDLDRCQUE0QjtnQkFDNUIsMkJBQTJCO2dCQUMzQixPQUFPO2dCQUNQLG9CQUFvQjtnQkFDcEIsaUJBQWlCO2dCQUNqQiwwQkFBMEI7Z0JBQzFCLGtEQUFrRDtnQkFDbEQsa0JBQWtCO2dCQUNsQixzQkFBc0I7Z0JBQ3RCLEVBQUU7Z0JBQ0Ysb0JBQW9CO2dCQUNwQixpQkFBaUI7Z0JBQ2pCLHdCQUF3QjtnQkFDeEIsK0RBQStEO2dCQUMvRCxnQkFBZ0I7Z0JBQ2hCLDZCQUE2QjtnQkFD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QUNILENBQUM7SUFFZSxXQUFXO1FBQ3pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7QUF6TUgsNENBME1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dEZpbGUgfSBmcm9tICdwcm9qZW4nO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IFByb2plY3RUeXBlcyB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMvcHJvamVjdCc7XG5pbXBvcnQgeyB1dGlsIH0gZnJvbSAnLi4vLi4vdXRpbC91dGlscyc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBHaXRIdWIgY29uZmlndXJhdGlvbi5cbiAqXG4gKiBUaGlzIGNsYXNzIGFjdHMgYXMgYSBiYXNlIGZvciBoYW5kbGluZyBHaXRIdWIgY29uZmlndXJhdGlvbiB3aXRoaW4gcHJvamVjdHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBJc3N1ZXNDb25maWdCYXNlIGV4dGVuZHMgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IocHJvamVjdDogUHJvamVjdFR5cGVzKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUgYnVnIGlzc3VlIHRlbXBsYXRlIGZpbGUuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgcmVjb3JkIHdoZXJlIHRoZSBrZXkgaXMgdGhlIGZpbGUgcGF0aCBhbmQgdGhlIHZhbHVlIGlzIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAgICogICAgICAgICAgcmVwcmVzZW50aW5nIHRoZSBjb250ZW50IG9mIHRoZSBpc3N1ZSB0ZW1wbGF0ZS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZUJ1Z0lzc3VlKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuZ2l0aHViL0lTU1VFX1RFTVBMQVRFL2J1Zy55bWwnOiBbXG4gICAgICAgICduYW1lOiDwn5CeIEJ1ZycsXG4gICAgICAgICdkZXNjcmlwdGlvbjogRmlsZSBhIGJ1Zy9pc3N1ZScsXG4gICAgICAgICd0aXRsZTogXCJbQlVHXSA8dGl0bGU+XCInLFxuICAgICAgICAnbGFiZWxzOiBbXCJ0eXBlOiBidWdcIl0nLFxuICAgICAgICAnYm9keTonLFxuICAgICAgICAnICAtIHR5cGU6IHRleHRhcmVhJyxcbiAgICAgICAgJyAgICBhdHRyaWJ1dGVzOicsXG4gICAgICAgICcgICAgICBsYWJlbDogQ3VycmVudCBiZWhhdmlvcicsXG4gICAgICAgIFwiICAgICAgZGVzY3JpcHRpb246IEEgZGVzY3JpcHRpb24gb2Ygd2hhdCB5b3UncmUgZXhwZXJpZW5jaW5nLlwiLFxuICAgICAgICAnICAgIHZhbGlkYXRpb25zOicsXG4gICAgICAgICcgICAgICByZXF1aXJlZDogdHJ1ZScsXG4gICAgICAgICcnLFxuICAgICAgICAnICAtIHR5cGU6IHRleHRhcmVhJyxcbiAgICAgICAgJyAgICBhdHRyaWJ1dGVzOicsXG4gICAgICAgICcgICAgICBsYWJlbDogRXhwZWN0ZWQgYmVoYXZpb3InLFxuICAgICAgICAnICAgICAgZGVzY3JpcHRpb246IEEgZGVzY3JpcHRpb24gb2Ygd2hhdCB5b3UgZXhwZWN0ZWQgdG8gaGFwcGVuLicsXG4gICAgICAgICcgICAgdmFsaWRhdGlvbnM6JyxcbiAgICAgICAgJyAgICAgIHJlcXVpcmVkOiB0cnVlJyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBmZWF0dXJlIHJlcXVlc3QgdGVtcGxhdGUgZmlsZS5cbiAgICpcbiAgICogQHJldHVybnMgQSByZWNvcmQgd2hlcmUgdGhlIGtleSBpcyB0aGUgZmlsZSBwYXRoIGFuZCB0aGUgdmFsdWUgaXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgKiAgICAgICAgICByZXByZXNlbnRpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIGlzc3VlIHRlbXBsYXRlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBjb25maWdGaWxlRmVhdHVyZUlzc3VlKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuZ2l0aHViL0lTU1VFX1RFTVBMQVRFL2ZlYXR1cmUueW1sJzogW1xuICAgICAgICAnbmFtZTog8J+SoSBGZWF0dXJlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uOiBSZXF1ZXN0IGZvciBhIG5ldyBmZWF0dXJlJyxcbiAgICAgICAgJ3RpdGxlOiBcIltGRUFUVVJFXSA8dGl0bGU+XCInLFxuICAgICAgICAnbGFiZWxzOiBbXCJ0eXBlOiBmZWF0dXJlXCJdJyxcbiAgICAgICAgJ2JvZHk6JyxcbiAgICAgICAgJyAgLSB0eXBlOiB0ZXh0YXJlYScsXG4gICAgICAgICcgICAgYXR0cmlidXRlczonLFxuICAgICAgICAnICAgICAgbGFiZWw6IERlc2NyaXB0aW9uJyxcbiAgICAgICAgJyAgICAgIGRlc2NyaXB0aW9uOiBBIGRlc2NyaXB0aW9uIG9mIHRoZSBmZWF0dXJlLicsXG4gICAgICAgICcgICAgdmFsaWRhdGlvbnM6JyxcbiAgICAgICAgJyAgICAgIHJlcXVpcmVkOiB0cnVlJyxcbiAgICAgICAgJycsXG4gICAgICAgICcgIC0gdHlwZTogdGV4dGFyZWEnLFxuICAgICAgICAnICAgIGF0dHJpYnV0ZXM6JyxcbiAgICAgICAgJyAgICAgIGxhYmVsOiBUYXNrIExpc3QnLFxuICAgICAgICAnICAgICAgZGVzY3JpcHRpb246IERlc2NyaWJlIHRoZSBzdGVwcyB0byBmdWxmaWxsIHRoZSBmZWF0dXJlLicsXG4gICAgICAgICcgICAgICB2YWx1ZTogfCcsXG4gICAgICAgICcgICAgICAgIC0gWyBdIE15IEZpcnN0IFRhc2snLFxuICAgICAgICAnICAgIHZhbGlkYXRpb25zOicsXG4gICAgICAgICcgICAgICByZXF1aXJlZDogdHJ1ZScsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUgaG91c2VrZWVwaW5nIGlzc3VlIHRlbXBsYXRlIGZpbGUuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgcmVjb3JkIHdoZXJlIHRoZSBrZXkgaXMgdGhlIGZpbGUgcGF0aCBhbmQgdGhlIHZhbHVlIGlzIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAgICogICAgICAgICAgcmVwcmVzZW50aW5nIHRoZSBjb250ZW50IG9mIHRoZSBpc3N1ZSB0ZW1wbGF0ZS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZUhvdXNla2VlcGluZ0lzc3VlKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuZ2l0aHViL0lTU1VFX1RFTVBMQVRFL2hvdXNla2VlcGluZy55bWwnOiBbXG4gICAgICAgICduYW1lOiDwn5KhIEhvdXNla2VlcGluZycsXG4gICAgICAgICdkZXNjcmlwdGlvbjogTWFpbnRlbmFuY2Ugb3IgcmVmYWN0b3JpbmcgdGFzaycsXG4gICAgICAgICd0aXRsZTogXCJbSE9VU0VLRUVQSU5HXSA8dGl0bGU+XCInLFxuICAgICAgICAnbGFiZWxzOiBbXCJ0eXBlOiBob3VzZWtlZXBpbmdcIl0nLFxuICAgICAgICAnYm9keTonLFxuICAgICAgICAnICAtIHR5cGU6IHRleHRhcmVhJyxcbiAgICAgICAgJyAgICBhdHRyaWJ1dGVzOicsXG4gICAgICAgICcgICAgICBsYWJlbDogRGVzY3JpcHRpb24nLFxuICAgICAgICAnICAgICAgZGVzY3JpcHRpb246IEEgZGVzY3JpcHRpb24gb2YgdGhlIGhvdXNla2VlcGluZyB0YXNrLicsXG4gICAgICAgICcgICAgdmFsaWRhdGlvbnM6JyxcbiAgICAgICAgJyAgICAgIHJlcXVpcmVkOiB0cnVlJyxcbiAgICAgICAgJycsXG4gICAgICAgICcgIC0gdHlwZTogdGV4dGFyZWEnLFxuICAgICAgICAnICAgIGF0dHJpYnV0ZXM6JyxcbiAgICAgICAgJyAgICAgIGxhYmVsOiBUYXNrIExpc3QnLFxuICAgICAgICAnICAgICAgZGVzY3JpcHRpb246IERlc2NyaWJlIHRoZSBzdGVwcyB0byBmdWxmaWxsIHRoZSBob3VzZWtlZXBpbmcgdGFzay4nLFxuICAgICAgICAnICAgICAgdmFsdWU6IHwnLFxuICAgICAgICAnICAgICAgICAtIFsgXSBNeSBGaXJzdCBUYXNrJyxcbiAgICAgICAgJyAgICB2YWxpZGF0aW9uczonLFxuICAgICAgICAnICAgICAgcmVxdWlyZWQ6IHRydWUnLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIHF1ZXN0aW9uIGlzc3VlIHRlbXBsYXRlIGZpbGUuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgcmVjb3JkIHdoZXJlIHRoZSBrZXkgaXMgdGhlIGZpbGUgcGF0aCBhbmQgdGhlIHZhbHVlIGlzIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAgICogICAgICAgICAgcmVwcmVzZW50aW5nIHRoZSBjb250ZW50IG9mIHRoZSBpc3N1ZSB0ZW1wbGF0ZS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZVF1ZXN0aW9uSXNzdWUoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5naXRodWIvSVNTVUVfVEVNUExBVEUvcXVlc3Rpb24ueW1sJzogW1xuICAgICAgICAnbmFtZTog4p2TIFF1ZXN0aW9uJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uOiBBc2sgYSBxdWVzdGlvbicsXG4gICAgICAgICd0aXRsZTogXCJbUVVFU1RJT05dIDx0aXRsZT5cIicsXG4gICAgICAgICdsYWJlbHM6IFtcInR5cGU6IHF1ZXN0aW9uXCJdJyxcbiAgICAgICAgJ2JvZHk6JyxcbiAgICAgICAgJyAgLSB0eXBlOiB0ZXh0YXJlYScsXG4gICAgICAgICcgICAgYXR0cmlidXRlczonLFxuICAgICAgICAnICAgICAgbGFiZWw6IFF1ZXN0aW9uJyxcbiAgICAgICAgJyAgICAgIGRlc2NyaXB0aW9uOiBXaGF0IHdvdWxkIHlvdSBsaWtlIHRvIGtub3c/IElmIHlvdSBlbmNvdW50ZXIgdW51c3VhbCBiZWhhdmlvciBvciBpZGVudGlmaWVkIGEgbWlzc2luZyBmZWF0dXJlLCBjb25zaWRlciBvcGVuaW5nIGEgYnVnIHJlcG9ydCBpbnN0ZWFkLicsXG4gICAgICAgICcgICAgdmFsaWRhdGlvbnM6JyxcbiAgICAgICAgJyAgICAgIHJlcXVpcmVkOiB0cnVlJyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnRmlsZVN0b3J5SXNzdWUoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5naXRodWIvSVNTVUVfVEVNUExBVEUvc3RvcnkueW1sJzogW1xuICAgICAgICAnbmFtZTog8J+SoSBTdG9yeScsXG4gICAgICAgICdkZXNjcmlwdGlvbjogQXMgYSBbcm9sZV0sIEkgW3dhbnQgdG9dLCBbc28gdGhhdF0nLFxuICAgICAgICAndGl0bGU6IFwiW1NUT1JZXSA8dGl0bGU+XCInLFxuICAgICAgICAnbGFiZWxzOiBbXCJ0eXBlOiBzdG9yeVwiXScsXG4gICAgICAgICdib2R5OicsXG4gICAgICAgICcgIC0gdHlwZTogdGV4dGFyZWEnLFxuICAgICAgICAnICAgIGF0dHJpYnV0ZXM6JyxcbiAgICAgICAgJyAgICAgIGxhYmVsOiBEZXNjcmlwdGlvbicsXG4gICAgICAgIFwiICAgICAgZGVzY3JpcHRpb246IFByb3ZpZGUgYSBicmllZiBvdmVydmlldyBvZiB0aGUgc3RvcnksIGZvY3VzaW5nIHdobyB3YW50J3MgdG8gZG8gd2hhdCBhbmQgd2h5LlwiLFxuICAgICAgICAnICAgIHZhbGlkYXRpb25zOicsXG4gICAgICAgICcgICAgICByZXF1aXJlZDogdHJ1ZScsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHRlbXBsYXRlIGZpbGUgYmFzZWQgb24gdGhlIHByb3ZpZGVkIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWcgLSBUaGUgY29uZmlndXJhdGlvbiBvYmplY3QgY29udGFpbmluZyB0aGUgZmlsZSBwYXRoIGFuZCBjb250ZW50LlxuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGVUZW1wbGF0ZUZpbGUoY29uZmlnOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4pOiB2b2lkIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXMoY29uZmlnKVswXTtcbiAgICBuZXcgVGV4dEZpbGUodGhpcy5wcm9qZWN0LCBmaWxlUGF0aCwge1xuICAgICAgbGluZXM6IGNvbmZpZ1tmaWxlUGF0aF0sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIGxpc3Qgb2YgYWxsIHJlbGV2YW50IGNvbmZpZyBmaWxlcy5cbiAgICogQHJldHVybnMgTGlzdCBvZiBjb25maWdzXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGNvbmZpZ3MoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+W10ge1xuICAgIHJldHVybiBbXG4gICAgICB0aGlzLmNvbmZpZ0ZpbGVCdWdJc3N1ZSxcbiAgICAgIHRoaXMuY29uZmlnRmlsZUZlYXR1cmVJc3N1ZSxcbiAgICAgIHRoaXMuY29uZmlnRmlsZUhvdXNla2VlcGluZ0lzc3VlLFxuICAgICAgdGhpcy5jb25maWdGaWxlUXVlc3Rpb25Jc3N1ZSxcbiAgICAgIHRoaXMuY29uZmlnRmlsZVN0b3J5SXNzdWUsXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGZpbGUgcGF0aHMgZm9yIGFsbCBkeW5hbWljIGNvbmZpZ3VyYXRpb24gZmlsZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgbGlzdCBvZiBmaWxlIHBhdGggcGF0dGVybnMsIGluY2x1ZGluZyBkeW5hbWljIGNvbmZpZ3VyYXRpb25zLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBmaWxlUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGR5bmFtaWNGaWxlUGF0aHM6IHN0cmluZ1tdID0gdGhpcy5jb25maWdzXG4gICAgICAubWFwKChjb25maWc6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPik6IHN0cmluZyA9PiBgLyR7T2JqZWN0LmtleXMoY29uZmlnKVswXX1gKVxuICAgICAgLmZpbHRlcigoZmlsZVBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiBmaWxlUGF0aCk7XG5cbiAgICByZXR1cm4gWy4uLmR5bmFtaWNGaWxlUGF0aHNdO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsSWdub3JlUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHBhdHRlcm5zOiBzdHJpbmdbXSA9IFsuLi50aGlzLmZpbGVQYXR0ZXJuc107XG5cbiAgICByZXR1cm4gcGF0dGVybnM7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcmVnaXN0ZXJDb25maWcoKTogdm9pZCB7XG4gICAgaWYgKHV0aWwuaXNWYWxpZFByb2plY3QodGhpcy5wcm9qZWN0KSkge1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLnByZXR0aWVyQ29uZmlnPy5hZGRJZ25vcmVQYXR0ZXJucyh0aGlzLmFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIGFwcGx5Q29uZmlnKCk6IHZvaWQge1xuICAgIHRoaXMuY3JlYXRlVGVtcGxhdGVGaWxlKHRoaXMuY29uZmlnRmlsZUJ1Z0lzc3VlKTtcbiAgICB0aGlzLmNyZWF0ZVRlbXBsYXRlRmlsZSh0aGlzLmNvbmZpZ0ZpbGVGZWF0dXJlSXNzdWUpO1xuICAgIHRoaXMuY3JlYXRlVGVtcGxhdGVGaWxlKHRoaXMuY29uZmlnRmlsZUhvdXNla2VlcGluZ0lzc3VlKTtcbiAgICB0aGlzLmNyZWF0ZVRlbXBsYXRlRmlsZSh0aGlzLmNvbmZpZ0ZpbGVRdWVzdGlvbklzc3VlKTtcbiAgICB0aGlzLmNyZWF0ZVRlbXBsYXRlRmlsZSh0aGlzLmNvbmZpZ0ZpbGVTdG9yeUlzc3VlKTtcbiAgfVxufVxuIl19
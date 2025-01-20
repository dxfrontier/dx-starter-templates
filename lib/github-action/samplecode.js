"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleCodeConfigGitHubAction = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const samplecode_1 = require("../base/samplecode");
/**
 * Implementing all relevant SampleCode configuration for the GitHubAction project.
 */
class SampleCodeConfigGitHubAction extends samplecode_1.SampleCodeConfigBase {
    get sampleCodeFile() {
        return {
            'action.yml': [
                "name: 'My Custom Composite Action'",
                "description: 'A sample GitHub composite action created with Projen.'",
                "author: 'Your Name or Org'",
                'branding:',
                "  icon: 'zap'",
                "  color: 'blue'",
                '',
                'inputs:',
                '  example-input:',
                "    description: 'An example input parameter for the action.'",
                '    required: false',
                "    default: 'default value'",
                '',
                'outputs:',
                '  example-output:',
                "    description: 'An example output from the action.'",
                '',
                'runs:',
                "  using: 'composite'",
                '  steps:',
                "    - name: 'Step 1'",
                "      run: echo 'Running Step 1 with input: ${{ inputs.example-input }}'",
                '',
                "    - name: 'Step 2'",
                "      run: echo 'Running Step 2'",
                '',
                'env:',
                "  EXAMPLE_ENV_VAR: 'example-value'",
            ],
        };
    }
}
exports.SampleCodeConfigGitHubAction = SampleCodeConfigGitHubAction;
_a = JSII_RTTI_SYMBOL_1;
SampleCodeConfigGitHubAction[_a] = { fqn: "@dxfrontier/projen-template-projects.SampleCodeConfigGitHubAction", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlY29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9naXRodWItYWN0aW9uL3NhbXBsZWNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtREFBMEQ7QUFFMUQ7O0dBRUc7QUFDSCxNQUFhLDRCQUE2QixTQUFRLGlDQUFvQjtJQUNwRSxJQUF1QixjQUFjO1FBQ25DLE9BQU87WUFDTCxZQUFZLEVBQUU7Z0JBQ1osb0NBQW9DO2dCQUNwQyxzRUFBc0U7Z0JBQ3RFLDRCQUE0QjtnQkFDNUIsV0FBVztnQkFDWCxlQUFlO2dCQUNmLGlCQUFpQjtnQkFDakIsRUFBRTtnQkFDRixTQUFTO2dCQUNULGtCQUFrQjtnQkFDbEIsK0RBQStEO2dCQUMvRCxxQkFBcUI7Z0JBQ3JCLDhCQUE4QjtnQkFDOUIsRUFBRTtnQkFDRixVQUFVO2dCQUNWLG1CQUFtQjtnQkFDbkIsdURBQXVEO2dCQUN2RCxFQUFFO2dCQUNGLE9BQU87Z0JBQ1Asc0JBQXNCO2dCQUN0QixVQUFVO2dCQUNWLHNCQUFzQjtnQkFDdEIsMEVBQTBFO2dCQUMxRSxFQUFFO2dCQUNGLHNCQUFzQjtnQkFDdEIsa0NBQWtDO2dCQUNsQyxFQUFFO2dCQUNGLE1BQU07Z0JBQ04sb0NBQW9DO2FBQ3JDO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0FBbENILG9FQW1DQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNhbXBsZUNvZGVDb25maWdCYXNlIH0gZnJvbSAnLi4vYmFzZS9zYW1wbGVjb2RlJztcblxuLyoqXG4gKiBJbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IFNhbXBsZUNvZGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIEdpdEh1YkFjdGlvbiBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgU2FtcGxlQ29kZUNvbmZpZ0dpdEh1YkFjdGlvbiBleHRlbmRzIFNhbXBsZUNvZGVDb25maWdCYXNlIHtcbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBzYW1wbGVDb2RlRmlsZSgpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnYWN0aW9uLnltbCc6IFtcbiAgICAgICAgXCJuYW1lOiAnTXkgQ3VzdG9tIENvbXBvc2l0ZSBBY3Rpb24nXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb246ICdBIHNhbXBsZSBHaXRIdWIgY29tcG9zaXRlIGFjdGlvbiBjcmVhdGVkIHdpdGggUHJvamVuLidcIixcbiAgICAgICAgXCJhdXRob3I6ICdZb3VyIE5hbWUgb3IgT3JnJ1wiLFxuICAgICAgICAnYnJhbmRpbmc6JyxcbiAgICAgICAgXCIgIGljb246ICd6YXAnXCIsXG4gICAgICAgIFwiICBjb2xvcjogJ2JsdWUnXCIsXG4gICAgICAgICcnLFxuICAgICAgICAnaW5wdXRzOicsXG4gICAgICAgICcgIGV4YW1wbGUtaW5wdXQ6JyxcbiAgICAgICAgXCIgICAgZGVzY3JpcHRpb246ICdBbiBleGFtcGxlIGlucHV0IHBhcmFtZXRlciBmb3IgdGhlIGFjdGlvbi4nXCIsXG4gICAgICAgICcgICAgcmVxdWlyZWQ6IGZhbHNlJyxcbiAgICAgICAgXCIgICAgZGVmYXVsdDogJ2RlZmF1bHQgdmFsdWUnXCIsXG4gICAgICAgICcnLFxuICAgICAgICAnb3V0cHV0czonLFxuICAgICAgICAnICBleGFtcGxlLW91dHB1dDonLFxuICAgICAgICBcIiAgICBkZXNjcmlwdGlvbjogJ0FuIGV4YW1wbGUgb3V0cHV0IGZyb20gdGhlIGFjdGlvbi4nXCIsXG4gICAgICAgICcnLFxuICAgICAgICAncnVuczonLFxuICAgICAgICBcIiAgdXNpbmc6ICdjb21wb3NpdGUnXCIsXG4gICAgICAgICcgIHN0ZXBzOicsXG4gICAgICAgIFwiICAgIC0gbmFtZTogJ1N0ZXAgMSdcIixcbiAgICAgICAgXCIgICAgICBydW46IGVjaG8gJ1J1bm5pbmcgU3RlcCAxIHdpdGggaW5wdXQ6ICR7eyBpbnB1dHMuZXhhbXBsZS1pbnB1dCB9fSdcIixcbiAgICAgICAgJycsXG4gICAgICAgIFwiICAgIC0gbmFtZTogJ1N0ZXAgMidcIixcbiAgICAgICAgXCIgICAgICBydW46IGVjaG8gJ1J1bm5pbmcgU3RlcCAyJ1wiLFxuICAgICAgICAnJyxcbiAgICAgICAgJ2VudjonLFxuICAgICAgICBcIiAgRVhBTVBMRV9FTlZfVkFSOiAnZXhhbXBsZS12YWx1ZSdcIixcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19
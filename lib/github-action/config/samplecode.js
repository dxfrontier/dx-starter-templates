"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleCodeConfigGitHubAction = void 0;
const samplecode_1 = require("../../base/config/samplecode");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlY29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9naXRodWItYWN0aW9uL2NvbmZpZy9zYW1wbGVjb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZEQUFvRTtBQUVwRTs7R0FFRztBQUNILE1BQWEsNEJBQTZCLFNBQVEsaUNBQW9CO0lBQ3BFLElBQXVCLGNBQWM7UUFDbkMsT0FBTztZQUNMLFlBQVksRUFBRTtnQkFDWixvQ0FBb0M7Z0JBQ3BDLHNFQUFzRTtnQkFDdEUsNEJBQTRCO2dCQUM1QixXQUFXO2dCQUNYLGVBQWU7Z0JBQ2YsaUJBQWlCO2dCQUNqQixFQUFFO2dCQUNGLFNBQVM7Z0JBQ1Qsa0JBQWtCO2dCQUNsQiwrREFBK0Q7Z0JBQy9ELHFCQUFxQjtnQkFDckIsOEJBQThCO2dCQUM5QixFQUFFO2dCQUNGLFVBQVU7Z0JBQ1YsbUJBQW1CO2dCQUNuQix1REFBdUQ7Z0JBQ3ZELEVBQUU7Z0JBQ0YsT0FBTztnQkFDUCxzQkFBc0I7Z0JBQ3RCLFVBQVU7Z0JBQ1Ysc0JBQXNCO2dCQUN0QiwwRUFBMEU7Z0JBQzFFLEVBQUU7Z0JBQ0Ysc0JBQXNCO2dCQUN0QixrQ0FBa0M7Z0JBQ2xDLEVBQUU7Z0JBQ0YsTUFBTTtnQkFDTixvQ0FBb0M7YUFDckM7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBbkNELG9FQW1DQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNhbXBsZUNvZGVDb25maWdCYXNlIH0gZnJvbSAnLi4vLi4vYmFzZS9jb25maWcvc2FtcGxlY29kZSc7XG5cbi8qKlxuICogSW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBTYW1wbGVDb2RlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBHaXRIdWJBY3Rpb24gcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFNhbXBsZUNvZGVDb25maWdHaXRIdWJBY3Rpb24gZXh0ZW5kcyBTYW1wbGVDb2RlQ29uZmlnQmFzZSB7XG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgc2FtcGxlQ29kZUZpbGUoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2FjdGlvbi55bWwnOiBbXG4gICAgICAgIFwibmFtZTogJ015IEN1c3RvbSBDb21wb3NpdGUgQWN0aW9uJ1wiLFxuICAgICAgICBcImRlc2NyaXB0aW9uOiAnQSBzYW1wbGUgR2l0SHViIGNvbXBvc2l0ZSBhY3Rpb24gY3JlYXRlZCB3aXRoIFByb2plbi4nXCIsXG4gICAgICAgIFwiYXV0aG9yOiAnWW91ciBOYW1lIG9yIE9yZydcIixcbiAgICAgICAgJ2JyYW5kaW5nOicsXG4gICAgICAgIFwiICBpY29uOiAnemFwJ1wiLFxuICAgICAgICBcIiAgY29sb3I6ICdibHVlJ1wiLFxuICAgICAgICAnJyxcbiAgICAgICAgJ2lucHV0czonLFxuICAgICAgICAnICBleGFtcGxlLWlucHV0OicsXG4gICAgICAgIFwiICAgIGRlc2NyaXB0aW9uOiAnQW4gZXhhbXBsZSBpbnB1dCBwYXJhbWV0ZXIgZm9yIHRoZSBhY3Rpb24uJ1wiLFxuICAgICAgICAnICAgIHJlcXVpcmVkOiBmYWxzZScsXG4gICAgICAgIFwiICAgIGRlZmF1bHQ6ICdkZWZhdWx0IHZhbHVlJ1wiLFxuICAgICAgICAnJyxcbiAgICAgICAgJ291dHB1dHM6JyxcbiAgICAgICAgJyAgZXhhbXBsZS1vdXRwdXQ6JyxcbiAgICAgICAgXCIgICAgZGVzY3JpcHRpb246ICdBbiBleGFtcGxlIG91dHB1dCBmcm9tIHRoZSBhY3Rpb24uJ1wiLFxuICAgICAgICAnJyxcbiAgICAgICAgJ3J1bnM6JyxcbiAgICAgICAgXCIgIHVzaW5nOiAnY29tcG9zaXRlJ1wiLFxuICAgICAgICAnICBzdGVwczonLFxuICAgICAgICBcIiAgICAtIG5hbWU6ICdTdGVwIDEnXCIsXG4gICAgICAgIFwiICAgICAgcnVuOiBlY2hvICdSdW5uaW5nIFN0ZXAgMSB3aXRoIGlucHV0OiAke3sgaW5wdXRzLmV4YW1wbGUtaW5wdXQgfX0nXCIsXG4gICAgICAgICcnLFxuICAgICAgICBcIiAgICAtIG5hbWU6ICdTdGVwIDInXCIsXG4gICAgICAgIFwiICAgICAgcnVuOiBlY2hvICdSdW5uaW5nIFN0ZXAgMidcIixcbiAgICAgICAgJycsXG4gICAgICAgICdlbnY6JyxcbiAgICAgICAgXCIgIEVYQU1QTEVfRU5WX1ZBUjogJ2V4YW1wbGUtdmFsdWUnXCIsXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
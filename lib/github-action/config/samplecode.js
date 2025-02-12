"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleCodeConfigGitHubAction = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
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
_a = JSII_RTTI_SYMBOL_1;
SampleCodeConfigGitHubAction[_a] = { fqn: "@dxfrontier/projen-template-projects.SampleCodeConfigGitHubAction", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlY29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9naXRodWItYWN0aW9uL2NvbmZpZy9zYW1wbGVjb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNkRBQW9FO0FBRXBFOztHQUVHO0FBQ0gsTUFBYSw0QkFBNkIsU0FBUSxpQ0FBb0I7SUFDcEUsSUFBdUIsY0FBYztRQUNuQyxPQUFPO1lBQ0wsWUFBWSxFQUFFO2dCQUNaLG9DQUFvQztnQkFDcEMsc0VBQXNFO2dCQUN0RSw0QkFBNEI7Z0JBQzVCLFdBQVc7Z0JBQ1gsZUFBZTtnQkFDZixpQkFBaUI7Z0JBQ2pCLEVBQUU7Z0JBQ0YsU0FBUztnQkFDVCxrQkFBa0I7Z0JBQ2xCLCtEQUErRDtnQkFDL0QscUJBQXFCO2dCQUNyQiw4QkFBOEI7Z0JBQzlCLEVBQUU7Z0JBQ0YsVUFBVTtnQkFDVixtQkFBbUI7Z0JBQ25CLHVEQUF1RDtnQkFDdkQsRUFBRTtnQkFDRixPQUFPO2dCQUNQLHNCQUFzQjtnQkFDdEIsVUFBVTtnQkFDVixzQkFBc0I7Z0JBQ3RCLDBFQUEwRTtnQkFDMUUsRUFBRTtnQkFDRixzQkFBc0I7Z0JBQ3RCLGtDQUFrQztnQkFDbEMsRUFBRTtnQkFDRixNQUFNO2dCQUNOLG9DQUFvQzthQUNyQztTQUNGLENBQUM7SUFDSixDQUFDOztBQWxDSCxvRUFtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTYW1wbGVDb2RlQ29uZmlnQmFzZSB9IGZyb20gJy4uLy4uL2Jhc2UvY29uZmlnL3NhbXBsZWNvZGUnO1xuXG4vKipcbiAqIEltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgU2FtcGxlQ29kZSBjb25maWd1cmF0aW9uIGZvciB0aGUgR2l0SHViQWN0aW9uIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBTYW1wbGVDb2RlQ29uZmlnR2l0SHViQWN0aW9uIGV4dGVuZHMgU2FtcGxlQ29kZUNvbmZpZ0Jhc2Uge1xuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IHNhbXBsZUNvZGVGaWxlKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdhY3Rpb24ueW1sJzogW1xuICAgICAgICBcIm5hbWU6ICdNeSBDdXN0b20gQ29tcG9zaXRlIEFjdGlvbidcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvbjogJ0Egc2FtcGxlIEdpdEh1YiBjb21wb3NpdGUgYWN0aW9uIGNyZWF0ZWQgd2l0aCBQcm9qZW4uJ1wiLFxuICAgICAgICBcImF1dGhvcjogJ1lvdXIgTmFtZSBvciBPcmcnXCIsXG4gICAgICAgICdicmFuZGluZzonLFxuICAgICAgICBcIiAgaWNvbjogJ3phcCdcIixcbiAgICAgICAgXCIgIGNvbG9yOiAnYmx1ZSdcIixcbiAgICAgICAgJycsXG4gICAgICAgICdpbnB1dHM6JyxcbiAgICAgICAgJyAgZXhhbXBsZS1pbnB1dDonLFxuICAgICAgICBcIiAgICBkZXNjcmlwdGlvbjogJ0FuIGV4YW1wbGUgaW5wdXQgcGFyYW1ldGVyIGZvciB0aGUgYWN0aW9uLidcIixcbiAgICAgICAgJyAgICByZXF1aXJlZDogZmFsc2UnLFxuICAgICAgICBcIiAgICBkZWZhdWx0OiAnZGVmYXVsdCB2YWx1ZSdcIixcbiAgICAgICAgJycsXG4gICAgICAgICdvdXRwdXRzOicsXG4gICAgICAgICcgIGV4YW1wbGUtb3V0cHV0OicsXG4gICAgICAgIFwiICAgIGRlc2NyaXB0aW9uOiAnQW4gZXhhbXBsZSBvdXRwdXQgZnJvbSB0aGUgYWN0aW9uLidcIixcbiAgICAgICAgJycsXG4gICAgICAgICdydW5zOicsXG4gICAgICAgIFwiICB1c2luZzogJ2NvbXBvc2l0ZSdcIixcbiAgICAgICAgJyAgc3RlcHM6JyxcbiAgICAgICAgXCIgICAgLSBuYW1lOiAnU3RlcCAxJ1wiLFxuICAgICAgICBcIiAgICAgIHJ1bjogZWNobyAnUnVubmluZyBTdGVwIDEgd2l0aCBpbnB1dDogJHt7IGlucHV0cy5leGFtcGxlLWlucHV0IH19J1wiLFxuICAgICAgICAnJyxcbiAgICAgICAgXCIgICAgLSBuYW1lOiAnU3RlcCAyJ1wiLFxuICAgICAgICBcIiAgICAgIHJ1bjogZWNobyAnUnVubmluZyBTdGVwIDInXCIsXG4gICAgICAgICcnLFxuICAgICAgICAnZW52OicsXG4gICAgICAgIFwiICBFWEFNUExFX0VOVl9WQVI6ICdleGFtcGxlLXZhbHVlJ1wiLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=
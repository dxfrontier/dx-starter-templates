"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseOptions = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const javascript_1 = require("projen/lib/javascript");
// TODO: rename BaseOptions to StandardProjenOptions
/**
 * Utility for shared options.
 */
class BaseOptions {
    /**
     * Merges shared defaults with provided options.
     * @param options Specific project options to merge.
     * @returns Merged options.
     */
    static sharedOptions(options) {
        return {
            ...options,
            defaultReleaseBranch: options.defaultReleaseBranch ?? 'dev',
            licensed: options.licensed ?? false,
            packageManager: options.packageManager ?? javascript_1.NodePackageManager.NPM,
            npmignoreEnabled: options.npmignoreEnabled ?? false,
            projenrcTs: !options.typescriptEnabled
                ? false
                : options.typescriptEnabled && options.projenrcTs
                    ? options.projenrcTs
                    : true,
            disableTsconfigDev: options.typescriptEnabled && options.disableTsconfigDev ? options.disableTsconfigDev : true,
            disableTsconfig: options.typescriptEnabled && options.disableTsconfig ? options.disableTsconfig : false,
            prettier: options.prettierEnabled && options.prettier ? options.prettier : false,
            eslint: options.eslintEnabled && options.eslint ? options.eslint : false,
            devContainer: options.devContainerEnabled && options.devContainer ? options.devContainer : false,
            vscode: options.vscodeEnabled && options.vscode ? options.vscode : false,
            jest: options.jestEnabled && options.jest ? options.jest : false,
            github: options.githubEnabled && options.github ? options.github : false,
            githubOptions: options.githubEnabled && options.githubOptions
                ? options.githubOptions
                : { mergify: false, pullRequestLint: false },
            buildWorkflow: options.githubEnabled && options.buildWorkflow ? options.buildWorkflow : false,
            release: options.githubEnabled && options.release ? options.release : false,
            pullRequestTemplate: options.githubEnabled && options.pullRequestTemplate ? options.pullRequestTemplate : false,
            depsUpgrade: options.githubEnabled && options.depsUpgrade ? options.depsUpgrade : false,
            sampleCode: options.sampleCodeEnabled && options.sampleCode ? options.sampleCode : false,
            minNodeVersion: '20.0',
        };
    }
}
exports.BaseOptions = BaseOptions;
_a = JSII_RTTI_SYMBOL_1;
BaseOptions[_a] = { fqn: "@dxfrontier/projen-template-projects.BaseOptions", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYXNlL2NvbmZpZy9vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esc0RBQTJEO0FBRTNELG9EQUFvRDtBQUNwRDs7R0FFRztBQUNILE1BQWEsV0FBVztJQUN0Qjs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLGFBQWEsQ0FBK0IsT0FBVTtRQUNsRSxPQUFPO1lBQ0wsR0FBRyxPQUFPO1lBQ1Ysb0JBQW9CLEVBQUUsT0FBTyxDQUFDLG9CQUFvQixJQUFJLEtBQUs7WUFDM0QsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLElBQUksS0FBSztZQUNuQyxjQUFjLEVBQUUsT0FBTyxDQUFDLGNBQWMsSUFBSSwrQkFBa0IsQ0FBQyxHQUFHO1lBQ2hFLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxLQUFLO1lBQ25ELFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUI7Z0JBQ3BDLENBQUMsQ0FBQyxLQUFLO2dCQUNQLENBQUMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLElBQUksT0FBTyxDQUFDLFVBQVU7b0JBQy9DLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVTtvQkFDcEIsQ0FBQyxDQUFDLElBQUk7WUFDVixrQkFBa0IsRUFBRSxPQUFPLENBQUMsaUJBQWlCLElBQUksT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDL0csZUFBZSxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsSUFBSSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQ3ZHLFFBQVEsRUFBRSxPQUFPLENBQUMsZUFBZSxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDaEYsTUFBTSxFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSztZQUN4RSxZQUFZLEVBQUUsT0FBTyxDQUFDLG1CQUFtQixJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDaEcsTUFBTSxFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSztZQUN4RSxJQUFJLEVBQUUsT0FBTyxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQ2hFLE1BQU0sRUFBRSxPQUFPLENBQUMsYUFBYSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDeEUsYUFBYSxFQUNYLE9BQU8sQ0FBQyxhQUFhLElBQUksT0FBTyxDQUFDLGFBQWE7Z0JBQzVDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYTtnQkFDdkIsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFO1lBQ2hELGFBQWEsRUFBRSxPQUFPLENBQUMsYUFBYSxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDN0YsT0FBTyxFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSztZQUMzRSxtQkFBbUIsRUFBRSxPQUFPLENBQUMsYUFBYSxJQUFJLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQy9HLFdBQVcsRUFBRSxPQUFPLENBQUMsYUFBYSxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDdkYsVUFBVSxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQ3hGLGNBQWMsRUFBRSxNQUFNO1NBQ3ZCLENBQUM7SUFDSixDQUFDOztBQXJDSCxrQ0FzQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlUHJvamVjdE9wdGlvbnMgfSBmcm9tICcuLi9wcm9qZWN0JztcbmltcG9ydCB7IE5vZGVQYWNrYWdlTWFuYWdlciB9IGZyb20gJ3Byb2plbi9saWIvamF2YXNjcmlwdCc7XG5cbi8vIFRPRE86IHJlbmFtZSBCYXNlT3B0aW9ucyB0byBTdGFuZGFyZFByb2plbk9wdGlvbnNcbi8qKlxuICogVXRpbGl0eSBmb3Igc2hhcmVkIG9wdGlvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBCYXNlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBNZXJnZXMgc2hhcmVkIGRlZmF1bHRzIHdpdGggcHJvdmlkZWQgb3B0aW9ucy5cbiAgICogQHBhcmFtIG9wdGlvbnMgU3BlY2lmaWMgcHJvamVjdCBvcHRpb25zIHRvIG1lcmdlLlxuICAgKiBAcmV0dXJucyBNZXJnZWQgb3B0aW9ucy5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc2hhcmVkT3B0aW9uczxUIGV4dGVuZHMgQmFzZVByb2plY3RPcHRpb25zPihvcHRpb25zOiBUKTogVCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBkZWZhdWx0UmVsZWFzZUJyYW5jaDogb3B0aW9ucy5kZWZhdWx0UmVsZWFzZUJyYW5jaCA/PyAnZGV2JyxcbiAgICAgIGxpY2Vuc2VkOiBvcHRpb25zLmxpY2Vuc2VkID8/IGZhbHNlLFxuICAgICAgcGFja2FnZU1hbmFnZXI6IG9wdGlvbnMucGFja2FnZU1hbmFnZXIgPz8gTm9kZVBhY2thZ2VNYW5hZ2VyLk5QTSxcbiAgICAgIG5wbWlnbm9yZUVuYWJsZWQ6IG9wdGlvbnMubnBtaWdub3JlRW5hYmxlZCA/PyBmYWxzZSxcbiAgICAgIHByb2plbnJjVHM6ICFvcHRpb25zLnR5cGVzY3JpcHRFbmFibGVkXG4gICAgICAgID8gZmFsc2VcbiAgICAgICAgOiBvcHRpb25zLnR5cGVzY3JpcHRFbmFibGVkICYmIG9wdGlvbnMucHJvamVucmNUc1xuICAgICAgICAgID8gb3B0aW9ucy5wcm9qZW5yY1RzXG4gICAgICAgICAgOiB0cnVlLFxuICAgICAgZGlzYWJsZVRzY29uZmlnRGV2OiBvcHRpb25zLnR5cGVzY3JpcHRFbmFibGVkICYmIG9wdGlvbnMuZGlzYWJsZVRzY29uZmlnRGV2ID8gb3B0aW9ucy5kaXNhYmxlVHNjb25maWdEZXYgOiB0cnVlLFxuICAgICAgZGlzYWJsZVRzY29uZmlnOiBvcHRpb25zLnR5cGVzY3JpcHRFbmFibGVkICYmIG9wdGlvbnMuZGlzYWJsZVRzY29uZmlnID8gb3B0aW9ucy5kaXNhYmxlVHNjb25maWcgOiBmYWxzZSxcbiAgICAgIHByZXR0aWVyOiBvcHRpb25zLnByZXR0aWVyRW5hYmxlZCAmJiBvcHRpb25zLnByZXR0aWVyID8gb3B0aW9ucy5wcmV0dGllciA6IGZhbHNlLFxuICAgICAgZXNsaW50OiBvcHRpb25zLmVzbGludEVuYWJsZWQgJiYgb3B0aW9ucy5lc2xpbnQgPyBvcHRpb25zLmVzbGludCA6IGZhbHNlLFxuICAgICAgZGV2Q29udGFpbmVyOiBvcHRpb25zLmRldkNvbnRhaW5lckVuYWJsZWQgJiYgb3B0aW9ucy5kZXZDb250YWluZXIgPyBvcHRpb25zLmRldkNvbnRhaW5lciA6IGZhbHNlLFxuICAgICAgdnNjb2RlOiBvcHRpb25zLnZzY29kZUVuYWJsZWQgJiYgb3B0aW9ucy52c2NvZGUgPyBvcHRpb25zLnZzY29kZSA6IGZhbHNlLFxuICAgICAgamVzdDogb3B0aW9ucy5qZXN0RW5hYmxlZCAmJiBvcHRpb25zLmplc3QgPyBvcHRpb25zLmplc3QgOiBmYWxzZSxcbiAgICAgIGdpdGh1Yjogb3B0aW9ucy5naXRodWJFbmFibGVkICYmIG9wdGlvbnMuZ2l0aHViID8gb3B0aW9ucy5naXRodWIgOiBmYWxzZSxcbiAgICAgIGdpdGh1Yk9wdGlvbnM6XG4gICAgICAgIG9wdGlvbnMuZ2l0aHViRW5hYmxlZCAmJiBvcHRpb25zLmdpdGh1Yk9wdGlvbnNcbiAgICAgICAgICA/IG9wdGlvbnMuZ2l0aHViT3B0aW9uc1xuICAgICAgICAgIDogeyBtZXJnaWZ5OiBmYWxzZSwgcHVsbFJlcXVlc3RMaW50OiBmYWxzZSB9LFxuICAgICAgYnVpbGRXb3JrZmxvdzogb3B0aW9ucy5naXRodWJFbmFibGVkICYmIG9wdGlvbnMuYnVpbGRXb3JrZmxvdyA/IG9wdGlvbnMuYnVpbGRXb3JrZmxvdyA6IGZhbHNlLFxuICAgICAgcmVsZWFzZTogb3B0aW9ucy5naXRodWJFbmFibGVkICYmIG9wdGlvbnMucmVsZWFzZSA/IG9wdGlvbnMucmVsZWFzZSA6IGZhbHNlLFxuICAgICAgcHVsbFJlcXVlc3RUZW1wbGF0ZTogb3B0aW9ucy5naXRodWJFbmFibGVkICYmIG9wdGlvbnMucHVsbFJlcXVlc3RUZW1wbGF0ZSA/IG9wdGlvbnMucHVsbFJlcXVlc3RUZW1wbGF0ZSA6IGZhbHNlLFxuICAgICAgZGVwc1VwZ3JhZGU6IG9wdGlvbnMuZ2l0aHViRW5hYmxlZCAmJiBvcHRpb25zLmRlcHNVcGdyYWRlID8gb3B0aW9ucy5kZXBzVXBncmFkZSA6IGZhbHNlLFxuICAgICAgc2FtcGxlQ29kZTogb3B0aW9ucy5zYW1wbGVDb2RlRW5hYmxlZCAmJiBvcHRpb25zLnNhbXBsZUNvZGUgPyBvcHRpb25zLnNhbXBsZUNvZGUgOiBmYWxzZSxcbiAgICAgIG1pbk5vZGVWZXJzaW9uOiAnMjAuMCcsXG4gICAgfTtcbiAgfVxufVxuIl19
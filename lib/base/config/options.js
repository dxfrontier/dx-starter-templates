"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseOptions = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
// import { JsiiProjectOptions } from '../jsii';
const javascript_1 = require("projen/lib/javascript");
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
        };
    }
}
exports.BaseOptions = BaseOptions;
_a = JSII_RTTI_SYMBOL_1;
BaseOptions[_a] = { fqn: "@dxfrontier/projen-template-projects.BaseOptions", version: "0.5.4" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYXNlL2NvbmZpZy9vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0RBQWdEO0FBQ2hELHNEQUEyRDtBQUUzRDs7R0FFRztBQUNILE1BQWEsV0FBVztJQUN0Qjs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLGFBQWEsQ0FBK0IsT0FBVTtRQUNsRSxPQUFPO1lBQ0wsR0FBRyxPQUFPO1lBQ1Ysb0JBQW9CLEVBQUUsT0FBTyxDQUFDLG9CQUFvQixJQUFJLEtBQUs7WUFDM0QsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLElBQUksS0FBSztZQUNuQyxjQUFjLEVBQUUsT0FBTyxDQUFDLGNBQWMsSUFBSSwrQkFBa0IsQ0FBQyxHQUFHO1lBQ2hFLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxLQUFLO1lBQ25ELFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUI7Z0JBQ3BDLENBQUMsQ0FBQyxLQUFLO2dCQUNQLENBQUMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLElBQUksT0FBTyxDQUFDLFVBQVU7b0JBQy9DLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVTtvQkFDcEIsQ0FBQyxDQUFDLElBQUk7WUFDVixrQkFBa0IsRUFBRSxPQUFPLENBQUMsaUJBQWlCLElBQUksT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDL0csZUFBZSxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsSUFBSSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQ3ZHLFFBQVEsRUFBRSxPQUFPLENBQUMsZUFBZSxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDaEYsTUFBTSxFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSztZQUN4RSxZQUFZLEVBQUUsT0FBTyxDQUFDLG1CQUFtQixJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDaEcsTUFBTSxFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSztZQUN4RSxJQUFJLEVBQUUsT0FBTyxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQ2hFLE1BQU0sRUFBRSxPQUFPLENBQUMsYUFBYSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDeEUsYUFBYSxFQUNYLE9BQU8sQ0FBQyxhQUFhLElBQUksT0FBTyxDQUFDLGFBQWE7Z0JBQzVDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYTtnQkFDdkIsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFO1lBQ2hELGFBQWEsRUFBRSxPQUFPLENBQUMsYUFBYSxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDN0YsT0FBTyxFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSztZQUMzRSxtQkFBbUIsRUFBRSxPQUFPLENBQUMsYUFBYSxJQUFJLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQy9HLFdBQVcsRUFBRSxPQUFPLENBQUMsYUFBYSxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDdkYsVUFBVSxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLO1NBQ3pGLENBQUM7SUFDSixDQUFDOztBQXBDSCxrQ0FxQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlUHJvamVjdE9wdGlvbnMgfSBmcm9tICcuLi9wcm9qZWN0Jztcbi8vIGltcG9ydCB7IEpzaWlQcm9qZWN0T3B0aW9ucyB9IGZyb20gJy4uL2pzaWknO1xuaW1wb3J0IHsgTm9kZVBhY2thZ2VNYW5hZ2VyIH0gZnJvbSAncHJvamVuL2xpYi9qYXZhc2NyaXB0JztcblxuLyoqXG4gKiBVdGlsaXR5IGZvciBzaGFyZWQgb3B0aW9ucy5cbiAqL1xuZXhwb3J0IGNsYXNzIEJhc2VPcHRpb25zIHtcbiAgLyoqXG4gICAqIE1lcmdlcyBzaGFyZWQgZGVmYXVsdHMgd2l0aCBwcm92aWRlZCBvcHRpb25zLlxuICAgKiBAcGFyYW0gb3B0aW9ucyBTcGVjaWZpYyBwcm9qZWN0IG9wdGlvbnMgdG8gbWVyZ2UuXG4gICAqIEByZXR1cm5zIE1lcmdlZCBvcHRpb25zLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzaGFyZWRPcHRpb25zPFQgZXh0ZW5kcyBCYXNlUHJvamVjdE9wdGlvbnM+KG9wdGlvbnM6IFQpOiBUIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIGRlZmF1bHRSZWxlYXNlQnJhbmNoOiBvcHRpb25zLmRlZmF1bHRSZWxlYXNlQnJhbmNoID8/ICdkZXYnLFxuICAgICAgbGljZW5zZWQ6IG9wdGlvbnMubGljZW5zZWQgPz8gZmFsc2UsXG4gICAgICBwYWNrYWdlTWFuYWdlcjogb3B0aW9ucy5wYWNrYWdlTWFuYWdlciA/PyBOb2RlUGFja2FnZU1hbmFnZXIuTlBNLFxuICAgICAgbnBtaWdub3JlRW5hYmxlZDogb3B0aW9ucy5ucG1pZ25vcmVFbmFibGVkID8/IGZhbHNlLFxuICAgICAgcHJvamVucmNUczogIW9wdGlvbnMudHlwZXNjcmlwdEVuYWJsZWRcbiAgICAgICAgPyBmYWxzZVxuICAgICAgICA6IG9wdGlvbnMudHlwZXNjcmlwdEVuYWJsZWQgJiYgb3B0aW9ucy5wcm9qZW5yY1RzXG4gICAgICAgICAgPyBvcHRpb25zLnByb2plbnJjVHNcbiAgICAgICAgICA6IHRydWUsXG4gICAgICBkaXNhYmxlVHNjb25maWdEZXY6IG9wdGlvbnMudHlwZXNjcmlwdEVuYWJsZWQgJiYgb3B0aW9ucy5kaXNhYmxlVHNjb25maWdEZXYgPyBvcHRpb25zLmRpc2FibGVUc2NvbmZpZ0RldiA6IHRydWUsXG4gICAgICBkaXNhYmxlVHNjb25maWc6IG9wdGlvbnMudHlwZXNjcmlwdEVuYWJsZWQgJiYgb3B0aW9ucy5kaXNhYmxlVHNjb25maWcgPyBvcHRpb25zLmRpc2FibGVUc2NvbmZpZyA6IGZhbHNlLFxuICAgICAgcHJldHRpZXI6IG9wdGlvbnMucHJldHRpZXJFbmFibGVkICYmIG9wdGlvbnMucHJldHRpZXIgPyBvcHRpb25zLnByZXR0aWVyIDogZmFsc2UsXG4gICAgICBlc2xpbnQ6IG9wdGlvbnMuZXNsaW50RW5hYmxlZCAmJiBvcHRpb25zLmVzbGludCA/IG9wdGlvbnMuZXNsaW50IDogZmFsc2UsXG4gICAgICBkZXZDb250YWluZXI6IG9wdGlvbnMuZGV2Q29udGFpbmVyRW5hYmxlZCAmJiBvcHRpb25zLmRldkNvbnRhaW5lciA/IG9wdGlvbnMuZGV2Q29udGFpbmVyIDogZmFsc2UsXG4gICAgICB2c2NvZGU6IG9wdGlvbnMudnNjb2RlRW5hYmxlZCAmJiBvcHRpb25zLnZzY29kZSA/IG9wdGlvbnMudnNjb2RlIDogZmFsc2UsXG4gICAgICBqZXN0OiBvcHRpb25zLmplc3RFbmFibGVkICYmIG9wdGlvbnMuamVzdCA/IG9wdGlvbnMuamVzdCA6IGZhbHNlLFxuICAgICAgZ2l0aHViOiBvcHRpb25zLmdpdGh1YkVuYWJsZWQgJiYgb3B0aW9ucy5naXRodWIgPyBvcHRpb25zLmdpdGh1YiA6IGZhbHNlLFxuICAgICAgZ2l0aHViT3B0aW9uczpcbiAgICAgICAgb3B0aW9ucy5naXRodWJFbmFibGVkICYmIG9wdGlvbnMuZ2l0aHViT3B0aW9uc1xuICAgICAgICAgID8gb3B0aW9ucy5naXRodWJPcHRpb25zXG4gICAgICAgICAgOiB7IG1lcmdpZnk6IGZhbHNlLCBwdWxsUmVxdWVzdExpbnQ6IGZhbHNlIH0sXG4gICAgICBidWlsZFdvcmtmbG93OiBvcHRpb25zLmdpdGh1YkVuYWJsZWQgJiYgb3B0aW9ucy5idWlsZFdvcmtmbG93ID8gb3B0aW9ucy5idWlsZFdvcmtmbG93IDogZmFsc2UsXG4gICAgICByZWxlYXNlOiBvcHRpb25zLmdpdGh1YkVuYWJsZWQgJiYgb3B0aW9ucy5yZWxlYXNlID8gb3B0aW9ucy5yZWxlYXNlIDogZmFsc2UsXG4gICAgICBwdWxsUmVxdWVzdFRlbXBsYXRlOiBvcHRpb25zLmdpdGh1YkVuYWJsZWQgJiYgb3B0aW9ucy5wdWxsUmVxdWVzdFRlbXBsYXRlID8gb3B0aW9ucy5wdWxsUmVxdWVzdFRlbXBsYXRlIDogZmFsc2UsXG4gICAgICBkZXBzVXBncmFkZTogb3B0aW9ucy5naXRodWJFbmFibGVkICYmIG9wdGlvbnMuZGVwc1VwZ3JhZGUgPyBvcHRpb25zLmRlcHNVcGdyYWRlIDogZmFsc2UsXG4gICAgICBzYW1wbGVDb2RlOiBvcHRpb25zLnNhbXBsZUNvZGVFbmFibGVkICYmIG9wdGlvbnMuc2FtcGxlQ29kZSA/IG9wdGlvbnMuc2FtcGxlQ29kZSA6IGZhbHNlLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
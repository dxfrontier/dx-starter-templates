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
    static sharedStandardOptions(options) {
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
BaseOptions[_a] = { fqn: "@dxfrontier/dx-starter-templates.BaseOptions", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYXNlL2NvbmZpZy9vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esc0RBQTJEO0FBRTNELG9EQUFvRDtBQUNwRDs7R0FFRztBQUNILE1BQWEsV0FBVztJQUN0Qjs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLHFCQUFxQixDQUErQixPQUFVO1FBQzFFLE9BQU87WUFDTCxHQUFHLE9BQU87WUFDVixvQkFBb0IsRUFBRSxPQUFPLENBQUMsb0JBQW9CLElBQUksS0FBSztZQUMzRCxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsSUFBSSxLQUFLO1lBQ25DLGNBQWMsRUFBRSxPQUFPLENBQUMsY0FBYyxJQUFJLCtCQUFrQixDQUFDLEdBQUc7WUFDaEUsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLGdCQUFnQixJQUFJLEtBQUs7WUFDbkQsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLGlCQUFpQjtnQkFDcEMsQ0FBQyxDQUFDLEtBQUs7Z0JBQ1AsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsSUFBSSxPQUFPLENBQUMsVUFBVTtvQkFDL0MsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVO29CQUNwQixDQUFDLENBQUMsSUFBSTtZQUNWLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsSUFBSSxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUMvRyxlQUFlLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixJQUFJLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDdkcsUUFBUSxFQUFFLE9BQU8sQ0FBQyxlQUFlLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSztZQUNoRixNQUFNLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQ3hFLFlBQVksRUFBRSxPQUFPLENBQUMsbUJBQW1CLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSztZQUNoRyxNQUFNLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQ3hFLElBQUksRUFBRSxPQUFPLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDaEUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSztZQUN4RSxhQUFhLEVBQ1gsT0FBTyxDQUFDLGFBQWEsSUFBSSxPQUFPLENBQUMsYUFBYTtnQkFDNUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhO2dCQUN2QixDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUU7WUFDaEQsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSztZQUM3RixPQUFPLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQzNFLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUksT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDL0csV0FBVyxFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSztZQUN2RixVQUFVLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDeEYsY0FBYyxFQUFFLE1BQU07U0FDdkIsQ0FBQztJQUNKLENBQUM7O0FBckNILGtDQXNDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VQcm9qZWN0T3B0aW9ucyB9IGZyb20gJy4uL3Byb2plY3QnO1xuaW1wb3J0IHsgTm9kZVBhY2thZ2VNYW5hZ2VyIH0gZnJvbSAncHJvamVuL2xpYi9qYXZhc2NyaXB0JztcblxuLy8gVE9ETzogcmVuYW1lIEJhc2VPcHRpb25zIHRvIFN0YW5kYXJkUHJvamVuT3B0aW9uc1xuLyoqXG4gKiBVdGlsaXR5IGZvciBzaGFyZWQgb3B0aW9ucy5cbiAqL1xuZXhwb3J0IGNsYXNzIEJhc2VPcHRpb25zIHtcbiAgLyoqXG4gICAqIE1lcmdlcyBzaGFyZWQgZGVmYXVsdHMgd2l0aCBwcm92aWRlZCBvcHRpb25zLlxuICAgKiBAcGFyYW0gb3B0aW9ucyBTcGVjaWZpYyBwcm9qZWN0IG9wdGlvbnMgdG8gbWVyZ2UuXG4gICAqIEByZXR1cm5zIE1lcmdlZCBvcHRpb25zLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzaGFyZWRTdGFuZGFyZE9wdGlvbnM8VCBleHRlbmRzIEJhc2VQcm9qZWN0T3B0aW9ucz4ob3B0aW9uczogVCk6IFQge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgZGVmYXVsdFJlbGVhc2VCcmFuY2g6IG9wdGlvbnMuZGVmYXVsdFJlbGVhc2VCcmFuY2ggPz8gJ2RldicsXG4gICAgICBsaWNlbnNlZDogb3B0aW9ucy5saWNlbnNlZCA/PyBmYWxzZSxcbiAgICAgIHBhY2thZ2VNYW5hZ2VyOiBvcHRpb25zLnBhY2thZ2VNYW5hZ2VyID8/IE5vZGVQYWNrYWdlTWFuYWdlci5OUE0sXG4gICAgICBucG1pZ25vcmVFbmFibGVkOiBvcHRpb25zLm5wbWlnbm9yZUVuYWJsZWQgPz8gZmFsc2UsXG4gICAgICBwcm9qZW5yY1RzOiAhb3B0aW9ucy50eXBlc2NyaXB0RW5hYmxlZFxuICAgICAgICA/IGZhbHNlXG4gICAgICAgIDogb3B0aW9ucy50eXBlc2NyaXB0RW5hYmxlZCAmJiBvcHRpb25zLnByb2plbnJjVHNcbiAgICAgICAgICA/IG9wdGlvbnMucHJvamVucmNUc1xuICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIGRpc2FibGVUc2NvbmZpZ0Rldjogb3B0aW9ucy50eXBlc2NyaXB0RW5hYmxlZCAmJiBvcHRpb25zLmRpc2FibGVUc2NvbmZpZ0RldiA/IG9wdGlvbnMuZGlzYWJsZVRzY29uZmlnRGV2IDogdHJ1ZSxcbiAgICAgIGRpc2FibGVUc2NvbmZpZzogb3B0aW9ucy50eXBlc2NyaXB0RW5hYmxlZCAmJiBvcHRpb25zLmRpc2FibGVUc2NvbmZpZyA/IG9wdGlvbnMuZGlzYWJsZVRzY29uZmlnIDogZmFsc2UsXG4gICAgICBwcmV0dGllcjogb3B0aW9ucy5wcmV0dGllckVuYWJsZWQgJiYgb3B0aW9ucy5wcmV0dGllciA/IG9wdGlvbnMucHJldHRpZXIgOiBmYWxzZSxcbiAgICAgIGVzbGludDogb3B0aW9ucy5lc2xpbnRFbmFibGVkICYmIG9wdGlvbnMuZXNsaW50ID8gb3B0aW9ucy5lc2xpbnQgOiBmYWxzZSxcbiAgICAgIGRldkNvbnRhaW5lcjogb3B0aW9ucy5kZXZDb250YWluZXJFbmFibGVkICYmIG9wdGlvbnMuZGV2Q29udGFpbmVyID8gb3B0aW9ucy5kZXZDb250YWluZXIgOiBmYWxzZSxcbiAgICAgIHZzY29kZTogb3B0aW9ucy52c2NvZGVFbmFibGVkICYmIG9wdGlvbnMudnNjb2RlID8gb3B0aW9ucy52c2NvZGUgOiBmYWxzZSxcbiAgICAgIGplc3Q6IG9wdGlvbnMuamVzdEVuYWJsZWQgJiYgb3B0aW9ucy5qZXN0ID8gb3B0aW9ucy5qZXN0IDogZmFsc2UsXG4gICAgICBnaXRodWI6IG9wdGlvbnMuZ2l0aHViRW5hYmxlZCAmJiBvcHRpb25zLmdpdGh1YiA/IG9wdGlvbnMuZ2l0aHViIDogZmFsc2UsXG4gICAgICBnaXRodWJPcHRpb25zOlxuICAgICAgICBvcHRpb25zLmdpdGh1YkVuYWJsZWQgJiYgb3B0aW9ucy5naXRodWJPcHRpb25zXG4gICAgICAgICAgPyBvcHRpb25zLmdpdGh1Yk9wdGlvbnNcbiAgICAgICAgICA6IHsgbWVyZ2lmeTogZmFsc2UsIHB1bGxSZXF1ZXN0TGludDogZmFsc2UgfSxcbiAgICAgIGJ1aWxkV29ya2Zsb3c6IG9wdGlvbnMuZ2l0aHViRW5hYmxlZCAmJiBvcHRpb25zLmJ1aWxkV29ya2Zsb3cgPyBvcHRpb25zLmJ1aWxkV29ya2Zsb3cgOiBmYWxzZSxcbiAgICAgIHJlbGVhc2U6IG9wdGlvbnMuZ2l0aHViRW5hYmxlZCAmJiBvcHRpb25zLnJlbGVhc2UgPyBvcHRpb25zLnJlbGVhc2UgOiBmYWxzZSxcbiAgICAgIHB1bGxSZXF1ZXN0VGVtcGxhdGU6IG9wdGlvbnMuZ2l0aHViRW5hYmxlZCAmJiBvcHRpb25zLnB1bGxSZXF1ZXN0VGVtcGxhdGUgPyBvcHRpb25zLnB1bGxSZXF1ZXN0VGVtcGxhdGUgOiBmYWxzZSxcbiAgICAgIGRlcHNVcGdyYWRlOiBvcHRpb25zLmdpdGh1YkVuYWJsZWQgJiYgb3B0aW9ucy5kZXBzVXBncmFkZSA/IG9wdGlvbnMuZGVwc1VwZ3JhZGUgOiBmYWxzZSxcbiAgICAgIHNhbXBsZUNvZGU6IG9wdGlvbnMuc2FtcGxlQ29kZUVuYWJsZWQgJiYgb3B0aW9ucy5zYW1wbGVDb2RlID8gb3B0aW9ucy5zYW1wbGVDb2RlIDogZmFsc2UsXG4gICAgICBtaW5Ob2RlVmVyc2lvbjogJzIwLjAnLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
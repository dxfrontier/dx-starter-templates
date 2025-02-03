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
            readme: false,
        };
    }
}
exports.BaseOptions = BaseOptions;
_a = JSII_RTTI_SYMBOL_1;
BaseOptions[_a] = { fqn: "@dxfrontier/projen-template-projects.BaseOptions", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYXNlL2NvbmZpZy9vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0RBQWdEO0FBQ2hELHNEQUEyRDtBQUUzRDs7R0FFRztBQUNILE1BQWEsV0FBVztJQUN0Qjs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLGFBQWEsQ0FBK0IsT0FBVTtRQUNsRSxPQUFPO1lBQ0wsR0FBRyxPQUFPO1lBQ1Ysb0JBQW9CLEVBQUUsT0FBTyxDQUFDLG9CQUFvQixJQUFJLEtBQUs7WUFDM0QsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLElBQUksS0FBSztZQUNuQyxjQUFjLEVBQUUsT0FBTyxDQUFDLGNBQWMsSUFBSSwrQkFBa0IsQ0FBQyxHQUFHO1lBQ2hFLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxLQUFLO1lBQ25ELFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUI7Z0JBQ3BDLENBQUMsQ0FBQyxLQUFLO2dCQUNQLENBQUMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLElBQUksT0FBTyxDQUFDLFVBQVU7b0JBQy9DLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVTtvQkFDcEIsQ0FBQyxDQUFDLElBQUk7WUFDVixrQkFBa0IsRUFBRSxPQUFPLENBQUMsaUJBQWlCLElBQUksT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDL0csZUFBZSxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsSUFBSSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQ3ZHLFFBQVEsRUFBRSxPQUFPLENBQUMsZUFBZSxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDaEYsTUFBTSxFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSztZQUN4RSxZQUFZLEVBQUUsT0FBTyxDQUFDLG1CQUFtQixJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDaEcsTUFBTSxFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSztZQUN4RSxJQUFJLEVBQUUsT0FBTyxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQ2hFLE1BQU0sRUFBRSxPQUFPLENBQUMsYUFBYSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDeEUsYUFBYSxFQUNYLE9BQU8sQ0FBQyxhQUFhLElBQUksT0FBTyxDQUFDLGFBQWE7Z0JBQzVDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYTtnQkFDdkIsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFO1lBQ2hELGFBQWEsRUFBRSxPQUFPLENBQUMsYUFBYSxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDN0YsT0FBTyxFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSztZQUMzRSxtQkFBbUIsRUFBRSxPQUFPLENBQUMsYUFBYSxJQUFJLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQy9HLFdBQVcsRUFBRSxPQUFPLENBQUMsYUFBYSxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDdkYsVUFBVSxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQ3hGLE1BQU0sRUFBRSxLQUFLO1NBQ2QsQ0FBQztJQUNKLENBQUM7O0FBckNILGtDQXNDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VQcm9qZWN0T3B0aW9ucyB9IGZyb20gJy4uL3Byb2plY3QnO1xuLy8gaW1wb3J0IHsgSnNpaVByb2plY3RPcHRpb25zIH0gZnJvbSAnLi4vanNpaSc7XG5pbXBvcnQgeyBOb2RlUGFja2FnZU1hbmFnZXIgfSBmcm9tICdwcm9qZW4vbGliL2phdmFzY3JpcHQnO1xuXG4vKipcbiAqIFV0aWxpdHkgZm9yIHNoYXJlZCBvcHRpb25zLlxuICovXG5leHBvcnQgY2xhc3MgQmFzZU9wdGlvbnMge1xuICAvKipcbiAgICogTWVyZ2VzIHNoYXJlZCBkZWZhdWx0cyB3aXRoIHByb3ZpZGVkIG9wdGlvbnMuXG4gICAqIEBwYXJhbSBvcHRpb25zIFNwZWNpZmljIHByb2plY3Qgb3B0aW9ucyB0byBtZXJnZS5cbiAgICogQHJldHVybnMgTWVyZ2VkIG9wdGlvbnMuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHNoYXJlZE9wdGlvbnM8VCBleHRlbmRzIEJhc2VQcm9qZWN0T3B0aW9ucz4ob3B0aW9uczogVCk6IFQge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgZGVmYXVsdFJlbGVhc2VCcmFuY2g6IG9wdGlvbnMuZGVmYXVsdFJlbGVhc2VCcmFuY2ggPz8gJ2RldicsXG4gICAgICBsaWNlbnNlZDogb3B0aW9ucy5saWNlbnNlZCA/PyBmYWxzZSxcbiAgICAgIHBhY2thZ2VNYW5hZ2VyOiBvcHRpb25zLnBhY2thZ2VNYW5hZ2VyID8/IE5vZGVQYWNrYWdlTWFuYWdlci5OUE0sXG4gICAgICBucG1pZ25vcmVFbmFibGVkOiBvcHRpb25zLm5wbWlnbm9yZUVuYWJsZWQgPz8gZmFsc2UsXG4gICAgICBwcm9qZW5yY1RzOiAhb3B0aW9ucy50eXBlc2NyaXB0RW5hYmxlZFxuICAgICAgICA/IGZhbHNlXG4gICAgICAgIDogb3B0aW9ucy50eXBlc2NyaXB0RW5hYmxlZCAmJiBvcHRpb25zLnByb2plbnJjVHNcbiAgICAgICAgICA/IG9wdGlvbnMucHJvamVucmNUc1xuICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIGRpc2FibGVUc2NvbmZpZ0Rldjogb3B0aW9ucy50eXBlc2NyaXB0RW5hYmxlZCAmJiBvcHRpb25zLmRpc2FibGVUc2NvbmZpZ0RldiA/IG9wdGlvbnMuZGlzYWJsZVRzY29uZmlnRGV2IDogdHJ1ZSxcbiAgICAgIGRpc2FibGVUc2NvbmZpZzogb3B0aW9ucy50eXBlc2NyaXB0RW5hYmxlZCAmJiBvcHRpb25zLmRpc2FibGVUc2NvbmZpZyA/IG9wdGlvbnMuZGlzYWJsZVRzY29uZmlnIDogZmFsc2UsXG4gICAgICBwcmV0dGllcjogb3B0aW9ucy5wcmV0dGllckVuYWJsZWQgJiYgb3B0aW9ucy5wcmV0dGllciA/IG9wdGlvbnMucHJldHRpZXIgOiBmYWxzZSxcbiAgICAgIGVzbGludDogb3B0aW9ucy5lc2xpbnRFbmFibGVkICYmIG9wdGlvbnMuZXNsaW50ID8gb3B0aW9ucy5lc2xpbnQgOiBmYWxzZSxcbiAgICAgIGRldkNvbnRhaW5lcjogb3B0aW9ucy5kZXZDb250YWluZXJFbmFibGVkICYmIG9wdGlvbnMuZGV2Q29udGFpbmVyID8gb3B0aW9ucy5kZXZDb250YWluZXIgOiBmYWxzZSxcbiAgICAgIHZzY29kZTogb3B0aW9ucy52c2NvZGVFbmFibGVkICYmIG9wdGlvbnMudnNjb2RlID8gb3B0aW9ucy52c2NvZGUgOiBmYWxzZSxcbiAgICAgIGplc3Q6IG9wdGlvbnMuamVzdEVuYWJsZWQgJiYgb3B0aW9ucy5qZXN0ID8gb3B0aW9ucy5qZXN0IDogZmFsc2UsXG4gICAgICBnaXRodWI6IG9wdGlvbnMuZ2l0aHViRW5hYmxlZCAmJiBvcHRpb25zLmdpdGh1YiA/IG9wdGlvbnMuZ2l0aHViIDogZmFsc2UsXG4gICAgICBnaXRodWJPcHRpb25zOlxuICAgICAgICBvcHRpb25zLmdpdGh1YkVuYWJsZWQgJiYgb3B0aW9ucy5naXRodWJPcHRpb25zXG4gICAgICAgICAgPyBvcHRpb25zLmdpdGh1Yk9wdGlvbnNcbiAgICAgICAgICA6IHsgbWVyZ2lmeTogZmFsc2UsIHB1bGxSZXF1ZXN0TGludDogZmFsc2UgfSxcbiAgICAgIGJ1aWxkV29ya2Zsb3c6IG9wdGlvbnMuZ2l0aHViRW5hYmxlZCAmJiBvcHRpb25zLmJ1aWxkV29ya2Zsb3cgPyBvcHRpb25zLmJ1aWxkV29ya2Zsb3cgOiBmYWxzZSxcbiAgICAgIHJlbGVhc2U6IG9wdGlvbnMuZ2l0aHViRW5hYmxlZCAmJiBvcHRpb25zLnJlbGVhc2UgPyBvcHRpb25zLnJlbGVhc2UgOiBmYWxzZSxcbiAgICAgIHB1bGxSZXF1ZXN0VGVtcGxhdGU6IG9wdGlvbnMuZ2l0aHViRW5hYmxlZCAmJiBvcHRpb25zLnB1bGxSZXF1ZXN0VGVtcGxhdGUgPyBvcHRpb25zLnB1bGxSZXF1ZXN0VGVtcGxhdGUgOiBmYWxzZSxcbiAgICAgIGRlcHNVcGdyYWRlOiBvcHRpb25zLmdpdGh1YkVuYWJsZWQgJiYgb3B0aW9ucy5kZXBzVXBncmFkZSA/IG9wdGlvbnMuZGVwc1VwZ3JhZGUgOiBmYWxzZSxcbiAgICAgIHNhbXBsZUNvZGU6IG9wdGlvbnMuc2FtcGxlQ29kZUVuYWJsZWQgJiYgb3B0aW9ucy5zYW1wbGVDb2RlID8gb3B0aW9ucy5zYW1wbGVDb2RlIDogZmFsc2UsXG4gICAgICByZWFkbWU6IGZhbHNlLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseOptions = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYXNlL2NvbmZpZy9vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGdEQUFnRDtBQUNoRCxzREFBMkQ7QUFFM0Q7O0dBRUc7QUFDSCxNQUFhLFdBQVc7SUFDdEI7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxhQUFhLENBQStCLE9BQVU7UUFDbEUsT0FBTztZQUNMLEdBQUcsT0FBTztZQUNWLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxvQkFBb0IsSUFBSSxLQUFLO1lBQzNELFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxJQUFJLEtBQUs7WUFDbkMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxjQUFjLElBQUksK0JBQWtCLENBQUMsR0FBRztZQUNoRSxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLElBQUksS0FBSztZQUNuRCxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsaUJBQWlCO2dCQUNwQyxDQUFDLENBQUMsS0FBSztnQkFDUCxDQUFDLENBQUMsT0FBTyxDQUFDLGlCQUFpQixJQUFJLE9BQU8sQ0FBQyxVQUFVO29CQUMvQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVU7b0JBQ3BCLENBQUMsQ0FBQyxJQUFJO1lBQ1Ysa0JBQWtCLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixJQUFJLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQy9HLGVBQWUsRUFBRSxPQUFPLENBQUMsaUJBQWlCLElBQUksT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsS0FBSztZQUN2RyxRQUFRLEVBQUUsT0FBTyxDQUFDLGVBQWUsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQ2hGLE1BQU0sRUFBRSxPQUFPLENBQUMsYUFBYSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDeEUsWUFBWSxFQUFFLE9BQU8sQ0FBQyxtQkFBbUIsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQ2hHLE1BQU0sRUFBRSxPQUFPLENBQUMsYUFBYSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDeEUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSztZQUNoRSxNQUFNLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQ3hFLGFBQWEsRUFDWCxPQUFPLENBQUMsYUFBYSxJQUFJLE9BQU8sQ0FBQyxhQUFhO2dCQUM1QyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWE7Z0JBQ3ZCLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRTtZQUNoRCxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQzdGLE9BQU8sRUFBRSxPQUFPLENBQUMsYUFBYSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDM0UsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsS0FBSztZQUMvRyxXQUFXLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQ3ZGLFVBQVUsRUFBRSxPQUFPLENBQUMsaUJBQWlCLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSztTQUN6RixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBckNELGtDQXFDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VQcm9qZWN0T3B0aW9ucyB9IGZyb20gJy4uL3Byb2plY3QnO1xuLy8gaW1wb3J0IHsgSnNpaVByb2plY3RPcHRpb25zIH0gZnJvbSAnLi4vanNpaSc7XG5pbXBvcnQgeyBOb2RlUGFja2FnZU1hbmFnZXIgfSBmcm9tICdwcm9qZW4vbGliL2phdmFzY3JpcHQnO1xuXG4vKipcbiAqIFV0aWxpdHkgZm9yIHNoYXJlZCBvcHRpb25zLlxuICovXG5leHBvcnQgY2xhc3MgQmFzZU9wdGlvbnMge1xuICAvKipcbiAgICogTWVyZ2VzIHNoYXJlZCBkZWZhdWx0cyB3aXRoIHByb3ZpZGVkIG9wdGlvbnMuXG4gICAqIEBwYXJhbSBvcHRpb25zIFNwZWNpZmljIHByb2plY3Qgb3B0aW9ucyB0byBtZXJnZS5cbiAgICogQHJldHVybnMgTWVyZ2VkIG9wdGlvbnMuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHNoYXJlZE9wdGlvbnM8VCBleHRlbmRzIEJhc2VQcm9qZWN0T3B0aW9ucz4ob3B0aW9uczogVCk6IFQge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgZGVmYXVsdFJlbGVhc2VCcmFuY2g6IG9wdGlvbnMuZGVmYXVsdFJlbGVhc2VCcmFuY2ggPz8gJ2RldicsXG4gICAgICBsaWNlbnNlZDogb3B0aW9ucy5saWNlbnNlZCA/PyBmYWxzZSxcbiAgICAgIHBhY2thZ2VNYW5hZ2VyOiBvcHRpb25zLnBhY2thZ2VNYW5hZ2VyID8/IE5vZGVQYWNrYWdlTWFuYWdlci5OUE0sXG4gICAgICBucG1pZ25vcmVFbmFibGVkOiBvcHRpb25zLm5wbWlnbm9yZUVuYWJsZWQgPz8gZmFsc2UsXG4gICAgICBwcm9qZW5yY1RzOiAhb3B0aW9ucy50eXBlc2NyaXB0RW5hYmxlZFxuICAgICAgICA/IGZhbHNlXG4gICAgICAgIDogb3B0aW9ucy50eXBlc2NyaXB0RW5hYmxlZCAmJiBvcHRpb25zLnByb2plbnJjVHNcbiAgICAgICAgICA/IG9wdGlvbnMucHJvamVucmNUc1xuICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIGRpc2FibGVUc2NvbmZpZ0Rldjogb3B0aW9ucy50eXBlc2NyaXB0RW5hYmxlZCAmJiBvcHRpb25zLmRpc2FibGVUc2NvbmZpZ0RldiA/IG9wdGlvbnMuZGlzYWJsZVRzY29uZmlnRGV2IDogdHJ1ZSxcbiAgICAgIGRpc2FibGVUc2NvbmZpZzogb3B0aW9ucy50eXBlc2NyaXB0RW5hYmxlZCAmJiBvcHRpb25zLmRpc2FibGVUc2NvbmZpZyA/IG9wdGlvbnMuZGlzYWJsZVRzY29uZmlnIDogZmFsc2UsXG4gICAgICBwcmV0dGllcjogb3B0aW9ucy5wcmV0dGllckVuYWJsZWQgJiYgb3B0aW9ucy5wcmV0dGllciA/IG9wdGlvbnMucHJldHRpZXIgOiBmYWxzZSxcbiAgICAgIGVzbGludDogb3B0aW9ucy5lc2xpbnRFbmFibGVkICYmIG9wdGlvbnMuZXNsaW50ID8gb3B0aW9ucy5lc2xpbnQgOiBmYWxzZSxcbiAgICAgIGRldkNvbnRhaW5lcjogb3B0aW9ucy5kZXZDb250YWluZXJFbmFibGVkICYmIG9wdGlvbnMuZGV2Q29udGFpbmVyID8gb3B0aW9ucy5kZXZDb250YWluZXIgOiBmYWxzZSxcbiAgICAgIHZzY29kZTogb3B0aW9ucy52c2NvZGVFbmFibGVkICYmIG9wdGlvbnMudnNjb2RlID8gb3B0aW9ucy52c2NvZGUgOiBmYWxzZSxcbiAgICAgIGplc3Q6IG9wdGlvbnMuamVzdEVuYWJsZWQgJiYgb3B0aW9ucy5qZXN0ID8gb3B0aW9ucy5qZXN0IDogZmFsc2UsXG4gICAgICBnaXRodWI6IG9wdGlvbnMuZ2l0aHViRW5hYmxlZCAmJiBvcHRpb25zLmdpdGh1YiA/IG9wdGlvbnMuZ2l0aHViIDogZmFsc2UsXG4gICAgICBnaXRodWJPcHRpb25zOlxuICAgICAgICBvcHRpb25zLmdpdGh1YkVuYWJsZWQgJiYgb3B0aW9ucy5naXRodWJPcHRpb25zXG4gICAgICAgICAgPyBvcHRpb25zLmdpdGh1Yk9wdGlvbnNcbiAgICAgICAgICA6IHsgbWVyZ2lmeTogZmFsc2UsIHB1bGxSZXF1ZXN0TGludDogZmFsc2UgfSxcbiAgICAgIGJ1aWxkV29ya2Zsb3c6IG9wdGlvbnMuZ2l0aHViRW5hYmxlZCAmJiBvcHRpb25zLmJ1aWxkV29ya2Zsb3cgPyBvcHRpb25zLmJ1aWxkV29ya2Zsb3cgOiBmYWxzZSxcbiAgICAgIHJlbGVhc2U6IG9wdGlvbnMuZ2l0aHViRW5hYmxlZCAmJiBvcHRpb25zLnJlbGVhc2UgPyBvcHRpb25zLnJlbGVhc2UgOiBmYWxzZSxcbiAgICAgIHB1bGxSZXF1ZXN0VGVtcGxhdGU6IG9wdGlvbnMuZ2l0aHViRW5hYmxlZCAmJiBvcHRpb25zLnB1bGxSZXF1ZXN0VGVtcGxhdGUgPyBvcHRpb25zLnB1bGxSZXF1ZXN0VGVtcGxhdGUgOiBmYWxzZSxcbiAgICAgIGRlcHNVcGdyYWRlOiBvcHRpb25zLmdpdGh1YkVuYWJsZWQgJiYgb3B0aW9ucy5kZXBzVXBncmFkZSA/IG9wdGlvbnMuZGVwc1VwZ3JhZGUgOiBmYWxzZSxcbiAgICAgIHNhbXBsZUNvZGU6IG9wdGlvbnMuc2FtcGxlQ29kZUVuYWJsZWQgJiYgb3B0aW9ucy5zYW1wbGVDb2RlID8gb3B0aW9ucy5zYW1wbGVDb2RlIDogZmFsc2UsXG4gICAgfTtcbiAgfVxufVxuIl19
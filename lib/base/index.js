"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./config"), exports);
__exportStar(require("./config/commitlint"), exports);
__exportStar(require("./config/devcontainer"), exports);
__exportStar(require("./config/eslint"), exports);
__exportStar(require("./config/git"), exports);
__exportStar(require("./config/github"), exports);
__exportStar(require("./config/husky"), exports);
__exportStar(require("./config/jest"), exports);
__exportStar(require("./config/npm"), exports);
__exportStar(require("./config/options"), exports);
__exportStar(require("./project"), exports);
__exportStar(require("./config/prettier"), exports);
__exportStar(require("./config/typescript"), exports);
__exportStar(require("./config/vscode"), exports);
__exportStar(require("./config/samplecode"), exports);
__exportStar(require("./config/issues"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYmFzZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXlCO0FBQ3pCLHNEQUFvQztBQUNwQyx3REFBc0M7QUFDdEMsa0RBQWdDO0FBQ2hDLCtDQUE2QjtBQUM3QixrREFBZ0M7QUFDaEMsaURBQStCO0FBQy9CLGdEQUE4QjtBQUM5QiwrQ0FBNkI7QUFDN0IsbURBQWlDO0FBQ2pDLDRDQUEwQjtBQUMxQixvREFBa0M7QUFDbEMsc0RBQW9DO0FBQ3BDLGtEQUFnQztBQUNoQyxzREFBb0M7QUFDcEMsa0RBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9jb25maWcnO1xuZXhwb3J0ICogZnJvbSAnLi9jb25maWcvY29tbWl0bGludCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZy9kZXZjb250YWluZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jb25maWcvZXNsaW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29uZmlnL2dpdCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZy9naXRodWInO1xuZXhwb3J0ICogZnJvbSAnLi9jb25maWcvaHVza3knO1xuZXhwb3J0ICogZnJvbSAnLi9jb25maWcvamVzdCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZy9ucG0nO1xuZXhwb3J0ICogZnJvbSAnLi9jb25maWcvb3B0aW9ucyc7XG5leHBvcnQgKiBmcm9tICcuL3Byb2plY3QnO1xuZXhwb3J0ICogZnJvbSAnLi9jb25maWcvcHJldHRpZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jb25maWcvdHlwZXNjcmlwdCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZy92c2NvZGUnO1xuZXhwb3J0ICogZnJvbSAnLi9jb25maWcvc2FtcGxlY29kZSc7XG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZy9pc3N1ZXMnO1xuIl19
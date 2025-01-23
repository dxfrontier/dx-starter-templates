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
__exportStar(require("./config/commitlint"), exports);
__exportStar(require("./config/devcontainer"), exports);
__exportStar(require("./config/eslint"), exports);
__exportStar(require("./config/jest"), exports);
__exportStar(require("./config/git"), exports);
__exportStar(require("./config/github"), exports);
__exportStar(require("./config/husky"), exports);
__exportStar(require("./config/npm"), exports);
__exportStar(require("./project"), exports);
__exportStar(require("./config/prettier"), exports);
__exportStar(require("./config/vscode"), exports);
__exportStar(require("./typescript"), exports);
__exportStar(require("./config/samplecode"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2FwLXNlcnZpY2UvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFvQztBQUNwQyx3REFBc0M7QUFDdEMsa0RBQWdDO0FBQ2hDLGdEQUE4QjtBQUM5QiwrQ0FBNkI7QUFDN0Isa0RBQWdDO0FBQ2hDLGlEQUErQjtBQUMvQiwrQ0FBNkI7QUFDN0IsNENBQTBCO0FBQzFCLG9EQUFrQztBQUNsQyxrREFBZ0M7QUFDaEMsK0NBQTZCO0FBQzdCLHNEQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vY29uZmlnL2NvbW1pdGxpbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb25maWcvZGV2Y29udGFpbmVyJztcbmV4cG9ydCAqIGZyb20gJy4vY29uZmlnL2VzbGludCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZy9qZXN0JztcbmV4cG9ydCAqIGZyb20gJy4vY29uZmlnL2dpdCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZy9naXRodWInO1xuZXhwb3J0ICogZnJvbSAnLi9jb25maWcvaHVza3knO1xuZXhwb3J0ICogZnJvbSAnLi9jb25maWcvbnBtJztcbmV4cG9ydCAqIGZyb20gJy4vcHJvamVjdCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZy9wcmV0dGllcic7XG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZy92c2NvZGUnO1xuZXhwb3J0ICogZnJvbSAnLi90eXBlc2NyaXB0JztcbmV4cG9ydCAqIGZyb20gJy4vY29uZmlnL3NhbXBsZWNvZGUnO1xuIl19
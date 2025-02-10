"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HuskyConfigJsii = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../../base");
/**
 * Implementing all relevant Husky configuration for the Jsii project.
 */
class HuskyConfigJsii extends base_1.HuskyConfigBase {
    get configFile() {
        return {
            ...super.configFile,
            '.husky/pre-push': [
                'npx projen build',
                '# This will restore staged the modified files by running `npx projen`',
                'git checkout -- cliff.toml package.json package-lock.json',
            ],
        };
    }
}
exports.HuskyConfigJsii = HuskyConfigJsii;
_a = JSII_RTTI_SYMBOL_1;
HuskyConfigJsii[_a] = { fqn: "@dxfrontier/projen-template-projects.HuskyConfigJsii", version: "0.5.4" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVza3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvanNpaS9jb25maWcvaHVza3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQ0FBNkM7QUFHN0M7O0dBRUc7QUFDSCxNQUFhLGVBQWdCLFNBQVEsc0JBQWU7SUFDbEQsSUFBdUIsVUFBVTtRQUMvQixPQUFPO1lBQ0wsR0FBRyxLQUFLLENBQUMsVUFBVTtZQUNuQixpQkFBaUIsRUFBRTtnQkFDakIsa0JBQWtCO2dCQUNsQix1RUFBdUU7Z0JBQ3ZFLDJEQUEyRDthQUM1RDtTQUNGLENBQUM7SUFDSixDQUFDOztBQVZILDBDQVdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHVza3lDb25maWdCYXNlIH0gZnJvbSAnLi4vLi4vYmFzZSc7XG5pbXBvcnQgeyBDb25maWdGaWxlIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcyc7XG5cbi8qKlxuICogSW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBIdXNreSBjb25maWd1cmF0aW9uIGZvciB0aGUgSnNpaSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgSHVza3lDb25maWdKc2lpIGV4dGVuZHMgSHVza3lDb25maWdCYXNlIHtcbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBjb25maWdGaWxlKCk6IENvbmZpZ0ZpbGUge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdXBlci5jb25maWdGaWxlLFxuICAgICAgJy5odXNreS9wcmUtcHVzaCc6IFtcbiAgICAgICAgJ25weCBwcm9qZW4gYnVpbGQnLFxuICAgICAgICAnIyBUaGlzIHdpbGwgcmVzdG9yZSBzdGFnZWQgdGhlIG1vZGlmaWVkIGZpbGVzIGJ5IHJ1bm5pbmcgYG5weCBwcm9qZW5gJyxcbiAgICAgICAgJ2dpdCBjaGVja291dCAtLSBjbGlmZi50b21sIHBhY2thZ2UuanNvbiBwYWNrYWdlLWxvY2suanNvbicsXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
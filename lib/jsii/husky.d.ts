import { HuskyBase, TypeScriptProjectBase } from '../base';
/**
 * Husky builder implementing all relevant configuration for the Jsii project.
 */
export declare class HuskyJsii extends HuskyBase {
    /**
     * Initializes the Husky builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure Husky for.
     */
    constructor(project: TypeScriptProjectBase);
    /**
     * Entries in `.gitattributes` are already done by `.projenrc.ts`
     * @protected
     * @override
     */
    protected addGitAttributes(): void;
}

import { JsiiProject } from 'projen/lib/cdk';
import { Builder, TypeScriptProjectBase } from '../base';
/**
 * Mimics the builder registry behavior for a JsiiProject, adding registry and pre-/postSynthesize hooks.
 */
export function mimicRegistryHooks(project: JsiiProject) {
  // Mimi builder registry from base project as this JsiiProject is not inherited from base project.
  (project as unknown as TypeScriptProjectBase).builderRegistry = [];
  (project as unknown as TypeScriptProjectBase).registerBuilder = (builder: Builder): void => {
    (project as unknown as TypeScriptProjectBase).builderRegistry?.push(builder);
  };
  (project as unknown as TypeScriptProjectBase).findBuilderByName = (name: string): Builder | undefined => {
    return (project as unknown as TypeScriptProjectBase).builderRegistry.find(
      (builder: Builder): boolean => builder.constructor.name === name,
    );
  };

  // JsiiProject does ot has pre-/postSynthesize so we need to add it.
  (project as unknown as TypeScriptProjectBase).preSynthesize = (): void => {
    for (const builder of (project as unknown as TypeScriptProjectBase).builderRegistry) {
      builder.preSynthesize();
    }
  };
  (project as unknown as TypeScriptProjectBase).postSynthesize = (): void => {
    for (const builder of (project as unknown as TypeScriptProjectBase).builderRegistry) {
      builder.postSynthesize();
    }
  };
}

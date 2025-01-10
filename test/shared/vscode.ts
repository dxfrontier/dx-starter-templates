import { SynthOutput } from 'projen/lib/util/synth';
import * as common from '../../test/shared/common';

/**
 * Validates that VsCode settings are set properly.
 * @param snapshot Synthesized project output.
 */
export function testSettings(snapshot: SynthOutput): void {
  const expectedSettings = {
    'editor.tabSize': 2,
    'editor.stickyTabStops': true,
    'typescript.inlayHints.parameterNames.enabled': 'all',
    'typescript.inlayHints.enumMemberValues.enabled': true,
    'typescript.inlayHints.variableTypes.enabled': true,
    'typescript.inlayHints.propertyDeclarationTypes.enabled': true,
    'javascript.inlayHints.parameterNames.suppressWhenArgumentMatchesName': false,
    'javascript.inlayHints.variableTypes.suppressWhenTypeMatchesName': false,
    'typescript.inlayHints.functionLikeReturnTypes.enabled': true,
    'typescript.inlayHints.parameterTypes.enabled': true,
    'editor.inlayHints.fontSize': 10,
    'editor.inlayHints.padding': true,
    'editor.formatOnSave': true,
    'editor.formatOnPaste': true,
  };
  expect(snapshot['.vscode/settings.json']).toStrictEqual(expectedSettings);
}

/**
 * Validates that project related files are added to .gitattributes and defined as linguist-generated.
 * @param snapshot Synthesized project output.
 */
export function testGitAttributes(snapshot: SynthOutput): void {
  const patterns: RegExp[] = [/\/\.vscode\/settings\.json linguist-generated( $|\s|$)/m];

  common.testGitAttributes(snapshot, patterns);
}

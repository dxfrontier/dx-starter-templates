import { ConfigRegistry } from '../../src/types';

/**
 * Validates that a config is registered in project registry.
 * @param configName Name of the config to check for in the registry.
 * @param registry Configs registry to search through for the specified config.
 */
export function testConfigInRegistry(configName: string, registry: ConfigRegistry): void {
  const hasConfig: boolean = registry.has(configName);
  expect(hasConfig).toBe(true);
}


// /**
//  * Validates that project related files are added to .gitattributes and defined as linguist-generated.
//  * @param snapshot Synthesized project output.
//  * @param expectedPatterns List of expected file patterns to test for.
//  */
// export function testGitAttributes(snapshot: SynthOutput, expectedPatterns: RegExp[] = []): void {
//   const standardPatterns: RegExp[] = [/\/tsconfig\.dev\.json linguist-generated( $|\s|$)/m];

//   const patterns: RegExp[] = expectedPatterns.length ? expectedPatterns : standardPatterns;
//   common.testGitAttributes(snapshot, patterns);
// }

// /**
//  * Validates that project related files are added to .gitattributes and defined as linguist-generated.
//  * @param snapshot Synthesized project output.
//  * @param patterns - Regular expressions to match against the .gitattributes file content.
//  */
// export function testGitAttributes(snapshot: SynthOutput, patterns: RegExp[]): void {
//   for (const pattern of patterns) {
//     expect(snapshot['.gitattributes']).toMatch(pattern);
//   }
// }

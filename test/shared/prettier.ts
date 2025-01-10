import { SynthOutput } from 'projen/lib/util/synth';

/**
 * Validates that prettier settings are set properly.
 * @param snapshot Synthesized project output.
 */
export function testSettings(snapshot: SynthOutput): void {
  const standardSettings = {
    overrides: [
      {
        files: '*.*',
        options: {
          semi: true,
          trailingComma: 'all',
          singleQuote: true,
          printWidth: 120,
          tabWidth: 2,
        },
      },
    ],
  };
  expect(snapshot['.prettierrc.json']).toStrictEqual(standardSettings);
}

// /**
//  * Validates that ignore patterns matches expected content.
//  * @param snapshot Synthesized project output.
//  */
// export function testIgnore(snapshot: SynthOutput): void {
//   const gitattributesEntries: any = snapshot['.gitattributes']
//     .split('\n')
//     .filter((line: any): any => line.includes('linguist-generated'))
//     .map((line: any): any => line.split(' ')[0]); // Extract the file paths ignoring "linguist-generated"

//   const prettierignoreEntries: any = snapshot['.prettierignore']
//     .split('\n')
//     .map((line: any): any => line.trim()) // Remove extra spaces
//     .filter((line: any): boolean => line !== '' && !line.startsWith('#')); // Ignore empty lines and comments

//   expect(gitattributesEntries.sort()).toEqual(prettierignoreEntries.sort());
// }

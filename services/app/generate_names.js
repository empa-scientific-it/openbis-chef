// Define the list of names
import jquery from 'jquery';

import * as V3API from './lib/v3api/js/V3API.esm.js';
import fs from 'fs';

const exportStatements: string[] = [];



for (const key in V3API) {
  console.log(key)
  exportStatements.push(`export const ${key} = V3API.${key};`);
}

const exportCode = exportStatements.join('\n');

const script = `import * as V3API from 'v3api/V3API.esm';\n${exportCode}`

fs.writeFileSync('dto.ts', script);

// import names from "./moduleNames.json" assert { type: "json" };
// import  fs from "fs";

// const uniqueNames = new Set(names.names);

// // Output file
// const outputFilePath = "dto.ts";

// const newNames = names.names.map((name) => [name, `${name}Dto`]);

// const exports = newNames.map(([name, dtoName]) => {
//   return [name, dtoName, `const ${dtoName}: ${name} = V3API.${name};`];
// });

// const allImports = exports
//   .map(([name, dtoName, importStatement]) => importStatement)
//   .join("\n");

// const allExports = exports
//   .map(([name, dtoName, exportStatement]) => {
//     return `${dtoName} as ${name}`;
//   })
//   .join(",\n");

// const typeImports = names.names
//   .map((name) => `import {${name}} from '@src/types/openbis';`)
//   .join("\n");

// const constOut = `// Auto-generated file\nimport * as V3API from 'v3api/V3API.esm'\n;${typeImports}\n${allImports}\n\nexport {\n${allExports}\n}\n`;

// // Start writing to the output file

// await fs.writeFileSync(outputFilePath, constOut);

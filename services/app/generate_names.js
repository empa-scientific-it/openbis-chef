import fs from "fs/promises";

// Define the list of names

import names from "./moduleNames.json" assert { type: "json" };
import { type } from "os";

// Output file
const outputFilePath = "dto.ts";

const newNames = names.names.map((name) => [name, `${name}Dto`]);

const exports = newNames.map(([name, dtoName]) => {
  return [name, dtoName, `const ${dtoName}: ${name} = V3API.${name};`];
});

const allImports = exports
  .map(([name, dtoName, importStatement]) => importStatement)
  .join("\n");

const allExports = exports
  .map(([name, dtoName, exportStatement]) => {
    return `${dtoName} as ${name}`;
  })
  .join(",\n");

const typeImports = names.names
  .map((name) => `import {${name}} from '@src/types/openbis';`)
  .join("\n");

const constOut = `// Auto-generated file\nimport V3API from 'v3api/V3API.esm'\n;${typeImports}\n${allImports}\n\nexport {\n${allExports}\n}\n`;

// Start writing to the output file

await fs.writeFile(outputFilePath, constOut);

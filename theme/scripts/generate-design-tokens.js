import { writeFileSync } from 'fs';
import colors from '../src/theme/colors.js';

let cssContent = ':root {\n';

for (const [category, values] of Object.entries(colors)) {
  for (const [shade, color] of Object.entries(values)) {
    cssContent += `  --color-${category}-${shade}: ${color};\n`;
  }
  cssContent += `\n`;
}

cssContent += '}';

writeFileSync('design-tokens.css', cssContent);

const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const searchString = 'ProfileForge';
const replaceString = 'ProfileForge';

const searchString2 = 'ProfileForge';
const replaceString2 = 'ProfileForge';

const searchString3 = 'ProfileForge';
const replaceString3 = 'ProfileForge';

function walkAndReplace(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === 'dist' || file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.svg')) {
      continue;
    }
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkAndReplace(fullPath);
    } else {
      let content = fs.readFileSync(fullPath, 'utf8');
      let newContent = content
        .replace(/ProfileForge/g, 'ProfileForge')
        .replace(/ProfileForge/g, 'ProfileForge')
        .replace(/ProfileForge/g, 'ProfileForge');
        
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

walkAndReplace(rootDir);
console.log('Renaming complete!');

const fs = require('fs');
const path = require('path');

const rootDir = __dirname;

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
        .replace(/ProfileForge/gi, 'ProfileForge')
        .replace(/ProfileForge/gi, 'ProfileForge')
        .replace(/ProfileForge/gi, 'ProfileForge');
        
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

walkAndReplace(rootDir);
console.log('Renaming to ProfileForge complete!');

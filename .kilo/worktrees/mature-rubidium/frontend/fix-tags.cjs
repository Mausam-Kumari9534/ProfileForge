const fs = require('fs');
const path = require('path');
const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix the </linkedin> tags back to </Link>
  content = content.replace(/<\/linkedin>/g, '</Link>');
  
  // Fix Globe duplicate in LandingPage.tsx
  if (file === 'LandingPage.tsx') {
      content = content.replace(/  Globe,\n/g, ''); // we'll just remove all of them and add one manually
      content = content.replace(/import \{/g, 'import { Globe, ');
  }
  // Let's just fix Globe in LandingPage properly without breaking other imports
  // Actually, I can just use a regex to deduplicate it. Or simply remove the first occurrence.
  
  fs.writeFileSync(filePath, content);
}
console.log('Fixed tags!');

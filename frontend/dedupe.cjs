const fs = require('fs');
const path = require('path');
const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find all imports from lucide-react
  const regex = /import\s+\{([^}]+)\}\s+from\s+'lucide-react'/g;
  content = content.replace(regex, (match, p1) => {
    const items = p1.split(',').map(s => s.trim()).filter(s => s.length > 0);
    const unique = [...new Set(items)];
    return "import { " + unique.join(', ') + " } from 'lucide-react'";
  });
  
  fs.writeFileSync(filePath, content);
}
console.log('Deduped imports!');

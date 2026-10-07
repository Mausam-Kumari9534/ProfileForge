const fs = require('fs');
const path = require('path');

function replaceIcon(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes('import { LogoIcon }')) {
    content = content.replace(/(import .*?;)/, '$1\nimport { LogoIcon } from \'./LogoIcon\';');
  }
  
  // Replace Terminal with LogoIcon anywhere it looks like it's used as the main logo (within a gradient box)
  content = content.replace(/<Terminal className="h-5 w-5 text-white" \/>/g, '<LogoIcon className="h-5 w-5 text-white" />');
  content = content.replace(/<Terminal className="h-4 w-4 text-white" \/>/g, '<LogoIcon className="h-4 w-4 text-white" />');
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated: ${filePath}`);
}

replaceIcon(path.join(__dirname, 'src/components/LandingPage.tsx'));
replaceIcon(path.join(__dirname, 'src/components/Dashboard.tsx'));

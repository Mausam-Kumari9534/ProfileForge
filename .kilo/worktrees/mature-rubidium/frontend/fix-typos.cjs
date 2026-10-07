const fs = require('fs');
const path = require('path');
const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Undo the case-insensitive 'Linkedin' -> 'Link' mistake
  content = content.replace(/LinkUrl/g, 'linkedinUrl');
  content = content.replace(/Link\.com/g, 'linkedin.com');
  content = content.replace(/\/Link/g, '/linkedin');
  content = content.replace(/'Link'/g, "'linkedin'");
  content = content.replace(/"Link"/g, '"linkedin"');
  content = content.replace(/Link profile/g, 'LinkedIn profile');
  content = content.replace(/Connect Link/g, 'Connect LinkedIn');
  content = content.replace(/GitBranch and Link/g, 'GitHub and LinkedIn');
  
  // Fix the GitBranchUrl issue
  content = content.replace(/GitBranchUrl/g, 'githubUrl');
  content = content.replace(/GitBranchUsername/g, 'githubUsername');
  
  // Fix the icon imports for lucide
  // Only replace Link from lucide imports
  content = content.replace(/GitBranch, Link, /g, 'GitBranch, Globe, ');
  content = content.replace(/  Link,/g, '  Globe,');
  
  content = content.replace(/<Link className/g, '<Globe className');
  content = content.replace(/<Link \/>/g, '<Globe />');
  
  fs.writeFileSync(filePath, content);
}
console.log('Done!');

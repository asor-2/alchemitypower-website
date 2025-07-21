const obfuscator = require('javascript-obfuscator');
const fs = require('fs');
const path = require('path');

const jsDir = path.join(__dirname, '../build/static/js');

if (!fs.existsSync(jsDir)) {
  console.error('JS build directory does not exist:', jsDir);
  process.exit(1);
}

fs.readdirSync(jsDir).forEach(file => {
  if (file.endsWith('.js')) {
    const filePath = path.join(jsDir, file);
    const code = fs.readFileSync(filePath, 'utf8');
    const obfuscated = obfuscator.obfuscate(code, {
      compact: true,
      controlFlowFlattening: true,
    }).getObfuscatedCode();
    fs.writeFileSync(filePath, obfuscated, 'utf8');
    console.log('Obfuscated', file);
  }
}); 
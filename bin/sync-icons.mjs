import fs from 'fs';
import glob from 'glob';
import { load } from 'cheerio';

const iconsSvgBasePath = 'src/icons';
const iconsIndexFilePath = `${iconsSvgBasePath}/index.tsx`;

if (!fs.existsSync(iconsSvgBasePath)) {
  fs.mkdirSync(iconsSvgBasePath, {
    recursive: true,
  });
}

const filenames = glob.sync(`${iconsSvgBasePath}/**/*.svg`);
glob.sync(iconsIndexFilePath).forEach(filename =>
  fs.unlink(filename, () => {
    console.info(`Cleared - ${filename}`);
  }),
);

const svgFiles = [];

for (const filename of filenames) {
  const baseFilename = filename.substr(iconsSvgBasePath.length + 1);
  const fileName = baseFilename.replace(/\.svg/, '');
  const pieces = fileName.split(/\//);

  if (pieces.length === 0) {
    console.warn(`Icon name "${baseFilename}" doesn't match naming convention`);
    continue;
  }

  const data = fs.readFileSync(filename, { encoding: 'utf-8' });
  const $ = load(data, { xmlMode: true });
  const svg = $('svg').first();

  svgFiles.push({
    fileName,
    width: svg.attr('width'),
    height: svg.attr('height'),
  });
}

const imports = svgFiles.map(({ fileName }) => `import ${fileName}Icon from './${fileName}.svg';`).join('\n');
const exports = svgFiles.map((svg) => {
  const { fileName, width, height } = svg;
  return `export const ${fileName}: FC<SvgProps> = (props) => <${fileName}Icon width={scaled(${width})} height={scaled(${height})} {...props} />;`;
}).join('\n');


fs.writeFile(
  iconsIndexFilePath,
  `// DO NOT EDIT THIS FILE. This file auto-generated, use \`yarn sync-icons\` to update icons
import React, { FC } from 'react';
import { SvgProps } from 'react-native-svg';

import { scaled } from '../components/scaler';

${imports}

${exports}

`,
  () => {
    console.info('Success!');
  },
);

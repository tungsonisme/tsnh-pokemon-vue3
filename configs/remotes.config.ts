import * as fs from 'fs';

const EXPOSES_DIR = 'src/exposes';

const initializeExposes = () => {
  const result: Record<string, string> = {};
  const files = fs.readdirSync(EXPOSES_DIR);

  files.forEach((fileName) => {
    const componentName = fileName.split('.vue')[0];
    result[`./${componentName}`] = `./${EXPOSES_DIR}/${componentName}.vue`;
  });

  return result;
};

export default initializeExposes;

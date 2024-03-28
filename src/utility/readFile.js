import fs from 'node:fs/promises';

export const readFile = async (filename) => {
  try {
    return fs.readFile(filename, { encoding: 'utf8' });
  } catch (err) {
    console.log('Reading file', { filename }, 'caused an error', err.message);
  }
};

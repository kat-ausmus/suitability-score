import { lstatSync } from 'fs';

const pathAndFileNameStr = 'path and filename';
const validateFilePath = async (filename) => {
  try {
    const stat = await lstatSync(filename.trim());
    if (stat.isFile()) {
      return true;
    } else {
      return `${filename} is not a file!`;
    }
  } catch (err) {
    return `Error: ${filename} is not a valid ${pathAndFileNameStr}`;
  }
};

export const cliPrompt = {
  driverFile: {
    message: `Driver ${pathAndFileNameStr}:`,
    default: './resources/driverNames.txt',
    validate: validateFilePath,
  },
  addressFile: {
    message: `Destination Address ${pathAndFileNameStr}:`,
    default: './resources/destinationAddresses.txt',
    validate: validateFilePath,
  },
};

import { lstatSync } from 'fs';

const pathname = 'pathname';

/**
 * This function is called by cliPrompt (@inquirer/prompts package)
 *
 * @param filename
 * @returns {string|boolean}
 */
const validateFilePath = (filename) => {
  try {
    const stat = lstatSync(filename.trim());
    if (stat.isFile()) {
      return true;
    } else {
      return `${filename} is not a file!`;
    }
  } catch (err) {
    return `Error: ${filename} is not a valid ${pathname}`;
  }
};

export const cliPrompt = {
  driverFile: {
    message: `Driver ${pathname}:`,
    default: './resources/driverNames.txt',
    validate: validateFilePath,
  },
  addressFile: {
    message: `Destination Address ${pathname}:`,
    default: './resources/destinationAddresses.txt',
    validate: validateFilePath,
  },
};
